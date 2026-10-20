#!/usr/bin/env python3
import os
import struct
import zlib
from collections import deque
import subprocess

OUT_DIR = '/Users/miloslavboudnik/Documents/GitHub/bang-pravidla/assets/icons'
os.makedirs(OUT_DIR, exist_ok=True)

def save_png_rgba(filename, width, height, rgba_data):
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)
    
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    raw = bytearray()
    for y in range(height):
        raw.append(0)
        raw.extend(rgba_data[y * width * 4 : (y + 1) * width * 4])
    idat = zlib.compress(bytes(raw), 9)
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')
    with open(filename, 'wb') as f:
        f.write(png)

def load_bmp(path):
    with open(path, 'rb') as f:
        data = f.read()
    offset = struct.unpack('<I', data[10:14])[0]
    w = struct.unpack('<i', data[18:22])[0]
    h = struct.unpack('<i', data[22:26])[0]
    # If h is negative, top-down
    top_down = h < 0
    h = abs(h)
    stride = ((w * 3 + 3) // 4) * 4
    return data, offset, w, h, stride, top_down

def extract_and_make_transparent(bmp_tuple, crop_rect, out_filename, target_size=128):
    data, offset, src_w, src_h, stride, top_down = bmp_tuple
    cx, cy, cw, ch = crop_rect
    
    pixels = []
    for y in range(cy, cy + ch):
        actual_y = y if top_down else (src_h - 1 - y)
        row_start = offset + actual_y * stride + cx * 3
        for x in range(cw):
            b = data[row_start + x * 3]
            g = data[row_start + x * 3 + 1]
            r = data[row_start + x * 3 + 2]
            pixels.append([r, g, b, 255])
            
    # Flood-fill background from 4 outer edges
    visited = [False] * (cw * ch)
    queue = deque()
    # Seed top and bottom edges
    for x in range(cw):
        queue.append((x, 0))
        queue.append((x, ch - 1))
    # Seed left and right edges
    for y in range(ch):
        queue.append((0, y))
        queue.append((cw - 1, y))
        
    while queue:
        x, y = queue.popleft()
        idx = y * cw + x
        if visited[idx]:
            continue
        visited[idx] = True
        
        r, g, b, _ = pixels[idx]
        brightness = (r + g + b) / 3.0
        if brightness > 232:
            pixels[idx][3] = 0
            for nx, ny in ((x+1, y), (x-1, y), (x, y+1), (x, y-1)):
                if 0 <= nx < cw and 0 <= ny < ch and not visited[ny * cw + nx]:
                    queue.append((nx, ny))
        elif brightness > 195:
            # Soft anti-aliasing on borders
            alpha = int(((255 - brightness) / 37.0) * 255)
            pixels[idx][3] = min(pixels[idx][3], max(0, alpha))

    # Save temp high-res PNG
    temp_path = f"/tmp/temp_slice_{os.path.basename(out_filename)}"
    rgba_bytes = bytearray()
    for r, g, b, a in pixels:
        rgba_bytes.extend([r, g, b, a])
        
    save_png_rgba(temp_path, cw, ch, rgba_bytes)
    
    # Resize cleanly to target_size using sips
    final_path = os.path.join(OUT_DIR, out_filename)
    cmd = ["sips", "-z", str(target_size), str(target_size), temp_path, "--out", final_path]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if os.path.exists(temp_path):
        os.remove(temp_path)
    print(f"Exported: {out_filename} ({target_size}x{target_size})")

def main():
    print("Loading BMP source files...")
    grid1 = load_bmp('/tmp/grid1.bmp')
    grid2 = load_bmp('/tmp/grid2.bmp')
    sheriff = load_bmp('/tmp/sheriff.bmp')

    # Grid 1: 1024x1024 (4x4, 256x256)
    grid1_icons = [
        # row 0
        ((0, 0, 256, 256), 'icon_beer.png'),
        ((256, 0, 256, 256), 'icon_jail.png'),
        ((512, 0, 256, 256), 'icon_whip.png'),
        ((768, 0, 256, 256), 'icon_barrel.png'),
        # row 1
        ((0, 256, 256, 256), 'icon_cock.png'),
        ((256, 256, 256, 256), 'icon_stagecoach.png'),
        ((512, 256, 256, 256), 'icon_knife.png'),
        ((768, 256, 256, 256), 'icon_brawl.png'),
        # row 2
        ((0, 512, 256, 256), 'icon_indians.png'),
        ((256, 512, 256, 256), 'icon_graveyard.png'),
        ((512, 512, 256, 256), 'icon_gatling.png'),
        ((768, 512, 256, 256), 'icon_horse.png'),
        # row 3
        ((0, 768, 256, 256), 'icon_coins.png'),
        ((256, 768, 256, 256), 'icon_dynamite.png'),
        ((512, 768, 256, 256), 'icon_train.png'),
        ((768, 768, 256, 256), 'icon_rattlesnake.png'),
    ]

    for rect, fname in grid1_icons:
        extract_and_make_transparent(grid1, rect, fname, target_size=128)

    # Grid 2: 1264x848 (2 rows x 3 cols: 421x424)
    grid2_icons = [
        ((0, 0, 421, 424), 'icon_gunshot.png'),
        ((421, 0, 421, 424), 'icon_ricochet.png'),
        ((842, 0, 422, 424), 'icon_bell.png'),
        ((0, 424, 421, 424), 'icon_saloon.png'),
        ((421, 424, 421, 424), 'icon_wilhelm.png'),
        ((842, 424, 422, 424), 'icon_cards.png'),
    ]

    for rect, fname in grid2_icons:
        extract_and_make_transparent(grid2, rect, fname, target_size=128)

    # Sheriff Badge: 1024x1024
    extract_and_make_transparent(sheriff, (0, 0, 1024, 1024), 'icon_sheriff.png', target_size=128)

    print("All icons successfully generated in assets/icons/!")

if __name__ == '__main__':
    main()
