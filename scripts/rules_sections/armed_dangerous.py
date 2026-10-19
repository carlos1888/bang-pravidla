# -*- coding: utf-8 -*-
"""
Oficiální pravidla rozšíření Ozbrojení a nebezpeční (Armed & Dangerous).
"""

ARMED_DANGEROUS_SECTIONS = [
    {
        "id": "ad-zetony-a-oranzove-karty",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Ozbrojení a nebezpeční",
        "title": "1. Žetony nabití a Nebezpečné karty (oranžový okraj)",
        "icon": "zap",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Ozbrojení a nebezpeční</span>
  <h2>1. Žetony nabití a Nebezpečné karty (oranžový okraj)</h2>
  <p class="section-lead">Do hry přichází 32 žetonů nabití a zbrusu nové Nebezpečné karty s oranžovým okrajem, které fungují na principu zásobníků energie.</p>
</div>

<div class="concept-card">
  <h3>⚡ Pravidla pro žetony nabití (Load Tokens)</h3>
  <ul>
    <li>Žetony nabití umístěte doprostřed stolu jako společnou zásobu (bank 32 žetonů).</li>
    <li>Kdykoli máte získat žeton, vezměte si jej ze zásoby. Když žeton utratíte, vraťte jej do zásoby.</li>
    <li>Žetony se udržují na vyložených Nebezpečných kartách a/nebo na kartě vaší postavy.</li>
    <li><strong>STRIKTNÍ LIMIT 4 ŽETONY:</strong> Na každé Nebezpečné kartě i na každé postavě mohou ležet <strong>nejvýše 4 žetony nabití</strong>! Pokud by měly být přidány další, jednoduše tento pokyn ignorujte.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #e67e22;">
  <h3>🟠 Pravidla pro Nebezpečné karty (oranžový okraj)</h3>
  <p>Všechny Nebezpečné karty mají oranžový okraj a chovají se ve všech ohledech stejně jako modré karty (zbraně a objekty) s těmito pravidly:</p>
  <ul>
    <li><strong>Vyložení se 3 žetony:</strong> Když zahrajete Nebezpečnou kartu, vyložte ji před sebe a <strong>položte na ni 3 žetony nabití ze zásoby</strong>. <em>Výjimka:</em> Bomba může být vyložena před libovolného hráče.</li>
    <li><strong>Nedostatek žetonů v bance:</strong> Pokud chcete zahrát Nebezpečnou kartu, ale v zásobě není požadovaný počet žetonů (obvykle 3), <strong>kartu nesmíte zahrát</strong>!</li>
    <li><strong>Použití karty:</strong> Pro použití efektu karty musíte nejprve zaplatit (odhodit do banku) požadovaný počet žetonů z této karty. Nemá-li karta dostatek žetonů, efekt nelze použít.</li>
    <li><strong>VYČERPÁNÍ A ODHOZENÍ:</strong> Jakmile jsou z Nebezpečné karty odebrány všechny žetony nabití, <strong>karta se ihned odhodí na odhazovací balíček</strong>!</li>
    <li><strong>Cat Balou a Panika! na Nebezpečnou kartu:</strong> Karta se vezme bez žetonů – všechny ležící žetony se vrátí do zásoby! Pokud kartu později znovu zahrajete, položíte na ni opět 3 žetony.</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-dobijeni-a-vylepsovani",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Ozbrojení a nebezpeční",
        "title": "2. Dobíjení žetonů, Nebezpečné zbraně a Vylepšování",
        "icon": "battery-charging",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Ozbrojení a nebezpeční</span>
  <h2>2. Dobíjení žetonů, Nebezpečné zbraně a Vylepšování</h2>
  <p class="section-lead">Dva oficiální způsoby dobíjení žetonů, pravidla vylepšitelných hnědých karet a oranžových zbraní.</p>
</div>

<div class="concept-card">
  <h3>🔋 Dva oficiální způsoby dobíjení žetonů</h3>
  <p>Existují přesně 2 pravidlové způsoby, jak přidat žetony nabití na svou Nebezpečnou kartu nebo na svou postavu (do limitu 4):</p>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">1. Způsob</span>
      <h4>Zahráním modré karty</h4>
      <p>Kdykoli zahrajete modrou kartu z ruky, <strong>můžete přidat 1 žeton nabití</strong> na libovolnou svou Nebezpečnou kartu ve hře nebo na svou postavu.</p>
      <p><em>Platí i pro Vězení:</em> Žeton získáte i tehdy, když zahrajete Vězení na jiného hráče! (Nezískáte jej ale, když modrou kartu od někoho dostanete, např. předání Dynamitu).</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">2. Způsob</span>
      <h4>Nuceným odhozením karty ve 3. fázi</h4>
      <p>Kdykoli musíte během 3. fáze svého tahu odhodit jednu či více karet z ruky kvůli limitu životů, <strong>můžete přidat 1 žeton nabití za každou takto odhozenou kartu</strong> na svou kartu nebo postavu!</p>
      <p><em>Pamatujte:</em> V této fázi nelze odhazovat dobrovolně. Takto získané žetony nelze ihned využít, protože 3. fází váš tah končí.</p>
    </div>
  </div>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🔫 Nebezpečné zbraně (Oranžové zbraně)</h3>
  <ul>
    <li>Mají oranžový okraj, černobílou ilustraci a číslo v zaměřovači. Nahrazují vyloženou kartu zbraně.</li>
    <li>Kromě běžného dostřelu mají <strong>zvláštní schopnost</strong>, kterou můžete aktivovat zaplacením žetonů nabití <strong>při zahrání karty BANG! a dříve, než cíl zareaguje</strong> (kartou Vedle! apod.).</li>
    <li><strong>DŮLEŽITÉ:</strong> Tyto zvláštní efekty můžete použít, <strong>POUZE pokud zahráváte skutečnou kartu BANG!</strong>, nikoli karty s podobným efektem jako Kulomet, Křesadlovka, Rychlopalba!</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold); margin-top: 1.5rem;">
  <h3>⭐ Vylepšitelné karty (Hnědý okraj)</h3>
  <p>Vylepšitelné hnědé karty mají efekt, který lze posílit zaplacením požadovaného množství žetonů nabití:</p>
  <ul>
    <li>Žetony mohou pocházet z <strong>libovolné vaší vyložené Nebezpečné karty nebo z vaší postavy</strong> (v libovolné kombinaci).</li>
    <li>Rozhodnutí o vylepšení se dělá vždy při zahrání karty před vyhodnocením efektu.</li>
    <li>Vylepšení můžete použít i <strong>několikrát</strong>, pokud máte dostatek žetonů a zaplatíte za to!</li>
    <li><em>Příklad:</em> Karta <strong>Malý doušek</strong> vyléčí 1 život plus 1 další život za každé 3 zaplacené žetony nabití. Za 6 žetonů tak získáte zpět celkem 3 životy!</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-bomba-a-karty",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Ozbrojení a nebezpeční",
        "title": "3. Bomba, klíčové karty a interakce",
        "icon": "alert-triangle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Ozbrojení a nebezpeční</span>
  <h2>3. Bomba, klíčové karty a interakce</h2>
  <p class="section-lead">Pravidla vyhodnocení Bomby a klíčových karet z rozšíření Ozbrojení a nebezpeční.</p>
</div>

<div class="concept-card" style="border-left: 4px solid #c0392b;">
  <h3>💣 Bomba (Detailní vyhodnocení)</h3>
  <p>Zahrajte tuto kartu na <strong>libovolného hráče</strong> se 3 žetony nabití ze zásoby:</p>
  <ul>
    <li>Když na začátku vašeho tahu leží Bomba před vámi, <strong>„sejměte“</strong>:
      <ul>
        <li>Otočíte <strong>♥ nebo ♦ (červená):</strong> Předejte Bombu hráči po vaší levici (ten ji bude vyhodnocovat na začátku svého tahu).</li>
        <li>Otočíte <strong>♣ nebo ♠ (černá):</strong> Odstraňte z Bomby <strong>2 žetony nabití</strong>.</li>
      </ul>
    </li>
    <li><strong>VÝBUCH:</strong> Jakmile na kartě dojdou žetony nabití, <strong>Bomba exploduje!</strong> Karta se odhodí a hráč <strong>ztrácí 2 životy</strong>!</li>
    <li><strong>Okamžitý výbuch kartou Rez:</strong> Bomba neexploduje, když ji někdo sebere Panikou či odhodí Cat Balou. Exploduje však tehdy, <strong>když jí dojdou žetony vlivem karty Rez</strong>!</li>
    <li><strong>Časové pořadí:</strong> Jestliže před vámi leží současně Dynamit, Vězení a Bomba, vyhodnocují se v pořadí: <strong>1. Dynamit, 2. Vězení, 3. Bomba</strong>!</li>
  </ul>
</div>

<div class="concept-card">
  <h3>📜 Specifika dalších karet</h3>
  <ul>
    <li><strong>Rez:</strong> Všichni ostatní hráči musí odstranit po 1 žetonu ze svých Nebezpečných karet i z postavy. Všechny takto odstraněné žetony si položte na svou postavu (do limitu 4), zbytek jde do banku!</li>
    <li><strong>Stepní běžec:</strong> Právě provedené „sejmutí“ musí být zopakováno a předchozí výsledek neplatí. Lze použít na jakékoli sejmutí (i vlastní) i mimo svůj tah! Může se opakovat zaplacením dalšího žetonu.</li>
    <li><strong>Křesadlovka &amp; Rychlopalba:</strong> Nejsou to karty BANG!, takže se nepočítají do limitu 1 BANG! za tah a nespouštějí efekt zbraně.</li>
    <li><strong>Dvouhlavňovka:</strong> Karta BANG! s křížovým symbolem (♦) nemůže být zrušena Barelem!</li>
    <li><strong>Jourdonnais vs Buntline Special:</strong> Pokud se Jourdonnais vyhne kartě BANG! posílené kartou Buntline Special přes svůj Barel, neztrácí život, ale musí odhodit kartu z ruky.</li>
    <li><strong>Lucky Duke &amp; Stepní běžec:</strong> Lucky Duke při použití Stepního běžce opakuje celé sejmutí – otočí tedy dvě nové karty a jednu si vybere!</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-postavy",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Ozbrojení a nebezpeční",
        "title": "4. 8 nových postav Ozbrojených a nebezpečných",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Ozbrojení a nebezpeční</span>
  <h2>4. 8 nových postav Ozbrojených a nebezpečných</h2>
  <p class="section-lead">Oficiální schopnosti 8 postav specializovaných na využívání žetonů nabití.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Al Preacher (4 životy)</h4>
    <p>Může být aktivován i mimo vlastní tah. Může si dobrat 1 kartu z balíčku za každou zahranou modrou či oranžovou kartu (zaplacením 2 žetonů nabití z postavy). Musí jej aktivovat dříve, než je zahrána jiná karta.</p>
  </div>

  <div class="char-rule-box">
    <h4>Bass Greeves (4 životy)</h4>
    <p>Může odhodit 1 kartu z ruky a přidat 2 žetony nabití na libovolnou svou Nebezpečnou kartu nebo na postavu (nemůže dát po jednom na dvě různé karty).</p>
  </div>

  <div class="char-rule-box">
    <h4>Bloody Mary (4 životy)</h4>
    <p>Kdykoli je její karta BANG! zrušena kartou Vedle!, dobere si 1 kartu z balíčku. Nefunguje na Křesadlovku, Rychlopalbu ani Kulomet.</p>
  </div>

  <div class="char-rule-box">
    <h4>Frankie Canton (4 životy)</h4>
    <p>Jednou za tah si může vzít 1 žeton nabití z libovolné Nebezpečné karty ve hře (své i cizí) nebo z postavy jiného hráče a položit si ho na svou postavu.</p>
  </div>

  <div class="char-rule-box">
    <h4>Julie Cutter (4 životy)</h4>
    <p>Kdykoli jí jiný hráč způsobí ztrátu alespoň 1 života, „sejme“: otočí-li červenou kartu (♥/♦), útočník se stává automatickým cílem efektu BANG! bez ohledu na vzdálenost.</p>
  </div>

  <div class="char-rule-box">
    <h4>Mexicali Kid (4 životy)</h4>
    <p>Ve svém tahu může zaplatit 2 žetony nabití a vystřelit 1 BANG! navíc (bez zahrání karty). Tento výstřel se nepočítá do limitu 1 BANG! za tah a nespouští efekt zbraně.</p>
  </div>

  <div class="char-rule-box">
    <h4>Ms. Abigail (4 životy)</h4>
    <p>Karty s hodnotami J, Q, K a A zahrané na ni jinými hráči nemají žádný efekt (je proti nim imunní, pokud je jediným cílem).</p>
  </div>

  <div class="char-rule-box">
    <h4>Red Ringo (4 životy)</h4>
    <p>Začíná hru se 4 žetony nabití na své postavě. Ve svém tahu může přemístit až 2 žetony ze své postavy na své Nebezpečné karty ve hře.</p>
  </div>
</div>
"""
    }
]
