# -*- coding: utf-8 -*-
"""
Master compiler script to assemble all rules sections into js/rules-data.js.
"""
import json
import os
import re

from base_game import BASE_GAME_SECTIONS
from dodge_city import DODGE_CITY_SECTIONS
from high_noon_fistful import HIGH_NOON_FISTFUL_SECTIONS
from gold_rush import GOLD_RUSH_SECTIONS
from armed_dangerous import ARMED_DANGEROUS_SECTIONS
from train_robbery import TRAIN_ROBBERY_SECTIONS
from legends import LEGENDS_SECTIONS
from valley_wildwest import VALLEY_WILDWEST_SECTIONS
from dynamite_box import DYNAMITE_BOX_SECTIONS

ALL_CS_SECTIONS = (
    BASE_GAME_SECTIONS +
    DODGE_CITY_SECTIONS +
    HIGH_NOON_FISTFUL_SECTIONS +
    GOLD_RUSH_SECTIONS +
    ARMED_DANGEROUS_SECTIONS +
    TRAIN_ROBBERY_SECTIONS +
    LEGENDS_SECTIONS +
    VALLEY_WILDWEST_SECTIONS +
    DYNAMITE_BOX_SECTIONS
)

print(f"Total Czech rules sections: {len(ALL_CS_SECTIONS)}")

# Category map for English headers
CATEGORY_TITLES_EN = {
    "base": "🎯 BANG! Base Game",
    "dodge-city": "🟢 Dodge City",
    "high-noon-fistful": "☀️ High Noon & Fistful of Cards",
    "gold-rush": "🪙 Gold Rush",
    "armed-dangerous": "🟠 Armed & Dangerous",
    "train-robbery": "🚂 The Great Train Robbery",
    "legends": "🌟 Legends",
    "valley-wildwest": "💀 Valley of Shadows & Wild West Show",
    "dynamite-box": "🧨 Complete Game (Dynamite Box)"
}

# Generate English counterpart sections
ALL_EN_SECTIONS = []
for sec in ALL_CS_SECTIONS:
    en_sec = {
        "id": sec["id"],
        "category": sec["category"],
        "categoryTitle": CATEGORY_TITLES_EN.get(sec["category"], sec["categoryTitle"]),
        "title": sec["title"],
        "icon": sec["icon"],
        "content": sec["content"]  # Can be expanded with EN translations, uses full content
    }
    ALL_EN_SECTIONS.append(en_sec)

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../js/rules-data.js"))

js_content = f"""// BANG! Definitive Rules & Mechanics by Expansion Category (Rich HTML, CS & EN)
// Generated automatically from official rulebooks
window.BANG_RULES = {json.dumps(ALL_CS_SECTIONS, ensure_ascii=False, indent=2)};

window.BANG_RULES_EN = {json.dumps(ALL_EN_SECTIONS, ensure_ascii=False, indent=2)};
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully wrote {len(ALL_CS_SECTIONS)} sections to {target_path} ({os.path.getsize(target_path)} bytes)!")
