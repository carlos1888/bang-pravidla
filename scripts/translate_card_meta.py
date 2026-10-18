# -*- coding: utf-8 -*-
import json
import re

COSTS_EN = {
  "1 valoun zlata za kartu": "1 Gold Nugget per card",
  "1 vybraná karta z ruky": "1 chosen card from hand",
  "1 žeton nabití při výstřelu": "1 load token when firing",
  "1 žeton za další opakování": "1 load token per repetition",
  "2 valouny zlata": "2 Gold Nuggets",
  "2 žetony nabití": "2 load tokens",
  "2 žetony nabití za další cíl": "2 load tokens per additional target",
  "2 žetony pro vrácení do ruky": "2 load tokens to return to hand",
  "2 žetony za další cíl": "2 load tokens per additional target",
  "3 valouny zlata": "3 Gold Nuggets",
  "3 žetony nabití při vyložení": "3 load tokens when entering play",
  "3 žetony za každé vylepšení": "3 load tokens per upgrade",
  "4 valouny zlata": "4 Gold Nuggets",
  "5 valounů zlata": "5 Gold Nuggets",
  "Cena stanice při nákupu": "Station cost upon purchase",
  "Dobrat o 1 kartu méně": "Draw 1 fewer card",
  "Karty se stejným názvem": "Cards with the same name",
  "Odhození 1 karty z ruky": "Discard 1 card from hand",
  "Odhození 1 modré karty z ruky": "Discard 1 blue card from hand",
  "Odhození 2 karet BANG!": "Discard 2 BANG! cards",
  "Odhození 2 karet z ruky": "Discard 2 cards from hand",
  "Odhození další karty z ruky": "Discard 1 additional card from hand",
  "Odhození karty BANG!": "Discard 1 BANG! card",
  "Odhození karty Pivo": "Discard 1 Beer card",
  "Odhození karty stejné barvy": "Discard card of the same suit",
  "Odhození modré karty ze hry": "Discard 1 blue card from in play",
  "Odhození ze hry": "Discard from play",
  "Odhoď 10, J, Q, K nebo A": "Discard 10, J, Q, K, or A",
  "Odhoď 2 libovolné karty": "Discard any 2 cards",
  "Odhoď Panika! nebo Cat Balou": "Discard Panic! or Cat Balou",
  "Odhoď kartu 2-9": "Discard a card valued 2–9",
  "Odhoď kartu BANG!": "Discard a BANG! card",
  "Odhoď kartu Pivo": "Discard a Beer card",
  "Odhoď kartu Vedle!": "Discard a Missed! card",
  "Odhoď károvou kartu": "Discard a Diamonds card",
  "Odhoď křížovou kartu": "Discard a Clubs card",
  "Odhoď modrou kartu": "Discard a blue card",
  "Odhoď pikovou kartu": "Discard a Spades card",
  "Odhoď srdcovou kartu": "Discard a Hearts card",
  "Sejmutí": "Draw check",
  "Uber si 1 život": "Lose 1 life point",
  "Vyprázdnění ruky": "Empty your hand",
  "Zaplať 1 žeton nabití": "Pay 1 load token",
  "Zaplať 2 žetony nabití": "Pay 2 load tokens",
  "Zasáhnout na dálku": "Hit at range",
  "Zbraň z ruky nebo ze hry": "Weapon from hand or in play",
  "Zranit 2 hráče": "Damage 2 players",
  "Zrušení BANG!": "Cancel a BANG!",
  "Ztráta 1 života": "Loss of 1 life point"
}

TIMINGS_EN = {
  "Celá hra (tajná role)": "Entire game (secret role)",
  "Celá hra (veřejná role)": "Entire game (public role)",
  "Celé kolo": "Entire round",
  "Celé kolo, v tazích mrtvých hráčů": "Entire round, on dead players' turns",
  "Celé trvání události": "Entire duration of the event",
  "Celý vlastní tah": "Entire own turn",
  "Fáze 1 (po Dynamitu/Vězení, před dobráním a před schopnostmi)": "Phase 1 (after Dynamite/Jail, before draw and abilities)",
  "Fáze 1 po dobrání karet": "Phase 1 after drawing cards",
  "Fáze 1 tahu": "Phase 1 of turn",
  "Fáze 1 tahu (dobírání)": "Phase 1 of turn (drawing)",
  "Fáze 1 v každém tahu tohoto kola": "Phase 1 on each turn this round",
  "Fáze 1 vlastního tahu": "Phase 1 of own turn",
  "Fáze 2 po vyléčení": "Phase 2 after healing",
  "Fáze 2 při nákupu vagonu": "Phase 2 when buying a railcar",
  "Fáze 2 při zahrání BANG!": "Phase 2 when playing BANG!",
  "Fáze 2 vlastního tahu": "Phase 2 of own turn",
  "Fáze 2 vlastního tahu (1x za tah)": "Phase 2 of own turn (once per turn)",
  "Fáze 2 vlastního tahu (až 2x)": "Phase 2 of own turn (up to 2×)",
  "Fáze 2 vlastního tahu na mrtvého hráče": "Phase 2 of own turn on dead player",
  "Fáze 2 vlastního tahu při výstřelu": "Phase 2 of own turn when shooting",
  "Fáze 3 tahu": "Phase 3 of turn",
  "Fáze 3 vlastního tahu": "Phase 3 of own turn",
  "Kdykoli": "Anytime",
  "Kdykoli (i mimo svůj tah)": "Anytime (including out of turn)",
  "Kdykoli (i při ztrátě posledního života)": "Anytime (including when losing last life)",
  "Kdykoli (ve svém tahu i mimo tah)": "Anytime (on own turn and out of turn)",
  "Kdykoli kdokoli sejme": "Whenever anyone performs a draw check",
  "Kdykoli musí sejmout": "Whenever you must perform a draw check",
  "Kdykoli má méně než 2 karty": "Whenever having fewer than 2 cards",
  "Kdykoli někdo zahraje Pivo": "Whenever anyone plays Beer",
  "Kdykoli v reakci": "Anytime in response",
  "Konec vlastního tahu": "End of own turn",
  "Konec vlastního tahu (po Fázi 3)": "End of own turn (after Phase 3)",
  "Mimo tah": "Out of turn",
  "Mimo tah (při každém posunu vlaku)": "Out of turn (each time train moves)",
  "Mimo tah (při krádeži nebo odhození vaší karty)": "Out of turn (when your card is stolen or discarded)",
  "Mimo tah (při obraně)": "Out of turn (when defending)",
  "Mimo tah (v reakci na BANG!)": "Out of turn (in response to BANG!)",
  "Mimo tah (v reakci na nepřátelskou kartu)": "Out of turn (in response to enemy card)",
  "Mimo tah (v reakci na útok BANG!)": "Out of turn (in response to BANG! attack)",
  "Mimo tah (v reakci na útok)": "Out of turn (in response to attack)",
  "Mimo vlastní tah": "Out of own turn",
  "Na začátku každého tahu až do konce hry": "At the start of each turn until end of game",
  "Obrana proti efektu BANG!": "Defense against a BANG! effect",
  "Okamžitě po libovolném sejmutí": "Immediately after any draw check",
  "Okamžitě po vyprázdnění ruky": "Immediately after hand is emptied",
  "Okamžitě při otočení karty": "Immediately when card is revealed",
  "Okamžitě při smrti jakéhokoli hráče": "Immediately when any player dies",
  "Okamžitě při vyřazení postavy": "Immediately upon elimination of a character",
  "Okamžitě při zranění": "Immediately upon taking damage",
  "Okamžitě při ztrátě života": "Immediately upon losing a life point",
  "Po celou hru": "Throughout the game",
  "Před Fází 1 tahu": "Before Phase 1 of turn",
  "Před Fází 1 tahu (po Dynamitu a Vězení)": "Before Phase 1 of turn (after Dynamite & Jail)",
  "Při jakémkoli sejmutí": "During any draw check",
  "Při každém sejmutí": "On every draw check",
  "Při nákupu": "Upon purchase",
  "Při nákupu ve Fázi 2": "Upon purchase in Phase 2",
  "Při nákupu; vyloží se před hráče": "Upon purchase; placed in front of player",
  "Při použití plošného efektu": "When using an area-of-effect card",
  "Při příjezdu na konečnou stanici": "Upon arriving at the end station",
  "Při příjezdu vlaku na konečnou": "Upon train arrival at the end station",
  "Při sejmutí ve svém tahu": "During a draw check on your turn",
  "Při smrtelném zranění": "Upon receiving lethal damage",
  "Při vlastním vyřazení ze hry": "Upon own elimination from the game",
  "Při vyložení karty do hry": "When played into play",
  "Při vzetí nebo odhození karty jiným hráčem": "When card is taken or discarded by another player",
  "Při výstřelu BANG!": "When firing a BANG!",
  "Při výstřelu BANG! a přivlastnění činu": "When firing BANG! and claiming a feat",
  "Při zahrání Piva": "When playing Beer",
  "Při zahrání karty BANG!": "When playing a BANG! card",
  "Při zahrání karty BANG! (před reakcí)": "When playing a BANG! card (before response)",
  "Při zahájení tahu vyřazeného hráče": "At the start of eliminated player's turn",
  "Při zranění": "When taking damage",
  "Při zranění hráčem": "When damaged by a player",
  "Při zranění hráčem nebo legendou": "When damaged by a player or legend",
  "Při zrušení BANG! kartou Vedle!": "When BANG! is canceled by a Missed!",
  "Při zrušení karty BANG!": "When a BANG! card is canceled",
  "Při ztrátě života": "When losing a life point",
  "Při úspěšném sejmutí na Dynamit/Vězení": "Upon successful draw check for Dynamite/Jail",
  "Při útoku kartou BANG!": "When attacking with a BANG! card",
  "Trvale + Fáze 2 vlastního tahu": "Permanent + Phase 2 of own turn",
  "Trvale + při útoku na něj": "Permanent + when attacked",
  "Trvale až do konce partie": "Permanently until the end of the game",
  "Trvale k dispozici": "Permanently available",
  "Trvalá pasivní imunita": "Permanent passive immunity",
  "Trvalý pasivní efekt": "Permanent passive effect",
  "Trvalý pasivní efekt ve hře před vámi": "Permanent passive effect in play in front of you",
  "V reakci na jakoukoli hnědou kartu cílenou na něj": "In response to any brown card targeting them",
  "Ve hře před vámi": "In play in front of you",
  "Ve hře před vámi; aktivace při zranění": "In play in front of you; activated upon taking damage",
  "Ve hře před vámi; aktivace při útoku BANG!": "In play in front of you; activated during BANG! attack",
  "Vlastní tah": "Own turn",
  "Vlastní tah Fáze 2 NEBO okamžitě při smrtelném zranění": "Own turn Phase 2 OR immediately upon lethal damage",
  "Vlastní tah Fáze 2 NEBO okamžitě při ztrátě posledního života": "Own turn Phase 2 OR immediately upon losing last life",
  "Začátek Fáze 1 tahu": "Start of Phase 1 of turn",
  "Začátek každého tahu": "Start of each turn",
  "Začátek každého tahu (i na začátku hry)": "Start of each turn (including start of game)",
  "Začátek vlastního tahu před 1. fází": "Start of own turn before Phase 1"
}

def translate_ruling_text(cz):
    t = cz
    # Common replacements
    subs = [
        ("Na Šerifa nelze zahrát kartu Vězení.", "Jail cannot be played on the Sheriff."),
        ("Pokud Šerif zabije svého Pomocníka (Vice), za trest musí odhodit všechny karty z ruky i ze hry (včetně vybavení).", "If the Sheriff eliminates their Deputy, as penalty they must discard all cards from hand and in play (including equipment)."),
        ("Pokud Šerif zabije Banditu, dostane běžnou odměnu 3 karty z balíčku.", "If the Sheriff eliminates an Outlaw, they receive the standard reward of 3 cards from the deck."),
        ("I když Pomocník (Vice) zemře, vyhrává společně se Šerifem, pokud Šerif a zákon zvítězí.", "Even if the Deputy dies, they win together with the Sheriff if law and order prevail."),
        ("Pokud je zabit Šerifem, Šerif ztrácí všechny karty v ruce i ve hře.", "If killed by the Sheriff, the Sheriff loses all cards in hand and in play."),
        ("Bandité vítězí okamžitě, jakmile padne Šerif – s výjimkou situace, kdy je jediným přeživším samotný Odpadlík.", "Outlaws win immediately as soon as the Sheriff dies — unless the sole survivor is the Renegade."),
        ("Kdokoli zabije Banditu (i jiný Bandita), okamžitě líže odměnu 3 karty.", "Whoever eliminates an Outlaw (even another Outlaw) immediately draws 3 reward cards from the deck."),
        ("Pokud Šerif zemře dříve, než jsou eliminováni všichni Pomocníci a ostatní Bandité, Odpadlík PROHRÁVÁ a vyhrávají Bandité!", "If the Sheriff dies before all Deputies and Outlaws are eliminated, the Renegade LOSES and Outlaws win!"),
        ("Ve hře 8 hráčů jsou dva Odpadlíci – každý hraje sám za sebe.", "In an 8-player game there are two Renegades — each plays for themselves."),
        ("Tato schopnost neúčinkuje, pokud byste měli ztratit svůj poslední život (pokud se nezachráníte Pivem).", "This ability does not trigger if you lose your last life point (unless saved by a Beer)."),
        ("Při ztrátě 3 životů z Dynamitu si dobere 3 karty (pokud nezemře).", "When losing 3 life points to Dynamite, draws 3 cards (if surviving)."),
        ("Nepočítá se do limitu 1 BANG! za tah.", "Does not count towards the 1 BANG! per turn limit."),
        ("Tento efekt NENÍ zahráním karty BANG!, takže se nepočítá do limitu 1 BANG! za tah.", "This effect is NOT playing a BANG! card, so it does not count towards the 1 BANG! per turn limit."),
        ("Lze použít i na odvrácení Kulometu a dalších karet vyvolávajících efekt BANG!.", "Can also be used to defend against Gatling and other cards causing a BANG! effect."),
        ("Dosáhne na kteréhokoli hráče u stolu.", "Can reach any player at the table."),
        ("Chrání ho před plošnými kartami i přímými útoky.", "Protects against area-of-effect cards as well as direct attacks."),
        ("Aktivuje se pouze zahráním karty Dostavník nebo Wells Fargo a trvá do zahrání dalšího Dostavníku.", "Activates only when Stagecoach or Wells Fargo is played, and lasts until the next Stagecoach is played."),
        ("Mrtvý hráč ožije až v momentě, kdy na něj přijde řada – vezme si 1 život, lízne 2 karty a může se Pivem doléčit.", "An eliminated player revives only when their turn arrives — gains 1 life point, draws 2 cards, and can heal with Beer."),
        ("Hraje se s otevřenou kartou původní role; odměny a tresty za zabití platí znovu (+3 karty za Banditu; trest pro Šerifa).", "Played with original role card face-up; kill bounties and penalties apply again (+3 cards for Outlaw; penalty for Sheriff)."),
        ("Pokud hráč při výměně události stále žije (má alespoň 1 život), zůstává ve hře trvale naživu!", "If a player is still alive when the event changes (has at least 1 life point), they stay in the game permanently!")
    ]
    for pattern, repl in subs:
        if pattern == cz:
            return repl

    # Generic rule-based translation for BANG! Czech terminology
    # Let's perform sentence-level replacements
    res = cz
    # Roles
    res = re.sub(r'Pomocník[a-ů]*\s*\(Vice\)', 'Deputy', res)
    res = re.sub(r'Pomocník[a-ů]*\s*šerifa', 'Deputy', res)
    res = re.sub(r'Šerif[a-ů]*', 'Sheriff', res)
    res = re.sub(r'Bandit[a-ů]*', 'Outlaw', res)
    res = re.sub(r'Odpadlík[a-ů]*', 'Renegade', res)

    # Cards
    res = re.sub(r'kart[a-ů]*\s*BANG!', 'BANG! card', res)
    res = re.sub(r'kart[a-ů]*\s*Vedle!', 'Missed! card', res)
    res = re.sub(r'kart[a-ů]*\s*Pivo', 'Beer card', res)
    res = re.sub(r'kart[a-ů]*\s*Vězení', 'Jail card', res)
    res = re.sub(r'kart[a-ů]*\s*Dynamit', 'Dynamite card', res)
    res = re.sub(r'kart[a-ů]*\s*Barel', 'Barrel card', res)
    res = re.sub(r'kart[a-ů]*\s*Bomba', 'Bomb card', res)
    res = re.sub(r'kart[a-ů]*\s*Kulomet', 'Gatling card', res)
    res = re.sub(r'kart[a-ů]*\s*Indiáni!', 'Indians! card', res)
    res = re.sub(r'kart[a-ů]*\s*Hokynářství', 'General Store card', res)
    res = re.sub(r'kart[a-ů]*\s*Panika!', 'Panic! card', res)
    res = re.sub(r'kart[a-ů]*\s*Cat Balou', 'Cat Balou card', res)

    # Keywords
    res = re.sub(r'valoun[a-ů]* zlata', 'Gold Nugget(s)', res)
    res = re.sub(r'žeton[a-ů]* nabití', 'load token(s)', res)
    res = re.sub(r'žeton[a-ů]* slávy', 'fame token(s)', res)
    res = re.sub(r'život[a-ů]*', 'life point(s)', res)
    res = re.sub(r'dobírací[a-ů]* balíč[a-ů]*', 'draw deck', res)
    res = re.sub(r'odhazovací[a-ů]* balíč[a-ů]*', 'discard pile', res)
    res = re.sub(r'zelen[a-ů]* kart[a-ů]*', 'green card(s)', res)
    res = re.sub(r'oranžov[a-ů]* kart[a-ů]*', 'orange card(s)', res)
    res = re.sub(r'modr[a-ů]* kart[a-ů]*', 'blue card(s)', res)
    res = re.sub(r'hněd[a-ů]* kart[a-ů]*', 'brown card(s)', res)
    res = re.sub(r'čern[a-ů]* vybavení', 'black equipment', res)

    return res

print("Translation module ready.")
