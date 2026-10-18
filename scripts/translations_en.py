# -*- coding: utf-8 -*-
"""
English translations for BANG! cards, expansions, and game elements.
"""

EXPANSION_NAMES_EN = {
    'base': 'Base Game',
    'dodge-city': 'Dodge City',
    'gold-rush': 'Gold Rush',
    'armed-dangerous': 'Armed & Dangerous',
    'train-robbery': 'The Great Train Robbery',
    'valley-of-shadows': 'Valley of Shadows',
    'high-noon': 'High Noon',
    'fistful-of-cards': 'A Fistful of Cards',
    'wild-west-show': 'Wild West Show',
    'legends': 'Legends',
    'dynamite-box': 'Dynamite Box & Promo'
}

TYPE_LABELS_EN = {
    'role': 'Role Card',
    'brown': 'Brown Card (Immediate)',
    'blue': 'Blue Card (In Play)',
    'green': 'Green Card (Dodge City)',
    'orange': 'Dangerous Card (Orange)',
    'black': 'Black Equipment',
    'brown-equipment': 'Brown Equipment',
    'character': 'Character',
    'legend-character': 'Legendary Character',
    'railcar': 'Railcar',
    'station': 'Station',
    'feat': 'Feat Card (Legends)',
    'event': 'Global Event'
}

# Specific English translations for cards
CARDS_EN = {
    # ROLES
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

    # BASE CHARACTERS
    "char-bart-cassidy": {
        "effect": "Each time he loses a life point, he immediately draws a card from the draw deck."
    },
    "char-black-jack": {
        "effect": "During Phase 1, reveals the 2nd card drawn: if Hearts ♥ or Diamonds ♦, draws 1 extra card."
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
        "effect": "Has a built-in Barrel: whenever targeted by a BANG!, draws from the deck to cancel the shot on Hearts ♥."
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

    # BASE CARDS
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
        "effect": "When targeted by a BANG!, draw: if Hearts ♥, you avoid the shot without needing a Missed! card."
    },
    "card-jail": {
        "effect": "Play on any player (except Sheriff). At the start of their turn, draw: if Hearts ♥, they escape; otherwise they skip their turn."
    },
    "card-dynamite": {
        "effect": "Passes clockwise. At the start of each player's turn, draw: if Spades ♠ 2–9, it explodes for 3 life points! Otherwise passes to the left."
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
    }
}
