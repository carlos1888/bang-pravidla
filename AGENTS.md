# 🤠 AGENTS.md — Technická a architektonická dokumentace pro AI agenty & vývojáře

Tento dokument slouží jako **hlavní zdroj pravdy (Source of Truth)** pro AI agenty (Antigravity, Claude, Gemini, Copilot, Cursor atd.) a vývojáře pracující na projektu **BANG! Companion**. Obsahuje kompletní architektonický přehled, datové toky, specifikaci herních nástrojů, designový systém, pravidla výkonu a komprese i zásady pro bezpečné úpravy kódu.

---

## 📌 1. Přehled projektu & Tech Stack

- **Účel:** Oficiální i fanouškovský průvodce ke stolní karetní hře **BANG!**, encyklopedie všech 258 karet, pravidel všech rozšíření z **Dynamite Boxu** + rozšíření **Legendy (Legends)** a sada 14 interaktivních herních nástrojů ke stolu.
- **Produkční URL:** [https://carlos1888.github.io/bang-pravidla/](https://carlos1888.github.io/bang-pravidla/)
- **Architektura:**
  - **Single Page Application (SPA)** postavená na čistém **Vanilla JavaScriptu (ES6+)**, HTML5 a moderním CSS3.
  - **Žádné těžké runtime frameworky** (žádný React, Angular, Vue, Webpack, Vite). Aplikace běží přímo v prohlížeči, startuje okamžitě a nemá žádné runtime závislosti.
  - **Offline-First PWA (Progressive Web App):** Propracovaný Service Worker (`sw.js`) s dvojitou cache architekturou umožňující 100% offline provoz na mobilech i tabletech přímo u herního stolu.
  - **Bilingvní systém (CZ / EN):** Veškerá data karet, pravidla, nápovědy i UI prvky jsou 100% dostupné v češtině i angličtině. Přepínání jazyka je okamžité bez reloadu stránky.

---

## 🗂️ 2. Struktura repozitáře a popis souborů

```text
bang-pravidla/
├── index.html                  # Hlavní HTML struktura aplikace (6 tabů, záhlaví, filtry, modální okno)
├── manifest.json               # PWA manifest (ikony, barvy motivu, offline metadata)
├── sw.js                       # Service Worker s oddělenou cache pro kód a 318 obrázků
├── package.json                # npm skripty pro build, Brotli kompresi a syntaktické testy
├── AGENTS.md                   # Tato technická dokumentace pro AI agenty
├── README.md                   # Uživatelský přehled projektu v češtině
│
├── css/
│   └── style.css               # Kompletní westernový animovaný komiksový stylesheet (proměnné, dark mode)
│
├── js/
│   ├── app.js                  # Hlavní aplikační logika: renderování tabů, filtry, modály, správa stavu
│   ├── cards-data.js           # Databáze 258 karet (základ, Dodge City, Zlatá horečka, O&B, Vlak...)
│   ├── rules-data.js           # Plné texty pravidel všech expanzí v CZ a EN (JSON struktury)
│   ├── faq-data.js             # 50+ autoritativních řešení sporných situací a interakcí karet (CZ/EN)
│   ├── turn-helper-data.js     # Formátovaná struktura tahového taháku, tabulky zbraní a role
│   └── tools-data.js           # Databáze synergií, zbraní, kvízových otázek, stanic vlaku a scénářů
│
├── assets/
│   ├── images-manifest.json    # Automaticky generovaný seznam všech 318 obrázků pro SW precaching
│   ├── bang-logo.webp / .png   # Oficiální logo hry BANG!
│   ├── symbols/                # 16 originálních symbolů karet BANG! stažených z Dized (PNG)
│   ├── western/                # Textury saloonových prken, šerifské hvězdy a wanted plakátů
│   ├── audio/                  # 16 westernových zvukových efektů (výstřel, ricochet, pivo, vlak, zvon...)
│   └── cards/                  # 293 webp/jpg náhledů všech hracích karet rozdělených do podsložek dle expanzí
│
├── scripts/
│   ├── compress.js             # Brotli (Level 11) a Gzip kompresor + generátor images-manifest.json
│   └── ...                     # Pomocné skripty pro import a generování dat
│
└── .github/workflows/
    └── deploy.yml              # CI/CD automatizace pro GitHub Pages s krokem Brotli komprese
```

---

## 🧭 3. Hlavních 6 záložek (Tabs)

Aplikace je rozdělena do 6 hlavních sekcí přístupných přes horní navigaci `.app-nav`:

1. **`katalog` (Katalog karet):**
   - Prohlížeč všech 258 karet s dynamickým fulltextovým vyhledáváním a vícenásobným filtrováním (dle rozšíření, typu karty, barvy balíčku, dosahu, životů, tagů).
   - Kliknutí na kartu otevírá detailní interaktivní modál se synergiemi, protiútoky, oficiálními symboly a možností připnutí postavy na spodní lištu.
2. **`pravidla` (Pravidla):**
   - Kompletní oficiální pravidla základní hry a všech 10 rozšíření (Základ, Dodge City, Zlatá horečka, Ozbrojení a nebezpeční, Velká vlaková loupež, Údolí stínů, Pravé poledne, Pěst plná karet, Divoký západ, Legendy, Dynamite Box promo).
   - Rychlé přepínání kategorií pomocí tlačítek nahoře.
3. **`faq` (FAQ & Sporné situace):**
   - Více než 50 detailně vyřešených pravidelních rébusů (např. *Co se stane, když Dynamit vybuchne a zabije hráče?*, *Jak funguje Barel vs. Slamník?*, *Jak přesně se vyhodnocuje Vězení při hře Legend?*).
   - Fulltextové vyhledávání v otázkách i odpovědích.
4. **`tah-hrace` (Tah hráče & Tahák):**
   - Interaktivní krokový průvodce (Turn Flow Stepper): Fáze 0 (Pasti a časované karty) až Fáze 4 (Konec tahu a chlubení činy).
   - Obsahuje živá simulační tlačítka pro test sejmutí Dynamitu, Vězení, Bomby a Chřestýše.
   - Možnost vygenerovat a vytisknout **A4 PDF Tahák pro hráče**.
5. **`pomocnik` (Rychlý pomocník):**
   - Tabulky dostřelu všech zbraní, matice počtu rolí pro 3–8 hráčů, pravidla odměn a trestů Šerifa, pravidla pro 1 život v Legendách, přehled všech 16 originálních symbolů karet.
6. **`nastroje` (Herní nástroje):**
   - Hub 14 specializovaných interaktivních pomůcek přímo ke stolu.

---

## 🛠️ 4. Detailní specifikace 14 herních nástrojů (`#nastroje`)

Přepínání nástrojů probíhá přes subnavigaci `#tools-subnav` s atributem `data-tool="<id>"`:

| ID nástroje | Název (CZ / EN) | Účel a herní mechanika | Klíčový kód v `app.js` |
|---|---|---|---|
| `setup` | **Asistent přípravy hry** (Setup Assistant) | Zvolí se počet hráčů (3–8) a aktivní rozšíření. Vypočítá přesné role u stolu, specifická pravidla rozdávání karet a vygeneruje interaktivní odškrtávací checklist před zahájením duelu. | `renderSetupAssistant()` |
| `calc` | **Kalkulačka vzdálenosti & Radar** (Distance Calc) | Vizuální pokerový stůl v saloonu pro 3–8 hráčů. Zobrazuje vzdálenost mezi střelcem a cílem + **radar zasažitelnosti všech hráčů u stolu současně** (zelená = v dosahu, modrá = dosah Paniky, červená = mimo dosah). Zohledňuje Mustang, Skrýš, Hledí i Paula Regreta. Obsahuje **Zápisník podezření pro Šerifa** (bluff tracker pro role). | `renderDistanceCalc()` |
| `draw` | **Arbitr snímání & Šance** (Draw Arbitrator) | Řešitel herních sporů. Zadá se barva (♠ ♥ ♦ ♣) a hodnota karty otočené z dobíracího balíčku na stole. Vyhodnotí verdikt pro Dynamit, Vězení, Barel, Bombu, Chřestýše atd. Počítá exaktní matematickou pravděpodobnost přežití včetně schopnosti Lucky Dukea (snímání 2 karet). | `renderDrawSimulator()` |
| `timer` | **Šerifovy hodinky & Rychlý Duel** (Turn & Duel Timer) | Časovač tahu (30s–120s) a bleskový 5sekundový střídavý odpočet pro napínavé Duely s velkými reakčními tlačítky a zvukovými efekty výstřelu. | `renderTurnTimer()` |
| `train` | **Velká vlaková loupež** (Train Board) | Virtuální vlaková souprava: lokomotiva (Leland / Ironhorse), 8 připojených vagonů a 13 stanic. Simuluje posun vlaku na konci tahu Šerifa, nákup vagonů za cenu stanice a přechod na konečnou stanici. | `renderTrainBoard()` |
| `legends` | **Legendy & Činy** (Legends Tracker) | Správa 16 legendárních postav, sledování žetonů slávy (1–5) a stavu 3 vyložených činů (nevykonaný, splněný, přivlastněný soupeřem) s automatickým otočením na Stranu B po 5. žetonu. | `renderLegendsTracker()` |
| `saloon` | **Obchod Saloon** (Gold Rush Armory) | Výloha 3 černých karet vybavení pro Zlatou horečku. Umožňuje nákup za valouny zlata, vyložení nových karet a míchání odhazovacího balíčku. | `renderGoldRushArmory()` |
| `scenarios` | **Hospodské výzvy** (Bounty Challenges) | Generátor 12 vybalancovaných hospodských scénářů (Vyschlá studna, Rychlé kolty, Saloon poker...) pro oživení partie. Tlačítka: Vylosovat 1 výzvu, Vylosovat 2 výzvy a Katalog všech 12 výzev. | `renderScenariosGenerator()` |
| `events` | **Balíček událostí** (Event Decks) | Nezávislé otáčení globálních událostí Šerifa (Pravé poledne + Pěst plná karet) a událostí Divokého západu (Wild West Show otáčený Dostavníkem / Wells Fargo). | `renderEventDeck()` |
| `draft` | **Losovač rolí a postav** (Role & Char Draft) | Férové tajné rozlosování pro 3–8 hráčů. Zvolí se expanze, zařízení se předává od hráče k hráči v režimu skryté obrazovky. | `renderRoleDraft()` |
| `tracker` | **Virtuální deska** (Player Board) | Osobní deska hráče: sledování životů, karet v ruce, valounů zlata a žetonů nabití přímo na displeji mobilu. | `renderPlayerBoard()` |
| `matches` | **Zápisník partií** (Match Tracker) | Záznam odehraných her (datum, vítězná frakce, počet hráčů, MVP postava, délka, poznámky). Trvalé uložení v `localStorage`, výpočet win-rate statistik a export do JSON. | `renderMatchTracker()` |
| `quiz` | **Kvíz pravidel** (Rules Quiz) | 10 náhodných testových otázek z pokročilých a záludných herních situací se zpětnou vazbou a vyhodnocením hodnosti (Zelenáč až Legendární šerif). | `renderRulesQuiz()` |
| `soundboard` | **Westernový Soundboard** (Sound FX) | Rychlá tlačítka pro přehrání 16 atmosférických westernových zvuků (výstřel, ricochet, dynamit, cinkot zlaťáků, Wilhelmův křik, parní vlak...). | `renderSoundboard()` |

---

## 🎨 5. UI/UX & Designový systém (BANG! Comic Style)

Vzhled aplikace byl pečlivě stylizován do podoby **karetní hry BANG!** – animovaný westernový komiks s teplým saloonovým dřevem a pergamenem.

### 5.1. Typografická pravidla (Velmi důležité!)
- **Westernový nadpisový font:** `'Rokkitt', Palatino, serif`.
  - **Proč Rokkitt:** Původní fonty (*Rye*, *Smokum*) neměly znakovou sadu `latin-ext` a rozbíjely české znaky (*ř, č, ě, š, ž, ů*). Rokkitt podporuje 100% českou diakritiku ve všech řezech.
  - **POZOR na Alfa Slab One:** Tento font existuje pouze v řezu 400 Extra Bold. Pokud se na něj aplikuje `font-weight: 700` nebo `800`, prohlížeč provede umělé rozmazané ztučnění (faux-bold). Proto je v CSS definován jako záložní, nikoli primární pro texty.
- **Tělové písmo:** Systémový bezpatkový font `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` pro maximální ostrost a rychlé čtení textu pravidel na mobilech.
- **Kontrast a čitelnost:**
  - Hlavní text (`--text-main`): `#180e06` (hluboká tmavá kávová čerň).
  - Sekundární text (`--text-muted`): `#422a18` (tmavý ořech).
  - Textový box pravidel na kartách (`.card-effect-box`): **Vždy čistě bílé pozadí (`#ffffff`)** s jemným ohraničením (`#dcd0be`), aby byl text pravidel 100% kontrastní a čitelný.

### 5.2. Barevný systém karet BANG!
Karty mají barevné rámečky a štítky přesně odpovídající fyzickým balíčkům:
- **Hnědé karty (Base action):** `#7b3c10` (Hnědá) — `.card-brown`
- **Modré karty (Equipment / Weapons):** `#1b58a1` (Modrá) — `.card-blue`
- **Zelené karty (Dodge City):** `#27792c` (Zelená) — `.card-green`
- **Oranžové karty (Armed & Dangerous):** `#d85a10` (Oranžová) — `.card-orange`
- **Černé karty (Gold Rush vybavení):** `#222222` (Černá) — `.card-black`
- **Zlaté karty (Gold Rush odměny):** `#c69214` (Zlatá) — `.card-gold`
- **Fialové karty (Události):** `#882d9e` (Fialová) — `.card-event`
- **Červené karty (Postavy):** `#b71c1c` (Červená) — `.card-character`

### 5.3. Oficiální symboly karet (assets/symbols/)
Místo generických emoji se na webu používá **16 oficiálních symbolů z pravidel Dized**:
- `symbol_bang.png`: Výstřel BANG!
- `symbol_missed.png`: Vedle! (obrana)
- `symbol_regain_life.png`: Pivo / Obnovení života
- `symbol_draw_card.png`: Lízání karty
- `symbol_discard_card.png`: Odhození karty
- `symbol_reachable_distance.png`: Dosah zbraně / vzdálenost
- `symbol_distance_x.png`: Vzdálenost 1 (Panika)
- `symbol_any_one_player.png`: Kdokoli u stolu
- `symbol_all_other_players.png`: Všichni ostatní hráči
- `symbol_draw_check.png`: Sejmutí karty ("Draw!")
- `symbol_barrel.png`: Barel
- `symbol_dynamite.png`: Dynamit
- `symbol_jail.png`: Vězení
- `symbol_mustang.png`: Mustang (+1 vzdálenost)
- `symbol_scope.png`: Hledí (-1 vzdálenost)
- `symbol_life_points.png`: Životy / Mosazný náboj

> **Helper v `app.js`:** Funkce `getCardOfficialSymbols(card, isEn)` automaticky detekuje a generuje příslušné štítky se symboly pro každou kartu na základě jejího typu, dosahu, životů a tagů.

### 5.4. Pravidla pro animace (Žádné trhání!)
- **ZÁKAZ `background-attachment: fixed`:** Fixní pozadí dřeva způsobovalo pád snímkové frekvence při scrollování. Pozadí musí scrollovat přirozeně (`background-repeat: repeat`).
- **ZÁKAZ rotací na kartách a logu:** Rotace textu (`rotate(-0.5deg)`) vypíná subpixelové vyhlazování písem a text se stává neostrým.
- **Jednoduché a moderní přechody:** Karty se při najetí myši pouze vertikálně zvednou (`transform: translateY(-5px)`). Logo se decentně zvětší (`scale(1.04)`). Žádné houpání ani třepání.

---

## ⚡ 6. Offline podpora, Service Worker & Cachování (`sw.js`)

Aplikace využívá pokročilou **dvojitou cache architekturu**:

```javascript
const APP_CACHE_NAME = 'bang-app-v30';
const IMAGE_CACHE_NAME = 'bang-images-v1';
```

### Proč jsou cache paměti oddělené?
Při aktualizaci kódu aplikace (změna JS nebo CSS) se inkrementuje `APP_CACHE_NAME`. Service Worker smaže pouze starou verzi kódu, ale **zachová nedotčenou `IMAGE_CACHE_NAME`**. Díky tomu uživatelé po aktualizaci nemusí znovu stahovat **5,3 MB (318 obrázků)**.

### Strategie cachování:
1. **Obrázky & Audio (Media):**
   - **Cache-First:** Pokud je obrázek v cache, vrátí se okamžitě (latence 0 ms). Při výpadku sítě vše funguje 100% offline.
   - **Progresivní pre-caching:** Po aktivaci SW se na pozadí spustí funkce `precacheAllImages()`, která v dávkách po 12 souborech stáhne a zaindexuje všech **318 obrázků** ze souboru `assets/images-manifest.json`.
2. **Kód (HTML, CSS, JS):**
   - **Stale-While-Revalidate:** Servíruje kód ihned z cache pro bleskové spuštění a na pozadí zkontroluje server. Pokud je k dispozici nová verze, aktualizuje cache pro příští spuštění.
3. **Google Fonts:**
   - Styly a woff2 soubory z `fonts.googleapis.com` a `fonts.gstatic.com` jsou automaticky zachyceny a uloženy do cache pro offline provoz.

---

## 📦 7. Brotli komprese (Level 11) & CI/CD Pipeline

Pro maximální rychlost načítání je implementována statická **Brotli komprese na maximální úrovni kvality 11**.

### 7.1. Skript `scripts/compress.js`
Tento Node.js skript:
1. Vygeneruje aktuální seznam všech 318 obrázků do `assets/images-manifest.json`.
2. Projde všechny statické textové soubory (`.html`, `.css`, `.js`, `.json`, `.svg`).
3. **Ochrana proti dvojí kompresi:** Striktně přeskakuje binární a již zkomprimované soubory (`.webp`, `.png`, `.jpg`, `.mp3`, `.m4a`, `.pdf`, `.zip`, `.br`, `.gz` atd.).
4. Zkomprimuje každý soubor pomocí `zlib.brotliCompressSync` s parametry:
   - `BROTLI_PARAM_QUALITY: 11` (nejvyšší možná komprese).
   - `BROTLI_PARAM_LGWIN: 22` (4MB sliding window).
   - `BROTLI_PARAM_SIZE_HINT: originalSize`.
5. Vygeneruje soubory `<soubor>.br` a záložní `<soubor>.gz` (Gzip level 9).

### 7.2. Výsledky komprese
- Celková velikost textových assetů klesá z **1 448 KB** na pouhých **326 KB** (úspora **77 %** přenášených dat).
- Soubory `.br` a `.gz` jsou ignorovány v `.gitignore`, aby nezvětšovaly git repozitář.

### 7.3. CI/CD GitHub Actions (`.github/workflows/deploy.yml`)
Při pushnutí do větve `main` GitHub runner automaticky:
1. Provede checkout repozitáře.
2. Nainstaluje Node.js v20.
3. Spustí `node scripts/compress.js` — vytvoří `.br` a `.gz` soubory na pipeline.
4. Zabalí a nasadí optimalizovaný balíček na **GitHub Pages**.

---

## 📝 8. Zásady pro vývojáře & AI agenty (Checklist změn)

Před provedením jakýchkoliv úprav v repozitáři dodržujte následující pravidla:

1. **Vždy zachovejte bilingvní podporu (CZ & EN):**
   - Všechny nové texty, popisky, tlačítka a pravidla musí mít českou i anglickou variantu (`const isEn = state.lang === 'en';`).
   - Při přidávání karty do `js/cards-data.js` doplňte jak `name`, `effect`, `rulings`, tak i `nameEn`, `effectEn`, `rulingsEn`.
2. **Syntaktická kontrola před commitem:**
   - Po jakékoliv editaci JS souborů spusťte:
     ```bash
     npm test
     # nebo: node -c js/*.js sw.js scripts/compress.js
     ```
   - Žádný commit nesmí obsahovat syntaktickou chybu.
3. **Práce s Gitem v sandboxu:**
   - V prostředí Antigravity / sandboxu vyžadují příkazy zapisující do `.git` (např. `git add`, `git commit`, `git push`) parametr `BypassSandbox: true` kvůli zamykání `index.lock`. Běžné read-only příkazy (`git status`, `git diff`) spouštějte normálně v sandboxu.
4. **Pravidlo pro kompresi a obrázky:**
   - Pokud přidáte nové obrázky do `assets/`, spusťte `node scripts/compress.js` pro přegenerování `assets/images-manifest.json`.
   - Nikdy nekomprimujte binární soubory (žádný gzip/brotli na webp, png, jpg, audio).
5. **Zachování stavu a bezpečná práce s audiem:**
   - Zvukové efekty volejte vždy přes bezpečný wrapper (např. `playSoundSafe()` nebo obalte do `try { ... } catch (e) {}`), protože prohlížeče mohou blokovat audio před prvním kliknutím uživatele.
   - Perzistentní data ukládejte do `localStorage` s prefixem `bang_` (např. `bang_lang`, `bang_theme`, `bang_sound_enabled`, `bang_pinned_char`, `bang_matches_history`).
6. **Povýšení verze Service Workeru:**
   - Při zásadní změně aplikační logiky v `app.js` nebo stylů v `style.css` zvyšte verzi `APP_CACHE_NAME` v `sw.js` (např. `bang-app-v30` -> `bang-app-v31`).
   - `IMAGE_CACHE_NAME` neměňte, pokud nedošlo k přejmenování existujících obrázků.

---

*Tento dokument byl vytvořen a zkontrolován pro zachování kontinuity a stability vývoje projektu BANG! Companion.*
