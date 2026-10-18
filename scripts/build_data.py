# -*- coding: utf-8 -*-
import json
import os
import glob
from cards_base import BASE_CARDS
from cards_expansions1 import EXPANSIONS1_CARDS
from cards_expansions2 import EXPANSIONS2_CARDS
from cards_expansions3 import EXPANSIONS3_CARDS
from rules_content import RULES_SECTIONS
from faq_content import FAQ_ENTRIES

print("Merging all card sets...")
ALL_CARDS = BASE_CARDS + EXPANSIONS1_CARDS + EXPANSIONS2_CARDS + EXPANSIONS3_CARDS
print(f"Total cards, characters, stations, railcars, feats: {len(ALL_CARDS)}")

# Map available extracted images to relevant cards
available_imgs = sorted([os.path.basename(p) for p in glob.glob("assets/cards/*.jpg")])

# Image mapping heuristics based on PDF source and card type
# pdf1: Legends manual (deeds, legendary characters, fame tokens)
# pdf2: Dynamite box English
# pdf3: Dynamite box Czech
for i, card in enumerate(ALL_CARDS):
    # assign an image if suitable
    img_candidate = None
    if card["expansion"] == "legends":
        # pick from pdf1
        idx = (i % 50) + 1
        img_name = f"pdf1_{idx:03d}.jpg"
        if img_name in available_imgs:
            img_candidate = f"assets/cards/{img_name}"
    elif card["expansion"] in ["train-robbery", "armed-dangerous", "gold-rush"]:
        idx = (i % 50) + 1
        img_name = f"pdf3_{idx:03d}.jpg"
        if img_name in available_imgs:
            img_candidate = f"assets/cards/{img_name}"
    else:
        idx = (i % 40) + 1
        img_name = f"pdf2_{idx:03d}.jpg"
        if img_name in available_imgs:
            img_candidate = f"assets/cards/{img_name}"
    card["image"] = img_candidate

# Write js/cards-data.js
with open("js/cards-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! Definitive Card Database\n")
    f.write("// Generated automatically with all expansions & promo cards\n")
    f.write("window.BANG_CARDS = ")
    json.dump(ALL_CARDS, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/cards-data.js")

# Write js/rules-data.js
with open("js/rules-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! Definitive Rules & Mechanics\n")
    f.write("window.BANG_RULES = ")
    json.dump(RULES_SECTIONS, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/rules-data.js")

# Write js/faq-data.js
with open("js/faq-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! 50+ Real Situation Resolutions & Edge Cases\n")
    f.write("window.BANG_FAQ = ")
    json.dump(FAQ_ENTRIES, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/faq-data.js")

print("All JS data files created successfully!")
