# -*- coding: utf-8 -*-
"""
Generate complete English translations for all 50 BANG! FAQ conflict situations.
"""
import json
import re
import sys
sys.path.insert(0, 'scripts')
from faq_content import FAQ_ENTRIES

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

TRANSLATIONS_DICT = {
    "faq-01": ("Slab the Killer fires a BANG!. Player has a Barrel and a Crate. How much defense is needed?", """**Verdict:** To cancel a BANG! card played by Slab the Killer, **2 Missed! effects** are required.
* A successful draw on Barrel (Hearts ♥) provides **1 Missed! effect**.
* Spending 2 load tokens from the Crate card provides **1 Missed! effect**.
* The player can combine a successful Barrel check + Crate to fully cancel Slab's attack!
* If Barrel fails, the player must play 2 Missed! cards from hand (or Crate + 1 Missed!)."""),

    "faq-02": ("Slab the Killer plays Gatling or Flintlock. How many Missed! cards are needed to defend?", """**Verdict:** Exactly **1 Missed! effect** is sufficient!
* Slab the Killer's ability explicitly states: *„A player who wants to cancel your BANG! CARD must use 2 Missed! effects“*.
* Cards like *Gatling*, *Flintlock*, *Quick Shot*, *Howitzer*, or *Derringer* cause a BANG! effect, but are **NOT a BANG! card**.
* Therefore, Slab's ability does not apply to them, and any single Missed! (or Barrel check) is enough."""),

    "faq-03": ("Belle Star is taking her turn. Which enemy cards are disabled by her ability?", """**Verdict:** During Belle Star's turn, **all cards in play in front of other players have no effect**:
* Disables opponent **Barrels** (opponents cannot draw for Barrel).
* Disables opponent **Mustangs**, **Hideouts**, and **Lumber Flatcars** (Belle Star sees everyone at base distance).
* Disables opponent **green cards** (they cannot discard Sombrero or Iron Plate).
* Disables opponent **orange cards** from Armed & Dangerous (Crate cannot be activated).
* *Note:* Black equipment cards from Gold Rush have permanent status and are not canceled."""),

    "faq-04": ("Apache Kid faces a Duel card or a BANG! in a Duel. When does his immunity apply?", """**Verdict:**
* **Playing a Duel:** If an opponent tries to target Apache Kid with a Diamond ♦ *Duel* card, Apache Kid is **completely immune** – the card cannot be played on him!
* **During a Duel:** If the Duel was started with a non-Diamond card (♠, ♣), **Apache Kid's immunity does not apply during the resolution**! If the opponent discards Diamond BANG! cards, Apache Kid must still respond with a BANG! or lose a life point."""),

    "faq-05": ("Suzy Lafayette plays her last card. When exactly does she draw a new card?", """**Verdict:** Suzy Lafayette's ability triggers **immediately the instant her hand is empty**:
* **Standard play:** If she plays BANG!, she discards it and instantly draws a new card from the deck. She can play it on the same turn!
* **Frontier Feat (Legends):** Requires discarding your hand. Suzy fulfills the feat *before* drawing her new card.
* **Duel Exception:** During a Duel, Suzy's ability is paused until the Duel is fully resolved! If she discards her last card and opponent responds, she loses a life point first."""),

    "faq-06": ("El Gringo is wounded. Which sources trigger his card-stealing ability and which DO NOT?", """**Verdict:**
* **TRIGGERS:** Whenever he loses a life point due to a card played by another player (BANG!, Indians!, Duel, Gatling, Punch, Springfield). He takes 1 random card from that player's hand.
* **DOES NOT TRIGGER:** Does not trigger on Dynamite, Rattlesnake, Bomb, or losing lives due to event cards like High Noon, or voluntary damage."""),

    "faq-07": ("What is the exact timing order before Phase 1 of a turn (Dynamite, Jail, Bomb, Rattlesnake)?", """**Verdict:** If a player has multiple timed cards in play, they resolve in this **strict official order**:
1. **DYNAMITE:** Checked first (♠ 2-9 = explosion for 3 lives; else passes left).
2. **JAIL:** Checked second (Hearts ♥ = escape; else entire turn is skipped!). *Legends alternative:* discard a Heart card to escape safely.
3. **BOMB:** Checked third (♥/♦ passes left; ♣/♠ removes 2 tokens).
4. **RATTLESNAKE:** Checked last (♠ = lose 1 life point).
* **CRITICAL RULE:** If a player fails Jail and skips their turn, **they do NOT check for Rattlesnake this turn**!"""),

    "faq-08": ("Vulture Sam vs Ghost Gunners vs Ghost Car vs Gold Rush Equipment. What does Sam take?", """**Verdict:** When a player dies, Vulture Sam takes all cards from their hand and in play:
* **Railcars:** Vulture Sam takes all railcars of the eliminated player and **puts them into play in front of himself**.
* **Black Equipment (Gold Rush):** Vulture Sam **CANNOT take equipment cards**! They are placed face-up at the bottom of the equipment deck.
* **Ghost Gunners:** When a ghost gunner leaves at turn end, it does **not count as a kill** – Vulture Sam gets nothing!
* **Ghost Car:** If lost, player dies without triggering Vulture Sam rewards."""),

    "faq-09": ("How does the Beer card work when only 2 players remain in the game?", """**Verdict:** As soon as **only 2 players remain** in the game (e.g. Sheriff vs Outlaw):
* **Beer Card:** Has no healing effect. Playing Beer **cannot add any life points** (neither in turn nor on fatal damage!).
* **Gold Rush Exception:** In Gold Rush, a player may still play Beer on their turn to **gain 1 Gold Nugget** from the bank!
* **Last Call Card:** The *Last Call* card from Valley of Shadows still heals 1 life point even in a 2-player duel!"""),

    "faq-10": ("Sheriff personally kills his Deputy who had the Wanted card in play. What happens?", """**Verdict:** According to official Gold Rush rules:
1. The Sheriff first **collects the reward from the Wanted card**: draws 2 cards from the deck and takes 1 Gold Nugget!
2. Immediately afterwards, the penalty for killing a Deputy is applied: the Sheriff must **discard all cards from hand and in play** (including weapons and the 2 cards just drawn).
3. **Gold Nuggets are kept!** The discard penalty applies only to cards, never to Gold Nuggets."""),

    "faq-11": ("Locomotive Ironhorse reaches the end of the line. Who defends and who wins if all die?", """**Verdict:** When Ironhorse passes the last station:
* **Every player at the table** (including the player who triggered it) becomes the target of a BANG! attack.
* Each player defends independently (Missed!, Barrel, Crate).
* **Simultaneous Death:** If this attack kills all remaining players including the Sheriff, **THE OUTLAWS WIN**! (They achieved their goal of killing the Sheriff)."""),

    "faq-12": ("Legendary Jourdonnais vs Indians! vs Gatling vs Cat Balou. How does his immunity work?", """**Verdict:** Legendary Jourdonnais (Side B) has the ability: *„If you are the target of a brown card, you may check. 10, J, Q, K, A = ignore this card!“*.
* **Cat Balou, Panic!:** He is their target -> checks. If 10, J, Q, K, A, the card is canceled and discarded without effect.
* **Indians! & Gatling:** Affects all players, but Jourdonnais is a target -> checks to ignore it without needing BANG! or Missed!."""),

    "faq-13": ("Legendary Slab the Killer claims a feat. Can he kill a player on their last life point?", """**Verdict:** Claiming a feat allows a Legend on Side B to deal 1 direct damage to another player.
* **Uncancelable damage:** This damage cannot be canceled with Missed! or Barrel.
* **Saving with Beer:** The victim CAN save themselves by playing Beer if this damage would reduce them to 0 lives!"""),

    "faq-14": ("Legendary Vulture Sam is about to be eliminated. How does his second life work?", """**Verdict:** When Legendary Vulture Sam (Side B) loses his last life point:
* He immediately resets his life points to 2, discards all cards in play, and stays in the game!
* This ability triggers only once per game."""),

    "faq-15": ("What happens when Rust removes the last load tokens from a Bomb?", """**Verdict:**
* If Rust removes the remaining load tokens from a Bomb so that it reaches 0 tokens, the Bomb **DOES NOT EXPLODE**.
* It simply remains in play with 0 tokens until its next check or discard."""),

    "faq-16": ("Can a jailed player boast of a feat in Legends?", """**Verdict: YES!**
* The rules of Legends state that if a player did not accomplish a feat on their turn (which is true for jailed players skipping their turn), they may boast of a feat in Phase 4!
* They reveal a new feat and place 1 Fame token."""),

    "faq-17": ("Can a player steal a railcar into their hand using Panic! or Rag Time?", """**Verdict:**
* **NO:** Railcars are not standard cards; they are railcar tiles attached to stations or players.
* Panic! and Cat Balou can target cards from hand or in play, but railcars can only be detached or discarded by specific train mechanics or Vulture Sam upon death."""),

    "faq-18": ("Gold Rush card (purchased for 5 Gold Nuggets). When do lives refill and how is the turn played?", """**Verdict:**
* The player's current turn ends immediately.
* The player immediately restores all lost life points back to their character maximum!
* The player immediately starts a brand-new turn, beginning with Phase 1 (drawing cards)."""),

    "faq-19": ("Can the Sheriff gain the Ghost Car or Jail via the Switch card?", """**Verdict: NO!**
* The Sheriff is strictly immune to Jail and Ghost Car. A Switch card cannot move either of these cards onto the Sheriff."""),

    "faq-20": ("How does the 1-life rule introduced in Legends work during Phase 3?", """**Verdict:**
* Under standard rules, hand size limit equals current life points (1 life = 1 card).
* Under Legends rules, a player reduced to 1 life point **is allowed to keep up to 2 cards in hand** at the end of their turn!"""),

    "faq-21": ("Can High Noon and Wild West Show events be active at the same time?", """**Verdict: YES!**
* High Noon / Fistful is a round-based event deck that changes every round with the Sheriff.
* Wild West Show cards are triggered whenever a Stagecoach or Wells Fargo is played. Both effects stack!"""),

    "faq-22": ("How does Shadow Renegade determine which team to join on each turn?", """**Verdict:**
* At the start of their turn, counts face-up roles on the table (Sheriff and revealed dead players).
* Joins whichever team has more revealed roles. In case of a tie, joins the Outlaws!"""),

    "faq-23": ("Bell Tower vs Mustang vs Lumber Flatcar. How is distance calculated?", """**Verdict:**
* Bell Tower states: for the next card played, you see all players at distance 1.
* This overrides all Mustang and Lumber Flatcar distance modifiers for that single card!"""),

    "faq-24": ("Frankie Canton takes the last load token from an opponent's Dangerous card. What happens?", """**Verdict:**
* The Dangerous card remains in play in front of the owner with 0 load tokens.
* It cannot be activated until new tokens are placed on it (e.g. by playing blue cards)."""),

    "faq-25": ("Johnny Kisch plays a blue card or railcar. Which cards are discarded?", """**Verdict:**
* All other players at the table must discard 1 card from hand or in play matching the suit of the played card."""),

    "faq-26": ("Don Bell is at turn end. When is he NOT allowed to check for an extra turn?", """**Verdict:**
* If Don Bell is currently taking an extra turn granted by his ability, he cannot chain another extra turn."""),

    "faq-27": ("Evan Babbit is targeted by a BANG!. Can he redirect it to the attacker or locomotive?", """**Verdict:**
* He can redirect it to any other player at distance 1 from him by discarding 1 card.
* He CANNOT redirect it to the locomotive (it is not a player) nor back to the attacker."""),

    "faq-28": ("Uncle Will plays a card as General Store and Sgt. Blaze is at the table. How is it resolved?", """**Verdict:**
* General Store reveals cards equal to living players.
* Sgt. Blaze chooses his card normally in turn order."""),

    "faq-29": ("Emiliano vs Slab the Killer vs Annie Versary. How does Emiliano's card theft work?", """**Verdict:**
* Whenever a check is made by any player, if the revealed card is a number card (2 through 10), Emiliano takes it into his hand!"""),

    "faq-30": ("Miss Susanna (Wild West Show): Player does not play 3 cards on their turn. When do they lose a life?", """**Verdict:**
* At the very end of their turn (Phase 4). If they played fewer than 3 cards, they lose 1 life point."""),

    "faq-31": ("Gag (Wild West Show): Player speaks out of turn. When do they lose a life point?", """**Verdict:**
* The instant they speak! They immediately lose 1 life point. They can save themselves with Beer if reduced to 0 lives."""),

    "faq-32": ("Rucksack (Gold Rush) vs Lethal Dynamite damage of 3 lives. How to save yourself?", """**Verdict:**
* The player must pay 2 Gold Nuggets for each life point needed to avoid death. If they have enough nuggets, they survive!"""),

    "faq-33": ("Double Shot + Colorado Bill: How many lives does the target lose on a Spade check?", """**Verdict:**
* If Colorado Bill checks a Spade ♠ on Double Shot, both shots cannot be canceled by Missed!. Target loses 2 lives unless saved by Beer."""),

    "faq-34": ("Tornado (Valley of Shadows): Player has only 1 card or no cards. How many cards do they pass?", """**Verdict:**
* A player passes as many cards as they have up to 2. If they have 0 cards, they pass nothing."""),

    "faq-35": ("Free train advance before buying railcar: Is the purchase mandatory?", """**Verdict: YES!**
* If you choose to advance the train 1 station for free, you MUST purchase the attached railcar by paying the station cost!"""),

    "faq-36": ("Can a player have 2 identical black equipment cards from Gold Rush in play?", """**Verdict: NO!**
* The standard BANG! rule applies: a player can never have two cards with the exact same name in play before them."""),

    "faq-37": ("Switch card: Can you swap a railcar still attached to the train on the track?", """**Verdict: YES!**
* Switch allows swapping any 2 railcars or stations, including those currently in the train lineup."""),

    "faq-38": ("Damage dealt by a Legend claiming a feat: Can it be canceled with Missed! or Barrel?", """**Verdict: NO!**
* It is direct unblockable damage. Only Beer can be played if it would reduce the victim to 0 lives."""),

    "faq-39": ("What happens when the Feat deck runs out in Legends?", """**Verdict:**
* Shuffle the discarded feat cards to form a new draw deck. Feats remain available throughout the entire game."""),

    "faq-40": ("Chuck Wengam has 1 life point. Can he sacrifice a life to draw 2 cards?", """**Verdict: NO!**
* A player cannot voluntarily reduce their life points to 0."""),

    "faq-41": ("Elena Fuente faces Slab the Killer. How many cards must she discard?", """**Verdict:**
* She must discard 2 cards from hand to produce 2 Missed! effects to cancel Slab's shot."""),

    "faq-42": ("Pedro Ramirez plays in Round 1 and the discard pile is empty. Where does he draw from?", """**Verdict:**
* He must draw both cards from the draw deck."""),

    "faq-43": ("Rose Doolan vs Paul Regret: What is the resulting distance between them?", """**Verdict:**
* Rose Doolan sees at -1; Paul Regret is seen at +1. The modifiers cancel out: distance is 1 (normal)."""),

    "faq-44": ("Ghost Car: Can anyone shoot a BANG! or play Panic! on a player with the Ghost Car?", """**Verdict: YES!**
* The player is still an active target; the Ghost Car only prevents them from being eliminated when at 0 lives."""),

    "faq-45": ("Does a player with the Ghost Car count as alive for game-end conditions?", """**Verdict: YES!**
* As long as they have the Ghost Car in play, they count as a living player."""),

    "faq-46": ("Big Fifty (A&D) vs Barrel vs Julie Cutter: What exactly does this weapon cancel?", """**Verdict:**
* Big Fifty ignores the target's character ability and all cards in play (Barrel, Mustang, etc.). Julie Cutter cannot trigger revenge damage."""),

    "faq-47": ("Buntline Special (A&D) vs Successful Barrel: Must the target discard a card when Barrel succeeds?", """**Verdict: NO!**
* Buntline Special triggers discard only if a Missed! CARD is played, not when a Barrel check succeeds."""),

    "faq-48": ("Wooden Dynamite (Dynamite Box variant): What happens to the card after exploding?", """**Verdict:**
* The Dynamite card is discarded to the discard pile, while the wooden token is reset for future use."""),

    "faq-49": ("Russian Roulette (Fistful of Cards): Who starts and when does it end?", """**Verdict:**
* The player whose turn it is starts by discarding a Missed!. Passes left until someone cannot discard and takes 2 damage."""),

    "faq-50": ("The Preacher (High Noon) vs Playing BANG! vs Discarding BANG! in a Duel.", """**Verdict:**
* The Preacher forbids playing Beer cards. Discarding BANG! in a Duel is not playing Beer, so it proceeds normally.""")
}

FAQ_ENTRIES_EN = []

for item in FAQ_ENTRIES:
    iid = item["id"]
    cat_en = CATEGORY_MAP_EN.get(item["category"], item["category"])
    if iid in TRANSLATIONS_DICT:
        q_en, a_en = TRANSLATIONS_DICT[iid]
    else:
        q_en = item["question"]
        a_en = item["answer"]
    
    FAQ_ENTRIES_EN.append({
        "id": iid,
        "question": q_en,
        "category": cat_en,
        "tags": item.get("tags", []),
        "answer": a_en
    })

with open("scripts/faq_content_en.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\n")
    f.write('"""\nComplete English translations for 50 BANG! Conflict Resolutions (FAQ).\n"""\n\n')
    f.write("FAQ_ENTRIES_EN = " + json.dumps(FAQ_ENTRIES_EN, indent=2, ensure_ascii=False) + "\n")

print(f"Generated scripts/faq_content_en.py with {len(FAQ_ENTRIES_EN)} items!")
