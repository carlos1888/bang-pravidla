# -*- coding: utf-8 -*-
"""
Complete English translations for 50 BANG! Conflict Resolutions (FAQ).
"""

FAQ_ENTRIES_EN = [
  {
    "id": "faq-01",
    "question": "Slab the Killer fires a BANG!. Player has a Barrel and a Crate. How much defense is needed?",
    "category": "Combat & Defense",
    "tags": [
      "slab-the-killer",
      "barel",
      "bedna",
      "obrana",
      "vedle"
    ],
    "answer": "**Verdict:** To cancel a BANG! card played by Slab the Killer, **2 Missed! effects** are required.\n* A successful draw on Barrel (Hearts ♥) provides **1 Missed! effect**.\n* Spending 2 load tokens from the Crate card provides **1 Missed! effect**.\n* The player can combine a successful Barrel check + Crate to fully cancel Slab's attack!\n* If Barrel fails, the player must play 2 Missed! cards from hand (or Crate + 1 Missed!)."
  },
  {
    "id": "faq-02",
    "question": "Slab the Killer plays Gatling or Flintlock. How many Missed! cards are needed to defend?",
    "category": "Combat & Defense",
    "tags": [
      "slab-the-killer",
      "kulomet",
      "křesadlovka",
      "vedle"
    ],
    "answer": "**Verdict:** Exactly **1 Missed! effect** is sufficient!\n* Slab the Killer's ability explicitly states: *„A player who wants to cancel your BANG! CARD must use 2 Missed! effects“*.\n* Cards like *Gatling*, *Flintlock*, *Quick Shot*, *Howitzer*, or *Derringer* cause a BANG! effect, but are **NOT a BANG! card**.\n* Therefore, Slab's ability does not apply to them, and any single Missed! (or Barrel check) is enough."
  },
  {
    "id": "faq-03",
    "question": "Belle Star is taking her turn. Which enemy cards are disabled by her ability?",
    "category": "Character Abilities",
    "tags": [
      "belle-star",
      "vyložené-karty",
      "oranžové",
      "zelené",
      "zbraně"
    ],
    "answer": "**Verdict:** During Belle Star's turn, **all cards in play in front of other players have no effect**:\n* Disables opponent **Barrels** (opponents cannot draw for Barrel).\n* Disables opponent **Mustangs**, **Hideouts**, and **Lumber Flatcars** (Belle Star sees everyone at base distance).\n* Disables opponent **green cards** (they cannot discard Sombrero or Iron Plate).\n* Disables opponent **orange cards** from Armed & Dangerous (Crate cannot be activated).\n* *Note:* Black equipment cards from Gold Rush have permanent status and are not canceled."
  },
  {
    "id": "faq-04",
    "question": "Apache Kid faces a Duel card or a BANG! in a Duel. When does his immunity apply?",
    "category": "Card Suits & Symbols",
    "tags": [
      "apache-kid",
      "duel",
      "káry",
      "imunita"
    ],
    "answer": "**Verdict:**\n* **Playing a Duel:** If an opponent tries to target Apache Kid with a Diamond ♦ *Duel* card, Apache Kid is **completely immune** – the card cannot be played on him!\n* **During a Duel:** If the Duel was started with a non-Diamond card (♠, ♣), **Apache Kid's immunity does not apply during the resolution**! If the opponent discards Diamond BANG! cards, Apache Kid must still respond with a BANG! or lose a life point."
  },
  {
    "id": "faq-05",
    "question": "Suzy Lafayette plays her last card. When exactly does she draw a new card?",
    "category": "Timing & Order",
    "tags": [
      "suzy-lafayette",
      "prázdná-ruka",
      "timing",
      "duel",
      "pohraničí"
    ],
    "answer": "**Verdict:** Suzy Lafayette's ability triggers **immediately the instant her hand is empty**:\n* **Standard play:** If she plays BANG!, she discards it and instantly draws a new card from the deck. She can play it on the same turn!\n* **Frontier Feat (Legends):** Requires discarding your hand. Suzy fulfills the feat *before* drawing her new card.\n* **Duel Exception:** During a Duel, Suzy's ability is paused until the Duel is fully resolved! If she discards her last card and opponent responds, she loses a life point first."
  },
  {
    "id": "faq-06",
    "question": "El Gringo is wounded. Which sources trigger his card-stealing ability and which DO NOT?",
    "category": "Wounds & Healing",
    "tags": [
      "el-gringo",
      "zranění",
      "krádež",
      "dynamit",
      "bomba",
      "legendy"
    ],
    "answer": "**Verdict:**\n* **TRIGGERS:** Whenever he loses a life point due to a card played by another player (BANG!, Indians!, Duel, Gatling, Punch, Springfield). He takes 1 random card from that player's hand.\n* **DOES NOT TRIGGER:** Does not trigger on Dynamite, Rattlesnake, Bomb, or losing lives due to event cards like High Noon, or voluntary damage."
  },
  {
    "id": "faq-07",
    "question": "What is the exact timing order before Phase 1 of a turn (Dynamite, Jail, Bomb, Rattlesnake)?",
    "category": "Timing & Order",
    "tags": [
      "pořadí-vyhodnocení",
      "dynamit",
      "vězení",
      "bomba",
      "chřestýš",
      "časování"
    ],
    "answer": "**Verdict:** If a player has multiple timed cards in play, they resolve in this **strict official order**:\n1. **DYNAMITE:** Checked first (♠ 2-9 = explosion for 3 lives; else passes left).\n2. **JAIL:** Checked second (Hearts ♥ = escape; else entire turn is skipped!). *Legends alternative:* discard a Heart card to escape safely.\n3. **BOMB:** Checked third (♥/♦ passes left; ♣/♠ removes 2 tokens).\n4. **RATTLESNAKE:** Checked last (♠ = lose 1 life point).\n* **CRITICAL RULE:** If a player fails Jail and skips their turn, **they do NOT check for Rattlesnake this turn**!"
  },
  {
    "id": "faq-08",
    "question": "Vulture Sam vs Ghost Gunners vs Ghost Car vs Gold Rush Equipment. What does Sam take?",
    "category": "Player Elimination",
    "tags": [
      "vulture-sam",
      "stínoví-pistolníci",
      "vagon-duchů",
      "zlatá-horečka",
      "krádež-karet"
    ],
    "answer": "**Verdict:** When a player dies, Vulture Sam takes all cards from their hand and in play:\n* **Railcars:** Vulture Sam takes all railcars of the eliminated player and **puts them into play in front of himself**.\n* **Black Equipment (Gold Rush):** Vulture Sam **CANNOT take equipment cards**! They are placed face-up at the bottom of the equipment deck.\n* **Ghost Gunners:** When a ghost gunner leaves at turn end, it does **not count as a kill** – Vulture Sam gets nothing!\n* **Ghost Car:** If lost, player dies without triggering Vulture Sam rewards."
  },
  {
    "id": "faq-09",
    "question": "How does the Beer card work when only 2 players remain in the game?",
    "category": "Wounds & Healing",
    "tags": [
      "pivo",
      "poslední-dva-hráči",
      "léčení",
      "zlatá-horečka",
      "poslední-volání"
    ],
    "answer": "**Verdict:** As soon as **only 2 players remain** in the game (e.g. Sheriff vs Outlaw):\n* **Beer Card:** Has no healing effect. Playing Beer **cannot add any life points** (neither in turn nor on fatal damage!).\n* **Gold Rush Exception:** In Gold Rush, a player may still play Beer on their turn to **gain 1 Gold Nugget** from the bank!\n* **Last Call Card:** The *Last Call* card from Valley of Shadows still heals 1 life point even in a 2-player duel!"
  },
  {
    "id": "faq-10",
    "question": "Sheriff personally kills his Deputy who had the Wanted card in play. What happens?",
    "category": "Player Elimination",
    "tags": [
      "šerif",
      "trest",
      "pomocník",
      "wanted",
      "odhození-karet"
    ],
    "answer": "**Verdict:** According to official Gold Rush rules:\n1. The Sheriff first **collects the reward from the Wanted card**: draws 2 cards from the deck and takes 1 Gold Nugget!\n2. Immediately afterwards, the penalty for killing a Deputy is applied: the Sheriff must **discard all cards from hand and in play** (including weapons and the 2 cards just drawn).\n3. **Gold Nuggets are kept!** The discard penalty applies only to cards, never to Gold Nuggets."
  },
  {
    "id": "faq-11",
    "question": "Locomotive Ironhorse reaches the end of the line. Who defends and who wins if all die?",
    "category": "The Great Train Robbery",
    "tags": [
      "ironhorse",
      "vlak",
      "konečná",
      "opětovaná-palba",
      "vítězství-banditů"
    ],
    "answer": "**Verdict:** When Ironhorse passes the last station:\n* **Every player at the table** (including the player who triggered it) becomes the target of a BANG! attack.\n* Each player defends independently (Missed!, Barrel, Crate).\n* **Simultaneous Death:** If this attack kills all remaining players including the Sheriff, **THE OUTLAWS WIN**! (They achieved their goal of killing the Sheriff)."
  },
  {
    "id": "faq-12",
    "question": "Legendary Jourdonnais vs Indians! vs Gatling vs Cat Balou. How does his immunity work?",
    "category": "Legends",
    "tags": [
      "legendy",
      "jourdonnais",
      "hnědé-karty",
      "imunita",
      "sejmutí"
    ],
    "answer": "**Verdict:** Legendary Jourdonnais (Side B) has the ability: *„If you are the target of a brown card, you may check. 10, J, Q, K, A = ignore this card!“*.\n* **Cat Balou, Panic!:** He is their target -> checks. If 10, J, Q, K, A, the card is canceled and discarded without effect.\n* **Indians! & Gatling:** Affects all players, but Jourdonnais is a target -> checks to ignore it without needing BANG! or Missed!."
  },
  {
    "id": "faq-13",
    "question": "Legendary Slab the Killer claims a feat. Can he kill a player on their last life point?",
    "category": "Legends",
    "tags": [
      "legendy",
      "slab-the-killer",
      "přivlastnění-činu",
      "smrtící-čin",
      "pivo"
    ],
    "answer": "**Verdict:** Claiming a feat allows a Legend on Side B to deal 1 direct damage to another player.\n* **Uncancelable damage:** This damage cannot be canceled with Missed! or Barrel.\n* **Saving with Beer:** The victim CAN save themselves by playing Beer if this damage would reduce them to 0 lives!"
  },
  {
    "id": "faq-14",
    "question": "Legendary Vulture Sam is about to be eliminated. How does his second life work?",
    "category": "Legends",
    "tags": [
      "legendy",
      "vulture-sam",
      "druhý-život",
      "znovuzrození"
    ],
    "answer": "**Verdict:** When Legendary Vulture Sam (Side B) loses his last life point:\n* He immediately resets his life points to 2, discards all cards in play, and stays in the game!\n* This ability triggers only once per game."
  },
  {
    "id": "faq-15",
    "question": "What happens when Rust removes the last load tokens from a Bomb?",
    "category": "Armed & Dangerous",
    "tags": [
      "bomba",
      "rez",
      "exploze",
      "žetony-nabití",
      "časování"
    ],
    "answer": "**Verdict:**\n* If Rust removes the remaining load tokens from a Bomb so that it reaches 0 tokens, the Bomb **DOES NOT EXPLODE**.\n* It simply remains in play with 0 tokens until its next check or discard."
  },
  {
    "id": "faq-16",
    "question": "Can a jailed player boast of a feat in Legends?",
    "category": "Legends",
    "tags": [
      "legendy",
      "vězení",
      "chlubení-se-činem",
      "konec-tahu"
    ],
    "answer": "**Verdict: YES!**\n* The rules of Legends state that if a player did not accomplish a feat on their turn (which is true for jailed players skipping their turn), they may boast of a feat in Phase 4!\n* They reveal a new feat and place 1 Fame token."
  },
  {
    "id": "faq-17",
    "question": "Can a player steal a railcar into their hand using Panic! or Rag Time?",
    "category": "The Great Train Robbery",
    "tags": [
      "vlak",
      "vagony",
      "panika",
      "rag-time",
      "krádež-vagonu"
    ],
    "answer": "**Verdict:**\n* **NO:** Railcars are not standard cards; they are railcar tiles attached to stations or players.\n* Panic! and Cat Balou can target cards from hand or in play, but railcars can only be detached or discarded by specific train mechanics or Vulture Sam upon death."
  },
  {
    "id": "faq-18",
    "question": "Gold Rush card (purchased for 5 Gold Nuggets). When do lives refill and how is the turn played?",
    "category": "Gold Rush",
    "tags": [
      "zlatá-horečka",
      "vybavení-5-zlata",
      "plné-životy",
      "extra-tah"
    ],
    "answer": "**Verdict:**\n* The player's current turn ends immediately.\n* The player immediately restores all lost life points back to their character maximum!\n* The player immediately starts a brand-new turn, beginning with Phase 1 (drawing cards)."
  },
  {
    "id": "faq-19",
    "question": "Can the Sheriff gain the Ghost Car or Jail via the Switch card?",
    "category": "The Great Train Robbery",
    "tags": [
      "šerif",
      "vagon-duchů",
      "vězení",
      "výhybka",
      "zákaz-pro-šerifa"
    ],
    "answer": "**Verdict: NO!**\n* The Sheriff is strictly immune to Jail and Ghost Car. A Switch card cannot move either of these cards onto the Sheriff."
  },
  {
    "id": "faq-20",
    "question": "How does the 1-life rule introduced in Legends work during Phase 3?",
    "category": "Legends",
    "tags": [
      "legendy",
      "změna-pravidel",
      "jeden-život",
      "limit-karet-2"
    ],
    "answer": "**Verdict:**\n* Under standard rules, hand size limit equals current life points (1 life = 1 card).\n* Under Legends rules, a player reduced to 1 life point **is allowed to keep up to 2 cards in hand** at the end of their turn!"
  },
  {
    "id": "faq-21",
    "question": "Can High Noon and Wild West Show events be active at the same time?",
    "category": "Global Events",
    "tags": [
      "události",
      "high-noon",
      "wild-west-show",
      "kombinace-událostí"
    ],
    "answer": "**Verdict: YES!**\n* High Noon / Fistful is a round-based event deck that changes every round with the Sheriff.\n* Wild West Show cards are triggered whenever a Stagecoach or Wells Fargo is played. Both effects stack!"
  },
  {
    "id": "faq-22",
    "question": "How does Shadow Renegade determine which team to join on each turn?",
    "category": "Gold Rush",
    "tags": [
      "stínový-odpadlík",
      "zlatá-horečka",
      "určení-týmu",
      "remíza"
    ],
    "answer": "**Verdict:**\n* At the start of their turn, counts face-up roles on the table (Sheriff and revealed dead players).\n* Joins whichever team has more revealed roles. In case of a tie, joins the Outlaws!"
  },
  {
    "id": "faq-23",
    "question": "Bell Tower vs Mustang vs Lumber Flatcar. How is distance calculated?",
    "category": "Distance & Range",
    "tags": [
      "zvonice",
      "mustang",
      "plošinový-vůz",
      "vzdálenost",
      "timing"
    ],
    "answer": "**Verdict:**\n* Bell Tower states: for the next card played, you see all players at distance 1.\n* This overrides all Mustang and Lumber Flatcar distance modifiers for that single card!"
  },
  {
    "id": "faq-24",
    "question": "Frankie Canton takes the last load token from an opponent's Dangerous card. What happens?",
    "category": "Armed & Dangerous",
    "tags": [
      "frankie-canton",
      "krádež-žetonu",
      "vyčerpání-karty",
      "odhození"
    ],
    "answer": "**Verdict:**\n* The Dangerous card remains in play in front of the owner with 0 load tokens.\n* It cannot be activated until new tokens are placed on it (e.g. by playing blue cards)."
  },
  {
    "id": "faq-25",
    "question": "Johnny Kisch plays a blue card or railcar. Which cards are discarded?",
    "category": "Promo Characters",
    "tags": [
      "johnny-kisch",
      "dynamite-box",
      "stejné-karty",
      "čištění-stolu"
    ],
    "answer": "**Verdict:**\n* All other players at the table must discard 1 card from hand or in play matching the suit of the played card."
  },
  {
    "id": "faq-26",
    "question": "Don Bell is at turn end. When is he NOT allowed to check for an extra turn?",
    "category": "Gold Rush",
    "tags": [
      "don-bell",
      "extra-tah",
      "zlatá-horečka",
      "vězení",
      "město-duchů"
    ],
    "answer": "**Verdict:**\n* If Don Bell is currently taking an extra turn granted by his ability, he cannot chain another extra turn."
  },
  {
    "id": "faq-27",
    "question": "Evan Babbit is targeted by a BANG!. Can he redirect it to the attacker or locomotive?",
    "category": "The Great Train Robbery",
    "tags": [
      "evan-babbit",
      "přesměrování",
      "ironhorse",
      "střelec"
    ],
    "answer": "**Verdict:**\n* He can redirect it to any other player at distance 1 from him by discarding 1 card.\n* He CANNOT redirect it to the locomotive (it is not a player) nor back to the attacker."
  },
  {
    "id": "faq-28",
    "question": "Uncle Will plays a card as General Store and Sgt. Blaze is at the table. How is it resolved?",
    "category": "Promo Characters",
    "tags": [
      "uncle-will",
      "hokynářství",
      "sgt-blaze",
      "dynamite-box"
    ],
    "answer": "**Verdict:**\n* General Store reveals cards equal to living players.\n* Sgt. Blaze chooses his card normally in turn order."
  },
  {
    "id": "faq-29",
    "question": "Emiliano vs Slab the Killer vs Annie Versary. How does Emiliano's card theft work?",
    "category": "Promo Characters",
    "tags": [
      "emiliano",
      "slab-the-killer",
      "annie-versary",
      "vedle",
      "recyklace"
    ],
    "answer": "**Verdict:**\n* Whenever a check is made by any player, if the revealed card is a number card (2 through 10), Emiliano takes it into his hand!"
  },
  {
    "id": "faq-30",
    "question": "Miss Susanna (Wild West Show): Player does not play 3 cards on their turn. When do they lose a life?",
    "category": "Global Events",
    "tags": [
      "slečna-zuzana",
      "wild-west-show",
      "3-karty",
      "ztráta-života"
    ],
    "answer": "**Verdict:**\n* At the very end of their turn (Phase 4). If they played fewer than 3 cards, they lose 1 life point."
  },
  {
    "id": "faq-31",
    "question": "Gag (Wild West Show): Player speaks out of turn. When do they lose a life point?",
    "category": "Global Events",
    "tags": [
      "roubík",
      "wild-west-show",
      "zákaz-mluvení",
      "ztráta-života"
    ],
    "answer": "**Verdict:**\n* The instant they speak! They immediately lose 1 life point. They can save themselves with Beer if reduced to 0 lives."
  },
  {
    "id": "faq-32",
    "question": "Rucksack (Gold Rush) vs Lethal Dynamite damage of 3 lives. How to save yourself?",
    "category": "Gold Rush",
    "tags": [
      "batoh",
      "dynamit",
      "smrtící-zranění",
      "valouny-zlata"
    ],
    "answer": "**Verdict:**\n* The player must pay 2 Gold Nuggets for each life point needed to avoid death. If they have enough nuggets, they survive!"
  },
  {
    "id": "faq-33",
    "question": "Double Shot + Colorado Bill: How many lives does the target lose on a Spade check?",
    "category": "Valley of Shadows",
    "tags": [
      "dvojitá-rána",
      "colorado-bill",
      "piky",
      "2-životy",
      "smrtící-kombo"
    ],
    "answer": "**Verdict:**\n* If Colorado Bill checks a Spade ♠ on Double Shot, both shots cannot be canceled by Missed!. Target loses 2 lives unless saved by Beer."
  },
  {
    "id": "faq-34",
    "question": "Tornado (Valley of Shadows): Player has only 1 card or no cards. How many cards do they pass?",
    "category": "Valley of Shadows",
    "tags": [
      "tornádo",
      "údolí-stínů",
      "předávání-karet",
      "prázdná-ruka"
    ],
    "answer": "**Verdict:**\n* A player passes as many cards as they have up to 2. If they have 0 cards, they pass nothing."
  },
  {
    "id": "faq-35",
    "question": "Free train advance before buying railcar: Is the purchase mandatory?",
    "category": "The Great Train Robbery",
    "tags": [
      "vlak",
      "posun-zdarma",
      "nákup-vagonu",
      "povinnost"
    ],
    "answer": "**Verdict: YES!**\n* If you choose to advance the train 1 station for free, you MUST purchase the attached railcar by paying the station cost!"
  },
  {
    "id": "faq-36",
    "question": "Can a player have 2 identical black equipment cards from Gold Rush in play?",
    "category": "Gold Rush",
    "tags": [
      "černé-vybavení",
      "zlatá-horečka",
      "unikátnost",
      "pravidlo-dvou-karet"
    ],
    "answer": "**Verdict: NO!**\n* The standard BANG! rule applies: a player can never have two cards with the exact same name in play before them."
  },
  {
    "id": "faq-37",
    "question": "Switch card: Can you swap a railcar still attached to the train on the track?",
    "category": "The Great Train Robbery",
    "tags": [
      "výhybka",
      "vlak",
      "karty-ve-hře",
      "vagon"
    ],
    "answer": "**Verdict: YES!**\n* Switch allows swapping any 2 railcars or stations, including those currently in the train lineup."
  },
  {
    "id": "faq-38",
    "question": "Damage dealt by a Legend claiming a feat: Can it be canceled with Missed! or Barrel?",
    "category": "Legends",
    "tags": [
      "legendy",
      "přivlastnění-činu",
      "zranění",
      "neodvratné"
    ],
    "answer": "**Verdict: NO!**\n* It is direct unblockable damage. Only Beer can be played if it would reduce the victim to 0 lives."
  },
  {
    "id": "faq-39",
    "question": "What happens when the Feat deck runs out in Legends?",
    "category": "Legends",
    "tags": [
      "legendy",
      "balíček-činů",
      "zamíchání",
      "dojití-karet"
    ],
    "answer": "**Verdict:**\n* Shuffle the discarded feat cards to form a new draw deck. Feats remain available throughout the entire game."
  },
  {
    "id": "faq-40",
    "question": "Chuck Wengam has 1 life point. Can he sacrifice a life to draw 2 cards?",
    "category": "Dodge City",
    "tags": [
      "chuck-wengam",
      "sebevražda",
      "poslední-život",
      "zákaz"
    ],
    "answer": "**Verdict: NO!**\n* A player cannot voluntarily reduce their life points to 0."
  },
  {
    "id": "faq-41",
    "question": "Elena Fuente faces Slab the Killer. How many cards must she discard?",
    "category": "Dodge City",
    "tags": [
      "elena-fuente",
      "slab-the-killer",
      "2-karty",
      "vedle"
    ],
    "answer": "**Verdict:**\n* She must discard 2 cards from hand to produce 2 Missed! effects to cancel Slab's shot."
  },
  {
    "id": "faq-42",
    "question": "Pedro Ramirez plays in Round 1 and the discard pile is empty. Where does he draw from?",
    "category": "Base Game",
    "tags": [
      "pedro-ramirez",
      "prázdný-balíček",
      "fáze-1"
    ],
    "answer": "**Verdict:**\n* He must draw both cards from the draw deck."
  },
  {
    "id": "faq-43",
    "question": "Rose Doolan vs Paul Regret: What is the resulting distance between them?",
    "category": "Distance & Range",
    "tags": [
      "rose-doolan",
      "paul-regret",
      "vzdálenost",
      "hledí",
      "mustang"
    ],
    "answer": "**Verdict:**\n* Rose Doolan sees at -1; Paul Regret is seen at +1. The modifiers cancel out: distance is 1 (normal)."
  },
  {
    "id": "faq-44",
    "question": "Ghost Car: Can anyone shoot a BANG! or play Panic! on a player with the Ghost Car?",
    "category": "The Great Train Robbery",
    "tags": [
      "vagon-duchů",
      "cíl-útoku",
      "krádež",
      "panika"
    ],
    "answer": "**Verdict: YES!**\n* The player is still an active target; the Ghost Car only prevents them from being eliminated when at 0 lives."
  },
  {
    "id": "faq-45",
    "question": "Does a player with the Ghost Car count as alive for game-end conditions?",
    "category": "The Great Train Robbery",
    "tags": [
      "vagon-duchů",
      "konec-hry",
      "podmínky-vítězství"
    ],
    "answer": "**Verdict: YES!**\n* As long as they have the Ghost Car in play, they count as a living player."
  },
  {
    "id": "faq-46",
    "question": "Big Fifty (A&D) vs Barrel vs Julie Cutter: What exactly does this weapon cancel?",
    "category": "Armed & Dangerous",
    "tags": [
      "big-fifty",
      "barel",
      "julie-cutter",
      "mustang",
      "rušení"
    ],
    "answer": "**Verdict:**\n* Big Fifty ignores the target's character ability and all cards in play (Barrel, Mustang, etc.). Julie Cutter cannot trigger revenge damage."
  },
  {
    "id": "faq-47",
    "question": "Buntline Special (A&D) vs Successful Barrel: Must the target discard a card when Barrel succeeds?",
    "category": "Armed & Dangerous",
    "tags": [
      "buntline-special",
      "barel",
      "odhození-karty"
    ],
    "answer": "**Verdict: NO!**\n* Buntline Special triggers discard only if a Missed! CARD is played, not when a Barrel check succeeds."
  },
  {
    "id": "faq-48",
    "question": "Wooden Dynamite (Dynamite Box variant): What happens to the card after exploding?",
    "category": "Promo Characters",
    "tags": [
      "dřevěný-dynamit",
      "dynamite-box",
      "exploze",
      "zamíchání"
    ],
    "answer": "**Verdict:**\n* The Dynamite card is discarded to the discard pile, while the wooden token is reset for future use."
  },
  {
    "id": "faq-49",
    "question": "Russian Roulette (Fistful of Cards): Who starts and when does it end?",
    "category": "Global Events",
    "tags": [
      "ruská-ruleta",
      "fistful-of-cards",
      "pořadí",
      "konec-rulety"
    ],
    "answer": "**Verdict:**\n* The player whose turn it is starts by discarding a Missed!. Passes left until someone cannot discard and takes 2 damage."
  },
  {
    "id": "faq-50",
    "question": "The Preacher (High Noon) vs Playing BANG! vs Discarding BANG! in a Duel.",
    "category": "Global Events",
    "tags": [
      "kazatel",
      "high-noon",
      "zákaz-bangu",
      "duel"
    ],
    "answer": "**Verdict:**\n* The Preacher forbids playing Beer cards. Discarding BANG! in a Duel is not playing Beer, so it proceeds normally."
  },
  {
    "id": "faq-51",
    "question": "Bone Orchard (Wild West Show): Complete Guide – How do dead players revive, take turns, and what rulings apply?",
    "category": "Global Events",
    "tags": [
      "bone-orchard",
      "hřbitov",
      "krchov",
      "wild-west-show",
      "events",
      "revival",
      "zombie",
      "stagecoach",
      "wells-fargo",
      "elimination"
    ],
    "answer": "**Verdict:** Bone Orchard allows dead players to temporarily return to the game as 'zombies' with 1 life point on their turn, taking full turns with their original role revealed.\n* <strong>1. WHEN & HOW THE EVENT STARTS AND ENDS:</strong>\n* <strong>Entering Play:</strong> In the Wild West Show expansion, events do NOT rotate every round. Bone Orchard enters play <strong>ONLY when a player plays Stagecoach or Wells Fargo</strong> (or any card featuring a stagecoach icon).\n* <strong>Duration:</strong> The card remains active on the table continuously until someone plays another Stagecoach or Wells Fargo and reveals a new event.\n* <strong>2. WHAT EXACTLY HAPPENS ON THE TABLE:</strong>\n* Eliminated players <strong>do NOT all revive at once</strong> the moment the card is revealed! Play proceeds clockwise in standard seating order:\n* <strong>When turn reaches an eliminated player:</strong> Their seat is NOT skipped – the player returns to the game!\n* <strong>Phase 1 (Start of Turn):</strong> The player enters the game and takes <strong>1 life point</strong> (1 bullet / token). Then they draw <strong>2 cards</strong> normally from the draw deck (character drawing abilities like Kit Carlson or Pedro Ramirez function normally).\n* <strong>Phase 2 (Actions):</strong> They play their turn completely normally: can play BANG!, equip weapons and gear, and <strong>most importantly drink Beer</strong> to heal from 1 life to more (up to their character's maximum).\n* <strong>Phase 3 (End of Turn):</strong> Discards down to their current life points (if they did not heal, hand limit is only 1 card). Passes turn clockwise.\n* <strong>3. CRITICAL RULINGS & EDGE CASES (PITFALLS):</strong>\n* <strong>Role is Public Knowledge:</strong> The player plays with their original role (Deputy, Outlaw, Renegade). Because they revealed their role card upon their initial death, everyone already knows their identity. They play with their role face-up!\n* <strong>Kill Bounties & Penalties Apply Again:</strong> If a revived Outlaw is eliminated again, whoever killed them immediately draws the standard bounty of <strong>3 cards</strong>. If the Sheriff kills their revived Deputy, the Sheriff must <strong>discard all cards from hand and in play</strong>.\n* <strong>Sheriff Never Revives:</strong> If the Sheriff dies, the game ends immediately in an Outlaw (or Renegade) victory. A situation where the Sheriff waits to revive via Bone Orchard can never happen in practice.\n* <strong>Re-dying while Bone Orchard is Active:</strong> If a player is eliminated again during the round, and Bone Orchard is still in play when their turn arrives again, they <strong>revive once more with 1 life point</strong> in Phase 1 of their next turn.\n* <strong>What Happens when Bone Orchard Leaves Play (New Stagecoach played):</strong>\n* <strong>Surviving Revived Players Stay Alive:</strong> Players who revived and are currently alive (have $\\ge 1$ life point) when the event changes <strong>remain in the game permanently</strong> – they do not die, they are fully restored living players!\n* <strong>Dead Players Stay Eliminated:</strong> Eliminated players whose turn never arrived (or who are dead at the exact moment the card changes) remain permanently eliminated."
  }
]
