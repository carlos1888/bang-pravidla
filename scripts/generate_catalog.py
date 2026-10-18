#!/usr/bin/env python3
import os
import struct
import json

OUTPUT_DIR = '/Users/miloslavboudnik/Documents/GitHub/bang-pravidla/karty'

readme_path = os.path.join(OUTPUT_DIR, 'README.md')
json_path = os.path.join(OUTPUT_DIR, 'prehled_karet.json')

all_cards = []
folder_counts = {}

for root, dirs, files in sorted(os.walk(OUTPUT_DIR)):
    folder_name = os.path.basename(root)
    if folder_name == 'karty':
        continue
    png_files = [f for f in files if f.endswith('.png')]
    if not png_files:
        continue
    folder_counts[folder_name] = len(png_files)
    
    for f in sorted(png_files):
        path = os.path.join(root, f)
        size_bytes = os.path.getsize(path)
        with open(path, 'rb') as fp:
            data = fp.read(24)
        if data.startswith(b'\x89PNG\r\n\x1a\n') and len(data) >= 24:
            w, h = struct.unpack('>II', data[16:24])
        else:
            w, h = 0, 0
            
        title = f[:-4]
        all_cards.append({
            'folder': folder_name,
            'filename': f,
            'title': title,
            'path': path,
            'width': w,
            'height': h,
            'size_bytes': size_bytes,
            'size_kb': round(size_bytes / 1024, 1)
        })

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(all_cards, f, ensure_ascii=False, indent=2)

with open(readme_path, 'w', encoding='utf-8') as f:
    f.write("# BANG! — Karty stažené z wiki\n\n")
    f.write("Zdroj: [https://bang-cardgame.fandom.com/wiki/List_Of_Cards](https://bang-cardgame.fandom.com/wiki/List_Of_Cards)\n\n")
    f.write(f"Celkem úspěšně staženo a převedeno: **{len(all_cards)}** karet ve standardním formátu PNG.\n\n")
    f.write("## Přehled složek rozšíření:\n\n")
    for d, count in sorted(folder_counts.items()):
        f.write(f"- **`{d}/`**: {count} karet\n")
    f.write("\n---\n\n")
    
    current_folder = None
    for item in all_cards:
        if item['folder'] != current_folder:
            current_folder = item['folder']
            count = folder_counts[current_folder]
            f.write(f"### 📁 `{current_folder}` ({count} karet)\n\n")
            f.write("| Karta | Soubor | Rozměry | Velikost |\n")
            f.write("| :--- | :--- | :---: | :---: |\n")
        f.write(f"| **{item['title']}** | `{item['filename']}` | {item['width']}×{item['height']} | {item['size_kb']} kB |\n")
    f.write("\n")

print(f"Total cards: {len(all_cards)}")
for f, c in sorted(folder_counts.items()):
    print(f"  {f}: {c}")
