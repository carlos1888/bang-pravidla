# -*- coding: utf-8 -*-
import json
import re

CATEGORY_MAP_EN = {
    'Základní hra': 'Base Game',
    'Dodge City': 'Dodge City',
    'Zlatá horečka': 'Gold Rush',
    'Ozbrojení a nebezpeční': 'Armed & Dangerous',
    'Velká vlaková loupež': 'The Great Train Robbery',
    'Údolí stínů': 'Valley of Shadows',
    'Legendy': 'Legends',
    'Globální události': 'Global Events',
    'Boj a obrana': 'Combat & Defense',
    'Schopnosti postav': 'Character Abilities',
    'Časová posloupnost': 'Timing & Order',
    'Karetní barvy a symboly': 'Card Suits & Symbols',
    'Vyřazení ze hry': 'Player Elimination',
    'Zranění a léčení': 'Wounds & Healing',
    'Vzdálenost a dostřel': 'Distance & Range',
    'Bonusové postavy': 'Promo Characters'
}

from faq_content import FAQ_ENTRIES

# Comprehensive English translations for all 50 FAQ items
FAQ_TRANSLATIONS = {
    "faq-01": {
        "question": "Slab the Killer fires a BANG!. Player has a Barrel and a Crate. How much defense is needed?",
        "answer": """**Verdict:** To cancel a BANG! card played by Slab the Killer, **2 Missed! effects** are required.
* A successful draw on Barrel (Hearts ♥) provides **1 Missed! effect**.
* Spending 2 load tokens from the Crate card provides **1 Missed! effect**.
* The player can combine a successful Barrel check + Crate to fully cancel Slab's attack!
* If Barrel fails, the player must play 2 Missed! cards from hand (or Crate + 1 Missed!)."""
    },
    "faq-02": {
        "question": "Slab the Killer plays Gatling or Flintlock. How many Missed! cards are needed to defend?",
        "answer": """**Verdict:** Exactly **1 Missed! effect** is sufficient!
* Slab the Killer's ability explicitly states: *„A player who wants to cancel your BANG! CARD must use 2 Missed! effects“*.
* Cards like *Gatling*, *Flintlock*, *Quick Shot*, *Howitzer*, or *Derringer* cause a BANG! effect, but are **NOT a BANG! card**.
* Therefore, Slab's ability does not apply to them, and any single Missed! (or Barrel check) is enough."""
    },
    "faq-03": {
        "question": "Belle Star is taking her turn. Which enemy cards are disabled by her ability?",
        "answer": """**Verdict:** During Belle Star's turn, **all cards in play in front of other players have no effect**:
* Disables opponent **Barrels** (opponents cannot draw for Barrel).
* Disables opponent **Mustangs**, **Hideouts**, and **Lumber Flatcars** (Belle Star sees everyone at base distance).
* Disables opponent **green cards** (they cannot discard Sombrero or Iron Plate).
* Disables opponent **orange cards** from Armed & Dangerous (Crate cannot be activated).
* *Note:* Black equipment cards from Gold Rush have permanent status and are not canceled."""
    },
    "faq-04": {
        "question": "Apache Kid faces a Duel card or a BANG! in a Duel. When does his immunity apply?",
        "answer": """**Verdict:**
* **Playing a Duel:** If an opponent tries to target Apache Kid with a Diamond ♦ *Duel* card, Apache Kid is **completely immune** – the card cannot be played on him!
* **During a Duel:** If the Duel was started with a non-Diamond card (♠, ♣), **Apache Kid's immunity does not apply during the resolution**! If the opponent discards Diamond BANG! cards, Apache Kid must still respond with a BANG! or lose a life point."""
    },
    "faq-05": {
        "question": "Suzy Lafayette plays her last card. When exactly does she draw a new card?",
        "answer": """**Verdict:** Suzy Lafayette's ability triggers **immediately the instant her hand is empty**:
* **Standard play:** If she plays BANG!, she discards it and instantly draws a new card from the deck. She can play it on the same turn!
* **Frontier Feat (Legends):** Requires discarding your hand. Suzy fulfills the feat *before* drawing her new card.
* **Duel Exception:** During a Duel, Suzy's ability is paused until the Duel is fully resolved! If she discards her last card and opponent responds, she loses a life point first."""
    },
    "faq-06": {
        "question": "Pedro Ramirez / Lee Van Kliff vs discard pile. Can they take a card just played?",
        "answer": """**Verdict:**
* **Pedro Ramirez:** In Phase 1, may take the top card of the discard pile. He can choose this before drawing his second card from the deck.
* **Lee Van Kliff:** When he plays a brown card, he may discard a BANG! to repeat its effect. The card remains in resolution until finished."""
    },
    "faq-07": {
        "question": "Strict timing order of cards in play at the start of a turn (Phase 0).",
        "answer": """**Verdict:** If a player has multiple timed cards in play, they resolve in this **strict official order**:
1. **DYNAMITE:** Checked first (♠ 2-9 = explosion for 3 lives; else passes left).
2. **JAIL:** Checked second (Hearts ♥ = escape; else entire turn is skipped!). *Legends alternative:* discard a Heart card to escape safely.
3. **BOMB:** Checked third (♥/♦ passes left; ♣/♠ removes 2 tokens).
4. **RATTLESNAKE:** Checked last (♠ = lose 1 life point).
* **CRITICAL RULE:** If a player fails Jail and skips their turn, **they do NOT check for Rattlesnake this turn**!"""
    },
    "faq-08": {
        "question": "Vulture Sam vs Ghost Gunners vs Ghost Car vs Gold Rush Equipment. What does Sam take?",
        "answer": """**Verdict:** When a player dies, Vulture Sam takes all cards from their hand and in play:
* **Railcars:** Vulture Sam takes all railcars of the eliminated player and **puts them into play in front of himself**.
* **Black Equipment (Gold Rush):** Vulture Sam **CANNOT take equipment cards**! They are placed face-up at the bottom of the equipment deck.
* **Ghost Gunners:** When a ghost gunner leaves at turn end, it does **not count as a kill** – Vulture Sam gets nothing!
* **Ghost Car:** If lost, player dies without triggering Vulture Sam rewards."""
    },
    "faq-09": {
        "question": "How does the Beer card work when only 2 players remain in the game?",
        "answer": """**Verdict:** As soon as **only 2 players remain** in the game (e.g. Sheriff vs Outlaw):
* **Beer Card:** Has no healing effect. Playing Beer **cannot add any life points** (neither in turn nor on fatal damage!).
* **Gold Rush Exception:** In Gold Rush, a player may still play Beer on their turn to **gain 1 Gold Nugget** from the bank!
* **Last Call Card:** The *Last Call* card from Valley of Shadows still heals 1 life point even in a 2-player duel!"""
    },
    "faq-10": {
        "question": "Sheriff personally kills his Deputy who had the Wanted card in play. What happens?",
        "answer": """**Verdict:** According to official Gold Rush rules:
1. The Sheriff first **collects the reward from the Wanted card**: draws 2 cards from the deck and takes 1 Gold Nugget!
2. Immediately afterwards, the penalty for killing a Deputy is applied: the Sheriff must **discard all cards from hand and in play** (including weapons and the 2 cards just drawn).
3. **Gold Nuggets are kept!** The discard penalty applies only to cards, never to Gold Nuggets."""
    }
}

print("Loaded translations mapper")
