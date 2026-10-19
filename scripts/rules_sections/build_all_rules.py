# -*- coding: utf-8 -*-
"""
Master compiler script to assemble all Czech and English rules sections into js/rules-data.js.
"""
import json
import os

from base_game import BASE_GAME_SECTIONS
from base_game_en import BASE_GAME_SECTIONS_EN
from dodge_city import DODGE_CITY_SECTIONS
from dodge_city_en import DODGE_CITY_SECTIONS_EN
from high_noon_fistful import HIGH_NOON_FISTFUL_SECTIONS
from high_noon_fistful_en import HIGH_NOON_FISTFUL_SECTIONS_EN
from gold_rush import GOLD_RUSH_SECTIONS
from gold_rush_en import GOLD_RUSH_SECTIONS_EN
from armed_dangerous import ARMED_DANGEROUS_SECTIONS
from armed_dangerous_en import ARMED_DANGEROUS_SECTIONS_EN
from train_robbery import TRAIN_ROBBERY_SECTIONS
from train_robbery_en import TRAIN_ROBBERY_SECTIONS_EN
from legends import LEGENDS_SECTIONS
from legends_en import LEGENDS_SECTIONS_EN
from valley_wildwest import VALLEY_WILDWEST_SECTIONS
from valley_wildwest_en import VALLEY_WILDWEST_SECTIONS_EN
from dynamite_box import DYNAMITE_BOX_SECTIONS
from dynamite_box_en import DYNAMITE_BOX_SECTIONS_EN

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

ALL_EN_SECTIONS = (
    BASE_GAME_SECTIONS_EN +
    DODGE_CITY_SECTIONS_EN +
    HIGH_NOON_FISTFUL_SECTIONS_EN +
    GOLD_RUSH_SECTIONS_EN +
    ARMED_DANGEROUS_SECTIONS_EN +
    TRAIN_ROBBERY_SECTIONS_EN +
    LEGENDS_SECTIONS_EN +
    VALLEY_WILDWEST_SECTIONS_EN +
    DYNAMITE_BOX_SECTIONS_EN
)

print(f"Total Czech rules sections: {len(ALL_CS_SECTIONS)}")
print(f"Total English rules sections: {len(ALL_EN_SECTIONS)}")
assert len(ALL_CS_SECTIONS) == len(ALL_EN_SECTIONS), "Mismatch between CS and EN section counts!"

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../js/rules-data.js"))

js_content = f"""// BANG! Definitive Rules & Mechanics by Expansion Category (Rich HTML, CS & EN)
// Generated automatically from official rulebooks
window.BANG_RULES = {json.dumps(ALL_CS_SECTIONS, ensure_ascii=False, indent=2)};

window.BANG_RULES_EN = {json.dumps(ALL_EN_SECTIONS, ensure_ascii=False, indent=2)};
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully compiled both languages to {target_path} ({os.path.getsize(target_path)} bytes)!")
