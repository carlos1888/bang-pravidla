#!/usr/bin/env python3
import wave
import struct
import math
import os
import subprocess

RAW_DIR = '/tmp/bang_audio_raw_wav'
OUT_DIR = '/tmp/crafted_sounds'
os.makedirs(OUT_DIR, exist_ok=True)

def read_wav_segment(filename, start_sec, duration_sec):
    path = os.path.join(RAW_DIR, filename)
    with wave.open(path, 'rb') as w:
        nch = w.getnchannels()
        rate = w.getframerate()
        nframes = w.getnframes()
        
        start_frame = int(start_sec * rate)
        num_frames = int(duration_sec * rate)
        
        w.setpos(start_frame)
        raw = w.readframes(num_frames)
        samples = list(struct.unpack(f'<{len(raw)//2}h', raw))
        
        # If mono, convert to stereo
        if nch == 1:
            stereo = []
            for s in samples:
                stereo.extend([s, s])
            samples = stereo
            
        return samples, rate

def write_wav(filename, samples, rate):
    out_path = os.path.join(OUT_DIR, filename)
    with wave.open(out_path, 'wb') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(rate)
        raw = struct.pack(f'<{len(samples)}h', *samples)
        w.writeframes(raw)
    return out_path

def normalize(samples, target_peak=28000):
    max_val = max(abs(s) for s in samples) if samples else 0
    if max_val == 0:
        return samples
    gain = target_peak / max_val
    return [int(max(-32767, min(32767, s * gain))) for s in samples]

def apply_fades(samples, rate, fade_in_ms=10, fade_out_ms=50):
    n_in = int(fade_in_ms * rate / 1000) * 2
    n_out = int(fade_out_ms * rate / 1000) * 2
    total = len(samples)
    
    out = list(samples)
    for i in range(0, min(n_in, total), 2):
        factor = (i / n_in)
        out[i] = int(out[i] * factor)
        out[i+1] = int(out[i+1] * factor)
        
    for i in range(max(0, total - n_out), total, 2):
        factor = (total - i) / n_out
        out[i] = int(out[i] * factor)
        out[i+1] = int(out[i+1] * factor)
        
    return out

def mix(samples1, samples2, offset2_sec, rate, vol1=1.0, vol2=1.0):
    offset_frames = int(offset2_sec * rate) * 2
    total_len = max(len(samples1), offset_frames + len(samples2))
    mixed = [0] * total_len
    
    for i in range(len(samples1)):
        mixed[i] += int(samples1[i] * vol1)
        
    for i in range(len(samples2)):
        idx = offset_frames + i
        if idx < total_len:
            mixed[idx] += int(samples2[i] * vol2)
            
    # clamp
    return [int(max(-32767, min(32767, s))) for s in mixed]

# 1. BEER: Crisp pop at 3.10s, lasting 1.3s
samples_beer, rate = read_wav_segment('pop_bottle.wav', 3.08, 1.25)
samples_beer = normalize(samples_beer, 29000)
samples_beer = apply_fades(samples_beer, rate, fade_in_ms=5, fade_out_ms=80)
write_wav('beer.wav', samples_beer, rate)

# 2. JAIL: Key lock rattle + heavy iron jail door slam!
# Key lock: 6.6s for 0.4s
samples_key, rate = read_wav_segment('key_lock.wav', 6.65, 0.45)
# Door slam: 1.65s for 1.6s
samples_door, rate = read_wav_segment('jail_door.wav', 1.65, 1.60)
samples_jail = mix(samples_key, samples_door, 0.35, rate, vol1=1.1, vol2=1.3)
samples_jail = normalize(samples_jail, 29000)
samples_jail = apply_fades(samples_jail, rate, fade_in_ms=10, fade_out_ms=100)
write_wav('jail.wav', samples_jail, rate)

# 3. WHIP: Sharp crack at 8.62s lasting 0.9s
samples_whip, rate = read_wav_segment('whip_cracks.wav', 8.60, 0.95)
samples_whip = normalize(samples_whip, 29500)
samples_whip = apply_fades(samples_whip, rate, fade_in_ms=5, fade_out_ms=90)
write_wav('whip.wav', samples_whip, rate)

# 4. BARREL: Deep wooden thud at 1.25s for 1.1s
samples_barrel, rate = read_wav_segment('barrel_drop.wav', 1.25, 1.15)
samples_barrel = normalize(samples_barrel, 29000)
samples_barrel = apply_fades(samples_barrel, rate, fade_in_ms=5, fade_out_ms=80)
write_wav('barrel.wav', samples_barrel, rate)

# 5. COCK / DUEL / QUICK DRAW: Cylinder spin + sharp hammer lock
samples_spin, rate = read_wav_segment('cylinder_spin.wav', 0.25, 0.55)
samples_click, rate = read_wav_segment('colt_hammer.wav', 30.15, 0.50)
samples_cock = mix(samples_spin, samples_click, 0.40, rate, vol1=0.9, vol2=1.2)
samples_cock = normalize(samples_cock, 29000)
samples_cock = apply_fades(samples_cock, rate, fade_in_ms=10, fade_out_ms=60)
write_wav('cock.wav', samples_cock, rate)

# 6. KNIFE: Sharp steel swish at 0.35s for 0.8s
samples_knife, rate = read_wav_segment('knife_chop.wav', 0.35, 0.85)
samples_knife = normalize(samples_knife, 29000)
samples_knife = apply_fades(samples_knife, rate, fade_in_ms=5, fade_out_ms=60)
write_wav('knife.wav', samples_knife, rate)

# 7. BRAWL: punch impact + glass breaking crash at 2.45s for 1.5s
samples_glass, rate = read_wav_segment('glass_breaking.wav', 2.45, 1.55)
samples_punch, rate = read_wav_segment('barrel_drop.wav', 18.55, 0.40) # punchy impact
samples_brawl = mix(samples_punch, samples_glass, 0.15, rate, vol1=1.2, vol2=1.1)
samples_brawl = normalize(samples_brawl, 29000)
samples_brawl = apply_fades(samples_brawl, rate, fade_in_ms=5, fade_out_ms=90)
write_wav('brawl.wav', samples_brawl, rate)

print("All crafted WAV sounds generated in /tmp/crafted_sounds/!")
