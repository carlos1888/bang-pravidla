# -*- coding: utf-8 -*-

FAQ_ENTRIES = [
    {
        "id": "faq-01",
        "question": "Slab the Killer vystřelí BANG!. Hráč má Barel a Bednu. Kolik obran potřebuje?",
        "tags": ["slab-the-killer", "barel", "bedna", "obrana", "vedle"],
        "category": "Boj a obrana",
        "answer": """**Řešení:**
Ke zrušení karty BANG! zahrané Slabem the Killerem jsou zapotřebí **2 efekty Vedle!**.
* Úspěšné sejmutí na Barel (otočení srdce ♥) poskytne **1 efekt Vedle!**.
* Utracení 2 žetonů nabití z karty Bedna poskytne **1 efekt Vedle!**.
* Hráč tedy může zkombinovat úspěšný Barel + Bednu a Slabův útok úspěšně odvrátit!
* Pokud by Barel neuspěl, musí hráč zahrát 2 karty Vedle! z ruky (nebo Bednu + 1 Vedle!)."""
    },
    {
        "id": "faq-02",
        "question": "Slab the Killer zahraje Kulomet nebo Křesadlovku. Kolik Vedle! je potřeba na obranu?",
        "tags": ["slab-the-killer", "kulomet", "křesadlovka", "vedle"],
        "category": "Boj a obrana",
        "answer": """**Řešení:**
K obraně stačí **pouze 1 efekt Vedle!**!
* Schopnost Slab the Killera výslovně uvádí: *„Hráč, jenž chce zrušit vaši KARTU BANG!, musí použít 2 efekty Vedle!“*.
* Karty *Kulomet*, *Křesadlovka*, *Rychlopalba*, *Houfnice* či *Derringer* vyvolávají efekt BANG!, ale **NEJSOU kartou BANG!**.
* Proto se na ně Slabova schopnost nevztahuje a každému cíli stačí k odvrácení zásahu pouze 1 běžný efekt Vedle! (nebo úspěšné sejmutí na Barel)."""
    },
    {
        "id": "faq-03",
        "question": "Belle Star je na tahu. Jaké karty soupeřů její schopnost vypíná?",
        "tags": ["belle-star", "vyložené-karty", "oranžové", "zelené", "zbraně"],
        "category": "Schopnosti postav",
        "answer": """**Řešení:**
Během tahu Belle Star **nemají žádný efekt jakékoli karty vyložené před ostatními hráči**:
* Vypíná soupeřovy **Barely** (soupeři nemohou snímat na Barel).
* Vypíná soupeřovy **Mustangy**, **Skrýše** i **Plošinové vozy** (Belle Star vidí všechny v základní vzdálenosti).
* Vypíná soupeřovy **zelené karty** (nemohou odhodit Sombrero ani Železný plát).
* Vypíná soupeřovy **oranžové karty** z Ozbrojení a nebezpeční (Bedna nelze použít, Nebezpečné zbraně soupeřů nemají dostřel ani speciální efekty).
* *Pozor:* Černé karty vybavení ze Zlaté horečky (např. Boty, Batoh) mají zvláštní status nezničitelného vybavení a pravidla uvádí, že na ně běžné schopnosti rušící modré karty nepůsobí."""
    },
    {
        "id": "faq-04",
        "question": "Apache Kid čelí kartě Duel nebo kartě BANG! v Duelu. Kdy funguje jeho imunita?",
        "tags": ["apache-kid", "duel", "káry", "imunita"],
        "category": "Karetní barvy a symboly",
        "answer": """**Řešení:**
* **Zahrání Duelu:** Pokud chce protihráč zahrát na Apache Kida kartu *Duel*, která je kárová (♦), Apache Kid je proti ní **zcela imunní** – kárový Duel na něj vůbec nelze zahrát!
* **Průběh Duelu:** Pokud byl Duel zahraný nekárovou kartou (♠, ♣) a souboj začal, **v průběhu vyhodnocování Duelu schopnost Apache Kida nefunguje**! Pokud jeho soupeř odhazuje kárové karty BANG!, Apache Kid na ně musí normálně reagovat odhozením BANG! ze své ruky, jinak ztratí život."""
    },
    {
        "id": "faq-05",
        "question": "Suzy Lafayette zahraje svou poslední kartu. Kdy přesně si dobere novou kartu?",
        "tags": ["suzy-lafayette", "prázdná-ruka", "timing", "duel", "pohraničí"],
        "category": "Časová posloupnost",
        "answer": """**Řešení:**
Schopnost Suzy Lafayette se aktivuje **okamžitě vteřinu poté, co v ruce nemá žádnou kartu**:
* **Běžné hraní:** Pokud zahraje BANG!, odhodí ho a ihned líže novou kartu z balíčku. Tuto novou kartu může ve svém tahu okamžitě zahrát!
* **Čin Pohraničí (Legendy):** Požaduje odhodit celou ruku. Suzy může tento čin potvrdit a vykonat **dříve**, než dobere kartu, protože podmínka prázdné ruky byla splněna.
* **Výjimka – DUEL:** Během Duelu se schopnost Suzy pozastavuje! Pokud odhodí svou poslední kartu BANG! a soupeř rovněž odhodí BANG!, Suzy prohrává souboj a ztrácí život. Teprve po úplném skončení Duelu si dobere kartu."""
    },
    {
        "id": "faq-06",
        "question": "El Gringo je zraněn. Ze kterých zdrojů si bere kartu a ze kterých NE?",
        "tags": ["el-gringo", "zranění", "krádež", "dynamit", "bomba", "legendy"],
        "category": "Zranění a léčení",
        "answer": """**Řešení:**
El Gringo si bere 1 kartu náhodně z ruky hráče, který mu zranění způsobil (za každý ztracený život).
* **KARTU SI BERE:**
  * Při zásahu kartou BANG!, Kulometem, Indiány!, Šípem od jiného hráče.
  * **Při přivlastnění činu Legendou (Legendy):** Pravidla Legend výslovně stanoví, že El Gringo si vezme kartu z ruky hráče, který si čin přivlastnil!
* **KARTU SI NEBERE:**
  * Při výbuchu **Dynamitu** (zranění není způsobeno žádným hráčem).
  * Při výbuchu **Bomby** (zranění není způsobeno žádným hráčem).
  * Při zásahu z lokomotivy **Ironhorse** na konečné stanici.
  * Pokud prohraje Duel, který sám vyvolal.
  * Pokud útočník nemá žádné karty v ruce."""
    },
    {
        "id": "faq-07",
        "question": "Jaké je přesné pořadí vyhodnocení před 1. fází tahu (Dynamit, Vězení, Bomba, Chřestýš)?",
        "tags": ["pořadí-vyhodnocení", "dynamit", "vězení", "bomba", "chřestýš", "časování"],
        "category": "Časová posloupnost",
        "answer": """**Řešení:**
Pokud má hráč před sebou vyloženo více časovaných karet současně, vyhodnocují se v tomto **přísném oficiálním pořadí**:
1. **DYNAMIT:** Snímá se jako první (♠ 2-9 = výbuch za 3 životy; jinak posun vlevo).
2. **VĚZENÍ:** Snímá se jako druhé (srdce ♥ = útěk; jinak přeskočení celého tahu!). *Alternativa Legend:* hráč může odhodit 1 srdcovou kartu z ruky a odehrát tah bez snímání.
3. **BOMBA:** Snímá se po Vězení (♥/♦ posun dál; ♣/♠ úbytek 2 žetonů).
4. **CHŘESTÝŠ:** Snímá se jako poslední (♠ = ztráta 1 života).
* **ZÁSADNÍ PRAVIDLO:** Pokud hráč neuspěje ve Vězení a přijde o svůj tah, **na Chřestýše si v tomto tahu již nesnímá**!"""
    },
    {
        "id": "faq-08",
        "question": "Vulture Sam vs Stínoví pistolníci vs Vagon duchů vs Vybavení ze Zlaté horečky. Co Sam získá?",
        "tags": ["vulture-sam", "stínoví-pistolníci", "vagon-duchů", "zlatá-horečka", "krádež-karet"],
        "category": "Vyřazení ze hry",
        "answer": """**Řešení:**
Když hráč zemře, Vulture Sam standardně bere všechny jeho karty z ruky i ze stolu:
* **Vagony (Velká vlaková loupež):** Vulture Sam si vezme všechny vagony zabitého hráče a **ihned je vyloží před sebe do hry** (pokud je Šerif a získá Vagon duchů, musí ho dát jinému hráči).
* **Černé vybavení (Zlatá horečka):** Vulture Sam **NEMŮŽE získat karty vybavení**! Ty se po smrti hráče odkládají lícem nahoru dospod balíčku vybavení.
* **Stínoví pistolníci (Zlatá horečka):** Když stínový pistolník na konci svého tahu odchází a odhazuje karty, **nepovažuje se to za zabití** – Vulture Sam jeho odhozené karty NEZÍSKÁVÁ!
* **Vagon duchů:** Hráč chráněný Vagonem duchů neumírá. Pokud však o Vagon duchů přijde (odhozením), okamžitě vypadává, ale za jeho smrt se neaktivuje Vulture Sam ani odměny za Banditu."""
    },
    {
        "id": "faq-09",
        "question": "Jak funguje karta Pivo, když ve hře zbývají poslední 2 hráči?",
        "tags": ["pivo", "poslední-dva-hráči", "léčení", "zlatá-horečka", "poslední-volání"],
        "category": "Zranění a léčení",
        "answer": """**Řešení:**
Jakmile ve hře zůstanou **pouze 2 hráči** (např. Šerif a poslední Bandita, nebo Šerif a Odpadlík):
* **Karta Pivo:** Ztrácí veškerý léčivý účinek. Zahráním karty Pivo si hráč **nemůže přidat žádný život** (ani ve svém tahu, ani při smrtelném zásahu!).
* **Výjimka – Zlatá horečka:** Ve Zlaté horečce může hráč zahrát kartu Pivo ve svém tahu za účelem **zisku 1 valounu zlata**! Tento zisk zlata funguje normálně i ve dvou hráčích.
* **Výjimka – Poslední volání (Údolí stínů):** Karta *Poslední volání* má výslovně uvedeno, že **léčí 1 život i ve dvou hráčích**!
* **Ostatní léčivé karty:** *Saloon*, *Tequila*, *Čutora*, *Bečka piva* fungují i ve 2 hráčích normálně."""
    },
    {
        "id": "faq-10",
        "question": "Šerif osobně zabije svého Pomocníka (Vice), který měl vyloženou kartu Wanted. Co se stane?",
        "tags": ["šerif", "trest", "pomocník", "wanted", "odhození-karet"],
        "category": "Vyřazení ze hry",
        "answer": """**Řešení:**
Podle oficiálních pravidel Zlaté horečky (str. 22):
1. Šerif nejprve **vyhodnotí odměnu z karty Wanted**: dobere si 2 karty z balíčku a vezme si 1 valoun zlata ze zásoby!
2. Ihned poté se aplikuje trest za zabití Pomocníka (Vice): Šerif musí **odhodit všechny karty, které má v ruce i ve hře před sebou** (včetně právě dobraných 2 karet a všech zbraní).
3. **Valouny zlata si však Šerif ponechává!** Trest odhození se vztahuje pouze na karty, nikoli na valouny zlata."""
    },
    {
        "id": "faq-11",
        "question": "Lokomotiva Ironhorse dorazí na konečnou. Kdo se jak brání a kdo vyhraje při zabití všech?",
        "tags": ["ironhorse", "vlak", "konečná", "opětovaná-palba", "vítězství-banditů"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
Když Ironhorse přejede za poslední stanici:
* **Každý hráč u stolu** (včetně hráče, který konečnou spustil) se stává cílem efektu BANG!.
* Každý se brání samostatně (kartou Vedle!, Barelem, Bednou).
* **Karta Opětovaná palba:** Lze použít jako Vedle!, ale útok nelze vrátit na vlak (lokomotiva není hráč).
* **Karta K zemi!:** Zruší útok, ale nevezme si žádnou kartu do ruky (žádná karta nebyla zahrána).
* **Všichni hráči zemřou současně:** Pokud tento hromadný výstřel zabije všechny zbývající hráče včetně Šerifa, **VÍTĚZÍ BANDITÉ**! (Dosáhli svého cíle zničit Šerifa i za cenu vlastních životů)."""
    },
    {
        "id": "faq-12",
        "question": "Legendární Jourdonnais vs Indiáni! vs Kulomet vs Cat Balou. Jak funguje jeho imunita?",
        "tags": ["legendy", "jourdonnais", "hnědé-karty", "imunita", "sejmutí"],
        "category": "Legendy",
        "answer": """**Řešení:**
Legendární Jourdonnais (strana B) má schopnost: *„Pokud jsi cílem hnědé karty, můžeš sejmout. J, Q, K, A = ignoruj tuto kartu!“*.
* **Cat Balou, Panika!:** Je jejich cílem -> sejme. Otočí-li 10, J, Q, K, A, karta na něj vůbec neplatí a soupeř o ni přišel!
* **Indiáni!:** Je hnědá karta a cílí i na něj -> Jourdonnais může sejmout. Pokud otočí figuru či eso, Indiáni na něj nepůsobí a nemusí odhazovat BANG!!
* **Kulomet:** Je hnědá karta -> Jourdonnais snímá. Při úspěchu ignoruje výstřel. Pokud neuspěje, má stále svůj základní Barel a případně Vedle! v ruce!"""
    },
    {
        "id": "faq-13",
        "question": "Legendární Slab the Killer si přivlastní čin. Může zabít hráče na poslední život?",
        "tags": ["legendy", "slab-the-killer", "přivlastnění-činu", "smrtící-čin", "pivo"],
        "category": "Legendy",
        "answer": """**Řešení:**
* Běžné pravidlo pro přivlastnění činu u Legend zní: *„Můžete jiné legendě způsobit ztrátu 1 života (nesmí se však jednat o poslední život)“*.
* **VÝJÍMKA SLABA:** Legendární Slab the Killer má na kartě výslovně uvedeno: *„Pokud si přivlastníš čin, smíš přinutit hráče ztratit i poslední život!“*.
* Pokud si Slab přivlastní čin a zacílí hráče s 1 životem, tento hráč může přežít **POUZE tehdy, pokud ihned zahraje kartu Pivo** (nebo Batoh ze Zlaté horečky). Pokud ve hře zbývají poslední 2 hráči, Pivo neléčí a cíl okamžitě padne!"""
    },
    {
        "id": "faq-14",
        "question": "Legendární Vulture Sam má být vyřazen ze hry. Jak funguje jeho druhý život?",
        "tags": ["legendy", "vulture-sam", "druhý-život", "znovuzrození"],
        "category": "Legendy",
        "answer": """**Řešení:**
Podle oficiálních pravidel Legend (str. 9):
* Ve chvíli, kdy má být Legendární Vulture Sam vyřazen ze hry (jeho životy klesnou na 0 a nezachrání se Pivem):
  1. Sam **NEVYPADÁVÁ ZE HRY**!
  2. Otočí svou kartu postavy zpět na **běžnou verzi (strana A)**.
  3. Okamžitě si nastaví své životy na **4 životy**!
  4. Zůstává ve hře bez žetonů slávy. Protože už žetony nemá, **nemůže se v této hře stát legendou podruhé**.
  5. Pokud je Šerifem, nezískává bonusový 5. život za roli (zůstává na 4 životech)."""
    },
    {
        "id": "faq-15",
        "question": "Co se stane, když karta Rez vezme z Bomby její poslední žetony nabití?",
        "tags": ["bomba", "rez", "exploze", "žetony-nabití", "časování"],
        "category": "Ozbrojení a nebezpeční",
        "answer": """**Řešení:**
Pravidla karty Bomba (str. 25 a 32 pravidel Dynamite Boxu) jasně stanoví:
* *„Bomba exploduje, když žetony nabití dojdou, například v důsledku efektu karty Rez!“*
* Pokud hráč zahraje kartu *Rez* a tím odebere z Bomby její poslední 1 nebo 2 žetony, **BOMBA OKAMŽITĚ EXPLODUJE**!
* Hráč, před kterým Bomba v danou chvíli leží, ji musí odhodit a **okamžitě ztrácí 2 životy**!
* (Naopak pokud je Bomba ukradena Panikou nebo zničena Cat Balou, žetony se vrátí do zásoby a Bomba neexploduje)."""
    },
    {
        "id": "faq-16",
        "question": "Může se hráč ve Vězení chlubit činem v Legendách?",
        "tags": ["legendy", "vězení", "chlubení-se-činem", "konec-tahu"],
        "category": "Legendy",
        "answer": """**Řešení:**
**ANO, zcela výslovně!**
Oficiální pravidla Legend (str. 4) doslova říkají:
* *„Jestliže během svého tahu nevykonáte žádný čin, můžete se místo toho na konci svého tahu (dokonce i když jste ve Vězení) jedním činem chlubit!“*
* I když jste tedy neuspěli v sejmutí na Vězení a museli přeskočit fáze 1, 2 i 3, na konci tahu vyložíte nový čin, případně odhodíte přeplněný čin a **umístíte 1 svůj žeton slávy**! Vězení vám v chlubení nijak nebrání."""
    },
    {
        "id": "faq-17",
        "question": "Může si hráč vzít kartu vagonu do ruky pomocí Paniky nebo Rag Time?",
        "tags": ["vlak", "vagony", "panika", "rag-time", "krádež-vagonu"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**NE, vagon se nikdy nesmí ocitnout v ruce!**
Oficiální pravidla Velké vlakové loupeže (str. 28 a 36):
* *„S vagony se zachází jako s kartami ve hře a platí pro ně stejná pravidla jako pro modré karty... Vagon si však není možné nikdy vzít do ruky; kdykoli byste tak měli v důsledku nějakého efektu učinit, vyložte ho místo toho hned zpátky do hry před sebe.“*
* Pokud tedy na cizí vagon zahrajete *Paniku!*, nevezmete si kartu do ruky, ale **ihned ji vyložíte před sebe na stůl** a stáváte se jejím novým vlastníkem!"""
    },
    {
        "id": "faq-18",
        "question": "Karta Zlatá horečka (nákup za 5 valounů zlata). Kdy přesně se doplní životy a jak se hraje bonusový tah?",
        "tags": ["zlatá-horečka", "vybavení-5-zlata", "plné-životy", "extra-tah"],
        "category": "Zlatá horečka",
        "answer": """**Řešení:**
Karta vybavení *Zlatá horečka* (cena 5 valounů zlata):
1. Zaplatíte 5 valounů ze své zásoby do banku.
2. Váš stávající tah **okamžitě končí** – nedochází ke 3. fázi odhazování karet (nemusíte odhazovat žádné přebytečné karty z ruky!).
3. **Okamžitě si doplňte všechny životy na maximum** (vezměte si náboje do plného počtu své postavy).
4. **Ihned začíná váš nový kompletní tah:** vyhodnotíte případné efekty před tahem, doberete 2 karty ve Fázi 1 a hrajete nový tah s plným zdravím a plnou rukou!"""
    },
    {
        "id": "faq-19",
        "question": "Může Šerif získat Vagon duchů nebo Vězení pomocí karty Výhybka?",
        "tags": ["šerif", "vagon-duchů", "vězení", "výhybka", "zákaz-pro-šerifa"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**NE, Šerif to má striktně zakázáno!**
Pravidla karty Výhybka (str. 31 i 38):
* *„Jako Šerif nemůžete vyměnit Vagon duchů ani kartu Vězení.“*
* Šerif nesmí být nikdy uvězněn a nesmí se stát duchem přes Vagon duchů. Pokud by měl Šerif Vagon duchů získat z balíčku (např. přes Salonní vůz), musí jej předat jinému hráči."""
    },
    {
        "id": "faq-20",
        "question": "Jak funguje nové pravidlo pro 1 život zavedené v Legendách ve 3. fázi tahu?",
        "tags": ["legendy", "změna-pravidel", "jeden-život", "limit-karet-2"],
        "category": "Legendy",
        "answer": """**Řešení:**
V pravidlech rozšíření Legendy (str. 11) je oficiální změna základních pravidel hry:
* **„Pokud hráči zbývá pouze 1 život, ve 3. fázi svého tahu si může ponechat 2 karty (místo obvyklé 1).“**
* Toto pravidlo dává těžce zraněným hráčům šanci na přežití – i s posledním životem si mohou v ruce nechat např. 1 Vedle! a 1 Pivo pro obranu mimo svůj tah."""
    },
    {
        "id": "faq-21",
        "question": "Mohou být současně aktivní události z High Noon i z Divokého západu (Wild West Show)?",
        "tags": ["události", "high-noon", "wild-west-show", "kombinace-událostí"],
        "category": "Globální události",
        "answer": """**Řešení:**
**ANO, zcela běžně!**
* Balíček událostí *High Noon / Fistful* leží u Šerifa a otáčí se na začátku každého kola v tahu Šerifa.
* Balíček *Divokého západu* leží uprostřed stolu a otáčí se POUZE tehdy, když kdokoli zahraje kartu *Dostavník* nebo *Wells Fargo*.
* Na stole tak mohou ležet **dvě aktivní karty událostí současně**!
* Obě karty platí zároveň. Pokud by vznikl přímý rozpor v mechanice, přednost má specifické pravidlo karty z Divokého západu."""
    },
    {
        "id": "faq-22",
        "question": "Jak přesně funguje Stínový odpadlík při určování týmu v každém svém tahu?",
        "tags": ["stínový-odpadlík", "zlatá-horečka", "určení-týmu", "remíza"],
        "category": "Zlatá horečka",
        "answer": """**Řešení:**
Když se Odpadlík stane Stínovým odpadlíkem:
1. Na začátku každého svého tahu spočítá **všechny ostatní odhalené role na stole** (odhalenou roli Šerifa a role všech již vyřazených hráčů; svou vlastní kartu role nepočítá).
2. Spočítá strážce zákona (Šerif + vyřazení Pomocníci) vs bandity (vyřazení Bandité).
3. **Stínový odpadlík se přidá k té straně, která má VÍCE odhalených karet rolí!**
4. **V případě SHODY (např. 1 Šerif vs 1 Bandita) se VŽDY přidává na stranu BANDITŮ!**
5. Otočí svou kartu příslušnou stranou nahoru a po celý tento tah hraje za tento tým a může s ním zvítězit."""
    },
    {
        "id": "faq-23",
        "question": "Zvonice vs Mustang vs Plošinový vůz. Jak se spočítá vzdálenost?",
        "tags": ["zvonice", "mustang", "plošinový-vůz", "vzdálenost", "timing"],
        "category": "Vzdálenost a dostřel",
        "answer": """**Řešení:**
* Karta *Zvonice* za zaplacení 1 žetonu nabití říká: *„Pro následující zahranou kartu vidíte všechny ostatní hráče ve vzdálenosti 1.“*
* Tento efekt **přebíjí veškeré modifikátory vzdálenosti**! Bez ohledu na to, zda má cíl Mustanga, Skrýš, zda je na něm vyložen Plošinový vůz nebo zda jste vy pod vlivem jiné karty, pro vaši příští zahranou kartu je cíl ve vzdálenosti 1.
* Můžete tak s obyčejným Coltem .45 vystřelit BANG! nebo zahrát Paniku! na kohokoli u stolu!"""
    },
    {
        "id": "faq-24",
        "question": "Frankie Canton vezme poslední žeton nabití ze soupeřovy Nebezpečné karty. Co se stane?",
        "tags": ["frankie-canton", "krádež-žetonu", "vyčerpání-karty", "odhození"],
        "category": "Ozbrojení a nebezpeční",
        "answer": """**Řešení:**
Pravidla Ozbrojení a nebezpeční (str. 23 a 31):
* *„Pokud si z Nebezpečné karty vezmete poslední žeton nabití, karta je vyčerpána a musí být okamžitě odhozena!“*
* Frankie Canton tak může soupeři přímo **zničit vyloženou nebezpečnou zbraň či vybavení** (např. Dvouhlavňovku, Bič, Bednu) tím, že z ní vysaje poslední žeton nabití!"""
    },
    {
        "id": "faq-25",
        "question": "Johnny Kisch vyloží modrou kartu nebo vagon. Které karty se odhodí?",
        "tags": ["johnny-kisch", "dynamite-box", "stejné-karty", "čištění-stolu"],
        "category": "Bonusové postavy",
        "answer": """**Řešení:**
Schopnost Johnnyho Kische (str. 13 pravidel Dynamite Boxu):
* *„Kdykoli vyložíte kartu do hry, všechny ostatní karty ve hře se stejným názvem se odhodí.“*
* Pokud Johnny vyloží *Mustanga*, všichni ostatní Mustangové na stole se ihned odhodí.
* Pokud vyloží zbraň *Schofield*, všichni ostatní hráči se Schofieldem o něj přijdou.
* Platí to i pro vagony z Vlakové loupeže vyložené před hráči!
* *Pozor:* Nevztahuje se na černé vybavení ze Zlaté horečky (to lze zničit jen zaplacením ceny + 1 valoun)."""
    }
]

print(f"FAQ entries compiled: {len(FAQ_ENTRIES)} entries.")

FAQ_ENTRIES_EXTRA = [
    {
        "id": "faq-26",
        "question": "Don Bell je na konci tahu. Kdy NESMÍ snímat na získání dalšího tahu?",
        "tags": ["don-bell", "extra-tah", "zlatá-horečka", "vězení", "město-duchů"],
        "category": "Zlatá horečka",
        "answer": """**Řešení:**
Don Bell nesnímá na další tah v těchto situacích:
1. **Během svého extra tahu:** Po úspěšném sejmutí a odehrání extra tahu již znovu na konci tohoto tahu nesnímá (nemůže řetězit tahy donekonečna).
2. **Když je Stínovým pistolníkem:** Jako duch s nulou životů tuto schopnost nemá.
3. **Když neuspěl ve Vězení:** Pokud přeskočil svůj tah kvůli Vězení, na konci tahu nesnímá.
4. **Při události Město duchů (High Noon):** Schopnost je po dobu trvání této události neaktivní."""
    },
    {
        "id": "faq-27",
        "question": "Evan Babbit je cílem BANG!. Může přesměrovat výstřel na střelce nebo z lokomotivy?",
        "tags": ["evan-babbit", "přesměrování", "ironhorse", "střelec"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
* **Na původního střelce:** **NE!** Pravidla výslovně uvádí: *„Nemůžete si zvolit toho, kdo na vás daný BANG! zahrál (i kdybyste zbývali jako jediní 2 hráči).“*
* **Z lokomotivy Ironhorse:** **NE!** Schopnost Evana Babbita vyžaduje odhodit kartu *stejné barvy jako karta BANG!, jejímž jste cílem*. Protože útok Ironhorse nevznikl zahráním žádné karty, Evan nemá jakou barvu dorovnat a schopnost nelze použít."""
    },
    {
        "id": "faq-28",
        "question": "Uncle Will zahraje kartu jako Hokynářství a u stolu je Sgt. Blaze. Jak se to vyhodnotí?",
        "tags": ["uncle-will", "hokynářství", "sgt-blaze", "dynamite-box"],
        "category": "Bonusové postavy",
        "answer": """**Řešení:**
* Uncle Will zahraje libovolnou kartu z ruky jako kartu *Hokynářství*.
* Pokud je u stolu Sgt. Blaze a zahraje Hokynářství sám, otočí o 1 kartu méně a 1 hráče vyjme.
* Pokud Hokynářství zahraje Uncle Will, Sgt. Blaze nemůže zasahovat do jeho volby (Blazeova schopnost se uplatní pouze tehdy, když Blaze sám kartu či efekt zahraje). Všichni hráči si tedy postupně rozeberou karty."""
    },
    {
        "id": "faq-29",
        "question": "Emiliano vs Slab the Killer vs Annie Versary. Jak funguje krádež karet u Emiliana?",
        "tags": ["emiliano", "slab-the-killer", "annie-versary", "vedle", "recyklace"],
        "category": "Bonusové postavy",
        "answer": """**Řešení:**
* Pokud Emiliano vystřelí BANG! na Slab the Killera a Slab se neubrání, nic se neděje.
* Pokud Emiliano vystřelí na kohokoli a cíl zahraje *Vedle!*, **Emiliano si toto zahrané Vedle! vezme ihned do ruky**!
* Pokud někdo vystřelí na Emiliana (např. Annie Versary promění jakoukoli kartu v BANG!) a Emiliano zahraje Vedle!, **Emiliano si vezme útočníkovu zrušenou kartu do své ruky**!
* *Pozor:* Proti Slab the Killerovi potřebuje Emiliano 2 Vedle! – pokud obě zahraje a zruší Slabův útok, vezme si Slabovu kartu BANG! do ruky."""
    },
    {
        "id": "faq-30",
        "question": "Slečna Zuzana (Wild West Show): Hráč nezahraje 3 karty ve svém tahu. Kdy ztrácí život?",
        "tags": ["slečna-zuzana", "wild-west-show", "3-karty", "ztráta-života"],
        "category": "Globální události",
        "answer": """**Řešení:**
* Během události *Slečna Zuzana* musí každý hráč ve svém tahu zahrát **alespoň 3 karty**.
* Pokud hráč ve svém tahu zahraje méně než 3 karty (např. jen 1 nebo 2), **na konci svého tahu okamžitě ztrácí 1 život**!
* *Výjimka:* Hráči, kteří museli přeskočit svůj tah kvůli neúspěšnému sejmutí na Vězení, život neztrácejí."""
    },
    {
        "id": "faq-31",
        "question": "Roubík (Wild West Show): Hráč promluví mimo svůj tah. Kdy ztrácí život a může se zachránit?",
        "tags": ["roubík", "wild-west-show", "zákaz-mluvení", "ztráta-života"],
        "category": "Globální události",
        "answer": """**Řešení:**
* Karta *Roubík* zakazuje hráčům mluvit po celou dobu trvání události (smí jen gestikulovat a hekat).
* Jakmile kterýkoli hráč promluví (i mimo svůj tah), **okamžitě ztrácí 1 život**!
* Pokud by tímto měl ztratit svůj poslední život, může se zachránit okamžitým zahráním karty *Pivo* (pokud nezbývají 2 hráči)."""
    },
    {
        "id": "faq-32",
        "question": "Batoh (Zlatá horečka) vs Smrtící zranění Dynamitem za 3 životy. Jak přesně zachránit život?",
        "tags": ["batoh", "dynamit", "smrtící-zranění", "valouny-zlata"],
        "category": "Zlatá horečka",
        "answer": """**Řešení:**
* Hráč má 2 životy a vybuchne mu Dynamit (ztráta 3 životů -> stav -1 život).
* K přežití potřebuje mít na konci vyhodnocení alespoň 1 život (tedy vyléčit 2 životy).
* Vybavení *Batoh* stojí 2 valouny zlata za 1 život a lze ho použít i mimo svůj tah při smrtelném zranění.
* Má-li hráč **4 valouny zlata**, může zaplatit 2x 2 valouny zlata a **vyléčit si 2 životy najednou**, čímž zůstane naživu s 1 životem!"""
    },
    {
        "id": "faq-33",
        "question": "Dvojitá rána + Colorado Bill: Kolik životů ztratí cíl při pikovém sejmutí?",
        "tags": ["dvojitá-rána", "colorado-bill", "piky", "2-životy", "smrtící-kombo"],
        "category": "Údolí stínů",
        "answer": """**Řešení:**
* Colorado Bill zahraje kartu BANG! posílenou kartou *Dvojitá rána*.
* Sejme na svou schopnost: otočí pikovou kartu (♠).
* Schopnost Colorada Billa říká: *„Pikové sejmutí = BANG! nelze zrušit.“*
* Karta Dvojitá rána říká: *„Pokud cíl nezruší útok 2 efekty Vedle!, ztrácí 2 životy.“*
* Protože výstřel nelze nijak zrušit, **cíl automaticky a neodvratně ztrácí 2 životy**!"""
    },
    {
        "id": "faq-34",
        "question": "Tornádo (Údolí stínů): Hráč má v ruce jen 1 kartu nebo žádnou. Kolik karet předá sousedovi?",
        "tags": ["tornádo", "údolí-stínů", "předávání-karet", "prázdná-ruka"],
        "category": "Údolí stínů",
        "answer": """**Řešení:**
Oficiální pravidla Údolí stínů (str. 34):
* *„Všichni hráči předávají karty současně. Pokud má někdo pouze 1 kartu, resp. žádnou, pošle jen tuto jednu, resp. žádnou. Jeho soused po levici tak dostane méně karet, resp. žádné.“*
* Hráč s 1 kartou předá svou jedinou kartu. Hráč s 0 kartami nepředá nic."""
    },
    {
        "id": "faq-35",
        "question": "Posun vlaku zdarma před nákupem vagonu: Je nákup vagonu povinný?",
        "tags": ["vlak", "posun-zdarma", "nákup-vagonu", "povinnost"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**ANO, NÁKUP JE POVINNÝ!**
Pravidla Velké vlakové loupeže (str. 28 i 35) doslova uvádějí:
* *„Pokud se rozhodnete posunout vlak tímto způsobem [zdarma o 1 stanici], MUSÍTE zaplatit cenu uvedenou na některé stanici a vzít si odpovídající vagon!“*
* Nemůžete tedy posunout vlak zadarmo jen proto, abyste ho popohnali ke konečné, aniž byste si koupili vagon."""
    },
    {
        "id": "faq-36",
        "question": "Lze mít vyložené 2 stejné karty černého vybavení ze Zlaté horečky?",
        "tags": ["černé-vybavení", "zlatá-horečka", "unikátnost", "pravidlo-dvou-karet"],
        "category": "Zlatá horečka",
        "answer": """**Řešení:**
**NE!**
Pravidla Zlaté horečky (str. 19):
* *„Před sebou smíte mít vyložené libovolné množství karet vybavení. Ale pamatujte: nemůžete mít dvě karty se stejným názvem lícem nahoru před sebou – toto pravidlo platí pro karty vybavení stejně jako pro modré karty.“*
* Nelze mít před sebou vyložené např. dvoje Boty ani dvě Podkovy."""
    },
    {
        "id": "faq-37",
        "question": "Výhybka: Lze vyměnit vagon, který ještě stojí ve vlaku na trati?",
        "tags": ["výhybka", "vlak", "karty-ve-hře", "vagon"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**NE!**
Pravidla karty Výhybka (str. 31 a 38):
* *„Karty, které tvoří vlak [na stanicích], se nepovažují za karty ve hře, takže je nelze pomocí Výhybky získat!“*
* Výhybkou lze vyměňovat POUZE karty již vyložené před hráči (modré karty a zakoupené vagony před hráči)."""
    },
    {
        "id": "faq-38",
        "question": "Zranění způsobené Legendou přivlastněním činu: Lze se bránit kartou Vedle! nebo Barelem?",
        "tags": ["legendy", "přivlastnění-činu", "zranění", "neodvratné"],
        "category": "Legendy",
        "answer": """**Řešení:**
**NE, TOMUTO ZRANĚNÍ NELZE ZABRÁNIT!**
Pravidla Legend (str. 6):
* *„Můžete však jiné legendě způsobit ztrátu 1 života... Této ztrátě nelze zabránit. Uvedený efekt se vztahuje pouze na legendy (nikoli na běžné postavy) a nezávisí na vzdálenosti.“*
* Barel, Vedle!, Bedna ani zbraně proti této ztrátě života nefungují."""
    },
    {
        "id": "faq-39",
        "question": "Co se stane, když dojde balíček karet činů v Legendách?",
        "tags": ["legendy", "balíček-činů", "zamíchání", "dojití-karet"],
        "category": "Legendy",
        "answer": """**Řešení:**
Pravidla Legend (str. 5 a 6):
* *„Jestliže balíček činů dojde, zamíchejte odhozené karty činů a vytvořte nový dobírací balíček činů.“*
* Činy tedy v průběhu delší hry neustále kolují."""
    },
    {
        "id": "faq-40",
        "question": "Chuck Wengam má 1 život. Může obětovat život pro líznutí 2 karet?",
        "tags": ["chuck-wengam", "sebevražda", "poslední-život", "zákaz"],
        "category": "Dodge City",
        "answer": """**Řešení:**
**NE!**
Pravidla postavy Chuck Wengam:
* *„Nemůže se rozhodnout ztratit svůj poslední život tímto způsobem.“*
* Schopnost může použít pouze tehdy, má-li 2 a více životů."""
    },
    {
        "id": "faq-41",
        "question": "Elena Fuente čelí Slab the Killerovi. Kolik karet musí odhodit?",
        "tags": ["elena-fuente", "slab-the-killer", "2-karty", "vedle"],
        "category": "Dodge City",
        "answer": """**Řešení:**
* Elena Fuente může použít **jakoukoli kartu ze své ruky jako kartu Vedle!**.
* Slab the Killer vyžaduje 2 efekty Vedle!.
* Elena Fuente tedy jednoduše **odhodí libovolné 2 karty ze své ruky** a Slabův BANG! je kompletně zrušen!"""
    },
    {
        "id": "faq-42",
        "question": "Pedro Ramirez hraje v 1. kole a odhazovací balíček je prázdný. Odkud bere karty?",
        "tags": ["pedro-ramirez", "prázdný-balíček", "fáze-1"],
        "category": "Základní hra",
        "answer": """**Řešení:**
* Pokud je odhazovací balíček prázdný, Pedro Ramirez si nemůže vzít kartu z odhazovacího balíčku.
* Obě karty si proto musí standardně dobrat **z dobíracího balíčku**."""
    },
    {
        "id": "faq-43",
        "question": "Rose Doolan vs Paul Regret: Jaká je mezi nimi výsledná vzdálenost?",
        "tags": ["rose-doolan", "paul-regret", "vzdálenost", "hledí", "mustang"],
        "category": "Vzdálenost a dostřel",
        "answer": """**Řešení:**
Předpokládejme, že sedí vedle sebe (základní vzdálenost 1):
* Paul Regret má pasivní schopnost Mustang (+1 k němu) -> základní vzdálenost k Paulovi je 2.
* Rose Doolan má pasivní schopnost Hledí (-1 od ní k ostatním) -> vzdálenost se sníží o 1 zpět na 1.
* Výsledek: **Rose Doolan vidí Paula Regreta přesně ve vzdálenosti 1**! Může na něj střílet i základním Coltem .45 a hrát na něj Paniku!."""
    },
    {
        "id": "faq-44",
        "question": "Vagon duchů: Může na hráče s Vagonem duchů někdo vystřelit BANG! nebo zahrát Paniku!?",
        "tags": ["vagon-duchů", "cíl-útoku", "krádež", "panika"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**ANO!**
Pravidla Velké vlakové loupeže (str. 29 i 37):
* Hráč s Vagonem duchů *„se považuje za postavu ve hře pro všechny účely (podmínky vítězství, vzdálenost, schopnosti postav atd.)“*.
* Lze na něj střílet, lze na něj hrát hnědé i modré karty. Zranění mu sice neublíží (životy nemá), ale můžete mu kartou *Cat Balou* nebo *Panika!* zničit či ukrást vyložené karty – a pokud mu ukradnete samotný Vagon duchů, hráč okamžitě definitivně umírá!"""
    },
    {
        "id": "faq-45",
        "question": "Počítá se hráč s Vagonem duchů jako živý pro podmínky konce hry?",
        "tags": ["vagon-duchů", "konec-hry", "podmínky-vítězství"],
        "category": "Velká vlaková loupež",
        "answer": """**Řešení:**
**ANO!**
* Dokud má vyřazený hráč před sebou Vagon duchů, hra nemůže skončit, pokud by jeho přítomnost odporovala podmínkám vítězství.
* Příklad: Zbývá Šerif a Bandita s Vagonem duchů. Hra NEKONČÍ vítězstvím Šerifa – Šerif musí Banditu zbavit Vagonu duchů, aby zvítězil!"""
    },
    {
        "id": "faq-46",
        "question": "Big Fifty (A&D) vs Barel vs Julie Cutter: Co přesně tato zbraň ruší?",
        "tags": ["big-fifty", "barel", "julie-cutter", "mustang", "rušení"],
        "category": "Ozbrojení a nebezpeční",
        "answer": """**Řešení:**
Při výstřelu zbraní Big Fifty za 1 žeton nabití:
* Ruší účinek soupeřova **Barelu** i **Bedny** (cíl na ně nesmí snímat ani platit).
* Ruší účinek **Mustanga** a **Skrýše** pro tento výstřel.
* Ruší pasivní obranné schopnosti cíle (např. *Julie Cutter* nemůže provést svůj odvetný BANG!, *Jourdonnais* nemůže použít imaginární Barel)."""
    },
    {
        "id": "faq-47",
        "question": "Buntline Special (A&D) vs Úspěšný Barel: Musí cíl odhodit kartu, když se ubránil Barelem?",
        "tags": ["buntline-special", "barel", "odhození-karty"],
        "category": "Ozbrojení a nebezpeční",
        "answer": """**Řešení:**
**ANO!**
Pravidla karty Buntline Special (str. 25 a 32):
* *„Nezáleží na tom, zda je výstřel zrušen kartou Vedle!, Barelem či jinak.“*
* I když cíl úspěšně otočí srdce na Barel a výstřel zruší, útočník zaplatí 1 žeton nabití a **cíl musí odhodit 1 kartu z ruky**!"""
    },
    {
        "id": "faq-48",
        "question": "Dřevěný dynamit (Varianta Dynamite Box): Co se stane s kartou Dynamit po explozi?",
        "tags": ["dřevěný-dynamit", "dynamite-box", "exploze", "zamíchání"],
        "category": "Bonusové postavy",
        "answer": """**Řešení:**
Podle pravidel varianty s dřevěnou patronou (str. 12 pravidel Dynamite Boxu):
* Jakmile karta Dynamit opustí hru (v důsledku výbuchu nebo odhození kartou Cat Balou):
* **OKAMŽITĚ SE ZAMÍCHÁ ZPĚT DO DOBÍRACÍHO BALÍČKU!**
* Dynamit se tak během partie může objevit a vybuchnout mnohokrát dokola!"""
    },
    {
        "id": "faq-49",
        "question": "Ruská ruleta (Fistful of Cards): Kdo začíná a kdy přesně ruleta končí?",
        "tags": ["ruská-ruleta", "fistful-of-cards", "pořadí", "konec-rulety"],
        "category": "Globální události",
        "answer": """**Řešení:**
* Jakmile se otočí karta *Ruská ruleta*, okamžitě se vyhodnotí:
1. Začíná **Šerif** a postupuje se po směru hodinových ručiček.
2. Každý hráč musí předložit 1 efekt *Vedle!* (zahranou kartou Vedle! z ruky, nebo úspěšným sejmutím na Barel či Jourdonnaise).
3. **První hráč, který efekt Vedle! nepředloží, okamžitě ztratí 2 životy a Ruská ruleta tím OKAMŽITĚ KONČÍ!**
4. Žádní další hráči po něm již Vedle! ukazovat nemusí."""
    },
    {
        "id": "faq-50",
        "question": "Karta Kazatel (High Noon) vs Zahrání BANG! vs Odhození BANG! v Duelu.",
        "tags": ["kazatel", "high-noon", "zákaz-bangu", "duel"],
        "category": "Globální události",
        "answer": """**Řešení:**
Karta *Kazatel* zní: *„Během svého tahu nesmíte používat karty BANG!“*.
* Protože text říká **nesmíte POUŽÍVAT**, vztahuje se to i na odhazování!
* Pokud hráč ve svém tahu během Kazatele zahraje *Duel*, vyzvaný soupeř může odhodit BANG!, ale hráč na tahu **nesmí odhodit BANG! v odpověď** a okamžitě v Duelu ztratí život! Hraní Duelu ve vlastním tahu během Kazatele je proto čistá sebevražda."""
    },
    {
        "id": "faq-51",
        "question": "Karta Hřbitov / Krchov (Bone Orchard): Kompletní pravidla – jak přesně ožívají mrtví hráči, jak probíhá tah a co platí?",
        "tags": ["hřbitov", "krchov", "bone-orchard", "wild-west-show", "události", "oživování", "zombie", "dostavník", "wells-fargo"],
        "category": "Globální události",
        "answer": """**Řešení:**
Karta **Bone Orchard** (česky obvykle překládaná jako *Hřbitov* nebo *Krchov*) z rozšíření *Wild West Show* patří k nejdivočejším kartám ve hře, protože dočasně vrací mrtvé hráče zpět do hry jako „zombie“. Zde je její kompletní autoritativní průvodce:
* <strong>1. KDY A JAK KARTA ZAČÍNÁ A KONČÍ:</strong>
* <strong>Vstup do hry:</strong> V rozšíření Wild West Show se události neotáčí každé kolo. Karta se otočí z balíčku událostí <strong>POUZE ve chvíli, kdy někdo zahraje kartu Dostavník (Stagecoach) nebo Wells Fargo</strong> (či jinou kartu se symbolem dostavníku).
* <strong>Trvání:</strong> Karta zůstává aktivní na stole po celou dobu, dokud někdo nezahraje další Dostavník nebo Wells Fargo a neotočí novou událost.
* <strong>2. CO SE PŘESNĚ DĚJE, KDYŽ JE KARTA NA STOLE:</strong>
* Mrtví hráči <strong>neožijí všichni naráz</strong> v okamžiku vyložení karty! Hra pokračuje normálně dokola po směru hodinových ručiček:
* <strong>Když přijde řada na mrtvého hráče:</strong> Jeho pozice u stolu se nepřeskakuje – hráč se vrací do hry!
* <strong>Fáze 1 (Začátek tahu):</strong> Hráč vstoupí do hry a vezme si <strong>1 život</strong> (1 náboj / žeton). Následně si běžným způsobem <strong>lízne 2 karty</strong> z dobíracího balíčku (pokud jeho schopnost postavy neupravuje lízání, např. Kit Carlson, Pedro Ramirez atd. – schopnosti postav normálně fungují).
* <strong>Fáze 2 (Akce):</strong> Hraje svůj tah naprosto standardně. Může hrát BANG!, vykládat zbraně, vybavení a <strong>především pít Pivo</strong>, aby si zvýšil počet životů z 1 na více (až do maxima své postavy).
* <strong>Fáze 3 (Konec tahu):</strong> Odhodí karty z ruky tak, aby mu jich zůstalo nejvýše tolik, kolik má aktuálně životů (pokud si nedoplnil život, smí mu v ruce zůstat pouze 1 karta). Tah předává dalšímu hráči po směru hry.
* <strong>3. ZÁSADNÍ PRAVIDLA A SITUACE (CHYTÁKY):</strong>
* <strong>Role je známá všem (hra s otevřenými kartami):</strong> Hráč hraje za svou původní roli (Pomocník, Bandita, Odpadlík). Protože však při své první smrti roli ukázal, všichni u stolu už vědí, kdo to je. Hraje se s otevřenou kartou role.
* <strong>Odměny a tresty za zabití platí znovu:</strong> Pokud je oživený Bandita znovu zabit, kdokoli ho zabil, bere okamžitě odměnu <strong>3 karty</strong>. Pokud Šerif omylem zabije svého oživeného Pomocníka (Vice), Šerif musí <strong>odhodit všechny karty z ruky i ze stolu</strong>.
* <strong>Šerif nikdy neožívá:</strong> Pokud zemře Šerif, hra okamžitě končí vítězstvím Banditů (případně Odpadlíka). K situaci, kdy by Šerif čekal na oživení přes Bone Orchard, tedy v praxi nikdy nedojde.
* <strong>Opakovaná smrt během trvání události:</strong> Pokud hráč během kola znovu zemře a Bone Orchard je stále na stole i ve chvíli, kdy na něj opět přijde řada, v 1. fázi svého dalšího tahu se <strong>opět vrátí s 1 životem</strong>.
* <strong>Co se stane, když Bone Orchard skončí (zahrán nový Dostavník):</strong>
* <strong>Žijící oživení hráči zůstávají:</strong> Hráči, kteří byli oživeni a v momentě výměny události stále žijí (mají alespoň 1 život), ve hře normálně zůstávají dál – <strong>neumírají, jsou plnohodnotně a natrvalo zpátky ve hře</strong>!
* <strong>Mrtví zůstávají mrtví:</strong> Mrtví hráči, na které řada do té doby nepřišla (nebo kteří zrovna v momentě změny leží mrtví), už zůstávají definitivně vyřazeni."""
    }
]

FAQ_ENTRIES.extend(FAQ_ENTRIES_EXTRA)
print(f"Total FAQ entries updated: {len(FAQ_ENTRIES)} entries.")
