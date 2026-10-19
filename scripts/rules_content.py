# -*- coding: utf-8 -*-

RULES_SECTIONS = [
    {
        "id": "uvod-a-cile",
        "title": "1. Úvod a herní cíle všech rolí",
        "icon": "target",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní koncept</span>
  <h2>1. Úvod a herní cíle všech rolí</h2>
  <p class="section-lead">BANG! je taktická westernová přestřelka. Když hrajete <strong>Dynamite Box společně s Legendami</strong>, hrajete s kompletní sadou všech oficiálních rozšíření současně. Zde je přehled všech rolí a jejich vítězných podmínek.</p>
</div>

<div class="roles-grid">
  <div class="role-card role-sheriff">
    <div class="role-badge">Veřejná role</div>
    <h3>⭐️ Šerif</h3>
    <div class="role-life">+1 život navíc oproti kartě postavy</div>
    <p><strong>Cíl:</strong> Ochránit zákon a pořádek. Musí zabít všechny Bandity a Odpadlíka.</p>
    <div class="role-rules">
      <ul>
        <li>Hraje s trvale odhalenou kartou role.</li>
        <li>Začíná hru jako první hráč.</li>
        <li><strong>Imunita:</strong> Na Šerifa nelze zahrát kartu <em>Vězení</em> ani <em>Vagon duchů</em>.</li>
        <li><strong>Trest:</strong> Pokud Šerif osobně zabije svého Pomocníka (Vice), za trest musí odhodit všechny karty z ruky i ze stolu!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-deputy">
    <div class="role-badge">Tajná role</div>
    <h3>🛡️ Pomocník šerifa (Vice)</h3>
    <div class="role-life">Počet životů dle postavy</div>
    <p><strong>Cíl:</strong> Chránit Šerifa za každou cenu a zničit všechny Bandity a Odpadlíka.</p>
    <div class="role-rules">
      <ul>
        <li>Hraje v utajení a nesmí odhalit svou roli.</li>
        <li>Sdílí cíl se Šerifem.</li>
        <li><strong>Kolektivní vítězství:</strong> Pokud zvítězí Šerif, Pomocník (Vice) vítězí také, i když byl během partie vyřazen!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-outlaw">
    <div class="role-badge">Tajná role</div>
    <h3>💀 Bandita</h3>
    <div class="role-life">Počet životů dle postavy</div>
    <p><strong>Cíl:</strong> Zlikvidovat Šerifa za jakoukoli cenu.</p>
    <div class="role-rules">
      <ul>
        <li>Vítězí okamžitě, jakmile padne Šerif (pokud není jediným přeživším Odpadlík).</li>
        <li>Všichni Bandité vítězí společně, i ti, kteří již byli zabiti.</li>
        <li><strong>Odměna za hlavu:</strong> Kdokoli zabije Banditu (i jiný Bandita), okamžitě si lízne <strong>3 karty z balíčku</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-renegade">
    <div class="role-badge">Tajná role</div>
    <h3>🗡️ Odpadlík</h3>
    <div class="role-life">Počet životů dle postavy</div>
    <p><strong>Cíl:</strong> Stát se novým Šerifem. Zůstat jako jediný přeživší ve hře!</p>
    <div class="role-rules">
      <ul>
        <li>Hraje sám za sebe.</li>
        <li><strong>Kritické pravidlo:</strong> Šerifa musí zabít až jako úplně posledního v duelu 1 na 1.</li>
        <li>Pokud Šerif zemře dříve, než jsou eliminováni všichni Pomocníci (Vice) a Bandité, <strong>vítězí Bandité a Odpadlík prohrává</strong>!</li>
      </ul>
    </div>
  </div>
</div>

<div class="callout callout-info">
  <h4>👥 Speciální pravidla pro 8 hráčů (Dodge City)</h4>
  <p>Při 8 hráčích se použije 8 rolí: <strong>1 Šerif, 2 Pomocníci (Vice), 3 Bandité a 2 Odpadlíci</strong>.</p>
  <p>Každý z obou Odpadlíků hraje sám za sebe. Pokud se Šerif ocitne v boji se dvěma Odpadlíky a Šerif zemře, <strong>vítězí Bandité</strong> (přestože už nežijí)!</p>
</div>

<div class="callout callout-warning">
  <h4>🤠 Speciální pravidla pro 3 hráče</h4>
  <p>Rozdejte lícem nahoru 3 role: <strong>Pomocník šerifa (Vice), Bandita, Odpadlík</strong>. Všichni znají své role:</p>
  <ul>
    <li><strong>Pomocník šerifa (Vice)</strong> musí zabít Odpadlíka.</li>
    <li><strong>Odpadlík</strong> musí zabít Banditu.</li>
    <li><strong>Bandita</strong> musí zabít Pomocníka šerifa (Vice).</li>
  </ul>
  <p>Hráč zvítězí okamžitě, pokud sám zasadí smrtelný zásah svému cíli. Pokud cíl zabije někdo jiný, cílem obou přeživších je zůstat jako poslední naživu. Za každého zabitého hráče je odměna 3 karty. Vězení lze hrát na kohokoli.</p>
</div>

<div class="callout callout-purple">
  <h4>👻 Varianta Stínoví pistolníci &amp; Stínový odpadlík (Zlatá horečka)</h4>
  <p>Při této variantě hráči po smrti nevypadávají natrvalo! Ve svých dalších tazích se vracejí jako „stínoví pistolníci“ s 0 životy. Dobírají 2 karty, mohou střílet a nakupovat, a na konci tahu všechny karty odhodí (valouny zlata si nechávají).</p>
  <p><strong>Stínový odpadlík</strong> se na začátku každého svého tahu podívá na odhalené role na stole (Šerif a mrtví hráči) a přidá se k týmu, který má více odhalených rolí. Při shodě pomáhá Banditům!</p>
</div>
"""
    },
    {
        "id": "priprava-hry",
        "title": "2. Herní materiál a Příprava stolu (Všechna rozšíření)",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Příprava hry</span>
  <h2>2. Herní materiál a Příprava stolu</h2>
  <p class="section-lead">Návod, jak připravit stůl, když hrajete se všemi balíčky z Dynamite Boxu a s Legendami současně.</p>
</div>

<div class="steps-container">
  
  <div class="step-box">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Rozdání rolí</h4>
      <p>Zamíchejte karty rolí podle počtu hráčů. Každý dostane 1 tajnou kartu role. Šerif ji ihned otočí lícem nahoru, ostatní hráči své role tají.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Postavy (Legendy strana A) &amp; Náboje (Životy)</h4>
      <p>Zamíchejte 16 velkých oboustranných karet <strong>Legendárních postav</strong>. Rozdejte každému 1 kartu <strong>lícem nahoru běžnou stranou A</strong> (karty berte zespodu balíčku, aby nikdo neviděl rubovou legendární stranu B).</p>
      <p>Každý hráč si vezme desku a tolik dřevěných nábojů (životů), kolik uvádí karta jeho postavy. <strong>Šerif hraje s +1 nábojem (životem) navíc</strong>.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Žetony slávy (Legendy)</h4>
      <p>Každý hráč si vezme sadu <strong>5 žetonů slávy stejné barvy</strong> (z celkových 35 žetonů v 7 barvách) a položí je před sebe.</p>
    </div>
  </div>

  <div class="step-box step-highlight">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Počáteční karty do ruky (Závazné pravidlo Legend!)</h4>
      <p><strong>POZOR – Oficiální pravidlo Legend (str. 3 pravidel):</strong></p>
      <p>Všichni hráči začínají hru s <strong>přesně 4 kartami v ruce</strong> z dobíracího balíčku bez ohledu na počet životů (včetně Šerifa!). 6., 7. a 8. hráč začínají s <strong>5 kartami</strong>.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">5</div>
    <div class="step-content">
      <h4>Vlak a Trať stanic (Velká vlaková loupež)</h4>
      <p>Zamíchejte destičky stanic a vyložte do řady tolik stanic, kolik je hráčů. Pod první stanici (zcela vlevo) položte lokomotivu náhodnou stranou nahoru (sejměte: ♣/♠ = <strong>Ironhorse</strong>, ♥/♦ = <strong>Leland</strong>). Vlevo od lokomotivy vyložte <strong>3 náhodné vagony</strong>.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">6</div>
    <div class="step-content">
      <h4>Karty činů (Legendy)</h4>
      <p>Zamíchejte balíček činů Legend a položte lícem dolů. Otočte <strong>1 kartu činu lícem nahoru</strong>. Na stole smí být v průběhu hry vyloženy <strong>maximálně 4 činy současně</strong>.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">7</div>
    <div class="step-content">
      <h4>Zlatá horečka &amp; Ozbrojení a nebezpeční</h4>
      <p>Vyložte balíček vybavení Zlaté horečky a otočte <strong>3 karty do veřejné nabídky</strong>. Doprostřed stolu připravte bank valounů zlata a bank <strong>32 žetonů nabití</strong> (Red Ringo si vezme 4 žetony na svou postavu).</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">8</div>
    <div class="step-content">
      <h4>Balíčky globálních událostí</h4>
      <p><strong>Balíček událostí (High Noon / Fistful):</strong> Zamíchejte 12–15 náhodných karet, na spodek položte finální kartu (<em>Pravé poledne</em> nebo <em>Fistful</em>). Balíček leží u Šerifa, otáčí se na začátku jeho tahu od 2. kola.</p>
      <p><strong>Balíček Divokého západu (Wild West Show):</strong> Samostatný balíček uprostřed stolu (na dně karta <em>Divoký západ</em>). Otáčí se VŽDY, když někdo zahraje <em>Dostavník</em> nebo <em>Wells Fargo</em>.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">9</div>
    <div class="step-content">
      <h4>Dřevěný dynamit (Dynamite Box varianta)</h4>
      <p>Šerif položí dřevěnou patronu dynamitu před sebe na stůl.</p>
    </div>
  </div>

</div>
"""
    },
    {
        "id": "pojmy-a-funkce",
        "title": "3. Základní pojmy, mechaniky a přesné definice",
        "icon": "book-open",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní mechaniky</span>
  <h2>3. Přesné vymezení herních pojmů</h2>
  <p class="section-lead">Největší množství sporných situací vzniká záměnou slov „Zahrání“ vs „Použití“ nebo „Karta“ vs „Efekt“. Zde je jejich závazný výklad.</p>
</div>

<div class="concept-card">
  <h3>1. Zahrání karty vs Použití karty vs Odhození karty</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Zahrání karty</span>
      <p>Vyložení karty z ruky na stůl za účelem vyvolání jejího efektu. Lze provést <strong>pouze ve 2. fázi vlastního tahu</strong> (výjimka: Vedle! a Pivo při smrtelném zranění).</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-sup">Použití karty — Nadřazený pojem</span>
      <p>Zahrnuje jakékoli zapojení karty do hry: zahrání, ale i <strong>její odhození kvůli jiné kartě či schopnosti</strong> (odhození BANG! v Duelu, odhození karet u Sida Ketchuma či Doca Holydaye, zaplacení vagonu na stanici).</p>
    </div>
  </div>
  <div class="concept-example">
    <strong>Zásadní pravidlo výkladu:</strong> Pokud karta zakazuje „hraní karty BANG!“ (např. událost Kazatel), smíte kartu BANG! stále <em>použít k odhození</em> (např. na stanici Boom Town). Pokud by však bylo zakázáno „použití karty BANG!“, nesmíte ji zapojit vůbec nijak.
  </div>
</div>

<div class="concept-card">
  <h3>2. Karta BANG! vs Efekt BANG!</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Karta BANG!</span>
      <p>Fyzická karta s nápisem BANG! (nebo karta zahraná přes Calamity Janet, LeMat či Annie Versary). Podléhá pravidlu <strong>pouze 1 karta BANG! za tah</strong>. Pouze proti ní vyžaduje Slab the Killer 2 Vedle!.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Efekt BANG!</span>
      <p>Výstřel způsobený kartami: <em>Kulomet</em>, <em>Křesadlovka</em>, <em>Rychlopalba</em>, <em>Derringer</em>, <em>Houfnice</em>, <em>Tomahavk</em> nebo schopnostmi postav. <strong>NEPOČÍTÁ SE do limitu 1 BANG! za tah!</strong></p>
    </div>
  </div>
  <div class="concept-example">
    <strong>Praktický důsledek:</strong>
    <ul>
      <li>Proti kartě <em>Indiáni!</em> je nutné odhodit <strong>přímo kartu BANG!</strong> (nelze odhodit Křesadlovku, Kulomet ani Tomahavk).</li>
      <li>Pokud <em>Slab the Killer</em> zahraje Kulomet nebo Křesadlovku, oběti stačí k obraně <strong>pouze 1 efekt Vedle!</strong>.</li>
      <li>V jednom tahu můžete zahrát Kulomet, Křesadlovku, Derringer i svou standardní kartu BANG!.</li>
    </ul>
  </div>
</div>

<div class="concept-card">
  <h3>3. Vzdálenost mezi hráči vs Dostřel zbraní</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Vzdálenost</span>
      <p>Minimální počet míst mezi živými hráči u stolu. Výchozí vzdálenost k sousedům je 1. Mění ji <em>Mustang</em>, <em>Skrýš</em>, <em>Plošinový vůz</em> (+1 k vám), <em>Hledí</em>, <em>Dalekohled</em> (-1 od vás).</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-gun">Dostřel zbraně</span>
      <p>Maximální vzdálenost, na kterou můžete z ruky vystřelit kartu BANG!. Určuje ji vaše zbraň (Colt .45 dosáhne na vzdálenost 1, Winchester na vzdálenost 5).</p>
    </div>
  </div>
  <div class="concept-example">
    <strong>ZLATÉ PRAVIDLO:</strong> Zbraně <strong>nemění skutečnou vzdálenost</strong> mezi hráči! Představují pouze dostřel pro kartu BANG!. Kartu <em>Panika!</em> (dosah 1) tedy s Winchesterem na hráče ve vzdálenosti 2 nezahrajete, pokud nemáte Hledí!
  </div>

  <div class="concept-example" style="margin-top: 1rem; border-left: 4px solid var(--accent-gold, #c89b3c);">
    <h4 style="margin: 0 0 0.5rem; color: var(--color-brown, #5c3a21); font-size: 1.1rem;">🐎 Sčítání a kombinování karet vzdálenosti</h4>
    <p><strong>Ano, všechny tyto karty se sčítají.</strong> Podle oficiálních pravidel karetní hry nesmíte mít před sebou vyložené dvě úplně stejné modré karty (se stejným názvem). Protože má každá z těchto čtyř karet jiný název, můžete je mít vyložené na stole všechny najednou a jejich efekty se kombinují.</p>
    <p style="margin-top: 0.5rem;"><strong>Vzdálenosti se v praxi počítají následovně:</strong></p>
    
    <div style="margin-top: 0.75rem;">
      <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🤠 Obranné karty (když na vás někdo útočí)</h5>
      <p style="margin-bottom: 0.25rem;">Tyto karty zvyšují vzdálenost, na kterou vás vidí ostatní hráči:</p>
      <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
        <li><strong>Mustang:</strong> Ostatní vás vidí o 1 dál.</li>
        <li><strong>Skrýš</strong> (případně Barel v základní hře*): Ostatní vás vidí o 1 dál.</li>
      </ul>
      <p><strong>Výsledek:</strong> Pokud máte vyloženého Mustanga i Skrýš, ostatní hráči vás vidí celkově o 2 dál. Hráč, který sedí hned vedle vás (základní vzdálenost 1), na vás potřebuje zbraň s dostřelem minimálně 3.</p>
      <p style="font-size: 0.85rem; color: var(--color-brown, #5c3a21); opacity: 0.85; margin-top: 0.35rem;"><em>*Pravidlová poznámka: Barel v základní hře poskytuje šanci na sejmutí Vedle!, vzdálenost k vám přímo zvyšují Mustang a Skrýš (či schopnost postavy Paul Regret).</em></p>
    </div>

    <div style="margin-top: 1rem;">
      <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🎯 Útočné karty (když útočíte vy)</h5>
      <p style="margin-bottom: 0.25rem;">Tyto karty zkracují vzdálenost, na kterou vidíte vy ostatní hráče:</p>
      <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
        <li><strong>Hledí</strong> (případně Appaloosa v základní hře): Vy vidíte ostatní o 1 blíž.</li>
        <li><strong>Dalekohled:</strong> Vy vidíte ostatní o 1 blíž.</li>
      </ul>
      <p><strong>Výsledek:</strong> Pokud máte vyložené Hledí i Dalekohled, vidíte všechny hráče o 2 blíž. Hráče na reálnou vzdálenost 3 tak vidíte na vzdálenost 1 a stačí vám k útoku (např. kartou Bang! nebo Panika) základní zbraň Colt .45.</p>
    </div>
  </div>
</div>

<div class="concept-card">
  <h3>4. Pravidla pro Sejmutí („Draw! / Estrazione!“)</h3>
  <p>Při sejmutí otočíte vrchní kartu z dobíracího balíčku na odhazovací balíček a zkontrolujete barvu a hodnotu v levém dolním rohu. Hodnoty jdou vzestupně: <code>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</code>.</p>
  <ul>
    <li><strong>Lucky Duke:</strong> Otáčí vždy 2 karty a vybírá si výsledek.</li>
    <li><strong>Podkova (Zlatá horečka):</strong> Otáčí o 1 kartu navíc (Lucky Duke s Podkovou otáčí 3 karty!).</li>
    <li><strong>Stepní běžec:</strong> Lze zahrát ihned po jakémkoli sejmutí – celé předchozí sejmutí se zruší a provede se znovu!</li>
  </ul>
</div>

<div class="concept-card">
  <h3>5. Zranění, Životy a Pravidla karty Pivo</h3>
  <ul>
    <li>Počet nábojů představuje vaše aktuální životy i limit karet v ruce na konci tahu.</li>
    <li><strong>Karta Pivo ve vlastním tahu:</strong> Lze zahrát ve 2. fázi pro vyléčení 1 života (do počátečního maxima).</li>
    <li><strong>Karta Pivo mimo tah:</strong> Lze zahrát <strong>POUZE při smrtelném zranění</strong> (při ztrátě posledního života). Nelze hrát mimo tah, pokud jste pouze zraněni, ale stále žijete!</li>
    <li><strong>Pivo ve dvou hráčích:</strong> Jakmile zbývají pouze 2 hráči, Pivo <strong>nemá léčivý účinek</strong>. Ve Zlaté horečce jej však lze směnit za 1 valoun zlata; karta <em>Poslední volání</em> z Údolí stínů léčí i ve 2 hráčích.</li>
    <li><em>Saloon, Tequila, Čutora, Bečka piva</em> <strong>nejsou Pivo</strong> a nelze je hrát mimo svůj tah k záchraně života!</li>
  </ul>
</div>
"""
    },
    {
        "id": "proubeh-kola",
        "title": "4. Detailní průběh kola a tah hráče (Krok za krokem)",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Průběh hry</span>
  <h2>4. Detailní průběh tahu hráče</h2>
  <p class="section-lead">Kompletní sekvence fází každého tahu při hře se všemi rozšířeními.</p>
</div>

<div class="phase-card phase-0">
  <div class="phase-header">
    <span class="phase-tag">Fáze 0</span>
    <h3>Fáze 0: Události a časované karty před tahem</h3>
  </div>
  <div class="phase-body">
    <ol class="phase-steps-list">
      <li>
        <strong>Otočení globální události &amp; Posun vlaku (Pouze Šerif):</strong>
        <p>Šerif na začátku každého svého tahu od 2. kola otočí novou kartu události (High Noon / Fistful) a posune lokomotivu o 1 stanici doprava (vlak táhne vagony).</p>
      </li>
      <li>
        <strong>Okamžité efekty začátku tahu:</strong>
        <p>Aplikují se události platící „na začátku tahu“ (např. <em>Pravé poledne</em> = ztráta 1 života).</p>
      </li>
      <li>
        <strong>PŘÍSNÉ POŘADÍ ČASOVANÝCH KARET NA STOLE:</strong>
        <div class="timing-subgrid">
          <div class="timing-item">
            <strong>1. DYNAMIT</strong>
            <p>Sejme: ♠ 2–9 = výbuch za 3 životy; jinak se posune doleva.</p>
          </div>
          <div class="timing-item">
            <strong>2. VĚZENÍ</strong>
            <p>Volba A: Sejme na ♥ = útěk; jinak ztráta tahu. Volba B (Legendy): Odhodí 1 ♥ kartu z ruky a hraje bez rizika!</p>
          </div>
          <div class="timing-item">
            <strong>3. BOMBA</strong>
            <p>Sejme: ♥/♦ předá dál; ♣/♠ odebere 2 žetony nabití. Při 0 exploduje za 2 životy!</p>
          </div>
          <div class="timing-item">
            <strong>4. CHŘESTÝŠ</strong>
            <p>Sejme na ♠ = ztráta 1 života. (Při neúspěchu ve Vězení se na Chřestýše nesnímá!).</p>
          </div>
        </div>
      </li>
      <li>
        <strong>Karta Mapa:</strong>
        <p>Prohlédne 2 vrchní karty balíčku a 1 může odhodit.</p>
      </li>
    </ol>
  </div>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">Fáze 1</span>
    <h3>Fáze 1: Dobrání karet do ruky</h3>
  </div>
  <div class="phase-body">
    <p>Standardně si hráč dobere <strong>2 vrchní karty</strong> z dobíracího balíčku.</p>
    <p>Schopnosti modifikující tuto fázi: <em>Jesse Jones</em> (první z ruky soupeře), <em>Pedro Ramirez</em> (první z odhozu), <em>Kit Carlson</em> (vybírá ze 3 karet), <em>Pixie Pete</em> (bere 3 karty), <em>Bill Noface</em> (1 + zranění), <em>Black Jack</em> (ukáže 2. kartu), <em>Dutch Will</em> (2 dobere, 1 odhodí za 1 valoun zlata).</p>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">Fáze 2</span>
    <h3>Fáze 2: Hraní karet a akce z rozšíření</h3>
  </div>
  <div class="phase-body">
    <p>Můžete provést libovolný počet akcí v libovolném pořadí:</p>
    <ul class="phase-actions-list">
      <li><strong>Běžné karty:</strong> Hnědé (okamžitý efekt), Modré (vyložení před sebe). <em>Omezení:</em> max. 1 BANG! za tah, max. 1 zbraň, unikátní karty ve hře.</li>
      <li><strong>Zelené karty (Dodge City):</strong> Můžete odhodit kteroukoli svou zelenou kartu vyloženou v předchozích kolech.</li>
      <li><strong>Zlatá horečka:</strong> Nákup vybavení za valouny zlata; nucené odhození soupeřova vybavení za cenu + 1 valoun; směna Piva za 1 valoun.</li>
      <li><strong>Velká vlaková loupež:</strong> Posun vlaku zdarma o 1 stanici (pak je nákup vagonu povinný!); nákup přiřazeného vagonu za cenu na stanici.</li>
      <li><strong>Ozbrojení a nebezpeční:</strong> Vykládání oranžových karet se 3 žetony nabití; nabíjení karet zahráním modrých karet (+1 žeton); vylepšování karet žetony nabití.</li>
      <li><strong>Legendy:</strong> Vykonání činu (položení 2 žetonů slávy). Pokud jste Legenda: <strong>přivlastnění činu</strong> (způsobení 1 nezvratného zranění jiné legendě).</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">Fáze 3</span>
    <h3>Fáze 3: Odhození nadbytečných karet &amp; Nabíjení</h3>
  </div>
  <div class="phase-body">
    <p>Limit karet v ruce = <strong>aktuální počet vašich životů</strong>.</p>
    <ul>
      <li><em>Výjimky:</em> Sean Mallory (až 10 karet), Zbraňový pás (8 karet).</li>
      <li><strong>Pravidlo Legend pro 1 život:</strong> Pokud vám zbývá pouze 1 život, smíte si v ruce ponechat <strong>2 karty</strong>!</li>
      <li><strong>NABÍJENÍ V TÉTO FÁZI:</strong> Za každou kartu, kterou musíte kvůli limitu odhodit, přidejte <strong>1 žeton nabití</strong> na libovolnou svou Nebezpečnou kartu nebo na postavu!</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-4">
  <div class="phase-header">
    <span class="phase-tag">Fáze 4</span>
    <h3>Fáze 4: Konec tahu &amp; Chlubení se činem (Legendy)</h3>
  </div>
  <div class="phase-body">
    <div class="callout callout-gold">
      <h4>🏆 Chlubení se činem (Legendy)</h4>
      <p>Jestliže jste během celého svého tahu <strong>nevykonali žádný čin</strong> (dokonce i když jste byli ve Vězení!):</p>
      <ol>
        <li>Vyložte novou kartu činu z balíčku.</li>
        <li>Pokud je vyloženo více než 4 činy, odhoďte ten s nejvyšším počtem žetonů slávy.</li>
        <li>Položte <strong>1 svůj žeton slávy</strong> na vyložený čin, kde ještě žádný váš žeton neleží.</li>
      </ol>
    </div>
    <div class="callout callout-success">
      <h4>⭐️ ZROD LEGENDY (Proměna na stranu B)</h4>
      <p>Jakmile hráč umístí svůj <strong>poslední (5.) žeton slávy</strong>, okamžitě se stává <strong>LEGENDOU</strong>! Otočí postavu na stranu B a <strong>doplní si životy na 3</strong> (pokud má méně)!</p>
    </div>
    <p>Na konci tahu: Jimmy Texas dobere 1 kartu; Don Bell snímá na možnost odehrát další celý tah.</p>
  </div>
</div>
"""
    },
    {
        "id": "pravidla-rozsireni",
        "title": "5. Pravidla a specifika jednotlivých rozšíření",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Detaily rozšíření</span>
  <h2>5. Pravidla a specifika jednotlivých sad</h2>
  <p class="section-lead">Kompletní přehled fungování specifických herních prvků z každé krabičky.</p>
</div>

<div class="expansion-detail-card">
  <h3>🌟 Legendy</h3>
  <p>Přináší 16 legendárních verzí postav, karty činů a žetony slávy.</p>
  <ul>
    <li><strong>Symbol vývěsního štítu:</strong> Pokud je na kartě činu vyobrazen dřevěný štít s písmenem L, akce požadované kartou můžete volně provádět, i kdyby to pravidla normálně nedovolovala (dobrovolně odhodit Pivo u <em>Hrdla lahve</em>, nebo si přímo ubrat život u <em>Bezejmenného muže</em>).</li>
    <li><strong>Přivlastnění činu:</strong> Může provést pouze Legenda na straně B. Provede požadavek činu a způsobí jiné legendě ztrátu 1 života bez možnosti obrany (nesmí jít o poslední život, pokud nejde o Slab the Killera). Čin se poté odhodí a nahradí novým.</li>
    <li><strong>Změny pravidel základní hry:</strong> Hráč s 1 životem smí držet 2 karty; ve Vězení lze odhodit 1 ♥ kartu z ruky pro okamžitý útěk.</li>
  </ul>
</div>

<div class="expansion-detail-card">
  <h3>🚂 Velká vlaková loupež</h3>
  <p>Představuje vlakovou soupravu s lokomotivou a 3 vagony jedoucí po stanicích.</p>
  <ul>
    <li><strong>Vagony ve hře:</strong> Chovají se jako modré karty, ale <strong>NIKDY SE NESMÍ VZÍT DO RUKY</strong>! Při ukradení Panikou jdou rovnou před nového majitele na stůl.</li>
    <li><strong>Konečná stanice:</strong> Když se lokomotiva posune za poslední stanici, vyhodnotí se její efekt:
      <ul>
        <li><strong>Ironhorse:</strong> Všichni hráči jsou cílem BANG!. Pokud zemřou všichni, <strong>vítězí Bandité</strong>!</li>
        <li><strong>Leland:</strong> Spustí efekt Hokynářství pro všechny hráče.</li>
      </ul>
      Poté se stanice i vagony zamíchají, sestaví se nový vlak a lokomotiva se otočí na druhou stranu.</li>
    <li><strong>Vagon duchů:</strong> Hráč bez životů zůstává ve hře. Při ztrátě vagonu definitivně umírá bez odměny pro vraha. Šerif nesmí mít Vagon duchů!</li>
  </ul>
</div>

<div class="expansion-detail-card">
  <h3>🟠 Ozbrojení a nebezpeční (Armed &amp; Dangerous)</h3>
  <p>Přináší oranžové nebezpečné zbraně a vybavení se žetony nabití.</p>
  <ul>
    <li><strong>Oranžové karty:</strong> Vykládají se se 3 žetony nabití. Efekty se platí žetony z karty. Při vyčerpání posledního žetonu se karta odhodí.</li>
    <li><strong>Dobíjení žetonů:</strong> Zahráním modré karty (+1 žeton) nebo odhozením karet ve 3. fázi (+1 žeton za kartu). Limit: max. 4 žetony na kartě i postavě.</li>
    <li><strong>Bomba:</strong> Snímá po Vězení: ♥/♦ předá dál, ♣/♠ odebere 2 žetony. Při 0 exploduje za 2 životy! Pokud Rez odebere z Bomby poslední žetony, Bomba ihned bouchne!</li>
  </ul>
</div>

<div class="expansion-detail-card">
  <h3>🪙 Zlatá horečka</h3>
  <p>Zavádí valouny zlata, černou a hnědou výbavu a Stínové pistolníky.</p>
  <ul>
    <li><strong>Zisk zlata:</strong> 1 valoun zlata ze zásoby za každé zranění způsobené jinému hráči.</li>
    <li><strong>Nákup a nucené odhození:</strong> Vybavení se kupuje za cenu v valounech. Cizí černé vybavení lze odhodit zaplacením jeho ceny + 1 valoun navíc.</li>
    <li><strong>Směna Piva:</strong> Ve svém tahu lze zahrát Pivo pro zisk 1 valounu zlata (funguje i ve 2 hráčích).</li>
  </ul>
</div>

<div class="expansion-detail-card">
  <h3>🟢 Dodge City</h3>
  <p>Zavádí zelené karty, karty vyžadující odhození další karty a pravidla pro 8 hráčů.</p>
  <ul>
    <li><strong>Zelené karty:</strong> Vykládají se před sebe na stůl. Nelze je použít v tahu vyložení. Použijí se odhozením v dalším kole (nebo mimo tah, pokud mají symbol Vedle!).</li>
    <li><strong>Odhození další karty:</strong> U karet jako Rvačka, Tequila, Rag Time je nutné při zahrání odhodit ještě 1 další kartu z ruky.</li>
  </ul>
</div>
"""
    }
]

print(f"Rich HTML Rules content compiled: {len(RULES_SECTIONS)} sections.")
