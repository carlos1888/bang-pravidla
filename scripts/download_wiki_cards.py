#!/usr/bin/env python3
"""
Download all BANG! card images from bang-cardgame.fandom.com/wiki/List_Of_Cards
Organizes by expansion folder and names each card cleanly according to the card name.
"""

import os
import re
import html
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
import struct
import json

HTML_PATH = '/Users/miloslavboudnik/.gemini/antigravity/brain/91f1845f-0854-4d65-9c03-f0d85b6ceab3/.system_generated/steps/1273/content.md'
OUTPUT_DIR = '/Users/miloslavboudnik/Documents/GitHub/bang-pravidla/karty'

EXPANSION_DIRS = {
    'BANG!': '01_Zakladni_hra',
    'DODGE CITY': '02_Mesto_duchu',
    'GOLD RUSH': '03_Zlata_horecka',
    'ARMED & DANGEROUS': '04_Ozbrojeni_a_nebezpecni',
    'THE GREAT TRAIN ROBBERY': '05_Velka_vlakova_loupez',
    'THE VALLEY OF SHADOWS': '06_Udoli_stinu',
    'HIGH NOON': '07_Prave_poledne',
    'A FISTFUL OF CARDS': '08_Pest_plna_karet',
    'WILD WEST SHOW': '09_Divoky_zapad',
    'LEGENDS': '10_Legendy',
    'Extra cards': '11_Extra_karty'
}

def sanitize_filename(name):
    # Remove invalid filesystem characters
    name = name.replace(':', '-').replace('/', '-').replace('\\', '-')
    name = re.sub(r'[\"\*\?<>\|]', '', name)
    name = re.sub(r'\s+', ' ', name).strip()
    # Fix trailing open paren if any
    if name.count('(') > name.count(')'):
        name += ')'
    return name

def parse_cards():
    with open(HTML_PATH, 'r', encoding='utf-8') as f:
        raw_html = f.read()

    tokens = re.split(r'(<h[23][^>]*>.*?</h[23]>)', raw_html)
    current_section = 'Unknown'
    cards = []

    for token in tokens:
        h_match = re.search(r'<h[23][^>]*>(.*?)</h[23]>', token)
        if h_match:
            h_text = html.unescape(re.sub(r'<[^>]+>', '', h_match.group(1)).replace('[]', '').strip())
            if h_text in EXPANSION_DIRS:
                current_section = h_text
        else:
            figures = re.findall(r'<figure[^>]*>.*?</figure>', token, re.DOTALL)
            for fig in figures:
                a_match = re.search(r'<a\s+href=\"([^\"]+static\.wikia\.nocookie\.net[^\"]+)\"', fig)
                img_url = a_match.group(1) if a_match else None
                name_attr = re.search(r'data-image-name=\"([^\"]+)\"', fig)
                img_name = html.unescape(name_attr.group(1)) if name_attr else None
                cap_match = re.search(r'<p\s+class=\"caption\">(.*?)</p>', fig, re.DOTALL)
                caption = html.unescape(re.sub(r'<[^>]+>', '', cap_match.group(1))).strip() if cap_match else None
                
                card_title = caption or (img_name.rsplit('.', 1)[0] if img_name else 'unknown')
                
                # Full quality URL (remove scale-to-width-down if present)
                clean_url = img_url
                if clean_url:
                    clean_url = re.sub(r'/scale-to-width-down/\d+', '', clean_url)
                
                cards.append({
                    'section': current_section,
                    'dir': EXPANSION_DIRS.get(current_section, '99_Ostatni'),
                    'title': card_title,
                    'img_name': img_name,
                    'url': clean_url
                })
    return cards

def get_image_size(data):
    if data.startswith(b'\x89PNG\r\n\x1a\n') and len(data) >= 24:
        w, h = struct.unpack('>II', data[16:24])
        return w, h
    elif data.startswith(b'\xff\xd8'):  # JPEG
        pos = 2
        while pos < len(data) - 9:
            if data[pos] != 0xFF:
                break
            marker = data[pos + 1]
            if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
                h, w = struct.unpack('>HH', data[pos + 5:pos + 9])
                return w, h
            length = struct.unpack('>H', data[pos + 2:pos + 4])[0]
            pos += 2 + length
    elif data.startswith(b'RIFF') and len(data) >= 30 and data[8:12] == b'WEBP':
        if data[12:16] == b'VP8 ':
            w = (data[26] | (data[27] << 8)) & 0x3fff
            h = (data[28] | (data[29] << 8)) & 0x3fff
            return w, h
        elif data[12:16] == b'VP8L':
            b0, b1, b2, b3 = data[21:25]
            w = 1 + (((b1 & 0x3f) << 8) | b0)
            h = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6))
            return w, h
    return 0, 0

def download_one(card, idx, total):
    folder = os.path.join(OUTPUT_DIR, card['dir'])
    os.makedirs(folder, exist_ok=True)
    
    clean_name = sanitize_filename(card['title'])
    # If Legends character and not explicitly marked, append (Legend)
    if card['section'] == 'LEGENDS' and 'legend' not in clean_name.lower():
        clean_name += ' (Legend)'
        
    target_path = os.path.join(folder, f"{clean_name}.png")
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://bang-cardgame.fandom.com/wiki/List_Of_Cards',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
    }
    
    try:
        req = urllib.request.Request(card['url'], headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        
        # Write bytes directly to target file
        with open(target_path, 'wb') as f:
            f.write(data)
            
        size = get_image_size(data)
        return {
            'success': True,
            'title': card['title'],
            'section': card['section'],
            'dir': card['dir'],
            'filename': f"{clean_name}.png",
            'path': target_path,
            'size': size,
            'bytes': len(data),
            'url': card['url']
        }
    except Exception as e:
        return {
            'success': False,
            'title': card['title'],
            'section': card['section'],
            'dir': card['dir'],
            'filename': f"{clean_name}.png",
            'error': str(e),
            'url': card['url']
        }

def main():
    cards = parse_cards()
    print(f"Found {len(cards)} cards to download.")
    
    results = []
    failed = []
    
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(download_one, card, i, len(cards)): card for i, card in enumerate(cards)}
        for future in as_completed(futures):
            res = future.result()
            results.append(res)
            if res['success']:
                print(f"[{len(results)}/{len(cards)}] OK: {res['dir']} -> {res['filename']} ({res['size'][0]}x{res['size'][1]}, {round(res['bytes']/1024, 1)} kB)")
            else:
                print(f"[{len(results)}/{len(cards)}] FAILED: {res['title']} -> {res['error']}")
                failed.append(res)
                
    print(f"\nDownload summary: {len(cards) - len(failed)}/{len(cards)} succeeded.")
    if failed:
        print(f"Failed count: {len(failed)}")
        for f in failed:
            print("  ", f['title'], f['url'], f['error'])

    # Generate README in karty/
    readme_path = os.path.join(OUTPUT_DIR, 'README.md')
    by_dir = {}
    for r in results:
        if r['success']:
            d = r['dir']
            if d not in by_dir:
                by_dir[d] = []
            by_dir[d].append(r)
            
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write("# BANG! — Karty stažené z wiki\n\n")
        f.write("Zdroj: [https://bang-cardgame.fandom.com/wiki/List_Of_Cards](https://bang-cardgame.fandom.com/wiki/List_Of_Cards)\n\n")
        f.write(f"Celkem úspěšně staženo: **{len(cards) - len(failed)}** karet ve formátu PNG.\n\n")
        f.write("## Přehled složek rozšíření:\n\n")
        for d in sorted(by_dir.keys()):
            items = by_dir[d]
            f.write(f"- **`{d}/`**: {len(items)} karet\n")
        f.write("\n---\n\n")
        
        for d in sorted(by_dir.keys()):
            items = sorted(by_dir[d], key=lambda x: x['title'])
            f.write(f"### 📁 `{d}` ({len(items)} karet)\n\n")
            f.write("| Karta | Soubor | Rozměry | Velikost |\n")
            f.write("| :--- | :--- | :---: | :---: |\n")
            for item in items:
                title = item['title']
                fname = item['filename']
                dims = f"{item['size'][0]}×{item['size'][1]}"
                kb = f"{round(item['bytes'] / 1024, 1)} kB"
                f.write(f"| **{title}** | `{fname}` | {dims} | {kb} |\n")
            f.write("\n")

    # Generate JSON catalog in karty/prehled_karet.json
    json_path = os.path.join(OUTPUT_DIR, 'prehled_karet.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
            
    print(f"Catalog generated at: {readme_path}")
    print(f"JSON metadata generated at: {json_path}")

if __name__ == '__main__':
    main()
