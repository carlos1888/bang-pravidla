// BANG! Definitive Card Database (Clean Text-Only & Bilingual)
window.BANG_CARDS = [
  {
    "id": "role-sheriff",
    "name": "Šerif",
    "nameEn": "Sheriff",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "role",
    "typeLabel": "Role",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hraje s odhalenou kartou. Má o 1 život (náboj) navíc než uvádí jeho postava. Začíná hru. Cíl: Zabít všechny Bandity a Odpadlíka.",
    "timing": "Celá hra (veřejná role)",
    "rulings": [
      "Na Šerifa nelze zahrát kartu Vězení.",
      "Pokud Šerif zabije svého Pomocníka (Vice), za trest musí odhodit všechny karty z ruky i ze hry (včetně vybavení).",
      "Pokud Šerif zabije Banditu, dostane běžnou odměnu 3 karty z balíčku."
    ],
    "tags": [
      "role",
      "šerif",
      "životy navíc",
      "zákon"
    ],
    "image": "assets/cards/01_zakladni_hra/sheriff.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Role Card",
    "effectEn": "Plays with role revealed. Starts with 1 extra bullet (life point). Starts the game. Goal: Kill all Outlaws and the Renegade.",
    "timingEn": "Entire game (public role)",
    "costEn": null,
    "rulingsEn": [
      "Jail cannot be played on the Sheriff.",
      "If the Sheriff eliminates their Deputy, as penalty they must discard all cards from hand and in play (including equipment).",
      "If the Sheriff eliminates an Outlaw, they receive the standard reward of 3 cards from the deck."
    ]
  },
  {
    "id": "role-deputy",
    "name": "Pomocník šerifa (Vice)",
    "nameEn": "Deputy",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "role",
    "typeLabel": "Role",
    "copies": 2,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hraje s tajnou rolí. Pomáhá Šerifovi a chrání ho za každou cenu. Cíl: Stejný jako Šerif (eliminovat Bandity a Odpadlíka). Vítězí, pokud vyhraje Šerif (i když je Pomocník (Vice) mrtev).",
    "timing": "Celá hra (tajná role)",
    "rulings": [
      "I když Pomocník (Vice) zemře, vyhrává společně se Šerifem, pokud Šerif a zákon zvítězí.",
      "Pokud je zabit Šerifem, Šerif ztrácí všechny karty v ruce i ve hře."
    ],
    "tags": [
      "role",
      "pomocník",
      "vice",
      "zákon",
      "tajná role"
    ],
    "image": "assets/cards/01_zakladni_hra/deputy-sheriff.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Role Card",
    "effectEn": "Plays with role hidden. Protects the Sheriff at all costs. Goal: Same as Sheriff (kill all Outlaws and Renegade). Wins if Sheriff wins.",
    "timingEn": "Entire game (secret role)",
    "costEn": null,
    "rulingsEn": [
      "Even if the Deputy dies, they win together with the Sheriff if law and order prevail.",
      "If killed by the Sheriff, the Sheriff loses all cards in hand and in play."
    ]
  },
  {
    "id": "role-outlaw",
    "name": "Bandita",
    "nameEn": "Outlaw",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "role",
    "typeLabel": "Role",
    "copies": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hraje s tajnou rolí. Cíl: Zabít Šerifa. Za zabití Bandity dostane jeho přemožitel odměnu 3 karty z dobíracího balíčku.",
    "timing": "Celá hra (tajná role)",
    "rulings": [
      "Bandité vítězí okamžitě, jakmile padne Šerif – s výjimkou situace, kdy je jediným přeživším samotný Odpadlík.",
      "Kdokoli zabije Banditu (i jiný Bandita), okamžitě líže odměnu 3 karty."
    ],
    "tags": [
      "role",
      "bandita",
      "odměna",
      "tajná role"
    ],
    "image": "assets/cards/01_zakladni_hra/outlaw.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Role Card",
    "effectEn": "Plays with role hidden. Goal: Eliminate the Sheriff. Wins immediately when Sheriff is killed.",
    "timingEn": "Entire game (secret role)",
    "costEn": null,
    "rulingsEn": [
      "Outlaws win immediately as soon as the Sheriff dies — unless the sole survivor is the Renegade.",
      "Whoever eliminates an Outlaw (even another Outlaw) immediately draws 3 reward cards from the deck."
    ]
  },
  {
    "id": "role-renegade",
    "name": "Odpadlík",
    "nameEn": "Renegade",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "role",
    "typeLabel": "Role",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hraje s tajnou rolí. Cíl: Stát se novým Šerifem. Musí zůstat jako jediný přeživší hráč ve hře (Šerifa musí zabít až jako úplně posledního!).",
    "timing": "Celá hra (tajná role)",
    "rulings": [
      "Pokud Šerif zemře dříve, než jsou eliminováni všichni Pomocníci a ostatní Bandité, Odpadlík PROHRÁVÁ a vyhrávají Bandité!",
      "Ve hře 8 hráčů jsou dva Odpadlíci – každý hraje sám za sebe."
    ],
    "tags": [
      "role",
      "odpadlík",
      "samotář",
      "tajná role"
    ],
    "image": "assets/cards/01_zakladni_hra/renegade.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Role Card",
    "effectEn": "Plays with role hidden. Goal: Be the last surviving player in the game. Must eliminate Sheriff last in 1v1 duel.",
    "timingEn": "Entire game (secret role)",
    "costEn": null,
    "rulingsEn": [
      "If the Sheriff dies before all Deputies and Outlaws are eliminated, the Renegade LOSES and Outlaws win!",
      "In an 8-player game there are two Renegades — each plays for themselves."
    ]
  },
  {
    "id": "char-bart-cassidy",
    "name": "Bart Cassidy",
    "nameEn": "Bart Cassidy",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Vždy, když ztratíte život, doberte si okamžitě 1 kartu z balíčku.",
    "timing": "Okamžitě při ztrátě života",
    "rulings": [
      "Tato schopnost neúčinkuje, pokud byste měli ztratit svůj poslední život (pokud se nezachráníte Pivem).",
      "Při ztrátě 3 životů z Dynamitu si dobere 3 karty (pokud nezemře)."
    ],
    "tags": [
      "postava",
      "životy",
      "dobírání karet",
      "obrana"
    ],
    "image": "assets/cards/01_zakladni_hra/bart-cassidy.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Each time he loses a life point, he immediately draws a card from the draw deck.",
    "timingEn": "Immediately upon losing a life point",
    "costEn": null,
    "rulingsEn": [
      "This ability does not trigger if you lose your last life point (unless saved by a Beer).",
      "When losing 3 life points to Dynamite, draws 3 cards (if surviving)."
    ]
  },
  {
    "id": "char-black-jack",
    "name": "Black Jack",
    "nameEn": "Black Jack",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu musí ukázat ostatním druhou kartu, kterou si dobírá. Pokud je srdcová (♥) nebo kárová (♦), dobere si ještě jednu kartu navíc (tu už neukazuje).",
    "timing": "Fáze 1 tahu (dobírání)",
    "rulings": [
      "Pokud si dobírá z balíčku a 2. karta je červená, má celkem 3 karty v 1. fázi.",
      "V kombinaci s kartami upravujícími dobírání (např. Příjezd vlaku, Žízeň) se druhá ukázaná karta posuzuje standardně."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "červené karty",
      "dobírání"
    ],
    "image": "assets/cards/01_zakladni_hra/black-jack.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, reveals the 2nd card drawn: if Hearts ♥ or Diamonds ♦, draws 1 extra card.",
    "timingEn": "Phase 1 of turn (drawing)",
    "costEn": null,
    "rulingsEn": [
      "Pokud si dobírá z balíčku a 2. karta je červená, má celkem 3 karty v 1. fázi.",
      "V kombinaci s kartami upravujícími dobírání (např. Příjezd vlaku, Žízeň) se druhá ukázaná karta posuzuje standardně."
    ]
  },
  {
    "id": "char-calamity-janet",
    "name": "Calamity Janet",
    "nameEn": "Calamity Janet",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může používat karty BANG! jako Vedle! a naopak.",
    "timing": "Kdykoli (ve svém tahu i mimo tah)",
    "rulings": [
      "Pokud zahraje Vedle! jako BANG!, stále podléhá limitu 1 BANG! za tah (pokud nemá Volcanic).",
      "Může odhodit Vedle! proti Indiánům! (jako kartu BANG!).",
      "V Duelu může odhazovat karty Vedle! jako karty BANG!."
    ],
    "tags": [
      "postava",
      "flexibilita",
      "bang",
      "vedle",
      "duel"
    ],
    "image": "assets/cards/01_zakladni_hra/calamity-janet.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Can play BANG! cards as Missed! and Missed! cards as BANG!.",
    "timingEn": "Anytime (on own turn and out of turn)",
    "costEn": null,
    "rulingsEn": [
      "Pokud zahraje Vedle! jako BANG!, stále podléhá limitu 1 BANG! za tah (pokud nemá Volcanic).",
      "Může odhodit Vedle! proti Indiánům! (jako BANG! card).",
      "V Duelu může odhazovat Missed! card jako BANG! card."
    ]
  },
  {
    "id": "char-el-gringo",
    "name": "El Gringo",
    "nameEn": "El Gringo",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli kvůli nějakému hráči ztratíte život, vezměte si z jeho ruky náhodně 1 kartu za každý život, o který přijdete.",
    "timing": "Okamžitě při zranění",
    "rulings": [
      "Neúčinkuje při ztrátě posledního života (pokud se nezachrání Pivem).",
      "Zranění z Dynamitu, Bomby ani lokomotivy Ironhorse není způsobeno žádným hráčem, takže si kartu nebere.",
      "Pokud prohraje jím vyvolaný Duel, kartu si od soupeře nebere.",
      "Při zranění způsobeném Legendou přivlastněním činu si El Gringo kartu vezme od hráče, který čin přivlastnil!"
    ],
    "tags": [
      "postava",
      "krádež karet",
      "protiútok",
      "zranění"
    ],
    "image": "assets/cards/01_zakladni_hra/el-gringo.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Each time he loses a life point from a player's card, draws 1 random card from that player's hand.",
    "timingEn": "Immediately upon taking damage",
    "costEn": null,
    "rulingsEn": [
      "Neúčinkuje při ztrátě posledního life point(s) (pokud se nezachrání Pivem).",
      "Zranění z Dynamitu, Bomby ani lokomotivy Ironhorse není způsobeno žádným hráčem, takže si kartu nebere.",
      "Pokud prohraje jím vyvolaný Duel, kartu si od soupeře nebere.",
      "Při zranění způsobeném Legendou přivlastněním činu si El Gringo kartu vezme od hráče, který čin přivlastnil!"
    ]
  },
  {
    "id": "char-jesse-jones",
    "name": "Jesse Jones",
    "nameEn": "Jesse Jones",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si může vybrat, zda si první kartu vezme náhodně z ruky jiného hráče, nebo z dobíracího balíčku. Druhou kartu si bere z balíčku.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Může cílit na libovolného hráče bez ohledu na vzdálenost.",
      "Pokud hráč nemá karty v ruce, nelze od něj táhnout.",
      "Henry Block na tuto krádež reaguje BANGem!"
    ],
    "tags": [
      "postava",
      "fáze 1",
      "krádež z ruky",
      "dobírání"
    ],
    "image": "assets/cards/01_zakladni_hra/jesse-jones.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, may draw his 1st card from any other player's hand instead of the deck.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Může cílit na libovolného hráče bez ohledu na vzdálenost.",
      "Pokud hráč nemá karty v ruce, nelze od něj táhnout.",
      "Henry Block na tuto krádež reaguje BANGem!"
    ]
  },
  {
    "id": "char-jourdonnais",
    "name": "Jourdonnais",
    "nameEn": "Jourdonnais",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Má trvale imaginární Barel ve hře: kdykoli je cílem efektu BANG!, může sejmout. Pokud otočí srdce (♥), je útok zrušen.",
    "timing": "Obrana proti efektu BANG!",
    "rulings": [
      "Může mít ve hře i skutečnou kartu Barel – v takovém případě snímá dvakrát za sebou před nutností hrát Vedle!.",
      "Proti Slab the Killerovi může úspěšným sejmutím nahradit 1 ze dvou nutných Vedle!.",
      "Funguje i proti Flintlocku (Křesadlovce) a schopnosti Mexicali Kida."
    ],
    "tags": [
      "postava",
      "obrana",
      "barel",
      "sejmutí",
      "srdce"
    ],
    "image": "assets/cards/01_zakladni_hra/jourdonnais.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Has a built-in Barrel: whenever targeted by a BANG!, draws from the deck to cancel the shot on Hearts ♥.",
    "timingEn": "Defense against a BANG! effect",
    "costEn": null,
    "rulingsEn": [
      "Může mít ve hře i skutečnou Barrel card – v takovém případě snímá dvakrát za sebou před nutností hrát Vedle!.",
      "Proti Slab the Killerovi může úspěšným sejmutím nahradit 1 ze dvou nutných Vedle!.",
      "Funguje i proti Flintlocku (Křesadlovce) a schopnosti Mexicali Kida."
    ]
  },
  {
    "id": "char-kit-carlson",
    "name": "Kit Carlson",
    "nameEn": "Kit Carlson",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu se podívá na vrchní 3 karty z dobíracího balíčku; 2 z nich si dobere a třetí položí zpět na vršek balíčku lícem dolů.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Ostatní hráči nevidí žádnou z těchto karet.",
      "Třetí kartu vrací na vršek v tajnosti, což mu umožňuje manipulovat budoucí sejmutí (Dynamit, Vězení soupeře atd.)."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "manipulace balíčku",
      "dobírání"
    ],
    "image": "assets/cards/01_zakladni_hra/kit-carlson.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, looks at the top 3 cards of the deck, chooses 2 for his hand, and returns 1 to the top.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Ostatní hráči nevidí žádnou z těchto karet.",
      "Třetí kartu vrací na vršek v tajnosti, což mu umožňuje manipulovat budoucí sejmutí (Dynamit, Vězení soupeře atd.)."
    ]
  },
  {
    "id": "char-lucky-duke",
    "name": "Lucky Duke",
    "nameEn": "Lucky Duke",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli má sejmout („Estrazione!“ / „Draw!“), otočí vrchní dvě karty z balíčku a vybere si, kterou použije. Obě karty se poté odhodí.",
    "timing": "Kdykoli musí sejmout",
    "rulings": [
      "Platí pro Barel, Vězení, Dynamit, Rum, Bombu i Chřestýše.",
      "V kombinaci s Podkovou (Horseshoe) otočí dokonce 3 karty a vybere 1.",
      "Při kartě Stepní běžec (Tumbleweed) opakuje celé své sejmutí (otočí 2 nové karty)."
    ],
    "tags": [
      "postava",
      "sejmutí",
      "štěstí",
      "barel",
      "dynamit"
    ],
    "image": "assets/cards/01_zakladni_hra/lucky-duke.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he draws from the deck (check), flips 2 cards and chooses the result he prefers.",
    "timingEn": "Whenever you must perform a draw check",
    "costEn": null,
    "rulingsEn": [
      "Platí pro Barel, Vězení, Dynamit, Rum, Bombu i Chřestýše.",
      "V kombinaci s Podkovou (Horseshoe) otočí dokonce 3 karty a vybere 1.",
      "Při kartě Stepní běžec (Tumbleweed) opakuje celé své sejmutí (otočí 2 nové karty)."
    ]
  },
  {
    "id": "char-paul-regret",
    "name": "Paul Regret",
    "nameEn": "Paul Regret",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Má trvale imaginárního Mustanga ve hře; pro všechny ostatní hráče se nachází ve vzdálenosti o 1 vyšší.",
    "timing": "Trvalý pasivní efekt",
    "rulings": [
      "Může mít vyloženou i reálnou kartu Mustang (vzdálenost se pak zvyšuje o 2).",
      "Může mít zároveň Skrýš (Hideout z Dodge City).",
      "Sám vidí ostatní hráče v normální základní vzdálenosti."
    ],
    "tags": [
      "postava",
      "vzdálenost",
      "mustang",
      "obrana"
    ],
    "image": "assets/cards/01_zakladni_hra/paul-regret.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "All other players see him at distance +1 (built-in Mustang).",
    "timingEn": "Permanent passive effect",
    "costEn": null,
    "rulingsEn": [
      "Může mít vyloženou i reálnou kartu Mustang (vzdálenost se pak zvyšuje o 2).",
      "Může mít zároveň Skrýš (Hideout z Dodge City).",
      "Sám vidí ostatní hráče v normální základní vzdálenosti."
    ]
  },
  {
    "id": "char-pedro-ramirez",
    "name": "Pedro Ramirez",
    "nameEn": "Pedro Ramirez",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si může vybrat, zda si první kartu vezme z vršku odhazovacího balíčku, nebo z dobíracího balíčku. Druhou kartu si bere z dobíracího.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Může si tak vzít kartu, kterou právě před ním někdo odhodil (např. Cat Balou, Pivo, BANG!).",
      "Pokud je odhazovací balíček prázdný, bere obě z dobíracího."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "odhazovací balíček",
      "recyklace"
    ],
    "image": "assets/cards/01_zakladni_hra/pedro-ramirez.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, may take his 1st card from the top of the discard pile.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Může si tak vzít kartu, kterou právě před ním někdo odhodil (např. Cat Balou, Pivo, BANG!).",
      "Pokud je discard pile prázdný, bere obě z dobíracího."
    ]
  },
  {
    "id": "char-rose-doolan",
    "name": "Rose Doolan",
    "nameEn": "Rose Doolan",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Má trvale imaginární Hledí; všechny ostatní hráče vidí ve vzdálenosti o 1 menší.",
    "timing": "Trvalý pasivní efekt",
    "rulings": [
      "Může mít vyložené i skutečné Hledí (vzdálenost o 2 menší, min. 1).",
      "Platí pro dostřel zbraní, kartu Panika!, nůž i další efekty vázané na vzdálenost."
    ],
    "tags": [
      "postava",
      "vzdálenost",
      "hledí",
      "útok"
    ],
    "image": "assets/cards/01_zakladni_hra/rose-doolan.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Sees all other players at distance -1 (built-in Scope).",
    "timingEn": "Permanent passive effect",
    "costEn": null,
    "rulingsEn": [
      "Může mít vyložené i skutečné Hledí (vzdálenost o 2 menší, min. 1).",
      "Platí pro dostřel zbraní, Panic! card, nůž i další efekty vázané na vzdálenost."
    ]
  },
  {
    "id": "char-sid-ketchum",
    "name": "Sid Ketchum",
    "nameEn": "Sid Ketchum",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může kdykoli odhodit 2 karty z ruky a vyléčit si tak 1 život. Tuto schopnost smí použít i vícekrát za tah.",
    "timing": "Kdykoli (i při ztrátě posledního života)",
    "rulings": [
      "Může se zachránit před smrtícím zraněním, i když nemá Pivo!",
      "Nemůže překročit maximální počáteční počet životů.",
      "V rozšíření Legendy získá po vyléčení života 1 efekt BANG! zdarma!"
    ],
    "tags": [
      "postava",
      "léčení",
      "záchrana před smrtí",
      "životy"
    ],
    "image": "assets/cards/01_zakladni_hra/sid-ketchum.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "May discard any 2 cards from his hand to regain 1 life point at any time on his turn.",
    "timingEn": "Anytime (including when losing last life)",
    "costEn": null,
    "rulingsEn": [
      "Může se zachránit před smrtícím zraněním, i když nemá Pivo!",
      "Nemůže překročit maximální počáteční počet life point(s).",
      "V rozšíření Legendy získá po vyléčení life point(s) 1 efekt BANG! zdarma!"
    ]
  },
  {
    "id": "char-slab-the-killer",
    "name": "Slab the Killer",
    "nameEn": "Slab the Killer",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hráč, jenž chce zrušit jeho kartu BANG!, musí použít 2 efekty Vedle!. Úspěšné sejmutí u Barelu zastoupí pouze jeden z nich.",
    "timing": "Při útoku kartou BANG!",
    "rulings": [
      "Vztahuje se POUZE na skutečnou kartu BANG! zahranou Slabem.",
      "NEVZTAHUJE se na Kulomet, Křesadlovku, Rychlopalbu ani Tomahavk (tam stačí 1 Vedle!).",
      "V Legendách nelze jeho BANG! zrušit vůbec!"
    ],
    "tags": [
      "postava",
      "útok",
      "slab the killer",
      "2 vedle",
      "smrtící"
    ],
    "image": "assets/cards/01_zakladni_hra/slab-the-killer.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Players must play 2 Missed! cards to cancel his BANG! attacks.",
    "timingEn": "When attacking with a BANG! card",
    "costEn": null,
    "rulingsEn": [
      "Vztahuje se POUZE na skutečnou BANG! card zahranou Slabem.",
      "NEVZTAHUJE se na Kulomet, Křesadlovku, Rychlopalbu ani Tomahavk (tam stačí 1 Vedle!).",
      "V Legendách nelze jeho BANG! zrušit vůbec!"
    ]
  },
  {
    "id": "char-suzy-lafayette",
    "name": "Suzy Lafayette",
    "nameEn": "Suzy Lafayette",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Jakmile nemá v ruce žádnou kartu, okamžitě si dobere 1 kartu z dobíracího balíčku.",
    "timing": "Okamžitě po vyprázdnění ruky",
    "rulings": [
      "Během Duelu se schopnost pozastaví: pokud zahodí poslední kartu BANG! a soupeř odpoví, Suzy ztratí život dříve, než dobere kartu.",
      "Čin Pohraničí může splnit a potvrdit ještě dříve, než dobere kartu.",
      "Při placení za vagon v Loupeži si po odhození poslední karty hned dobere."
    ],
    "tags": [
      "postava",
      "prázdná ruka",
      "nekonečné lízání",
      "komba"
    ],
    "image": "assets/cards/01_zakladni_hra/suzy-lafayette.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "As soon as she has no cards in hand, immediately draws 1 card from the deck.",
    "timingEn": "Immediately after hand is emptied",
    "costEn": null,
    "rulingsEn": [
      "Během Duelu se schopnost pozastaví: pokud zahodí poslední BANG! card a soupeř odpoví, Suzy ztratí life point(s) dříve, než dobere kartu.",
      "Čin Pohraničí může splnit a potvrdit ještě dříve, než dobere kartu.",
      "Při placení za vagon v Loupeži si po odhození poslední karty hned dobere."
    ]
  },
  {
    "id": "char-vulture-sam",
    "name": "Vulture Sam",
    "nameEn": "Vulture Sam",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je nějaká postava zabita a vyřazena, vezme si do ruky všechny karty, které měl hráč v ruce a ve hře.",
    "timing": "Okamžitě při smrti jakéhokoli hráče",
    "rulings": [
      "Vezme si modré karty, zelené karty i vagony (ty vyloží ihned před sebe).",
      "NEBERE karty vybavení ze Zlaté horečky (ty jdou dospod balíčku vybavení).",
      "NEBERE karty od Stínových pistolníků (ti neumírají, jen odcházejí na konci tahu).",
      "Pokud je Šerif a zabije Pomocníka (Vice), nejprve vezme karty Pomocníka (Vice) a hned poté všechno odhodí."
    ],
    "tags": [
      "postava",
      "mrchožrout",
      "smrt",
      "krádež karet zabitých"
    ],
    "image": "assets/cards/01_zakladni_hra/vulture-sam.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "Whenever any player is eliminated, takes all cards from their hand and in play.",
    "timingEn": "Immediately when any player dies",
    "costEn": null,
    "rulingsEn": [
      "Vezme si blue card(s), green card(s) i vagony (ty vyloží ihned před sebe).",
      "NEBERE karty vybavení ze Zlaté horečky (ty jdou dospod balíčku vybavení).",
      "NEBERE karty od Stínových pistolníků (ti neumírají, jen odcházejí na konci tahu).",
      "Pokud je Sheriff a zabije Deputy, nejprve vezme karty Deputy a hned poté všechno odhodí."
    ]
  },
  {
    "id": "char-willy-the-kid",
    "name": "Willy the Kid",
    "nameEn": "Willy the Kid",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Ve svém tahu smí zahrát libovolný počet karet BANG!.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Má vestavěný efekt Volcanic bez omezení na zbraň (může mít zbraň s delším dostřelem).",
      "Může střílet na jednoho nebo na různé cíle v dostřelu své zbraně."
    ],
    "tags": [
      "postava",
      "neomezený bang",
      "kulometčík",
      "útok"
    ],
    "image": "assets/cards/01_zakladni_hra/willy-the-kid.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Character",
    "effectEn": "May play any number of BANG! cards on his turn.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Má vestavěný efekt Volcanic bez omezení na zbraň (může mít zbraň s delším dostřelem).",
      "Může střílet na jednoho nebo na různé cíle v dostřelu své zbraně."
    ]
  },
  {
    "id": "card-bang",
    "name": "BANG!",
    "nameEn": "BANG!",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 25,
    "suit": "♠ ♥ ♦ ♣",
    "values": null,
    "range": "Dle zbraně (základ 1)",
    "cost": null,
    "effect": "Ubírá 1 život cílovému hráči na dostřel. Cíl může zásah zrušit kartou Vedle! nebo Barelem. Standardně lze zahrát pouze 1 kartu BANG! za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "V balíčku je 25 karet BANG! ve všech čtyřech barvách: 8× ♣ (2–9), 13× ♦ (2–K, A), 3× ♥ (Q, K, A) a 1× ♠ (A).",
      "Limit 1 za tah se vztahuje pouze na samotné karty BANG!, nikoli na karty s efektem BANG! (Kulomet, Křesadlovka, Derringer).",
      "Zahraná karta se odhazuje vždy, i když byla zrušena.",
      "Vzdálenost se určuje v okamžiku zahrání."
    ],
    "tags": [
      "hnědá",
      "útok",
      "výstřel",
      "zranění",
      "základ"
    ],
    "image": "assets/cards/01_zakladni_hra/bang.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "A shot at another player within weapon range. The target must play a Missed! card or lose 1 life point. Limit 1 BANG! per turn.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "The deck contains 25 BANG! cards across all suits: 8× ♣ (2–9), 13× ♦ (2–K, A), 3× ♥ (Q, K, A), and 1× ♠ (A).",
      "Limit 1 per turn applies only to BANG! cards themselves, not cards causing a BANG! effect (Gatling, Flintlock, Derringer).",
      "Played card is always discarded, even if cancelled.",
      "Distance is calculated at the moment of playing."
    ]
  },
  {
    "id": "card-missed",
    "name": "Vedle!",
    "nameEn": "Missed!",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 12,
    "suit": "♣ ♠",
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Ruší efekt BANG! cílený na vás. Lze zahrát okamžitě mimo svůj tah v reakci na útok.",
    "timing": "Mimo tah (v reakci na útok)",
    "rulings": [
      "V balíčku je 12 karet Vedle!: 5× ♣ (10, J, Q, K, A) a 7× ♠ (2–8).",
      "Lze použít i na odvrácení Kulometu a dalších karet vyvolávajících efekt BANG!.",
      "Nelze použít proti Indiánům! ani v Duelu.",
      "Proti Slab the Killerovi je třeba dodat 2 efekty Vedle!."
    ],
    "tags": [
      "hnědá",
      "obrana",
      "vedle",
      "reakce",
      "základ"
    ],
    "image": "assets/cards/01_zakladni_hra/missed.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Cancel a BANG! attack played against you.",
    "timingEn": "Out of turn (in response to attack)",
    "costEn": null,
    "rulingsEn": [
      "The deck contains 12 Missed! cards: 5× ♣ (10, J, Q, K, A) and 7× ♠ (2–8).",
      "Can also be used to defend against Gatling and other cards causing a BANG! effect.",
      "Cannot be used against Indians! or in a Duel.",
      "Against Slab the Killer, 2 Missed! effects are required."
    ]
  },
  {
    "id": "card-beer",
    "name": "Pivo",
    "nameEn": "Beer",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 6,
    "suit": "♥",
    "values": "6, 7, 8, 9, 10, J",
    "range": null,
    "cost": null,
    "effect": "Vyléčí 1 život. Lze hrát ve svém tahu, NEBO mimo svůj tah při utrpění smrtelného zásahu k záchraně života. Ve 2 hráčích nemá léčivý účinek.",
    "timing": "Vlastní tah Fáze 2 NEBO okamžitě při ztrátě posledního života",
    "rulings": [
      "Nemůže překročit maximální počet životů postavy.",
      "Při zranění za více životů najednou (Dynamit za 3) lze zahrát více Piv současně pro záchranu.",
      "Ve 2 hráčích neléčí, ale ve Zlaté horečce jej lze směnit za 1 valoun zlata!"
    ],
    "tags": [
      "hnědá",
      "léčení",
      "životy",
      "pivo",
      "záchrana"
    ],
    "image": "assets/cards/01_zakladni_hra/beer.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Regain 1 lost life point (up to your starting maximum). Can be played out of turn when losing your last life point. Has no healing effect with only 2 players left.",
    "timingEn": "Own turn Phase 2 OR immediately upon losing last life",
    "costEn": null,
    "rulingsEn": [
      "Nemůže překročit maximální počet life point(s) postavy.",
      "Při zranění za více life point(s) najednou (Dynamit za 3) lze zahrát více Piv současně pro záchranu.",
      "Ve 2 hráčích neléčí, ale ve Zlaté horečce jej lze směnit za 1 Gold Nugget(s)!"
    ]
  },
  {
    "id": "card-saloon",
    "name": "Saloon",
    "nameEn": "Saloon",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "5",
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Všichni hráči ve hře si vyléčí 1 život (včetně vás).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Saloon NENÍ Pivo – nelze ho zahrát mimo svůj tah k záchraně před smrtí!",
      "Funguje i ve dvou hráčích."
    ],
    "tags": [
      "hnědá",
      "hromadné léčení",
      "saloon",
      "životy"
    ],
    "image": "assets/cards/01_zakladni_hra/saloon.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "All living players regain 1 life point immediately. Cannot be played out of turn to prevent death.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Saloon NENÍ Pivo – nelze ho zahrát mimo svůj tah k záchraně před smrtí!",
      "Funguje i ve dvou hráčích."
    ]
  },
  {
    "id": "card-stagecoach",
    "name": "Dostavník",
    "nameEn": "Stagecoach",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 2,
    "suit": "♠",
    "values": "9",
    "range": null,
    "cost": null,
    "effect": "Doberte si 2 karty z vršku dobíracího balíčku.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "V rozšíření Divoký západ (Wild West Show) zahrání Dostavníku otočí novou kartu události DZ!"
    ],
    "tags": [
      "hnědá",
      "dobírání",
      "dostavník",
      "karty navíc"
    ],
    "image": "assets/cards/01_zakladni_hra/stagecoach.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Draw 2 cards from the draw deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "V rozšíření Divoký západ (Wild West Show) zahrání Dostavníku otočí novou kartu události DZ!"
    ]
  },
  {
    "id": "card-wells-fargo",
    "name": "Wells Fargo",
    "nameEn": "Wells Fargo",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "3",
    "range": null,
    "cost": null,
    "effect": "Doberte si 3 karty z vršku dobíracího balíčku.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "V rozšíření Divoký západ zahrání Wells Fargo otočí novou kartu události DZ!"
    ],
    "tags": [
      "hnědá",
      "dobírání",
      "wells fargo",
      "karty navíc"
    ],
    "image": "assets/cards/01_zakladni_hra/wells-fargo.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Draw 3 cards from the draw deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "V rozšíření Divoký západ zahrání Wells Fargo otočí novou kartu události DZ!"
    ]
  },
  {
    "id": "card-general-store",
    "name": "Hokynářství",
    "nameEn": "General Store",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 2,
    "suit": "♣ / ♠",
    "values": "9, 10",
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Otočte lícem nahoru tolik karet z balíčku, kolik je živých hráčů. Každý hráč si vybere 1 kartu do ruky (začíná hráč, který kartu zahrál, po směru hodinových ručiček).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Než kdokoli zahraje další kartu, musí být všechny karty z Hokynářství rozebrány.",
      "Sgt. Blaze může z Hokynářství vyjmout 1 hráče (otočí se o 1 kartu méně)."
    ],
    "tags": [
      "hnědá",
      "výběr karet",
      "všichni hráči",
      "hokynářství"
    ],
    "image": "assets/cards/01_zakladni_hra/general-store.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Reveal as many cards from the deck as living players. In turn order starting with you, each player chooses 1 card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Než kdokoli zahraje další kartu, musí být všechny karty z Hokynářství rozebrány.",
      "Sgt. Blaze může z Hokynářství vyjmout 1 hráče (otočí se o 1 kartu méně)."
    ]
  },
  {
    "id": "card-panic",
    "name": "Panika!",
    "nameEn": "Panic!",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 4,
    "suit": "♥ / ♦",
    "values": "J, Q, A",
    "range": "Vzdálenost 1",
    "cost": null,
    "effect": "Vezměte si 1 kartu od hráče ve vzdálenosti 1 (náhodně z ruky nebo vybranou kartu ze hry).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Vzdálenost je ovlivněna Mustangem a Hledím, nikoli však zbraněmi!",
      "Lze ji zahrát i na sebe (např. vzít si zpět Vězení nebo Dynamit).",
      "Může ukrást modrou kartu, zelenou kartu nebo vagon (vagon jde ihned před vás do hry).",
      "NEMŮŽE ukrást černé vybavení ze Zlaté horečky."
    ],
    "tags": [
      "hnědá",
      "krádež",
      "panika",
      "vzdálenost 1"
    ],
    "image": "assets/cards/01_zakladni_hra/panic.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Draw 1 card from any player at distance 1 (from hand or in play).",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Vzdálenost je ovlivněna Mustangem a Hledím, nikoli však zbraněmi!",
      "Lze ji zahrát i na sebe (např. vzít si zpět Vězení nebo Dynamit).",
      "Může ukrást blue card(s), green card(s) nebo vagon (vagon jde ihned před vás do hry).",
      "NEMŮŽE ukrást black equipment ze Zlaté horečky."
    ]
  },
  {
    "id": "card-cat-balou",
    "name": "Cat Balou",
    "nameEn": "Cat Balou",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 4,
    "suit": "♦ / ♥",
    "values": "9, 10, J, K",
    "range": "Libovolná vzdálenost",
    "cost": null,
    "effect": "Donuťte jakéhokoli hráče odhodit 1 kartu (náhodnou z ruky nebo vybranou ze hry).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Funguje bez ohledu na vzdálenost.",
      "Lze zahrát i na sebe.",
      "Může zničit Barel, Vězení, Dynamit, zbraň, zelenou kartu či vagon.",
      "NEMŮŽE zničit černé vybavení ze Zlaté horečky."
    ],
    "tags": [
      "hnědá",
      "odhození karty",
      "cat balou",
      "ničení"
    ],
    "image": "assets/cards/01_zakladni_hra/cat-balou.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Force any player at any distance to discard 1 card (from hand or in play).",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Funguje bez ohledu na vzdálenost.",
      "Lze zahrát i na sebe.",
      "Může zničit Barel, Vězení, Dynamit, zbraň, green card(s) či vagon.",
      "NEMŮŽE zničit black equipment ze Zlaté horečky."
    ]
  },
  {
    "id": "card-gatling",
    "name": "Kulomet",
    "nameEn": "Gatling",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "10",
    "range": "Všichni ostatní hráči",
    "cost": null,
    "effect": "Všichni ostatní hráči jsou cílem efektu BANG!. Každý se brání zvlášť kartou Vedle! nebo Barelem.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "NEPOČÍTÁ se do limitu 1 BANG! za tah (můžete v témže tahu zahrát Kulomet i BANG!).",
      "Vyhodnocuje se postupně po směru hodinových ručiček.",
      "Pokud ho zahraje Slab the Killer, stačí na zrušení pouze 1 Vedle!."
    ],
    "tags": [
      "hnědá",
      "hromadný útok",
      "kulomet",
      "plošné poškození"
    ],
    "image": "assets/cards/01_zakladni_hra/gatling.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Fires a BANG! attack at all other living players in play. Does not count toward your 1 BANG! per turn limit.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "NEPOČÍTÁ se do limitu 1 BANG! za tah (můžete v témže tahu zahrát Kulomet i BANG!).",
      "Vyhodnocuje se postupně po směru hodinových ručiček.",
      "Pokud ho zahraje Slab the Killer, stačí na zrušení pouze 1 Vedle!."
    ]
  },
  {
    "id": "card-indians",
    "name": "Indiáni!",
    "nameEn": "Indians!",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 2,
    "suit": "♦",
    "values": "K, A",
    "range": "Všichni ostatní hráči",
    "cost": null,
    "effect": "Každý jiný hráč musí odhodit kartu BANG!, jinak ztratí 1 život. Barel ani Vedle! neúčinkují.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "K odvrácení je nutné odhodit skutečnou kartu BANG! (nebo Vedle! u Calamity Janet).",
      "Nelze nahradit Křesadlovkou ani Kulometem.",
      "Vyhodnocuje se po směru hodinových ručiček."
    ],
    "tags": [
      "hnědá",
      "hromadný útok",
      "indiáni",
      "odhoď bang"
    ],
    "image": "assets/cards/01_zakladni_hra/indians.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "All other players must discard a BANG! card or lose 1 life point. Missed! has no effect.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "K odvrácení je nutné odhodit skutečnou BANG! card (nebo Vedle! u Calamity Janet).",
      "Nelze nahradit Křesadlovkou ani Kulometem.",
      "Vyhodnocuje se po směru hodinových ručiček."
    ]
  },
  {
    "id": "card-duel",
    "name": "Duel",
    "nameEn": "Duel",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 3,
    "suit": "♦ / ♣ / ♠",
    "values": "Q, 8, J",
    "range": "Libovolná vzdálenost",
    "cost": null,
    "effect": "Vyzvěte libovolného hráče na souboj. Vyzvaný hráč může odhodit BANG!, pak vyzyvatel, a tak dále. Kdo první neodhodí BANG!, ztrácí 1 život.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Karty Barel ani Vedle! nelze v souboji použít.",
      "Karty BANG! odhozené v Duelu se nepočítají do limitu 1 BANG! za tah.",
      "Pokud v Duelu prohraje Bandita vyzyvatel, nikdo nedostane odměnu 3 karty."
    ],
    "tags": [
      "hnědá",
      "souboj",
      "duel",
      "odhoď bang"
    ],
    "image": "assets/cards/01_zakladni_hra/duel.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Challenge any player. Both players alternately discard a BANG! card. The first who fails loses 1 life point.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Karty Barel ani Vedle! nelze v souboji použít.",
      "Karty BANG! odhozené v Duelu se nepočítají do limitu 1 BANG! za tah.",
      "Pokud v Duelu prohraje Outlaw vyzyvatel, nikdo nedostane odměnu 3 karty."
    ]
  },
  {
    "id": "card-barrel",
    "name": "Barel",
    "nameEn": "Barrel",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 2,
    "suit": "♠",
    "values": "Q, K",
    "range": null,
    "cost": null,
    "effect": "Když jste cílem efektu BANG!, můžete sejmout: srdcová karta (♥) útok zruší (jako karta Vedle!). Při neúspěchu můžete stále hrát Vedle! z ruky.",
    "timing": "Ve hře před vámi; aktivace při útoku BANG!",
    "rulings": [
      "Hráč smí mít vyložený pouze 1 Barel (pravidlo unikátnosti jména).",
      "Jourdonnais může kombinovat svůj imaginární Barel se skutečným (snímá dvakrát).",
      "Proti Slab the Killerovi úspěšné sejmutí nahradí pouze 1 ze 2 nutných Vedle!."
    ],
    "tags": [
      "modrá",
      "obrana",
      "barel",
      "sejmutí",
      "srdce"
    ],
    "image": "assets/cards/01_zakladni_hra/barrel.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "When targeted by a BANG!, draw: if Hearts ♥, you avoid the shot without needing a Missed! card.",
    "timingEn": "In play in front of you; activated during BANG! attack",
    "costEn": null,
    "rulingsEn": [
      "Hráč smí mít vyložený pouze 1 Barel (pravidlo unikátnosti jména).",
      "Jourdonnais může kombinovat svůj imaginární Barel se skutečným (snímá dvakrát).",
      "Proti Slab the Killerovi úspěšné sejmutí nahradí pouze 1 ze 2 nutných Vedle!."
    ]
  },
  {
    "id": "card-mustang",
    "name": "Mustang",
    "nameEn": "Mustang",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 2,
    "suit": "♥",
    "values": "8, 9",
    "range": null,
    "cost": null,
    "effect": "Všichni ostatní hráči vás vidí ve vzdálenosti o 1 větší. Vy sami vidíte ostatní v normální vzdálenosti.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Zvyšuje vzdálenost pro útoky BANG!, Paniku!, nože atd.",
      "Sčítá se s dalším Mustangem (u Paula Regreta) a Skrýší (Hideout).",
      "Neguje se s Hledím (Scope)."
    ],
    "tags": [
      "modrá",
      "vzdálenost",
      "kůň",
      "mustang",
      "obrana"
    ],
    "image": "assets/cards/01_zakladni_hra/mustang.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Other players see you at distance +1.",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Zvyšuje vzdálenost pro útoky BANG!, Paniku!, nože atd.",
      "Sčítá se s dalším Mustangem (u Paula Regreta) a Skrýší (Hideout).",
      "Neguje se s Hledím (Scope)."
    ]
  },
  {
    "id": "card-scope",
    "name": "Hledí",
    "nameEn": "Scope",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♠",
    "values": "A",
    "range": null,
    "cost": null,
    "effect": "Všechny ostatní hráče vidíte ve vzdálenosti o 1 menší. Vzdálenost menší než 1 se počítá jako 1.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Rozšiřuje dosah střelby i dosah karty Panika!.",
      "Sčítá se se schopností Rose Doolan.",
      "Ostatní vás vidí v normální vzdálenosti."
    ],
    "tags": [
      "modrá",
      "vzdálenost",
      "hledí",
      "útok",
      "zaměřovač"
    ],
    "image": "assets/cards/01_zakladni_hra/scope.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "You see all other players at distance -1 (minimum distance is 1).",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Rozšiřuje dosah střelby i dosah Panic! card.",
      "Sčítá se se schopností Rose Doolan.",
      "Ostatní vás vidí v normální vzdálenosti."
    ]
  },
  {
    "id": "card-jail",
    "name": "Vězení",
    "nameEn": "Jail",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 3,
    "suit": "♠ / ♥",
    "values": "4, J, 10",
    "range": "Libovolný hráč (kromě Šerifa)",
    "cost": null,
    "effect": "Vyložte před libovolného hráče kromě Šerifa. Na začátku svého tahu uvězněný sejme: srdce (♥) = uteče a hraje normálně. Jinak odhodí Vězení a vynechá tah.",
    "timing": "Před Fází 1 tahu",
    "rulings": [
      "Šerif nesmí být uvězněn.",
      "Ve Vězení hráč stále může hrát karty Vedle! a Pivo mimo svůj tah a zůstává terčem útoků.",
      "Nové pravidlo Legend: Uvězněný hráč může buď sejmout, NEBO dobrovolně odhodit 1 srdcovou kartu z ruky a odehrát tah bez rizika!"
    ],
    "tags": [
      "modrá",
      "vězení",
      "přeskočení tahu",
      "sejmutí",
      "zákaz na šerifa"
    ],
    "image": "assets/cards/01_zakladni_hra/jail.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Play on any player (except Sheriff). At the start of their turn, draw: if Hearts ♥, they escape; otherwise they skip their turn.",
    "timingEn": "Before Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Sheriff nesmí být uvězněn.",
      "Ve Vězení hráč stále může hrát Missed! card a Pivo mimo svůj tah a zůstává terčem útoků.",
      "Nové pravidlo Legend: Uvězněný hráč může buď sejmout, NEBO dobrovolně odhodit 1 srdcovou kartu z ruky a odehrát tah bez rizika!"
    ]
  },
  {
    "id": "card-dynamite",
    "name": "Dynamit",
    "nameEn": "Dynamite",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♥",
    "values": "2",
    "range": null,
    "cost": null,
    "effect": "Vyložte před sebe. Na začátku vašeho dalšího tahu před 1. fází sejměte: Piková dvojka až devítka (♠ 2-9) = výbuch! Ztrácíte 3 životy. Jinak pošlete Dynamit hráči po levici.",
    "timing": "Před Fází 1 tahu",
    "rulings": [
      "Při výbuchu způsobené zranění nepatří žádnému hráči (nezapočítává se El Gringovi, nikdo nedostane odměnu za zabití).",
      "Pokud má hráč před sebou Dynamit i Vězení, VŽDY se jako první vyhodnocuje Dynamit!",
      "K záchraně před 3 zraněními může hráč zahrát více Piv najednou."
    ],
    "tags": [
      "modrá",
      "dynamit",
      "výbuch",
      "3 životy",
      "hazard"
    ],
    "image": "assets/cards/01_zakladni_hra/dynamite.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Passes clockwise. At the start of each player's turn, draw: if Spades ♠ 2–9, it explodes for 3 life points! Otherwise passes to the left.",
    "timingEn": "Before Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Při výbuchu způsobené zranění nepatří žádnému hráči (nezapočítává se El Gringovi, nikdo nedostane odměnu za zabití).",
      "Pokud má hráč před sebou Dynamit i Vězení, VŽDY se jako první vyhodnocuje Dynamit!",
      "K záchraně před 3 zraněními může hráč zahrát více Piv najednou."
    ]
  },
  {
    "id": "weapon-colt-45",
    "name": "Colt .45",
    "nameEn": "Colt .45",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň (výchozí)",
    "copies": 0,
    "suit": null,
    "values": null,
    "range": "Dostřel 1",
    "cost": null,
    "effect": "Základní revolver vyobrazený na hráčské desce. Nelze ho ukrást ani odhodit. Umožňuje střílet na vzdálenost 1.",
    "timing": "Trvale k dispozici",
    "rulings": [
      "Pokud hráč přijde o vyloženou zbraň, automaticky opět střílí Coltem .45."
    ],
    "tags": [
      "zbraň",
      "colt",
      "dostřel 1",
      "základ"
    ],
    "image": null,
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Default weapon pictured on player board. Range 1.",
    "timingEn": "Permanently available",
    "costEn": null,
    "rulingsEn": [
      "Pokud hráč přijde o vyloženou zbraň, automaticky opět střílí Coltem .45."
    ]
  },
  {
    "id": "weapon-volcanic",
    "name": "Volcanic",
    "nameEn": "Volcanic",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň",
    "copies": 2,
    "suit": "♠ / ♣",
    "values": "10",
    "range": "Dostřel 1",
    "cost": null,
    "effect": "Dostřel 1. Umožňuje zahrát libovolný počet karet BANG! ve vašem tahu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Všechny výstřely musí směřovat na cíle ve vzdálenosti 1 (pokud nemáte Hledí snižující vzdálenost).",
      "Můžete mít ve hře jen 1 kartu zbraně současně."
    ],
    "tags": [
      "zbraň",
      "volcanic",
      "dostřel 1",
      "rychlopalba",
      "neomezený bang"
    ],
    "image": "assets/cards/01_zakladni_hra/volcanic.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Firearm weapon with Range 1. Allows you to play any number of BANG! cards on your turn.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Všechny výstřely musí směřovat na cíle ve vzdálenosti 1 (pokud nemáte Hledí snižující vzdálenost).",
      "Můžete mít ve hře jen 1 kartu zbraně současně."
    ]
  },
  {
    "id": "weapon-schofield",
    "name": "Schofield",
    "nameEn": "Schofield",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň",
    "copies": 3,
    "suit": "♣ / ♠",
    "values": "J, Q, K",
    "range": "Dostřel 2",
    "cost": null,
    "effect": "Zbraň s dostřelem 2. Nahrazuje předchozí zbraň.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Zbraně nemění skutečnou vzdálenost mezi hráči, pouze dostřel karty BANG!."
    ],
    "tags": [
      "zbraň",
      "schofield",
      "dostřel 2"
    ],
    "image": "assets/cards/01_zakladni_hra/schofield.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Firearm weapon with Range 2.",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Zbraně nemění skutečnou vzdálenost mezi hráči, pouze dostřel BANG! card."
    ]
  },
  {
    "id": "weapon-remington",
    "name": "Remington",
    "nameEn": "Remington",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň",
    "copies": 1,
    "suit": "♣",
    "values": "K",
    "range": "Dostřel 3",
    "cost": null,
    "effect": "Zbraň s dostřelem 3. Nahrazuje předchozí zbraň.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 3."
    ],
    "tags": [
      "zbraň",
      "remington",
      "dostřel 3"
    ],
    "image": "assets/cards/01_zakladni_hra/remington.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Firearm weapon with Range 3.",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 3."
    ]
  },
  {
    "id": "weapon-rev-carabine",
    "name": "Rev. Carabine",
    "nameEn": "Rev. Carabine",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň",
    "copies": 1,
    "suit": "♣",
    "values": "A",
    "range": "Dostřel 4",
    "cost": null,
    "effect": "Zbraň s dostřelem 4. Nahrazuje předchozí zbraň.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 4."
    ],
    "tags": [
      "zbraň",
      "rev carabine",
      "karabina",
      "dostřel 4"
    ],
    "image": "assets/cards/01_zakladni_hra/rev-carabine.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Firearm weapon with Range 4.",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 4."
    ]
  },
  {
    "id": "weapon-winchester",
    "name": "Winchester",
    "nameEn": "Winchester",
    "expansion": "base",
    "expansionName": "Základní hra",
    "type": "blue",
    "typeLabel": "Zbraň",
    "copies": 1,
    "suit": "♠",
    "values": "8",
    "range": "Dostřel 5",
    "cost": null,
    "effect": "Zbraň s dostřelem 5. Nahrazuje předchozí zbraň. Dosáhne téměř na jakéhokoli hráče u stolu.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 5."
    ],
    "tags": [
      "zbraň",
      "winchester",
      "puška",
      "dostřel 5"
    ],
    "image": "assets/cards/01_zakladni_hra/winchester.webp",
    "expansionNameEn": "Base Game",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Firearm weapon with Range 5.",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje zasáhnout cíle až ve vzdálenosti 5."
    ]
  },
  {
    "id": "char-apache-kid",
    "name": "Apache Kid",
    "nameEn": "Apache Kid",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Nemají na vás vliv kárové karty (♦) zahrané jinými hráči. V průběhu Duelu tato schopnost neúčinkuje.",
    "timing": "Trvalá pasivní imunita",
    "rulings": [
      "Imunita platí na kárové karty BANG!, Panika!, Cat Balou atd.",
      "Nelze na něj zahrát kárový Duel. Pokud je však vyzván nekárovým Duelem, kárové karty BANG! odhozené soupeřem se počítají jako platné.",
      "Proti Docu Holydayovi: k zásahu Apache Kida musí být alespoň jedna ze 2 odhozených karet nekárová."
    ],
    "tags": [
      "postava",
      "imunita",
      "káry",
      "dodge city"
    ],
    "image": "assets/cards/02_mesto_duchu/apache-kid.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Cards with Diamonds ♦ played by other players have no effect on him.",
    "timingEn": "Permanent passive immunity",
    "costEn": null,
    "rulingsEn": [
      "Imunita platí na kárové BANG! card, Panika!, Cat Balou atd.",
      "Nelze na něj zahrát kárový Duel. Pokud je však vyzván nekárovým Duelem, kárové BANG! card odhozené soupeřem se počítají jako platné.",
      "Proti Docu Holydayovi: k zásahu Apache Kida musí být alespoň jedna ze 2 odhozených karet nekárová."
    ]
  },
  {
    "id": "char-belle-star",
    "name": "Belle Star",
    "nameEn": "Belle Star",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Během vašeho tahu nemají žádný efekt jakékoli karty, které mají ostatní hráči před sebou ve hře (modré i zelené).",
    "timing": "Celý vlastní tah",
    "rulings": [
      "Ignoruje soupeřovy Barely, Mustangy, Skrýše, zbraně i zelené obranné karty.",
      "V rozšíření Ozbrojení a nebezpeční ignoruje i oranžové karty soupeřů (Bedna, Nebezpečné zbraně).",
      "Černé karty vybavení ze Zlaté horečky však mají vlastní pravidla a nejsou modrými ani zelenými kartami."
    ],
    "tags": [
      "postava",
      "ignorování vyložených karet",
      "mustang",
      "barel"
    ],
    "image": "assets/cards/02_mesto_duchu/belle-star.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "During her turn, cards in play in front of other players have no effect.",
    "timingEn": "Entire own turn",
    "costEn": null,
    "rulingsEn": [
      "Ignoruje soupeřovy Barely, Mustangy, Skrýše, zbraně i zelené obranné karty.",
      "V rozšíření Ozbrojení a nebezpeční ignoruje i orange card(s) soupeřů (Bedna, Nebezpečné zbraně).",
      "Černé karty vybavení ze Zlaté horečky však mají vlastní pravidla a nejsou modrými ani green card(s)."
    ]
  },
  {
    "id": "char-bill-noface",
    "name": "Bill Noface",
    "nameEn": "Bill Noface",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si doberte 1 kartu plus 1 kartu za každé aktuální zranění (ztracený život).",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Při plném zdraví (4 životy) dobírá 1 kartu.",
      "Při 3 životech dobírá 2 karty, při 2 životech 3 karty, při 1 životu dobírá 4 karty!",
      "Pokud se vrátí jako Duch (Údolí stínů) bez životů, dobírá plných 5 karet!"
    ],
    "tags": [
      "postava",
      "fáze 1",
      "zranění",
      "dobírání",
      "comeback"
    ],
    "image": "assets/cards/02_mesto_duchu/bill-noface.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, draws 1 card plus 1 card for each wound he currently has.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Při plném zdraví (4 life point(s)) dobírá 1 kartu.",
      "Při 3 life point(s) dobírá 2 karty, při 2 life point(s) 3 karty, při 1 life point(s) dobírá 4 karty!",
      "Pokud se vrátí jako Duch (Údolí stínů) bez life point(s), dobírá plných 5 karet!"
    ]
  },
  {
    "id": "char-chuck-wengam",
    "name": "Chuck Wengam",
    "nameEn": "Chuck Wengam",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Ve svém tahu se můžete rozhodnout ztratit 1 život a dobrat si 2 karty z balíčku. Můžete použít i vícekrát za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nemůže se rozhodnout ztratit svůj poslední život (sebevražda je zakázána).",
      "Může se vyléčit Pivem a znovu ztratit život pro další karty."
    ],
    "tags": [
      "postava",
      "obětování života",
      "dobírání",
      "agrese"
    ],
    "image": "assets/cards/02_mesto_duchu/chuck-wengam.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "On his turn, may lose 1 life point to immediately draw 2 cards from the deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Nemůže se rozhodnout ztratit svůj poslední life point(s) (sebevražda je zakázána).",
      "Může se vyléčit Pivem a znovu ztratit life point(s) pro další karty."
    ]
  },
  {
    "id": "char-doc-holyday",
    "name": "Doc Holyday",
    "nameEn": "Doc Holyday",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": "Odhození 2 karet z ruky",
    "effect": "Jednou během svého tahu můžete odhodit 2 libovolné karty z ruky a aktivovat tím efekt BANG! na hráče v dostřelu.",
    "timing": "Fáze 2 vlastního tahu (1x za tah)",
    "rulings": [
      "Tento efekt NENÍ zahráním karty BANG!, takže se nepočítá do limitu 1 BANG! za tah.",
      "Doc Holyday může ve stejném tahu zahrát svou běžnou kartu BANG! i použít tuto schopnost.",
      "Na cíl platí standardní obrana (Vedle!, Barel)."
    ],
    "tags": [
      "postava",
      "efekt bang",
      "odhození karet",
      "střelec"
    ],
    "image": "assets/cards/02_mesto_duchu/doc-holyday.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may discard any 2 cards from his hand to count as playing a BANG! card.",
    "timingEn": "Phase 2 of own turn (once per turn)",
    "costEn": "Discard 2 cards from hand",
    "rulingsEn": [
      "This effect is NOT playing a BANG! card, so it does not count towards the 1 BANG! per turn limit.",
      "Doc Holyday může ve stejném tahu zahrát svou běžnou BANG! card i použít tuto schopnost.",
      "Na cíl platí standardní obrana (Vedle!, Barel)."
    ]
  },
  {
    "id": "char-elena-fuente",
    "name": "Elena Fuente",
    "nameEn": "Elena Fuente",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může použít jakoukoli kartu ze své ruky jako kartu Vedle!.",
    "timing": "Mimo tah (při obraně)",
    "rulings": [
      "Prakticky nezranitelná běžnou střelbou, dokud má karty v ruce.",
      "Proti Slab the Killerovi může odhodit libovolné 2 karty jako 2 efekty Vedle!.",
      "Nemůže použít karty ze hry, pouze z ruky."
    ],
    "tags": [
      "postava",
      "univerzální obrana",
      "vedle",
      "neproniknutelná"
    ],
    "image": "assets/cards/02_mesto_duchu/elena-fuente.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "May use any card from her hand as a Missed! card.",
    "timingEn": "Out of turn (when defending)",
    "costEn": null,
    "rulingsEn": [
      "Prakticky nezranitelná běžnou střelbou, dokud má karty v ruce.",
      "Proti Slab the Killerovi může odhodit libovolné 2 karty jako 2 efekty Vedle!.",
      "Nemůže použít karty ze hry, pouze z ruky."
    ]
  },
  {
    "id": "char-greg-digger",
    "name": "Greg Digger",
    "nameEn": "Greg Digger",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je jiná postava zabita a vyřazena ze hry, přidejte si ihned 2 životy.",
    "timing": "Okamžitě při vyřazení postavy",
    "rulings": [
      "Nemůže překročit svůj počáteční počet životů (4 životy).",
      "Neaktivuje se při odchodu Stínových pistolníků (ti neumírají).",
      "Aktivuje se, když postava s Vagonem duchů definitivně vypadne."
    ],
    "tags": [
      "postava",
      "hrobník",
      "léčení při smrti",
      "životy"
    ],
    "image": "assets/cards/02_mesto_duchu/greg-digger.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Each time another player is eliminated, immediately regains 2 life points.",
    "timingEn": "Immediately upon elimination of a character",
    "costEn": null,
    "rulingsEn": [
      "Nemůže překročit svůj počáteční počet life point(s) (4 life point(s)).",
      "Neaktivuje se při odchodu Stínových pistolníků (ti neumírají).",
      "Aktivuje se, když postava s Vagonem duchů definitivně vypadne."
    ]
  },
  {
    "id": "char-herb-hunter",
    "name": "Herb Hunter",
    "nameEn": "Herb Hunter",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je jiná postava zabita a vyřazena, doberte si 2 karty z balíčku.",
    "timing": "Okamžitě při vyřazení postavy",
    "rulings": [
      "Pokud Herb Hunter sám zabije Banditu, dostane běžnou odměnu 3 karty + 2 karty za schopnost = celkem 5 karet!",
      "Neaktivuje se při odchodu Stínového pistolníka na konci tahu."
    ],
    "tags": [
      "postava",
      "lovec",
      "odměna",
      "dobírání při smrti"
    ],
    "image": "assets/cards/02_mesto_duchu/herb-hunter.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Each time another player is eliminated, immediately draws 2 cards from the deck.",
    "timingEn": "Immediately upon elimination of a character",
    "costEn": null,
    "rulingsEn": [
      "Pokud Herb Hunter sám zabije Outlaw, dostane běžnou odměnu 3 karty + 2 karty za schopnost = celkem 5 karet!",
      "Neaktivuje se při odchodu Stínového pistolníka na konci tahu."
    ]
  },
  {
    "id": "char-jose-delgado",
    "name": "José Delgado",
    "nameEn": "José Delgado",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození 1 modré karty z ruky",
    "effect": "Až dvakrát během svého tahu můžete odhodit 1 modrou kartu z ruky a dobrat si 2 karty z balíčku.",
    "timing": "Fáze 2 vlastního tahu (až 2x)",
    "rulings": [
      "Karta musí být odhozena z ruky, nikoli ze stolu.",
      "Může takto protočit až 2 modré karty a získat celkem 4 nové karty."
    ],
    "tags": [
      "postava",
      "modré karty",
      "dobírání",
      "cyklení"
    ],
    "image": "assets/cards/02_mesto_duchu/jose-delgado.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Up to twice per turn, may discard 1 blue card from hand to draw 2 cards from the deck.",
    "timingEn": "Phase 2 of own turn (up to 2×)",
    "costEn": "Discard 1 blue card from hand",
    "rulingsEn": [
      "Karta musí být odhozena z ruky, nikoli ze stolu.",
      "Může takto protočit až 2 blue card(s) a získat celkem 4 nové karty."
    ]
  },
  {
    "id": "char-molly-stark",
    "name": "Molly Stark",
    "nameEn": "Molly Stark",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Vždy, když mimo svůj tah zahrajete nebo dobrovolně odhodíte z ruky kartu Vedle!, Pivo, BANG! apod., doberte si 1 kartu z balíčku.",
    "timing": "Mimo vlastní tah",
    "rulings": [
      "V případě Duelu si karty za odhozené karty BANG! dobírá až po skončení Duelu (pokud v něm neztratí poslední život).",
      "Nucené odhození kartami Cat Balou, Rvačka nebo Kankán se NEPOVAŽUJE za dobrovolné odhození!",
      "Odhození BANG! proti Indiánům se považuje za dobrovolné odhození a Molly si líže!"
    ],
    "tags": [
      "postava",
      "reakce mimo tah",
      "dobírání",
      "obrana"
    ],
    "image": "assets/cards/02_mesto_duchu/molly-stark.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Whenever she plays or discards a card out of turn, immediately draws 1 card from the deck.",
    "timingEn": "Out of own turn",
    "costEn": null,
    "rulingsEn": [
      "V případě Duelu si karty za odhozené BANG! card dobírá až po skončení Duelu (pokud v něm neztratí poslední life point(s)).",
      "Nucené odhození Cat Balou card, Rvačka nebo Kankán se NEPOVAŽUJE za dobrovolné odhození!",
      "Odhození BANG! proti Indiánům se považuje za dobrovolné odhození a Molly si líže!"
    ]
  },
  {
    "id": "char-pat-brennan",
    "name": "Pat Brennan",
    "nameEn": "Pat Brennan",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Libovolný hráč ve hře",
    "cost": null,
    "effect": "V 1. fázi svého tahu se může rozhodnout dobrat obvyklé 2 karty z balíčku, NEBO si místo nich vzít 1 kartu ze hry (modrou i zelenou) ležící před jakýmkoli hráčem do své ruky.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Bere pouze jednu kartu ze stolu místo obou z balíčku.",
      "Může vzít zbraň, Mustang, Barel, zelenou kartu i vagon.",
      "Nemůže vzít černé vybavení ze Zlaté horečky."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "krádež ze stolu",
      "vyložené karty"
    ],
    "image": "assets/cards/02_mesto_duchu/pat-brennan.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, may choose to draw 1 card in play in front of any player instead of 2 cards from deck.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Bere pouze jednu kartu ze stolu místo obou z balíčku.",
      "Může vzít zbraň, Mustang, Barel, green card(s) i vagon.",
      "Nemůže vzít black equipment ze Zlaté horečky."
    ]
  },
  {
    "id": "char-pixie-pete",
    "name": "Pixie Pete",
    "nameEn": "Pixie Pete",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si dobírá 3 karty místo 2.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Konstantní výhoda +1 karta v každém tahu.",
      "V kombinaci s kartami jako Příjezd vlaku dobírá 4 karty!"
    ],
    "tags": [
      "postava",
      "fáze 1",
      "dobírání",
      "karty navíc"
    ],
    "image": "assets/cards/02_mesto_duchu/pixie-pete.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, draws 3 cards from the deck instead of 2.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Konstantní výhoda +1 karta v každém tahu.",
      "V kombinaci s kartami jako Příjezd vlaku dobírá 4 karty!"
    ]
  },
  {
    "id": "char-sean-mallory",
    "name": "Sean Mallory",
    "nameEn": "Sean Mallory",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Ve 3. fázi svého tahu neodhazuje žádné karty, pokud jich má v ruce nanejvýš 10 (bez ohledu na zbývající životy).",
    "timing": "Fáze 3 tahu",
    "rulings": [
      "Může mít v ruce až 10 karet i s 1 životem.",
      "Pokud má 11 a více karet, musí odhodit přebytek, aby mu zbylo 10 karet."
    ],
    "tags": [
      "postava",
      "fáze 3",
      "kapacita ruky",
      "hromadění karet"
    ],
    "image": "assets/cards/02_mesto_duchu/sean-mallory.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "In Phase 3, he may hold up to 10 cards in hand regardless of his current life points.",
    "timingEn": "Phase 3 of turn",
    "costEn": null,
    "rulingsEn": [
      "Může mít v ruce až 10 karet i s 1 life point(s).",
      "Pokud má 11 a více karet, musí odhodit přebytek, aby mu zbylo 10 karet."
    ]
  },
  {
    "id": "char-tequila-joe",
    "name": "Tequila Joe",
    "nameEn": "Tequila Joe",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli zahrajete kartu Pivo, přidejte si 2 životy místo 1.",
    "timing": "Při zahrání Piva",
    "rulings": [
      "Platí pouze pro skutečnou kartu Pivo.",
      "Karty jako Saloon, Tequila nebo Čutora mu přidávají pouze 1 život.",
      "Ve 2 hráčích Pivo neléčí (ani pro Tequila Joea)."
    ],
    "tags": [
      "postava",
      "pivo",
      "dvojité léčení",
      "životy"
    ],
    "image": "assets/cards/02_mesto_duchu/tequila-joe.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he plays a Beer card, he regains 2 life points instead of 1.",
    "timingEn": "When playing Beer",
    "costEn": null,
    "rulingsEn": [
      "Platí pouze pro skutečnou Beer card.",
      "Karty jako Saloon, Tequila nebo Čutora mu přidávají pouze 1 life point(s).",
      "Ve 2 hráčích Pivo neléčí (ani pro Tequila Joea)."
    ]
  },
  {
    "id": "char-vera-custer",
    "name": "Vera Custer",
    "nameEn": "Vera Custer",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Na začátku 1. fáze svého tahu určí jednu postavu stále ve hře. Až do začátku svého příštího tahu má stejnou schopnost jako tato postava.",
    "timing": "Začátek Fáze 1 tahu",
    "rulings": [
      "Zkopíruje schopnost na celé kolo včetně obranných schopností mimo tah (např. Jourdonnais, Elena Fuente).",
      "Pokud si zvolí Vulture Sama a dojde k úmrtí, karty se mezi ni a Sama rozdělují střídavě počínaje hráčem dříve na tahu."
    ],
    "tags": [
      "postava",
      "kopírování schopností",
      "chameleon",
      "flexibilita"
    ],
    "image": "assets/cards/02_mesto_duchu/vera-custer.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Character",
    "effectEn": "At the start of her turn, chooses 1 other living character in play and gains their ability until her next turn.",
    "timingEn": "Start of Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Zkopíruje schopnost na celé kolo včetně obranných schopností mimo tah (např. Jourdonnais, Elena Fuente).",
      "Pokud si zvolí Vulture Sama a dojde k úmrtí, karty se mezi ni a Sama rozdělují střídavě počínaje hráčem dříve na tahu."
    ]
  },
  {
    "id": "card-sombrero",
    "name": "Sombrero",
    "nameEn": "Sombrero",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♣",
    "values": "7",
    "range": null,
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. Od tahu příštího hráče můžete kartu odhodit ze stolu a získat tím efekt karty Vedle!.",
    "timing": "Mimo tah (v reakci na útok BANG!)",
    "rulings": [
      "Nelze použít v tahu, v němž byla vyložena.",
      "Může být zničena Cat Balou nebo ukradena Panikou před použitím."
    ],
    "tags": [
      "zelená",
      "obrana",
      "vedle",
      "sombrero"
    ],
    "image": "assets/cards/02_mesto_duchu/sombrero.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard when targeted by BANG!: acts as a Missed! card.",
    "timingEn": "Out of turn (in response to BANG! attack)",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Nelze použít v tahu, v němž byla vyložena.",
      "Může být zničena Cat Balou nebo ukradena Panikou před použitím."
    ]
  },
  {
    "id": "card-iron-plate",
    "name": "Prkenný kryt / Železný plát",
    "nameEn": "Iron Plate",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 2,
    "suit": "♦ / ♠",
    "values": "A, Q",
    "range": null,
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích můžete odhodit pro efekt Vedle!.",
    "timing": "Mimo tah (v reakci na útok)",
    "rulings": [
      "Po vyložení čeká do tahu dalšího hráče."
    ],
    "tags": [
      "zelená",
      "obrana",
      "vedle",
      "železný plát"
    ],
    "image": "assets/cards/02_mesto_duchu/iron-plate.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard when targeted by BANG!: acts as a Missed! card.",
    "timingEn": "Out of turn (in response to attack)",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Po vyložení čeká do tahu dalšího hráče."
    ]
  },
  {
    "id": "card-ten-gallon-hat",
    "name": "Klobouk / Širák",
    "nameEn": "Ten Gallon Hat",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♦",
    "values": "J",
    "range": null,
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích můžete odhodit pro efekt Vedle!.",
    "timing": "Mimo tah",
    "rulings": [
      "Funguje jako připravené Vedle! na stole."
    ],
    "tags": [
      "zelená",
      "obrana",
      "vedle",
      "klobouk"
    ],
    "image": "assets/cards/02_mesto_duchu/ten-gallon-hat.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard when targeted by BANG!: acts as a Missed! card.",
    "timingEn": "Out of turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Funguje jako připravené Vedle! na stole."
    ]
  },
  {
    "id": "card-bible",
    "name": "Bible",
    "nameEn": "Bible",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♥",
    "values": "10",
    "range": null,
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte pro efekt Vedle! a navíc sejměte: otočíte-li srdce (♥), doberte si 1 kartu z balíčku.",
    "timing": "Mimo tah",
    "rulings": [
      "Efekt Vedle! platí vždy; sejmutí na srdce je bonusové dobrání."
    ],
    "tags": [
      "zelená",
      "obrana",
      "vedle",
      "bible",
      "sejmutí",
      "srdce"
    ],
    "image": "assets/cards/02_mesto_duchu/bible.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn after being targeted by BANG!: acts as Missed! and draw 1 card.",
    "timingEn": "Out of turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Efekt Vedle! platí vždy; sejmutí na srdce je bonusové dobrání."
    ]
  },
  {
    "id": "card-derringer",
    "name": "Derringer",
    "nameEn": "Derringer",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♠",
    "values": "7",
    "range": "Vzdálenost 1",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V jednom ze svých dalších tahů odhoďte: efekt BANG! na hráče ve vzdálenosti 1 a zároveň si doberte 1 kartu z balíčku.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt, ne karta BANG!).",
      "Dostřel je vázán na vzdálenost 1 (modifikován Mustangem/Hledím, nikoli zbraněmi)."
    ],
    "tags": [
      "zelená",
      "útok",
      "derringer",
      "lízni kartu",
      "efekt bang"
    ],
    "image": "assets/cards/02_mesto_duchu/derringer.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: fire a BANG! at distance 1 and draw 1 card from deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt, ne BANG! card).",
      "Dostřel je vázán na vzdálenost 1 (modifikován Mustangem/Hledím, nikoli zbraněmi)."
    ]
  },
  {
    "id": "card-pepperbox",
    "name": "Dýmkový revolver / Pepřenka",
    "nameEn": "Pepperbox",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♣",
    "values": "10",
    "range": "Dle zbraně",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte pro efekt BANG! na hráče v dostřelu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah."
    ],
    "tags": [
      "zelená",
      "útok",
      "pepřenka",
      "efekt bang"
    ],
    "image": "assets/cards/02_mesto_duchu/pepperbox.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: fire a BANG! within your weapon range.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Does not count towards the 1 BANG! per turn limit."
    ]
  },
  {
    "id": "card-knife",
    "name": "Nůž",
    "nameEn": "Knife",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♥",
    "values": "8",
    "range": "Vzdálenost 1",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte pro efekt BANG! na hráče ve vzdálenosti 1.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah."
    ],
    "tags": [
      "zelená",
      "útok",
      "nůž",
      "vzdálenost 1"
    ],
    "image": "assets/cards/02_mesto_duchu/knife.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: fire a BANG! at distance 1.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Does not count towards the 1 BANG! per turn limit."
    ]
  },
  {
    "id": "card-buffalo-rifle",
    "name": "Bizoní puška",
    "nameEn": "Buffalo Rifle",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♣",
    "values": "Q",
    "range": "Libovolná vzdálenost",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte pro efekt BANG! na jakéhokoli hráče bez ohledu na vzdálenost.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah. Zasáhne kohokoli."
    ],
    "tags": [
      "zelená",
      "útok",
      "puška",
      "libovolná vzdálenost"
    ],
    "image": "assets/cards/02_mesto_duchu/buffalo-rifle.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: fire a BANG! at any player regardless of distance.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Nepočítá se do limitu 1 BANG! za tah. Zasáhne kohokoli."
    ]
  },
  {
    "id": "card-howitzer",
    "name": "Houfnice",
    "nameEn": "Howitzer",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♠",
    "values": "9",
    "range": "Všichni ostatní hráči",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte pro efekt BANG! na všechny ostatní hráče.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Funguje jako připravený Kulomet na stole.",
      "Nepočítá se do limitu 1 BANG! za tah."
    ],
    "tags": [
      "zelená",
      "plošný útok",
      "houfnice",
      "kulomet"
    ],
    "image": "assets/cards/02_mesto_duchu/howitzer.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: fire a BANG! at all other living players (like Gatling).",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Funguje jako připravený Kulomet na stole.",
      "Does not count towards the 1 BANG! per turn limit."
    ]
  },
  {
    "id": "card-canteen",
    "name": "Pončo / Čutora",
    "nameEn": "Canteen",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♥",
    "values": "7",
    "range": null,
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V jednom ze svých dalších tahů odhoďte pro vyléčení 1 života.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Čutora NENÍ Pivo – nelze ji odhodit mimo vlastní tah při utrpění smrtelného zásahu!",
      "Funguje i ve 2 hráčích."
    ],
    "tags": [
      "zelená",
      "léčení",
      "čutora",
      "životy"
    ],
    "image": "assets/cards/02_mesto_duchu/canteen.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: regain 1 life point.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Čutora NENÍ Pivo – nelze ji odhodit mimo vlastní tah při utrpění smrtelného zásahu!",
      "Funguje i ve 2 hráčích."
    ]
  },
  {
    "id": "card-can-can",
    "name": "Kankán",
    "nameEn": "Can Can",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♣",
    "values": "J",
    "range": "Libovolná vzdálenost",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte: donutíte jakéhokoli hráče odhodit 1 kartu (ze hry nebo náhodně z ruky).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Funguje jako připravené Cat Balou na stole."
    ],
    "tags": [
      "zelená",
      "odhození karty",
      "kankán",
      "ničení"
    ],
    "image": "assets/cards/02_mesto_duchu/can-can.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: force any player to discard 1 card from hand or in play.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Funguje jako připravené Cat Balou na stole."
    ]
  },
  {
    "id": "card-conestoga",
    "name": "Dostavníkový vůz / Konkurence",
    "nameEn": "Conestoga",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "green",
    "typeLabel": "Zelená karta (Dodge City)",
    "copies": 1,
    "suit": "♦",
    "values": "9",
    "range": "Vzdálenost 2",
    "cost": "Odhození ze hry",
    "effect": "Vyložte před sebe. V dalších tazích odhoďte: vezměte si 1 kartu od hráče ve vzdálenosti až 2 (z ruky nebo ze hry).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Vylepšená Panika! s dosahem 2."
    ],
    "tags": [
      "zelená",
      "krádež",
      "konkurence",
      "vzdálenost 2"
    ],
    "image": "assets/cards/02_mesto_duchu/conestoga.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Green Card (Dodge City)",
    "effectEn": "Green card. Discard on your turn: draw 1 card from any player regardless of distance.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard from play",
    "rulingsEn": [
      "Vylepšená Panika! s dosahem 2."
    ]
  },
  {
    "id": "card-brawl",
    "name": "Rvačka",
    "nameEn": "Brawl",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (odhoď další kartu)",
    "copies": 1,
    "suit": "♠",
    "values": "J",
    "range": "Všichni ostatní hráči",
    "cost": "Odhození další karty z ruky",
    "effect": "Odhoďte Rvačku a spolu s ní ještě 1 kartu z ruky: všichni ostatní hráči musí odhodit 1 kartu (z ruky nebo ze hry dle vašeho výběru).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "U každého hráče se můžete zvlášť rozhodnout, zda mu zahodíte kartu ze stolu nebo náhodnou z ruky.",
      "Karty odhozené v důsledku Rvačky se nepovažují za dobrovolně odhozené (Molly Stark si nelíže)."
    ],
    "tags": [
      "hnědá",
      "plošné ničení",
      "rvačka",
      "odhoď kartu"
    ],
    "image": "assets/cards/02_mesto_duchu/brawl.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard with 1 other card: all other players must discard 1 card from hand or in play.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 additional card from hand",
    "rulingsEn": [
      "U každého hráče se můžete zvlášť rozhodnout, zda mu zahodíte kartu ze stolu nebo náhodnou z ruky.",
      "Karty odhozené v důsledku Rvačky se nepovažují za dobrovolně odhozené (Molly Stark si nelíže)."
    ]
  },
  {
    "id": "card-tequila",
    "name": "Tequila",
    "nameEn": "Tequila",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (odhoď další kartu)",
    "copies": 1,
    "suit": "♣",
    "values": "9",
    "range": "Libovolný hráč",
    "cost": "Odhození další karty z ruky",
    "effect": "Odhoďte Tequilu a další kartu z ruky: vyberte jakéhokoli hráče (i sebe), který si vyléčí 1 život.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nelze zahrát mimo svůj tah k záchraně života před smrtí.",
      "Lze hrát i ve 2 hráčích!"
    ],
    "tags": [
      "hnědá",
      "léčení",
      "tequila",
      "životy"
    ],
    "image": "assets/cards/02_mesto_duchu/tequila.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard with 1 other card: regain 1 life point.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 additional card from hand",
    "rulingsEn": [
      "Nelze zahrát mimo svůj tah k záchraně life point(s) před smrtí.",
      "Lze hrát i ve 2 hráčích!"
    ]
  },
  {
    "id": "card-rag-time",
    "name": "Rag Time",
    "nameEn": "Rag Time",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (odhoď další kartu)",
    "copies": 1,
    "suit": "♥",
    "values": "9",
    "range": "Vzdálenost 1",
    "cost": "Odhození další karty z ruky",
    "effect": "Odhoďte Rag Time a další kartu z ruky: vezměte si 1 kartu od hráče ve vzdálenosti 1 (z ruky nebo ze hry).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Funguje jako posílená Panika!."
    ],
    "tags": [
      "hnědá",
      "krádež",
      "rag time"
    ],
    "image": "assets/cards/02_mesto_duchu/rag-time.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard with 1 other card: draw 1 card from any player regardless of distance.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 additional card from hand",
    "rulingsEn": [
      "Funguje jako posílená Panika!."
    ]
  },
  {
    "id": "card-springfield",
    "name": "Přískok",
    "nameEn": "Springfield",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (odhoď další kartu)",
    "copies": 1,
    "suit": "♠",
    "values": "K",
    "range": "Libovolná vzdálenost",
    "cost": "Odhození další karty z ruky",
    "effect": "Odhoďte Přískok a další kartu z ruky: efekt BANG! na jakéhokoli hráče bez ohledu na vzdálenost.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt BANG!)."
    ],
    "tags": [
      "hnědá",
      "útok",
      "přískok",
      "efekt bang",
      "odstřelovač"
    ],
    "image": "assets/cards/02_mesto_duchu/springfield.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard with 1 other card: fire a BANG! at any player regardless of distance.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 additional card from hand",
    "rulingsEn": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt BANG!)."
    ]
  },
  {
    "id": "card-dodge",
    "name": "Úhyb",
    "nameEn": "Dodge",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 2,
    "suit": "♥ / ♦",
    "values": "K, 7",
    "range": null,
    "cost": null,
    "effect": "Zrušte efekt BANG! cílený na vás a ihned si doberte 1 kartu z dobíracího balíčku.",
    "timing": "Mimo tah (v reakci na útok)",
    "rulings": [
      "Funguje jako Vedle! + líznutí karty."
    ],
    "tags": [
      "hnědá",
      "obrana",
      "vedle",
      "úhyb",
      "lízni kartu"
    ],
    "image": "assets/cards/02_mesto_duchu/dodge.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Acts as a Missed! card and draw 1 card from the deck.",
    "timingEn": "Out of turn (in response to attack)",
    "costEn": null,
    "rulingsEn": [
      "Funguje jako Vedle! + líznutí karty."
    ]
  },
  {
    "id": "card-punch",
    "name": "Úder",
    "nameEn": "Punch",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♠",
    "values": "10",
    "range": "Vzdálenost 1",
    "cost": null,
    "effect": "Efekt BANG! na hráče ve vzdálenosti 1. Nepočítá se do limitu 1 BANG! za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Na zrušení stačí 1 Vedle! nebo Barel."
    ],
    "tags": [
      "hnědá",
      "útok",
      "úder",
      "vzdálenost 1",
      "efekt bang"
    ],
    "image": "assets/cards/02_mesto_duchu/punch.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. A melee BANG! attack at distance 1.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Na zrušení stačí 1 Vedle! nebo Barel."
    ]
  },
  {
    "id": "card-whisky",
    "name": "Whisky",
    "nameEn": "Whisky",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "brown",
    "typeLabel": "Hnědá karta (odhoď další kartu)",
    "copies": 1,
    "suit": "♥",
    "values": "Q",
    "range": null,
    "cost": "Odhození další karty z ruky",
    "effect": "Odhoďte Whisky a další kartu z ruky: vyléčte si 2 životy.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nelze zahrát mimo vlastní tah k záchraně života před smrtí.",
      "Funguje i ve 2 hráčích."
    ],
    "tags": [
      "hnědá",
      "léčení",
      "whisky",
      "2 životy"
    ],
    "image": "assets/cards/02_mesto_duchu/whisky.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard with 1 other card: regain 2 life points.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 additional card from hand",
    "rulingsEn": [
      "Nelze zahrát mimo vlastní tah k záchraně life point(s) před smrtí.",
      "Funguje i ve 2 hráčích."
    ]
  },
  {
    "id": "card-hideout",
    "name": "Skrýš",
    "nameEn": "Hideout",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♦",
    "values": "K",
    "range": null,
    "cost": null,
    "effect": "Všichni ostatní hráči vás vidí ve vzdálenosti o 1 větší.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Sčítá se s kartou Mustang (protože mají jiný název!)."
    ],
    "tags": [
      "modrá",
      "vzdálenost",
      "skrýš",
      "obrana"
    ],
    "image": "assets/cards/02_mesto_duchu/hideout.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. Other players see you at distance +1 (acts like Mustang).",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Sčítá se s kartou Mustang (protože mají jiný název!)."
    ]
  },
  {
    "id": "card-binoculars",
    "name": "Dalekohled",
    "nameEn": "Binoculars",
    "expansion": "dodge-city",
    "expansionName": "Dodge City",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♦",
    "values": "10",
    "range": null,
    "cost": null,
    "effect": "Všechny ostatní hráče vidíte ve vzdálenosti o 1 menší.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Sčítá se s Hledím (Scope)."
    ],
    "tags": [
      "modrá",
      "vzdálenost",
      "dalekohled",
      "útok"
    ],
    "image": "assets/cards/02_mesto_duchu/binocular.webp",
    "expansionNameEn": "Dodge City",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. You see all other players at distance -1 (acts like Scope).",
    "timingEn": "In play in front of you",
    "costEn": null,
    "rulingsEn": [
      "Sčítá se s Hledím (Scope)."
    ]
  },
  {
    "id": "char-don-bell",
    "name": "Don Bell",
    "nameEn": "Don Bell",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Na konci svého tahu sejměte: Pokud je sejmutá karta srdce (♥) nebo káry (♦), můžete odehrát ještě jeden celý tah!",
    "timing": "Konec vlastního tahu",
    "rulings": [
      "Na konci extra tahu už znovu nesnímá (nemůže mít řetězící se tahy).",
      "Nefunguje, pokud je stínovým pistolníkem, pokud neuspěl ve Vězení nebo pokud platí událost Město duchů."
    ],
    "tags": [
      "postava",
      "extra tah",
      "zlatá horečka",
      "červené karty"
    ],
    "image": "assets/cards/03_zlata_horecka/don-bell.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "At the end of his turn, draw: on Hearts ♥ or Diamonds ♦, he immediately takes another entire turn!",
    "timingEn": "End of own turn",
    "costEn": null,
    "rulingsEn": [
      "Na konci extra tahu už znovu nesnímá (nemůže mít řetězící se tahy).",
      "Nefunguje, pokud je stínovým pistolníkem, pokud neuspěl ve Vězení nebo pokud platí událost Město duchů."
    ]
  },
  {
    "id": "char-dutch-will",
    "name": "Dutch Will",
    "nameEn": "Dutch Will",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si doberte 2 karty, 1 z nich dle své volby odhoďte a vezměte si 1 valoun zlata ze zásoby.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Zaručený příjem 1 zlata v každém tahu za odhozenou kartu."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "valouny zlata",
      "zlatá horečka"
    ],
    "image": "assets/cards/03_zlata_horecka/dutch-will.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, draws 2 cards, keeps 1, and discards the other to take 1 Gold Nugget from the bank.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Zaručený příjem 1 zlata v každém tahu za odhozenou kartu."
    ]
  },
  {
    "id": "char-jacky-murieta",
    "name": "Jacky Murieta",
    "nameEn": "Jacky Murieta",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": "2 valouny zlata",
    "effect": "Během svého tahu můžete zaplatit 2 valouny zlata a provést efekt BANG!. Můžete použít i vícekrát za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepotřebuje kartu BANG! a nepočítá se do limitu 1 BANG! za tah.",
      "Nespouští zvláštní efekty Nebezpečných zbraní z Ozbrojení a nebezpeční."
    ],
    "tags": [
      "postava",
      "valouny zlata",
      "efekt bang",
      "zlatá horečka"
    ],
    "image": "assets/cards/03_zlata_horecka/jacky-murieta.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "May pay 2 Gold Nuggets to fire a BANG! without playing a card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Nepotřebuje BANG! card a nepočítá se do limitu 1 BANG! za tah.",
      "Nespouští zvláštní efekty Nebezpečných zbraní z Ozbrojení a nebezpeční."
    ]
  },
  {
    "id": "char-josh-mccloud",
    "name": "Josh McCloud",
    "nameEn": "Josh McCloud",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "2 valouny zlata",
    "effect": "Během svého tahu můžete zaplatit 2 valouny zlata a dobrat si vrchní kartu z balíčku vybavení.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Pokud si vytáhne hnědé vybavení, ihned ho zahraje. Pokud černé, vyloží před sebe.",
      "Pokud vytáhne černé vybavení, které už má před sebou vyložené, musí novou kartu odhodit."
    ],
    "tags": [
      "postava",
      "vybavení naslepo",
      "valouny zlata"
    ],
    "image": "assets/cards/03_zlata_horecka/josh-mccloud.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "May pay 2 Gold Nuggets to draw the top card from the equipment deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Pokud si vytáhne hnědé vybavení, ihned ho zahraje. Pokud černé, vyloží před sebe.",
      "Pokud vytáhne black equipment, které už má před sebou vyložené, musí novou kartu odhodit."
    ]
  },
  {
    "id": "char-madam-yto",
    "name": "Madam Yto",
    "nameEn": "Madam Yto",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Vždy, když někdo zahraje kartu Pivo (kdokoli u stolu, na život i na zisk zlata), doberte si 1 kartu z balíčku.",
    "timing": "Kdykoli někdo zahraje Pivo",
    "rulings": [
      "Platí i pro Pivo zahrané samotnou Madam Yto.",
      "Nefunguje na Saloon, Tequilu ani Láhev."
    ],
    "tags": [
      "postava",
      "pivo",
      "dobírání karet",
      "reakce"
    ],
    "image": "assets/cards/03_zlata_horecka/madam-yto.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "Whenever any Beer card is played, immediately draws 1 card from the draw deck.",
    "timingEn": "Whenever anyone plays Beer",
    "costEn": null,
    "rulingsEn": [
      "Platí i pro Pivo zahrané samotnou Madam Yto.",
      "Nefunguje na Saloon, Tequilu ani Láhev."
    ]
  },
  {
    "id": "char-pretty-luzena",
    "name": "Pretty Luzena",
    "nameEn": "Pretty Luzena",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Během svého tahu si můžete koupit 1 kartu vybavení se slevou 1 valoun zlata.",
    "timing": "Fáze 2 vlastního tahu (1x za tah)",
    "rulings": [
      "Vybavení za 1 valoun (pokud takové je) získá zcela zdarma.",
      "Může koupit více vybavení v tahu, ale slevu uplatní jen na jedno."
    ],
    "tags": [
      "postava",
      "sleva na vybavení",
      "valouny zlata"
    ],
    "image": "assets/cards/03_zlata_horecka/pretty-luzena.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "May purchase 1 equipment card each turn with a discount of 1 Gold Nugget.",
    "timingEn": "Phase 2 of own turn (once per turn)",
    "costEn": null,
    "rulingsEn": [
      "Vybavení za 1 valoun (pokud takové je) získá zcela zdarma.",
      "Může koupit více vybavení v tahu, ale slevu uplatní jen na jedno."
    ]
  },
  {
    "id": "char-raddie-snake",
    "name": "Raddie Snake",
    "nameEn": "Raddie Snake",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "1 valoun zlata za kartu",
    "effect": "Až dvakrát během svého tahu můžete zaplatit 1 valoun zlata a dobrat si 1 kartu z balíčku.",
    "timing": "Fáze 2 vlastního tahu (až 2x)",
    "rulings": [
      "Karty dobírá přímo z balíčku.",
      "Zaplacené valouny položte na kartu postavy a na konci tahu vraťte do zásoby."
    ],
    "tags": [
      "postava",
      "nákup karet",
      "dobírání",
      "zlato"
    ],
    "image": "assets/cards/03_zlata_horecka/raddie-snake.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "Up to twice per turn, may pay 1 Gold Nugget to draw 1 card from the deck.",
    "timingEn": "Phase 2 of own turn (up to 2×)",
    "costEn": "1 Gold Nugget per card",
    "rulingsEn": [
      "Karty dobírá přímo z balíčku.",
      "Zaplacené valouny položte na kartu postavy a na konci tahu vraťte do zásoby."
    ]
  },
  {
    "id": "char-simeon-picos",
    "name": "Simeon Picos",
    "nameEn": "Simeon Picos",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Vždy, když ztratíte život, vezměte si 1 valoun zlata ze společné zásoby.",
    "timing": "Okamžitě při ztrátě života",
    "rulings": [
      "Zlato bere ze společné zásoby na stole, nikoli od útočníka.",
      "Platí i při zranění z Dynamitu, Bomby nebo přivlastnění činu v Legendách."
    ],
    "tags": [
      "postava",
      "zranění",
      "zisk zlata",
      "kompenzace"
    ],
    "image": "assets/cards/03_zlata_horecka/simeon-picos.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Character",
    "effectEn": "Each time he loses a life point, takes 1 Gold Nugget from the bank.",
    "timingEn": "Immediately upon losing a life point",
    "costEn": null,
    "rulingsEn": [
      "Zlato bere ze společné zásoby na stole, nikoli od útočníka.",
      "Platí i při zranění z Dynamitu, Bomby nebo přivlastnění činu v Legendách."
    ]
  },
  {
    "id": "equip-boots",
    "name": "Boty",
    "nameEn": "Boots",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Za každý svůj ztracený život si doberte 1 kartu z balíčku. Neplatí pro poslední život.",
    "timing": "Ve hře před vámi; aktivace při zranění",
    "rulings": [
      "Funguje jako schopnost Barta Cassidyho.",
      "Odstranit lze pouze zaplacením 4 valounů zlata soupeřem (cena + 1)."
    ],
    "tags": [
      "vybavení",
      "černá",
      "boty",
      "dobírání při zranění"
    ],
    "image": "assets/cards/03_zlata_horecka/boots.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 1. Whenever you lose a life point, draw 1 card from the deck.",
    "timingEn": "In play in front of you; activated upon taking damage",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Funguje jako schopnost Barta Cassidyho.",
      "Odstranit lze pouze zaplacením 4 Gold Nugget(s) soupeřem (cena + 1)."
    ]
  },
  {
    "id": "equip-calumet",
    "name": "Kalumet",
    "nameEn": "Calumet",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Kárové karty (♦) zahrané soupeři na vás nemají žádný efekt. V průběhu Duelu schopnost neúčinkuje.",
    "timing": "Ve hře před vámi",
    "rulings": [
      "Dává schopnost postavy Apache Kid jakékoli postavě!",
      "Nelze na vás hrát kárový Duel."
    ],
    "tags": [
      "vybavení",
      "černá",
      "kalumet",
      "imunita",
      "káry"
    ],
    "image": "assets/cards/03_zlata_horecka/calumet.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 3. Diamond ♦ cards played by other players have no effect on you.",
    "timingEn": "In play in front of you",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Dává schopnost postavy Apache Kid jakékoli postavě!",
      "Nelze na vás hrát kárový Duel."
    ]
  },
  {
    "id": "equip-gold-pan",
    "name": "Rýžovací mísa",
    "nameEn": "Gold Pan",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Až dvakrát během svého tahu můžete zaplatit 1 valoun zlata a dobrat si 1 kartu z balíčku.",
    "timing": "Fáze 2 vlastního tahu (až 2x)",
    "rulings": [
      "Umožňuje přeměňovat zlato na karty."
    ],
    "tags": [
      "vybavení",
      "černá",
      "rýžovací mísa",
      "nákup karet"
    ],
    "image": "assets/cards/03_zlata_horecka/gold-pan.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 1. Up to twice per turn, pay 1 Gold Nugget to draw 1 card from the deck.",
    "timingEn": "Phase 2 of own turn (up to 2×)",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Umožňuje přeměňovat zlato na karty."
    ]
  },
  {
    "id": "equip-horseshoe",
    "name": "Podkova",
    "nameEn": "Horseshoe",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "2 valouny zlata",
    "effect": "Vždy, když máte sejmout, otočte o 1 kartu navíc a vyberte si, kterou použijete.",
    "timing": "Při každém sejmutí",
    "rulings": [
      "Běžný hráč snímá 2 karty a vybírá 1.",
      "Lucky Duke snímá 3 karty a vybírá 1!",
      "Všechny sejmuté karty se poté odhodí."
    ],
    "tags": [
      "vybavení",
      "černá",
      "podkova",
      "sejmutí",
      "štěstí"
    ],
    "image": "assets/cards/03_zlata_horecka/horseshoe.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 2. Whenever you draw (check), flip 1 additional card and choose the result.",
    "timingEn": "On every draw check",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Běžný hráč snímá 2 karty a vybírá 1.",
      "Lucky Duke snímá 3 karty a vybírá 1!",
      "Všechny sejmuté karty se poté odhodí."
    ]
  },
  {
    "id": "equip-talisman",
    "name": "Talisman",
    "nameEn": "Talisman",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Za každý svůj ztracený život získáte 1 valoun zlata ze společné zásoby. Neplatí pro poslední život.",
    "timing": "Při zranění",
    "rulings": [
      "Dává schopnost Simeona Picose.",
      "V kombinaci se Simeonem získá za každé zranění 2 valouny zlata!"
    ],
    "tags": [
      "vybavení",
      "černá",
      "talisman",
      "zlato při zranění"
    ],
    "image": "assets/cards/03_zlata_horecka/lucky-charm.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 1. Whenever you lose a life point from another player's card, take 1 Gold Nugget.",
    "timingEn": "When taking damage",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Dává schopnost Simeona Picose.",
      "V kombinaci se Simeonem získá za každé zranění 2 Gold Nugget(s)!"
    ]
  },
  {
    "id": "equip-rucksack",
    "name": "Batoh",
    "nameEn": "Rucksack",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Zaplaťte 2 valouny zlata a přidejte si 1 život. Lze použít i MIMO VLASTNÍ TAH, pokud máte ztratit svůj poslední život!",
    "timing": "Vlastní tah Fáze 2 NEBO okamžitě při smrtelném zranění",
    "rulings": [
      "Jediné vybavení, které vás dokáže zachránit před smrtí bez karty Pivo!",
      "Lze použít opakovaně, pokud máte dostatek zlata."
    ],
    "tags": [
      "vybavení",
      "černá",
      "batoh",
      "léčení",
      "záchrana před smrtí"
    ],
    "image": "assets/cards/03_zlata_horecka/rucksack.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 2. Pay 2 Gold Nuggets to regain 1 life point.",
    "timingEn": "Own turn Phase 2 OR immediately upon lethal damage",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Jediné vybavení, které vás dokáže zachránit před smrtí bez Beer card!",
      "Lze použít opakovaně, pokud máte dostatek zlata."
    ]
  },
  {
    "id": "equip-gun-belt",
    "name": "Zbraňový pás",
    "nameEn": "Gun Belt",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "2 valouny zlata",
    "effect": "Váš limit karet v ruce na konci tahu je 8 karet (bez ohledu na počet životů).",
    "timing": "Fáze 3 vlastního tahu",
    "rulings": [
      "Umožňuje držet až 8 karet i s 1 životem."
    ],
    "tags": [
      "vybavení",
      "černá",
      "zbraňový pás",
      "kapacita ruky"
    ],
    "image": "assets/cards/03_zlata_horecka/gun-belt.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 2. Your hand card limit is fixed at 8 cards regardless of current life points.",
    "timingEn": "Phase 3 of own turn",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Umožňuje držet až 8 karet i s 1 life point(s)."
    ]
  },
  {
    "id": "equip-pickaxe",
    "name": "Krumpáč",
    "nameEn": "Pickaxe",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "black",
    "typeLabel": "Černé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "4 valouny zlata",
    "effect": "V 1. fázi svého tahu si dobíráte o 1 kartu z balíčku více.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Trvalý bonus +1 karta v každém tahu."
    ],
    "tags": [
      "vybavení",
      "černá",
      "krumpáč",
      "dobírání"
    ],
    "image": "assets/cards/03_zlata_horecka/pickaxe.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Black Equipment",
    "effectEn": "Black equipment. Cost 4. During Phase 1, draw 1 additional card from the deck.",
    "timingEn": "Phase 1 of turn",
    "costEn": "4 Gold Nuggets",
    "rulingsEn": [
      "Trvalý bonus +1 karta v každém tahu."
    ]
  },
  {
    "id": "equip-bottle",
    "name": "Láhev",
    "nameEn": "Bottle",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Dle zvoleného efektu",
    "cost": "2 valouny zlata",
    "effect": "Po zakoupení ihned proveďte efekt jedné z karet: Panika!, Pivo nebo BANG!. Poté kartu položte lícem nahoru dospod balíčku vybavení.",
    "timing": "Při nákupu ve Fázi 2",
    "rulings": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt Láhve).",
      "Nespouští schopnost Madam Yto (nejde o skutečnou kartu Pivo)."
    ],
    "tags": [
      "vybavení",
      "hnědá",
      "láhev",
      "flexibilita"
    ],
    "image": "assets/cards/03_zlata_horecka/bottle.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 2. May be discarded to act as Beer, Panic!, or BANG!.",
    "timingEn": "Upon purchase in Phase 2",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Nepočítá se do limitu 1 BANG! za tah (je to efekt Láhve).",
      "Nespouští schopnost Madam Yto (nejde o skutečnou Beer card)."
    ]
  },
  {
    "id": "equip-pardner",
    "name": "Komplic",
    "nameEn": "Pardner",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědé vybavení (Zlatá horečka)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Dle zvoleného efektu",
    "cost": "2 valouny zlata",
    "effect": "Po zakoupení ihned proveďte efekt jedné z karet: Hokynářství, Duel nebo Cat Balou. Poté kartu odložte dospod balíčku vybavení.",
    "timing": "Při nákupu ve Fázi 2",
    "rulings": [
      "Nepovažuje se za zahrání Duelu ani Cat Balou."
    ],
    "tags": [
      "vybavení",
      "hnědá",
      "komplic",
      "cat balou",
      "duel"
    ],
    "image": "assets/cards/03_zlata_horecka/pardner.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 2. Discard to act as Cat Balou, Duel, or General Store.",
    "timingEn": "Upon purchase in Phase 2",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Nepovažuje se za zahrání Duelu ani Cat Balou."
    ]
  },
  {
    "id": "equip-rhum",
    "name": "Rum",
    "nameEn": "Rhum",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědá karta vybavení",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "3 valouny zlata",
    "effect": "Sejměte 4 karty z balíčku a vyléčte si 1 život za každou odlišnou karetní barvu (srdce ♥, káry ♦, piky ♠, kříže ♣). Až 4 životy zpět!",
    "timing": "Při nákupu ve Fázi 2",
    "rulings": [
      "Všechny sejmuté karty se odhodí.",
      "Lucky Duke snímá 5 karet a vybere 4. S Podkovou dokonce 6 a vybere 4!"
    ],
    "tags": [
      "vybavení",
      "hnědá",
      "rum",
      "masivní léčení",
      "sejmutí"
    ],
    "image": "assets/cards/03_zlata_horecka/rhum.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 2. Discard and draw 4 cards (check): regain 1 life point for each Heart ♥.",
    "timingEn": "Upon purchase in Phase 2",
    "costEn": "3 Gold Nuggets",
    "rulingsEn": [
      "Všechny sejmuté karty se odhodí.",
      "Lucky Duke snímá 5 karet a vybere 4. S Podkovou dokonce 6 a vybere 4!"
    ]
  },
  {
    "id": "equip-wanted",
    "name": "Wanted (Hledá se)",
    "nameEn": "Wanted",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědá karta vybavení",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Libovolný hráč",
    "cost": "2 valouny zlata",
    "effect": "Vyložte před libovolného hráče. Kdo tohoto hráče vyřadí ze hry, dobere si 2 karty z balíčku a získá 1 valoun zlata (navíc k běžné odměně).",
    "timing": "Při nákupu; vyloží se před hráče",
    "rulings": [
      "Zabití Bandity s kartou Wanted = 3 + 2 = 5 karet a 1 valoun zlata!",
      "Pokud Šerif zabije Pomocníka (Vice) s kartou Wanted, lízne si 2 karty a vezme valoun dříve, než odhodí všechny karty."
    ],
    "tags": [
      "vybavení",
      "hledá se",
      "odměna",
      "vražda"
    ],
    "image": "assets/cards/03_zlata_horecka/wanted.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 2. Place in front of any player. Whoever eliminates them draws 2 cards and takes 1 Gold Nugget.",
    "timingEn": "Upon purchase; placed in front of player",
    "costEn": "2 Gold Nuggets",
    "rulingsEn": [
      "Zabití Outlaw s kartou Wanted = 3 + 2 = 5 karet a 1 Gold Nugget(s)!",
      "Pokud Sheriff zabije Deputy s kartou Wanted, lízne si 2 karty a vezme valoun dříve, než odhodí všechny karty."
    ]
  },
  {
    "id": "equip-union-pacific",
    "name": "Unie (Union Pacific)",
    "nameEn": "Union Pacific",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědá karta vybavení",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "4 valouny zlata",
    "effect": "Ihned si doberte 4 karty z vršku dobíracího balíčku.",
    "timing": "Při nákupu ve Fázi 2",
    "rulings": [
      "Položí se dospod balíčku vybavení."
    ],
    "tags": [
      "vybavení",
      "dobírání",
      "4 karty",
      "unie"
    ],
    "image": "assets/cards/03_zlata_horecka/union-pacific.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 4. Draw 4 cards from the draw deck.",
    "timingEn": "Upon purchase in Phase 2",
    "costEn": "4 Gold Nuggets",
    "rulingsEn": [
      "Položí se dospod balíčku vybavení."
    ]
  },
  {
    "id": "equip-gold-rush",
    "name": "Zlatá horečka",
    "nameEn": "Gold Rush",
    "expansion": "gold-rush",
    "expansionName": "Zlatá horečka",
    "type": "brown-equipment",
    "typeLabel": "Hnědá karta vybavení",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "5 valounů zlata",
    "effect": "Váš tah okamžitě končí. Doplňte si všechny životy na maximum a poté odehrajte ještě jeden celý tah!",
    "timing": "Při nákupu ve Fázi 2",
    "rulings": [
      "Konec stávajícího tahu přeskočí odhazování karet (nemusíte odhazovat přebytečné karty!).",
      "Okamžitě začíná váš nový kompletní tah s plnými životy!"
    ],
    "tags": [
      "vybavení",
      "zlatá horečka",
      "plné zdraví",
      "extra tah",
      "nejsilnější"
    ],
    "image": "assets/cards/03_zlata_horecka/gold-rush-equipment.webp",
    "expansionNameEn": "Gold Rush",
    "typeLabelEn": "Brown Equipment",
    "effectEn": "Brown equipment. Cost 5. Ends your turn and immediately starts a new turn for you with full life points restored!",
    "timingEn": "Upon purchase in Phase 2",
    "costEn": "5 Gold Nuggets",
    "rulingsEn": [
      "Konec stávajícího tahu přeskočí odhazování karet (nemusíte odhazovat přebytečné karty!).",
      "Okamžitě začíná váš nový kompletní tah s plnými life point(s)!"
    ]
  },
  {
    "id": "char-al-preacher",
    "name": "Al Preacher",
    "nameEn": "Al Preacher",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "2 žetony nabití",
    "effect": "Kdykoli kdokoli zahraje modrou nebo oranžovou kartu, můžete utratit 2 žetony nabití a dobrat si 1 kartu z balíčku.",
    "timing": "Kdykoli (i mimo svůj tah)",
    "rulings": [
      "Lze aktivovat i mimo tah, žetony mohou pocházet z postavy i karet.",
      "Musí se aktivovat dříve, než je zahrána další karta."
    ],
    "tags": [
      "postava",
      "žetony nabití",
      "reakce",
      "dobírání"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/al-preacher.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "When another player plays a blue or orange card, may pay 2 load tokens to draw 1 card from deck.",
    "timingEn": "Anytime (including out of turn)",
    "costEn": "2 load tokens",
    "rulingsEn": [
      "Lze aktivovat i mimo tah, žetony mohou pocházet z postavy i karet.",
      "Musí se aktivovat dříve, než je zahrána další karta."
    ]
  },
  {
    "id": "char-bass-greeves",
    "name": "Bass Greeves",
    "nameEn": "Bass Greeves",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození 1 karty z ruky",
    "effect": "Během svého tahu můžete odhodit kartu z ruky a přidat 2 žetony nabití na libovolnou 1 svou Nebezpečnou kartu nebo na svou postavu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Oba žetony musí jít na stejné místo (ne 1 a 1). Max 4 žetony na kartě."
    ],
    "tags": [
      "postava",
      "nabíjení",
      "žetony nabití"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/bass-greeves.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "May discard 1 card from hand to place 2 load tokens on one of his cards.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 card from hand",
    "rulingsEn": [
      "Oba žetony musí jít na stejné místo (ne 1 a 1). Max 4 žetony na kartě."
    ]
  },
  {
    "id": "char-bloody-mary",
    "name": "Bloody Mary",
    "nameEn": "Bloody Mary",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je vámi zahraná karta BANG! zrušena (kartou Vedle!, Barelem apod.), doberte si 1 kartu z balíčku.",
    "timing": "Při zrušení karty BANG!",
    "rulings": [
      "Funguje pouze na skutečné karty BANG! (ne na Kulomet, Křesadlovku, Rychlopalbu).",
      "Zajišťuje stálý přísun karet i při neúspěšné střelbě."
    ],
    "tags": [
      "postava",
      "bang",
      "zrušení útoku",
      "dobírání"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/bloody-mary.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "Whenever her BANG! is canceled by Missed!, she immediately draws 1 card from the deck.",
    "timingEn": "When a BANG! card is canceled",
    "costEn": null,
    "rulingsEn": [
      "Funguje pouze na skutečné BANG! card (ne na Kulomet, Křesadlovku, Rychlopalbu).",
      "Zajišťuje stálý přísun karet i při neúspěšné střelbě."
    ]
  },
  {
    "id": "char-frankie-canton",
    "name": "Frankie Canton",
    "nameEn": "Frankie Canton",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Libovolná karta či postava",
    "cost": null,
    "effect": "Během svého tahu můžete vzít 1 žeton nabití z libovolné karty ve hře nebo z postavy a umístit ho na svou postavu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Může krást žetony ze soupeřových karet i postavy.",
      "Pokud vezme poslední žeton z Nebezpečné karty soupeře, karta je vyčerpána a odhodí se!"
    ],
    "tags": [
      "postava",
      "krádež žetonů",
      "sabotáž",
      "nabíjení"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/frankie-canton.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may take 1 load token from any card in play and put it on his character.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Může krást žetony ze soupeřových karet i postavy.",
      "Pokud vezme poslední žeton z Nebezpečné karty soupeře, karta je vyčerpána a odhodí se!"
    ]
  },
  {
    "id": "char-julie-cutter",
    "name": "Julie Cutter",
    "nameEn": "Julie Cutter",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Útočník (bez ohledu na vzdálenost)",
    "cost": null,
    "effect": "Kdykoli vám jiný hráč způsobí ztrátu alespoň 1 života, sejměte: srdce (♥) nebo káry (♦) = útočník se stává cílem efektu BANG! bez ohledu na vzdálenost.",
    "timing": "Při zranění hráčem",
    "rulings": [
      "I při ztrátě více životů spustí pouze 1 BANG!.",
      "Útočník se může bránit standardně (Vedle!, Barel)."
    ],
    "tags": [
      "postava",
      "odveta",
      "sejmutí",
      "zranění"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/julie-cutter.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "Whenever a player causes her to lose a life point, she draws (check): on Hearts/Diamonds, that player loses 1 life point.",
    "timingEn": "When damaged by a player",
    "costEn": null,
    "rulingsEn": [
      "I při ztrátě více life point(s) spustí pouze 1 BANG!.",
      "Útočník se může bránit standardně (Vedle!, Barel)."
    ]
  },
  {
    "id": "char-mexicali-kid",
    "name": "Mexicali Kid",
    "nameEn": "Mexicali Kid",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": "2 žetony nabití",
    "effect": "Ve svém tahu můžete utratit 2 žetony nabití a provést dodatečný efekt BANG! na dostřel zbraně.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nepotřebuje kartu z ruky a nepočítá se do limitu 1 BANG! za tah.",
      "Nespouští zvláštní efekty Nebezpečných zbraní."
    ],
    "tags": [
      "postava",
      "žetony nabití",
      "extra výstřel",
      "efekt bang"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/mexicali-kid.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may pay 2 load tokens to fire a BANG! (does not count toward the 1 BANG! limit).",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 load tokens",
    "rulingsEn": [
      "Nepotřebuje kartu z ruky a nepočítá se do limitu 1 BANG! za tah.",
      "Nespouští zvláštní efekty Nebezpečných zbraní."
    ]
  },
  {
    "id": "char-ms-abigail",
    "name": "Ms. Abigail",
    "nameEn": "Ms. Abigail",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Hnědé karty s hodnotami J, Q, K a A zahrané na vás jinými hráči nemají žádný efekt, pokud cílí pouze na vás.",
    "timing": "Trvalá pasivní imunita",
    "rulings": [
      "Imunní proti kartám BANG!, Panika!, Cat Balou s hodnotou figur a es.",
      "NEFUNGUJE proti plošným kartám (Indiáni!, Kulomet)."
    ],
    "tags": [
      "postava",
      "imunita",
      "figury",
      "esa",
      "obrana"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/ms-abigail.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "Ignores brown cards with values J, Q, K, A played against her if she is the sole target.",
    "timingEn": "Permanent passive immunity",
    "costEn": null,
    "rulingsEn": [
      "Imunní proti BANG! card, Panika!, Cat Balou s hodnotou figur a es.",
      "NEFUNGUJE proti plošným kartám (Indiáni!, Kulomet)."
    ]
  },
  {
    "id": "char-red-ringo",
    "name": "Red Ringo",
    "nameEn": "Red Ringo",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Začíná hru se 4 žetony nabití na své kartě postavy. Jednou během svého tahu může přemístit až 2 žetony ze své postavy na své karty.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Může dát oba žetony na 1 kartu nebo po 1 na dvě různé karty.",
      "Nemůže přemisťovat žetony z karet zpět na postavu."
    ],
    "tags": [
      "postava",
      "zásoba žetonů",
      "nabíjení karet"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/red-ringo.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Character",
    "effectEn": "May place up to 4 load tokens on his character card at game start.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Může dát oba žetony na 1 kartu nebo po 1 na dvě různé karty.",
      "Nemůže přemisťovat žetony z karet zpět na postavu."
    ]
  },
  {
    "id": "weapon-double-barrel",
    "name": "Dvouhlavňovka",
    "nameEn": "Double Barrel",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová zbraň (Nebezpečná)",
    "copies": 1,
    "suit": "♠",
    "values": "K",
    "range": "Dostřel 1",
    "cost": "1 žeton nabití při výstřelu",
    "effect": "Dostřel 1. Vykládá se se 3 žetony nabití. Při zahrání kárové karty BANG! (♦) můžete zaplatit 1 žeton nabití: tento BANG! nelze nijak zrušit (ani Barelem!).",
    "timing": "Při zahrání karty BANG!",
    "rulings": [
      "Platí pouze pro skutečnou károvou kartu BANG!.",
      "Nelze zrušit kartou Vedle!, Barelem ani Bednou."
    ],
    "tags": [
      "oranžová",
      "zbraň",
      "dvouhlavňovka",
      "nezrušitelný bang"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/double-barrel.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange weapon. Range 1. Loaded with 3 tokens. Pay 1 token on BANG!: target must play 2 Missed! to cancel.",
    "timingEn": "When playing a BANG! card",
    "costEn": "1 load token when firing",
    "rulingsEn": [
      "Platí pouze pro skutečnou károvou BANG! card.",
      "Nelze zrušit Missed! card, Barelem ani Bednou."
    ]
  },
  {
    "id": "weapon-buntline-special-ad",
    "name": "Buntline Special (A&D)",
    "nameEn": "Buntline Special",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová zbraň (Nebezpečná)",
    "copies": 1,
    "suit": "♠",
    "values": "Q",
    "range": "Dostřel 2",
    "cost": "1 žeton nabití při výstřelu",
    "effect": "Dostřel 2. Vykládá se se 3 žetony nabití. Pokud je vámi zahraný BANG! zrušen, můžete zaplatit 1 žeton: cíl musí odhodit 1 kartu z ruky dle své volby.",
    "timing": "Při zrušení karty BANG!",
    "rulings": [
      "Trest pro soupeře i v případě, že se úspěšně ubrání."
    ],
    "tags": [
      "oranžová",
      "zbraň",
      "buntline special",
      "odhození karty"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/buntline-special.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange weapon. Range 2. Loaded with 3 tokens. Pay 1 token on BANG!: if target cancels with Missed!, they must discard 1 card.",
    "timingEn": "When a BANG! card is canceled",
    "costEn": "1 load token when firing",
    "rulingsEn": [
      "Trest pro soupeře i v případě, že se úspěšně ubrání."
    ]
  },
  {
    "id": "weapon-thunderer",
    "name": "Thunderer",
    "nameEn": "Thunderer",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová zbraň (Nebezpečná)",
    "copies": 1,
    "suit": "♠",
    "values": "8",
    "range": "Dostřel 3",
    "cost": "1 žeton nabití při výstřelu",
    "effect": "Dostřel 3. Vykládá se se 3 žetony nabití. Při zahrání BANG! můžete zaplatit 1 žeton: vezměte si zahranou kartu BANG! zpět do ruky (ještě před reakcí cíle).",
    "timing": "Při zahrání karty BANG! (před reakcí)",
    "rulings": [
      "BANG! se vrací do ruky okamžitě. Cíl se stále musí bránit!",
      "Umožňuje ušetřit karty BANG!."
    ],
    "tags": [
      "oranžová",
      "zbraň",
      "thunderer",
      "recyklace bang"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/thunderer.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange weapon. Range 3. Loaded with 3 tokens. Pay 1 token on BANG!: target cannot play Missed!.",
    "timingEn": "When playing a BANG! card (before response)",
    "costEn": "1 load token when firing",
    "rulingsEn": [
      "BANG! se vrací do ruky okamžitě. Cíl se stále musí bránit!",
      "Umožňuje ušetřit BANG! card."
    ]
  },
  {
    "id": "weapon-big-fifty",
    "name": "Big Fifty",
    "nameEn": "Big Fifty",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová zbraň (Nebezpečná)",
    "copies": 1,
    "suit": "♠",
    "values": "10",
    "range": "Dostřel 6",
    "cost": "1 žeton nabití při výstřelu",
    "effect": "Dostřel 6. Vykládá se se 3 žetony nabití. Při výstřelu BANG! zaplaťte 1 žeton: ruší schopnosti karet jako Mustang, Barel a schopnosti postav (Julie Cutter apod.).",
    "timing": "Při výstřelu BANG!",
    "rulings": [
      "Dosáhne na kteréhokoli hráče u stolu.",
      "Cíl nemůže použít Barel ani pasivní obrany."
    ],
    "tags": [
      "oranžová",
      "zbraň",
      "big fifty",
      "dostřel 6",
      "ruší barel"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/big-fifty.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange weapon. Range 6. Loaded with 3 tokens. Pay 1 token on BANG!: target's character ability and cards in play are ignored.",
    "timingEn": "When firing a BANG!",
    "costEn": "1 load token when firing",
    "rulingsEn": [
      "Can reach any player at the table.",
      "Cíl nemůže použít Barel ani pasivní obrany."
    ]
  },
  {
    "id": "card-bomb",
    "name": "Bomba",
    "nameEn": "Bomb",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová karta (Nebezpečná)",
    "copies": 1,
    "suit": "♣",
    "values": "A",
    "range": "Libovolný hráč",
    "cost": "3 žetony nabití při vyložení",
    "effect": "Vyložte před libovolného hráče se 3 žetony nabití. Na začátku tahu uvězněný hráč sejme: ♥ nebo ♦ = předejte Bombu jinému hráči dle volby. ♣ nebo ♠ = odstraňte 2 žetony z Bomby. Pokud žetony dojdou, Bomba exploduje za 2 životy!",
    "timing": "Před Fází 1 tahu (po Dynamitu a Vězení)",
    "rulings": [
      "Vyhodnocuje se jako poslední (Dynamit -> Vězení -> Bomba).",
      "Pokud žetony dojdou kvůli kartě Rez, Bomba okamžitě exploduje!",
      "Při odstranění kartami Panika! nebo Cat Balou neexploduje."
    ],
    "tags": [
      "oranžová",
      "vybavení",
      "bomba",
      "časovaná exploze",
      "2 životy"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/bomb.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange card. Loaded with 3 tokens. In Phase 0 draw (check): on Hearts/Diamonds passes left; on Clubs/Spades lose 2 tokens (explodes for 2 lives at 0).",
    "timingEn": "Before Phase 1 of turn (after Dynamite & Jail)",
    "costEn": "3 load tokens when entering play",
    "rulingsEn": [
      "Vyhodnocuje se jako poslední (Dynamit -> Vězení -> Bomba).",
      "Pokud žetony dojdou kvůli kartě Rez, Bomba okamžitě exploduje!",
      "Při odstranění Panic! card nebo Cat Balou neexploduje."
    ]
  },
  {
    "id": "card-whip",
    "name": "Bič",
    "nameEn": "Whip",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová karta (Nebezpečná)",
    "copies": 1,
    "suit": "♣",
    "values": "8",
    "range": "Libovolná vzdálenost",
    "cost": "Zaplať 2 žetony nabití",
    "effect": "Vyložte se 3 žetony. Za zaplacení 2 žetonů nabití z karty: odhoďte libovolnou kartu ve hře před jakýmkoli hráčem bez ohledu na vzdálenost.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Cílí pouze na karty ve hře (na stole), nikoli do ruky."
    ],
    "tags": [
      "oranžová",
      "vybavení",
      "bič",
      "odhození karty ze stolu"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/whip.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange card. Loaded with 3 tokens. Pay 1 token on your turn: force any player to discard 1 card in play.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Pay 2 load tokens",
    "rulingsEn": [
      "Cílí pouze na karty ve hře (na stole), nikoli do ruky."
    ]
  },
  {
    "id": "card-crate",
    "name": "Bedna",
    "nameEn": "Crate",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová karta (Nebezpečná)",
    "copies": 1,
    "suit": "♣",
    "values": "9",
    "range": null,
    "cost": "Zaplať 2 žetony nabití",
    "effect": "Vyložte se 3 žetony. Utracením 2 žetonů z Bedny získáte okamžitý efekt karty Vedle!.",
    "timing": "Mimo tah (v reakci na útok)",
    "rulings": [
      "Lze použít mimo tah jako připravené Vedle!.",
      "Pokud máte i Barel, sami si volíte pořadí použití."
    ],
    "tags": [
      "oranžová",
      "vybavení",
      "bedna",
      "vedle",
      "obrana"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/crate.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange card. Loaded with 3 tokens. Pay 2 tokens when targeted by BANG!: acts as Missed!.",
    "timingEn": "Out of turn (in response to attack)",
    "costEn": "Pay 2 load tokens",
    "rulingsEn": [
      "Lze použít mimo tah jako připravené Vedle!.",
      "Pokud máte i Barel, sami si volíte pořadí použití."
    ]
  },
  {
    "id": "card-bandolier",
    "name": "Bandalír",
    "nameEn": "Bandolier",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová karta (Nebezpečná)",
    "copies": 1,
    "suit": "♣",
    "values": "Q",
    "range": null,
    "cost": "Zaplať 2 žetony nabití",
    "effect": "Vyložte se 3 žetony. Utracením 2 žetonů můžete v tomto tahu zahrát 1 další kartu BANG! navíc.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Zahrání se řídí běžnými pravidly dostřelu a může spustit efekt Nebezpečné zbraně."
    ],
    "tags": [
      "oranžová",
      "vybavení",
      "bandalír",
      "extra bang"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/bandolier.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange card. Loaded with 3 tokens. Pay 1 token: play an additional BANG! card this turn.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Pay 2 load tokens",
    "rulingsEn": [
      "Zahrání se řídí běžnými pravidly dostřelu a může spustit efekt Nebezpečné zbraně."
    ]
  },
  {
    "id": "card-bell-tower",
    "name": "Zvonice",
    "nameEn": "Bell Tower",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "orange",
    "typeLabel": "Oranžová karta (Nebezpečná)",
    "copies": 1,
    "suit": "♣",
    "values": "K",
    "range": null,
    "cost": "Zaplať 1 žeton nabití",
    "effect": "Vyložte se 3 žetony. Za zaplacení 1 žetonu: pro následující zahranou kartu vidíte všechny ostatní hráče ve vzdálenosti 1.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Lze aktivovat i vícekrát během tahu (pokaždé za 1 žeton).",
      "Ruší účinek Mustanga pro následující kartu."
    ],
    "tags": [
      "oranžová",
      "vybavení",
      "zvonice",
      "vzdálenost 1"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/bell-tower.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Dangerous Card (Orange)",
    "effectEn": "Orange card. Loaded with 3 tokens. Pay 1 token: you see all players at distance 1 for your next card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Pay 1 load token",
    "rulingsEn": [
      "Lze aktivovat i vícekrát během tahu (pokaždé za 1 žeton).",
      "Ruší účinek Mustanga pro následující kartu."
    ]
  },
  {
    "id": "card-a-little-nip",
    "name": "Malý doušek",
    "nameEn": "A Little Nip",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (vylepšitelná)",
    "copies": 1,
    "suit": "♥",
    "values": "5",
    "range": null,
    "cost": "3 žetony za každé vylepšení",
    "effect": "Vyléčí 1 život. Vylepšení: Za každé 3 žetony nabití zaplacené při zahrání si vyléčíte 1 další život.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Žetony mohou pocházet z postavy i z nebezpečných karet.",
      "Nelze zahrát mimo vlastní tah k záchraně života (není to Pivo)."
    ],
    "tags": [
      "hnědá",
      "vylepšitelná",
      "léčení",
      "žetony nabití"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/a-little-nip.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Regain 1 life point. Boost: pay 1 token to regain 2 life points.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "3 load tokens per upgrade",
    "rulingsEn": [
      "Žetony mohou pocházet z postavy i z nebezpečných karet.",
      "Nelze zahrát mimo vlastní tah k záchraně life point(s) (není to Pivo)."
    ]
  },
  {
    "id": "card-beer-keg",
    "name": "Bečka piva",
    "nameEn": "Beer Keg",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (vylepšitelná)",
    "copies": 1,
    "suit": "♥",
    "values": "6",
    "range": null,
    "cost": "2 žetony nabití",
    "effect": "Vyléčí 1 život. Vylepšení: Za zaplacení 2 žetonů nabití si vyléčíte 2 životy.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nelze zahrát mimo svůj tah k odvrácení smrti."
    ],
    "tags": [
      "hnědá",
      "vylepšitelná",
      "bečka piva",
      "léčení"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/beer-keg.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Regain 1 life point. Boost: pay 2 tokens to regain 2 life points.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 load tokens",
    "rulingsEn": [
      "Nelze zahrát mimo svůj tah k odvrácení smrti."
    ]
  },
  {
    "id": "card-arrow",
    "name": "Šíp",
    "nameEn": "Arrow",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (vylepšitelná)",
    "copies": 1,
    "suit": "♦",
    "values": "A",
    "range": "Libovolný hráč",
    "cost": "2 žetony nabití za další cíl",
    "effect": "Cílový hráč musí odhodit z ruky kartu BANG! nebo ztratí 1 život. Vylepšení: Za každé 2 žetony nabití zasáhněte 1 dalšího odlišného hráče.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Cíl se nemůže bránit kartami jako Křesadlovka či Kulomet, musí mít skutečný BANG!."
    ],
    "tags": [
      "hnědá",
      "vylepšitelná",
      "šíp",
      "odhoď bang"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/arrow.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Shoot an arrow at any player (BANG!). Boost: pay 1 token to make it uncancelable.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 load tokens per additional target",
    "rulingsEn": [
      "Cíl se nemůže bránit kartami jako Křesadlovka či Kulomet, musí mít skutečný BANG!."
    ]
  },
  {
    "id": "card-quick-shot",
    "name": "Rychlopalba",
    "nameEn": "Quick Shot",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (vylepšitelná)",
    "copies": 1,
    "suit": "♠",
    "values": "7",
    "range": "Dle zbraně",
    "cost": "2 žetony za další cíl",
    "effect": "Efekt BANG! na hráče na dostřel. Nepočítá se do limitu 1 BANG! za tah. Vylepšení: Za každé 2 žetony nabití zasáhněte dalšího hráče na dostřel.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Všechny cíle musí být odlišné a v dostřelu zbraně.",
      "Nespouští schopnost Nebezpečné zbraně."
    ],
    "tags": [
      "hnědá",
      "vylepšitelná",
      "rychlopalba",
      "extra výstřel"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/quick-shot.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Shoot a BANG!. Boost: pay 1 token to immediately draw 1 card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 load tokens per additional target",
    "rulingsEn": [
      "Všechny cíle musí být odlišné a v dostřelu zbraně.",
      "Nespouští schopnost Nebezpečné zbraně."
    ]
  },
  {
    "id": "card-flintlock",
    "name": "Křesadlovka",
    "nameEn": "Flintlock",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (vylepšitelná)",
    "copies": 1,
    "suit": "♥",
    "values": "Q",
    "range": "Dle zbraně",
    "cost": "2 žetony pro vrácení do ruky",
    "effect": "Efekt BANG! na dostřel zbraně. Nepočítá se do limitu 1 BANG!. Vylepšení: Pokud je výstřel jakkoli zrušen, můžete zaplatit 2 žetony nabití a vzít si Křesadlovku zpět do ruky (a zahrát ji znovu!).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Skvělé kombo na vyčerpání obranných karet soupeře."
    ],
    "tags": [
      "hnědá",
      "vylepšitelná",
      "křesadlovka",
      "opakovaný útok"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/flintlock.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Shoot a BANG!. Boost: pay 2 tokens, target must play 2 Missed!.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "2 load tokens to return to hand",
    "rulingsEn": [
      "Skvělé kombo na vyčerpání obranných karet soupeře."
    ]
  },
  {
    "id": "card-tumbleweed",
    "name": "Stepní běžec",
    "nameEn": "Tumbleweed",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♣",
    "values": "7",
    "range": null,
    "cost": "1 žeton za další opakování",
    "effect": "Právě dokončené sejmutí se musí zopakovat a předchozí výsledek neplatí. Lze použít na libovolné sejmutí u stolu (i své) a lze hrát i mimo svůj tah!",
    "timing": "Okamžitě po libovolném sejmutí",
    "rulings": [
      "Může zvrátit výbuch Dynamitu, útěk z Vězení, záchranu Barelem i výsledek u Bomby.",
      "Lze opakovat i vícekrát za sebou, pokud pokaždé zaplatíte 1 žeton nabití."
    ],
    "tags": [
      "hnědá",
      "sejmutí",
      "stepní běžec",
      "opakování sejmutí",
      "reakce"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/tumbleweed.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Play immediately after any draw (check) to cancel it and force a redraw.",
    "timingEn": "Immediately after any draw check",
    "costEn": "1 load token per repetition",
    "rulingsEn": [
      "Může zvrátit výbuch Dynamitu, útěk z Vězení, záchranu Barelem i výsledek u Bomby.",
      "Lze opakovat i vícekrát za sebou, pokud pokaždé zaplatíte 1 load token(s)."
    ]
  },
  {
    "id": "card-rust",
    "name": "Rez",
    "nameEn": "Rust",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "A",
    "range": "Všichni ostatní hráči",
    "cost": null,
    "effect": "Každý jiný hráč musí odstranit po 1 žetonu nabití ze všech svých Nebezpečných karet i z postavy. Všechny tyto odstraněné žetony si dejte na svou postavu (až do maxima 4).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Pokud tímto způsobem dojdou žetony na kartě Bomba, Bomba okamžitě exploduje!",
      "Pokud z Nebezpečné karty zmizí poslední žeton, karta je vyřazena."
    ],
    "tags": [
      "hnědá",
      "sabotáž",
      "rez",
      "krádež žetonů"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/rust.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Remove 1 load token from each card of all other players.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Pokud tímto způsobem dojdou žetony na Bomb card, Bomba okamžitě exploduje!",
      "Pokud z Nebezpečné karty zmizí poslední žeton, karta je vyřazena."
    ]
  },
  {
    "id": "card-reloading",
    "name": "Nabíjení",
    "nameEn": "Reloading",
    "expansion": "armed-dangerous",
    "expansionName": "Ozbrojení a nebezpeční",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♣",
    "values": "8",
    "range": null,
    "cost": null,
    "effect": "Vezměte si ze společné zásoby 3 žetony nabití a libovolně je rozmístěte na své Nebezpečné karty a/nebo na svou postavu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Na každé kartě i postavě smí ležet maximálně 4 žetony."
    ],
    "tags": [
      "hnědá",
      "nabíjení",
      "žetony nabití"
    ],
    "image": "assets/cards/04_ozbrojeni_a_nebezpecni/reloading.webp",
    "expansionNameEn": "Armed & Dangerous",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Place 3 load tokens on your character card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Na každé kartě i postavě smí ležet maximálně 4 žetony."
    ]
  },
  {
    "id": "char-benny-brawler",
    "name": "Benny Brawler",
    "nameEn": "Benny Brawler",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může si ve svém tahu vzít více než 1 kartu vagonu, pokud za každou z nich řádně zaplatí cenu stanice.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Posunout vlak zdarma smí pouze jednou za svůj tah.",
      "Umožňuje nakoupit celou vlakovou soupravu, pokud má dostatek karet na zaplacení."
    ],
    "tags": [
      "postava",
      "vlak",
      "nákup vagonů",
      "benny brawler"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/benny-brawler.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "May take a railcar from the station without paying the station cost if he pays 1 life point.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Posunout vlak zdarma smí pouze jednou za svůj tah.",
      "Umožňuje nakoupit celou vlakovou soupravu, pokud má dostatek karet na zaplacení."
    ]
  },
  {
    "id": "char-evan-babbit",
    "name": "Evan Babbit",
    "nameEn": "Evan Babbit",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Vzdálenost 1",
    "cost": "Odhození karty stejné barvy",
    "effect": "Kdykoli jste cílem karty BANG!, můžete odhodit kartu stejné barvy (♠, ♥, ♦, ♣) z ruky: novým cílem původního BANG! se stane hráč ve vzdálenosti 1 od vás.",
    "timing": "Mimo tah (v reakci na BANG!)",
    "rulings": [
      "BANG! se stále považuje za vystřelený původním střelcem (ne Evanem!).",
      "Nemůže přesměrovat výstřel zpět na střelce.",
      "Ve 2 hráčích tuto schopnost nelze použít."
    ],
    "tags": [
      "postava",
      "přesměrování",
      "bang",
      "obrana",
      "odveta"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/evan-babbit.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "Whenever targeted by BANG!, may redirect it to another player at distance 1 by discarding 1 card.",
    "timingEn": "Out of turn (in response to BANG!)",
    "costEn": "Discard card of the same suit",
    "rulingsEn": [
      "BANG! se stále považuje za vystřelený původním střelcem (ne Evanem!).",
      "Nemůže přesměrovat výstřel zpět na střelce.",
      "Ve 2 hráčích tuto schopnost nelze použít."
    ]
  },
  {
    "id": "char-jimmy-texas",
    "name": "Jimmy Texas",
    "nameEn": "Jimmy Texas",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Na konci svého tahu (po odhození přebytečných karet ve 3. fázi) si dobere 1 kartu z balíčku.",
    "timing": "Konec vlastního tahu (po Fázi 3)",
    "rulings": [
      "Tuto dobranou kartu už v tomto tahu nemůže zahrát.",
      "Tato schopnost funguje, I KDYŽ JE VE VĚZENÍ!"
    ],
    "tags": [
      "postava",
      "konec tahu",
      "dobírání",
      "funguje ve vězení"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/jimmy-texas.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "At the end of his turn, immediately draws 1 extra card from the deck.",
    "timingEn": "End of own turn (after Phase 3)",
    "costEn": null,
    "rulingsEn": [
      "Tuto dobranou kartu už v tomto tahu nemůže zahrát.",
      "Tato schopnost funguje, I KDYŽ JE VE VĚZENÍ!"
    ]
  },
  {
    "id": "char-manuelita",
    "name": "Manuelita",
    "nameEn": "Manuelita",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Jakmile lokomotiva dorazí na konečnou stanici, okamžitě si doberte 2 karty z balíčku (ještě před vyhodnocením efektu lokomotivy).",
    "timing": "Při příjezdu vlaku na konečnou",
    "rulings": [
      "Karty si líže kdykoli vlak dorazí na konečnou, bez ohledu na to, čí je to tah."
    ],
    "tags": [
      "postava",
      "konečná stanice",
      "dobírání",
      "vlak"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/manuelita.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "Sees all other players at distance -1 for each railcar in play in front of her.",
    "timingEn": "Upon train arrival at the end station",
    "costEn": null,
    "rulingsEn": [
      "Karty si líže kdykoli vlak dorazí na konečnou, bez ohledu na to, čí je to tah."
    ]
  },
  {
    "id": "char-sancho",
    "name": "Sancho",
    "nameEn": "Sancho",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Než si ve svém tahu vezme vagon z vlaku, může zdarma posunout vlak vpřed o 1 stanici.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Tento vagon se počítá do běžného limitu 1 vagon za tah."
    ],
    "tags": [
      "postava",
      "posun vlaku",
      "nákup vagonu",
      "sancho"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/sancho.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "Whenever a railcar in front of any player is discarded or upgraded, takes it into his hand.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Tento vagon se počítá do běžného limitu 1 vagon za tah."
    ]
  },
  {
    "id": "char-shade-oconnor",
    "name": "Shade O'Connor",
    "nameEn": "Shade O'Connor",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození 1 karty z ruky",
    "effect": "Kdykoli se vlak posune vpřed mimo váš tah, můžete odhodit 1 kartu z ruky a dobrat si 1 novou kartu z balíčku.",
    "timing": "Mimo tah (při každém posunu vlaku)",
    "rulings": [
      "Pokud vlak dorazí na konečnou, odhodí a dobere kartu ještě před vyhodnocením lokomotivy.",
      "Umožňuje vyměňovat slabé karty za nové při každém tahu soupeřů."
    ],
    "tags": [
      "postava",
      "výměna karet",
      "vlak",
      "reakce"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/shade-o-connor.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "May pay the station cost by discarding cards from hand or load tokens.",
    "timingEn": "Out of turn (each time train moves)",
    "costEn": "Discard 1 card from hand",
    "rulingsEn": [
      "Pokud vlak dorazí na konečnou, odhodí a dobere kartu ještě před vyhodnocením lokomotivy.",
      "Umožňuje vyměňovat slabé karty za nové při každém tahu soupeřů."
    ]
  },
  {
    "id": "char-sgt-blaze",
    "name": "Sgt. Blaze",
    "nameEn": "Sgt. Blaze",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Pokud zahrajete kartu nebo použijete efekt cílící na více hráčů, můžete 1 vybraného hráče z působnosti zcela vyjmout.",
    "timing": "Při použití plošného efektu",
    "rulings": [
      "U Hokynářství otočí o 1 kartu méně a vybraný hráč si nelíže.",
      "U Kulometu nebo Indiánů může ušetřit svého spojence!",
      "Funguje i na efekt lokomotivy, pokud dorazí na konečnou v jeho tahu."
    ],
    "tags": [
      "postava",
      "ochrana spojence",
      "plošné efekty",
      "sgt blaze"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/sgt-blaze.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "May shoot through other players: ignores distance modifiers for weapon range.",
    "timingEn": "When using an area-of-effect card",
    "costEn": null,
    "rulingsEn": [
      "U Hokynářství otočí o 1 kartu méně a vybraný hráč si nelíže.",
      "U Kulometu nebo Indiánů může ušetřit svého spojence!",
      "Funguje i na efekt lokomotivy, pokud dorazí na konečnou v jeho tahu."
    ]
  },
  {
    "id": "char-zippy-roy",
    "name": "Zippy Roy",
    "nameEn": "Zippy Roy",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Během svého tahu může posunout vlak o 1 stanici vpřed bez ohledu na to, zda si bere vagon.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nezískává díky této schopnosti žádné vagony přímo.",
      "Může tím přiblížit vlak ke konečné nebo změnit přiřazení vagonů ke stanicím."
    ],
    "tags": [
      "postava",
      "posun vlaku",
      "manipulace vlaku",
      "rychlík"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/zippy-roy.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Character",
    "effectEn": "May advance the train 1 extra station on his turn.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Nezískává díky této schopnosti žádné vagony přímo.",
      "Může tím přiblížit vlak ke konečné nebo změnit přiřazení vagonů ke stanicím."
    ]
  },
  {
    "id": "train-ironhorse",
    "name": "Železný oř (Ironhorse)",
    "nameEn": "Ironhorse",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Lokomotiva (oboustranná)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Na konečné: Každý hráč u stolu (včetně hráče, který efekt spustil) se stává terčem efektu BANG!. Zranění není způsobeno žádným hráčem. Pokud zemřou všichni, vítězí Bandité!",
    "timing": "Při příjezdu na konečnou stanici",
    "rulings": [
      "Každý hráč se brání samostatně (Vedle!, Barel).",
      "Opětovaná palba proti Ironhorse slouží pouze jako Vedle! (nelze palbu vrátit na vlak).",
      "Po vyhodnocení se lokomotiva otočí na stranu Leland."
    ],
    "tags": [
      "lokomotiva",
      "konečná",
      "plošný bang",
      "železný oř"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/ironhorse.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Locomotive. Advances with Sheriff. Reaching the end triggers a lethal BANG! against all living players.",
    "timingEn": "Upon arriving at the end station",
    "costEn": null,
    "rulingsEn": [
      "Každý hráč se brání samostatně (Vedle!, Barel).",
      "Opětovaná palba proti Ironhorse slouží pouze jako Vedle! (nelze palbu vrátit na vlak).",
      "Po vyhodnocení se lokomotiva otočí na stranu Leland."
    ]
  },
  {
    "id": "train-leland",
    "name": "Leland",
    "nameEn": "Leland",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Lokomotiva (oboustranná)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Na konečné: Vyhodnoťte okamžitý efekt karty Hokynářství (otočte tolik karet, kolik je hráčů, a každý si postupně 1 vezme do ruky).",
    "timing": "Při příjezdu na konečnou stanici",
    "rulings": [
      "Začíná hráč, v jehož tahu vlak dorazil na konečnou, po směru hodinových ručiček.",
      "Po vyhodnocení se lokomotiva otočí na stranu Ironhorse."
    ],
    "tags": [
      "lokomotiva",
      "konečná",
      "hokynářství",
      "leland"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/leland.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Locomotive. Advances with Sheriff. Provides station bonus cards to the current player.",
    "timingEn": "Upon arriving at the end station",
    "costEn": null,
    "rulingsEn": [
      "Začíná hráč, v jehož tahu vlak dorazil na konečnou, po směru hodinových ručiček.",
      "Po vyhodnocení se lokomotiva otočí na stranu Ironhorse."
    ]
  },
  {
    "id": "railcar-circus-wagon",
    "name": "Cirkusácký vagon",
    "nameEn": "Circus Wagon",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni ostatní hráči",
    "cost": "Cena stanice při nákupu",
    "effect": "Vyložte před sebe. Kdykoli ho můžete odhodit ze hry: všichni ostatní hráči musí odhodit 1 kartu, kterou mají před sebou ve hře.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Ostatní hráči odhazují karty postupně po směru hodinových ručiček."
    ],
    "tags": [
      "vagon",
      "plošné ničení",
      "cirkusácký vagon"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/circus-wagon.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. You see all other players at distance -1.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Ostatní hráči odhazují karty postupně po směru hodinových ručiček."
    ]
  },
  {
    "id": "railcar-express-car",
    "name": "Expresní vůz",
    "nameEn": "Express Car",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Cena stanice při nákupu",
    "effect": "Odhoďte tuto kartu ze hry: okamžitě získáte 1 celý dodatečný tah navíc!",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Po tomto dodatečném tahu nelze získat další tah navíc, i kdybyste zahráli další Expresní vůz."
    ],
    "tags": [
      "vagon",
      "extra tah",
      "expresní vůz"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/express-card.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. During Phase 1, draw 1 additional card from the deck.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Po tomto dodatečném tahu nelze získat další tah navíc, i kdybyste zahráli další Expresní vůz."
    ]
  },
  {
    "id": "railcar-lumber-flatcar",
    "name": "Plošinový vůz",
    "nameEn": "Lumber Flatcar",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Libovolný hráč",
    "cost": "Cena stanice při nákupu",
    "effect": "Zahrajte na libovolného hráče (včetně sebe). Dokud je karta ve hře, tento hráč vidí všechny ostatní hráče ve vzdálenosti o 1 větší.",
    "timing": "Při nákupu; vyloží se před hráče",
    "rulings": [
      "Opačný efekt než Hledí (zhoršuje zrak a dostřel daného hráče)."
    ],
    "tags": [
      "vagon",
      "vzdálenost",
      "plošinový vůz",
      "oslabení soupeře"
    ],
    "image": null,
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. Other players see you at distance +1.",
    "timingEn": "Upon purchase; placed in front of player",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Opačný efekt než Hledí (zhoršuje zrak a dostřel daného hráče)."
    ]
  },
  {
    "id": "railcar-lounge-car",
    "name": "Salonní vůz",
    "nameEn": "Lounge Car",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Cena stanice při nákupu",
    "effect": "Doberte si 2 vrchní karty vagonů přímo z balíčku vagonů a vyložte je před sebe. Nepočítají se do limitu 1 vagon za tah.",
    "timing": "Při nákupu",
    "rulings": [
      "Pokud je Šerif a dobere Vagon duchů, musí ho dát jinému hráči."
    ],
    "tags": [
      "vagon",
      "dobírání vagonů",
      "salonní vůz"
    ],
    "image": null,
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. On your turn, discard 1 card to regain 1 life point.",
    "timingEn": "Upon purchase",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Pokud je Sheriff a dobere Vagon duchů, musí ho dát jinému hráči."
    ]
  },
  {
    "id": "railcar-private-car",
    "name": "Soukromý vagon",
    "nameEn": "Private Car",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Cena stanice při nákupu",
    "effect": "Dokud nemáte v ruce žádné karty, nemůžete být cílem karet BANG!.",
    "timing": "Trvalý pasivní efekt ve hře před vámi",
    "rulings": [
      "Chrání pouze proti kartám BANG!.",
      "NECHRÁNÍ proti Kulometu, Revolveru s nožem ani schopnosti Evana Babbita."
    ],
    "tags": [
      "vagon",
      "ochrana",
      "prázdná ruka",
      "soukromý vagon"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/private-car.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. You cannot be targeted by BANG! from players at distance 1.",
    "timingEn": "Permanent passive effect in play in front of you",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Chrání pouze proti BANG! card.",
      "NECHRÁNÍ proti Kulometu, Revolveru s nožem ani schopnosti Evana Babbita."
    ]
  },
  {
    "id": "railcar-caboose",
    "name": "Služební vůz (Caboose)",
    "nameEn": "Caboose",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Cena stanice při nákupu",
    "effect": "Můžete odhodit jednu svou modrou kartu nebo kartu svého vagonu (kromě této): počítá se jako zahrání karty Vedle!.",
    "timing": "Mimo tah (v reakci na útok BANG!)",
    "rulings": [
      "Umožňuje obětovat vyložené karty na stole pro záchranu života."
    ],
    "tags": [
      "vagon",
      "obrana",
      "vedle",
      "služební vůz"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/caboose.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. When targeted by BANG!, draw (check): on Hearts ♥ cancel the shot.",
    "timingEn": "Out of turn (in response to BANG! attack)",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Umožňuje obětovat vyložené karty na stole pro záchranu life point(s)."
    ]
  },
  {
    "id": "railcar-ghost-car",
    "name": "Vagon duchů",
    "nameEn": "Ghost Car",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Libovolný hráč (kromě Šerifa)",
    "cost": "Cena stanice při nákupu",
    "effect": "Zahrajte na kohokoli kromě Šerifa (včetně sebe, i po vyřazení!). Pokud má být postava zabita, zůstává ve hře bez životů. Nemůže získat ani ztratit životy. Na konci tahu odhodí ruku, ale vyložené karty si ponechává. Ztráta tohoto vagonu = definitivní konec!",
    "timing": "Při nákupu",
    "rulings": [
      "Šerif nesmí mít Vagon duchů.",
      "Při definitivním vyřazení (ztrátě vagonu) se nepřiděluje žádná odměna za zabití a nespouští se Vulture Sam.",
      "Počítá se jako živý hráč pro vzdálenosti i podmínky vítězství."
    ],
    "tags": [
      "vagon",
      "nesmrtelnost",
      "duch",
      "vagon duchů",
      "kritická karta"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/ghost-car.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. Prevents lethal damage: when you would die, stay alive with 0 life points.",
    "timingEn": "Upon purchase",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Sheriff nesmí mít Vagon duchů.",
      "Při definitivním vyřazení (ztrátě vagonu) se nepřiděluje žádná odměna za zabití a nespouští se Vulture Sam.",
      "Počítá se jako živý hráč pro vzdálenosti i podmínky vítězství."
    ]
  },
  {
    "id": "railcar-sleeper-car",
    "name": "Spací vůz",
    "nameEn": "Sleeper Car",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "railcar",
    "typeLabel": "Vagon (karta ve hře)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Cena stanice při nákupu",
    "effect": "Odhoďte tuto kartu ze hry: můžete 1x ignorovat efekt nepřátelské akce, a to i proti kartě Indiáni!, během Duelu apod.",
    "timing": "Kdykoli v reakci",
    "rulings": [
      "Univerzální štít proti kartám, které běžné Vedle! nezastaví."
    ],
    "tags": [
      "vagon",
      "absolutní obrana",
      "indiáni",
      "duel",
      "spací vůz"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/sleeper-car.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Railcar",
    "effectEn": "Railcar. Immune to Jail cards.",
    "timingEn": "Anytime in response",
    "costEn": "Station cost upon purchase",
    "rulingsEn": [
      "Univerzální štít proti kartám, které běžné Vedle! nezastaví."
    ]
  },
  {
    "id": "station-boom-town",
    "name": "Stanice Boom Town",
    "nameEn": "Boom Town",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď kartu BANG!",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte z ruky nebo ze hry 1 kartu BANG!.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Musí jít o skutečnou kartu BANG! (nebo Vedle! u Calamity Janet)."
    ],
    "tags": [
      "stanice",
      "cena",
      "odhoď bang"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/boom-town.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a BANG! card",
    "rulingsEn": [
      "Musí jít o skutečnou BANG! card (nebo Vedle! u Calamity Janet)."
    ]
  },
  {
    "id": "station-dodgeville",
    "name": "Stanice Dodgeville",
    "nameEn": "Dodgeville",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď kartu Vedle!",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte z ruky nebo ze hry 1 kartu Vedle!.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Nelze nahradit Kaktusem ani Barelem."
    ],
    "tags": [
      "stanice",
      "cena",
      "odhoď vedle"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/dodgeville.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 2 cards. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Missed! card",
    "rulingsEn": [
      "Nelze nahradit Kaktusem ani Barelem."
    ]
  },
  {
    "id": "station-silverado",
    "name": "Stanice Silverado",
    "nameEn": "Silverado",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď kartu Pivo",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte z ruky nebo ze hry 1 kartu Pivo.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Lze využít i ve 2 hráčích k nákupu vagonu."
    ],
    "tags": [
      "stanice",
      "cena",
      "odhoď pivo"
    ],
    "image": null,
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 Diamond ♦ card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Beer card",
    "rulingsEn": [
      "Lze využít i ve 2 hráčích k nákupu vagonu."
    ]
  },
  {
    "id": "station-callico",
    "name": "Stanice Callico",
    "nameEn": "Callico",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď Panika! nebo Cat Balou",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte 1 kartu Panika! nebo Cat Balou.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Karta může být z ruky nebo ze hry."
    ],
    "tags": [
      "stanice",
      "cena",
      "panika",
      "cat balou"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/catico.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 Heart ♥ card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard Panic! or Cat Balou",
    "rulingsEn": [
      "Karta může být z ruky nebo ze hry."
    ]
  },
  {
    "id": "station-deathwood",
    "name": "Stanice Deathwood",
    "nameEn": "Deathwood",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď modrou kartu",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte 1 kartu s modrým okrajem ze hry nebo z ruky.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Lze odhodit jakoukoli modrou kartu."
    ],
    "tags": [
      "stanice",
      "cena",
      "modrá karta"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/deathwood.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 Club ♣ card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a blue card",
    "rulingsEn": [
      "Lze odhodit jakoukoli blue card(s)."
    ]
  },
  {
    "id": "station-tombrock",
    "name": "Stanice Tombrock",
    "nameEn": "Tombrock",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Uber si 1 život",
    "effect": "Cena za nákup přiřazeného vagonu: Uberte si 1 život (nemůžete takto ztratit svůj poslední život).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Platí se vlastním zdravím. Spouští efekty ztráty života (Bart Cassidy, Simeon Picos)."
    ],
    "tags": [
      "stanice",
      "cena",
      "ztráta života"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/tombrock.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 Spade ♠ card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Lose 1 life point",
    "rulingsEn": [
      "Platí se vlastním zdravím. Spouští efekty ztráty life point(s) (Bart Cassidy, Simeon Picos)."
    ]
  },
  {
    "id": "station-virginian-city",
    "name": "Stanice Virginian City",
    "nameEn": "Virginian City",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď 2 libovolné karty",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte 2 libovolné karty z ruky a/nebo ze hry.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Můžete kombinovat karty z ruky i z vyložených karet."
    ],
    "tags": [
      "stanice",
      "cena",
      "2 karty"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/virginia-town.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: lose 1 life point. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard any 2 cards",
    "rulingsEn": [
      "Můžete kombinovat karty z ruky i z vyložených karet."
    ]
  },
  {
    "id": "station-yooma",
    "name": "Stanice Yooma",
    "nameEn": "Yooma",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď kartu 2-9",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte kartu s hodnotou 2 až 9 (včetně obou mezních hodnot).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Barva karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "hodnota 2-9"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/yooma.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 weapon card. Grants the attached railcar.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a card valued 2–9",
    "rulingsEn": [
      "Barva karty nerozhoduje."
    ]
  },
  {
    "id": "station-fort-woth",
    "name": "Stanice Fort Woth",
    "nameEn": "Fort Woth",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhoď 10, J, Q, K nebo A",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte kartu s hodnotou 10, J, Q, K nebo A.",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Barva karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "figury a esa"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/fort-wroth.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: pay 2 load tokens or discard 2 cards.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard 10, J, Q, K, or A",
    "rulingsEn": [
      "Barva karty nerozhoduje."
    ]
  },
  {
    "id": "station-santa-fe",
    "name": "Stanice Santa Fe",
    "nameEn": "Santa Fe",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": "♥",
    "values": null,
    "range": null,
    "cost": "Odhoď srdcovou kartu",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte jakoukoli srdcovou kartu (♥).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Hodnota karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "srdce"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/san-tafe.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 blue card.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Hearts card",
    "rulingsEn": [
      "Hodnota karty nerozhoduje."
    ]
  },
  {
    "id": "station-oathman",
    "name": "Stanice Oathman",
    "nameEn": "Oathman",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": "♦",
    "values": null,
    "range": null,
    "cost": "Odhoď károvou kartu",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte jakoukoli károvou kartu (♦).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Hodnota karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "káry"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/miner-s-oath.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 green or orange card.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Diamonds card",
    "rulingsEn": [
      "Hodnota karty nerozhoduje."
    ]
  },
  {
    "id": "station-st-francis",
    "name": "Stanice St. Francis",
    "nameEn": "St. Francis",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": "♣",
    "values": null,
    "range": null,
    "cost": "Odhoď křížovou kartu",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte jakoukoli křížovou kartu (♣).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Hodnota karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "kříže"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/frisco.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 BANG! card.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Clubs card",
    "rulingsEn": [
      "Hodnota karty nerozhoduje."
    ]
  },
  {
    "id": "station-cripple-crack",
    "name": "Stanice Cripple Crack",
    "nameEn": "Cripple Crack",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "station",
    "typeLabel": "Destička stanice",
    "copies": 1,
    "suit": "♠",
    "values": null,
    "range": null,
    "cost": "Odhoď pikovou kartu",
    "effect": "Cena za nákup přiřazeného vagonu: Odhoďte jakoukoli pikovou kartu (♠).",
    "timing": "Fáze 2 při nákupu vagonu",
    "rulings": [
      "Hodnota karty nerozhoduje."
    ],
    "tags": [
      "stanice",
      "cena",
      "piky"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/creepy-creek.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Station",
    "effectEn": "Station tile. Purchase cost: discard 1 Missed! card.",
    "timingEn": "Phase 2 when buying a railcar",
    "costEn": "Discard a Spades card",
    "rulingsEn": [
      "Hodnota karty nerozhoduje."
    ]
  },
  {
    "id": "card-train-robbery",
    "name": "Vlaková loupež",
    "nameEn": "Train Robbery",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 2,
    "suit": "♦ / ♠",
    "values": "9, Q",
    "range": "Libovolný hráč",
    "cost": null,
    "effect": "Počítá se do limitu 1 BANG! za tah. Vyberte jakéhokoli hráče: tento hráč se musí u KAŽDÉ své karty ve hře rozhodnout: buď ji odhodí, nebo se stane terčem efektu BANG!.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Hráč může kombinovat: některé karty odhodí, u jiných přijme BANG! a brání se (Vedle!, Barel).",
      "Každý BANG! se vyhodnocuje odděleně.",
      "Po zahrání už v témže tahu nesmíte hrát standardní kartu BANG! (a naopak)."
    ],
    "tags": [
      "hnědá",
      "vlaková loupež",
      "ničení karet",
      "vícenásobný bang"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/train-robbery.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Advance the train 1 station and take the attached railcar for free.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Hráč může kombinovat: některé karty odhodí, u jiných přijme BANG! a brání se (Vedle!, Barel).",
      "Každý BANG! se vyhodnocuje odděleně.",
      "Po zahrání už v témže tahu nesmíte hrát standardní BANG! card (a naopak)."
    ]
  },
  {
    "id": "card-map",
    "name": "Mapa",
    "nameEn": "Map",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♥",
    "values": "A",
    "range": null,
    "cost": null,
    "effect": "Než si v 1. fázi svého tahu doberete karty, podívejte se na vrchní 2 karty z balíčku; 1 z nich můžete odhodit.",
    "timing": "Fáze 1 (po Dynamitu/Vězení, před dobráním a před schopnostmi)",
    "rulings": [
      "Aktivuje se po všech snímacích efektech a před schopnostmi postav."
    ],
    "tags": [
      "modrá",
      "mapa",
      "filtrace balíčku",
      "fáze 1"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/map.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. In Phase 0, look at top 2 cards of deck and discard 1.",
    "timingEn": "Phase 1 (after Dynamite/Jail, before draw and abilities)",
    "costEn": null,
    "rulingsEn": [
      "Aktivuje se po všech snímacích efektech a před schopnostmi postav."
    ]
  },
  {
    "id": "card-knife-revolver",
    "name": "Revolver s nožem",
    "nameEn": "Knife Revolver",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "8",
    "range": "Dostřel 1",
    "cost": null,
    "effect": "Efekt BANG! na hráče ve vzdálenosti 1. Počítá se do limitu 1 BANG! za tah. Pokud je útok zrušen, Revolver s nožem se vrací do ruky původního majitele!",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nelze použít v Duelu ani proti Indiánům!.",
      "Karta K zemi! (Evaded!) jej získá do ruky pouze tehdy, pokud se nevrátí střelci."
    ],
    "tags": [
      "hnědá",
      "útok",
      "revolver s nožem",
      "vzdálenost 1",
      "návrat do ruky"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/knife-revolver.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Acts as a BANG! attack or draw 1 card.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Nelze použít v Duelu ani proti Indiánům!.",
      "Karta K zemi! (Evaded!) jej získá do ruky pouze tehdy, pokud se nevrátí střelci."
    ]
  },
  {
    "id": "card-refund",
    "name": "Odškodnění",
    "nameEn": "Refund",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♣",
    "values": "K",
    "range": null,
    "cost": null,
    "effect": "Jestliže vám některý jiný hráč vezme nebo odhodí jinou kartu než tuto (z ruky nebo ze hry), doberte si 1 kartu z balíčku.",
    "timing": "Mimo tah (při krádeži nebo odhození vaší karty)",
    "rulings": [
      "Odškodnění nelze použít proti Vlakové loupeži."
    ],
    "tags": [
      "hnědá",
      "odškodnění",
      "kompenzace",
      "dobírání při ztrátě"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/refund.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Discard 1 card in play to draw 2 cards from deck.",
    "timingEn": "Out of turn (when your card is stolen or discarded)",
    "costEn": null,
    "rulingsEn": [
      "Odškodnění nelze použít proti Vlakové loupeži."
    ]
  },
  {
    "id": "card-full-steam",
    "name": "Plnou parou vpřed",
    "nameEn": "Full Steam",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♣",
    "values": "J",
    "range": null,
    "cost": null,
    "effect": "Přesuňte vlak okamžitě na konečnou stanici. Poté efekt lokomotivy dle své volby buď ignorujte, nebo aktivujte dvakrát za sebou!",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Rozhodnutí platí pro všechny hráče u stolu.",
      "Při zdvojení se aplikují dva efekty lokomotivy hned po sobě."
    ],
    "tags": [
      "hnědá",
      "vlak",
      "konečná",
      "plnou parou vpřed",
      "zdvojení efektu"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/full-steam.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Advance the train 2 stations immediately.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Rozhodnutí platí pro všechny hráče u stolu.",
      "Při zdvojení se aplikují dva efekty lokomotivy hned po sobě."
    ]
  },
  {
    "id": "card-switch",
    "name": "Výhybka",
    "nameEn": "Switch",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "7",
    "range": "Libovolný hráč",
    "cost": null,
    "effect": "Vyměňte jednu svou vyloženou kartu ve hře za jednu vyloženou kartu jiného hráče.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Pokud získáte novou zbraň a již zbraň máte, starší zbraň odhoďte.",
      "Pokud získáte Vagon duchů a předchozí majitel nemá žádné životy, okamžitě vypadává ze hry!",
      "Šerif takto nemůže získat Vagon duchů ani Vězení.",
      "Karty tvořící vlak nejsou 've hře' a nelze je vyměnit."
    ],
    "tags": [
      "hnědá",
      "výměna karet ve hře",
      "výhybka",
      "sabotáž"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/switch.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Switch the positions of 2 stations or railcars.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Pokud získáte novou zbraň a již zbraň máte, starší zbraň odhoďte.",
      "Pokud získáte Vagon duchů a předchozí majitel nemá žádné life point(s), okamžitě vypadává ze hry!",
      "Sheriff takto nemůže získat Vagon duchů ani Vězení.",
      "Karty tvořící vlak nejsou 've hře' a nelze je vyměnit."
    ]
  },
  {
    "id": "card-evaded",
    "name": "K zemi!",
    "nameEn": "Evaded!",
    "expansion": "train-robbery",
    "expansionName": "Velká vlaková loupež",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♠",
    "values": "A",
    "range": null,
    "cost": null,
    "effect": "Zrušte efekt BANG! cílený na vás. Navíc vezměte kartu, která na vás vystřelila, do své ruky!",
    "timing": "Mimo tah (v reakci na BANG!)",
    "rulings": [
      "Pokud zrušíte efekt, který nevyvolala žádná skutečně zahraná karta (např. lokomotiva Ironhorse), žádnou kartu nezískáte.",
      "Proti Revolveru s nožem získáte kartu pouze tehdy, pokud se nevrátí střelci."
    ],
    "tags": [
      "hnědá",
      "obrana",
      "k zemi",
      "krádež útočné karty",
      "vedle"
    ],
    "image": "assets/cards/05_velka_vlakova_loupez/evaded.webp",
    "expansionNameEn": "The Great Train Robbery",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Cancel an attack and draw 1 card.",
    "timingEn": "Out of turn (in response to BANG!)",
    "costEn": null,
    "rulingsEn": [
      "Pokud zrušíte efekt, který nevyvolala žádná skutečně zahraná karta (např. lokomotiva Ironhorse), žádnou kartu nezískáte.",
      "Proti Revolveru s nožem získáte kartu pouze tehdy, pokud se nevrátí střelci."
    ]
  },
  {
    "id": "char-henry-block",
    "name": "Henry Block",
    "nameEn": "Henry Block",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Útočník / zloděj",
    "cost": null,
    "effect": "Kdykoli vám jiný hráč vezme nebo donutí odhodit kartu (z ruky nebo ze hry), stává se terčem automatického efektu BANG!.",
    "timing": "Při vzetí nebo odhození karty jiným hráčem",
    "rulings": [
      "Karta je vzata/odhozena až poté, co je vyřešen tento automatický BANG!.",
      "Funguje proti schopnostem Jesse Jonese i Pata Brennana.",
      "NEFUNGUJE proti El Gringovi (automatická schopnost zranění)."
    ],
    "tags": [
      "postava",
      "odveta",
      "krádež",
      "automatický bang",
      "údolí stínů"
    ],
    "image": "assets/cards/06_udoli_stinu/henry-block.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "Anyone who draws or forces him to discard a card becomes target of a BANG! attack.",
    "timingEn": "When card is taken or discarded by another player",
    "costEn": null,
    "rulingsEn": [
      "Karta je vzata/odhozena až poté, co je vyřešen tento automatický BANG!.",
      "Funguje proti schopnostem Jesse Jonese i Pata Brennana.",
      "NEFUNGUJE proti El Gringovi (automatická schopnost zranění)."
    ]
  },
  {
    "id": "char-colorado-bill",
    "name": "Colorado Bill",
    "nameEn": "Colorado Bill",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli zahrajete kartu BANG!, sejměte: je-li otočená karta piková (♠), tento výstřel nelze nijak zrušit (ani Barelem ani Vedle!).",
    "timing": "Při zahrání karty BANG!",
    "rulings": [
      "Vztahuje se pouze na skutečné karty BANG! (ne na Kulomet ani Roztříštěnou kulku).",
      "Při kartě Dvojitá rána a pikovém sejmutí cíl automaticky ztrácí 2 životy!"
    ],
    "tags": [
      "postava",
      "nezrušitelný výstřel",
      "piky",
      "sejmutí",
      "colorado bill"
    ],
    "image": "assets/cards/06_udoli_stinu/colorado-bill.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he plays a BANG!, draws (check): on Spades ♠, the shot cannot be canceled.",
    "timingEn": "When playing a BANG! card",
    "costEn": null,
    "rulingsEn": [
      "Vztahuje se pouze na skutečné BANG! card (ne na Kulomet ani Roztříštěnou kulku).",
      "Při kartě Dvojitá rána a pikovém sejmutí cíl automaticky ztrácí 2 life point(s)!"
    ]
  },
  {
    "id": "char-evelyn-shebang",
    "name": "Evelyn Shebang",
    "nameEn": "Evelyn Shebang",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu si může zvolit dobrat 0, 1 nebo 2 karty z balíčku. Za každou kartu, kterou si NEDOBERE, vystřelí 1 efekt BANG! na hráče ve vzdálenosti rovné počtu nedobraných karet.",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Rozhodnutí kolik karet lízne musí učinit PŘED dobíráním (nelze líznout 1 kartu, podívat se na ni a pak se rozhodnout vystřelit).",
      "Při události Žízeň nedobírá nic."
    ],
    "tags": [
      "postava",
      "fáze 1",
      "střelba místo dobírání",
      "evelyn shebang"
    ],
    "image": "assets/cards/06_udoli_stinu/evelyn-shebang.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, may choose not to draw to fire a BANG! at distance 1.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Rozhodnutí kolik karet lízne musí učinit PŘED dobíráním (nelze líznout 1 kartu, podívat se na ni a pak se rozhodnout vystřelit).",
      "Při události Žízeň nedobírá nic."
    ]
  },
  {
    "id": "char-mick-defender",
    "name": "Mick Defender",
    "nameEn": "Mick Defender",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může použít kartu Vedle! ze své ruky ke zrušení účinku hnědé karty (Cat Balou, Duel) i modré karty (Vězení, Chřestýš), pokud cílí pouze na něj.",
    "timing": "Mimo tah (v reakci na nepřátelskou kartu)",
    "rulings": [
      "Umožňuje odvrátit Vězení nebo Chřestýše dříve, než jsou na něj vyloženy!",
      "Nelze použít proti kartám, které se k němu dostanou jinak než zahráním (Dynamit)."
    ],
    "tags": [
      "postava",
      "obrana",
      "zrušení hnědé i modré karty",
      "vedle"
    ],
    "image": "assets/cards/06_udoli_stinu/mick-defender.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "May use any card from hand as Missed! if targeted by a card other than BANG!.",
    "timingEn": "Out of turn (in response to enemy card)",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje odvrátit Vězení nebo Chřestýše dříve, než jsou na něj vyloženy!",
      "Nelze použít proti kartám, které se k němu dostanou jinak než zahráním (Dynamit)."
    ]
  },
  {
    "id": "char-black-flower",
    "name": "Black Flower",
    "nameEn": "Black Flower",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": "♣",
    "values": null,
    "range": "Dle zbraně",
    "cost": null,
    "effect": "Může použít jakoukoli křížovou kartu (♣) jako kartu BANG!. Tento výstřel se nepočítá do limitu 1 BANG! za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Umožňuje vystřelit 2x za tah bez karty Volcanic."
    ],
    "tags": [
      "postava",
      "kříže",
      "extra bang",
      "black flower"
    ],
    "image": "assets/cards/06_udoli_stinu/black-flower.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may use any Clubs ♣ card as a BANG!.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje vystřelit 2x za tah bez karty Volcanic."
    ]
  },
  {
    "id": "char-der-spot-burst-ringer",
    "name": "Der Spot-Burst Ringer",
    "nameEn": "Der Spot-Burst Ringer",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Všichni ostatní",
    "cost": null,
    "effect": "Může zahrát 1 kartu BANG! jako kartu Kulomet (Gatling). Tento Kulomet se nepočítá do limitu 1 BANG! za tah.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Promění obyčejný BANG! na plošnou palbu na všechny hráče."
    ],
    "tags": [
      "postava",
      "kulomet z bangu",
      "plošný útok"
    ],
    "image": "assets/cards/06_udoli_stinu/der-spot-burst-ringer.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may play a BANG! without counting toward his limit.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Promění obyčejný BANG! na plošnou palbu na všechny hráče."
    ]
  },
  {
    "id": "char-tuco-the-franciscan",
    "name": "Tuco the Franciscan",
    "nameEn": "Tuco the Franciscan",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Pokud máte před sebou jako jediné modré karty Dynamit a/nebo Vězení a úspěšně na ně sejmete, doberte si 2 karty navíc.",
    "timing": "Při úspěšném sejmutí na Dynamit/Vězení",
    "rulings": [
      "Odměna za přežití nebezpečných pastí."
    ],
    "tags": [
      "postava",
      "dynamit",
      "vězení",
      "odměna",
      "dobírání"
    ],
    "image": "assets/cards/06_udoli_stinu/tuco-franziskaner.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, draws 2 cards from deck. If he has no blue cards in play, draws 1 extra card.",
    "timingEn": "Upon successful draw check for Dynamite/Jail",
    "costEn": null,
    "rulingsEn": [
      "Odměna za přežití nebezpečných pastí."
    ]
  },
  {
    "id": "card-ghost",
    "name": "Duch",
    "nameEn": "Ghost",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 2,
    "suit": "♠ / ♣",
    "values": "9, 10",
    "range": "Libovolný vyřazený hráč",
    "cost": null,
    "effect": "Zahrajte na libovolného vyřazeného hráče. Vrátí se do hry bez životů. Nemá žádné životy a nemůže žádné získat ani ztratit. Hraje normálně, ale na konci tahu odhodí celou ruku. Odstraněním Ducha (Panika!, Cat Balou) definitivně vypadává.",
    "timing": "Fáze 2 vlastního tahu na mrtvého hráče",
    "rulings": [
      "Ponechává si schopnost své postavy.",
      "Bill Noface jako Duch dobírá v 1. fázi 5 karet!",
      "Chuck Wengam nemůže obětovat život, protože žádný nemá.",
      "Nemá smysl hrát na něj Pivo (ale ve Zlaté horečce získá za Pivo valoun zlata)."
    ],
    "tags": [
      "modrá",
      "duch",
      "návrat mrtvého",
      "nemá životy",
      "údolí stínů"
    ],
    "image": "assets/cards/06_udoli_stinu/ghost.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. Play on an eliminated player: returns as a ghost without role or character ability.",
    "timingEn": "Phase 2 of own turn on dead player",
    "costEn": null,
    "rulingsEn": [
      "Ponechává si schopnost své postavy.",
      "Bill Noface jako Duch dobírá v 1. fázi 5 karet!",
      "Chuck Wengam nemůže obětovat life point(s), protože žádný nemá.",
      "Nemá smysl hrát na něj Pivo (ale ve Zlaté horečce získá za Pivo Gold Nugget(s))."
    ]
  },
  {
    "id": "card-rattlesnake",
    "name": "Chřestýš",
    "nameEn": "Rattlesnake",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "blue",
    "typeLabel": "Modrá karta (vyložená)",
    "copies": 1,
    "suit": "♥",
    "values": "7",
    "range": "Libovolný hráč",
    "cost": null,
    "effect": "Vyložte před libovolného hráče. Na začátku svého tahu uvězněný sejme: je-li otočená karta piková (♠), ztrácí 1 život! Chřestýš zůstává ve hře i po udělení zranění, dokud není odstraněn.",
    "timing": "Před Fází 1 tahu",
    "rulings": [
      "Pořadí vyhodnocení před 1. fází: Dynamit -> Vězení -> Chřestýš.",
      "Pokud hráč neuspěje ve Vězení a přijde o tah, na Chřestýše si už nesnímá!",
      "Zůstává ve hře kolo za kolem, dokud ho někdo nezničí Cat Balou nebo neukradne Panikou (může to udělat i sám postižený hráč)."
    ],
    "tags": [
      "modrá",
      "chřestýš",
      "jed",
      "trvalé poškození",
      "piky"
    ],
    "image": "assets/cards/06_udoli_stinu/rattlesnake.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. Place in front of any player. In Phase 0 draw (check): on Spades ♠, lose 1 life point.",
    "timingEn": "Before Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Pořadí vyhodnocení před 1. fází: Dynamit -> Vězení -> Chřestýš.",
      "Pokud hráč neuspěje ve Vězení a přijde o tah, na Chřestýše si už nesnímá!",
      "Zůstává ve hře kolo za kolem, dokud ho někdo nezničí Cat Balou nebo neukradne Panikou (může to udělat i sám postižený hráč)."
    ]
  },
  {
    "id": "card-shotgun",
    "name": "Roztříštěná kulka",
    "nameEn": "Shotgun",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♠",
    "values": "K",
    "range": "Dle zbraně + soused ve vzdálenosti 1",
    "cost": null,
    "effect": "Počítá se do limitu 1 BANG! za tah. Zvolte cíl v dostřelu zbraně, jenž má jiného hráče ve vzdálenosti 1. Oba tito hráči se stávají terčem efektu BANG! a brání se samostatně.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Zasáhne primární cíl i jeho souseda.",
      "Na vzdálenost mezi sousedy mají vliv Mustang a Hledí."
    ],
    "tags": [
      "hnědá",
      "dvojitý zásah",
      "roztříštěná kulka",
      "brokovnice"
    ],
    "image": "assets/cards/06_udoli_stinu/shotgun.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Shoot a player. Target loses 1 life point and discards 1 card from hand.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Zasáhne primární cíl i jeho souseda.",
      "Na vzdálenost mezi sousedy mají vliv Mustang a Hledí."
    ]
  },
  {
    "id": "card-return-fire",
    "name": "Opětovaná palba",
    "nameEn": "Return Fire",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♣",
    "values": "8",
    "range": null,
    "cost": null,
    "effect": "Jestliže se stanete terčem efektu BANG!, touto kartou výstřel zrušíte a SOUČASNĚ se stane terčem efektu BANG! stejný hráč, který na vás zaútočil!",
    "timing": "Mimo tah (v reakci na BANG!)",
    "rulings": [
      "Funguje jako Vedle! + okamžitý protiútok.",
      "Proti Slab the Killerovi je zapotřebí ještě 1 další efekt Vedle! pro odvrácení a vrácení palby.",
      "Proti lokomotivě Ironhorse funguje pouze jako Vedle! (vlak nelze zasáhnout)."
    ],
    "tags": [
      "hnědá",
      "obrana",
      "odveta",
      "opětovaná palba",
      "vedle + bang"
    ],
    "image": "assets/cards/06_udoli_stinu/backfire.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Cancel a BANG! and immediately fire a BANG! back at the attacker.",
    "timingEn": "Out of turn (in response to BANG!)",
    "costEn": null,
    "rulingsEn": [
      "Funguje jako Vedle! + okamžitý protiútok.",
      "Proti Slab the Killerovi je zapotřebí ještě 1 další efekt Vedle! pro odvrácení a vrácení palby.",
      "Proti lokomotivě Ironhorse funguje pouze jako Vedle! (vlak nelze zasáhnout)."
    ]
  },
  {
    "id": "card-tornado",
    "name": "Tornádo",
    "nameEn": "Tornado",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "A",
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Každý hráč musí předat 2 karty ze své ruky hráči po své levici. Karty se předávají všichni najednou.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Pokud má někdo pouze 1 kartu (nebo žádnou), pošle jen tuto 1 kartu (nebo nic).",
      "Soused pak dostane méně karet."
    ],
    "tags": [
      "hnědá",
      "rotace karet",
      "tornádo",
      "všichni hráči"
    ],
    "image": "assets/cards/06_udoli_stinu/tornado.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. All other players must discard 2 cards from hand.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Pokud má někdo pouze 1 kartu (nebo žádnou), pošle jen tuto 1 kartu (nebo nic).",
      "Soused pak dostane méně karet."
    ]
  },
  {
    "id": "card-double-shot",
    "name": "Dvojitá rána",
    "nameEn": "Double Shot",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♦",
    "values": "7",
    "range": "S kartou BANG!",
    "cost": null,
    "effect": "Zahrajte společně s kartou BANG!: k odvrácení tohoto útoku musí cíl použít 2 efekty Vedle! (nebo ztratí 2 životy!).",
    "timing": "Fáze 2 při zahrání BANG!",
    "rulings": [
      "Pokud ji zahraje Colorado Bill a sejme pik, cíl ztrácí automaticky 2 životy bez šance na obranu!",
      "Nelze zrušit kartou Útěk (Escape), protože necílí na hráče, ale posiluje BANG!."
    ],
    "tags": [
      "hnědá",
      "posílení útoku",
      "dvojitá rána",
      "2 vedle"
    ],
    "image": "assets/cards/06_udoli_stinu/fanning.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Fire 2 BANG! attacks at the same or different targets.",
    "timingEn": "Phase 2 when playing BANG!",
    "costEn": null,
    "rulingsEn": [
      "Pokud ji zahraje Colorado Bill a sejme pik, cíl ztrácí automaticky 2 life point(s) bez šance na obranu!",
      "Nelze zrušit kartou Útěk (Escape), protože necílí na hráče, ale posiluje BANG!."
    ]
  },
  {
    "id": "card-escape",
    "name": "Útěk",
    "nameEn": "Escape",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♥",
    "values": "K",
    "range": null,
    "cost": null,
    "effect": "Zrušte hnědou kartu (Cat Balou, Duel) nebo modrou kartu (Vězení, Chřestýš), která byla zahrána a cílí pouze na vás.",
    "timing": "Mimo tah (v reakci na nepřátelskou kartu)",
    "rulings": [
      "Zabrání uvěznění dříve, než se Vězení dostane na stůl.",
      "Nelze použít proti kartám, které se k vám dostanou jinak než zahráním (Dynamit)."
    ],
    "tags": [
      "hnědá",
      "obrana",
      "útěk",
      "zrušení vězení",
      "zrušení cat balou"
    ],
    "image": "assets/cards/06_udoli_stinu/escape.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Cancel any card played against you (like Missed! or against Cat Balou).",
    "timingEn": "Out of turn (in response to enemy card)",
    "costEn": null,
    "rulingsEn": [
      "Zabrání uvěznění dříve, než se Vězení dostane na stůl.",
      "Nelze použít proti kartám, které se k vám dostanou jinak než zahráním (Dynamit)."
    ]
  },
  {
    "id": "card-lemat",
    "name": "LeMat",
    "nameEn": "LeMat",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "blue",
    "typeLabel": "Zbraň (Údolí stínů)",
    "copies": 1,
    "suit": "♦",
    "values": "10",
    "range": "Dostřel 1",
    "cost": null,
    "effect": "Dostřel 1. Ve svém tahu můžete použít jakoukoli kartu ze své ruky jako kartu BANG!.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Karty zahrané přes LeMat se počítají do limitu 1 BANG! za tah.",
      "Pokud máte možnost hrát více BANGů (Willy the Kid, Bandalír), můžete LeMat použít opakovaně."
    ],
    "tags": [
      "modrá",
      "zbraň",
      "lemat",
      "univerzální bang"
    ],
    "image": "assets/cards/06_udoli_stinu/lemat.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue weapon. Range 1. Any card from hand may be played as a BANG!.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Karty zahrané přes LeMat se počítají do limitu 1 BANG! za tah.",
      "Pokud máte možnost hrát více BANGů (Willy the Kid, Bandalír), můžete LeMat použít opakovaně."
    ]
  },
  {
    "id": "card-last-call",
    "name": "Poslední volání",
    "nameEn": "Last Call",
    "expansion": "valley-of-shadows",
    "expansionName": "Údolí stínů",
    "type": "brown",
    "typeLabel": "Hnědá karta (okamžitá)",
    "copies": 1,
    "suit": "♦",
    "values": "8",
    "range": null,
    "cost": null,
    "effect": "Vyléčí 1 život. Tuto kartu lze zahrát a normálně LÉČÍ I KDYŽ VE HŘE ZBÝVAJÍ POUZE 2 HRÁČI!",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Prolamuje zákaz léčení ve 2 hráčích!",
      "Nelze zahrát mimo vlastní tah."
    ],
    "tags": [
      "hnědá",
      "léčení",
      "poslední volání",
      "funguje ve dvou hráčích"
    ],
    "image": "assets/cards/06_udoli_stinu/last-call.webp",
    "expansionNameEn": "Valley of Shadows",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Regain 1 life point even if only 2 players remain in the game.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Prolamuje zákaz léčení ve 2 hráčích!",
      "Nelze zahrát mimo vlastní tah."
    ]
  },
  {
    "id": "event-ghost-town",
    "name": "Město duchů",
    "nameEn": "Ghost Town",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni vyřazení hráči",
    "cost": null,
    "effect": "Vyřazení hráči se na jeden tah vrací do hry! V 1. fázi si dobírají 3 karty. Během svého tahu nemohou zemřít a na jeho konci jsou opět vyřazeni.",
    "timing": "Celé kolo, v tazích mrtvých hráčů",
    "rulings": [
      "Mrtví hráči mohou splnit svůj cíl a vyhrát hru (např. Bandita zabije Šerifa)!",
      "Bill Noface si dobírá 5 karet.",
      "Při odchodu na konci tahu Gregg Digger získá 2 životy a Herb Hunter 2 karty."
    ],
    "tags": [
      "událost",
      "návrat mrtvých",
      "město duchů",
      "high noon"
    ],
    "image": "assets/cards/07_prave_poledne/ghost-town.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Dead players return as ghosts on their turns: draw 3 cards, cannot die, leave at turn end.",
    "timingEn": "Entire round, on dead players' turns",
    "costEn": null,
    "rulingsEn": [
      "Mrtví hráči mohou splnit svůj cíl a vyhrát hru (např. Outlaw zabije Sheriff)!",
      "Bill Noface si dobírá 5 karet.",
      "Při odchodu na konci tahu Gregg Digger získá 2 life point(s) a Herb Hunter 2 karty."
    ]
  },
  {
    "id": "event-the-doctor",
    "name": "Doktor",
    "nameEn": "The Doctor",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Hráči s nejméně životy",
    "cost": null,
    "effect": "Když přijde Doktor do hry: hráč nebo hráči, kteří mají v tuto chvíli nejméně životů, si vyléčí 1 život.",
    "timing": "Okamžitě při otočení karty",
    "rulings": [
      "Vyhodnotí se před jakoukoli jinou akcí na začátku kola."
    ],
    "tags": [
      "událost",
      "léčení",
      "doktor",
      "podpora slabších"
    ],
    "image": "assets/cards/07_prave_poledne/the-doctor.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Living players with lowest life points regain 1 life point.",
    "timingEn": "Immediately when card is revealed",
    "costEn": null,
    "rulingsEn": [
      "Vyhodnotí se před jakoukoli jinou akcí na začátku kola."
    ]
  },
  {
    "id": "event-the-daltons",
    "name": "Daltonové",
    "nameEn": "The Daltons",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči s modrými kartami",
    "cost": null,
    "effect": "Když přijdou Daltonové do hry: každý hráč, který má před sebou vyloženy modré karty, musí jednu z nich vybrat a odhodit.",
    "timing": "Okamžitě při otočení karty",
    "rulings": [
      "Hráč si sám vybere, kterou modrou kartu obětuje."
    ],
    "tags": [
      "událost",
      "sabotáž",
      "daltonové",
      "odhození modré karty"
    ],
    "image": "assets/cards/07_prave_poledne/the-daltons.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. When revealed, all players with blue cards in play discard 1 blue card.",
    "timingEn": "Immediately when card is revealed",
    "costEn": null,
    "rulingsEn": [
      "Hráč si sám vybere, kterou blue card(s) obětuje."
    ]
  },
  {
    "id": "event-the-preacher",
    "name": "Kazatel",
    "nameEn": "The Preacher",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Během svého tahu nesmíte používat karty BANG!.",
    "timing": "Celé kolo",
    "rulings": [
      "Zákaz platí i na odhazování BANG! v Duelu (hráč na tahu nesmí v Duelu odhodit BANG! a ztrácí život!).",
      "Lze stále útočit Kulometem, Křesadlovkou, nožem apod."
    ],
    "tags": [
      "událost",
      "zákaz bangu",
      "kazatel",
      "příměří"
    ],
    "image": "assets/cards/07_prave_poledne/the-reverend.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Beer cards cannot be played.",
    "timingEn": "Entire round",
    "costEn": null,
    "rulingsEn": [
      "Zákaz platí i na odhazování BANG! v Duelu (hráč na tahu nesmí v Duelu odhodit BANG! a ztrácí life point(s)!).",
      "Lze stále útočit Kulometem, Křesadlovkou, nožem apod."
    ]
  },
  {
    "id": "event-thirst",
    "name": "Žízeň",
    "nameEn": "Thirst",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Všichni hráči si v 1. fázi svého tahu dobírají o 1 kartu méně než obvykle (standardně tedy pouze 1 kartu).",
    "timing": "Fáze 1 v každém tahu tohoto kola",
    "rulings": [
      "Postavy se schopností na 1. kartu (Jesse Jones, Pedro Ramirez) ji mohou normálně využít."
    ],
    "tags": [
      "událost",
      "žízeň",
      "méně karet",
      "fáze 1"
    ],
    "image": "assets/cards/07_prave_poledne/thirst.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Players draw only 1 card during Phase 1.",
    "timingEn": "Phase 1 on each turn this round",
    "costEn": null,
    "rulingsEn": [
      "Postavy se schopností na 1. kartu (Jesse Jones, Pedro Ramirez) ji mohou normálně využít."
    ]
  },
  {
    "id": "event-train-arrival",
    "name": "Příjezd vlaku",
    "nameEn": "Train Arrival",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Všichni hráči si v 1. fázi svého tahu dobírají o 1 kartu více než obvykle (standardně 3 karty).",
    "timing": "Fáze 1 v každém tahu tohoto kola",
    "rulings": [
      "Pixie Pete si dobírá 4 karty! Black Jack může mít až 4 karty."
    ],
    "tags": [
      "událost",
      "příjezd vlaku",
      "více karet",
      "fáze 1"
    ],
    "image": "assets/cards/07_prave_poledne/train-arrival.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Players draw 1 extra card during Phase 1.",
    "timingEn": "Phase 1 on each turn this round",
    "costEn": null,
    "rulingsEn": [
      "Pixie Pete si dobírá 4 karty! Black Jack může mít až 4 karty."
    ]
  },
  {
    "id": "event-high-noon",
    "name": "Pravé poledne",
    "nameEn": "High Noon",
    "expansion": "high-noon",
    "expansionName": "Pravé poledne",
    "type": "event",
    "typeLabel": "Globální událost (finální)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Na začátku svého tahu ztrácí každý hráč 1 život! Karta zůstává ve hře trvale až do konce hry.",
    "timing": "Na začátku každého tahu až do konce hry",
    "rulings": [
      "Způsobuje rychlý konec hry („sudden death“).",
      "Ztráta 1 života nastává ještě před snímáním na Dynamit a Vězení!"
    ],
    "tags": [
      "událost",
      "finální",
      "pravé poledne",
      "nevyhnutelná smrt"
    ],
    "image": "assets/cards/07_prave_poledne/high-noon.webp",
    "expansionNameEn": "High Noon",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Each player loses 1 life point at the start of their turn. Lasts until game end.",
    "timingEn": "At the start of each turn until end of game",
    "costEn": null,
    "rulingsEn": [
      "Způsobuje rychlý konec hry („sudden death“).",
      "Ztráta 1 life point(s) nastává ještě před snímáním na Dynamit a Vězení!"
    ]
  },
  {
    "id": "event-a-fistful-of-cards",
    "name": "Pěst plná karet (Fistful)",
    "nameEn": "A Fistful of Cards",
    "expansion": "fistful-of-cards",
    "expansionName": "Pěst plná karet",
    "type": "event",
    "typeLabel": "Globální událost (finální)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Aktivní hráč",
    "cost": null,
    "effect": "Na začátku svého tahu se stáváte cílem tolika efektů BANG!, kolik máte karet v ruce! Zůstává ve hře až do konce partie.",
    "timing": "Začátek každého tahu",
    "rulings": [
      "Proti každému BANG! se lze bránit samostatně kartami Vedle! nebo Barelem.",
      "Hráč s plnou rukou může okamžitě padnout, pokud nemá dostatek obran."
    ],
    "tags": [
      "událost",
      "finální",
      "pěst plná karet",
      "krupobití střel"
    ],
    "image": "assets/cards/08_pest_plna_karet/a-fistful-of-cards.webp",
    "expansionNameEn": "A Fistful of Cards",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. At the start of their turn, player is targeted by as many BANG!s as cards in hand.",
    "timingEn": "Start of each turn",
    "costEn": null,
    "rulingsEn": [
      "Proti každému BANG! se lze bránit samostatně Missed! card nebo Barelem.",
      "Hráč s plnou rukou může okamžitě padnout, pokud nemá dostatek obran."
    ]
  },
  {
    "id": "event-sniper",
    "name": "Odstřelovač",
    "nameEn": "Sniper",
    "expansion": "fistful-of-cards",
    "expansionName": "Pěst plná karet",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": "Odhození 2 karet BANG!",
    "effect": "Během svého tahu můžete odhodit 2 karty BANG! a získat tím posílený efekt BANG!, který lze zrušit POUZE 2 EFEKTY VEDLE!.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nezapočítává se do limitu 1 BANG! za tah.",
      "Lze aktivovat i vícekrát za tah."
    ],
    "tags": [
      "událost",
      "odstřelovač",
      "2 bangy za supershot",
      "2 vedle"
    ],
    "image": "assets/cards/08_pest_plna_karet/sniper.webp",
    "expansionNameEn": "A Fistful of Cards",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Players may discard 2 BANG! cards to fire an uncancelable shot.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 2 BANG! cards",
    "rulingsEn": [
      "Nezapočítává se do limitu 1 BANG! za tah.",
      "Lze aktivovat i vícekrát za tah."
    ]
  },
  {
    "id": "event-abandoned-mine",
    "name": "Opuštěný důl",
    "nameEn": "Abandoned Mine",
    "expansion": "fistful-of-cards",
    "expansionName": "Pěst plná karet",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "V 1. fázi svého tahu si dobíráte karty z odhazovací hromádky (je-li to možné). Pokud si takto doberete alespoň 1 kartu, všechny karty odhozené ve vašem tahu jdou lícem dolů na dobírací balíček!",
    "timing": "Celé kolo",
    "rulings": [
      "Otáčí koloběh karet v balíčku.",
      "Platí pro nadbytečné karty i karty odhozené v Duelu."
    ],
    "tags": [
      "událost",
      "opuštěný důl",
      "obrácený koloběh karet"
    ],
    "image": "assets/cards/08_pest_plna_karet/abonded-mine.webp",
    "expansionNameEn": "A Fistful of Cards",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. In Phase 1, players draw from discard pile if possible.",
    "timingEn": "Entire round",
    "costEn": null,
    "rulingsEn": [
      "Otáčí koloběh karet v balíčku.",
      "Platí pro nadbytečné karty i karty odhozené v Duelu."
    ]
  },
  {
    "id": "event-lasso",
    "name": "Laso",
    "nameEn": "Lasso",
    "expansion": "fistful-of-cards",
    "expansionName": "Pěst plná karet",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Karty vyložené ve hře (modré, zelené, oranžové zbraně i koně) nemají po celé kolo vůbec žádný efekt!",
    "timing": "Celé kolo",
    "rulings": [
      "Karty lze stále hrát na stůl, ale jsou dočasně neaktivní.",
      "Barel nechrání, Mustang nezvyšuje vzdálenost, zbraně nestřílí dál."
    ],
    "tags": [
      "událost",
      "laso",
      "vypnutí vyložených karet",
      "divoký západ"
    ],
    "image": "assets/cards/08_pest_plna_karet/lasso.webp",
    "expansionNameEn": "A Fistful of Cards",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Cards in play in front of all players have no effect.",
    "timingEn": "Entire round",
    "costEn": null,
    "rulingsEn": [
      "Karty lze stále hrát na stůl, ale jsou dočasně neaktivní.",
      "Barel nechrání, Mustang nezvyšuje vzdálenost, zbraně nestřílí dál."
    ]
  },
  {
    "id": "event-russian-roulette",
    "name": "Ruská ruleta",
    "nameEn": "Russian Roulette",
    "expansion": "fistful-of-cards",
    "expansionName": "Pěst plná karet",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči postupně",
    "cost": null,
    "effect": "Když přijde Ruská ruleta do hry, musí každý hráč postupně použít efekt Vedle! (začíná Šerif po směru hodinových ručiček). První, kdo tak neučiní, ztrácí 2 životy a ruleta končí!",
    "timing": "Okamžitě při otočení karty",
    "rulings": [
      "Lze použít kartu Vedle!, úspěšné sejmutí na Barel nebo Jourdonnaise.",
      "První neúspěšný hráč ztrácí 2 životy a tím je událost vyřešena."
    ],
    "tags": [
      "událost",
      "ruská ruleta",
      "okamžité napětí",
      "2 životy"
    ],
    "image": "assets/cards/08_pest_plna_karet/russian-roulette.webp",
    "expansionNameEn": "A Fistful of Cards",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Starting with Sheriff, players alternately discard a Missed! or lose 2 life points.",
    "timingEn": "Immediately when card is revealed",
    "costEn": null,
    "rulingsEn": [
      "Lze použít Missed! card, úspěšné sejmutí na Barel nebo Jourdonnaise.",
      "První neúspěšný hráč ztrácí 2 life point(s) a tím je událost vyřešena."
    ]
  },
  {
    "id": "char-flint-westwood",
    "name": "Flint Westwood",
    "nameEn": "Flint Westwood",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Libovolný hráč",
    "cost": "1 vybraná karta z ruky",
    "effect": "Během svého tahu můžete vyměnit 1 kartu ze své ruky (dle svého výběru) za 2 karty náhodně vytažené z ruky jiného hráče.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Kartu, kterou dáváte, si sami vybíráte.",
      "Pokud má protihráč v ruce pouze 1 kartu, dostanete pouze ji."
    ],
    "tags": [
      "postava",
      "výměna karet",
      "krádež",
      "flint westwood"
    ],
    "image": "assets/cards/09_divoky_zapad/flint-westwood.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Character",
    "effectEn": "On his turn, may trade 1 card from hand for 2 random cards from another player's hand.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "1 chosen card from hand",
    "rulingsEn": [
      "Kartu, kterou dáváte, si sami vybíráte.",
      "Pokud má protihráč v ruce pouze 1 kartu, dostanete pouze ji."
    ]
  },
  {
    "id": "char-greygory-deck",
    "name": "Greygory Deck",
    "nameEn": "Greygory Deck",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Na začátku svého tahu si náhodně vybere 2 postavy ze základní hry, které nikdo nehraje. Získá zvláštní schopnosti obou těchto postav!",
    "timing": "Začátek každého tahu (i na začátku hry)",
    "rulings": [
      "Může si postavy ponechat nebo obě vyměnit za dvě nové.",
      "Kombinuje 2 plnohodnotné schopnosti základních postav."
    ],
    "tags": [
      "postava",
      "dvojitá schopnost",
      "greygory deck"
    ],
    "image": "assets/cards/09_divoky_zapad/greygory-deck.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Character",
    "effectEn": "At the start of his turn, may draw 2 character cards and choose which one to use this round.",
    "timingEn": "Start of each turn (including start of game)",
    "costEn": null,
    "rulingsEn": [
      "Může si postavy ponechat nebo obě vyměnit za dvě nové.",
      "Kombinuje 2 plnohodnotné schopnosti základních postav."
    ]
  },
  {
    "id": "char-john-pain",
    "name": "John Pain",
    "nameEn": "John Pain",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli některý hráč u stolu sejme („Draw!“), John Pain si sejmutou kartu vezme do své ruky (pokud má v ruce méně než 6 karet).",
    "timing": "Kdykoli kdokoli sejme",
    "rulings": [
      "Kartu nemůže použít okamžitě; musí počkat, dokud se nevyhodnotí původní efekt.",
      "Při Lucky Dukovi dostane pouze tu kartu, kterou si Lucky Duke vybral jako výsledek."
    ],
    "tags": [
      "postava",
      "sbírání sejmutých karet",
      "john pain"
    ],
    "image": "assets/cards/09_divoky_zapad/john-pain.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Character",
    "effectEn": "Whenever any player draws (check), takes the flipped card into his hand if he has under 6 cards.",
    "timingEn": "Whenever anyone performs a draw check",
    "costEn": null,
    "rulingsEn": [
      "Kartu nemůže použít okamžitě; musí počkat, dokud se nevyhodnotí původní efekt.",
      "Při Lucky Dukovi dostane pouze tu kartu, kterou si Lucky Duke vybral jako výsledek."
    ]
  },
  {
    "id": "char-lee-van-kliff",
    "name": "Lee Van Kliff",
    "nameEn": "Lee Van Kliff",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození karty BANG!",
    "effect": "Během svého tahu můžete odhodit kartu BANG!, abyste zopakovali efekt hnědé karty, kterou jste právě zahráli.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Kopírovaná hnědá karta může být i další BANG!.",
      "Každý efekt smíte zopakovat pouze jednou.",
      "Při zkopírování Dostavníku se otočí karta Divokého západu pouze jednou."
    ],
    "tags": [
      "postava",
      "kopírování hnědých karet",
      "lee van kliff"
    ],
    "image": "assets/cards/09_divoky_zapad/lee-van-kliff.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Character",
    "effectEn": "On his turn, may discard a BANG! to repeat the effect of the brown card he just played.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 BANG! card",
    "rulingsEn": [
      "Kopírovaná brown card(s) může být i další BANG!.",
      "Každý efekt smíte zopakovat pouze jednou.",
      "Při zkopírování Dostavníku se otočí karta Divokého západu pouze jednou."
    ]
  },
  {
    "id": "char-teren-kill",
    "name": "Teren Kill",
    "nameEn": "Teren Kill",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "character",
    "typeLabel": "Postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli byste měli být vyřazeni ze hry, sejměte: Pokud otočená karta NENÍ piková (♠), zůstává vám 1 život a doberete si 1 kartu!",
    "timing": "Při smrtelném zranění",
    "rulings": [
      "Pokud sejmutí neuspěje (je pik), nemůže se zachránit Pivem!",
      "Téměř 75% šance na přežití každého smrtícího zásahu."
    ],
    "tags": [
      "postava",
      "přežití smrti",
      "teren kill",
      "hazard"
    ],
    "image": "assets/cards/09_divoky_zapad/teren-kill.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he would be eliminated, draws (check): on anything except Spades ♠, stays alive with 1 life.",
    "timingEn": "Upon receiving lethal damage",
    "costEn": null,
    "rulingsEn": [
      "Pokud sejmutí neuspěje (je pik), nemůže se zachránit Pivem!",
      "Téměř 75% šance na přežití každého smrtícího zásahu."
    ]
  },
  {
    "id": "event-wild-west-show",
    "name": "Divoký západ (Wild West Show)",
    "nameEn": "Wild West Show",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "event",
    "typeLabel": "Globální událost (finální)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Cílem všech hráčů se stává: „Zůstaň poslední naživu ve hře!“. Každý hraje sám za sebe jako Odpadlík! Pokud padne Šerif, hra pokračuje dál.",
    "timing": "Trvale až do konce partie",
    "rulings": [
      "Běžná pravidla rolí zůstávají (na Šerifa nelze hrát Vězení, za zabití Bandity je 3 karty odměna).",
      "Vítězství je čistě individuální."
    ],
    "tags": [
      "událost",
      "finální",
      "všichni proti všem",
      "divoký západ"
    ],
    "image": "assets/cards/09_divoky_zapad/wild-west-show.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. The goal of all players becomes: be the last one alive! Roles are suspended.",
    "timingEn": "Permanently until the end of the game",
    "costEn": null,
    "rulingsEn": [
      "Běžná pravidla rolí zůstávají (na Sheriff nelze hrát Vězení, za zabití Outlaw je 3 karty odměna).",
      "Vítězství je čistě individuální."
    ]
  },
  {
    "id": "event-showdown",
    "name": "Zúčtování",
    "nameEn": "Showdown",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Každá karta z ruky může být zahrána jako karta BANG!. Každá karta BANG! může být zahrána jako karta Vedle!.",
    "timing": "Celé trvání události",
    "rulings": [
      "Totální přestřelka, kde se jakákoli karta promění v kulku."
    ],
    "tags": [
      "událost",
      "zúčtování",
      "univerzální bang a vedle"
    ],
    "image": "assets/cards/09_divoky_zapad/showdown.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. All cards may be played as BANG!, and all cards may be played as Missed!.",
    "timingEn": "Entire duration of the event",
    "costEn": null,
    "rulingsEn": [
      "Totální přestřelka, kde se jakákoli karta promění v kulku."
    ]
  },
  {
    "id": "event-bone-orchard",
    "name": "Hřbitov",
    "nameEn": "Bone Orchard",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Vyřazení hráči",
    "cost": null,
    "effect": "Když přijde řada na mrtvého hráče, vrací se do hry s 1 životem a líže 2 karty. Hraje se známou odhalenou rolí. Pokud stále žije ve chvíli, kdy tato událost skončí, zůstává trvale ve hře!",
    "timing": "Při zahájení tahu vyřazeného hráče",
    "rulings": [
      "Aktivuje se pouze zahráním karty Dostavník nebo Wells Fargo a trvá do zahrání dalšího Dostavníku.",
      "Mrtvý hráč ožije až v momentě, kdy na něj přijde řada – vezme si 1 život, lízne 2 karty a může se Pivem doléčit.",
      "Hraje se s otevřenou kartou původní role; odměny a tresty za zabití platí znovu (+3 karty za Banditu; trest pro Šerifa).",
      "Pokud hráč při výměně události stále žije (má alespoň 1 život), zůstává ve hře trvale naživu!"
    ],
    "tags": [
      "událost",
      "hřbitov",
      "krchov",
      "bone-orchard",
      "oživování",
      "zombie",
      "dostavník",
      "wells-fargo"
    ],
    "image": "assets/cards/09_divoky_zapad/bone-orchard.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. When an eliminated player's turn arrives, they return to the game with 1 life point and draw 2 cards. Role is played face-up. If still alive when this event leaves play, they remain permanently in the game!",
    "timingEn": "At the start of eliminated player's turn",
    "costEn": null,
    "rulingsEn": [
      "Activates only when Stagecoach or Wells Fargo is played, and lasts until the next Stagecoach is played.",
      "An eliminated player revives only when their turn arrives — gains 1 life point, draws 2 cards, and can heal with Beer.",
      "Played with original role card face-up; kill bounties and penalties apply again (+3 cards for Outlaw; penalty for Sheriff).",
      "If a player is still alive when the event changes (has at least 1 life point), they stay in the game permanently!"
    ]
  },
  {
    "id": "event-miss-susanna",
    "name": "Slečna Zuzana",
    "nameEn": "Miss Susanna",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči",
    "cost": null,
    "effect": "Během svého tahu musí každý hráč zahrát alespoň 3 karty. Kdo to neudělá, ztrácí na konci tahu 1 život!",
    "timing": "Vlastní tah",
    "rulings": [
      "Nepůsobí na hráče, kteří musí přeskočit svůj tah v důsledku Vězení."
    ],
    "tags": [
      "událost",
      "slečna zuzana",
      "povinnost hrát 3 karty"
    ],
    "image": "assets/cards/09_divoky_zapad/miss-susanna.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Each player must play at least 3 cards on their turn or lose 1 life point.",
    "timingEn": "Own turn",
    "costEn": null,
    "rulingsEn": [
      "Nepůsobí na hráče, kteří musí přeskočit svůj tah v důsledku Vězení."
    ]
  },
  {
    "id": "event-gag",
    "name": "Roubík",
    "nameEn": "Gag",
    "expansion": "wild-west-show",
    "expansionName": "Divoký západ",
    "type": "event",
    "typeLabel": "Globální událost",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Všichni hráči u stolu",
    "cost": null,
    "effect": "Hráči nesmí vůbec mluvit (mohou pouze gestikulovat a sténat). Kdo promluví, ztrácí okamžitě 1 život!",
    "timing": "Celé trvání události",
    "rulings": [
      "Platí i pro mimotahové komentáře a hlášení karet."
    ],
    "tags": [
      "událost",
      "roubík",
      "zákaz mluvení",
      "zábava"
    ],
    "image": "assets/cards/09_divoky_zapad/gag.webp",
    "expansionNameEn": "Wild West Show",
    "typeLabelEn": "Global Event",
    "effectEn": "Event. Players cannot talk. Whoever speaks loses 1 life point.",
    "timingEn": "Entire duration of the event",
    "costEn": null,
    "rulingsEn": [
      "Platí i pro mimotahové komentáře a hlášení karet."
    ]
  },
  {
    "id": "legend-bart-cassidy",
    "name": "Legendární Bart Cassidy",
    "nameEn": "Legendary Bart Cassidy",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli ztratíte život, doberte si okamžitě 2 KARTY z balíčku místo 1! Záchrana Legendy: po otočení na stranu B se vyléčí až na 3 životy.",
    "timing": "Při ztrátě života",
    "rulings": [
      "Ztráta 2 životů = zisk 4 nových karet!",
      "Může si přivlastnit čin a způsobit jiné legendě zranění bez obrany."
    ],
    "tags": [
      "legenda",
      "bart cassidy",
      "dvojité dobírání",
      "životy"
    ],
    "image": "assets/cards/10_legendy/bart-cassidy-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Bart Cassidy (Side B). Whenever he loses a life point, draws 2 cards from deck.",
    "timingEn": "When losing a life point",
    "costEn": null,
    "rulingsEn": [
      "Ztráta 2 life point(s) = zisk 4 nových karet!",
      "Může si přivlastnit čin a způsobit jiné legendě zranění bez obrany."
    ]
  },
  {
    "id": "legend-black-jack",
    "name": "Legendární Black Jack",
    "nameEn": "Legendary Black Jack",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu můžete ukazovat dobírané karty, dokud součet jejich hodnot nepřesáhne 21! Poté si všechny tyto karty vezměte do ruky. (J, Q, K = 10, Eso = 11).",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Pokud součet dosáhne přesně 21, smí otočit ještě jednu kartu a vzít si všechny!",
      "Může si automaticky přivlastnit čin Oregonská stezka."
    ],
    "tags": [
      "legenda",
      "black jack",
      "oko bere 21",
      "masivní dobírání"
    ],
    "image": "assets/cards/10_legendy/black-jack-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Black Jack (Side B). In Phase 1, reveals top 2 cards: on red card, draws 2 extra cards.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Pokud součet dosáhne přesně 21, smí otočit ještě jednu kartu a vzít si všechny!",
      "Může si automaticky přivlastnit čin Oregonská stezka."
    ]
  },
  {
    "id": "legend-calamity-janet",
    "name": "Legendární Calamity Janet",
    "nameEn": "Legendary Calamity Janet",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Může používat BANG! jako Vedle! a naopak. Navíc pro přivlastnění činu Dobrá společnost smí použít jakékoli 2 karty (prohlásí je za BANG! nebo Vedle!).",
    "timing": "Kdykoli",
    "rulings": [
      "Totální kontrola nad kartami BANG! a Vedle!."
    ],
    "tags": [
      "legenda",
      "calamity janet",
      "činy",
      "univerzální karty"
    ],
    "image": "assets/cards/10_legendy/calamity-janet-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Calamity Janet (Side B). May play any card as BANG! or Missed!.",
    "timingEn": "Anytime",
    "costEn": null,
    "rulingsEn": [
      "Totální kontrola nad BANG! card a Vedle!."
    ]
  },
  {
    "id": "legend-el-gringo",
    "name": "Legendární El Gringo",
    "nameEn": "Legendary El Gringo",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli vám hráč způsobí zranění, vezměte si z jeho ruky 1 kartu za každý ztracený život A KARTU, KTERÁ VÁM ZRANĚNÍ ZPŮSOBILA! Aktivuje se i při přivlastnění činu jinou legendou.",
    "timing": "Při zranění hráčem nebo legendou",
    "rulings": [
      "Bere jak kartu z ruky útočníka, tak samotnou zahranou útočnou kartu!",
      "Pokud mu způsobí zranění jiná legenda přivlastněním činu, vezme si kartu z ruky této legendy."
    ],
    "tags": [
      "legenda",
      "el gringo",
      "dvojitá krádež",
      "odveta"
    ],
    "image": "assets/cards/10_legendy/el-gringo-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary El Gringo (Side B). When taking damage, steals 2 cards from attacker's hand.",
    "timingEn": "When damaged by a player or legend",
    "costEn": null,
    "rulingsEn": [
      "Bere jak kartu z ruky útočníka, tak samotnou zahranou útočnou kartu!",
      "Pokud mu způsobí zranění jiná legenda přivlastněním činu, vezme si kartu z ruky této legendy."
    ]
  },
  {
    "id": "legend-jourdonnais",
    "name": "Legendární Jourdonnais",
    "nameEn": "Legendary Jourdonnais",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Pokud jste cílem JAKÉKOLI hnědé karty, můžete sejmout: J, Q, K, A = ignorujte tuto kartu! Funguje proti Indiánům!, Kulometu, Cat Balou, Panice! atd.",
    "timing": "V reakci na jakoukoli hnědou kartu cílenou na něj",
    "rulings": [
      "Neproniknutelný štít na jakékoli figury i esa při sejmutí.",
      "Chrání ho před plošnými kartami i přímými útoky."
    ],
    "tags": [
      "legenda",
      "jourdonnais",
      "imunita proti hnědým",
      "sejmutí"
    ],
    "image": "assets/cards/10_legendy/jourdonnais-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Jourdonnais (Side B). When targeted by brown cards, draws: J, Q, K, A cancels the card.",
    "timingEn": "In response to any brown card targeting them",
    "costEn": null,
    "rulingsEn": [
      "Neproniknutelný štít na jakékoli figury i esa při sejmutí.",
      "Protects against area-of-effect cards as well as direct attacks."
    ]
  },
  {
    "id": "legend-lucky-duke",
    "name": "Legendární Lucky Duke",
    "nameEn": "Legendary Lucky Duke",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli má sejmout, otočí 2 karty a vybere 1. Pokud k sejmutí dojde v JEHO TAHU, vezme si vybranou kartu přímo DO RUKY po vyhodnocení!",
    "timing": "Při sejmutí ve svém tahu",
    "rulings": [
      "Při sejmutí na Vězení, Dynamit nebo Barel ve svém tahu si úspěšnou kartu bere do ruky!",
      "S Podkovou snímá 3 karty a vybranou si vezme."
    ],
    "tags": [
      "legenda",
      "lucky duke",
      "sejmutí do ruky",
      "zisk karet"
    ],
    "image": "assets/cards/10_legendy/lucky-duke-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Lucky Duke (Side B). Draws 3 cards on checks and picks the best result.",
    "timingEn": "During a draw check on your turn",
    "costEn": null,
    "rulingsEn": [
      "Při sejmutí na Vězení, Dynamit nebo Barel ve svém tahu si úspěšnou kartu bere do ruky!",
      "S Podkovou snímá 3 karty a vybranou si vezme."
    ]
  },
  {
    "id": "legend-paul-regret",
    "name": "Legendární Paul Regret",
    "nameEn": "Legendary Paul Regret",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Pro všechny ostatní hráče se nachází ve vzdálenosti o 1 větší. Navíc: pokud na něj někdo hraje kartu BANG!, musí útočník ZÁROVEŇ ODHODIT 1 DALŠÍ KARTU Z RUKY!",
    "timing": "Trvale + při útoku na něj",
    "rulings": [
      "Každý výstřel na Paula stojí útočníka 2 karty z ruky (BANG! + další odhozená karta).",
      "Legendární Rose Doolan jeho vzdálenost ignoruje."
    ],
    "tags": [
      "legenda",
      "paul regret",
      "poplatek za výstřel",
      "nedobytný"
    ],
    "image": "assets/cards/10_legendy/paul-regret-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Paul Regret (Side B). Distance to him is increased by +2.",
    "timingEn": "Permanent + when attacked",
    "costEn": null,
    "rulingsEn": [
      "Každý výstřel na Paula stojí útočníka 2 karty z ruky (BANG! + další odhozená karta).",
      "Legendární Rose Doolan jeho vzdálenost ignoruje."
    ]
  },
  {
    "id": "legend-rose-doolan",
    "name": "Legendární Rose Doolan",
    "nameEn": "Legendary Rose Doolan",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Vzdálenost 1 na všechny",
    "cost": null,
    "effect": "Pokud chce, všichni ostatní hráči se pro ni nachází ve vzdálenosti 1 (neguje Mustangy i schopnost Paula Regreta). Jednou za tah může odhodit modrou kartu z ruky nebo ze hry a získat efekt Panika!.",
    "timing": "Trvale + Fáze 2 vlastního tahu",
    "rulings": [
      "Absolutní odstřelovač: žádný kůň ani skrýš před ní neochrání.",
      "Může proměnit jakoukoli modrou kartu ve zlodějskou Paniku!."
    ],
    "tags": [
      "legenda",
      "rose doolan",
      "vzdálenost 1",
      "panika z modré karty"
    ],
    "image": "assets/cards/10_legendy/rose-doolan-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Rose Doolan (Side B). Sees all other players at distance 1 regardless of cards.",
    "timingEn": "Permanent + Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Absolutní odstřelovač: žádný kůň ani skrýš před ní neochrání.",
      "Může proměnit jakoukoli blue card(s) ve zlodějskou Paniku!."
    ]
  },
  {
    "id": "legend-sid-ketchum",
    "name": "Legendární Sid Ketchum",
    "nameEn": "Legendary Sid Ketchum",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": null,
    "effect": "Kdykoli může odhodit 2 karty a vyléčit si 1 život. Navíc: pokud ve svém tahu získá alespoň 1 život, může použít 1 EFEKT BANG! ZCELA BEZ ZAHRÁNÍ KARTY!",
    "timing": "Fáze 2 po vyléčení",
    "rulings": [
      "Nezáleží, jak se vyléčil (schopností, Pivem, Rumem, Saloonem).",
      "Získá bezplatný výstřel BANG! bez nutnosti mít kartu."
    ],
    "tags": [
      "legenda",
      "sid ketchum",
      "léčení",
      "bang zdarma"
    ],
    "image": "assets/cards/10_legendy/sid-ketchum-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Sid Ketchum (Side B). May discard any 1 card to regain 1 life point.",
    "timingEn": "Phase 2 after healing",
    "costEn": null,
    "rulingsEn": [
      "Nezáleží, jak se vyléčil (schopností, Pivem, Rumem, Saloonem).",
      "Získá bezplatný výstřel BANG! bez nutnosti mít kartu."
    ]
  },
  {
    "id": "legend-slab-the-killer",
    "name": "Legendární Slab the Killer",
    "nameEn": "Legendary Slab the Killer",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": null,
    "effect": "Vámi zahrané karty BANG! NELZE ZRUŠIT! Pokud si přivlastníte čin, smíte přinutit jinou legendu ztratit i POSLEDNÍ ŽIVOT!",
    "timing": "Při výstřelu BANG! a přivlastnění činu",
    "rulings": [
      "Jeho BANG! projde vždy (žádné Vedle! ani Barel nepomůže).",
      "Při přivlastnění činu může legendu zabít (ta se může zachránit pouze Pivem, pokud nezbývají 2 hráči)."
    ],
    "tags": [
      "legenda",
      "slab the killer",
      "nezrušitelný bang",
      "smrtící čin"
    ],
    "image": "assets/cards/10_legendy/slab-the-killer-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Slab the Killer (Side B). Targets must play 3 Missed! cards to cancel his BANG!.",
    "timingEn": "When firing BANG! and claiming a feat",
    "costEn": null,
    "rulingsEn": [
      "Jeho BANG! projde vždy (žádné Vedle! ani Barel nepomůže).",
      "Při přivlastnění činu může legendu zabít (ta se může zachránit pouze Pivem, pokud nezbývají 2 hráči)."
    ]
  },
  {
    "id": "legend-suzy-lafayette",
    "name": "Legendární Suzy Lafayette",
    "nameEn": "Legendary Suzy Lafayette",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Pokud máte v ruce MÉNĚ NEŽ 2 KARTY, doberte si okamžitě do 2 karet!",
    "timing": "Kdykoli má méně než 2 karty",
    "rulings": [
      "Má v ruce permanentně minimálně 2 karty!",
      "Kdykoli zahraje kartu a klesne na 1, okamžitě dobere zpět do 2."
    ],
    "tags": [
      "legenda",
      "suzy lafayette",
      "stále 2 karty",
      "nevyčerpatelná ruka"
    ],
    "image": "assets/cards/10_legendy/suzy-lafayette-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Suzy Lafayette (Side B). Whenever she has 1 or fewer cards in hand, draws 2 cards.",
    "timingEn": "Whenever having fewer than 2 cards",
    "costEn": null,
    "rulingsEn": [
      "Má v ruce permanentně minimálně 2 karty!",
      "Kdykoli zahraje kartu a klesne na 1, okamžitě dobere zpět do 2."
    ]
  },
  {
    "id": "legend-vulture-sam",
    "name": "Legendární Vulture Sam",
    "nameEn": "Legendary Vulture Sam",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je jiný hráč vyřazen, vezměte si všechny jeho karty. Pokud máte být vyřazeni vy sami: ZŮSTÁVÁTE VE HŘE SE 4 ŽIVOTY, ale otočte se zpět na běžnou verzi své postavy!",
    "timing": "Při vlastním vyřazení ze hry",
    "rulings": [
      "Znovuzrození / druhý život! Nezemře, ale obživne se 4 životy na straně A.",
      "Zůstává bez žetonů slávy a nemůže se stát znovu legendou."
    ],
    "tags": [
      "legenda",
      "vulture sam",
      "druhý život",
      "znovuzrození se 4 životy"
    ],
    "image": "assets/cards/10_legendy/vulture-sam-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Vulture Sam (Side B). When any player dies, takes all their cards and heals 2 lives.",
    "timingEn": "Upon own elimination from the game",
    "costEn": null,
    "rulingsEn": [
      "Znovuzrození / druhý life point(s)! Nezemře, ale obživne se 4 life point(s) na straně A.",
      "Zůstává bez fame token(s) a nemůže se stát znovu legendou."
    ]
  },
  {
    "id": "legend-willy-the-kid",
    "name": "Legendární Willy the Kid",
    "nameEn": "Legendary Willy the Kid",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "legend-character",
    "typeLabel": "Legendární postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": null,
    "effect": "Ve svém tahu může zahrát libovolný počet karet BANG!. Místo přivlastnění si činu může použít 1 efekt BANG! bez zahrání karty.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Může si vybrat: buď si přivlastní čin, NEBO použije bezplatný BANG!, ale ne obojí."
    ],
    "tags": [
      "legenda",
      "willy the kid",
      "neomezený bang",
      "bezplatný výstřel"
    ],
    "image": "assets/cards/10_legendy/willy-the-kid-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Legendary Character",
    "effectEn": "Legendary Willy the Kid (Side B). Unlimited BANG! cards; his BANG!s deal 2 damage.",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Může si vybrat: buď si přivlastní čin, NEBO použije bezplatný BANG!, ale ne obojí."
    ]
  },
  {
    "id": "feat-vlak-do-yoomy",
    "name": "Čin: Vlak do Yoomy",
    "nameEn": "Feat: 3:10 to Yuma",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Sejmutí",
    "effect": "Požadavek pro vykonání/přivlastnění: Musíte sejmout („Draw!“, i na začátku svého tahu na Vězení/Dynamit) nebo donutit sejmout jiného hráče.",
    "timing": "Při jakémkoli sejmutí",
    "rulings": [
      "Tento čin lze vykonat i sejmutím před začátkem 1. fáze (např. na Vězení, Dynamit či Bombu).",
      "Při vykonání položte 2 žetony slávy. Legenda si přivlastní a zraní jinou legendu."
    ],
    "tags": [
      "čin",
      "legendy",
      "sejmutí",
      "vlak do yoomy"
    ],
    "image": "assets/cards/10_legendy/3-15-to-yooma-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: 3:10 to Yuma. Accomplish: advance train 2 stations. Reward: 2 Fame tokens.",
    "timingEn": "During any draw check",
    "costEn": "Draw check",
    "rulingsEn": [
      "Tento čin lze vykonat i sejmutím před začátkem 1. fáze (např. na Vězení, Dynamit či Bombu).",
      "Při vykonání položte 2 fame token(s). Legenda si přivlastní a zraní jinou legendu."
    ]
  },
  {
    "id": "feat-pohranici",
    "name": "Čin: Pohraničí",
    "nameEn": "Feat: The Frontier",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Vyprázdnění ruky",
    "effect": "Požadavek: Musíte odhodit všechny své karty z ruky (tento požadavek lze splnit, i když nemáte v ruce žádné karty!).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Obsahuje symbol vývěsního štítu: můžete odhodit karty bez jejich obvyklého efektu.",
      "Suzy Lafayette smí tento čin vykonat dříve, než si díky své schopnosti dobere novou kartu!"
    ],
    "tags": [
      "čin",
      "legendy",
      "prázdná ruka",
      "pohraničí"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: The Frontier. Accomplish: eliminate a player. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Empty your hand",
    "rulingsEn": [
      "Obsahuje symbol vývěsního štítu: můžete odhodit karty bez jejich obvyklého efektu.",
      "Suzy Lafayette smí tento čin vykonat dříve, než si díky své schopnosti dobere novou kartu!"
    ]
  },
  {
    "id": "feat-dobra-spolecnost",
    "name": "Čin: Dobrá společnost",
    "nameEn": "Feat: Good Company",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Karty se stejným názvem",
    "effect": "Požadavek: Musíte odhodit kartu a poté zahrát kartu se stejným názvem (nebo naopak: zahrát a odhodit).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Obě karty musí být zahrány/odhozeny těsně po sobě.",
      "Běžná Calamity Janet může použít BANG! jako Vedle! a naopak.",
      "Legendární Calamity Janet může použít jakékoli 2 karty!"
    ],
    "tags": [
      "čin",
      "legendy",
      "dobrá společnost",
      "dvojice karet"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Good Company. Accomplish: have 3 cards in play. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Cards with the same name",
    "rulingsEn": [
      "Obě karty musí být zahrány/odhozeny těsně po sobě.",
      "Běžná Calamity Janet může použít BANG! jako Vedle! a naopak.",
      "Legendární Calamity Janet může použít jakékoli 2 karty!"
    ]
  },
  {
    "id": "feat-posledni-hrdina",
    "name": "Čin: Poslední hrdina",
    "nameEn": "Feat: The Last Hero",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození modré karty ze hry",
    "effect": "Požadavek: Musíte odhodit modrou kartu, která je vyložená ve hře.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Nelze vykonat odhozením karet Vězení nebo Dynamit před 1. fází tahu.",
      "Lze odhodit vlastní modrou kartu (např. zbraň, Mustang, Barel) nebo cizí kartou Cat Balou/Panika."
    ],
    "tags": [
      "čin",
      "legendy",
      "modrá karta",
      "poslední hrdina"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: The Last Hero. Accomplish: survive lethal damage with Beer. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 blue card from in play",
    "rulingsEn": [
      "Nelze vykonat odhozením karet Vězení nebo Dynamit před 1. fází tahu.",
      "Lze odhodit vlastní blue card(s) (např. zbraň, Mustang, Barel) nebo cizí Cat Balou card/Panika."
    ]
  },
  {
    "id": "feat-oregonska-stezka",
    "name": "Čin: Oregonská stezka",
    "nameEn": "Feat: Oregon Trail",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Dobrat o 1 kartu méně",
    "effect": "Požadavek: V 1. fázi svého tahu si nedobíráte první kartu (doberete si o 1 kartu méně).",
    "timing": "Fáze 1 vlastního tahu",
    "rulings": [
      "Ztrácíte schopnost týkající se první karty (jako Jesse Jones).",
      "Kit Carlson se podívá na 3 karty, ale dobere jen 1 a 2 vrátí.",
      "Legendární Black Jack si tento čin přivlastní automaticky!"
    ],
    "tags": [
      "čin",
      "legendy",
      "oregonská stezka",
      "fáze 1"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Oregon Trail. Accomplish: hold 5 cards in hand at turn end. Reward: 2 Fame tokens.",
    "timingEn": "Phase 1 of own turn",
    "costEn": "Draw 1 fewer card",
    "rulingsEn": [
      "Ztrácíte schopnost týkající se první karty (jako Jesse Jones).",
      "Kit Carlson se podívá na 3 karty, ale dobere jen 1 a 2 vrátí.",
      "Legendární Black Jack si tento čin přivlastní automaticky!"
    ]
  },
  {
    "id": "feat-zdeseny-vykrik",
    "name": "Čin: Zděšený výkřik",
    "nameEn": "Feat: Terrified Scream",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Vzdálenost 2+",
    "cost": "Zasáhnout na dálku",
    "effect": "Požadavek: Musíte zahrát kartu BANG! a zasáhnout hráče na vzdálenost alespoň 2.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Pokud má soused ve vzdálenosti 1 vyloženého Mustanga a vy ho zraníte, čin je splněn!",
      "Běžná Rose Doolan musí zasáhnout hráče ve vzdálenosti alespoň 2 od jejího pohledu."
    ],
    "tags": [
      "čin",
      "legendy",
      "dálkový zásah",
      "zděšený výkřik"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Terrified Scream. Accomplish: hit 2 players with BANG!s in 1 turn. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Hit at range",
    "rulingsEn": [
      "Pokud má soused ve vzdálenosti 1 vyloženého Mustanga a vy ho zraníte, čin je splněn!",
      "Běžná Rose Doolan musí zasáhnout hráče ve vzdálenosti alespoň 2 od jejího pohledu."
    ]
  },
  {
    "id": "feat-padesat-pistoli",
    "name": "Čin: Padesát pistolí",
    "nameEn": "Feat: Fifty Pistols",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Zbraň z ruky nebo ze hry",
    "effect": "Požadavek: Musíte získat nebo odhodit zbraň (z ruky nebo ze hry).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Lze splnit vyložením nové zbraně (nahrazením staré), odhozením zbraně Cat Balou, ukradením zbraně Panikou apod."
    ],
    "tags": [
      "čin",
      "legendy",
      "zbraně",
      "padesát pistolí"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Fifty Pistols. Accomplish: equip weapon Range 3+. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Weapon from hand or in play",
    "rulingsEn": [
      "Lze splnit vyložením nové zbraně (nahrazením staré), odhozením zbraně Cat Balou, ukradením zbraně Panikou apod."
    ]
  },
  {
    "id": "feat-hrdlo-lahve",
    "name": "Čin: Hrdlo lahve",
    "nameEn": "Feat: Bottleneck",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Odhození karty Pivo",
    "effect": "Požadavek: Musíte odhodit kartu Pivo z ruky (své nebo jiného hráče).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Obsahuje symbol vývěsního štítu: můžete odhodit Pivo z ruky dobrovolně bez jeho efektu, i když máte plné životy!"
    ],
    "tags": [
      "čin",
      "legendy",
      "pivo",
      "hrdlo lahve",
      "vývěsní štít"
    ],
    "image": "assets/cards/10_legendy/bottleneck-legend.webp",
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Bottleneck. Accomplish: discard Beer card voluntarily. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Discard 1 Beer card",
    "rulingsEn": [
      "Obsahuje symbol vývěsního štítu: můžete odhodit Pivo z ruky dobrovolně bez jeho efektu, i když máte plné life point(s)!"
    ]
  },
  {
    "id": "feat-banda-ze-stareho-zapadu",
    "name": "Čin: Banda ze starého Západu",
    "nameEn": "Feat: Old West Gang",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Zranit 2 hráče",
    "effect": "Požadavek: Musíte zranit alespoň 2 hráče během jednoho jediného tahu.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Lze splnit Kulometem, Indiány, více BANGy (Volcanic, Willy the Kid), nebo kombinací karet."
    ],
    "tags": [
      "čin",
      "legendy",
      "dvojité zranění",
      "banda"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Old West Gang. Accomplish: have 2 Fame tokens on feats. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Damage 2 players",
    "rulingsEn": [
      "Lze splnit Kulometem, Indiány, více BANGy (Volcanic, Willy the Kid), nebo kombinací karet."
    ]
  },
  {
    "id": "feat-bezejmenny-muz",
    "name": "Čin: Bezejmenný muž",
    "nameEn": "Feat: The Man with No Name",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Ztráta 1 života",
    "effect": "Požadavek: Musíte dobrovolně ztratit 1 život (nesmí jít o váš poslední život).",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Obsahuje symbol vývěsního štítu: můžete si odebrat život přímo."
    ],
    "tags": [
      "čin",
      "legendy",
      "obětování života",
      "bezejmenný muž"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: The Man with No Name. Accomplish: lose 1 life point voluntarily. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn",
    "costEn": "Loss of 1 life point",
    "rulingsEn": [
      "Obsahuje symbol vývěsního štítu: můžete si odebrat life point(s) přímo."
    ]
  },
  {
    "id": "feat-zranena-pycha",
    "name": "Čin: Zraněná pýcha",
    "nameEn": "Feat: Wounded Pride",
    "expansion": "legends",
    "expansionName": "Legendy",
    "type": "feat",
    "typeLabel": "Karta činu",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": "Zrušení BANG!",
    "effect": "Požadavek: Jiný hráč musí zrušit vaši kartu BANG! (např. kartou Vedle! nebo Barelem).",
    "timing": "Fáze 2 vlastního tahu při výstřelu",
    "rulings": [
      "Otočí neúspěšný útok ve velkolepý čin."
    ],
    "tags": [
      "čin",
      "legendy",
      "zrušený bang",
      "zraněná pýcha"
    ],
    "image": null,
    "expansionNameEn": "Legends",
    "typeLabelEn": "Feat Card (Legends)",
    "effectEn": "Feat: Wounded Pride. Accomplish: cancel an attack with Missed!. Reward: 2 Fame tokens.",
    "timingEn": "Phase 2 of own turn when shooting",
    "costEn": "Cancel a BANG!",
    "rulingsEn": [
      "Otočí neúspěšný útok ve velkolepý čin."
    ]
  },
  {
    "id": "char-johnny-kisch",
    "name": "Johnny Kisch",
    "nameEn": "Johnny Kisch",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "character",
    "typeLabel": "Bonusová postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli vyložíte kartu do hry, všechny ostatní karty ve hře se stejným názvem se okamžitě odhodí!",
    "timing": "Při vyložení karty do hry",
    "rulings": [
      "Vztahuje se na modré karty i vagony (např. zahraje Mustang -> všichni ostatní Mustangové ve hře se odhodí!).",
      "Může takto čistit soupeřovy Barely, zbraně i koně."
    ],
    "tags": [
      "postava",
      "bonus",
      "dynamite box",
      "čištění stolu",
      "johnny kisch"
    ],
    "image": "assets/cards/11_extra_karty/johnny-kisch.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he puts a card into play, all other players must discard 1 card with the same suit.",
    "timingEn": "When played into play",
    "costEn": null,
    "rulingsEn": [
      "Vztahuje se na blue card(s) i vagony (např. zahraje Mustang -> všichni ostatní Mustangové ve hře se odhodí!).",
      "Může takto čistit soupeřovy Barely, zbraně i koně."
    ]
  },
  {
    "id": "char-uncle-will",
    "name": "Uncle Will",
    "nameEn": "Uncle Will",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "character",
    "typeLabel": "Bonusová postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Jednou během svého tahu může zahrát jakoukoli kartu ze své ruky jako kartu Hokynářství (General Store).",
    "timing": "Fáze 2 vlastního tahu (1x za tah)",
    "rulings": [
      "Otočí tolik karet z balíčku, kolik je hráčů, a každý si postupně vezme 1."
    ],
    "tags": [
      "postava",
      "bonus",
      "hokynářství",
      "uncle will"
    ],
    "image": "assets/cards/11_extra_karty/uncle-will.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Character",
    "effectEn": "Once per turn, may play any card from his hand as a General Store.",
    "timingEn": "Phase 2 of own turn (once per turn)",
    "costEn": null,
    "rulingsEn": [
      "Otočí tolik karet z balíčku, kolik je hráčů, a každý si postupně vezme 1."
    ]
  },
  {
    "id": "char-claus-the-saint",
    "name": "Claus „The Saint“",
    "nameEn": "Claus The Saint",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "character",
    "typeLabel": "Bonusová postava",
    "copies": 1,
    "lives": 3,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "V 1. fázi svého tahu dobere tolik karet, kolik je živých hráčů plus jednu navíc. Dvě karty si nechá pro sebe a po jedné kartě rozdá každému ostatnímu hráči!",
    "timing": "Fáze 1 tahu",
    "rulings": [
      "Sám si vybere, komu jakou kartu přidělí (může spojencům dávat dobré karty a nepřátelům slabé).",
      "Vždy si nechá 2 nejlepší karty pro sebe."
    ],
    "tags": [
      "postava",
      "bonus",
      "rozdávání dárků",
      "claus the saint"
    ],
    "image": "assets/cards/11_extra_karty/claus-the-saint.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Character",
    "effectEn": "During Phase 1, draws cards equal to living players + 1, keeps 2, and distributes 1 to each other player.",
    "timingEn": "Phase 1 of turn",
    "costEn": null,
    "rulingsEn": [
      "Sám si vybere, komu jakou kartu přidělí (může spojencům dávat dobré karty a nepřátelům slabé).",
      "Vždy si nechá 2 nejlepší karty pro sebe."
    ]
  },
  {
    "id": "char-annie-versary",
    "name": "Annie Versary",
    "nameEn": "Annie Versary",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "character",
    "typeLabel": "Bonusová postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": "Dle zbraně",
    "cost": null,
    "effect": "Může použít jakoukoli kartu ze své ruky jako kartu BANG!.",
    "timing": "Fáze 2 vlastního tahu",
    "rulings": [
      "Zahrání podléhá běžnému limitu 1 BANG! za tah (pokud nemá Volcanic).",
      "Může střílet i kartami, které se jí jinak nehodí."
    ],
    "tags": [
      "postava",
      "bonus",
      "annie versary",
      "univerzální bang"
    ],
    "image": "assets/cards/11_extra_karty/annie-versary.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Character",
    "effectEn": "May use any card from hand as a BANG! card (does not count toward 1 BANG! limit).",
    "timingEn": "Phase 2 of own turn",
    "costEn": null,
    "rulingsEn": [
      "Zahrání podléhá běžnému limitu 1 BANG! za tah (pokud nemá Volcanic).",
      "Může střílet i kartami, které se jí jinak nehodí."
    ]
  },
  {
    "id": "char-emiliano",
    "name": "Emiliano",
    "nameEn": "Emiliano",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "character",
    "typeLabel": "Bonusová postava",
    "copies": 1,
    "lives": 4,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Kdykoli je vaše karta BANG! zrušena kartou Vedle!, vezměte si tuto soupeřovu kartu Vedle! do ruky! Kdykoli vy zrušíte cizí BANG! kartou Vedle!, vezměte si zrušenou kartu BANG! do ruky!",
    "timing": "Při zrušení BANG! kartou Vedle!",
    "rulings": [
      "Recykluje obranné i útočné karty přímo ze střetů.",
      "Pojmenován na počest autora hry Emiliana Sciarry."
    ],
    "tags": [
      "postava",
      "bonus",
      "emiliano",
      "recyklace",
      "krádež zrušených karet"
    ],
    "image": "assets/cards/11_extra_karty/emiliano.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Character",
    "effectEn": "Whenever he draws (check), if it is a number card (2–10), takes it into his hand.",
    "timingEn": "When BANG! is canceled by a Missed!",
    "costEn": null,
    "rulingsEn": [
      "Recykluje obranné i útočné karty přímo ze střetů.",
      "Pojmenován na počest autora hry Emiliana Sciarry."
    ]
  },
  {
    "id": "card-new-identity",
    "name": "Nová identita",
    "nameEn": "New Identity",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "brown",
    "typeLabel": "Bonusová karta (Dynamite Box)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Na začátku svého tahu se podívejte na kartu postavy, kterou používáte jako počítadlo životů na desce. Pokud chcete, můžete obě postavy prohodit a převzít její identitu! Nová postava začíná se 2 životy.",
    "timing": "Začátek vlastního tahu před 1. fází",
    "rulings": [
      "Umožňuje změnit svou identitu i schopnosti během hry.",
      "Restartuje životy na hodnotu 2."
    ],
    "tags": [
      "bonus",
      "nová identita",
      "změna postavy",
      "dynamite box"
    ],
    "image": "assets/cards/11_extra_karty/new-identity.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Swap your character card for a new random character from the box with full lives.",
    "timingEn": "Start of own turn before Phase 1",
    "costEn": null,
    "rulingsEn": [
      "Umožňuje změnit svou identitu i schopnosti během hry.",
      "Restartuje life point(s) na hodnotu 2."
    ]
  },
  {
    "id": "card-handcuffs",
    "name": "Želízka",
    "nameEn": "Handcuffs",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "brown",
    "typeLabel": "Bonusová karta (Dynamite Box)",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": null,
    "cost": null,
    "effect": "Po dobrání karet v 1. fázi svého tahu určete jednu karetní barvu (♠, ♥, ♦, ♣). V tomto celém tahu smíte hrát pouze karty této vybrané barvy!",
    "timing": "Fáze 1 po dobrání karet",
    "rulings": [
      "Omezuje hraní na jediný karetní symbol pro daný tah."
    ],
    "tags": [
      "bonus",
      "želízka",
      "omezení barev",
      "dynamite box"
    ],
    "image": "assets/cards/11_extra_karty/handcuffs.webp",
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Brown Card (Immediate)",
    "effectEn": "Brown card. Target player cannot play cards of a chosen suit until their next turn.",
    "timingEn": "Phase 1 after drawing cards",
    "costEn": null,
    "rulingsEn": [
      "Omezuje hraní na jediný karetní symbol pro daný tah."
    ]
  },
  {
    "id": "token-wooden-dynamite",
    "name": "Dřevěný dynamit (Varianta Dynamite Box)",
    "nameEn": "Wooden Stick of Dynamite",
    "expansion": "dynamite-box",
    "expansionName": "Dynamite Box / Promo",
    "type": "blue",
    "typeLabel": "Speciální herní prvek",
    "copies": 1,
    "suit": null,
    "values": null,
    "range": "Před hráčem",
    "cost": null,
    "effect": "Na začátku hry má dřevěnou patronu Šerif. Kdykoli ve svém tahu zraníte jiného hráče kartou BANG!, vezměte si dřevěnou patronu k sobě! Kdo dobere nebo sejme kartu Dynamitu, musí ji vyložit před držitele patrony a dobere si náhradní kartu!",
    "timing": "Po celou hru",
    "rulings": [
      "Karta Dynamitu se nepovažuje za dobranou/sejmutou a hráč si ihned lízne náhradní kartu.",
      "Když Dynamit vybuchne nebo je vyřazen, zamíchá se zpět do dobíracího balíčku."
    ],
    "tags": [
      "varianta",
      "dřevěný dynamit",
      "dynamite box",
      "dynamite patrona"
    ],
    "image": null,
    "expansionNameEn": "Dynamite Box & Promo",
    "typeLabelEn": "Blue Card (In Play)",
    "effectEn": "Blue card. Wooden Dynamite marker: passes left; explodes on ♠ 2–9 for 3 damage.",
    "timingEn": "Throughout the game",
    "costEn": null,
    "rulingsEn": [
      "Karta Dynamitu se nepovažuje za dobranou/sejmutou a hráč si ihned lízne náhradní kartu.",
      "Když Dynamit vybuchne nebo je vyřazen, zamíchá se zpět do draw deck."
    ]
  }
];
