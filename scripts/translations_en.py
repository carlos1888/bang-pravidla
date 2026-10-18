# -*- coding: utf-8 -*-
"""
Complete English Card Database Translations for BANG! Dynamite Box & Legends.
"""

EXPANSION_NAMES_EN = {
  "all": "All Expansions (234 items)",
  "base": "Base Game",
  "dodge-city": "Dodge City",
  "gold-rush": "Gold Rush",
  "armed-dangerous": "Armed & Dangerous",
  "train-robbery": "The Great Train Robbery",
  "valley-of-shadows": "Valley of Shadows",
  "high-noon": "High Noon",
  "fistful-of-cards": "A Fistful of Cards",
  "wild-west-show": "Wild West Show",
  "legends": "Legends",
  "dynamite-box": "Dynamite Box & Promo"
}

TYPE_LABELS_EN = {
  "role": "Role Card",
  "brown": "Brown Card (Immediate)",
  "blue": "Blue Card (In Play)",
  "green": "Green Card (Dodge City)",
  "orange": "Dangerous Card (Orange)",
  "black": "Black Equipment",
  "brown-equipment": "Brown Equipment",
  "character": "Character",
  "legend-character": "Legendary Character",
  "railcar": "Railcar",
  "station": "Station",
  "feat": "Feat Card (Legends)",
  "event": "Global Event"
}

CARDS_EN = {
  "role-sheriff": {
    "effect": "Plays with role revealed. Starts with 1 extra bullet (life point). Starts the game. Goal: Kill all Outlaws and the Renegade."
  },
  "role-deputy": {
    "effect": "Plays with role hidden. Protects the Sheriff at all costs. Goal: Same as Sheriff (kill all Outlaws and Renegade). Wins if Sheriff wins."
  },
  "role-outlaw": {
    "effect": "Plays with role hidden. Goal: Eliminate the Sheriff. Wins immediately when Sheriff is killed."
  },
  "role-renegade": {
    "effect": "Plays with role hidden. Goal: Be the last surviving player in the game. Must eliminate Sheriff last in 1v1 duel."
  },
  "char-bart-cassidy": {
    "effect": "Each time he loses a life point, he immediately draws a card from the draw deck."
  },
  "char-black-jack": {
    "effect": "During Phase 1, reveals the 2nd card drawn: if Hearts \u2665 or Diamonds \u2666, draws 1 extra card."
  },
  "char-calamity-janet": {
    "effect": "Can play BANG! cards as Missed! and Missed! cards as BANG!."
  },
  "char-el-gringo": {
    "effect": "Each time he loses a life point from a player's card, draws 1 random card from that player's hand."
  },
  "char-jesse-jones": {
    "effect": "During Phase 1, may draw his 1st card from any other player's hand instead of the deck."
  },
  "char-jourdonnais": {
    "effect": "Has a built-in Barrel: whenever targeted by a BANG!, draws from the deck to cancel the shot on Hearts \u2665."
  },
  "char-kit-carlson": {
    "effect": "During Phase 1, looks at the top 3 cards of the deck, chooses 2 for his hand, and returns 1 to the top."
  },
  "char-lucky-duke": {
    "effect": "Whenever he draws from the deck (check), flips 2 cards and chooses the result he prefers."
  },
  "char-paul-regret": {
    "effect": "All other players see him at distance +1 (built-in Mustang)."
  },
  "char-pedro-ramirez": {
    "effect": "During Phase 1, may take his 1st card from the top of the discard pile."
  },
  "char-rose-doolan": {
    "effect": "Sees all other players at distance -1 (built-in Scope)."
  },
  "char-sid-ketchum": {
    "effect": "May discard any 2 cards from his hand to regain 1 life point at any time on his turn."
  },
  "char-slab-the-killer": {
    "effect": "Players must play 2 Missed! cards to cancel his BANG! attacks."
  },
  "char-suzy-lafayette": {
    "effect": "As soon as she has no cards in hand, immediately draws 1 card from the deck."
  },
  "char-vulture-sam": {
    "effect": "Whenever any player is eliminated, takes all cards from their hand and in play."
  },
  "char-willy-the-kid": {
    "effect": "May play any number of BANG! cards on his turn."
  },
  "card-bang": {
    "effect": "A shot at another player within weapon range. The target must play a Missed! card or lose 1 life point. Limit 1 BANG! per turn."
  },
  "card-missed": {
    "effect": "Cancel a BANG! attack played against you."
  },
  "card-beer": {
    "effect": "Regain 1 lost life point (up to your starting maximum). Can be played out of turn when losing your last life point. Has no healing effect with only 2 players left."
  },
  "card-saloon": {
    "effect": "All living players regain 1 life point immediately. Cannot be played out of turn to prevent death."
  },
  "card-stagecoach": {
    "effect": "Draw 2 cards from the draw deck."
  },
  "card-wells-fargo": {
    "effect": "Draw 3 cards from the draw deck."
  },
  "card-general-store": {
    "effect": "Reveal as many cards from the deck as living players. In turn order starting with you, each player chooses 1 card."
  },
  "card-panic": {
    "effect": "Draw 1 card from any player at distance 1 (from hand or in play)."
  },
  "card-cat-balou": {
    "effect": "Force any player at any distance to discard 1 card (from hand or in play)."
  },
  "card-duel": {
    "effect": "Challenge any player. Both players alternately discard a BANG! card. The first who fails loses 1 life point."
  },
  "card-indians": {
    "effect": "All other players must discard a BANG! card or lose 1 life point. Missed! has no effect."
  },
  "card-gatling": {
    "effect": "Fires a BANG! attack at all other living players in play. Does not count toward your 1 BANG! per turn limit."
  },
  "card-barrel": {
    "effect": "When targeted by a BANG!, draw: if Hearts \u2665, you avoid the shot without needing a Missed! card."
  },
  "card-jail": {
    "effect": "Play on any player (except Sheriff). At the start of their turn, draw: if Hearts \u2665, they escape; otherwise they skip their turn."
  },
  "card-dynamite": {
    "effect": "Passes clockwise. At the start of each player's turn, draw: if Spades \u2660 2\u20139, it explodes for 3 life points! Otherwise passes to the left."
  },
  "card-mustang": {
    "effect": "Other players see you at distance +1."
  },
  "card-scope": {
    "effect": "You see all other players at distance -1 (minimum distance is 1)."
  },
  "card-volcanic": {
    "effect": "Firearm weapon with Range 1. Allows you to play any number of BANG! cards per turn."
  },
  "card-schofield": {
    "effect": "Firearm weapon with Range 2."
  },
  "card-remington": {
    "effect": "Firearm weapon with Range 3."
  },
  "card-rev-carabine": {
    "effect": "Firearm weapon with Range 4."
  },
  "card-winchester": {
    "effect": "Firearm weapon with Range 5."
  },
  "char-apache-kid": {
    "effect": "Cards with Diamonds \u2666 played by other players have no effect on him."
  },
  "char-belle-star": {
    "effect": "During her turn, cards in play in front of other players have no effect."
  },
  "char-bill-noface": {
    "effect": "During Phase 1, draws 1 card plus 1 card for each wound he currently has."
  },
  "char-chuck-wengam": {
    "effect": "On his turn, may lose 1 life point to immediately draw 2 cards from the deck."
  },
  "char-doc-holyday": {
    "effect": "Once per turn, may discard any 2 cards from his hand to count as playing a BANG! card."
  },
  "char-elena-fuente": {
    "effect": "May use any card from her hand as a Missed! card."
  },
  "char-greg-digger": {
    "effect": "Each time another player is eliminated, immediately regains 2 life points."
  },
  "char-herb-hunter": {
    "effect": "Each time another player is eliminated, immediately draws 2 cards from the deck."
  },
  "char-jose-delgado": {
    "effect": "Up to twice per turn, may discard 1 blue card from hand to draw 2 cards from the deck."
  },
  "char-molly-stark": {
    "effect": "Whenever she plays or discards a card out of turn, immediately draws 1 card from the deck."
  },
  "char-pat-brennan": {
    "effect": "During Phase 1, may choose to draw 1 card in play in front of any player instead of 2 cards from deck."
  },
  "char-pixie-pete": {
    "effect": "During Phase 1, draws 3 cards from the deck instead of 2."
  },
  "char-sean-mallory": {
    "effect": "In Phase 3, he may hold up to 10 cards in hand regardless of his current life points."
  },
  "char-tequila-joe": {
    "effect": "Whenever he plays a Beer card, he regains 2 life points instead of 1."
  },
  "char-vera-custer": {
    "effect": "At the start of her turn, chooses 1 other living character in play and gains their ability until her next turn."
  },
  "card-bible": {
    "effect": "Green card. Discard on your turn after being targeted by BANG!: acts as Missed! and draw 1 card."
  },
  "card-canteen": {
    "effect": "Green card. Discard on your turn: regain 1 life point."
  },
  "card-conestoga": {
    "effect": "Green card. Discard on your turn: draw 1 card from any player regardless of distance."
  },
  "card-derringer": {
    "effect": "Green card. Discard on your turn: fire a BANG! at distance 1 and draw 1 card from deck."
  },
  "card-howitzer": {
    "effect": "Green card. Discard on your turn: fire a BANG! at all other living players (like Gatling)."
  },
  "card-iron-plate": {
    "effect": "Green card. Discard when targeted by BANG!: acts as a Missed! card."
  },
  "card-knife": {
    "effect": "Green card. Discard on your turn: fire a BANG! at distance 1."
  },
  "card-pepperbox": {
    "effect": "Green card. Discard on your turn: fire a BANG! within your weapon range."
  },
  "card-pony-express": {
    "effect": "Green card. Discard on your turn: draw 3 cards from the deck."
  },
  "card-sombrero": {
    "effect": "Green card. Discard when targeted by BANG!: acts as a Missed! card."
  },
  "card-ten-gallon-hat": {
    "effect": "Green card. Discard when targeted by BANG!: acts as a Missed! card."
  },
  "card-buffalo-rifle": {
    "effect": "Green card. Discard on your turn: fire a BANG! at any player regardless of distance."
  },
  "card-dodge": {
    "effect": "Brown card. Acts as a Missed! card and draw 1 card from the deck."
  },
  "card-punch": {
    "effect": "Brown card. A melee BANG! attack at distance 1."
  },
  "card-springfield": {
    "effect": "Brown card. Discard with 1 other card: fire a BANG! at any player regardless of distance."
  },
  "card-brawl": {
    "effect": "Brown card. Discard with 1 other card: all other players must discard 1 card from hand or in play."
  },
  "card-rag-time": {
    "effect": "Brown card. Discard with 1 other card: draw 1 card from any player regardless of distance."
  },
  "card-whisky": {
    "effect": "Brown card. Discard with 1 other card: regain 2 life points."
  },
  "card-tequila": {
    "effect": "Brown card. Discard with 1 other card: regain 1 life point."
  },
  "char-don-bell": {
    "effect": "At the end of his turn, draw: on Hearts \u2665 or Diamonds \u2666, he immediately takes another entire turn!"
  },
  "char-dutch-will": {
    "effect": "During Phase 1, draws 2 cards, keeps 1, and discards the other to take 1 Gold Nugget from the bank."
  },
  "char-jacky-murieta": {
    "effect": "May pay 2 Gold Nuggets to fire a BANG! without playing a card."
  },
  "char-josh-mccloud": {
    "effect": "May pay 2 Gold Nuggets to draw the top card from the equipment deck."
  },
  "char-madam-yto": {
    "effect": "Whenever any Beer card is played, immediately draws 1 card from the draw deck."
  },
  "char-pretty-luzena": {
    "effect": "May purchase 1 equipment card each turn with a discount of 1 Gold Nugget."
  },
  "char-raddie-snake": {
    "effect": "Up to twice per turn, may pay 1 Gold Nugget to draw 1 card from the deck."
  },
  "char-simeon-picos": {
    "effect": "Each time he loses a life point, takes 1 Gold Nugget from the bank."
  },
  "equip-boots": {
    "effect": "Black equipment. Cost 1. Whenever you lose a life point, draw 1 card from the deck."
  },
  "equip-calumet": {
    "effect": "Black equipment. Cost 3. Diamond \u2666 cards played by other players have no effect on you."
  },
  "equip-gold-pan": {
    "effect": "Black equipment. Cost 1. Up to twice per turn, pay 1 Gold Nugget to draw 1 card from the deck."
  },
  "equip-horseshoe": {
    "effect": "Black equipment. Cost 2. Whenever you draw (check), flip 1 additional card and choose the result."
  },
  "equip-talisman": {
    "effect": "Black equipment. Cost 1. Whenever you lose a life point from another player's card, take 1 Gold Nugget."
  },
  "equip-rucksack": {
    "effect": "Black equipment. Cost 2. Pay 2 Gold Nuggets to regain 1 life point."
  },
  "equip-gun-belt": {
    "effect": "Black equipment. Cost 2. Your hand card limit is fixed at 8 cards regardless of current life points."
  },
  "equip-pickaxe": {
    "effect": "Black equipment. Cost 4. During Phase 1, draw 1 additional card from the deck."
  },
  "equip-bottle": {
    "effect": "Brown equipment. Cost 2. May be discarded to act as Beer, Panic!, or BANG!."
  },
  "equip-pardner": {
    "effect": "Brown equipment. Cost 2. Discard to act as Cat Balou, Duel, or General Store."
  },
  "equip-rhum": {
    "effect": "Brown equipment. Cost 2. Discard and draw 4 cards (check): regain 1 life point for each Heart \u2665."
  },
  "equip-wanted": {
    "effect": "Brown equipment. Cost 2. Place in front of any player. Whoever eliminates them draws 2 cards and takes 1 Gold Nugget."
  },
  "equip-union-pacific": {
    "effect": "Brown equipment. Cost 4. Draw 4 cards from the draw deck."
  },
  "equip-gold-rush": {
    "effect": "Brown equipment. Cost 5. Ends your turn and immediately starts a new turn for you with full life points restored!"
  },
  "char-al-preacher": {
    "effect": "When another player plays a blue or orange card, may pay 2 load tokens to draw 1 card from deck."
  },
  "char-bass-greeves": {
    "effect": "May discard 1 card from hand to place 2 load tokens on one of his cards."
  },
  "char-bloody-mary": {
    "effect": "Whenever her BANG! is canceled by Missed!, she immediately draws 1 card from the deck."
  },
  "char-frankie-canton": {
    "effect": "Once per turn, may take 1 load token from any card in play and put it on his character."
  },
  "char-julie-cutter": {
    "effect": "Whenever a player causes her to lose a life point, she draws (check): on Hearts/Diamonds, that player loses 1 life point."
  },
  "char-mexicali-kid": {
    "effect": "Once per turn, may pay 2 load tokens to fire a BANG! (does not count toward the 1 BANG! limit)."
  },
  "char-ms-abigail": {
    "effect": "Ignores brown cards with values J, Q, K, A played against her if she is the sole target."
  },
  "char-red-ringo": {
    "effect": "May place up to 4 load tokens on his character card at game start."
  },
  "weapon-double-barrel": {
    "effect": "Orange weapon. Range 1. Loaded with 3 tokens. Pay 1 token on BANG!: target must play 2 Missed! to cancel."
  },
  "weapon-buntline-special-ad": {
    "effect": "Orange weapon. Range 2. Loaded with 3 tokens. Pay 1 token on BANG!: if target cancels with Missed!, they must discard 1 card."
  },
  "weapon-thunderer": {
    "effect": "Orange weapon. Range 3. Loaded with 3 tokens. Pay 1 token on BANG!: target cannot play Missed!."
  },
  "weapon-big-fifty": {
    "effect": "Orange weapon. Range 6. Loaded with 3 tokens. Pay 1 token on BANG!: target's character ability and cards in play are ignored."
  },
  "card-bomb": {
    "effect": "Orange card. Loaded with 3 tokens. In Phase 0 draw (check): on Hearts/Diamonds passes left; on Clubs/Spades lose 2 tokens (explodes for 2 lives at 0)."
  },
  "card-whip": {
    "effect": "Orange card. Loaded with 3 tokens. Pay 1 token on your turn: force any player to discard 1 card in play."
  },
  "card-crate": {
    "effect": "Orange card. Loaded with 3 tokens. Pay 2 tokens when targeted by BANG!: acts as Missed!."
  },
  "card-bandolier": {
    "effect": "Orange card. Loaded with 3 tokens. Pay 1 token: play an additional BANG! card this turn."
  },
  "card-bell-tower": {
    "effect": "Orange card. Loaded with 3 tokens. Pay 1 token: you see all players at distance 1 for your next card."
  },
  "card-a-little-nip": {
    "effect": "Brown card. Regain 1 life point. Boost: pay 1 token to regain 2 life points."
  },
  "card-beer-keg": {
    "effect": "Brown card. Regain 1 life point. Boost: pay 2 tokens to regain 2 life points."
  },
  "card-arrow": {
    "effect": "Brown card. Shoot an arrow at any player (BANG!). Boost: pay 1 token to make it uncancelable."
  },
  "card-quick-shot": {
    "effect": "Brown card. Shoot a BANG!. Boost: pay 1 token to immediately draw 1 card."
  },
  "card-flintlock": {
    "effect": "Brown card. Shoot a BANG!. Boost: pay 2 tokens, target must play 2 Missed!."
  },
  "card-tumbleweed": {
    "effect": "Brown card. Play immediately after any draw (check) to cancel it and force a redraw."
  },
  "card-rust": {
    "effect": "Brown card. Remove 1 load token from each card of all other players."
  },
  "card-reloading": {
    "effect": "Brown card. Place 3 load tokens on your character card."
  },
  "char-benny-brawler": {
    "effect": "May take a railcar from the station without paying the station cost if he pays 1 life point."
  },
  "char-evan-babbit": {
    "effect": "Whenever targeted by BANG!, may redirect it to another player at distance 1 by discarding 1 card."
  },
  "char-jimmy-texas": {
    "effect": "At the end of his turn, immediately draws 1 extra card from the deck."
  },
  "char-manuelita": {
    "effect": "Sees all other players at distance -1 for each railcar in play in front of her."
  },
  "char-sancho": {
    "effect": "Whenever a railcar in front of any player is discarded or upgraded, takes it into his hand."
  },
  "char-shade-oconnor": {
    "effect": "May pay the station cost by discarding cards from hand or load tokens."
  },
  "char-sgt-blaze": {
    "effect": "May shoot through other players: ignores distance modifiers for weapon range."
  },
  "char-zippy-roy": {
    "effect": "May advance the train 1 extra station on his turn."
  },
  "train-ironhorse": {
    "effect": "Locomotive. Advances with Sheriff. Reaching the end triggers a lethal BANG! against all living players."
  },
  "train-leland": {
    "effect": "Locomotive. Advances with Sheriff. Provides station bonus cards to the current player."
  },
  "railcar-circus-wagon": {
    "effect": "Railcar. You see all other players at distance -1."
  },
  "railcar-express-car": {
    "effect": "Railcar. During Phase 1, draw 1 additional card from the deck."
  },
  "railcar-lumber-flatcar": {
    "effect": "Railcar. Other players see you at distance +1."
  },
  "railcar-lounge-car": {
    "effect": "Railcar. On your turn, discard 1 card to regain 1 life point."
  },
  "railcar-private-car": {
    "effect": "Railcar. You cannot be targeted by BANG! from players at distance 1."
  },
  "railcar-caboose": {
    "effect": "Railcar. When targeted by BANG!, draw (check): on Hearts \u2665 cancel the shot."
  },
  "railcar-ghost-car": {
    "effect": "Railcar. Prevents lethal damage: when you would die, stay alive with 0 life points."
  },
  "railcar-sleeper-car": {
    "effect": "Railcar. Immune to Jail cards."
  },
  "station-boom-town": {
    "effect": "Station tile. Purchase cost: discard 1 card. Grants the attached railcar."
  },
  "station-dodgeville": {
    "effect": "Station tile. Purchase cost: discard 2 cards. Grants the attached railcar."
  },
  "station-silverado": {
    "effect": "Station tile. Purchase cost: discard 1 Diamond \u2666 card. Grants the attached railcar."
  },
  "station-callico": {
    "effect": "Station tile. Purchase cost: discard 1 Heart \u2665 card. Grants the attached railcar."
  },
  "station-deathwood": {
    "effect": "Station tile. Purchase cost: discard 1 Club \u2663 card. Grants the attached railcar."
  },
  "station-tombrock": {
    "effect": "Station tile. Purchase cost: discard 1 Spade \u2660 card. Grants the attached railcar."
  },
  "station-virginian-city": {
    "effect": "Station tile. Purchase cost: lose 1 life point. Grants the attached railcar."
  },
  "station-yooma": {
    "effect": "Station tile. Purchase cost: discard 1 weapon card. Grants the attached railcar."
  },
  "station-fort-woth": {
    "effect": "Station tile. Purchase cost: pay 2 load tokens or discard 2 cards."
  },
  "station-santa-fe": {
    "effect": "Station tile. Purchase cost: discard 1 blue card."
  },
  "station-oathman": {
    "effect": "Station tile. Purchase cost: discard 1 green or orange card."
  },
  "station-st-francis": {
    "effect": "Station tile. Purchase cost: discard 1 BANG! card."
  },
  "station-cripple-crack": {
    "effect": "Station tile. Purchase cost: discard 1 Missed! card."
  },
  "card-train-robbery": {
    "effect": "Brown card. Advance the train 1 station and take the attached railcar for free."
  },
  "card-map": {
    "effect": "Blue card. In Phase 0, look at top 2 cards of deck and discard 1."
  },
  "card-knife-revolver": {
    "effect": "Brown card. Acts as a BANG! attack or draw 1 card."
  },
  "card-refund": {
    "effect": "Brown card. Discard 1 card in play to draw 2 cards from deck."
  },
  "card-full-steam": {
    "effect": "Brown card. Advance the train 2 stations immediately."
  },
  "card-switch": {
    "effect": "Brown card. Switch the positions of 2 stations or railcars."
  },
  "card-evaded": {
    "effect": "Brown card. Cancel an attack and draw 1 card."
  },
  "char-henry-block": {
    "effect": "Anyone who draws or forces him to discard a card becomes target of a BANG! attack."
  },
  "char-colorado-bill": {
    "effect": "Whenever he plays a BANG!, draws (check): on Spades \u2660, the shot cannot be canceled."
  },
  "char-evelyn-shebang": {
    "effect": "During Phase 1, may choose not to draw to fire a BANG! at distance 1."
  },
  "char-mick-defender": {
    "effect": "May use any card from hand as Missed! if targeted by a card other than BANG!."
  },
  "char-black-flower": {
    "effect": "Once per turn, may use any Clubs \u2663 card as a BANG!."
  },
  "char-der-spot-burst-ringer": {
    "effect": "Once per turn, may play a BANG! without counting toward his limit."
  },
  "char-tuco-the-franciscan": {
    "effect": "During Phase 1, draws 2 cards from deck. If he has no blue cards in play, draws 1 extra card."
  },
  "card-ghost": {
    "effect": "Blue card. Play on an eliminated player: returns as a ghost without role or character ability."
  },
  "card-rattlesnake": {
    "effect": "Blue card. Place in front of any player. In Phase 0 draw (check): on Spades \u2660, lose 1 life point."
  },
  "card-shotgun": {
    "effect": "Brown card. Shoot a player. Target loses 1 life point and discards 1 card from hand."
  },
  "card-return-fire": {
    "effect": "Brown card. Cancel a BANG! and immediately fire a BANG! back at the attacker."
  },
  "card-tornado": {
    "effect": "Brown card. All other players must discard 2 cards from hand."
  },
  "card-double-shot": {
    "effect": "Brown card. Fire 2 BANG! attacks at the same or different targets."
  },
  "card-escape": {
    "effect": "Brown card. Cancel any card played against you (like Missed! or against Cat Balou)."
  },
  "card-lemat": {
    "effect": "Blue weapon. Range 1. Any card from hand may be played as a BANG!."
  },
  "card-last-call": {
    "effect": "Brown card. Regain 1 life point even if only 2 players remain in the game."
  },
  "event-ghost-town": {
    "effect": "Event. Dead players return as ghosts on their turns: draw 3 cards, cannot die, leave at turn end."
  },
  "event-the-doctor": {
    "effect": "Event. Living players with lowest life points regain 1 life point."
  },
  "event-the-daltons": {
    "effect": "Event. When revealed, all players with blue cards in play discard 1 blue card."
  },
  "event-the-preacher": {
    "effect": "Event. Beer cards cannot be played."
  },
  "event-thirst": {
    "effect": "Event. Players draw only 1 card during Phase 1."
  },
  "event-train-arrival": {
    "effect": "Event. Players draw 1 extra card during Phase 1."
  },
  "event-high-noon": {
    "effect": "Event. Each player loses 1 life point at the start of their turn. Lasts until game end."
  },
  "event-a-fistful-of-cards": {
    "effect": "Event. At the start of their turn, player is targeted by as many BANG!s as cards in hand."
  },
  "event-sniper": {
    "effect": "Event. Players may discard 2 BANG! cards to fire an uncancelable shot."
  },
  "event-abandoned-mine": {
    "effect": "Event. In Phase 1, players draw from discard pile if possible."
  },
  "event-lasso": {
    "effect": "Event. Cards in play in front of all players have no effect."
  },
  "event-russian-roulette": {
    "effect": "Event. Starting with Sheriff, players alternately discard a Missed! or lose 2 life points."
  },
  "char-flint-westwood": {
    "effect": "On his turn, may trade 1 card from hand for 2 random cards from another player's hand."
  },
  "char-greygory-deck": {
    "effect": "At the start of his turn, may draw 2 character cards and choose which one to use this round."
  },
  "char-john-pain": {
    "effect": "Whenever any player draws (check), takes the flipped card into his hand if he has under 6 cards."
  },
  "char-lee-van-kliff": {
    "effect": "On his turn, may discard a BANG! to repeat the effect of the brown card he just played."
  },
  "char-teren-kill": {
    "effect": "Whenever he would be eliminated, draws (check): on anything except Spades \u2660, stays alive with 1 life."
  },
  "event-wild-west-show": {
    "effect": "Event. The goal of all players becomes: be the last one alive! Roles are suspended."
  },
  "event-showdown": {
    "effect": "Event. All cards may be played as BANG!, and all cards may be played as Missed!."
  },
  "event-bone-orchard": {
    "effect": "Event. Eliminated players return with 1 life point on their turn."
  },
  "event-miss-susanna": {
    "effect": "Event. Each player must play at least 3 cards on their turn or lose 1 life point."
  },
  "event-gag": {
    "effect": "Event. Players cannot talk. Whoever speaks loses 1 life point."
  },
  "legend-bart-cassidy": {
    "effect": "Legendary Bart Cassidy (Side B). Whenever he loses a life point, draws 2 cards from deck."
  },
  "legend-black-jack": {
    "effect": "Legendary Black Jack (Side B). In Phase 1, reveals top 2 cards: on red card, draws 2 extra cards."
  },
  "legend-calamity-janet": {
    "effect": "Legendary Calamity Janet (Side B). May play any card as BANG! or Missed!."
  },
  "legend-el-gringo": {
    "effect": "Legendary El Gringo (Side B). When taking damage, steals 2 cards from attacker's hand."
  },
  "legend-jourdonnais": {
    "effect": "Legendary Jourdonnais (Side B). When targeted by brown cards, draws: J, Q, K, A cancels the card."
  },
  "legend-lucky-duke": {
    "effect": "Legendary Lucky Duke (Side B). Draws 3 cards on checks and picks the best result."
  },
  "legend-paul-regret": {
    "effect": "Legendary Paul Regret (Side B). Distance to him is increased by +2."
  },
  "legend-rose-doolan": {
    "effect": "Legendary Rose Doolan (Side B). Sees all other players at distance 1 regardless of cards."
  },
  "legend-sid-ketchum": {
    "effect": "Legendary Sid Ketchum (Side B). May discard any 1 card to regain 1 life point."
  },
  "legend-slab-the-killer": {
    "effect": "Legendary Slab the Killer (Side B). Targets must play 3 Missed! cards to cancel his BANG!."
  },
  "legend-suzy-lafayette": {
    "effect": "Legendary Suzy Lafayette (Side B). Whenever she has 1 or fewer cards in hand, draws 2 cards."
  },
  "legend-vulture-sam": {
    "effect": "Legendary Vulture Sam (Side B). When any player dies, takes all their cards and heals 2 lives."
  },
  "legend-willy-the-kid": {
    "effect": "Legendary Willy the Kid (Side B). Unlimited BANG! cards; his BANG!s deal 2 damage."
  },
  "feat-vlak-do-yoomy": {
    "effect": "Feat: 3:10 to Yuma. Accomplish: advance train 2 stations. Reward: 2 Fame tokens."
  },
  "feat-pohranici": {
    "effect": "Feat: The Frontier. Accomplish: eliminate a player. Reward: 2 Fame tokens."
  },
  "feat-dobra-spolecnost": {
    "effect": "Feat: Good Company. Accomplish: have 3 cards in play. Reward: 2 Fame tokens."
  },
  "feat-posledni-hrdina": {
    "effect": "Feat: The Last Hero. Accomplish: survive lethal damage with Beer. Reward: 2 Fame tokens."
  },
  "feat-oregonska-stezka": {
    "effect": "Feat: Oregon Trail. Accomplish: hold 5 cards in hand at turn end. Reward: 2 Fame tokens."
  },
  "feat-zdeseny-vykrik": {
    "effect": "Feat: Terrified Scream. Accomplish: hit 2 players with BANG!s in 1 turn. Reward: 2 Fame tokens."
  },
  "feat-padesat-pistoli": {
    "effect": "Feat: Fifty Pistols. Accomplish: equip weapon Range 3+. Reward: 2 Fame tokens."
  },
  "feat-hrdlo-lahve": {
    "effect": "Feat: Bottleneck. Accomplish: discard Beer card voluntarily. Reward: 2 Fame tokens."
  },
  "feat-banda-ze-stareho-zapadu": {
    "effect": "Feat: Old West Gang. Accomplish: have 2 Fame tokens on feats. Reward: 2 Fame tokens."
  },
  "feat-bezejmenny-muz": {
    "effect": "Feat: The Man with No Name. Accomplish: lose 1 life point voluntarily. Reward: 2 Fame tokens."
  },
  "feat-zranena-pycha": {
    "effect": "Feat: Wounded Pride. Accomplish: cancel an attack with Missed!. Reward: 2 Fame tokens."
  },
  "weapon-colt-45": {
    "effect": "Default weapon pictured on player board. Range 1."
  },
  "weapon-volcanic": {
    "effect": "Firearm weapon with Range 1. Allows you to play any number of BANG! cards on your turn."
  },
  "weapon-schofield": {
    "effect": "Firearm weapon with Range 2."
  },
  "weapon-remington": {
    "effect": "Firearm weapon with Range 3."
  },
  "weapon-rev-carabine": {
    "effect": "Firearm weapon with Range 4."
  },
  "weapon-winchester": {
    "effect": "Firearm weapon with Range 5."
  },
  "card-can-can": {
    "effect": "Green card. Discard on your turn: force any player to discard 1 card from hand or in play."
  },
  "card-hideout": {
    "effect": "Blue card. Other players see you at distance +1 (acts like Mustang)."
  },
  "card-binoculars": {
    "effect": "Blue card. You see all other players at distance -1 (acts like Scope)."
  },
  "char-johnny-kisch": {
    "effect": "Whenever he puts a card into play, all other players must discard 1 card with the same suit."
  },
  "char-uncle-will": {
    "effect": "Once per turn, may play any card from his hand as a General Store."
  },
  "char-claus-the-saint": {
    "effect": "During Phase 1, draws cards equal to living players + 1, keeps 2, and distributes 1 to each other player."
  },
  "char-annie-versary": {
    "effect": "May use any card from hand as a BANG! card (does not count toward 1 BANG! limit)."
  },
  "char-emiliano": {
    "effect": "Whenever he draws (check), if it is a number card (2\u201310), takes it into his hand."
  },
  "card-new-identity": {
    "effect": "Brown card. Swap your character card for a new random character from the box with full lives."
  },
  "card-handcuffs": {
    "effect": "Brown card. Target player cannot play cards of a chosen suit until their next turn."
  },
  "token-wooden-dynamite": {
    "effect": "Blue card. Wooden Dynamite marker: passes left; explodes on \u2660 2\u20139 for 3 damage."
  },
}
