# 🧨 Pravidla deskové hry Bang! — Kompletní pravidla & Encyklopedie karet

> **Oficiální pravidla a kompletní průvodce pro hraní karetní hry BANG! (nikoliv kostkové) se všemi rozšířeními z Dynamite Boxu a rozšířením Legendy (Legends).**
>
> 🌐 **Online webová aplikace:** [https://carlos1888.github.io/bang-pravidla/](https://carlos1888.github.io/bang-pravidla/)

---

## 🤠 O projektu

Tento repozitář obsahuje komplexní pravidlový systém, encyklopedii karet a interaktivní webovou aplikaci pro karetní hru **BANG!** v plné výbavě:
* **Základní hra (Base Game)**
* **Dodge City** (zelené karty, pravidla pro 8 a 3 hráče)
* **Zlatá horečka (Gold Rush)** (valouny zlata, karty vybavení, varianta Stínoví pistolníci)
* **Ozbrojení a nebezpeční (Armed & Dangerous)** (oranžové nebezpečné karty, žetony nabití, vylepšitelné karty)
* **Velká vlaková loupež (The Great Train Robbery)** (vlaková souprava, lokomotivy Leland / Ironhorse, vagony, stanice)
* **Údolí stínů (The Valley of Shadows)** (československé rozšíření: Duch, Chřestýš, Tomahavk...)
* **Pravé poledne (High Noon)** & **Pěst plná karet (A Fistful of Cards)** (balíček globálních událostí)
* **Divoký západ (Wild West Show)** (události spouštěné Dostavníkem a Wells Fargo)
* **Legendy (Legends)** (16 legendárních postav, žetony slávy, karty činů, přivlastnění činů, úpravy základních pravidel)
* **Dynamite Box Bonusy a Promo** (Dřevěná patrona dynamitu, postavy Johnny Kisch, Uncle Will, Claus „The Saint“, Annie Versary, Emiliano, Nová identita, Želízka)

---

## 🗂️ Struktura repozitáře

```text
bang-pravidla/
├── index.html                  # Hlavní webová aplikace (Single Page App)
├── css/
│   └── style.css               # Westernový responzivní design, barvy karet dle typu, temný/světlý motiv
├── js/
│   ├── cards-data.js           # Databáze 250 karet, postav, vagonů, stanic a činů (CZ / EN)
│   ├── rules-data.js           # Kompletní text pravidel všech rozšíření (CZ / EN)
│   ├── faq-data.js             # Databáze 50+ řešení sporných situací a rébusů (CZ / EN)
│   ├── turn-helper-data.js     # Formátovaný tah hráče a přehledové tabulky (CZ / EN)
│   └── app.js                  # Aplikační logika, přepínač jazyka CZ/EN, filtry, vyhledávání
├── assets/
│   └── cards/                  # Extrahované oficiální ilustrace a komponenty z pravidel
├── scripts/
│   ├── cards_base.py           # Definice karet a postav základní hry
│   ├── cards_expansions1.py    # Definice Dodge City, Zlatá horečka, Ozbrojení a nebezpeční
│   ├── cards_expansions2.py    # Definice Velká vlaková loupež, Údolí stínů
│   ├── cards_expansions3.py    # Definice High Noon, Fistful, Wild West Show, Legendy, Promo
│   ├── rules_content.py        # Kompletní texty pravidel
│   ├── faq_content.py          # 50 sporných situací a jejich autoritativní řešení
│   └── build_data.py           # Skript pro sestavení JavaScriptových databází
├── .github/workflows/
│   └── deploy.yml              # Automatické nasazení na GitHub Pages při pushi
└── README.md                   # Tato dokumentace
```

---

## 📖 Základní pravidla: Hraní všech rozšíření dohromady

### 1. Příprava hry (Setup)
1. **Role:** Rozdejte tajné role dle počtu hráčů (4–7 standard, 8 hráčů s Dodge City). Šerif svou roli ihned odhalí.
2. **Postavy:** Každý hráč obdrží **1 kartu Legendární postavy běžnou stranou A** (nebo si vybírá ze dvou). Šerif začíná s **+1 životem navíc**.
3. **Žetony slávy:** Každý hráč si vezme sadu **5 žetonů slávy** jedné barvy.
4. **Počáteční karty (Pravidlo Legend):** Všichni hráči začínají se **4 kartami v ruce** bez ohledu na počet životů (včetně Šerifa!). 6., 7. a 8. hráč začíná s **5 kartami**.
5. **Vlak (Loupež):** Vyložte tolik stanic, kolik je hráčů. Pod první stanici položte náhodnou stranou lokomotivu (*Ironhorse* nebo *Leland*). Vlevo od lokomotivy vyložte 3 vagony.
6. **Činy (Legendy):** Položte balíček činů, otočte **1 kartu činu lícem nahoru**. Na stole smí být max. 4 činy současně.
7. **Zlatá horečka:** Připravte bank valounů zlata a nabídku 3 karet vybavení.
8. **Ozbrojení a nebezpeční:** Připravte zásobu žetonů nabití.
9. **Události:** Šerif připraví balíček událostí (12–15 karet ze sad High Noon a Fistful, dole finální karta). Balíček Divokého západu leží uprostřed stolu.
10. **Dřevěný dynamit:** Šerif si vezme dřevěnou patronu dynamitu.

---

### 2. Klíčové herní pojmy a mechaniky

#### Zahrání karty vs Použití karty
* **Zahrání karty:** Vyložení z ruky v primární funkci (pouze ve Fázi 2 vlastního tahu, kromě Vedle! a Piva).
* **Použití karty:** Nadřazený pojem – zahrnuje i odhození karty kvůli jiné kartě nebo schopnosti (Duel, odhození na stanici, odhození u Sida Ketchuma).

#### Karta BANG! vs Efekt BANG!
* **Limit 1 za tah** platí **POUZE na skutečné karty BANG!**.
* Efekty vyvolávající BANG! (*Kulomet*, *Křesadlovka*, *Rychlopalba*, *Derringer*, schopnost *Doca Holydaye* či *Mexicali Kida*) **nejsou kartou BANG!** a **nepočítají se do limitu**!
* Karta *Indiáni!* vyžaduje k odvrácení **odhození skutečné karty BANG!** (nelze nahradit Křesadlovkou ani Kulometem).
* *Slab the Killer* vyžaduje 2 efekty Vedle! **pouze na svou kartu BANG!**, nikoli na Kulomet či Křesadlovku (tam stačí 1 Vedle!).

#### Vzdálenost vs Dostřel zbraní
* **Vzdálenost:** Počet míst mezi hráči u stolu. Upravují ji karty jako *Mustang*, *Skrýš*, *Plošinový vůz* (+1 k vám), *Hledí*, *Dalekohled* (-1 od vás).
* **Dostřel:** Maximální dosah pro výstřel kartou BANG! daný zbraní (Colt .45 má dostřel 1, Winchester 5).
* **DŮLEŽITÉ:** Zbraně **nemění skutečnou vzdálenost** mezi hráči! Kartu *Panika!* (dosah 1) s Winchesterem na dálku nezahrajete.

#### Pravidla pro Pivo
* Ve svém tahu léčí 1 život.
* Mimo tah jej lze zahrát **POUZE při utrpění smrtelného zásahu** (poslední život). Nelze hrát mimo tah při běžném zranění!
* **Ve 2 hráčích nemá Pivo žádný léčivý účinek!** (Ve Zlaté horečce jej lze směnit za 1 valoun zlata; karta *Poslední volání* léčí i ve 2 hráčích).
* *Saloon*, *Tequila*, *Čutora*, *Bečka piva* **nejsou Pivo** a nelze je hrát mimo svůj tah k odvrácení smrti.

---

### 3. Přesná posloupnost tahu hráče

#### FÁZE 0: Události a časované karty před tahem
1. **Šerif:** Od 2. kola otočí novou globální událost a posune lokomotivu o 1 stanici vpravo.
2. **Efekty začátku tahu:** Vyhodnotí se např. *Pravé poledne* (ztráta 1 života).
3. **PŘÍSNÉ POŘADÍ ČASOVANÝCH KARET:**
   * **1. Dynamit** (snímá ♠ 2–9; výbuch = 3 životy; jinak posun vlevo).
   * **2. Vězení** (snímá ♥ = útěk; jinak ztráta tahu. *Nové pravidlo Legend:* Lze odhodit 1 ♥ kartu z ruky a odehrát tah bez snímání!).
   * **3. Bomba** (snímá ♥/♦ posun dál; ♣/♠ úbytek 2 žetonů nabití; při 0 exploduje za 2 životy).
   * **4. Chřestýš** (snímá ♠ = ztráta 1 života. Pokud hráč neuspěl ve Vězení, na Chřestýše nesnímá!).
4. **Mapa:** Prohlédnutí 2 vrchních karet, 1 lze odhodit.

#### FÁZE 1: Dobrání karet
* Standardně doberte **2 karty z balíčku** (nebo uplatněte schopnosti: Jesse Jones, Pedro Ramirez, Kit Carlson, Pixie Pete, Bill Noface, Black Jack, Dutch Will).

#### FÁZE 2: Zahrání karet a akce z rozšíření
* Zahrání hnědých a modrých karet.
* Použití zelených karet vyložených v minulých kolech.
* **Zlatá horečka:** Nákup vybavení z nabídky, odhazování vybavení soupeřů za cenu + 1 valoun, směna Piva za zlato.
* **Vlak:** Posun vlaku zdarma o 1 stanici (pak je nákup vagonu povinný!), nákup přiřazeného vagonu za cenu na stanici.
* **Ozbrojení a nebezpeční:** Vykládání oranžových karet se 3 žetony, placení žetonů za efekty, nabíjení +1 žeton za každou vyloženou modrou kartu, vylepšování karet.
* **Legendy:** Vykonání činu (položení 2 žetonů slávy). Pokud jste Legenda (strana B): přivlastnění činu -> způsobení 1 nezvratného zranění jiné legendě!

#### FÁZE 3: Odhození nadbytečných karet & Nabíjení
* Limit karet v ruce = aktuální počet životů.
* *Výjimky:* Sean Mallory (až 10 karet), Zbraňový pás (8 karet), **Pravidlo Legend pro 1 život (hráč s 1 životem smí držet 2 karty)**!
* **Nabíjení:** Za každou kartu, kterou v této fázi musíte odhodit, získáte **+1 žeton nabití** na Nebezpečnou kartu nebo postavu!

#### FÁZE 4: Konec tahu & Chlubení se činem
* **Chlubení se činem:** Pokud hráč v tahu NEVYKONAL čin (i z Vězení!), otočí nový čin z balíčku (max 4 vyložené, přebytečný odhodí) a položí **1 svůj žeton slávy** na vyložený čin.
* **ZROD LEGENDY:** Umístěním 5. žetonu slávy se hráč stává Legendou! Otočí postavu na stranu B a doplní si životy na 3!
* Konec tahu: Jimmy Texas líže kartu, Don Bell snímá na extra tah.

---

## ⚖️ Výběr nejčastějších sporných situací (FAQ)

| Otázka | Řešení dle oficiálních pravidel |
| :--- | :--- |
| **Slab the Killer + Barel + Bedna** | Na zrušení Slabova BANG! jsou třeba 2 Vedle!. Barel dá 1 Vedle! (na srdce), Bedna za 2 žetony dá 2. Vedle! = útok je úspěšně odvrácen. |
| **Slab the Killer + Kulomet** | Na obranu stačí **pouze 1 Vedle!**! Slabova schopnost platí jen pro jeho karty BANG!, nikoli pro Kulomet. |
| **Belle Star vs vyložené karty** | V jejím tahu nemají žádný efekt soupeřovy Barely, Mustangy, zelené karty ani oranžové nebezpečné karty. |
| **Suzy Lafayette a vyprázdnění ruky** | Lízne novou kartu okamžitě vteřinu po odhození poslední karty. Výjimka: v Duelu líže až po skončení celého souboje. |
| **El Gringo a přivlastnění činu** | Pokud jiná legenda zraní El Gringa přivlastněním činu, El Gringo si vezme kartu z ruky této legendy! |
| **Bomba a karta Rez (Rust)** | Pokud Rez odebere z Bomby její poslední žetony nabití, **BOMBA OKAMŽITĚ EXPLODUJE ZA 2 ŽIVOTY**! |
| **Vagony do ruky?** | **NIKDY!** Pokud by hráč měl vagon vzít do ruky (Panika!), vyloží ho rovnou před sebe do hry. |
| **Zabití na konečné lokomotivou Ironhorse** | Pokud Ironhorse na konečné zabije všechny zbývající hráče současně, **VÍTĚZÍ BANDITÉ**! |
| **Šerif a Vagon duchů / Vězení** | Šerif nesmí mít Vězení ani Vagon duchů, a to ani přes kartu Výhybka! |
| **Uvězněný hráč a chlubení činem** | Uvězněný hráč se na konci svého přeskočeného tahu **MŮŽE CHLUBIT ČINEM** a položit 1 žeton slávy! |

*(Kompletní seznam všech 50 detailních situací je interaktivně prohledávatelný přímo ve webové aplikaci v záložce FAQ).*

---

## 💻 Spuštění webové aplikace lokálně

Webová aplikace je napsána v čistém moderním HTML5, CSS3 a JavaScriptu (bez externích závislostí a frameworků).

1. Naklonujte repozitář:
   ```bash
   git clone https://github.com/carlos1888/bang-pravidla.git
   cd bang-pravidla
   ```
2. Otevřete `index.html` v libovolném moderním webovém prohlížeči:
   ```bash
   open index.html        # na macOS
   xdg-open index.html   # na Linuxu
   start index.html      # na Windows
   ```
   Nebo spusťte lokální HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   a přejděte na `http://localhost:8000`.

---

## 🚀 Publikace online (GitHub Pages)

Tento repozitář je předkonfigurován pro automatické publikování na **GitHub Pages**:
* V repozitáři je obsažen workflow `.github/workflows/deploy.yml`.
* **Aktivace GitHub Pages na GitHubu:**
  1. Přejděte do nastavení repozitáře: **Settings** → **Pages**.
  2. V sekci **Build and deployment** zvolte **Source**: `GitHub Actions`.
  3. Jakmile proběhne push do větve `main`, webová stránka je automaticky dostupná na adrese:  
     👉 **`https://carlos1888.github.io/bang-pravidla/`**

---

## 📜 Právní a autorská doložka

* **BANG!®** je registrovaná ochranná známka a autorská hra designéra **Emiliana Sciarry**, vydávaná společnostmi **daVinci Editrice S.r.l. / dV Games** a v České republice a na Slovensku společností **ALBI Česká republika a.s.**
* Tento projekt je nezávislá fanouškovská encyklopedie a pomůcka pro usnadnění hraní, řešení pravidel a prohlížení karet. Všechna práva k původním ilustracím a textům náleží jejich právoplatným držitelům.
