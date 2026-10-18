# -*- coding: utf-8 -*-
import json
import os
import re
from cards_base import BASE_CARDS
from cards_expansions1 import EXPANSIONS1_CARDS
from cards_expansions2 import EXPANSIONS2_CARDS
from cards_expansions3 import EXPANSIONS3_CARDS
from rules_content import RULES_SECTIONS
from faq_content import FAQ_ENTRIES

print("Merging all card sets (text only, no images)...")
ALL_CARDS = BASE_CARDS + EXPANSIONS1_CARDS + EXPANSIONS2_CARDS + EXPANSIONS3_CARDS
print(f"Total cards, characters, stations, railcars, feats: {len(ALL_CARDS)}")

# Clean up cards: remove any image reference
for card in ALL_CARDS:
    card["image"] = None

# Format FAQ answers to clean semantic HTML
def format_answer_html(ans):
    lines = [l.strip() for l in ans.strip().split('\n') if l.strip()]
    verdict = ''
    bullets = []
    
    for line in lines:
        if line.startswith('**Řešení:**'):
            verdict = line.replace('**Řešení:**', '').strip()
            continue
        line_html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', line)
        line_html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', line_html)
        if line_html.startswith('* '):
            bullets.append(f'<li>{line_html[2:]}</li>')
        elif line_html.startswith('- '):
            bullets.append(f'<li>{line_html[2:]}</li>')
        else:
            if not verdict and not bullets:
                verdict = line_html
            else:
                bullets.append(f'<li>{line_html}</li>')
    
    html = ''
    if verdict:
        v_clean = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', verdict)
        html += f'<div class="faq-verdict"><span class="verdict-badge">Verdikt</span> {v_clean}</div>'
    if bullets:
        html += '<ul class="faq-details-list">' + ''.join(bullets) + '</ul>'
    return html

CLEAN_FAQ = []
for item in FAQ_ENTRIES:
    CLEAN_FAQ.append({
        "id": item["id"],
        "question": item["question"],
        "category": item["category"],
        "tags": item.get("tags", []),
        "answerHtml": format_answer_html(item["answer"])
    })

os.makedirs('js', exist_ok=True)

# Write js/cards-data.js
with open("js/cards-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! Definitive Card Database (Clean Text-Only)\n")
    f.write("window.BANG_CARDS = ")
    json.dump(ALL_CARDS, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/cards-data.js")

# Write js/rules-data.js
with open("js/rules-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! Definitive Rules & Mechanics (Rich HTML)\n")
    f.write("window.BANG_RULES = ")
    json.dump(RULES_SECTIONS, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/rules-data.js")

# Write js/faq-data.js
with open("js/faq-data.js", "w", encoding="utf-8") as f:
    f.write("// BANG! 50+ Real Situation Resolutions & Edge Cases (Rich HTML)\n")
    f.write("window.BANG_FAQ = ")
    json.dump(CLEAN_FAQ, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("Saved js/faq-data.js")

print("All JS data files regenerated cleanly!")
