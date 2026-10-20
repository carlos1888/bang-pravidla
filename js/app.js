// BANG! Dynamite Box & Legendy — Web Controller (Clean Text, Rich Formatting & Bilingual CZ/EN)
(function() {
  'use strict';

  // State
  const state = {
    lang: localStorage.getItem('bang_lang') || 'cs',
    activeTab: 'katalog',
    searchQuery: '',
    selectedExpansion: 'all',
    selectedType: 'all',
    selectedSuit: 'all',
    selectedQuickTag: 'all',
    sortBy: 'name-asc',
    activeRulesCategory: 'all',
    activeFaqCategory: 'all',
    faqQuery: '',
    selectedCard: null,
    activeTool: 'calc',
    pinnedCharacter: JSON.parse(localStorage.getItem('bang_pinned_char') || 'null'),
    soundEnabled: localStorage.getItem('bang_sound') !== 'false'
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('.nav-tab'),
    panes: document.querySelectorAll('.tab-pane'),
    globalSearch: document.getElementById('global-search'),
    themeToggle: document.getElementById('theme-toggle'),
    soundToggle: document.getElementById('sound-toggle'),
    soundIcon: document.getElementById('sound-icon'),
    pinnedCharacterWidget: document.getElementById('pinned-character-widget'),
    catalogQuickTags: document.getElementById('catalog-quick-tags'),
    quickTagLabel: document.getElementById('quick-tag-label'),
    navTextNastroje: document.getElementById('nav-text-nastroje'),
    toolsSubnav: document.getElementById('tools-subnav'),
    toolsContentArea: document.getElementById('tools-content-area'),
    langBtnCs: document.getElementById('lang-btn-cs'),
    langBtnEn: document.getElementById('lang-btn-en'),
    brandMainTitle: document.getElementById('brand-main-title'),
    brandSubtitle: document.querySelector('.brand-titles .subtitle'),
    labelFilterTitle: document.getElementById('label-filter-title'),
    labelExpansion: document.getElementById('label-expansion'),
    labelType: document.getElementById('label-type'),
    labelSuit: document.getElementById('label-suit'),
    labelSort: document.getElementById('label-sort'),
    cardsGrid: document.getElementById('cards-grid'),
    resultsCount: document.getElementById('results-count'),
    filterExpansion: document.getElementById('filter-expansion'),
    filterType: document.getElementById('filter-type'),
    filterSuit: document.getElementById('filter-suit'),
    sortCards: document.getElementById('sort-cards'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    filterSidebar: document.getElementById('filter-sidebar'),
    filterSidebarToggle: document.getElementById('filter-sidebar-toggle'),
    activeFiltersBadge: document.getElementById('active-filters-count'),
    faqMainTitle: document.getElementById('faq-main-title'),
    faqMainLead: document.getElementById('faq-main-lead'),
    faqSearch: document.getElementById('faq-search'),
    faqList: document.getElementById('faq-list'),
    faqCatContainer: document.getElementById('faq-categories-container'),
    cardModal: document.getElementById('card-modal'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
    rulesCategoriesContainer: document.getElementById('rules-categories-container'),
    rulesTocHeader: document.getElementById('rules-toc-header'),
    rulesContentTarget: document.getElementById('rules-content-target'),
    rulesTocTarget: document.getElementById('rules-toc-target'),
    tahHraceTarget: document.getElementById('tah-hrace-target'),
    pomocnikTarget: document.getElementById('pomocnik-target'),
    footerText1: document.getElementById('footer-text-1'),
    footerText2: document.getElementById('footer-text-2'),
    footerText3: document.getElementById('footer-text-3'),
    footerRepoLink: document.getElementById('footer-repo-link'),
    footerNavLinks: document.getElementById('footer-nav-links'),
    btnScrollTop: document.getElementById('btn-scroll-top'),
    scrollTopText: document.getElementById('scroll-top-text')
  };

  // Theme Init
  function initTheme() {
    const saved = localStorage.getItem('bang_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bang_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (!els.themeToggle) return;
    els.themeToggle.innerHTML = theme === 'dark'
      ? '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }

  // =========================================================================
  // LANGUAGE CONTROLLER (CZ / EN)
  // =========================================================================
  const I18N = {
    cs: {
      brandTitle: "Companion",
      brandSubtitle: "Kompletní pravidla, encyklopedie karet & herní pomocník",
      searchPlaceholder: "Hledat kartu, postavu, pravidlo... (stiskni /)",
      themeTitle: "Přepnout tmavý / světlý westernový režim",
      navKatalog: "Katalog karet",
      navPravidla: "Pravidla",
      navFaq: "FAQ",
      navTah: "Tah hráče",
      navPomocnik: "Rychlý pomocník",
      navNastroje: "Herní nástroje",
      quickTagsLabel: "Tagy:",
      pinCharacter: "⭐ Připnout jako moji postavu",
      unpinCharacter: "✕ Odepnout postavu",
      compareCard: "⚖️ Porovnat s jinou kartou",
      filterTitle: "Filtry",
      filterReset: "Resetovat",
      filterExpansion: "Rozšíření",
      filterType: "Typ",
      filterSuit: "Barva",
      filterSort: "Řazení",
      copiesInDeck: "v balíčku",
      rangeLabel: "Dosah",
      livesLabel: "životy",
      timingLabel: "Časování",
      costLabel: "Cena / Podmínka",
      rulingsHeader: "Oficiální pravidla a přesné vyhodnocení:",
      effectHeader: "Text a funkce karty:",
      noResultsTitle: "Žádná položka neodpovídá zvoleným filtrům",
      noResultsText: "Zkuste upravit hledaný výraz nebo resetovat filtry.",
      showingResults: (c, t) => `Zobrazeno ${c} z celkem ${t} karet a položek`,
      rulesTocHeader: "Obsah pravidel",
      faqMainTitle: "⚖️ Arbitr sporných situací & Pravidlové rébusy (50+ řešení)",
      faqMainLead: "Okamžité vyhledávání v oficiálních rozhodnutích, neobvyklých kombinacích karet, sporných momentech a časových posloupnostech.",
      faqSearchPlaceholder: "Hledat otázku nebo kartu: např. Slab, Vězení, Pivo, Vagon, Bomba, Rez...",
      faqNoResults: "Nebyly nalezeny žádné sporné situace.",
      faqNoResultsDesc: "Zkuste zadat jiná klíčová slova (např. Slab, Vězení, Pivo, Vagon, Bomba, Rez, Šerif).",
      footerText1: "BANG! Companion — Pravidla, encyklopedie karet & herní pomocník",
      footerText2: "Autor hry: Emiliano Sciarra | Vývoj: daVinci Games / dV Giochi & Albi.",
      footerText3: "Tato nezávislá fanouškovská webová aplikace (BANG! Companion) slouží jako herní asistent a pravidlový průvodce pro pohodlné hraní u stolu.",
      footerRepo: "Repozitář na GitHubu",
      footerNav: '<a href="#pravidla">Pravidla</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Karty</a>',
      scrollTopText: "Nahoru",
      scrollTopTitle: "Zpět nahoru"
    },
    en: {
      brandTitle: "Companion",
      brandSubtitle: "Complete rules, card encyclopedia & tabletop companion",
      searchPlaceholder: "Search card, character, rule... (press /)",
      themeTitle: "Toggle dark / light western theme",
      navKatalog: "Card Catalog",
      navPravidla: "Rules",
      navFaq: "FAQ",
      navTah: "Player Turn",
      navPomocnik: "Quick Helper",
      navNastroje: "Game Tools",
      quickTagsLabel: "Tags:",
      pinCharacter: "⭐ Pin as My Character",
      unpinCharacter: "✕ Unpin Character",
      compareCard: "⚖️ Compare with Another Card",
      filterTitle: "Filters",
      filterReset: "Reset",
      filterExpansion: "Expansion",
      filterType: "Type",
      filterSuit: "Suit",
      filterSort: "Sorting",
      copiesInDeck: "in deck",
      rangeLabel: "Range",
      livesLabel: "lives",
      timingLabel: "Timing",
      costLabel: "Cost / Requirement",
      rulingsHeader: "Official Rulings & Timing Resolution:",
      effectHeader: "Card Text & Ability:",
      noResultsTitle: "No cards match the selected filters",
      noResultsText: "Try adjusting your search query or reset filters.",
      showingResults: (c, t) => `Showing ${c} of ${t} cards and items`,
      rulesTocHeader: "Table of Contents",
      faqMainTitle: "⚖️ Conflict Arbitrator & Rule Enigmas (50+ Resolutions)",
      faqMainLead: "Instant lookup for official rulings, unusual card combinations, dispute resolutions and timing sequences.",
      faqSearchPlaceholder: "Search question or card: e.g. Slab, Jail, Beer, Ghost, Bomb, Rust...",
      faqNoResults: "No conflict situations found.",
      faqNoResultsDesc: "Try different keywords (e.g. Slab, Jail, Beer, Ghost, Bomb, Rust, Sheriff).",
      footerText1: "BANG! Companion — Rules, Card Encyclopedia & Tabletop Helper",
      footerText2: "Game Author: Emiliano Sciarra | Publishing: daVinci Games / dV Giochi & Albi.",
      footerText3: "This independent fan-made companion web application provides tabletop assistance, card encyclopedia and rules lookup.",
      footerRepo: "GitHub Repository",
      footerNav: '<a href="#pravidla">Rules</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Cards</a>',
      scrollTopText: "Top",
      scrollTopTitle: "Scroll to top"
    }
  };

  const EXPANSIONS_EN = {
    'all': 'All Expansions (258 items)',
    'base': 'Base Game',
    'dodge-city': 'Dodge City (Green Cards)',
    'gold-rush': 'Gold Rush (Equipment & Gold)',
    'armed-dangerous': 'Armed & Dangerous (Orange Cards)',
    'train-robbery': 'The Great Train Robbery (Train & Stations)',
    'valley-of-shadows': 'Valley of Shadows',
    'high-noon': 'High Noon',
    'fistful-of-cards': 'A Fistful of Cards',
    'wild-west-show': 'Wild West Show',
    'legends': 'Legends (Legends & Feats)',
    'dynamite-box': 'Dynamite Box & Promo'
  };

  const EXPANSIONS_CS = {
    'all': 'Všechna rozšíření (258 karet)',
    'base': 'Základní hra',
    'dodge-city': 'Město duchů (Zelené karty)',
    'gold-rush': 'Zlatá horečka (Vybavení a zlato)',
    'armed-dangerous': 'Ozbrojení a nebezpeční (Oranžové)',
    'train-robbery': 'Velká vlaková loupež (Vlak a stanice)',
    'valley-of-shadows': 'Údolí stínů',
    'high-noon': 'Pravé poledne',
    'fistful-of-cards': 'Pěst plná karet',
    'wild-west-show': 'Divoký západ',
    'legends': 'Legendy',
    'dynamite-box': 'Dynamite Box bonusy & Promo'
  };

  const TYPES_EN = {
    'all': 'All Card Types',
    'brown': 'Brown Cards (Immediate)',
    'blue': 'Blue Cards (In Play)',
    'green': 'Green Cards (Dodge City)',
    'orange': 'Orange Cards (Dangerous)',
    'black': 'Black Equipment (Gold Rush)',
    'character': 'Characters (Standard & Legendary)',
    'train': 'Train, Locomotives & Railcars',
    'feat': 'Feat Cards (Legends)',
    'event': 'Global Events',
    'role': 'Role Cards'
  };

  const TYPES_CS = {
    'all': 'Všechny typy karet',
    'brown': 'Hnědé karty (okamžité)',
    'blue': 'Modré karty (vyložené ve hře)',
    'green': 'Zelené karty (Město duchů)',
    'orange': 'Oranžové karty (Nebezpečné)',
    'black': 'Černé vybavení (Zlatá horečka)',
    'character': 'Postavy (běžné i legendární)',
    'train': 'Vlak, lokomotivy a vagony',
    'feat': 'Karty činů (Legendy)',
    'event': 'Globální události',
    'role': 'Karty rolí'
  };

  const SUITS_EN = {
    'all': 'All Suits',
    '♠': '♠ Spades',
    '♥': '♥ Hearts',
    '♦': '♦ Diamonds',
    '♣': '♣ Clubs'
  };

  const SUITS_CS = {
    'all': 'Všechny barvy',
    '♠': '♠ Piky',
    '♥': '♥ Srdce',
    '♦': '♦ Káry',
    '♣': '♣ Kříže'
  };

  const SORTS_EN = {
    'name-asc': 'Name (A → Z)',
    'name-desc': 'Name (Z → A)',
    'expansion': 'By Expansion',
    'type': 'By Card Type'
  };

  const SORTS_CS = {
    'name-asc': 'Název (A → Z)',
    'name-desc': 'Název (Z → A)',
    'expansion': 'Dle rozšíření',
    'type': 'Dle typu karty'
  };

  const FAQ_CATEGORIES = [
    { id: 'all', cs: 'Všechny kategorie', en: 'All Categories', csCat: 'all', enCat: 'all' },
    { id: 'combat', cs: 'Boj a obrana', en: 'Combat & Defense', csCat: 'Boj a obrana', enCat: 'Combat & Defense' },
    { id: 'characters', cs: 'Schopnosti postav', en: 'Character Abilities', csCat: 'Schopnosti postav', enCat: 'Character Abilities' },
    { id: 'timing', cs: 'Časová posloupnost', en: 'Timing & Order', csCat: 'Časová posloupnost', enCat: 'Timing & Order' },
    { id: 'legends', cs: 'Legendy', en: 'Legends', csCat: 'Legendy', enCat: 'Legends' },
    { id: 'train', cs: 'Vlaková loupež', en: 'Train Robbery', csCat: 'Velká vlaková loupež', enCat: 'The Great Train Robbery' },
    { id: 'armed', cs: 'Ozbrojení a nebezpeční', en: 'Armed & Dangerous', csCat: 'Ozbrojení a nebezpeční', enCat: 'Armed & Dangerous' },
    { id: 'gold', cs: 'Zlatá horečka', en: 'Gold Rush', csCat: 'Zlatá horečka', enCat: 'Gold Rush' },
    { id: 'events', cs: 'Globální události', en: 'Global Events', csCat: 'Globální události', enCat: 'Global Events' }
  ];

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('bang_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'cs');

    if (els.langBtnCs) els.langBtnCs.classList.toggle('active', lang === 'cs');
    if (els.langBtnEn) els.langBtnEn.classList.toggle('active', lang === 'en');

    const isEn = lang === 'en';
    const t = I18N[lang] || I18N.cs;

    // Header & Navigation
    if (els.brandMainTitle) els.brandMainTitle.textContent = t.brandTitle;
    if (els.brandSubtitle) els.brandSubtitle.textContent = t.brandSubtitle;
    if (els.globalSearch) {
      const isMobile = window.innerWidth <= 640;
      els.globalSearch.placeholder = isMobile
        ? (isEn ? "Search card, character, rule..." : "Hledat kartu, postavu, pravidlo...")
        : t.searchPlaceholder;
    }
    if (els.themeToggle) els.themeToggle.title = t.themeTitle;

    const navTexts = {
      'katalog': t.navKatalog,
      'pravidla': t.navPravidla,
      'faq': t.navFaq,
      'tah-hrace': t.navTah,
      'pomocnik': t.navPomocnik,
      'nastroje': t.navNastroje
    };

    els.tabs.forEach(tab => {
      const tabId = tab.dataset.tab;
      const span = tab.querySelector('.nav-text');
      if (span && navTexts[tabId]) span.textContent = navTexts[tabId];
    });

    const toolLabels = {
      'setup': isEn ? 'Setup Assistant' : 'Příprava hry',
      'calc': isEn ? 'Calculator & Radar' : 'Kalkulačka & Radar',
      'draw': isEn ? 'Draw Arbitrator & Odds' : 'Arbitr & Šance snímání',
      'timer': isEn ? 'Clock & Duel Timer' : 'Hodinky & Duel',
      'train': isEn ? 'Train Robbery' : 'Vlaková loupež',
      'legends': isEn ? 'Legends & Feats' : 'Legendy & Činy',
      'saloon': isEn ? 'Gold Rush Armory' : 'Obchod Saloon',
      'scenarios': isEn ? 'House Bounties' : 'Hospodské výzvy',
      'events': isEn ? 'Event Deck' : 'Balíček událostí',
      'draft': isEn ? 'Role & Char Draft' : 'Losovač rolí a postav',
      'tracker': isEn ? 'Virtual Board' : 'Virtuální deska',
      'matches': isEn ? 'Match Tracker' : 'Zápisník partií',
      'quiz': isEn ? 'Rules Quiz' : 'Kvíz pravidel',
      'soundboard': isEn ? 'Soundboard' : 'Soundboard'
    };
    Object.entries(toolLabels).forEach(([id, text]) => {
      const el = document.getElementById(`tool-label-${id}`);
      if (el) el.textContent = text;
    });

    // Filters
    if (els.labelFilterTitle) els.labelFilterTitle.textContent = t.filterTitle;
    if (els.quickTagLabel) els.quickTagLabel.textContent = t.quickTagsLabel;
    if (els.btnResetFilters) els.btnResetFilters.textContent = t.filterReset;
    if (els.labelExpansion) els.labelExpansion.textContent = t.filterExpansion;
    if (els.labelType) els.labelType.textContent = t.filterType;
    if (els.labelSuit) els.labelSuit.textContent = t.filterSuit;
    if (els.labelSort) els.labelSort.textContent = t.filterSort;

    // Quick Tag Buttons Translation
    const quickTagDict = {
      all: isEn ? 'All' : 'Vše',
      zbrane: isEn ? 'Weapons' : 'Zbraně',
      leceni: isEn ? 'Healing' : 'Léčení',
      obrana: isEn ? 'Defense' : 'Obrana',
      vzdalenost: isEn ? 'Distance' : 'Vzdálenost',
      snimani: isEn ? 'Draw Check' : 'Snímání',
      zelene: isEn ? 'Green' : 'Zelené',
      oranzove: isEn ? 'Orange' : 'Oranžové',
      postavy: isEn ? 'Characters' : 'Postavy',
      udalosti: isEn ? 'Events' : 'Události'
    };
    if (els.catalogQuickTags) {
      els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(btn => {
        const tag = btn.dataset.tag;
        if (quickTagDict[tag]) {
          btn.textContent = quickTagDict[tag];
        }
      });
    }

    // Options translation
    const expDict = isEn ? EXPANSIONS_EN : EXPANSIONS_CS;
    if (els.filterExpansion) {
      Array.from(els.filterExpansion.options).forEach(opt => {
        if (expDict[opt.value]) opt.textContent = expDict[opt.value];
      });
    }

    const typeDict = isEn ? TYPES_EN : TYPES_CS;
    if (els.filterType) {
      Array.from(els.filterType.options).forEach(opt => {
        if (typeDict[opt.value]) opt.textContent = typeDict[opt.value];
      });
    }

    const suitDict = isEn ? SUITS_EN : SUITS_CS;
    if (els.filterSuit) {
      Array.from(els.filterSuit.options).forEach(opt => {
        if (suitDict[opt.value]) opt.textContent = suitDict[opt.value];
      });
    }

    const sortDict = isEn ? SORTS_EN : SORTS_CS;
    if (els.sortCards) {
      Array.from(els.sortCards.options).forEach(opt => {
        if (sortDict[opt.value]) opt.textContent = sortDict[opt.value];
      });
    }

    // FAQ Section Headers
    if (els.faqMainTitle) els.faqMainTitle.textContent = t.faqMainTitle;
    if (els.faqMainLead) els.faqMainLead.textContent = t.faqMainLead;
    if (els.faqSearch) els.faqSearch.placeholder = t.faqSearchPlaceholder;

    // Footer
    if (els.footerText1) els.footerText1.innerHTML = `<strong>${t.footerText1}</strong>`;
    if (els.footerText2) els.footerText2.textContent = t.footerText2;
    if (els.footerText3) els.footerText3.textContent = t.footerText3;
    if (els.footerRepoLink) els.footerRepoLink.textContent = t.footerRepo;
    if (els.footerNavLinks) els.footerNavLinks.innerHTML = t.footerNav;

    // Scroll to Top Button
    if (els.btnScrollTop) {
      els.btnScrollTop.title = t.scrollTopTitle || 'Zpět nahoru';
      els.btnScrollTop.setAttribute('aria-label', t.scrollTopTitle || 'Zpět nahoru');
    }
    if (els.scrollTopText) {
      els.scrollTopText.textContent = t.scrollTopText || (isEn ? 'Top' : 'Nahoru');
    }

    // Render all components
    renderCards();
    renderRulesCategories();
    renderRules();
    renderFaqCategories();
    renderFaq();
    renderTurnGuide();
    renderQuickHelper();

    if (state.selectedCard) {
      openCardModal(state.selectedCard.id);
    }
  }

  // =========================================================================
  // TAB NAVIGATION & HASH ROUTING
  // =========================================================================
  function setTab(tabId) {
    state.activeTab = tabId;
    window.location.hash = tabId;

    els.tabs.forEach(tab => {
      const isActive = tab.dataset.tab === tabId;
      tab.classList.toggle('active', isActive);
      if (isActive) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    els.panes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    if (tabId === 'nastroje') {
      renderTools();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initRouting() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['katalog', 'pravidla', 'faq', 'tah-hrace', 'pomocnik', 'nastroje'].includes(hash)) {
      setTab(hash);
    }
  }

  // =========================================================================
  // NORMALIZATION & FILTER LOGIC (Diacritics-insensitive search)
  // =========================================================================
  function normalizeString(str) {
    if (!str) return '';
    return str
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function getFilteredCards() {
    if (!window.BANG_CARDS) return [];
    const isEn = state.lang === 'en';

    return window.BANG_CARDS.filter(card => {
      if (state.selectedExpansion !== 'all' && card.expansion !== state.selectedExpansion) {
        return false;
      }
      
      if (state.selectedType !== 'all') {
        if (state.selectedType === 'brown' && !['brown', 'brown-equipment'].includes(card.type)) return false;
        if (state.selectedType === 'blue' && card.type !== 'blue') return false;
        if (state.selectedType === 'green' && card.type !== 'green') return false;
        if (state.selectedType === 'orange' && card.type !== 'orange') return false;
        if (state.selectedType === 'black' && card.type !== 'black') return false;
        if (state.selectedType === 'character' && !['character', 'legend-character'].includes(card.type)) return false;
        if (state.selectedType === 'train' && !['railcar', 'station'].includes(card.type)) return false;
        if (state.selectedType === 'feat' && card.type !== 'feat') return false;
        if (state.selectedType === 'event' && card.type !== 'event') return false;
        if (state.selectedType === 'role' && card.type !== 'role') return false;
      }

      if (state.selectedSuit !== 'all') {
        if (!card.suit || !card.suit.includes(state.selectedSuit)) return false;
      }

      // Quick Tag Filter
      if (state.selectedQuickTag && state.selectedQuickTag !== 'all') {
        const tag = state.selectedQuickTag;
        const normName = normalizeString(card.name + ' ' + (card.nameEn || ''));
        const normEffect = normalizeString(card.effect + ' ' + (card.effectEn || ''));
        const tags = (card.tags || []).map(t => normalizeString(t));

        if (tag === 'zbrane') {
          const isWeapon = card.range || (card.type === 'blue' && (normName.includes('colt') || normName.includes('volcanic') || normName.includes('schofield') || normName.includes('remington') || normName.includes('carabine') || normName.includes('winchester') || tags.includes('zbran')));
          if (!isWeapon) return false;
        } else if (tag === 'leceni') {
          const isHeal = normEffect.includes('zivot') || normEffect.includes('vylec') || normEffect.includes('heal') || normEffect.includes('life') || normName.includes('pivo') || normName.includes('beer') || normName.includes('saloon') || normName.includes('tequila') || normName.includes('whisky');
          if (!isHeal) return false;
        } else if (tag === 'obrana') {
          const isDef = normName.includes('vedle') || normName.includes('missed') || normName.includes('barel') || normName.includes('barrel') || normName.includes('mustang') || normName.includes('skrys') || normName.includes('hideout') || normName.includes('sombrero') || normName.includes('bible') || normName.includes('zelezny') || normName.includes('iron') || tags.includes('obrana');
          if (!isDef) return false;
        } else if (tag === 'vzdalenost') {
          const isDist = normEffect.includes('vzdalenost') || normEffect.includes('distance') || normName.includes('mustang') || normName.includes('skrys') || normName.includes('hledi') || normName.includes('appaloosa') || normName.includes('dalekohled') || normName.includes('scope');
          if (!isDist) return false;
        } else if (tag === 'snimani') {
          const isDraw = normEffect.includes('sejm') || normEffect.includes('snime') || normEffect.includes('draw!') || normName.includes('barel') || normName.includes('vezeni') || normName.includes('dynamit') || normName.includes('jail');
          if (!isDraw) return false;
        } else if (tag === 'zelene') {
          if (card.type !== 'green') return false;
        } else if (tag === 'oranzove') {
          if (card.type !== 'orange') return false;
        } else if (tag === 'postavy') {
          if (!['character', 'legend-character'].includes(card.type)) return false;
        } else if (tag === 'udalosti') {
          if (card.type !== 'event') return false;
        }
      }

      if (state.searchQuery.trim()) {
        const qNorm = normalizeString(state.searchQuery);
        const tokens = qNorm.split(/\s+/).filter(Boolean);
        const rulingsText = Array.isArray(card.rulings) ? card.rulings.join(' ') : (card.rulings || '');
        const rulingsEnText = Array.isArray(card.rulingsEn) ? card.rulingsEn.join(' ') : (card.rulingsEn || '');
        const fullCardText = `${card.name} ${card.nameEn || ''} ${card.effect || ''} ${card.effectEn || ''} ${card.expansionName} ${card.typeLabel} ${(card.tags || []).join(' ')} ${rulingsText} ${rulingsEnText} ${card.values || ''}`;
        const cardTextNorm = normalizeString(fullCardText);

        const matches = tokens.every(token => cardTextNorm.includes(token));
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'name-asc') {
        const nameA = isEn ? (a.nameEn || a.name) : a.name;
        const nameB = isEn ? (b.nameEn || b.name) : b.name;
        return nameA.localeCompare(nameB, isEn ? 'en' : 'cs');
      }
      if (state.sortBy === 'name-desc') {
        const nameA = isEn ? (a.nameEn || a.name) : a.name;
        const nameB = isEn ? (b.nameEn || b.name) : b.name;
        return nameB.localeCompare(nameA, isEn ? 'en' : 'cs');
      }
      if (state.sortBy === 'expansion') return a.expansionName.localeCompare(b.expansionName, 'cs');
      if (state.sortBy === 'type') return a.typeLabel.localeCompare(b.typeLabel, 'cs');
      return 0;
    });
  }

  function updateActiveFiltersBadge() {
    if (!els.activeFiltersBadge) return;
    let count = 0;
    if (state.selectedExpansion !== 'all') count++;
    if (state.selectedType !== 'all') count++;
    if (state.selectedSuit !== 'all') count++;
    if (state.selectedQuickTag !== 'all') count++;
    if (state.sortBy !== 'name-asc') count++;

    if (count > 0) {
      els.activeFiltersBadge.textContent = count;
      els.activeFiltersBadge.style.display = 'inline-block';
    } else {
      els.activeFiltersBadge.style.display = 'none';
    }
  }

  // =========================================================================
  // RENDER CARDS GRID (Pure Text, Color Borders, No English under Czech)
  // =========================================================================
  function renderCards() {
    updateActiveFiltersBadge();
    if (!els.cardsGrid) return;
    const cards = getFilteredCards();
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;
    
    if (els.resultsCount) {
      els.resultsCount.textContent = t.showingResults(cards.length, window.BANG_CARDS.length);
    }

    if (cards.length === 0) {
      els.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌵</div>
          <h3>${t.noResultsTitle}</h3>
          <p>${t.noResultsText}</p>
        </div>
      `;
      return;
    }

    els.cardsGrid.innerHTML = cards.map(card => {
      let borderClass = 'card-brown';
      if (card.type === 'blue') borderClass = 'card-blue';
      else if (card.type === 'green') borderClass = 'card-green';
      else if (card.type === 'orange') borderClass = 'card-orange';
      else if (card.type === 'black') borderClass = 'card-black';
      else if (card.type === 'brown-equipment') borderClass = 'card-gold';
      else if (card.type === 'character') borderClass = 'card-character';
      else if (card.type === 'legend-character') borderClass = 'card-legend';
      else if (card.type === 'railcar') borderClass = 'card-train';
      else if (card.type === 'station') borderClass = 'card-station';
      else if (card.type === 'feat') borderClass = 'card-feat';
      else if (card.type === 'event') borderClass = 'card-event';

      let suitHtml = '';
      if (card.suit) {
        let cleanSuit = card.suit === 'mixed' ? '♠ ♥ ♦ ♣' : card.suit;
        let formatted = cleanSuit
          .replace(/[♥♦]/g, '<span class="suit-red">$&</span>')
          .replace(/[♠♣]/g, '<span class="suit-black">$&</span>');
        let valText = (card.values && !card.values.includes('Kříže')) ? ` ${card.values}` : '';
        suitHtml = `<span class="card-suit-value">${formatted}${valText}</span>`;
      }

      const cardTitle = isEn ? (card.nameEn || card.name) : card.name;
      const cardBadge = isEn ? (card.expansionNameEn || EXPANSIONS_EN[card.expansion] || card.expansionName) : card.expansionName;
      const cardTypeLabel = isEn ? (card.typeLabelEn || TYPES_EN[card.type] || card.typeLabel) : card.typeLabel;
      const cardEffect = isEn ? (card.effectEn || card.effect) : card.effect;
      const cardTiming = isEn ? (card.timingEn || card.timing) : card.timing;
      const cardCost = isEn ? (card.costEn || card.cost) : card.cost;

      const metas = [];
      if (card.copies) metas.push(`<span class="card-meta-item meta-copies">${card.copies}× ${t.copiesInDeck}</span>`);
      if (card.range) metas.push(`<span class="card-meta-item"><img src="assets/symbols/symbol_reachable_distance.png" class="tag-symbol-img" alt="">${t.rangeLabel}: ${card.range}</span>`);
      if (cardCost) metas.push(`<span class="card-meta-item meta-cost">${cardCost}</span>`);
      if (card.lives) metas.push(`<span class="card-meta-item card-meta-lives"><img src="assets/symbols/symbol_life_points.png" class="tag-symbol-img" alt="">${card.lives} ${t.livesLabel}</span>`);
      if (cardTiming) metas.push(`<span class="card-meta-item meta-timing">${cardTiming}</span>`);

      const imageThumbHtml = card.image
        ? `<div class="card-thumb-wrap"><img src="${card.image}" alt="${cardTitle}" class="card-thumb-img" loading="lazy" decoding="async" onerror="this.parentElement.style.display='none'"></div>`
        : '';

      return `
        <article class="bang-card ${borderClass}" data-id="${card.id}" tabindex="0" role="button" aria-label="Detail ${cardTitle}">
          <div class="card-top-bar">
            <span class="card-badge">${cardBadge}</span>
            ${suitHtml}
          </div>
          ${imageThumbHtml}
          <div class="card-body">
            <div class="card-title-group">
              <h3 class="card-title">${cardTitle}</h3>
            </div>
            <div class="card-effect-box">
              ${cardEffect}
            </div>
            <div class="card-meta-list">
              <span class="card-meta-item" style="font-weight: 700;">${cardTypeLabel}</span>
              ${metas.join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    els.cardsGrid.querySelectorAll('.bang-card').forEach(el => {
      el.addEventListener('click', () => openCardModal(el.dataset.id));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCardModal(el.dataset.id);
        }
      });
    });
  }

  // =========================================================================
  // CARD OFFICIAL SYMBOLS HELPER
  // =========================================================================
  function getCardOfficialSymbols(card, isEn) {
    if (!card) return [];
    const symbols = [];
    const nameNorm = (card.name || '').toLowerCase();
    const effectNorm = ((card.effect || '') + ' ' + (card.effectEn || '')).toLowerCase();
    const tags = Array.isArray(card.tags) ? card.tags : [];

    if (nameNorm.includes('bang') || tags.includes('bang') || tags.includes('zbrane') || card.range) {
      symbols.push({
        src: 'assets/symbols/symbol_bang.png',
        label: isEn ? 'BANG!' : 'Výstřel BANG!'
      });
    }

    if (nameNorm.includes('vedle') || nameNorm.includes('missed') || tags.includes('obrana') || effectNorm.includes('vedle!') || effectNorm.includes('missed!')) {
      symbols.push({
        src: 'assets/symbols/symbol_missed.png',
        label: isEn ? 'Missed!' : 'Vedle! (Obrana)'
      });
    }

    if (nameNorm.includes('pivo') || nameNorm.includes('beer') || tags.includes('leceni') || effectNorm.includes('vyléčí') || effectNorm.includes('obnoví 1 život') || effectNorm.includes('regain') || effectNorm.includes('heal')) {
      symbols.push({
        src: 'assets/symbols/symbol_regain_life.png',
        label: isEn ? 'Regain Life' : 'Pivo (Léčení)'
      });
    }

    if (nameNorm.includes('barel') || nameNorm.includes('barrel')) {
      symbols.push({
        src: 'assets/symbols/symbol_barrel.png',
        label: isEn ? 'Barrel' : 'Barel'
      });
    }

    if (nameNorm.includes('vězení') || nameNorm.includes('vezeni') || nameNorm.includes('jail')) {
      symbols.push({
        src: 'assets/symbols/symbol_jail.png',
        label: isEn ? 'Jail' : 'Vězení'
      });
    }

    if (nameNorm.includes('dynamit') || nameNorm.includes('dynamite')) {
      symbols.push({
        src: 'assets/symbols/symbol_dynamite.png',
        label: isEn ? 'Dynamite' : 'Dynamit'
      });
    }

    if (nameNorm.includes('mustang') || effectNorm.includes('o 1 větší') || effectNorm.includes('+1 further')) {
      symbols.push({
        src: 'assets/symbols/symbol_mustang.png',
        label: isEn ? 'Mustang (+1)' : 'Mustang (+1)'
      });
    }

    if (nameNorm.includes('hledí') || nameNorm.includes('scope') || nameNorm.includes('appaloosa') || effectNorm.includes('o 1 menší') || effectNorm.includes('-1 closer')) {
      symbols.push({
        src: 'assets/symbols/symbol_scope.png',
        label: isEn ? 'Scope (-1)' : 'Hledí (-1)'
      });
    }

    if (tags.includes('dobirani') || effectNorm.includes('líznout') || effectNorm.includes('dobrat') || effectNorm.includes('draw a card') || effectNorm.includes('draw 2 cards')) {
      symbols.push({
        src: 'assets/symbols/symbol_draw_card.png',
        label: isEn ? 'Draw Card' : 'Líznutí karty'
      });
    }

    if (nameNorm.includes('cat balou') || tags.includes('odhozeni') || effectNorm.includes('odhodit kartu') || effectNorm.includes('discard a card')) {
      symbols.push({
        src: 'assets/symbols/symbol_discard_card.png',
        label: isEn ? 'Discard Card' : 'Odhození karty'
      });
    }

    if (tags.includes('snimani') || effectNorm.includes('sejmout') || effectNorm.includes('otočte vrchní kartu') || effectNorm.includes('"draw!"')) {
      symbols.push({
        src: 'assets/symbols/symbol_draw_check.png',
        label: isEn ? 'Check ("Draw!")' : 'Sejmutí karty'
      });
    }

    if (card.lives) {
      symbols.push({
        src: 'assets/symbols/symbol_life_points.png',
        label: `${card.lives} ${isEn ? 'Life Points' : 'Životy'}`
      });
    }

    if (nameNorm.includes('gatling') || nameNorm.includes('indiáni') || nameNorm.includes('indians') || nameNorm.includes('saloon') || effectNorm.includes('všichni ostatní')) {
      symbols.push({
        src: 'assets/symbols/symbol_all_other_players.png',
        label: isEn ? 'All Other Players' : 'Všichni ostatní hráči'
      });
    }

    const unique = [];
    const seen = new Set();
    for (const s of symbols) {
      if (!seen.has(s.src)) {
        seen.add(s.src);
        unique.push(s);
      }
    }
    return unique;
  }

  // =========================================================================
  // OPEN CARD DETAIL MODAL
  // =========================================================================
  function openCardModal(cardId) {
    const card = window.BANG_CARDS.find(c => c.id === cardId);
    if (!card) return;
    state.selectedCard = card;

    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;

    const cardTitle = isEn ? (card.nameEn || card.name) : card.name;
    const cardBadge = isEn ? (card.expansionNameEn || EXPANSIONS_EN[card.expansion] || card.expansionName) : card.expansionName;
    const cardTypeLabel = isEn ? (card.typeLabelEn || TYPES_EN[card.type] || card.typeLabel) : card.typeLabel;
    const cardEffect = isEn ? (card.effectEn || card.effect) : card.effect;
    const cardTiming = isEn ? (card.timingEn || card.timing) : card.timing;
    const cardCost = isEn ? (card.costEn || card.cost) : card.cost;
    const cardRulings = isEn && card.rulingsEn && card.rulingsEn.length > 0 ? card.rulingsEn : card.rulings;

    let modalSuitHtml = '';
    if (card.suit) {
      let cleanSuit = card.suit === 'mixed' ? '♠ ♥ ♦ ♣' : card.suit;
      let formatted = cleanSuit
        .replace(/[♥♦]/g, '<span class="suit-red">$&</span>')
        .replace(/[♠♣]/g, '<span class="suit-black">$&</span>');
      let valText = (card.values && !card.values.includes('Kříže')) ? ` ${card.values}` : '';
      modalSuitHtml = `<span class="card-suit-value" style="font-size: 1.15rem; font-weight: 700;">${formatted}${valText}</span>`;
    }

    const cardSymbols = getCardOfficialSymbols(card, isEn);
    const officialSymbolsHtml = (cardSymbols && cardSymbols.length > 0)
      ? `
        <div class="card-official-symbols-row">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-brown);">${isEn ? 'Game Symbols:' : 'Herní symboly:'}</span>
          ${cardSymbols.map(s => `
            <span class="card-symbol-pill">
              <img src="${s.src}" alt="${s.label}">
              <span>${s.label}</span>
            </span>
          `).join('')}
        </div>
      `
      : '';

    const rulingsHtml = (cardRulings && cardRulings.length > 0)
      ? `
        <div style="margin-top: 1.25rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
          <h4 style="color: var(--color-brown); margin-bottom: 0.6rem; font-size: 1.1rem; font-family: var(--font-western);">
            ${t.rulingsHeader}
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.96rem; line-height: 1.6;">
            ${cardRulings.map(r => `<li style="margin-bottom: 0.5rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    let synergiesHtml = '';
    if (window.BANG_TOOLS && window.BANG_TOOLS.getCardSynergiesAndCounters) {
      const synData = window.BANG_TOOLS.getCardSynergiesAndCounters(card, isEn);
      if (synData && ((synData.counters && synData.counters.length > 0) || (synData.synergies && synData.synergies.length > 0))) {
        synergiesHtml = `
          <div class="card-modal-synergies-wrap" style="margin-top: 1.25rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
            ${(synData.counters && synData.counters.length > 0) ? `
              <div style="background: var(--bg-surface); padding: 0.9rem; border-radius: 8px; margin-bottom: 0.85rem; border-left: 4px solid #c0392b;">
                <h4 style="color: #c0392b; margin: 0 0 0.5rem 0; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem; font-weight: 700;">
                  <img src="assets/symbols/symbol_missed.png" class="tag-symbol-img" alt=""> ${isEn ? 'Counters & Defense (How to negate)' : 'Obrana a protiútoky (Jak se bránit)'}
                </h4>
                <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.92rem; line-height: 1.5; color: var(--text-color);">
                  ${synData.counters.map(c => `<li style="margin-bottom: 0.35rem;">${c}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${(synData.synergies && synData.synergies.length > 0) ? `
              <div style="background: var(--bg-surface); padding: 0.9rem; border-radius: 8px; border-left: 4px solid #27ae60;">
                <h4 style="color: #27ae60; margin: 0 0 0.5rem 0; font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem; font-weight: 700;">
                  ${isEn ? 'Key Synergies & Combos' : 'Klíčové synergie a komba'}
                </h4>
                <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.92rem; line-height: 1.5; color: var(--text-color);">
                  ${synData.synergies.map(s => `<li style="margin-bottom: 0.35rem;">${s}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        `;
      }
    }

    const tagsHtml = (card.tags && card.tags.length > 0)
      ? `
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.25rem;">
          ${card.tags.map(tag => `<span class="card-meta-item" style="font-size: 0.78rem;">#${tag}</span>`).join('')}
        </div>
      `
      : '';

    const imageColHtml = card.image
      ? `
        <div class="card-modal-img-col">
          <div class="card-modal-img-wrap">
            <img src="${card.image}" alt="${cardTitle}" class="card-modal-img" fetchpriority="high" onerror="this.parentElement.parentElement.style.display='none'">
          </div>
        </div>
      `
      : '';

    const isCharacter = ['character', 'legend-character'].includes(card.type);
    const isPinned = state.pinnedCharacter && state.pinnedCharacter.id === card.id;

    const modalActionsHtml = `
      <div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: 1.5rem; border-top: 2px solid var(--border-color); padding-top: 1.25rem;">
        ${isCharacter ? `
          <button type="button" id="btn-pin-character" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700; ${isPinned ? 'background: #c0392b; border-color: #c0392b; color: #fff;' : ''}">
            ${isPinned ? t.unpinCharacter : t.pinCharacter}
          </button>
        ` : ''}
        <button type="button" id="btn-compare-card" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700;">
          ${t.compareCard}
        </button>
        <button type="button" id="btn-modal-close-action" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700; margin-left: auto;">
          ✕ ${isEn ? 'Close' : 'Zavřít'}
        </button>
      </div>
    `;

    els.modalBody.innerHTML = `
      <div class="card-modal-layout ${card.image ? 'has-image' : 'no-image'}">
        ${imageColHtml}
        <div class="card-modal-info-col">
          <div class="card-modal-header">
            <div class="card-modal-header-top">
              <span class="card-badge" style="font-size: 0.85rem; display: inline-block;">${cardBadge} • ${cardTypeLabel}</span>
              ${modalSuitHtml}
            </div>
            <h2 class="card-modal-title">${cardTitle}</h2>
          </div>

          ${officialSymbolsHtml}

          <div style="background: var(--bg-surface); padding: 1.15rem; border-radius: 8px; margin-bottom: 1.25rem; border-left: 4px solid var(--color-brown);">
            <div style="font-weight: 700; margin-bottom: 0.4rem; color: var(--color-brown); text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.5px;">${t.effectHeader}</div>
            <div style="font-size: 1.1rem; line-height: 1.6;">${cardEffect}</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; font-size: 0.9rem; margin-bottom: 1rem;">
            ${cardTiming ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.timingLabel}:</strong><br>${cardTiming}</div>` : ''}
            ${cardCost ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.costLabel}:</strong><br>${cardCost}</div>` : ''}
            ${card.range ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.rangeLabel}:</strong><br>${card.range}</div>` : ''}
            ${card.copies ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.copiesInDeck}:</strong><br>${card.copies}×</div>` : ''}
          </div>

          ${rulingsHtml}
          ${synergiesHtml}
          ${tagsHtml}
          ${modalActionsHtml}
        </div>
      </div>
    `;

    els.cardModal.classList.toggle('has-image', !!card.image);
    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalContentEl = els.cardModal.querySelector('.modal-content');
    if (modalContentEl) {
      modalContentEl.scrollTop = 0;
    }

    const pinBtn = document.getElementById('btn-pin-character');
    if (pinBtn) {
      pinBtn.addEventListener('click', () => {
        const currentlyPinned = state.pinnedCharacter && state.pinnedCharacter.id === card.id;
        if (currentlyPinned) {
          state.pinnedCharacter = null;
          localStorage.removeItem('bang_pinned_char');
          pinBtn.innerHTML = t.pinCharacter;
          pinBtn.style.background = '';
          pinBtn.style.borderColor = '';
          pinBtn.style.color = '';
        } else {
          state.pinnedCharacter = {
            id: card.id,
            name: card.name,
            nameEn: card.nameEn,
            image: card.image,
            lives: card.lives || 4,
            maxLives: card.lives || 4
          };
          localStorage.setItem('bang_pinned_char', JSON.stringify(state.pinnedCharacter));
          pinBtn.innerHTML = t.unpinCharacter;
          pinBtn.style.background = '#c0392b';
          pinBtn.style.borderColor = '#c0392b';
          pinBtn.style.color = '#fff';
        }
        renderPinnedCharacterWidget();
      });
    }

    const compBtn = document.getElementById('btn-compare-card');
    if (compBtn) {
      compBtn.addEventListener('click', () => {
        openCardComparator(card);
      });
    }

    const closeActionBtn = document.getElementById('btn-modal-close-action');
    if (closeActionBtn) {
      closeActionBtn.addEventListener('click', closeCardModal);
    }
  }

  function closeCardModal() {
    els.cardModal.classList.remove('active');
    els.cardModal.classList.remove('has-image');
    document.body.style.overflow = '';
    state.selectedCard = null;
  }

  // =========================================================================
  // PINNED CHARACTER WIDGET
  // =========================================================================
  function renderPinnedCharacterWidget() {
    if (!els.pinnedCharacterWidget) return;
    const char = state.pinnedCharacter;
    if (!char) {
      els.pinnedCharacterWidget.style.display = 'none';
      els.pinnedCharacterWidget.innerHTML = '';
      return;
    }
    const isEn = state.lang === 'en';
    const charName = isEn ? (char.nameEn || char.name) : char.name;
    const thumbHtml = char.image ? `<img src="${char.image}" alt="${charName}" class="pinned-char-thumb">` : '🤠';

    els.pinnedCharacterWidget.style.display = 'flex';
    els.pinnedCharacterWidget.innerHTML = `
      <div class="pinned-char-left" id="pinned-char-click" title="${isEn ? 'Open character detail' : 'Otevřít detail postavy'}">
        ${thumbHtml}
        <div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">${isEn ? 'My Character' : 'Moje postava'}</div>
          <div class="pinned-char-title">${charName}</div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="pinned-char-lives">
          <button type="button" class="pinned-btn-life" id="btn-pinned-minus" aria-label="Ubrat život">−</button>
          <span style="font-weight: 800; color: #b71c1c; display: flex; align-items: center; gap: 0.25rem;"><img src="assets/symbols/symbol_life_points.png" class="rules-symbol-inline" alt=""> ${char.lives} / ${char.maxLives}</span>
          <button type="button" class="pinned-btn-life" id="btn-pinned-plus" aria-label="Přidat život">+</button>
        </div>
        <button type="button" class="pinned-btn-unpin" id="btn-pinned-unpin" title="${isEn ? 'Unpin' : 'Odepnout'}">✕</button>
      </div>
    `;

    const clickArea = document.getElementById('pinned-char-click');
    if (clickArea) clickArea.addEventListener('click', () => openCardModal(char.id));

    const minusBtn = document.getElementById('btn-pinned-minus');
    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (char.lives > 0) {
          char.lives--;
          localStorage.setItem('bang_pinned_char', JSON.stringify(char));
          renderPinnedCharacterWidget();
        }
      });
    }

    const plusBtn = document.getElementById('btn-pinned-plus');
    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (char.lives < char.maxLives + 2) {
          char.lives++;
          localStorage.setItem('bang_pinned_char', JSON.stringify(char));
          renderPinnedCharacterWidget();
        }
      });
    }

    const unpinBtn = document.getElementById('btn-pinned-unpin');
    if (unpinBtn) {
      unpinBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.pinnedCharacter = null;
        localStorage.removeItem('bang_pinned_char');
        renderPinnedCharacterWidget();
      });
    }
  }

  // =========================================================================
  // CARD COMPARATOR
  // =========================================================================
  function openCardComparator(card1, card2 = null) {
    if (!card2) {
      card2 = window.BANG_CARDS.find(c => c.id !== card1.id && c.type === card1.type) || window.BANG_CARDS.find(c => c.id !== card1.id);
    }
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;

    const renderCardCol = (c) => {
      if (!c) return '';
      const title = isEn ? (c.nameEn || c.name) : c.name;
      const badge = isEn ? (c.expansionNameEn || EXPANSIONS_EN[c.expansion] || c.expansionName) : c.expansionName;
      const typeLabel = isEn ? (c.typeLabelEn || TYPES_EN[c.type] || c.typeLabel) : c.typeLabel;
      const effect = isEn ? (c.effectEn || c.effect) : c.effect;
      const rulings = isEn && c.rulingsEn && c.rulingsEn.length > 0 ? c.rulingsEn : c.rulings;

      return `
        <div style="background: var(--bg-surface); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
          <div style="text-align: center; margin-bottom: 1rem;">
            ${c.image ? `<img src="${c.image}" alt="${title}" style="max-height: 160px; object-fit: contain; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom: 0.5rem;">` : ''}
            <div style="font-size: 0.8rem; color: var(--color-brown); font-weight: 700; text-transform: uppercase;">${badge} • ${typeLabel}</div>
            <h3 style="font-family: 'Georgia', serif; font-size: 1.4rem; color: var(--text-main); margin: 0.25rem 0;">${title}</h3>
            ${c.lives ? `<div style="color: #b71c1c; font-weight: 700;">❤️ ${c.lives} ${t.livesLabel}</div>` : ''}
            ${c.range ? `<div style="font-weight: 700; font-size: 0.9rem;">${t.rangeLabel}: ${c.range}</div>` : ''}
          </div>
          <div style="background: var(--bg-card); padding: 0.85rem; border-radius: 6px; border-left: 3px solid var(--color-brown); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem;">
            ${effect}
          </div>
          ${(rulings && rulings.length > 0) ? `
            <div style="font-size: 0.85rem; line-height: 1.5; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
              <strong style="color: var(--color-brown);">${t.rulingsHeader}</strong>
              <ul style="padding-left: 1.15rem; margin-top: 0.35rem;">
                ${rulings.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    };

    els.modalBody.innerHTML = `
      <div style="padding: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem; padding-right: 3.5rem;">
          <h2 style="font-family: 'Georgia', serif; font-size: 1.6rem; color: var(--color-brown); margin: 0;">
            ⚖️ ${isEn ? 'Card Comparison' : 'Porovnání karet'}
          </h2>
          <button type="button" class="btn-reset-filters" id="btn-back-to-single" style="font-weight: 700;">
            ← ${isEn ? 'Back to Card Detail' : 'Zpět na detail karty'}
          </button>
        </div>

        <div style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <label for="comp-select-2" style="font-weight: 700; font-size: 0.92rem;">
            ${isEn ? 'Compare against:' : 'Porovnat s kartou:'}
          </label>
          <select id="comp-select-2" class="filter-select" style="max-width: 340px;">
            ${window.BANG_CARDS.map(c => `
              <option value="${c.id}" ${card2 && c.id === card2.id ? 'selected' : ''}>
                ${isEn ? (c.nameEn || c.name) : c.name} (${isEn ? (c.expansionNameEn || c.expansionName) : c.expansionName})
              </option>
            `).join('')}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${renderCardCol(card1)}
          ${renderCardCol(card2)}
        </div>
      </div>
    `;

    document.getElementById('btn-back-to-single').addEventListener('click', () => {
      openCardModal(card1.id);
    });

    document.getElementById('comp-select-2').addEventListener('change', (e) => {
      const nextCard2 = window.BANG_CARDS.find(c => c.id === e.target.value);
      if (nextCard2) {
        openCardComparator(card1, nextCard2);
      }
    });

    els.cardModal.classList.remove('has-image');
    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalContentEl = els.cardModal.querySelector('.modal-content');
    if (modalContentEl) {
      modalContentEl.scrollTop = 0;
    }
  }

  // =========================================================================
  // SCROLL HELPERS (BULLETPROOF ACROSS ALL MOBILE BROWSERS & SAFARI)
  // =========================================================================
  function scrollToElement(targetEl, extraOffset = 14) {
    if (!targetEl) return;
    const header = document.querySelector('header.app-header');
    const headerHeight = header ? header.offsetHeight : 100;
    const rect = targetEl.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerHeight - extraOffset;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  }

  function scrollToRulesToc() {
    const toc = document.querySelector('.rules-toc') || document.getElementById('rules-toc-header');
    if (toc) {
      scrollToElement(toc, 14);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // RULES CATEGORIES & RENDER RULES
  // =========================================================================
  const RULES_CATEGORIES = [
    { id: 'all', cs: 'Všechna pravidla', en: 'All Rules' },
    { id: 'base', cs: 'Základní hra BANG!', en: 'BANG! Base Game' },
    { id: 'dodge-city', cs: 'Dodge City', en: 'Dodge City' },
    { id: 'high-noon-fistful', cs: 'Pravé poledne & Fistful', en: 'High Noon & Fistful' },
    { id: 'gold-rush', cs: 'Zlatá horečka', en: 'Gold Rush' },
    { id: 'armed-dangerous', cs: 'Ozbrojení a nebezpeční', en: 'Armed & Dangerous' },
    { id: 'train-robbery', cs: 'Velká vlaková loupež', en: 'The Great Train Robbery' },
    { id: 'legends', cs: 'Legendy', en: 'Legends' },
    { id: 'valley-wildwest', cs: 'Údolí stínů & Divoký západ', en: 'Valley & Wild West' },
    { id: 'dynamite-box', cs: 'Kompletní hra dohromady', en: 'Complete Game' }
  ];

  function renderRulesCategories() {
    if (!els.rulesCategoriesContainer) return;
    const isEn = state.lang === 'en';

    els.rulesCategoriesContainer.innerHTML = RULES_CATEGORIES.map(cat => `
      <button class="rules-cat-btn ${state.activeRulesCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
        ${isEn ? cat.en : cat.cs}
      </button>
    `).join('');

    els.rulesCategoriesContainer.querySelectorAll('.rules-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        els.rulesCategoriesContainer.querySelectorAll('.rules-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeRulesCategory = btn.dataset.catId;
        renderRules();
        scrollToRulesToc();
      });
    });
  }

  function renderRules() {
    if (!els.rulesContentTarget) return;
    const isEn = state.lang === 'en';
    const allRules = (isEn && window.BANG_RULES_EN) ? window.BANG_RULES_EN : (window.BANG_RULES || []);

    const rules = state.activeRulesCategory === 'all'
      ? allRules
      : allRules.filter(sec => sec.category === state.activeRulesCategory);

    if (els.rulesTocHeader) {
      const activeCat = RULES_CATEGORIES.find(c => c.id === state.activeRulesCategory);
      if (state.activeRulesCategory === 'all') {
        els.rulesTocHeader.textContent = isEn ? 'Table of Contents' : 'Obsah pravidel';
      } else {
        els.rulesTocHeader.textContent = isEn
          ? `Contents: ${activeCat ? activeCat.en : ''}`
          : `Obsah: ${activeCat ? activeCat.cs : ''}`;
      }
    }

    if (els.rulesTocTarget) {
      if (state.activeRulesCategory === 'all') {
        let lastCategory = null;
        let tocHtml = '';
        rules.forEach((sec, idx) => {
          if (sec.category !== lastCategory) {
            lastCategory = sec.category;
            const catObj = RULES_CATEGORIES.find(c => c.id === sec.category);
            const catName = isEn ? (catObj ? catObj.en : sec.categoryTitle) : (catObj ? catObj.cs : sec.categoryTitle);
            tocHtml += `<li class="rules-toc-group-header" role="presentation">${catName}</li>`;
          }
          tocHtml += `
            <li class="rules-toc-item">
              <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
            </li>
          `;
        });
        els.rulesTocTarget.innerHTML = tocHtml;
      } else {
        els.rulesTocTarget.innerHTML = rules.map((sec, idx) => `
          <li class="rules-toc-item">
            <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
          </li>
        `).join('');
      }

      els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            scrollToElement(targetEl, 14);
          }
        });
      });
    }

    els.rulesContentTarget.innerHTML = rules.map(sec => `
      <section id="${sec.id}" class="rules-article">
        ${sec.content}
        <div class="rules-back-to-toc">
          <button type="button" class="btn-back-to-toc" data-action="back-to-toc">
            <span>↑</span> <span>${isEn ? 'Back to Table of Contents' : 'Zpět na obsah pravidel'}</span>
          </button>
        </div>
      </section>
    `).join('');

    // Attach back to TOC event listeners
    els.rulesContentTarget.querySelectorAll('.btn-back-to-toc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToRulesToc();
      });
    });

    // Setup scrollspy observer for rule articles
    if (window.rulesSectionObserver) {
      window.rulesSectionObserver.disconnect();
    }
    if ('IntersectionObserver' in window && els.rulesContentTarget) {
      window.rulesSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const secId = entry.target.id;
            if (els.rulesTocTarget) {
              const matchingLink = els.rulesTocTarget.querySelector(`a[href="#${secId}"]`);
              if (matchingLink) {
                els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
                matchingLink.classList.add('active');
              }
            }
          }
        });
      }, {
        rootMargin: '-80px 0px -65% 0px',
        threshold: 0
      });

      els.rulesContentTarget.querySelectorAll('.rules-article').forEach(art => {
        window.rulesSectionObserver.observe(art);
      });
    }
  }

  // =========================================================================
  // RENDER FAQ (CONFLICT SITUATIONS)
  // =========================================================================
  function renderFaqCategories() {
    if (!els.faqCatContainer) return;
    const isEn = state.lang === 'en';

    els.faqCatContainer.innerHTML = FAQ_CATEGORIES.map(cat => `
      <button class="faq-cat-btn ${state.activeFaqCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
        ${isEn ? cat.en : cat.cs}
      </button>
    `).join('');

    els.faqCatContainer.querySelectorAll('.faq-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        els.faqCatContainer.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFaqCategory = btn.dataset.catId;
        renderFaq();
      });
    });
  }

  function renderFaq() {
    if (!els.faqList) return;
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;
    const faqData = (isEn && window.BANG_FAQ_EN) ? window.BANG_FAQ_EN : (window.BANG_FAQ || []);

    const selectedCatObj = FAQ_CATEGORIES.find(c => c.id === state.activeFaqCategory);

    const filtered = faqData.filter(item => {
      if (state.activeFaqCategory !== 'all' && selectedCatObj) {
        const targetCat = isEn ? selectedCatObj.enCat : selectedCatObj.csCat;
        if (item.category !== targetCat) return false;
      }
      if (state.faqQuery.trim()) {
        const qNorm = normalizeString(state.faqQuery);
        const tokens = qNorm.split(/\s+/).filter(Boolean);
        const plainAnswer = (item.answerHtml || '').replace(/<[^>]*>/g, ' ');
        const fullText = `${item.question} ${plainAnswer} ${(item.tags || []).join(' ')} ${item.category}`;
        const faqTextNorm = normalizeString(fullText);

        const matches = tokens.every(token => faqTextNorm.includes(token));
        if (!matches) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      els.faqList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <h3>${t.faqNoResults}</h3>
          <p>${t.faqNoResultsDesc}</p>
        </div>
      `;
      return;
    }

    els.faqList.innerHTML = filtered.map(item => `
      <details class="bang-disclosure" name="bang-faq" id="${item.id}">
        <summary>
          <span>${item.question}</span>
          <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted); background: var(--bg-surface); padding: 0.25rem 0.55rem; border-radius: 4px; border: 1px solid var(--border-color); flex-shrink: 0;">
            ${item.category}
          </span>
        </summary>
        <div class="disclosure-body">
          ${item.answerHtml}
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem;">
            ${(item.tags || []).map(tag => `<span class="card-meta-item" style="font-size: 0.75rem;">#${tag}</span>`).join('')}
          </div>
        </div>
      </details>
    `).join('');
  }

  // =========================================================================
  // RENDER TURN GUIDE & QUICK HELPER (BILINGUAL & INTERACTIVE STEPPER)
  // =========================================================================
  const turnStepperState = {
    mode: 'stepper', // 'stepper' or 'full'
    activeStep: 0,
    quickTestResult: null
  };

  function renderTurnGuide() {
    if (!els.tahHraceTarget) return;
    const container = els.tahHraceTarget;
    const isEn = state.lang === 'en';

    if (turnStepperState.mode === 'full') {
      els.tahHraceTarget.innerHTML = `
        <div style="margin-bottom: 1.25rem; display: flex; justify-content: flex-end; gap: 0.5rem; flex-wrap: wrap;">
          <button type="button" id="btn-print-cheat-sheet-full" class="tool-subnav-btn" style="font-size: 0.95rem; padding: 0.6rem 1.2rem; cursor: pointer;">
            ${isEn ? 'Print Player Cheat Sheet' : 'Vytisknout tahák pro hráče'}
          </button>
          <button type="button" id="btn-toggle-turn-stepper" class="tool-subnav-btn active" style="font-size: 0.95rem; padding: 0.6rem 1.2rem; cursor: pointer;">
            ⏱️ ${isEn ? 'Switch to Step-by-Step Interactive Guide' : 'Přepnout na Interaktivního asistenta (Krok za krokem)'}
          </button>
        </div>
        ${isEn ? window.BANG_TURN_HTML_EN : window.BANG_TURN_HTML_CS}
      `;
      const printBtn = document.getElementById('btn-print-cheat-sheet-full');
      if (printBtn) {
        printBtn.addEventListener('click', openPrintCheatSheet);
      }
      const btn = document.getElementById('btn-toggle-turn-stepper');
      if (btn) {
        btn.addEventListener('click', () => {
          turnStepperState.mode = 'stepper';
          renderTurnGuide();
        });
      }
      return;
    }

    const STEPS = [
      {
        num: 0,
        phaseBadge: isEn ? 'PHASE 0' : 'FÁZE 0',
        title: isEn ? 'Global Events & Timed Cards Sequence' : 'Globální události & Přísné pořadí časovaných karet',
        lead: isEn ? 'Official strict sequence evaluated BEFORE drawing cards:' : 'Přísné oficiální pořadí vyhodnocení PŘED lízáním karet:',
        items: [
          {
            icon: '<img src="assets/icons/icon_sheriff.png" class="symbol-inline-lg" alt="Sheriff">',
            isImage: true,
            title: isEn ? '1. Sheriff (From Round 2)' : '1. Šerif (od 2. kola hry)',
            desc: isEn ? 'Flips new global event (High Noon / Fistful deck) and advances locomotive by 1 station to the right.' : 'Otočí novou kartu události (balíček High Noon / Fistful) a posune lokomotivu o 1 stanici vpravo.',
            action: null
          },
          {
            icon: '<img src="assets/symbols/symbol_dynamite.png" class="symbol-inline-lg" alt="Dynamite">',
            isImage: true,
            title: isEn ? '2. Dynamite (Highest Priority!)' : '2. Dynamit (nejvyšší priorita!)',
            desc: isEn ? 'Draws top card: Spades 2 to 9 (♠ 2–9) = BOOM! Loses 3 life points! Any other card = passes safely to the left.' : 'Snímá vrchní kartu z balíčku: Piky 2 až 9 (♠ 2–9) = VÝBUCH za 3 životy! Jinak bezpečný posun k hráči vlevo.',
            action: 'dynamite',
            btnLabel: isEn ? 'Test Dynamite (♠ 2–9)' : 'Otestovat Dynamit (♠ 2–9)'
          },
          {
            icon: '<img src="assets/symbols/symbol_jail.png" class="symbol-inline-lg" alt="Jail">',
            isImage: true,
            title: isEn ? '3. Jail (Second in Order)' : '3. Vězení (druhé v pořadí)',
            desc: isEn ? 'Draws top card: Hearts (♥) = free escape! Any other suit = lose Phase 1 & 2! (Legends Rule: may discard 1 ♥ card from hand to skip drawing!).' : 'Snímá vrchní kartu: Srdce (♥) = útěk! Jinak ztráta Fáze 1 i Fáze 2. (Pravidlo Legend: Lze z ruky odhodit 1 ♥ kartu a odehrát tah bez snímání!).',
            action: 'jail',
            btnLabel: isEn ? 'Test Jail (♥ Hearts)' : 'Otestovat Vězení (♥ Srdce)'
          },
          {
            icon: '<img src="assets/icons/icon_dynamite.png" class="symbol-inline-lg" alt="Bomb">',
            isImage: true,
            title: isEn ? '4. Bomb (Armed & Dangerous)' : '4. Bomba (Ozbrojení a nebezpeční)',
            desc: isEn ? 'Draws: Red (♥/♦) = passes safely; Black (♠/♣) = loses 2 load tokens (explodes for 2 lives if charges reach 0!).' : 'Snímá: Červená (♥/♦) = bezpečný posun dál; Černá (♠/♣) = -2 žetony nabití (při 0 výbuch za 2 životy!).',
            action: 'bomb',
            btnLabel: isEn ? 'Test Bomb (Red/Black)' : 'Otestovat Bombu (Červená/Černá)'
          },
          {
            icon: '<img src="assets/icons/icon_rattlesnake.png" class="symbol-inline-lg" alt="Rattlesnake">',
            isImage: true,
            title: isEn ? '5. Rattlesnake (Valley of Shadows)' : '5. Chřestýš (Údolí stínů)',
            desc: isEn ? 'Draws: Spades (♠) = loses 1 life point. (Note: If player failed in Jail, they do not check for Rattlesnake!).' : 'Snímá: Piky (♠) = ztráta 1 života. (Pozn.: Pokud hráč neuspěl ve Vězení, na Chřestýše již nesnímá!).',
            action: 'rattlesnake',
            btnLabel: isEn ? 'Test Rattlesnake (♠ Spades)' : 'Otestovat Chřestýše (♠ Piky)'
          },
          {
            icon: '<img src="assets/icons/icon_stagecoach.png" class="symbol-inline-lg" alt="Map">',
            isImage: true,
            title: isEn ? '6. Map' : '6. Mapa',
            desc: isEn ? 'Look at top 2 cards of the draw deck, you may discard 1.' : 'Prohlédnutí 2 vrchních karet z lízacího balíčku, 1 lze odhodit.',
            action: null
          }
        ]
      },
      {
        num: 1,
        phaseBadge: isEn ? 'PHASE 1' : 'FÁZE 1',
        title: isEn ? 'Draw Cards (Fáze lízání)' : 'Dobrání karet (Fáze lízání)',
        lead: isEn ? 'Draw 2 cards from the draw deck into your hand:' : 'Doberte standardně 2 karty z lízacího balíčku do ruky:',
        items: [
          {
            icon: '<img src="assets/symbols/symbol_draw_card.png" class="symbol-inline-lg" alt="Draw">',
            isImage: true,
            title: isEn ? 'Standard Draw' : 'Standardní dobrání',
            desc: isEn ? 'Draw exactly 2 cards from the top of the draw deck.' : 'Doberte přesně 2 vrchní karty z balíčku do ruky.',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_sheriff.png" class="symbol-inline-lg" alt="Abilities">',
            isImage: true,
            title: isEn ? 'Character Draw Abilities' : 'Speciální schopnosti postav při lízání',
            desc: isEn
              ? 'Jesse Jones (1st from opponent hand), Pedro Ramirez (1st from discard), Kit Carlson (draws 3, puts 1 back), Black Jack (if 2nd card is ♥/♦ draws 3rd!), Bill Noface (draws 1 + 1 per wound), Pixie Pete (draws 3).'
              : 'Jesse Jones (1. kartu z ruky soupeře), Pedro Ramirez (1. kartu z odhazovacího balíčku), Kit Carlson (bere 3, 1 vrací), Black Jack (druhá karta červená = líže 3. kartu!), Bill Noface (1 karta + 1 za každé zranění), Pixie Pete (bere 3 karty).',
            action: null
          }
        ]
      },
      {
        num: 2,
        phaseBadge: isEn ? 'PHASE 2' : 'FÁZE 2',
        title: isEn ? 'Play Cards & Expansion Actions' : 'Zahrání karet a akce z rozšíření',
        lead: isEn ? 'Play any number of cards to assist yourself or eliminate opponents:' : 'Zahrajte libovolné množství karet pro posílení sebe sama či oslabení soupeřů:',
        items: [
          {
            icon: '<img src="assets/symbols/symbol_bang.png" class="symbol-inline-lg" alt="BANG!">',
            isImage: true,
            title: isEn ? 'Strict BANG! Limit' : 'Přísné pravidlo pro kartu BANG!',
            desc: isEn
              ? 'Maximum 1 genuine BANG! card per turn (unless you equip Volcanic or play Willy the Kid). Gatling, Flintlock, Derringer or Doc Holyday abilities DO NOT count toward the limit!'
              : 'Můžete zahrát maximálně 1 skutečnou kartu BANG! za tah (pokud nemáte vyložený Volcanic nebo nejste Willy the Kid). Kulomet, Křesadlovka, Derringer ani schopnost Doca Holydaye se do limitu NEPOČÍTAJÍ!',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_train.png" class="symbol-inline-lg" alt="Train">',
            isImage: true,
            title: isEn ? 'The Great Train Robbery (Train Advance)' : 'Velká vlaková loupež (Posun vlaku & Nákup)',
            desc: isEn
              ? 'Advance train 1 station to the right for FREE. Then you MUST purchase the railcar attached to that station by paying its station cost (discard cards or load tokens).'
              : 'Posun vlaku o 1 stanici vpravo ZDARMA. Následně si MUSÍTE koupit vagon přiřazený ke stanici za cenu na stanici (odhozením karty z ruky nebo zaplacením žetonů nabití).',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_coins.png" class="symbol-inline-lg" alt="Gold">',
            isImage: true,
            title: isEn ? 'Gold Rush (Gold Nuggets & Equipment)' : 'Zlatá horečka (Nákup vybavení & Zlato)',
            desc: isEn
              ? 'Buy black equipment cards from the 3 displayed using gold nuggets. Discard Beer to gain 1 nugget. Discard opponent equipment by paying its cost + 1 nugget.'
              : 'Nákup z nabídky 3 karet vybavení zaplacením valounů zlata. Směna karty Pivo za 1 valoun. Odhození vybavení soupeře za cenu karty + 1 valoun.',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_cock.png" class="symbol-inline-lg" alt="Load">',
            isImage: true,
            title: isEn ? 'Armed & Dangerous (Dangerous Cards & Charging)' : 'Ozbrojení a nebezpeční (Oranžové karty)',
            desc: isEn
              ? 'Equip orange dangerous cards with 3 load tokens. Pay load tokens to trigger dangerous effects or upgrade brown cards. Playing any blue card earns +1 load token!'
              : 'Vykládání oranžových nebezpečných karet se 3 žetony nabití. Placení žetonů za efekty. Za každou nově vyloženou modrou kartu získáte +1 žeton nabití!',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_cards.png" class="symbol-inline-lg" alt="Legends">',
            isImage: true,
            title: isEn ? 'Legends (Performing Feats)' : 'Legendy (Vykonání činu)',
            desc: isEn
              ? 'Perform an active feat on the table: place 2 Fame Tokens on the card. If you are a Legend (Side B): claiming a feat inflicts 1 uncancelable damage on another legend!'
              : 'Splnění podmínky činu na stole: položte 2 žetony slávy na kartu činu. Pokud jste již Legendou (strana B): přivlastnění činu způsobí 1 nezvratné zranění jiné legendě!',
            action: null
          }
        ]
      },
      {
        num: 3,
        phaseBadge: isEn ? 'PHASE 3' : 'FÁZE 3',
        title: isEn ? 'Discard Excess & Charge' : 'Odhození přebytku & Nabíjení',
        lead: isEn ? 'Check hand limit at the end of active card play:' : 'Kontrola limitu karet na konci vašeho aktivního hraní:',
        items: [
          {
            icon: '<img src="assets/symbols/symbol_discard_card.png" class="symbol-inline-lg" alt="Discard">',
            isImage: true,
            title: isEn ? 'Hand Limit = Current Life Points' : 'Limit karet v ruce = Aktuální počet životů',
            desc: isEn
              ? 'If you have more cards in hand than current lives, you must discard excess cards to the discard pile.'
              : 'Pokud máte v ruce více karet než aktuálních životů, musíte nadbytečné karty odhodit na odhazovací balíček.',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_sheriff.png" class="symbol-inline-lg" alt="Legend">',
            isImage: true,
            title: isEn ? 'IMPORTANT: Legends Rule for 1 Life!' : 'DŮLEŽITÉ: Pravidlo Legend pro 1 život!',
            desc: isEn
              ? 'In the Legends expansion, any player reduced to only 1 life point is permitted to hold 2 CARDS in hand (instead of 1)!'
              : 'V rozšíření Legendy platí oficiální pravidlo, že hráč s pouze 1 životem smí držet v ruce 2 KARTY (nikoli pouze 1)!',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_cock.png" class="symbol-inline-lg" alt="Charging">',
            isImage: true,
            title: isEn ? 'Charging (Armed & Dangerous)' : 'Nabíjení (Ozbrojení a nebezpeční)',
            desc: isEn
              ? 'For EACH card you are forced to discard in this phase, you immediately gain +1 LOAD TOKEN on your character or dangerous card!'
              : 'Za KAŽDOU kartu, kterou v této fázi musíte z ruky odhodit, okamžitě získáte +1 ŽETON NABITÍ na svou postavu nebo Nebezpečnou kartu!',
            action: null
          }
        ]
      },
      {
        num: 4,
        phaseBadge: isEn ? 'PHASE 4' : 'FÁZE 4',
        title: isEn ? 'End of Turn & Boasting Feats' : 'Konec tahu & Chlubení se činem',
        lead: isEn ? 'Final wrap-up before passing turn to the next player:' : 'Závěrečné vyhodnocení před předáním tahu hráči po levici:',
        items: [
          {
            icon: '<img src="assets/icons/icon_cards.png" class="symbol-inline-lg" alt="Boasting">',
            isImage: true,
            title: isEn ? 'Boasting Feats (Legends)' : 'Chlubení se činem (Legendy)',
            desc: isEn
              ? 'If you DID NOT perform a feat this turn (even if you were jailed!), turn a new Feat card from the deck and place 1 of your Fame Tokens on any active feat!'
              : 'Pokud jste v tomto tahu NEVYKONAL čin (i pokud jste byli ve Vězení!), otočte nový čin z balíčku a položte 1 svůj žeton slávy na vyložený čin!',
            action: null
          },
          {
            icon: '<img src="assets/icons/icon_sheriff.png" class="symbol-inline-lg" alt="Legend">',
            isImage: true,
            title: isEn ? 'LEGEND IS BORN (5th Fame Token)' : 'ZROD LEGENDY (5. žeton slávy)',
            desc: isEn
              ? 'The moment you place your 5th Fame Token, you become a Legend! Flip your character card to Side B and immediately restore your lives to 3!'
              : 'V okamžiku, kdy položíte svůj 5. žeton slávy, stáváte se Legendou! Otočte kartu postavy na stranu B a ihned si doplňte své životy na 3!',
            action: null
          },
          {
            icon: '👋',
            title: isEn ? 'Pass Turn' : 'Předání tahu',
            desc: isEn
              ? 'Jimmy Texas draws a card. Don Bell draws for an extra turn (Hearts/Diamonds = extra turn). Turn passes clockwise to next living player.'
              : 'Jimmy Texas líže kartu. Don Bell snímá na extra tah (♥/♦ = další tah). Tah přechází na dalšího živého hráče po levici.',
            action: null
          }
        ]
      }
    ];

    const cur = STEPS[turnStepperState.activeStep] || STEPS[0];

    // Quick test result markup
    let testBoxHtml = '';
    if (turnStepperState.quickTestResult) {
      const q = turnStepperState.quickTestResult;
      const isSuccess = q.evalRes.status === 'success';
      const isFail = q.evalRes.status === 'failure';
      const bgColor = isSuccess ? '#1e7e34' : (isFail ? '#c0392b' : '#3d2614');

      testBoxHtml = `
        <div style="background: ${bgColor}; color: #ffffff; padding: 1.15rem; border-radius: 8px; margin-top: 1.25rem; box-shadow: 0 4px 12px rgba(0,0,0,0.25); animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <span style="font-size: 2rem; background: #ffffff; color: ${q.card.color === 'red' ? '#c0392b' : '#1a1a1a'}; padding: 0.2rem 0.65rem; border-radius: 6px; font-weight: 900; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
                ${q.card.value}${q.card.suitSymbol}
              </span>
              <div>
                <div style="font-weight: 900; font-size: 1.05rem; letter-spacing: 0.5px;">${isEn ? q.evalRes.titleEn : q.evalRes.titleCs}</div>
                <div style="font-size: 0.88rem; opacity: 0.9;">${isEn ? q.evalRes.messageEn : q.evalRes.messageCs}</div>
              </div>
            </div>
            <button type="button" id="btn-close-quick-test" style="background: rgba(0,0,0,0.3); color: #fff; border: 1px solid rgba(255,255,255,0.4); border-radius: 4px; padding: 0.3rem 0.6rem; cursor: pointer;">✕</button>
          </div>
        </div>
      `;
    }

    els.tahHraceTarget.innerHTML = `
      <div class="tool-card-box">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
          <div>
            <h2 style="font-family: var(--font-western); color: var(--color-brown); margin: 0 0 0.35rem 0; font-size: 1.55rem; display: flex; align-items: center; gap: 0.5rem;">
              <span>⏱️</span> ${isEn ? 'Interactive Turn Assistant (Step-by-Step)' : 'Interaktivní asistent tahu (Krok za krokem)'}
            </h2>
            <p style="color: var(--text-muted); margin: 0; font-size: 0.95rem;">
              ${isEn ? 'Follow the exact official sequence of phases during your turn.' : 'Procházejte krok za krokem přísné oficiální pořadí akcí ve vašem tahu.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-print-cheat-sheet" class="tool-subnav-btn" style="font-size: 0.9rem; padding: 0.55rem 1rem; cursor: pointer;">
              ${isEn ? 'Print Cheat Sheet' : 'Vytisknout tahák'}
            </button>
            <button type="button" id="btn-toggle-turn-full" class="tool-subnav-btn" style="font-size: 0.9rem; padding: 0.55rem 1rem; cursor: pointer;">
              ${isEn ? 'View Full Rules Overview' : 'Zobrazit celá pravidla fází'}
            </button>
          </div>
        </div>

        <!-- Step Indicator Tabs -->
        <div class="turn-stepper-tabs" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem; margin-bottom: 1.5rem;">
          ${STEPS.map((s, idx) => `
            <button type="button" class="turn-step-pill ${idx === turnStepperState.activeStep ? 'active' : ''}" data-step="${idx}" style="padding: 0.75rem 0.5rem; text-align: center; border-radius: 8px; border: 1.5px solid ${idx === turnStepperState.activeStep ? 'var(--color-brown)' : 'var(--border-color)'}; background: ${idx === turnStepperState.activeStep ? 'var(--color-brown)' : 'var(--bg-surface)'}; color: ${idx === turnStepperState.activeStep ? '#fff' : 'var(--text-color)'}; font-weight: 700; font-size: 0.88rem; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 0.72rem; text-transform: uppercase; opacity: 0.85;">${s.phaseBadge}</div>
              <div style="font-size: 0.92rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${[isEn ? '0. Events' : '0. Příprava', isEn ? '1. Draw' : '1. Dobrání', isEn ? '2. Play' : '2. Hraní', isEn ? '3. Discard' : '3. Odhození', isEn ? '4. End' : '4. Konec'][idx]}</div>
            </button>
          `).join('')}
        </div>

        <!-- Active Step Card -->
        <div style="background: var(--bg-surface); border: 2px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="card-badge" style="background: var(--color-brown); color: #fff; font-size: 0.82rem; padding: 0.25rem 0.65rem; border-radius: 4px; font-weight: 800; text-transform: uppercase;">
                ${cur.phaseBadge}
              </span>
              <h3 style="display: inline; margin-left: 0.65rem; font-family: var(--font-western); color: var(--color-brown); font-size: 1.25rem;">
                ${cur.title}
              </h3>
            </div>
            <span style="font-weight: 800; font-size: 0.9rem; color: var(--text-muted);">
              ${isEn ? `Step ${cur.num + 1} of 5` : `Krok ${cur.num + 1} z 5`}
            </span>
          </div>

          <p style="font-size: 0.98rem; font-weight: 700; color: var(--color-brown); margin-bottom: 1rem;">
            ${cur.lead}
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${cur.items.map(it => `
              <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.9rem; display: flex; align-items: flex-start; gap: 0.85rem;">
                ${it.isImage || (typeof it.icon === "string" && it.icon.startsWith("<img")) ? it.icon : `<span style="font-size: 1.5rem; line-height: 1; flex-shrink: 0;">${it.icon}</span>`}
                <div style="flex: 1;">
                  <div style="font-weight: 800; font-size: 0.95rem; color: var(--color-brown); margin-bottom: 0.25rem;">
                    ${it.title}
                  </div>
                  <div style="font-size: 0.92rem; line-height: 1.5; color: var(--text-color);">
                    ${it.desc}
                  </div>
                  ${it.action ? `
                    <div style="margin-top: 0.6rem;">
                      <button type="button" class="btn-quick-test tool-subnav-btn active" data-action="${it.action}" style="font-size: 0.84rem; padding: 0.4rem 0.85rem; font-weight: 700; cursor: pointer;">
                        ${it.btnLabel}
                      </button>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          ${testBoxHtml}
        </div>

        <!-- Stepper Navigation Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <button type="button" id="btn-turn-prev" class="tool-subnav-btn" style="padding: 0.75rem 1.4rem; font-size: 0.95rem; font-weight: 700; cursor: pointer; ${turnStepperState.activeStep === 0 ? 'opacity: 0.4; pointer-events: none;' : ''}">
            ⬅️ ${isEn ? 'Previous Phase' : 'Předchozí fáze'}
          </button>

          <button type="button" id="btn-turn-reset" class="tool-subnav-btn" style="padding: 0.75rem 1.2rem; font-size: 0.9rem; cursor: pointer;">
            ${isEn ? 'Start Turn Over' : 'Začít nový tah'}
          </button>

          <button type="button" id="btn-turn-next" class="tool-subnav-btn active" style="padding: 0.75rem 1.6rem; font-size: 1rem; font-weight: 800; cursor: pointer;">
            ${turnStepperState.activeStep < 4 ? (isEn ? 'Next Phase ➔' : 'Další fáze ➔') : (isEn ? 'Finish Turn' : 'Dokončit tah')}
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const printBtn = document.getElementById('btn-print-cheat-sheet');
    if (printBtn) {
      printBtn.addEventListener('click', openPrintCheatSheet);
    }

    const toggleBtn = document.getElementById('btn-toggle-turn-full');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        turnStepperState.mode = 'full';
        renderTurnGuide();
      });
    }

    container.querySelectorAll('.turn-step-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        turnStepperState.activeStep = parseInt(btn.dataset.step, 10);
        turnStepperState.quickTestResult = null;
        renderTurnGuide();
      });
    });

    const prevBtn = document.getElementById('btn-turn-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (turnStepperState.activeStep > 0) {
          turnStepperState.activeStep--;
          turnStepperState.quickTestResult = null;
          renderTurnGuide();
        }
      });
    }

    const nextBtn = document.getElementById('btn-turn-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (turnStepperState.activeStep < 4) {
          turnStepperState.activeStep++;
          turnStepperState.quickTestResult = null;
          renderTurnGuide();
        } else {
          turnStepperState.activeStep = 0;
          turnStepperState.quickTestResult = null;
          renderTurnGuide();
        }
      });
    }

    const resetBtn = document.getElementById('btn-turn-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        turnStepperState.activeStep = 0;
        turnStepperState.quickTestResult = null;
        renderTurnGuide();
      });
    }

    container.querySelectorAll('.btn-quick-test').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (window.BANG_TOOLS && window.BANG_TOOLS.DrawSimulator) {
          const card = window.BANG_TOOLS.DrawSimulator.drawCard();
          const evalRes = window.BANG_TOOLS.DrawSimulator.evaluate(action, card, isEn);
          turnStepperState.quickTestResult = { card, evalRes };

          // Play sound
          if (window.BANG_TOOLS.SoundFX) {
            if (action === 'dynamite' && evalRes.status === 'failure') window.BANG_TOOLS.SoundFX.playDynamite();
            else if (evalRes.status === 'success') window.BANG_TOOLS.SoundFX.playBeer();
            else window.BANG_TOOLS.SoundFX.playShot();
          }

          renderTurnGuide();
        }
      });
    });

    const closeTestBtn = document.getElementById('btn-close-quick-test');
    if (closeTestBtn) {
      closeTestBtn.addEventListener('click', () => {
        turnStepperState.quickTestResult = null;
        renderTurnGuide();
      });
    }
  }

  function openPrintCheatSheet() {
    const isEn = state.lang === 'en';

    const sheetHtml = `
      <div class="cheat-sheet-content" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a;">
        <div style="border-bottom: 2px solid #5a3825; padding-bottom: 0.75rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h1 style="font-family: var(--font-western); font-size: 1.5rem; color: #5a3825; margin: 0 0 0.25rem 0;">
              ${isEn ? 'BANG! COMPANION — QUICK PLAYER CHEAT SHEET' : 'BANG! COMPANION — RYCHLÝ HRÁČSKÝ TAHÁK'}
            </h1>
            <div style="font-size: 0.85rem; color: #555; font-weight: 600;">
              ${isEn ? 'Official turn phase order, weapon ranges, distance calculation, symbols & role matrix' : 'Oficiální pořadí fází tahu, dosahy zbraní, výpočet vzdálenosti, symboly a matice rolí'}
            </div>
          </div>
          <div style="text-align: right; font-size: 0.75rem; color: #777;">
            <span>bang-pravidla.web.app</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1rem;">
          <!-- COLUMN 1 -->
          <div>
            <!-- PHASES -->
            <div style="border: 1.5px solid #5a3825; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; background: #fffcf8;">
              <h3 style="margin: 0 0 0.5rem 0; font-family: var(--font-western); color: #5a3825; font-size: 1.05rem; border-bottom: 1px solid #d3c4b1; padding-bottom: 0.25rem;">
                1. ${isEn ? 'STRICT TURN PHASES SEQUENCE' : 'PŘÍSNÉ POŘADÍ FÁZÍ TAHU'}
              </h3>
              
              <div style="margin-bottom: 0.5rem;">
                <strong style="color: #8b0000; font-size: 0.86rem;">${isEn ? 'PHASE 0: Timed Cards & Global Events' : 'FÁZE 0: Časované karty a globální události'}</strong>
                <ol style="margin: 0.2rem 0 0.4rem 1.2rem; padding: 0; font-size: 0.82rem; line-height: 1.35;">
                  <li><strong>${isEn ? 'Sheriff (From Round 2):' : 'Šerif (od 2. kola):'}</strong> ${isEn ? 'Flips global event (High Noon / Fistful) + advances Train by 1 station.' : 'Otočí událost (High Noon / Fistful) + posune vlak o 1 stanici.'}</li>
                  <li><strong>${isEn ? 'Dynamite (Highest Priority!):' : 'Dynamit (nejvyšší priorita!):'}</strong> ${isEn ? 'Draws top card: ♠ 2–9 = BOOM (-3 lives)! Otherwise passes left.' : 'Snímá vrchní kartu: ♠ 2–9 = VÝBUCH (-3 životy)! Jinak posun vlevo.'}</li>
                  <li><strong>${isEn ? 'Jail:' : 'Vězení:'}</strong> ${isEn ? 'Draws: ♥ = free escape! Any other suit = lose Phase 1 & 2.' : 'Snímá: ♥ = volný! Jinak ztráta Fáze 1 i Fáze 2.'}</li>
                  <li><strong>${isEn ? 'Bomb (Armed & Dangerous):' : 'Bomba (O&B):'}</strong> ${isEn ? 'Red = safe; Black = lose 2 load tokens (explodes for 2 lives at 0!).' : 'Červená = bezpečí; Černá = -2 nabití (při 0 výbuch za 2 životy!).'}</li>
                  <li><strong>${isEn ? 'Rattlesnake (Valley of Shadows):' : 'Chřestýš:'}</strong> ${isEn ? 'Draws: ♠ = lose 1 life.' : 'Snímá: ♠ = ztráta 1 života.'}</li>
                </ol>
              </div>

              <div style="margin-bottom: 0.5rem;">
                <strong style="color: #2b5e28; font-size: 0.86rem;">${isEn ? 'PHASE 1: Draw Cards' : 'FÁZE 1: Dobrání karet'}</strong>
                <div style="font-size: 0.82rem; line-height: 1.35; margin-left: 0.3rem;">
                  ${isEn ? 'Draw 2 cards from draw deck (Jesse Jones takes 1st from player, Pedro Ramirez from discard, Kit Carlson draws 3 keeps 2, Pixie Pete draws 3).' : 'Doberte 2 karty z lízacího balíčku (Jesse Jones bere 1. od hráče, Pedro z odhazovacího, Kit Carlson bere 3 a 1 vrací, Pixie Pete bere 3).'}
                </div>
              </div>

              <div style="margin-bottom: 0.5rem;">
                <strong style="color: #5a3825; font-size: 0.86rem;">${isEn ? 'PHASE 2: Play Cards & Actions' : 'FÁZE 2: Zahrání karet a akce'}</strong>
                <div style="font-size: 0.82rem; line-height: 1.35; margin-left: 0.3rem;">
                  • <strong>${isEn ? 'BANG! Limit:' : 'Limit BANG!: '}</strong> ${isEn ? 'Max 1 BANG! card per turn (unless Volcanic or Willy the Kid). Gatling/Flintlock do NOT count!' : 'Max 1 karta BANG! za tah (kromě Volcanicu a Willy the Kida). Kulomet a Křesadlovka se nepočítají!'}
                  <br>• <strong>${isEn ? 'Train & Saloon:' : 'Vlak & Saloon: '}</strong> ${isEn ? 'Advance train & buy railcars for station price; buy equipment for gold nuggets in Saloon.' : 'Posun vlaku a nákup vagonů za cenu stanice; nákup černých karet v Saloonu za zlato.'}
                </div>
              </div>

              <div style="margin-bottom: 0.5rem;">
                <strong style="color: #664d03; font-size: 0.86rem;">${isEn ? 'PHASE 3: Discard Down to Lives' : 'FÁZE 3: Odhození přebytečných karet'}</strong>
                <div style="font-size: 0.82rem; line-height: 1.35; margin-left: 0.3rem;">
                  ${isEn ? 'Hand size limit = your CURRENT life points. In A&D, gain +1 load token for each card discarded!' : 'Limit karet v ruce = aktuální počet životů! V O&B získáte +1 žeton nabití za každou odhozenou kartu.'}
                </div>
              </div>

              <div>
                <strong style="color: #1b4965; font-size: 0.86rem;">${isEn ? 'PHASE 4: End of Turn & Feats' : 'FÁZE 4: Konec tahu & Legendy'}</strong>
                <div style="font-size: 0.82rem; line-height: 1.35; margin-left: 0.3rem;">
                  ${isEn ? 'If you did not perform a feat this turn, reveal a new Feat card & place 1 Fame token. 5th token = become a Legend (Side B & 3 lives)!' : 'Pokud jste v tahu nevykonali čin, otočte nový čin a položte 1 žeton slávy. 5. žeton = Zrod Legendy (strana B a 3 životy)!'}
                </div>
              </div>
            </div>

            <!-- DISTANCE & WEAPONS -->
            <div style="border: 1.5px solid #5a3825; border-radius: 6px; padding: 0.75rem; background: #fffcf8;">
              <h3 style="margin: 0 0 0.5rem 0; font-family: var(--font-western); color: #5a3825; font-size: 1.05rem; border-bottom: 1px solid #d3c4b1; padding-bottom: 0.25rem;">
                <img src="assets/symbols/symbol_reachable_distance.png" class="rules-symbol-inline" alt=""> 2. ${isEn ? 'WEAPONS & DISTANCE CALCULATION' : 'ZBRANĚ A VÝPOČET VZDÁLENOSTI'}
              </h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 0.5rem;">
                <thead>
                  <tr style="background: #eedcc6; text-align: left;">
                    <th style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Weapon' : 'Zbraň'}</th>
                    <th style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Range' : 'Dosah'}</th>
                    <th style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Special Effect' : 'Speciální efekt'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Colt .45</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">1</td><td style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Default starting weapon' : 'Základní zbraň každého hráče'}</td></tr>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Volcanic</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">1</td><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>${isEn ? 'Unlimited BANG! cards' : 'Neomezeně BANG! za tah'}</strong></td></tr>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Schofield</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">2</td><td style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Reach distance 2' : 'Dosah do vzdálenosti 2'}</td></tr>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Remington</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">3</td><td style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Reach distance 3' : 'Dosah do vzdálenosti 3'}</td></tr>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Rev. Carbine</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">4</td><td style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Reach distance 4' : 'Dosah do vzdálenosti 4'}</td></tr>
                  <tr><td style="padding: 3px 6px; border: 1px solid #c7b299;"><strong>Winchester</strong></td><td style="padding: 3px 6px; border: 1px solid #c7b299;">5</td><td style="padding: 3px 6px; border: 1px solid #c7b299;">${isEn ? 'Reach distance 5' : 'Dosah do vzdálenosti 5'}</td></tr>
                </tbody>
              </table>
              <div style="font-size: 0.8rem; line-height: 1.35; background: #fdf5ea; padding: 0.4rem 0.6rem; border-radius: 4px; border: 1px solid #d3c4b1;">
                <strong>${isEn ? 'Formula:' : 'Vzorec:'}</strong> ${isEn ? 'Actual Distance = Table Steps (shortest way) + Target Defense (Mustang +1, Hideout +1, Paul Regret +1) - Shooter Sight (Appaloosa -1, Binoculars -1, Rose Doolan -1).' : 'Výsledná vzdálenost = Počet míst u stolu (kratší cestou) + Obrana cíle (Mustang +1, Úkryt +1, Paul Regret +1) - Útok střelce (Appaloosa -1, Dalekohled -1, Rose Doolan -1).'}
              </div>
            </div>
          </div>

          <!-- COLUMN 2 -->
          <div>
            <!-- ROLES & VICTORY -->
            <div style="border: 1.5px solid #5a3825; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; background: #fffcf8;">
              <h3 style="margin: 0 0 0.5rem 0; font-family: var(--font-western); color: #5a3825; font-size: 1.05rem; border-bottom: 1px solid #d3c4b1; padding-bottom: 0.25rem;">
                3. ${isEn ? 'ROLES & VICTORY MATRIX' : 'ROLE A PODMÍNKY VÍTĚZSTVÍ'}
              </h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 0.5rem;">
                <thead>
                  <tr style="background: #eedcc6; text-align: center;">
                    <th style="padding: 3px 5px; border: 1px solid #c7b299;">${isEn ? 'Players' : 'Hráči'}</th>
                    <th style="padding: 3px 5px; border: 1px solid #c7b299; color: #b8860b;">Sheriff</th>
                    <th style="padding: 3px 5px; border: 1px solid #c7b299; color: #2e7d32;">Deputy</th>
                    <th style="padding: 3px 5px; border: 1px solid #c7b299; color: #c62828;">Outlaw</th>
                    <th style="padding: 3px 5px; border: 1px solid #c7b299; color: #6a1b9a;">Renegade</th>
                  </tr>
                </thead>
                <tbody style="text-align: center;">
                  <tr><td style="padding: 2px 4px; border: 1px solid #c7b299;"><strong>4</strong></td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">-</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">2</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td></tr>
                  <tr><td style="padding: 2px 4px; border: 1px solid #c7b299;"><strong>5</strong></td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">2</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td></tr>
                  <tr><td style="padding: 2px 4px; border: 1px solid #c7b299;"><strong>6</strong></td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">3</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td></tr>
                  <tr><td style="padding: 2px 4px; border: 1px solid #c7b299;"><strong>7</strong></td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">2</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">3</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td></tr>
                  <tr><td style="padding: 2px 4px; border: 1px solid #c7b299;"><strong>8</strong></td><td style="padding: 2px 4px; border: 1px solid #c7b299;">1</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">2</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">3</td><td style="padding: 2px 4px; border: 1px solid #c7b299;">2</td></tr>
                </tbody>
              </table>

              <div style="font-size: 0.8rem; line-height: 1.35;">
                • <strong>${isEn ? 'Sheriff & Deputies:' : 'Šerif a Pomocníci:'}</strong> ${isEn ? 'Eliminate all Outlaws and Renegade(s). (Deputies win even if already dead!).' : 'Vyřadit všechny Bandity i Odpadlíka. (Pomocníci vítězí, i když jsou mrtví!).'}
                <br>• <strong>${isEn ? 'Outlaws:' : 'Bandité:'}</strong> ${isEn ? 'Kill the Sheriff. Win immediately whenever Sheriff dies (unless it is 1v1 with Renegade).' : 'Zabít Šerifa. Okamžité vítězství při smrti Šerifa (pokud nezbývá jen Odpadlík 1v1).'}
                <br>• <strong>${isEn ? 'Renegade:' : 'Odpadlík:'}</strong> ${isEn ? 'Must be the VERY LAST player standing alive with Sheriff, and kill Sheriff in a 1-on-1 duel!' : 'Musí zůstat ÚPLNĚ POSLEDNÍ živý u stolu se Šerifem a zabít ho v duelu 1 na 1!'}
                <div style="margin-top: 0.4rem; padding: 0.35rem 0.5rem; background: #fff1f0; border-left: 3px solid #c0392b; border-radius: 3px; font-size: 0.78rem;">
                  <strong>${isEn ? 'Rewards & Penalties:' : 'Odměny a tresty:'}</strong><br>
                  ${isEn ? 'Kill an Outlaw = draw 3 reward cards immediately!' : 'Zabití Bandity (kýmkoli) = okamžité líznutí 3 karet!'}<br>
                  ${isEn ? 'If Sheriff kills Deputy = Sheriff discards ALL cards in hand & in play!' : 'Pokud Šerif zabije svého Pomocníka = odhodí VŠECHNY karty z ruky i ze stolu!'}
                </div>
              </div>
            </div>

            <!-- KEY SYMBOLS -->
            <div style="border: 1.5px solid #5a3825; border-radius: 6px; padding: 0.75rem; background: #fffcf8;">
              <h3 style="margin: 0 0 0.5rem 0; font-family: var(--font-western); color: #5a3825; font-size: 1.05rem; border-bottom: 1px solid #d3c4b1; padding-bottom: 0.25rem;">
                ${isEn ? '4. CARD SYMBOLS & EXPANSION TOKENS' : '4. SYMBOLY KARET A ŽETONY'}
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.78rem;">
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_bang.png" class="tag-symbol-img" alt=""> <strong>BANG!</strong>: ${isEn ? '-1 life to target' : '-1 život cíli'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_missed.png" class="tag-symbol-img" alt=""> <strong>${isEn ? 'Missed!' : 'Vedle!'}</strong>: ${isEn ? 'Cancels 1 BANG!' : 'Ruší 1 BANG!'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_regain_life.png" class="tag-symbol-img" alt=""> <strong>${isEn ? 'Beer' : 'Pivo'}</strong>: ${isEn ? '+1 life (not in 2p)' : '+1 život (ne ve 2p)'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_draw_card.png" class="tag-symbol-img" alt=""> <strong>${isEn ? 'Draw' : 'Lízání'}</strong>: ${isEn ? 'Draw card' : 'Lízni kartu'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_any_one_player.png" class="tag-symbol-img" alt=""> <strong>${isEn ? 'Any' : 'Kdokoli'}</strong>: ${isEn ? 'Any player reach' : 'Dosah na kohokoli'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><img src="assets/symbols/symbol_draw_check.png" class="tag-symbol-img" alt=""> <strong>${isEn ? 'Check' : 'Sejmutí'}</strong>: ${isEn ? 'Deck suit check' : 'Ověření barvy'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><span>⚡</span> <strong>${isEn ? 'Orange' : 'Oranžová'}</strong>: ${isEn ? 'Dangerous load' : 'Nebezpečná (nabití)'}</div>
                <div style="display: flex; align-items: center; gap: 0.35rem;"><span>🪙</span> <strong>${isEn ? 'Nugget' : 'Zlato'}</strong>: ${isEn ? 'Saloon currency' : 'Měna v Saloonu'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    let printRoot = document.getElementById('printable-cheat-sheet-root');
    if (!printRoot) {
      printRoot = document.createElement('div');
      printRoot.id = 'printable-cheat-sheet-root';
      document.body.appendChild(printRoot);
    }
    printRoot.innerHTML = sheetHtml;

    els.modalBody.innerHTML = `
      <div style="padding: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1.5px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            
            <div>
              <h2 style="margin: 0; font-family: var(--font-western); color: var(--color-brown); font-size: 1.35rem;">
                ${isEn ? 'Print-Friendly Player Cheat Sheet' : 'Tiskový tahák pro hráče (A4 / PDF)'}
              </h2>
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                ${isEn ? 'Ready for printing or mobile reference at the game table' : 'Optimalizováno pro tisk na A4 i jako rychlá reference u stolu'}
              </div>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" id="btn-trigger-print" class="tool-subnav-btn active" style="font-size: 0.95rem; padding: 0.5rem 1.1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem; background: var(--color-brown); color: #fff;">
              ${isEn ? 'Print / Save PDF' : 'Vytisknout / Uložit PDF'}
            </button>
            <button type="button" id="btn-close-cheat-sheet" class="btn-reset-filters" style="font-size: 0.95rem; padding: 0.5rem 0.9rem; cursor: pointer;">
              ✕ ${isEn ? 'Close' : 'Zavřít'}
            </button>
          </div>
        </div>
        ${sheetHtml}
      </div>
    `;

    els.cardModal.classList.remove('has-image');
    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const printTriggerBtn = document.getElementById('btn-trigger-print');
    if (printTriggerBtn) {
      printTriggerBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const closeBtn = document.getElementById('btn-close-cheat-sheet');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeCardModal();
      });
    }
  }
  if (window.BANG_TOOLS) {
    window.BANG_TOOLS.openPrintCheatSheet = openPrintCheatSheet;
  }

  function renderQuickHelper() {
    if (!els.pomocnikTarget) return;
    const isEn = state.lang === 'en';
    els.pomocnikTarget.innerHTML = `
      <div style="display: flex; justify-content: flex-end; margin-bottom: 1.25rem;">
        <button type="button" id="btn-print-cheat-sheet-helper" class="tool-subnav-btn active" style="font-size: 0.95rem; padding: 0.6rem 1.25rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; background: var(--color-brown); color: #fff;">
          ${isEn ? 'Print Quick Player Cheat Sheet (A4 / PDF)' : 'Vytisknout rychlý tahák pro hráče (A4 / PDF)'}
        </button>
      </div>
      ${isEn ? window.BANG_HELPER_HTML_EN : window.BANG_HELPER_HTML_CS}
    `;
    const btn = document.getElementById('btn-print-cheat-sheet-helper');
    if (btn) {
      btn.addEventListener('click', openPrintCheatSheet);
    }
  }

  // =========================================================================
  // TOOLS CONTROLLER & SUB-VIEWS (100% Client-Side, No Database)
  // =========================================================================
  const calcParams = {
    totalPlayers: 5,
    shooterIdx: 0,
    targetIdx: 2,
    mode: 'target',
    weaponId: 'colt',
    appaloosa: false,
    binoculars: false,
    roseDoolan: false,
    mustang: false,
    hideout: false,
    paulRegret: false,
    zvonice: false,
    suspicions: {}
  };

  const eventDeckState = {
    filterSet: 'dual',
    sheriffVariant: 'both-official',
    sheriffDeck: [],
    sheriffIndex: 0,
    wwsDeck: [],
    wwsIndex: -1
  };

  const draftState = {
    step: 'setup',
    playerCount: 5,
    expansions: ['base', 'dodge-city'],
    currentIdx: 0,
    players: [],
    revealed: false
  };

  const trackerState = {
    lives: 4,
    maxLives: 4,
    isSheriff: false,
    gold: 0,
    cubes: 0,
    hand: 4
  };

  const quizState = {
    questions: [],
    idx: 0,
    score: 0,
    answered: false,
    selectedOption: null,
    finished: false
  };

  // =========================================================================
  // SETUP ASSISTANT STATE & RENDERER
  // =========================================================================
  const setupState = {
    players: 5,
    expansions: [
      'base', 'dodge-city', 'gold-rush', 'armed-dangerous',
      'train-robbery', 'valley-of-shadows', 'high-noon',
      'fistful-of-cards', 'wild-west-show', 'legends', 'dynamite-box'
    ],
    checkedItems: {}
  };

  function renderSetupAssistant(container) {
    const isEn = state.lang === 'en';
    const checklist = window.BANG_TOOLS ? window.BANG_TOOLS.getSetupChecklist(setupState.players, setupState.expansions, isEn) : [];

    const totalItems = checklist.length;
    const checkedCount = checklist.filter(it => setupState.checkedItems[it.id]).length;
    const isAllChecked = totalItems > 0 && checkedCount === totalItems;

    const ALL_EXPS = [
      { id: 'base', nameCs: 'Základní hra', nameEn: 'Base Game' },
      { id: 'dodge-city', nameCs: 'Dodge City', nameEn: 'Dodge City' },
      { id: 'gold-rush', nameCs: 'Zlatá horečka', nameEn: 'Gold Rush' },
      { id: 'armed-dangerous', nameCs: 'Ozbrojení a nebezpeční', nameEn: 'Armed & Dangerous' },
      { id: 'train-robbery', nameCs: 'Velká vlaková loupež', nameEn: 'The Great Train Robbery' },
      { id: 'valley-of-shadows', nameCs: 'Údolí stínů', nameEn: 'Valley of Shadows' },
      { id: 'high-noon', nameCs: 'Pravé poledne', nameEn: 'High Noon' },
      { id: 'fistful-of-cards', nameCs: 'Pěst plná karet', nameEn: 'A Fistful of Cards' },
      { id: 'wild-west-show', nameCs: 'Divoký západ', nameEn: 'Wild West Show' },
      { id: 'legends', nameCs: 'Legendy', nameEn: 'Legends' },
      { id: 'dynamite-box', nameCs: 'Dynamite Box promo', nameEn: 'Dynamite Box Promo' }
    ];

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2>${isEn ? 'Table Setup Configurator' : 'Asistent přípravy hry na míru'}</h2>
          <p class="tool-card-lead">
            ${isEn
              ? 'Select your player count and active expansions to generate an exact tailored preparation checklist with official rules.'
              : 'Zvolte počet hráčů a aktivní rozšíření pro vygenerování přesného oficiálního plánu přípravy stolu.'}
          </p>
        </div>

        <!-- Configuration Bar -->
        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); margin-bottom: 1.5rem;">
          <!-- Player Count Selector -->
          <div style="margin-bottom: 1.25rem;">
            <label style="font-weight: 800; font-size: 0.95rem; display: block; margin-bottom: 0.5rem; color: var(--color-brown);">
              ${isEn ? 'Number of Players (3–8):' : 'Počet hráčů u stolu (3–8):'}
            </label>
            <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;">
              ${[3, 4, 5, 6, 7, 8].map(n => `
                <button type="button" class="seat-btn ${n === setupState.players ? 'active-shooter' : ''}" data-setup-players="${n}" style="font-size: 1.1rem; padding: 0.5rem 1rem; cursor: pointer;">
                  ${n} ${isEn ? 'players' : (n === 3 || n === 4 ? 'hráči' : 'hráčů')}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Expansion Toggles -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
              <label style="font-weight: 800; font-size: 0.95rem; color: var(--color-brown);">
                ${isEn ? 'Active Expansions in Play:' : 'Aktivní rozšíření pro dnešní hru:'}
              </label>
              <div style="display: flex; gap: 0.4rem;">
                <button type="button" id="btn-setup-all-exps" class="tool-subnav-btn" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; cursor: pointer;">
                  ${isEn ? 'All Expansions' : 'Všechna rozšíření'}
                </button>
                <button type="button" id="btn-setup-base-only" class="tool-subnav-btn" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; cursor: pointer;">
                  ${isEn ? 'Base Only' : 'Pouze základ'}
                </button>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem;">
              ${ALL_EXPS.map(exp => `
                <label class="calc-checkbox-label" style="background: var(--bg-card); padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.88rem; cursor: pointer;">
                  <input type="checkbox" data-setup-exp="${exp.id}" ${setupState.expansions.includes(exp.id) ? 'checked' : ''} ${exp.id === 'base' ? 'disabled checked' : ''}>
                  <span>${isEn ? exp.nameEn : exp.nameCs}</span>
                </label>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div style="background: var(--bg-surface); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div>
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--color-brown);">
              ${isAllChecked ? (isEn ? 'Table is Ready to Play!' : 'Stůl je kompletně připraven ke hře!') : (isEn ? 'Preparation Checklist' : 'Kontrolní seznam přípravy')}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-muted);">
              ${isEn ? `${checkedCount} of ${totalItems} steps completed` : `${checkedCount} z ${totalItems} kroků dokončeno`}
            </div>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            <button type="button" id="btn-setup-reset-checks" class="tool-subnav-btn" style="padding: 0.45rem 0.85rem; font-size: 0.85rem; cursor: pointer;">
              ${isEn ? 'Reset Checklist' : 'Resetovat zaškrtnutí'}
            </button>
            <button type="button" id="btn-setup-goto-draft" class="tool-subnav-btn active" style="padding: 0.45rem 1.1rem; font-size: 0.95rem; font-weight: 700; cursor: pointer;">
              ${isEn ? 'Go to Role & Char Draft ➔' : 'Přejít na losování rolí a postav ➔'}
            </button>
          </div>
        </div>

        <!-- Checklist Items -->
        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          ${checklist.map(item => {
            const isChecked = !!setupState.checkedItems[item.id];
            return `
              <div style="background: ${isChecked ? 'rgba(39, 174, 96, 0.08)' : 'var(--bg-surface)'}; border: 1.5px solid ${isChecked ? '#27ae60' : 'var(--border-color)'}; border-radius: var(--radius-md); padding: 1.15rem; display: flex; align-items: flex-start; gap: 1rem; transition: all 0.2s ease;">
                <input type="checkbox" data-check-id="${item.id}" ${isChecked ? 'checked' : ''} style="width: 22px; height: 22px; margin-top: 0.15rem; cursor: pointer; accent-color: #27ae60;">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
                    <div style="font-weight: 900; font-size: 1.05rem; color: ${isChecked ? '#27ae60' : 'var(--color-brown)'}; text-decoration: ${isChecked ? 'line-through' : 'none'};">
                      ${item.title}
                    </div>
                    <span style="font-size: 0.78rem; font-weight: 700; background: var(--bg-card); color: var(--text-muted); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color);">
                      ${item.category}
                    </span>
                  </div>
                  <div style="font-size: 0.92rem; line-height: 1.5; color: var(--text-color); margin-bottom: ${item.roles ? '0.75rem' : '0'};">
                    ${item.desc}
                  </div>
                  ${item.roles ? `
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.5rem; margin-top: 0.5rem;">
                      ${item.roles.map(r => `
                        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.55rem 0.75rem; font-size: 0.88rem;">
                          <div style="font-weight: 800; color: ${r.role === 'sheriff' ? '#f39c12' : (r.role === 'deputy' ? '#2980b9' : (r.role === 'renegade' ? '#8e44ad' : '#c0392b'))};">
                            ${r.nameCs}
                          </div>
                          <div style="font-size: 0.8rem; color: var(--text-muted);">${r.goalCs}</div>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Event listeners for Setup Assistant
    container.querySelectorAll('[data-setup-players]').forEach(btn => {
      btn.addEventListener('click', () => {
        setupState.players = parseInt(btn.dataset.setupPlayers, 10);
        renderSetupAssistant(container);
      });
    });

    container.querySelectorAll('[data-setup-exp]').forEach(chk => {
      chk.addEventListener('change', () => {
        const id = chk.dataset.setupExp;
        if (chk.checked) {
          if (!setupState.expansions.includes(id)) setupState.expansions.push(id);
        } else {
          setupState.expansions = setupState.expansions.filter(x => x !== id);
        }
        renderSetupAssistant(container);
      });
    });

    const allBtn = document.getElementById('btn-setup-all-exps');
    if (allBtn) {
      allBtn.addEventListener('click', () => {
        setupState.expansions = ALL_EXPS.map(x => x.id);
        renderSetupAssistant(container);
      });
    }

    const baseBtn = document.getElementById('btn-setup-base-only');
    if (baseBtn) {
      baseBtn.addEventListener('click', () => {
        setupState.expansions = ['base'];
        renderSetupAssistant(container);
      });
    }

    container.querySelectorAll('[data-check-id]').forEach(chk => {
      chk.addEventListener('change', () => {
        setupState.checkedItems[chk.dataset.checkId] = chk.checked;
        renderSetupAssistant(container);
      });
    });

    const resetChecksBtn = document.getElementById('btn-setup-reset-checks');
    if (resetChecksBtn) {
      resetChecksBtn.addEventListener('click', () => {
        setupState.checkedItems = {};
        renderSetupAssistant(container);
      });
    }

    const gotoDraftBtn = document.getElementById('btn-setup-goto-draft');
    if (gotoDraftBtn) {
      gotoDraftBtn.addEventListener('click', () => {
        state.activeTool = 'draft';
        draftState.playerCount = setupState.players;
        draftState.step = 'setup';
        draftState.revealed = false;
        draftState.players = [];
        draftState.currentIdx = 0;
        renderTools();
      });
    }
  }

  function renderTools() {
    if (!els.toolsContentArea) return;

    if (els.toolsSubnav) {
      els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(btn => {
        const isActive = btn.dataset.tool === state.activeTool;
        btn.classList.toggle('active', isActive);
        if (isActive && state.activeTab === 'nastroje') {
          try {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } catch (err) {}
        }
      });
    }

    if (state.activeTool === 'setup') {
      renderSetupAssistant(els.toolsContentArea);
    } else if (state.activeTool === 'calc') {
      renderDistanceCalc(els.toolsContentArea);
    } else if (state.activeTool === 'draw') {
      renderDrawSimulator(els.toolsContentArea);
    } else if (state.activeTool === 'timer') {
      renderTurnTimer(els.toolsContentArea);
    } else if (state.activeTool === 'train') {
      renderTrainBoard(els.toolsContentArea);
    } else if (state.activeTool === 'legends') {
      renderLegendsTracker(els.toolsContentArea);
    } else if (state.activeTool === 'saloon') {
      renderGoldRushArmory(els.toolsContentArea);
    } else if (state.activeTool === 'scenarios') {
      renderScenariosGenerator(els.toolsContentArea);
    } else if (state.activeTool === 'events') {
      renderEventDeck(els.toolsContentArea);
    } else if (state.activeTool === 'draft') {
      renderRoleDraft(els.toolsContentArea);
    } else if (state.activeTool === 'tracker') {
      renderPlayerBoard(els.toolsContentArea);
    } else if (state.activeTool === 'matches') {
      renderMatchTracker(els.toolsContentArea);
    } else if (state.activeTool === 'quiz') {
      renderRulesQuiz(els.toolsContentArea);
    } else if (state.activeTool === 'soundboard') {
      renderSoundboard(els.toolsContentArea);
    }
  }

  // 1. DISTANCE CALCULATOR WITH SALOON POKER TABLE
  function renderDistanceCalc(container) {
    const isEn = state.lang === 'en';
    const weapons = window.BANG_TOOLS ? window.BANG_TOOLS.DistanceCalc.weapons : [];
    const selectedWeapon = weapons.find(w => w.id === calcParams.weaponId) || weapons[0] || { range: 1, nameCs: 'Colt .45', nameEn: 'Colt .45' };

    const calcResult = window.BANG_TOOLS.DistanceCalc.calculate({
      shooterIdx: calcParams.shooterIdx,
      targetIdx: calcParams.targetIdx,
      totalPlayers: calcParams.totalPlayers,
      shooterWeaponRange: selectedWeapon.range,
      shooterAppaloosa: calcParams.appaloosa,
      shooterBinoculars: calcParams.binoculars,
      shooterRoseDoolan: calcParams.roseDoolan,
      targetMustang: calcParams.mustang,
      targetHideout: calcParams.hideout,
      targetPaulRegret: calcParams.paulRegret,
      globalZvonice: calcParams.zvonice
    });

    const dir = calcResult.directionDetails || { clockwise: 1, counterClockwise: 1, shortest: 1, direction: 'cw' };

    // Table Geometry for SVG
    const cx = 350;
    const cy = 230;
    const rxSeat = 265;
    const rySeat = 168;

    const seatCoords = [];
    let seatsSvg = '';
    let inRangeCount = 0;
    const inRangeNames = [];
    const outRangeNames = [];

    for (let i = 0; i < calcParams.totalPlayers; i++) {
      const theta = (2 * Math.PI * i / calcParams.totalPlayers) - (Math.PI / 2);
      const sx = Math.round(cx + rxSeat * Math.cos(theta));
      const sy = Math.round(cy + rySeat * Math.sin(theta));
      seatCoords.push({ x: sx, y: sy });

      const isShooter = i === calcParams.shooterIdx;
      const isTarget = i === calcParams.targetIdx;

      const seatCalc = window.BANG_TOOLS.DistanceCalc.calculate({
        shooterIdx: calcParams.shooterIdx,
        targetIdx: i,
        totalPlayers: calcParams.totalPlayers,
        shooterWeaponRange: selectedWeapon.range,
        shooterAppaloosa: calcParams.appaloosa,
        shooterBinoculars: calcParams.binoculars,
        shooterRoseDoolan: calcParams.roseDoolan,
        targetMustang: (i === calcParams.targetIdx) ? calcParams.mustang : false,
        targetHideout: (i === calcParams.targetIdx) ? calcParams.hideout : false,
        targetPaulRegret: (i === calcParams.targetIdx) ? calcParams.paulRegret : false,
        globalZvonice: calcParams.zvonice
      });

      const inRange = seatCalc.canBang;
      const canPanic = seatCalc.canPanic;
      const pLabel = `${isEn ? 'P' : 'H'}${i + 1}`;

      if (!isShooter) {
        if (inRange) {
          inRangeCount++;
          inRangeNames.push(pLabel);
        } else {
          outRangeNames.push(pLabel);
        }
      }

      let strokeColor = '#5c3a21';
      let strokeWidth = '2';
      let fillColor = '#3a2012';
      let icon = '👤';
      let roleTitle = `${isEn ? 'Player' : 'Hráč'} ${i + 1}`;
      let titleColor = '#e8d3b9';

      if (isShooter) {
        strokeColor = '#f39c12';
        strokeWidth = '4.5';
        fillColor = '#c0392b';
        icon = '🤠';
        roleTitle = isEn ? 'SHOOTER' : 'STŘELEC';
        titleColor = '#ffeb3b';
      } else if (isTarget) {
        strokeColor = inRange ? '#2ecc71' : '#e74c3c';
        strokeWidth = '5';
        fillColor = inRange ? '#145a32' : '#641e16';
        icon = inRange ? '🎯' : '🚫';
        roleTitle = isEn ? (inRange ? 'TARGET' : 'TARGET (OUT)') : (inRange ? 'CÍL' : 'CÍL (MIMO)');
        titleColor = inRange ? '#a9dfbf' : '#f5b7b1';
      } else {
        if (inRange) {
          strokeColor = '#27ae60';
          strokeWidth = '3';
          fillColor = '#194d33';
          icon = '🟢';
          roleTitle = `${isEn ? 'P' : 'H'}${i + 1} (${isEn ? 'Reach' : 'Dosah'})`;
          titleColor = '#2ecc71';
        } else {
          strokeColor = '#7f1d1d';
          strokeWidth = '1.8';
          fillColor = '#2c1212';
          icon = '🔴';
          roleTitle = `${isEn ? 'P' : 'H'}${i + 1}`;
          titleColor = '#e74c3c';
        }
      }

      // Distance indicator badge for non-shooters
      let distBadge = '';
      if (!isShooter) {
        distBadge = `
          <g transform="translate(0, 36)">
            <rect x="-38" y="-10" width="76" height="20" rx="10" fill="${inRange ? '#1e7e34' : '#78281f'}" stroke="${isTarget ? '#ffffff' : (inRange ? '#2ecc71' : '#e74c3c')}" stroke-width="${isTarget ? '2.5' : '1.2'}" />
            <text x="0" y="4" text-anchor="middle" font-size="10.5" font-weight="900" fill="#ffffff">${inRange ? '🟢' : '🔴'} ${isEn ? 'Dist' : 'Vzd'}: ${seatCalc.actualDistance}</text>
          </g>
        `;
        if (canPanic) {
          distBadge += `
            <g transform="translate(0, 58)">
              <rect x="-32" y="-7" width="64" height="15" rx="7" fill="#1b4f72" stroke="#5dade2" stroke-width="1" />
              <text x="0" y="4" text-anchor="middle" font-size="9" font-weight="900" fill="#d4e6f1">🔵 Panika! (1)</text>
            </g>
          `;
        }
      }

      // Equipment chips above seat
      let equipBadge = '';
      if (isShooter) {
        const wShort = (isEn ? selectedWeapon.nameEn : selectedWeapon.nameCs).split(' ')[0];
        equipBadge = `
          <g transform="translate(0, -36)">
            <rect x="-44" y="-10" width="88" height="20" rx="10" fill="#c0392b" stroke="#ffeb3b" stroke-width="1.5" />
            <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">${wShort} (${selectedWeapon.range})</text>
          </g>
        `;
      } else if (isTarget && (calcParams.mustang || calcParams.hideout || calcParams.paulRegret)) {
        const mods = [];
        if (calcParams.mustang) mods.push('+1 (Mustang)');
        if (calcParams.hideout) mods.push('+1 (Skrýš)');
        if (calcParams.paulRegret) mods.push('+1 (Paul)');
        equipBadge = `
          <g transform="translate(0, -36)">
            <rect x="-38" y="-10" width="76" height="20" rx="10" fill="#27ae60" stroke="#ffffff" stroke-width="1.5" />
            <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">${mods.join(' ')}</text>
          </g>
        `;
      }

      const susp = (calcParams.suspicions && calcParams.suspicions[i]) || (i === 0 ? 'sheriff' : 'unknown');
      const suspIcon = susp === 'deputy' ? '⭐️' : susp === 'outlaw' ? '💀' : susp === 'renegade' ? '🤠' : susp === 'dead' ? '☠️' : '';
      if (!isShooter && !isTarget) {
        if (susp === 'deputy') strokeColor = '#2ecc71';
        else if (susp === 'outlaw') strokeColor = '#e74c3c';
        else if (susp === 'renegade') strokeColor = '#9b59b6';
        else if (susp === 'dead') strokeColor = '#7f8c8d';
      }

      seatsSvg += `
        <g class="table-seat-node ${isShooter ? 'is-shooter' : ''} ${isTarget ? 'is-target' : ''}" data-seat="${i}" transform="translate(${sx}, ${sy})" role="button" tabindex="0" aria-label="${roleTitle} ${i + 1}">
          <circle r="38" fill="transparent" class="seat-hit-area" />
          <circle r="32" class="seat-rim" fill="#221107" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
          <circle r="26" class="seat-cushion seat-felt" fill="${fillColor}" />
          ${suspIcon ? `<text x="18" y="-18" text-anchor="middle" font-size="14">${suspIcon}</text>` : ''}
          <text x="0" y="-2" text-anchor="middle" font-size="20">${icon}</text>
          <text x="0" y="15" text-anchor="middle" font-size="10" font-weight="900" fill="${titleColor}">${roleTitle}</text>
          ${distBadge}
          ${equipBadge}
        </g>
      `;
    }

    const shooterPos = seatCoords[calcParams.shooterIdx] || { x: cx, y: cy - rySeat };
    const targetPos = seatCoords[calcParams.targetIdx] || { x: cx, y: cy + rySeat };
    const sightlineClass = calcResult.canBang ? 'sightline-in-range' : 'sightline-out-range';

    // Decorative forged iron & brass rivets around table rim
    let studsSvg = '';
    const numStuds = 32;
    for (let s = 0; s < numStuds; s++) {
      const a = (2 * Math.PI * s / numStuds);
      const stX = Math.round(cx + 217 * Math.cos(a));
      const stY = Math.round(cy + 138 * Math.sin(a));
      studsSvg += `<circle cx="${stX}" cy="${stY}" r="3" fill="#1e1109" stroke="#422919" stroke-width="0.8" /><circle cx="${stX - 0.7}" cy="${stY - 0.7}" r="1" fill="#8c6245" opacity="0.75" />`;
    }

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><img src="assets/symbols/symbol_reachable_distance.png" class="tool-btn-symbol" alt=""> ${isEn ? 'Saloon Distance & Range Radar' : 'Kalkulačka vzdálenosti a bojový radar'}</h2>
          <p class="tool-card-lead">${isEn ? 'Authentic rustic saloon table view with active target radar. Green seats are currently in weapon reach!' : 'Bojový radar saloonového stolu: zeleně označené židle jsou okamžitě v dostřelu zbraně!'}</p>
        </div>

        <div class="saloon-table-container">
          <div class="table-controls-bar">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <span style="font-weight: 800; font-size: 0.92rem; color: var(--color-brown);">
                ${isEn ? 'Players at table:' : 'Hráčů u stolu:'}
              </span>
              <div style="display: flex; gap: 0.35rem;">
                ${[3, 4, 5, 6, 7, 8].map(n => `
                  <button type="button" class="seat-btn ${n === calcParams.totalPlayers ? 'active-shooter' : ''}" data-total="${n}">${n}</button>
                `).join('')}
              </div>
            </div>

            <div class="table-mode-toggle">
              <button type="button" class="table-mode-btn ${calcParams.mode === 'shooter' ? 'active mode-shooter' : ''}" id="btn-mode-shooter">
                ${isEn ? 'Pick Shooter' : 'Zvolit Střelce'}
              </button>
              <button type="button" class="table-mode-btn ${calcParams.mode === 'target' ? 'active mode-target' : ''}" id="btn-mode-target">
                ${isEn ? 'Pick Target' : 'Zvolit Cíl'}
              </button>
            </div>
          </div>

          <div class="saloon-table-svg-wrap">
            <svg class="saloon-table-svg" viewBox="0 0 700 460">
              <defs>
                <!-- Heavy Table Outer Timber Bevel Rim -->
                <radialGradient id="tableWoodRimGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#4f2b15" />
                  <stop offset="75%" stop-color="#341b0c" />
                  <stop offset="92%" stop-color="#221006" />
                  <stop offset="100%" stop-color="#120702" />
                </radialGradient>

                <!-- Inset Edge Shadow for Wooden Tabletop Depth -->
                <radialGradient id="tableEdgeShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="84%" stop-color="rgba(15, 6, 2, 0)" />
                  <stop offset="100%" stop-color="rgba(15, 6, 2, 0.75)" />
                </radialGradient>

                <!-- Clip Path for Table Planks -->
                <clipPath id="saloonTableClip">
                  <ellipse cx="350" cy="230" rx="202" ry="124" />
                </clipPath>
              </defs>

              <!-- Table Cast Shadow -->
              <ellipse cx="350" cy="238" rx="230" ry="150" fill="rgba(0,0,0,0.38)" />

              <!-- Outer Heavy Timber Rim -->
              <ellipse cx="350" cy="230" rx="226" ry="146" fill="url(#tableWoodRimGrad)" stroke="#110602" stroke-width="4.5" />

              <!-- Inset Wood Groove Line on Rim -->
              <ellipse cx="350" cy="230" rx="207" ry="129" fill="none" stroke="#1d0d05" stroke-width="1.8" />

              <!-- Forged Iron Studs on Rim -->
              ${studsSvg}

              <!-- Inner Wood Planks Surface -->
              <g clip-path="url(#saloonTableClip)">
                <!-- Base Plank Fills (6 weathered saloon oak planks) -->
                <rect x="100" y="100" width="500" height="42" fill="#543017" />
                <rect x="100" y="142" width="500" height="42" fill="#623a1c" />
                <rect x="100" y="184" width="500" height="44" fill="#4d2b13" />
                <rect x="100" y="228" width="500" height="44" fill="#5a3419" />
                <rect x="100" y="272" width="500" height="42" fill="#47260f" />
                <rect x="100" y="314" width="500" height="48" fill="#583318" />

                <!-- Wood Grain Texture Lines -->
                <path d="M 140 120 Q 250 115 360 122 T 560 118" stroke="rgba(255,240,210,0.08)" stroke-width="1.6" fill="none" />
                <path d="M 130 134 Q 280 130 430 136 T 570 132" stroke="rgba(0,0,0,0.22)" stroke-width="1.8" fill="none" />
                <path d="M 130 162 Q 280 168 430 160 T 570 166" stroke="rgba(255,240,210,0.07)" stroke-width="1.5" fill="none" />
                <path d="M 125 176 Q 240 172 370 178 T 575 174" stroke="rgba(0,0,0,0.2)" stroke-width="1.8" fill="none" />
                <path d="M 125 204 Q 240 199 370 207 T 575 202" stroke="rgba(255,240,210,0.09)" stroke-width="1.5" fill="none" />
                <path d="M 130 219 Q 270 223 420 216 T 570 220" stroke="rgba(0,0,0,0.22)" stroke-width="2" fill="none" />
                <path d="M 130 250 Q 270 256 420 248 T 570 253" stroke="rgba(255,240,210,0.08)" stroke-width="1.5" fill="none" />
                <path d="M 135 264 Q 260 260 380 267 T 565 262" stroke="rgba(0,0,0,0.24)" stroke-width="1.8" fill="none" />
                <path d="M 140 292 Q 260 287 380 295 T 560 290" stroke="rgba(255,240,210,0.07)" stroke-width="1.5" fill="none" />
                <path d="M 150 306 Q 290 311 440 304 T 550 308" stroke="rgba(0,0,0,0.2)" stroke-width="1.8" fill="none" />
                <path d="M 160 334 Q 280 341 430 333 T 540 338" stroke="rgba(255,240,210,0.08)" stroke-width="1.6" fill="none" />

                <!-- Plank Seams & Grooves -->
                <line x1="120" y1="142" x2="580" y2="142" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="143.5" x2="580" y2="143.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="184" x2="580" y2="184" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="185.5" x2="580" y2="185.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="228" x2="580" y2="228" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="229.5" x2="580" y2="229.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="272" x2="580" y2="272" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="273.5" x2="580" y2="273.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="314" x2="580" y2="314" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="315.5" x2="580" y2="315.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <!-- Forged Iron Plank Nails -->
                <rect x="210" y="140" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="140" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="210" y="226" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="226" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="210" y="312" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="312" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />

                <!-- Natural Wood Knots -->
                <g opacity="0.9">
                  <ellipse cx="230" cy="163" rx="13" ry="7" fill="#2d1508" stroke="#1c0c04" stroke-width="1.2" />
                  <ellipse cx="230" cy="163" rx="6" ry="3.5" fill="#160802" />
                  <path d="M 212 163 Q 230 152 248 163" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                  <path d="M 212 163 Q 230 174 248 163" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                </g>
                <g opacity="0.9">
                  <ellipse cx="480" cy="250" rx="14" ry="7.5" fill="#2b1407" stroke="#1c0b03" stroke-width="1.2" />
                  <ellipse cx="480" cy="250" rx="7" ry="3.5" fill="#150702" />
                  <path d="M 460 250 Q 480 238 500 250" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                  <path d="M 460 250 Q 480 262 500 250" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                </g>

                <!-- Saloon Condensation Watermarks (Beer & Whiskey Rings) -->
                <ellipse cx="275" cy="168" rx="22" ry="16" fill="none" stroke="rgba(25, 9, 3, 0.45)" stroke-width="2.8" stroke-dasharray="14 4 8 2" transform="rotate(-15 275 168)" />
                <ellipse cx="275" cy="168" rx="19.5" ry="14" fill="none" stroke="rgba(25, 9, 3, 0.22)" stroke-width="1.2" transform="rotate(-15 275 168)" />

                <ellipse cx="435" cy="295" rx="24" ry="16" fill="none" stroke="rgba(25, 9, 3, 0.4)" stroke-width="2.5" stroke-dasharray="12 4 9 3" transform="rotate(20 435 295)" />

                <!-- Knife Scratches / Duel Graze Marks -->
                <path d="M 185 244 L 218 239" stroke="rgba(15, 6, 2, 0.6)" stroke-width="1.8" />
                <path d="M 495 195 L 518 202" stroke="rgba(15, 6, 2, 0.55)" stroke-width="1.5" />

                <!-- Branded Saloon Mark Burned into Wood -->
                <g opacity="0.45">
                  <text x="350" y="132" text-anchor="middle" font-size="14" fill="#230d04">★</text>
                  <text x="350" y="148" text-anchor="middle" font-family="var(--font-western)" font-size="12" font-weight="900" fill="#230d04" letter-spacing="3.5">★ BANG! WESTERN SALOON ★</text>
                </g>

                <!-- Inset Table Edge Shadow -->
                <ellipse cx="350" cy="230" rx="202" ry="124" fill="url(#tableEdgeShadow)" />
              </g>

              <!-- Sightline / Line of Fire -->
              <line x1="${shooterPos.x}" y1="${shooterPos.y}" x2="${targetPos.x}" y2="${targetPos.y}" class="${sightlineClass}" />

              <!-- Bullet on Sightline -->
              <circle id="svg-bullet" cx="${shooterPos.x}" cy="${shooterPos.y}" r="6" fill="#ffd700" stroke="#d35400" stroke-width="2" style="opacity: 0; pointer-events: none;" />

              <!-- Center Distance Readout Plaque (Rustic Forged Iron & Brass) -->
              <g transform="translate(350, 230)">
                <!-- Outer Iron Plaque Plate -->
                <rect x="-155" y="-45" width="310" height="90" rx="10" fill="#1a0e07" stroke="#936d2a" stroke-width="2.5" />
                <!-- Inner Dark Walnut Inlay -->
                <rect x="-150" y="-40" width="300" height="80" rx="7" fill="#261309" stroke="#482914" stroke-width="1.2" />
                <!-- Corner Brass Screws -->
                <circle cx="-142" cy="-32" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="142" cy="-32" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="-142" cy="32" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="142" cy="32" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />

                <text x="0" y="-16" text-anchor="middle" font-family="var(--font-western)" font-size="14" font-weight="bold" fill="#ffeb3b" letter-spacing="0.5">
                  ${isEn ? 'TARGET' : 'CÍL'}: ${isEn ? 'PLAYER' : 'HRÁČ'} ${calcParams.targetIdx + 1} (${isEn ? 'DIST' : 'VZDÁL'}: ${calcResult.actualDistance})
                </text>
                <text x="0" y="4" text-anchor="middle" font-size="11.5" font-weight="900" fill="${calcResult.canBang ? '#2ecc71' : '#e74c3c'}">
                  ${calcResult.canBang ? (isEn ? 'IN WEAPON RANGE (CAN BANG!)' : 'V DOSTŘELU ZBRANĚ (LZE BANG!)') : (isEn ? 'OUT OF RANGE (CANNOT HIT)' : 'MIMO DOSTŘEL ZBRANĚ (NELZE ZASÁHNOUT)')}
                </text>
                <text x="0" y="24" text-anchor="middle" font-size="10" font-weight="bold" fill="#f5deb3">
                  ${isEn ? 'In range' : 'Na mušce'} (${inRangeCount}/${calcParams.totalPlayers - 1}): ${inRangeNames.join(', ') || (isEn ? 'none' : 'nikdo')} | ${isEn ? 'Out' : 'Mimo'}: ${outRangeNames.join(', ') || (isEn ? 'none' : 'nikdo')}
                </text>
              </g>

              <!-- Player Chairs / Saloon Stools -->
              ${seatsSvg}
            </svg>
          </div>

          <div class="table-instruction-hint">
            ${isEn ? 'Tap any seat to select who is shooting and who is being targeted. The table calculates the shortest direction (clockwise vs counter-clockwise) automatically.' : 'Klepněte na libovolnou židli pro výběr střelce či cíle. Stůl automaticky počítá nejkratší vzdálenost (po směru i proti směru hodinových ručiček).'}
          </div>
        </div>

        <div class="calc-grid">
          <div class="calc-panel">
            <h3>${isEn ? 'Shooter Equipment & Abilities' : 'Výbava střelce & Schopnosti'}</h3>
            <div style="margin-bottom: 1rem;">
              <label for="calc-weapon" style="display: block; font-weight: 700; font-size: 0.88rem; margin-bottom: 0.35rem;">${isEn ? 'Equipped Weapon:' : 'Vyložená zbraň:'}</label>
              <select id="calc-weapon" class="filter-select" style="width: 100%;">
                ${weapons.map(w => `<option value="${w.id}" ${w.id === calcParams.weaponId ? 'selected' : ''}>${isEn ? w.nameEn : w.nameCs}</option>`).join('')}
              </select>
            </div>
            <div class="calc-mods-list">
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-appaloosa" ${calcParams.appaloosa ? 'checked' : ''}>
                <span><img src="assets/symbols/symbol_scope.png" class="tag-symbol-img" alt="">${isEn ? 'Appaloosa / Scope (-1 distance)' : 'Hledí / Appaloosa (-1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-binoculars" ${calcParams.binoculars ? 'checked' : ''}>
                <span>${isEn ? 'Binoculars (-1 distance)' : 'Dalekohled (-1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-rosedoolan" ${calcParams.roseDoolan ? 'checked' : ''}>
                <span>${isEn ? 'Rose Doolan character (-1 distance)' : 'Postava Rose Doolan (-1 ke vzdálenosti)'}</span>
              </label>
            </div>
          </div>

          <div class="calc-panel">
            <h3>${isEn ? 'Target Defenses & Abilities' : 'Obrana cíle & Schopnosti'}</h3>
            <div class="calc-mods-list" style="margin-top: 0.5rem;">
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-mustang" ${calcParams.mustang ? 'checked' : ''}>
                <span><img src="assets/symbols/symbol_mustang.png" class="tag-symbol-img" alt="">${isEn ? 'Mustang (+1 distance away)' : 'Mustang (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-hideout" ${calcParams.hideout ? 'checked' : ''}>
                <span>${isEn ? 'Hideout (+1 distance away)' : 'Skrýš (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-paulregret" ${calcParams.paulRegret ? 'checked' : ''}>
                <span>${isEn ? 'Paul Regret character (+1 distance away)' : 'Postava Paul Regret (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color);">
                <input type="checkbox" id="chk-zvonice" ${calcParams.zvonice ? 'checked' : ''}>
                <span>${isEn ? 'Event: Church Bell / Zvonice (all dist = 1)' : 'Událost: Zvonice (všichni na vzdálenost 1)'}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="calc-result-box">
          <div class="calc-stat-row">
            <div class="calc-stat-card">
              <div class="calc-stat-num">${calcResult.seatDistance}</div>
              <div class="calc-stat-lbl">${isEn ? 'Base Table Distance' : 'Míst v kruhu (základ)'}</div>
            </div>
            <div class="calc-stat-card">
              <div class="calc-stat-num" style="color: #2980b9;">${calcResult.actualDistance}</div>
              <div class="calc-stat-lbl">${isEn ? 'Effective Distance' : 'Skutečná vzdálenost'}</div>
            </div>
            <div class="calc-stat-card">
              <div class="calc-stat-num" style="color: #c0392b;">${calcResult.weaponRange}</div>
              <div class="calc-stat-lbl">${isEn ? 'Weapon Range' : 'Dostřel zbraně'}</div>
            </div>
          </div>

          <div class="calc-verdict-grid">
            <div class="calc-verdict-item ${calcResult.canBang ? 'verdict-success' : 'verdict-fail'}">
              <img src="assets/symbols/symbol_bang.png" class="tag-symbol-img" style="height: 22px;" alt="">
              <span>BANG! ${calcResult.canBang ? (isEn ? 'CAN HIT TARGET!' : 'DOSTŘELÍ NA CÍL!') : (isEn ? 'CANNOT HIT (Need ' + calcResult.actualDistance + ')' : 'NEDOSTŘELÍ (chybí ' + (calcResult.actualDistance - calcResult.weaponRange) + ')') }</span>
            </div>
            <div class="calc-verdict-item ${calcResult.canPanic ? 'verdict-success' : 'verdict-fail'}">
              <img src="assets/symbols/symbol_distance_x.png" class="tag-symbol-img" style="height: 22px;" alt="">
              <span>Panika! ${calcResult.canPanic ? (isEn ? 'CAN BE PLAYED (Dist = 1)' : 'LZE ZAHRÁT (vzdálenost 1)') : (isEn ? 'CANNOT PLAY (Dist > 1)' : 'NELZE ZAHRÁT (vzdálenost ' + calcResult.actualDistance + ')')}</span>
            </div>
            <div class="calc-verdict-item verdict-success">
              <img src="assets/symbols/symbol_any_one_player.png" class="tag-symbol-img" style="height: 22px;" alt="">
              <span>Duel / Cat Balou / Indiáni: ${isEn ? 'Always playable' : 'Vždy lze zahrát'}</span>
            </div>
          </div>

          <div style="margin-top: 1.25rem; font-size: 0.9rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <strong>${isEn ? 'Calculation:' : 'Výpočet:'}</strong> ${isEn ? 'Table seats' : 'Základ u stolu'} (${calcResult.seatDistance}) ${calcResult.targetMods ? `+ ${isEn ? 'Defense' : 'Obrana'} (+${calcResult.targetMods})` : ''} ${calcResult.shooterMods ? `- ${isEn ? 'Sight' : 'Hledí'} (-${calcResult.shooterMods})` : ''} = <strong>${calcResult.actualDistance}</strong>.
            </div>
            <button type="button" class="btn-reset-filters" id="btn-sound-shot" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 800; font-size: 0.95rem; padding: 0.65rem 1.2rem; background: var(--color-brown); color: #fff;">
              <img src="assets/symbols/symbol_bang.png" class="tag-symbol-img" alt=""> ${isEn ? 'Test Shot on Table' : 'Otestovat výstřel na stůl'}
            </button>
          </div>
        </div>

        <!-- SHERIFF SUSPICION & BLUFF TRACKER STRIP -->
        <div style="margin-top: 1.5rem; background: var(--bg-surface); border: 1.5px solid var(--border-color); border-radius: 10px; padding: 1.25rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 0.85rem;">
            <div>
              <div style="font-weight: bold; font-size: 0.98rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.4rem;">
                🎭 ${isEn ? 'Sheriff Bluff & Deduction Tracker:' : 'Zápisník podezření pro Šerifa (Kdo je kdo u stolu):'}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">
                ${isEn ? 'Click player chips below to cycle role suspicions (Deputy, Outlaw, Renegade, Dead, Unknown):' : 'Klepněte na hráče níže pro přepínání podezření o jeho skryté roli (zobrazí se i u stolu):'}
              </div>
            </div>
            <button type="button" id="btn-clear-suspicions" style="background: none; border: none; font-size: 0.78rem; color: var(--text-muted); cursor: pointer; text-decoration: underline;">
              ${isEn ? 'Reset suspicions' : 'Resetovat podezření'}
            </button>
          </div>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${Array.from({ length: calcParams.totalPlayers }, (_, i) => {
              const susp = (calcParams.suspicions && calcParams.suspicions[i]) || (i === 0 ? 'sheriff' : 'unknown');
              const badges = {
                sheriff: { icon: '⭐️', labelCs: 'Šerif', labelEn: 'Sheriff', color: '#f1c40f', bg: 'rgba(241, 196, 15, 0.15)' },
                deputy: { icon: '⭐️', labelCs: 'Pomocník', labelEn: 'Deputy', color: '#2ecc71', bg: 'rgba(46, 204, 113, 0.15)' },
                outlaw: { icon: '💀', labelCs: 'Bandita', labelEn: 'Outlaw', color: '#e74c3c', bg: 'rgba(231, 76, 60, 0.15)' },
                renegade: { icon: '🤠', labelCs: 'Odpadlík', labelEn: 'Renegade', color: '#9b59b6', bg: 'rgba(155, 89, 182, 0.15)' },
                dead: { icon: '☠️', labelCs: 'Mrtvý', labelEn: 'Dead', color: '#7f8c8d', bg: 'rgba(127, 140, 141, 0.15)' },
                unknown: { icon: '❓', labelCs: 'Neznámý', labelEn: 'Unknown', color: '#95a5a6', bg: 'var(--bg-card)' }
              };
              const b = badges[susp] || badges.unknown;
              return `
                <button type="button" class="btn-seat-suspicion" data-seat="${i}"
                        style="padding: 0.45rem 0.8rem; border-radius: 8px; border: 1.5px solid ${b.color}; background: ${b.bg}; color: inherit; cursor: ${i === 0 ? 'default' : 'pointer'}; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 0.4rem; transition: all 0.2s;">
                  <span>${i === 0 ? '👑' : `#${i + 1}`}</span>
                  <span>${b.icon} ${isEn ? b.labelEn : b.labelCs}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Handle Total Players change
    container.querySelectorAll('[data-total]').forEach(btn => {
      btn.addEventListener('click', () => {
        calcParams.totalPlayers = parseInt(btn.dataset.total, 10);
        if (calcParams.shooterIdx >= calcParams.totalPlayers) calcParams.shooterIdx = 0;
        if (calcParams.targetIdx >= calcParams.totalPlayers) calcParams.targetIdx = 1;
        renderDistanceCalc(container);
      });
    });

    // Handle Mode Toggles
    const modeShooterBtn = document.getElementById('btn-mode-shooter');
    if (modeShooterBtn) {
      modeShooterBtn.addEventListener('click', () => {
        calcParams.mode = 'shooter';
        renderDistanceCalc(container);
      });
    }

    const modeTargetBtn = document.getElementById('btn-mode-target');
    if (modeTargetBtn) {
      modeTargetBtn.addEventListener('click', () => {
        calcParams.mode = 'target';
        renderDistanceCalc(container);
      });
    }

    // Handle Seat Click / Keyboard
    container.querySelectorAll('.table-seat-node[data-seat]').forEach(seatNode => {
      const handleSelect = () => {
        const seat = parseInt(seatNode.dataset.seat, 10);
        if (calcParams.mode === 'shooter') {
          if (seat !== calcParams.targetIdx) {
            calcParams.shooterIdx = seat;
            calcParams.mode = 'target'; // Auto advance to target pick
          } else {
            // Swap if clicked target
            calcParams.targetIdx = calcParams.shooterIdx;
            calcParams.shooterIdx = seat;
          }
        } else {
          if (seat !== calcParams.shooterIdx) {
            calcParams.targetIdx = seat;
          } else {
            // Swap if clicked shooter
            calcParams.shooterIdx = calcParams.targetIdx;
            calcParams.targetIdx = seat;
          }
        }
        renderDistanceCalc(container);
      };

      seatNode.addEventListener('click', handleSelect);
      seatNode.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });
    });

    // Handle Weapon Change
    const wSelect = document.getElementById('calc-weapon');
    if (wSelect) {
      wSelect.addEventListener('change', (e) => {
        calcParams.weaponId = e.target.value;
        renderDistanceCalc(container);
      });
    }

    // Handle Checkboxes
    const bindChk = (id, key) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('change', (e) => {
          calcParams[key] = e.target.checked;
          renderDistanceCalc(container);
        });
      }
    };

    bindChk('chk-appaloosa', 'appaloosa');
    bindChk('chk-binoculars', 'binoculars');
    bindChk('chk-rosedoolan', 'roseDoolan');
    bindChk('chk-mustang', 'mustang');
    bindChk('chk-hideout', 'hideout');
    bindChk('chk-paulregret', 'paulRegret');
    bindChk('chk-zvonice', 'zvonice');

    // Handle Test Shot Button with Animation & Authentic Audio
    const shotBtn = document.getElementById('btn-sound-shot');
    if (shotBtn) {
      shotBtn.addEventListener('click', () => {
        const bullet = document.getElementById('svg-bullet');
        if (bullet) {
          bullet.setAttribute('cx', shooterPos.x);
          bullet.setAttribute('cy', shooterPos.y);
          bullet.style.opacity = '1';
          bullet.style.transition = 'all 0.35s cubic-bezier(0.2, 0.8, 0.4, 1)';
          setTimeout(() => {
            bullet.setAttribute('cx', targetPos.x);
            bullet.setAttribute('cy', targetPos.y);
          }, 20);
          setTimeout(() => {
            bullet.style.opacity = '0';
            bullet.style.transition = 'none';
            bullet.setAttribute('cx', shooterPos.x);
            bullet.setAttribute('cy', shooterPos.y);
          }, 400);
        }

        if (calcResult.canBang) {
          window.BANG_TOOLS.SoundFX.playShot();
        } else {
          window.BANG_TOOLS.SoundFX.playRicochet();
        }
      });
    }

    // Handle Suspicion Tracker Clicks
    container.querySelectorAll('.btn-seat-suspicion').forEach(btn => {
      btn.addEventListener('click', () => {
        const seat = parseInt(btn.dataset.seat, 10);
        if (seat === 0) return; // Sheriff seat is immutable
        const cycle = ['unknown', 'deputy', 'outlaw', 'renegade', 'dead'];
        const current = (calcParams.suspicions && calcParams.suspicions[seat]) || 'unknown';
        const nextIdx = (cycle.indexOf(current) + 1) % cycle.length;
        calcParams.suspicions[seat] = cycle[nextIdx];
        renderDistanceCalc(container);
      });
    });

    const btnClearSusp = document.getElementById('btn-clear-suspicions');
    if (btnClearSusp) {
      btnClearSusp.addEventListener('click', () => {
        calcParams.suspicions = {};
        renderDistanceCalc(container);
      });
    }
  }

  // =========================================================================
  // 3. DRAW ARBITRATOR & ODDS CALCULATOR ("ARBITR & ŠANCE SNÍMÁNÍ")
  // =========================================================================
  const drawSimulatorState = {
    preset: 'dynamite',
    luckyDuke: false,
    selectedSuit: '♠',
    selectedValue: '7',
    evaluatedCard: null,
    result: null,
    history: []
  };

  function renderDrawSimulator(container) {
    const isEn = state.lang === 'en';
    const sim = window.BANG_TOOLS ? window.BANG_TOOLS.DrawSimulator : null;
    const suits = (sim && sim.suits) ? sim.suits : [
      { symbol: '♥', nameCs: 'Srdce', nameEn: 'Hearts', color: 'red' },
      { symbol: '♦', nameCs: 'Káry', nameEn: 'Diamonds', color: 'red' },
      { symbol: '♠', nameCs: 'Piky', nameEn: 'Spades', color: 'black' },
      { symbol: '♣', nameCs: 'Kříže', nameEn: 'Clubs', color: 'black' }
    ];
    const values = (sim && sim.values) ? sim.values : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const presets = [
      { id: 'dynamite', symbol: 'assets/symbols/symbol_dynamite.png', nameCs: 'Dynamit', nameEn: 'Dynamite', targetCs: 'Piky ♠ 2–9 = BUM!', targetEn: 'Spades ♠ 2–9 = BOOM!' },
      { id: 'jail', symbol: 'assets/symbols/symbol_jail.png', nameCs: 'Vězení', nameEn: 'Jail', targetCs: 'Srdce ♥ = útěk', targetEn: 'Hearts ♥ = escape' },
      { id: 'barrel', symbol: 'assets/symbols/symbol_barrel.png', nameCs: 'Barel', nameEn: 'Barrel', targetCs: 'Srdce ♥ = Vedle!', targetEn: 'Hearts ♥ = Missed!' },
      { id: 'rattlesnake', nameCs: 'Chřestýš', nameEn: 'Rattlesnake', targetCs: 'Piky ♠ = -1 život', targetEn: 'Spades ♠ = -1 life' },
      { id: 'bomb', nameCs: 'Bomba', nameEn: 'Bomb', targetCs: 'Černá = -2 žetony', targetEn: 'Black = -2 charges' },
      { id: 'teren', nameCs: 'Teren Kill', nameEn: 'Teren Kill', targetCs: 'Nepiková = přežití', targetEn: 'Non-spades = survive' },
      { id: 'general', symbol: 'assets/symbols/symbol_draw_check.png', nameCs: 'Volné ověření', nameEn: 'Deck Check', targetCs: 'Jakákoliv karta', targetEn: 'Any card' }
    ];

    const currentPreset = presets.find(p => p.id === drawSimulatorState.preset) || presets[0];
    const odds = sim ? sim.getOdds(drawSimulatorState.preset, drawSimulatorState.luckyDuke) : {
      successPct: 50, failurePct: 50, successLabelCs: 'Úspěch', successLabelEn: 'Success',
      failureLabelCs: 'Neúspěch', failureLabelEn: 'Failure', ratioCs: '1 z 2', ratioEn: '1 in 2',
      tipCs: '', tipEn: ''
    };

    // Ensure initial card evaluation
    if (!drawSimulatorState.evaluatedCard && sim) {
      drawSimulatorState.evaluatedCard = sim.createCard(drawSimulatorState.selectedSuit, drawSimulatorState.selectedValue);
    }
    if (sim && drawSimulatorState.evaluatedCard) {
      drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, drawSimulatorState.evaluatedCard, isEn);
    }

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><img src="assets/symbols/symbol_draw_check.png" class="tool-btn-symbol" alt=""> ${isEn ? 'Draw Arbitrator & Odds Calculator' : 'Arbitr snímání & Kalkulátor šancí'}</h2>
          <p class="tool-card-lead">
            ${isEn
              ? 'Authoritative rulings for physical cards flipped at the table, dispute prevention, and mathematical survival odds.'
              : 'Nezpochybnitelný oficiální verdikt pro kartu otočenou ze stolu, řešení hádek u hry a přesné matematické šance na přežití.'}
          </p>
        </div>

        <!-- 1. SITUATION PRESETS -->
        <div style="margin-bottom: 1.5rem;">
          <div style="font-weight: bold; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--color-brown);">
            1. ${isEn ? 'Select Situation to Arbitrate:' : 'Vyber situaci k vyhodnocení:'}
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${presets.map(p => `
              <button type="button" class="btn-preset-chip ${p.id === drawSimulatorState.preset ? 'active' : ''}" 
                      data-preset="${p.id}"
                      style="padding: 0.55rem 0.9rem; border-radius: 20px; border: 1.5px solid ${p.id === drawSimulatorState.preset ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${p.id === drawSimulatorState.preset ? 'var(--color-gold)' : 'var(--bg-surface)'}; color: ${p.id === drawSimulatorState.preset ? '#fff' : 'inherit'}; cursor: pointer; font-weight: 500; font-size: 0.88rem; transition: all 0.2s ease;">
                ${p.symbol ? `<img src="${p.symbol}" class="preset-symbol-thumb" alt="">` : ''}${isEn ? p.nameEn : p.nameCs}
                <span style="opacity: 0.82; font-size: 0.78rem; display: block;">${isEn ? p.targetEn : p.targetCs}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 2. MATHEMATICAL ODDS & RISK MANAGEMENT PANEL -->
        <div style="background: var(--bg-surface); border: 1.5px solid var(--border-color); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 1rem;">
            <div>
              <div style="font-weight: bold; font-size: 1.05rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.4rem;">
                ${isEn ? 'Survival Odds & Risk Analysis' : 'Matematické šance & Analýza rizika'}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">
                ${isEn ? 'Exact probabilities in a standard 52-card deck' : 'Přesné pravděpodobnosti ve standardním balíčku 52 karet'}
              </div>
            </div>

            <!-- LUCKY DUKE TOGGLE -->
            <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; background: var(--bg-card); padding: 0.45rem 0.85rem; border-radius: 20px; border: 1.5px solid ${drawSimulatorState.luckyDuke ? 'var(--color-gold)' : 'var(--border-color)'}; transition: all 0.2s;">
              <input type="checkbox" id="chk-lucky-duke" ${drawSimulatorState.luckyDuke ? 'checked' : ''} style="cursor: pointer; width: 16px; height: 16px;">
              <span style="font-size: 0.88rem; font-weight: bold; color: ${drawSimulatorState.luckyDuke ? 'var(--color-gold)' : 'inherit'};">
                ${isEn ? 'Lucky Duke (Draw 2 cards)' : 'Lucky Duke (snímá 2 karty)'}
              </span>
            </label>
          </div>

          <!-- ODDS CARDS -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
            <div style="background: rgba(46, 204, 113, 0.12); border: 2px solid #2ecc71; border-radius: 10px; padding: 1rem; text-align: center;">
              <div style="font-size: 0.82rem; font-weight: bold; color: #27ae60; text-transform: uppercase;">
                ${isEn ? odds.successLabelEn : odds.successLabelCs}
              </div>
              <div style="font-size: 2.2rem; font-weight: bold; color: #27ae60; margin: 0.2rem 0; line-height: 1.1;">
                ${odds.successPct}%
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                ${isEn ? 'Probability of success / safety' : 'Šance na úspěch / bezpečí'}
              </div>
            </div>

            <div style="background: rgba(231, 76, 60, 0.12); border: 2px solid #e74c3c; border-radius: 10px; padding: 1rem; text-align: center;">
              <div style="font-size: 0.82rem; font-weight: bold; color: #c0392b; text-transform: uppercase;">
                ${isEn ? odds.failureLabelEn : odds.failureLabelCs}
              </div>
              <div style="font-size: 2.2rem; font-weight: bold; color: #c0392b; margin: 0.2rem 0; line-height: 1.1;">
                ${odds.failurePct}%
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                ${isEn ? 'Risk of penalty / explosion' : 'Riziko zranění / nehody'}
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem; font-size: 0.86rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
            <div><strong>${isEn ? 'Odds Ratio:' : 'Reálný poměr:'}</strong> ${isEn ? odds.ratioEn : odds.ratioCs}</div>
            <div style="color: var(--text-muted); font-style: italic;">${isEn ? odds.tipEn : odds.tipCs}</div>
          </div>
        </div>

        <!-- 3. TABLE CARD REFEREE: SELECT SUIT & VALUE -->
        <div style="background: var(--bg-surface); border: 1.5px solid var(--border-color); border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.8rem; margin-bottom: 1.2rem;">
            <div>
              <div style="font-weight: bold; font-size: 1.05rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.4rem;">
                <img src="assets/symbols/symbol_draw_check.png" class="rules-symbol-inline" alt=""> ${isEn ? 'Tabletop Referee: Enter Flipped Card' : 'Rozhodčí: Zadej kartu otočenou ze stolu'}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">
                ${isEn ? 'Select card suit & value. The live verdict updates immediately below. Click "Record This Draw" to log it.' : 'Zvolte barvu a hodnotu karty otočené z balíčku. Verdikt se zobrazuje živě níže. Tlačítkem jej zapíšete do protokolu.'}
              </div>
            </div>

            <button type="button" id="btn-random-draw" class="tool-subnav-btn active" style="padding: 0.5rem 1.1rem; font-size: 0.88rem; border-radius: 20px; font-weight: bold; cursor: pointer; display: inline-flex; align-items: center; gap: 0.4rem;">
              🎲 ${isEn ? 'Simulate Random Draw' : 'Simulovat náhodné otočení'}
            </button>
          </div>

          <!-- SUIT SELECTOR (4 SUITS) -->
          <div style="margin-bottom: 1.1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">
                ${isEn ? 'A) Card Suit:' : 'A) Barva karty:'}
              </span>
              <span style="font-size: 0.82rem; font-weight: bold; color: var(--color-brown);">
                ${isEn ? 'Selected:' : 'Vybráno:'} ${drawSimulatorState.selectedSuit}
              </span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem;">
              ${suits.map(s => {
                const isSelected = s.symbol === drawSimulatorState.selectedSuit;
                const isRed = s.color === 'red';
                const mainColor = isRed ? '#d32f2f' : '#222222';
                return `
                  <button type="button" class="btn-suit-select" data-suit="${s.symbol}"
                          style="padding: 0.65rem 0.5rem; border-radius: 8px; border: 2.5px solid ${isSelected ? mainColor : 'var(--border-color)'}; background: ${isSelected ? mainColor : 'var(--bg-card)'}; color: ${isSelected ? '#ffffff' : mainColor}; cursor: pointer; font-weight: bold; font-size: 1.05rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.15s; box-shadow: ${isSelected ? 'var(--shadow-sm)' : 'none'};">
                    <span style="font-size: 1.4rem;">${s.symbol}</span>
                    <span style="font-size: 0.85rem;">${isEn ? s.nameEn : s.nameCs}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- VALUE SELECTOR (13 VALUES) -->
          <div style="margin-bottom: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">
                ${isEn ? 'B) Card Value (Rank):' : 'B) Hodnota karty:'}
              </span>
              <span style="font-size: 0.82rem; font-weight: bold; color: var(--color-brown);">
                ${isEn ? 'Selected:' : 'Vybráno:'} ${drawSimulatorState.selectedValue}
              </span>
            </div>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
              ${values.map(v => {
                const isSelected = v === drawSimulatorState.selectedValue;
                return `
                  <button type="button" class="btn-val-select" data-val="${v}"
                          style="flex: 1; min-width: 38px; height: 42px; border-radius: 6px; border: 2px solid ${isSelected ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${isSelected ? 'var(--color-gold)' : 'var(--bg-card)'}; color: ${isSelected ? '#fff' : 'inherit'}; cursor: pointer; font-weight: bold; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: all 0.15s; box-shadow: ${isSelected ? 'var(--shadow-sm)' : 'none'};">
                    ${v}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- CONFIRM RECORD BUTTON -->
          <div style="display: flex; justify-content: center; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
            <button type="button" id="btn-confirm-draw" class="tool-subnav-btn active" style="font-size: 1rem; padding: 0.75rem 1.75rem; border-radius: 25px; box-shadow: var(--shadow-sm); display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              ⚖️ ${isEn ? `Record This Draw to Protocol (${drawSimulatorState.selectedSuit} ${drawSimulatorState.selectedValue})` : `Zaznamenat sejmutí do protokolu (${drawSimulatorState.selectedSuit} ${drawSimulatorState.selectedValue})`}
            </button>
          </div>
        </div>

        <!-- 4. OFFICIAL VERDICT BANNER -->
        ${drawSimulatorState.evaluatedCard && drawSimulatorState.result ? `
          <div style="background: radial-gradient(circle at center, #2e4d34 0%, #172b1d 100%); border-radius: 12px; padding: 1.75rem 1.25rem; text-align: center; margin-bottom: 1.5rem; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center;">
            
            <div style="display: flex; gap: 1.5rem; justify-content: center; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
              <!-- CARD GRAPHIC -->
              <div class="draw-sim-card animate-card-pop" style="width: 120px; height: 180px; background: #fffcf0; border-radius: 10px; box-shadow: 0 8px 24px rgba(0,0,0,0.6); border: 2px solid #3d2b1f; display: flex; flex-direction: column; justify-content: space-between; padding: 10px; user-select: none;">
                <div style="text-align: left; line-height: 1; color: ${drawSimulatorState.evaluatedCard.color === 'red' ? '#d32f2f' : '#222'}; font-weight: bold; font-size: 1.25rem;">
                  <div>${drawSimulatorState.evaluatedCard.value}</div>
                  <div style="font-size: 1.35rem;">${drawSimulatorState.evaluatedCard.suitSymbol}</div>
                </div>
                <div style="text-align: center; font-size: 3rem; line-height: 1; color: ${drawSimulatorState.evaluatedCard.color === 'red' ? '#d32f2f' : '#222'};">
                  ${drawSimulatorState.evaluatedCard.suitSymbol}
                </div>
                <div style="text-align: right; line-height: 1; color: ${drawSimulatorState.evaluatedCard.color === 'red' ? '#d32f2f' : '#222'}; font-weight: bold; font-size: 1.25rem; transform: rotate(180deg);">
                  <div>${drawSimulatorState.evaluatedCard.value}</div>
                  <div style="font-size: 1.35rem;">${drawSimulatorState.evaluatedCard.suitSymbol}</div>
                </div>
              </div>
            </div>

            <!-- RESULT BANNER -->
            <div style="max-width: 600px; width: 100%; padding: 1.2rem 1.5rem; border-radius: 10px; border: 2px solid ${
              drawSimulatorState.result.status === 'success' ? '#2ecc71' : drawSimulatorState.result.status === 'failure' ? '#e74c3c' : '#f39c12'
            }; background: ${
              drawSimulatorState.result.status === 'success' ? 'rgba(46, 204, 113, 0.92)' : drawSimulatorState.result.status === 'failure' ? 'rgba(231, 76, 60, 0.92)' : 'rgba(243, 156, 18, 0.92)'
            }; color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">
              <div style="font-size: 1.2rem; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                ${drawSimulatorState.result.status === 'success' ? '✅' : drawSimulatorState.result.status === 'failure' ? '❌' : 'ℹ️'}
                ${isEn ? drawSimulatorState.result.titleEn : drawSimulatorState.result.titleCs}
              </div>
              <div style="font-size: 0.96rem; line-height: 1.5; font-weight: 500;">
                ${isEn ? drawSimulatorState.result.messageEn : drawSimulatorState.result.messageCs}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 5. DRAW HISTORY STRIP -->
        ${drawSimulatorState.history.length > 0 ? `
          <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
              <span style="font-size: 0.85rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">
                ${isEn ? 'Arbitration Log (Recent Table Draws):' : 'Záznam posuzovaných sejmutí u stolu:'}
                <span style="font-size: 0.78rem; font-weight: normal; opacity: 0.8;">(${drawSimulatorState.history.length})</span>
              </span>
              <button type="button" id="btn-clear-draw-hist" style="background: none; border: none; font-size: 0.8rem; color: #c0392b; cursor: pointer; text-decoration: underline; font-weight: bold;">
                🗑️ ${isEn ? 'Clear log' : 'Vymazat záznam'}
              </button>
            </div>

            ${drawSimulatorState.luckyDuke ? `
              <div style="background: rgba(243, 156, 18, 0.12); border: 1px dashed var(--color-gold); border-radius: 6px; padding: 0.4rem 0.75rem; margin-bottom: 0.6rem; font-size: 0.82rem; color: var(--color-brown); font-weight: 600;">
                ${drawSimulatorState.history.length % 2 === 1
                  ? (isEn ? '🍀 Lucky Duke: 1st card recorded! Flip & record your 2nd card to compare.' : '🍀 Lucky Duke: 1. karta zaznamenána! Sejměte a zaznamenejte 2. kartu a porovnejte.')
                  : (isEn ? '🍀 Lucky Duke: Both cards recorded! Pick the favorable result.' : '🍀 Lucky Duke: Obě karty zaznamenány! Zvolte příznivější výsledek.')}
              </div>
            ` : ''}

            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${drawSimulatorState.history.slice(0, 10).map((h, idx) => `
                <div style="background: var(--bg-surface); border: 1.5px solid ${h.status === 'success' ? '#2ecc71' : h.status === 'failure' ? '#e74c3c' : 'var(--border-color)'}; border-radius: 8px; padding: 0.4rem 0.75rem; font-size: 0.85rem; display: flex; align-items: center; gap: 0.45rem; box-shadow: var(--shadow-sm);">
                  <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: bold;">#${drawSimulatorState.history.length - idx}</span>
                  <strong style="color: ${h.card.color === 'red' ? '#d32f2f' : 'inherit'}; font-size: 0.95rem;">${h.card.code}</strong>
                  <span style="font-size: 0.78rem; opacity: 0.8;">(${h.presetName})</span>
                  <span>${h.status === 'success' ? '✅' : h.status === 'failure' ? '❌' : '•'}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    // Bind event listeners
    container.querySelectorAll('.btn-preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        drawSimulatorState.preset = btn.dataset.preset;
        if (sim && drawSimulatorState.evaluatedCard) {
          drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, drawSimulatorState.evaluatedCard, isEn);
        }
        renderDrawSimulator(container);
      });
    });

    const chkDuke = document.getElementById('chk-lucky-duke');
    if (chkDuke) {
      chkDuke.addEventListener('change', () => {
        drawSimulatorState.luckyDuke = chkDuke.checked;
        renderDrawSimulator(container);
      });
    }

    // Suit selection updates staged card and live verdict WITHOUT premature history logging or sound FX
    container.querySelectorAll('.btn-suit-select').forEach(btn => {
      btn.addEventListener('click', () => {
        drawSimulatorState.selectedSuit = btn.dataset.suit;
        if (sim) {
          drawSimulatorState.evaluatedCard = sim.createCard(drawSimulatorState.selectedSuit, drawSimulatorState.selectedValue);
          drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, drawSimulatorState.evaluatedCard, isEn);
        }
        renderDrawSimulator(container);
      });
    });

    // Value selection updates staged card and live verdict WITHOUT premature history logging or sound FX
    container.querySelectorAll('.btn-val-select').forEach(btn => {
      btn.addEventListener('click', () => {
        drawSimulatorState.selectedValue = btn.dataset.val;
        if (sim) {
          drawSimulatorState.evaluatedCard = sim.createCard(drawSimulatorState.selectedSuit, drawSimulatorState.selectedValue);
          drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, drawSimulatorState.evaluatedCard, isEn);
        }
        renderDrawSimulator(container);
      });
    });

    // Confirm button explicitly commits the card to the arbitration protocol and triggers Sound FX
    const btnConfirm = document.getElementById('btn-confirm-draw');
    if (btnConfirm) {
      btnConfirm.addEventListener('click', () => {
        if (!sim) return;
        if (!drawSimulatorState.evaluatedCard) {
          drawSimulatorState.evaluatedCard = sim.createCard(drawSimulatorState.selectedSuit, drawSimulatorState.selectedValue);
        }
        drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, drawSimulatorState.evaluatedCard, isEn);

        drawSimulatorState.history.unshift({
          card: drawSimulatorState.evaluatedCard,
          presetName: isEn ? currentPreset.nameEn : currentPreset.nameCs,
          status: drawSimulatorState.result.status
        });

        // Play Sound FX safely
        try {
          if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
            if (drawSimulatorState.preset === 'dynamite' && drawSimulatorState.result.status === 'failure') {
              window.BANG_TOOLS.SoundFX.playDynamite();
            } else if (drawSimulatorState.preset === 'jail') {
              window.BANG_TOOLS.SoundFX.playJail();
            } else if (drawSimulatorState.preset === 'rattlesnake') {
              window.BANG_TOOLS.SoundFX.playRattlesnake();
            } else if (drawSimulatorState.result.status === 'failure') {
              window.BANG_TOOLS.SoundFX.playShot();
            } else {
              window.BANG_TOOLS.SoundFX.playBell();
            }
          }
        } catch (e) {
          console.warn('Audio playback error:', e);
        }

        renderDrawSimulator(container);
      });
    }

    // Random draw simulates physical deck flip, stages it, logs it to history, and plays Sound FX
    const btnRandom = document.getElementById('btn-random-draw');
    if (btnRandom) {
      btnRandom.addEventListener('click', () => {
        if (!sim) return;
        const card = sim.drawCard();
        drawSimulatorState.selectedSuit = card.suitSymbol;
        drawSimulatorState.selectedValue = card.value;
        drawSimulatorState.evaluatedCard = card;
        drawSimulatorState.result = sim.evaluate(drawSimulatorState.preset, card, isEn);

        drawSimulatorState.history.unshift({
          card,
          presetName: isEn ? currentPreset.nameEn : currentPreset.nameCs,
          status: drawSimulatorState.result.status
        });

        // Play Sound FX safely
        try {
          if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
            if (drawSimulatorState.preset === 'dynamite' && drawSimulatorState.result.status === 'failure') {
              window.BANG_TOOLS.SoundFX.playDynamite();
            } else if (drawSimulatorState.preset === 'jail') {
              window.BANG_TOOLS.SoundFX.playJail();
            } else if (drawSimulatorState.preset === 'rattlesnake') {
              window.BANG_TOOLS.SoundFX.playRattlesnake();
            } else if (drawSimulatorState.result.status === 'failure') {
              window.BANG_TOOLS.SoundFX.playShot();
            } else {
              window.BANG_TOOLS.SoundFX.playBell();
            }
          }
        } catch (e) {
          console.warn('Audio playback error:', e);
        }

        renderDrawSimulator(container);
      });
    }

    const btnClear = document.getElementById('btn-clear-draw-hist');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        drawSimulatorState.history = [];
        renderDrawSimulator(container);
      });
    }
  }

  // 2. EVENT DECK
  function renderEventDeck(container) {
    const isEn = state.lang === 'en';
    const allEventCards = window.BANG_CARDS.filter(c => c.type === 'event');

    const isClimax = (c) => {
      if (!c) return false;
      return c.name === 'Pravé poledne' || 
             c.name === 'Pěst plná karet' || 
             c.name === 'Pěst plná karet (Fistful)' ||
             c.name === 'Divoký západ (Wild West Show)' ||
             c.nameEn === 'High Noon' ||
             c.nameEn === 'A Fistful of Cards' ||
             c.nameEn === 'Wild West Show' ||
             (c.typeLabel && c.typeLabel.includes('finální')) ||
             (c.typeLabelEn && c.typeLabelEn.includes('climax'));
    };

    const playRoundSound = () => {
      if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX && window.BANG_TOOLS.SoundFX.playBell) {
        window.BANG_TOOLS.SoundFX.playBell();
      }
    };

    const playStagecoachSound = () => {
      if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
        if (window.BANG_TOOLS.SoundFX.playHorse) {
          window.BANG_TOOLS.SoundFX.playHorse();
        } else if (window.BANG_TOOLS.SoundFX.playWhip) {
          window.BANG_TOOLS.SoundFX.playWhip();
        } else if (window.BANG_TOOLS.SoundFX.playBell) {
          window.BANG_TOOLS.SoundFX.playBell();
        }
      }
    };

    const initSheriffDeck = (variant) => {
      let deck = [];
      const v = variant || eventDeckState.sheriffVariant || 'both-official';
      eventDeckState.sheriffVariant = v;

      if (v === 'high-noon') {
        const reg = allEventCards.filter(c => c.expansion === 'high-noon' && !isClimax(c)).sort(() => Math.random() - 0.5);
        const climax = allEventCards.find(c => c.expansion === 'high-noon' && isClimax(c));
        deck = climax ? [...reg, climax] : reg;
      } else if (v === 'fistful') {
        const reg = allEventCards.filter(c => c.expansion === 'fistful-of-cards' && !isClimax(c)).sort(() => Math.random() - 0.5);
        const climax = allEventCards.find(c => c.expansion === 'fistful-of-cards' && isClimax(c));
        deck = climax ? [...reg, climax] : reg;
      } else if (v === 'both-full') {
        const reg = allEventCards.filter(c => ['high-noon', 'fistful-of-cards'].includes(c.expansion) && !isClimax(c)).sort(() => Math.random() - 0.5);
        const climaxes = allEventCards.filter(c => ['high-noon', 'fistful-of-cards'].includes(c.expansion) && isClimax(c)).sort(() => Math.random() - 0.5);
        deck = climaxes.length > 0 ? [...reg, climaxes[0]] : reg;
      } else { // 'both-official' (Oficiální pravidla: 12 náhodných z obou sad + 1 náhodná finální dospodu = 13 karet)
        const reg = allEventCards.filter(c => ['high-noon', 'fistful-of-cards'].includes(c.expansion) && !isClimax(c)).sort(() => Math.random() - 0.5).slice(0, 12);
        const climaxes = allEventCards.filter(c => ['high-noon', 'fistful-of-cards'].includes(c.expansion) && isClimax(c)).sort(() => Math.random() - 0.5);
        deck = climaxes.length > 0 ? [...reg, climaxes[0]] : reg;
      }

      eventDeckState.sheriffDeck = deck;
      eventDeckState.sheriffIndex = 0;
    };

    const initWWSDeck = (keepRevealed) => {
      const reg = allEventCards.filter(c => c.expansion === 'wild-west-show' && !isClimax(c)).sort(() => Math.random() - 0.5);
      const climax = allEventCards.find(c => c.expansion === 'wild-west-show' && isClimax(c));
      eventDeckState.wwsDeck = climax ? [...reg, climax] : reg;
      if (!keepRevealed) {
        eventDeckState.wwsIndex = -1;
      } else if (eventDeckState.wwsIndex >= eventDeckState.wwsDeck.length) {
        eventDeckState.wwsIndex = 0;
      }
    };

    if (!eventDeckState.sheriffDeck || eventDeckState.sheriffDeck.length === 0) {
      initSheriffDeck(eventDeckState.sheriffVariant);
    }
    if (!eventDeckState.wwsDeck || eventDeckState.wwsDeck.length === 0) {
      initWWSDeck();
    }

    const mode = eventDeckState.filterSet;
    const isDual = mode === 'dual' || mode === 'all' || mode === 'both';
    const isWwsOnly = mode === 'wild-west-show';

    const currentSheriffCard = eventDeckState.sheriffDeck[eventDeckState.sheriffIndex] || eventDeckState.sheriffDeck[0];
    const currentWWSCard = (eventDeckState.wwsIndex >= 0) 
      ? (eventDeckState.wwsDeck[eventDeckState.wwsIndex] || eventDeckState.wwsDeck[0])
      : null;

    const renderEventCard = (card, index, total, deckType) => {
      if (!card) return '';
      const title = isEn ? (card.nameEn || card.name) : card.name;
      const badge = isEn ? (card.expansionNameEn || card.expansionName) : card.expansionName;
      const effect = isEn ? (card.effectEn || card.effect) : card.effect;
      const timing = isEn ? (card.timingEn || card.timing) : card.timing;
      const rulings = isEn && card.rulingsEn && card.rulingsEn.length > 0 ? card.rulingsEn : card.rulings;
      const isClimaxCard = isClimax(card);
      const topClass = deckType === 'wws' ? 'event-top-wws' : 'event-top-sheriff';

      return `
        <div class="event-big-card">
          <div class="event-card-top ${topClass}">
            <span class="event-round-badge">
              ${deckType === 'wws' ? (isEn ? 'Event' : 'Událost') : (isEn ? 'Round' : 'Kolo')} ${index + 1} / ${total}
              ${isClimaxCard ? (isEn ? ' • ⭐️ CLIMAX' : ' • ⭐️ FINÁLNÍ') : ''}
            </span>
            <span style="font-size: 0.85rem; font-weight: 700; opacity: 0.95;">${badge}</span>
          </div>
          ${card.image ? `
            <div style="background: var(--bg-surface); text-align: center; padding: 1.25rem 0.5rem; border-bottom: 1px solid var(--border-color);">
              <img src="${card.image}" alt="${title}" style="max-height: 220px; object-fit: contain; border-radius: 8px; box-shadow: var(--shadow-sm);">
            </div>
          ` : ''}
          <div class="event-card-body">
            <h3 class="event-card-title">${title}</h3>
            <div class="event-card-timing">⏱️ ${timing}</div>
            <div class="event-card-effect">${effect}</div>
            ${(rulings && rulings.length > 0) ? `
              <div style="font-size: 0.88rem; line-height: 1.6; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
                <strong style="color: var(--color-brown);">${isEn ? 'Official Rulings:' : 'Přesný výklad pravidla:'}</strong>
                <ul style="padding-left: 1.2rem; margin-top: 0.35rem;">
                  ${rulings.map(r => `<li>${r}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    };

    const renderWWSWaitingCard = () => {
      return `
        <div class="event-big-card">
          <div class="event-card-top event-top-wws">
            <span class="event-round-badge">🎪 ${isEn ? 'Wild West Show (10 cards)' : 'Divoký západ (10 karet)'}</span>
            <span style="font-size: 0.85rem; font-weight: 700; opacity: 0.95;">${isEn ? 'In center table' : 'Uprostřed stolu'}</span>
          </div>
          <div class="event-waiting-card">
            <div class="event-waiting-icon">📯</div>
            <h3 class="event-waiting-title">${isEn ? 'Waiting for Stagecoach' : 'Čeká na první Dostavník'}</h3>
            <p class="event-waiting-desc">
              ${isEn 
                ? 'The 10-card Wild West Show deck is kept separate in the center. Its first event is revealed only when any player plays a Stagecoach or Wells Fargo.' 
                : 'Samostatný balíček 10 karet Divokého západu leží uprostřed stolu. První karta se otočí až ve chvíli, kdy kterýkoli hráč zahraje kartu Dostavník nebo Wells Fargo.'}
            </p>
            <button type="button" class="tool-subnav-btn active" id="btn-reveal-first-wws" style="padding: 0.75rem 1.4rem; font-weight: 700; font-size: 1rem; margin-top: 0.5rem;">
              📯 ${isEn ? 'Play Stagecoach ➔ Reveal 1st Event' : 'Zahrán Dostavník ➔ Otočit 1. událost'}
            </button>
          </div>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2>${isEn ? 'Event Decks (High Noon, Fistful & Wild West Show)' : 'Digitální balíček událostí (Pravé poledne, Fistful & Divoký západ)'}</h2>
          <p class="tool-card-lead">${isEn ? 'Official 2-Deck Rules: Sheriff turns round events (High Noon / Fistful) at the start of each round. Wild West Show sits independently in the center and is revealed ONLY when Stagecoach or Wells Fargo is played.' : 'Oficiální pravidlový systém 2 balíčků: Šerif otáčí balíček kol (Pravé poledne / Pěst plná karet) na začátku každého kola hry. Samostatný balíček Divokého západu leží uprostřed stolu a otáčí se POUZE při zahrání karty Dostavník nebo Wells Fargo.'}</p>
        </div>

        <div class="events-deck-container">
          <div class="events-controls-bar">
            <select id="event-set-select" class="filter-select">
              <option value="dual" ${isDual ? 'selected' : ''}>🏜️ ${isEn ? 'Two Independent Decks: Sheriff (Rounds) + Wild West Show (Stagecoach)' : 'Dva nezávislé balíčky: Šerif (Kolo) + Divoký západ (Dostavník)'}</option>
              <option value="both-official" ${eventDeckState.filterSet === 'both-official' ? 'selected' : ''}>☀️💀 ${isEn ? 'Sheriff Deck: High Noon & Fistful (Official: 13 cards)' : 'Pouze balíček Šerifa: Pravé poledne & Fistful (Oficiální: 13 karet)'}</option>
              <option value="both-full" ${eventDeckState.filterSet === 'both-full' ? 'selected' : ''}>☀️💀 ${isEn ? 'Sheriff Deck: High Noon & Fistful (Marathon: 27 cards)' : 'Pouze balíček Šerifa: Pravé poledne & Fistful (Maraton: 27 karet)'}</option>
              <option value="high-noon" ${eventDeckState.filterSet === 'high-noon' ? 'selected' : ''}>☀️ ${isEn ? 'Sheriff Deck: High Noon only (13 cards)' : 'Pouze balíček Šerifa: Pouze Pravé poledne (13 karet)'}</option>
              <option value="fistful" ${eventDeckState.filterSet === 'fistful' ? 'selected' : ''}>💀 ${isEn ? 'Sheriff Deck: A Fistful of Cards only (15 cards)' : 'Pouze balíček Šerifa: Pouze Pěst plná karet (15 karet)'}</option>
              <option value="wild-west-show" ${eventDeckState.filterSet === 'wild-west-show' ? 'selected' : ''}>🎪 ${isEn ? 'Wild West Show Deck only (10 cards – Stagecoach)' : 'Pouze Divoký západ (10 karet – otáčí se při Dostavníku)'}</option>
            </select>
            <button type="button" class="btn-reset-filters" id="btn-shuffle-events" style="font-weight: 700;">
              🔄 ${isEn ? 'Shuffle Decks' : 'Zamíchat balíčky'}
            </button>
          </div>

          ${isDual ? `
            <div class="events-dual-grid">
              <!-- LEFT: Sheriff Deck -->
              <div class="event-deck-column">
                <div class="event-deck-column-header">
                  <div class="event-deck-column-title">☀️ ${isEn ? 'Sheriff Deck (Rounds)' : 'Balíček Šerifa (Kola hry)'}</div>
                  <div class="event-deck-column-subtitle">${isEn ? 'Sheriff reveals a new event at the start of each round (from Round 2). Climax card at bottom.' : 'Šerif otáčí na začátku každého kola hry od 2. kola. Finální karta je zamíchána dospodu.'}</div>
                  <div style="margin-top: 0.35rem;">
                    <select id="sheriff-variant-select" class="filter-select" style="width: 100%; font-size: 0.88rem; padding: 0.35rem 0.5rem;">
                      <option value="both-official" ${eventDeckState.sheriffVariant === 'both-official' ? 'selected' : ''}>☀️💀 ${isEn ? 'High Noon & Fistful (Official: 13 cards)' : 'Pravé poledne & Fistful (Oficiální: 13 karet)'}</option>
                      <option value="both-full" ${eventDeckState.sheriffVariant === 'both-full' ? 'selected' : ''}>☀️💀 ${isEn ? 'High Noon & Fistful (Marathon: 27 cards)' : 'Pravé poledne & Fistful (Maraton: 27 karet)'}</option>
                      <option value="high-noon" ${eventDeckState.sheriffVariant === 'high-noon' ? 'selected' : ''}>☀️ ${isEn ? 'High Noon only (13 cards)' : 'Pouze Pravé poledne (13 karet)'}</option>
                      <option value="fistful" ${eventDeckState.sheriffVariant === 'fistful' ? 'selected' : ''}>💀 ${isEn ? 'A Fistful of Cards only (15 cards)' : 'Pouze Pěst plná karet (15 karet)'}</option>
                    </select>
                  </div>
                </div>

                ${renderEventCard(currentSheriffCard, eventDeckState.sheriffIndex, eventDeckState.sheriffDeck.length, 'sheriff')}

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 0.25rem;">
                  <button type="button" class="tool-subnav-btn" id="btn-prev-sheriff" ${eventDeckState.sheriffIndex <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                    ← ${isEn ? 'Prev Round' : 'Předchozí kolo'}
                  </button>
                  <button type="button" class="tool-subnav-btn active" id="btn-next-sheriff" ${eventDeckState.sheriffIndex >= eventDeckState.sheriffDeck.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
                    ${isEn ? 'Next Round ➔' : 'Další kolo ➔'}
                  </button>
                  <button type="button" class="btn-reset-filters" id="btn-shuffle-sheriff" style="font-weight: 700; padding: 0.45rem 0.85rem;" title="${isEn ? 'Shuffle Sheriff Deck' : 'Zamíchat balíček Šerifa'}">
                    🔄
                  </button>
                </div>
              </div>

              <!-- RIGHT: Wild West Show Deck -->
              <div class="event-deck-column">
                <div class="event-deck-column-header">
                  <div class="event-deck-column-title">🎪 ${isEn ? 'Wild West Show (Center Table)' : 'Divoký západ (Uprostřed stolu)'}</div>
                  <div class="event-deck-column-subtitle">${isEn ? 'Revealed ONLY when someone plays a Stagecoach or Wells Fargo card.' : 'Otáčí se POUZE při zahrání karty Dostavník nebo Wells Fargo.'}</div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); padding: 0.35rem 0; font-weight: 600;">
                    ${eventDeckState.wwsIndex === -1 
                      ? (isEn ? '⏳ Deck is waiting for first Stagecoach' : '⏳ Balíček čeká na první Dostavník')
                      : (isEn ? `Active Event: ${eventDeckState.wwsIndex + 1} of 10` : `Aktivní událost: ${eventDeckState.wwsIndex + 1} z 10`)}
                  </div>
                </div>

                ${eventDeckState.wwsIndex === -1 ? renderWWSWaitingCard() : renderEventCard(currentWWSCard, eventDeckState.wwsIndex, eventDeckState.wwsDeck.length, 'wws')}

                ${eventDeckState.wwsIndex >= 0 ? `
                  <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 0.25rem;">
                    <button type="button" class="tool-subnav-btn" id="btn-prev-wws" ${eventDeckState.wwsIndex <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                      ← ${isEn ? 'Previous' : 'Předchozí'}
                    </button>
                    <button type="button" class="tool-subnav-btn active" id="btn-next-wws" ${eventDeckState.wwsIndex >= eventDeckState.wwsDeck.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
                      📯 ${isEn ? 'Stagecoach Played ➔' : 'Zahrán Dostavník ➔'}
                    </button>
                    <button type="button" class="btn-reset-filters" id="btn-shuffle-wws" style="font-weight: 700; padding: 0.45rem 0.85rem;" title="${isEn ? 'Shuffle WWS Deck' : 'Zamíchat balíček Divokého západu'}">
                      🔄
                    </button>
                    <button type="button" class="btn-reset-filters" id="btn-reset-wws" style="font-size: 0.82rem; padding: 0.45rem 0.75rem;" title="${isEn ? 'Reset to Waiting' : 'Vrátit do stavu před Dostavníkem'}">
                      ⏸️ ${isEn ? 'Wait' : 'Čekat'}
                    </button>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; align-items: center; width: 100%; gap: 1rem;">
              ${isWwsOnly ? (
                eventDeckState.wwsIndex === -1 ? renderWWSWaitingCard() : renderEventCard(currentWWSCard, eventDeckState.wwsIndex, eventDeckState.wwsDeck.length, 'wws')
              ) : (
                renderEventCard(currentSheriffCard, eventDeckState.sheriffIndex, eventDeckState.sheriffDeck.length, 'sheriff')
              )}

              <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: center;">
                ${isWwsOnly ? (
                  eventDeckState.wwsIndex >= 0 ? `
                    <button type="button" class="tool-subnav-btn" id="btn-prev-single" ${eventDeckState.wwsIndex <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                      ← ${isEn ? 'Previous' : 'Předchozí'}
                    </button>
                    <button type="button" class="tool-subnav-btn active" id="btn-next-single" ${eventDeckState.wwsIndex >= eventDeckState.wwsDeck.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
                      📯 ${isEn ? 'Stagecoach Played ➔' : 'Zahrán Dostavník ➔'}
                    </button>
                    <button type="button" class="btn-reset-filters" id="btn-reset-wws" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;">
                      ⏸️ ${isEn ? 'Reset to Waiting' : 'Vrátit do čekání'}
                    </button>
                  ` : ''
                ) : `
                  <button type="button" class="tool-subnav-btn" id="btn-prev-single" ${eventDeckState.sheriffIndex <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
                    ← ${isEn ? 'Previous Round' : 'Předchozí kolo'}
                  </button>
                  <button type="button" class="tool-subnav-btn active" id="btn-next-single" ${eventDeckState.sheriffIndex >= eventDeckState.sheriffDeck.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
                    ${isEn ? 'Next Round ➔' : 'Další kolo (Nové kolo) ➔'}
                  </button>
                `}
              </div>
            </div>
          `}
        </div>
      </div>
    `;

    // --- EVENT LISTENERS ---
    document.getElementById('event-set-select').addEventListener('change', (e) => {
      const val = e.target.value;
      eventDeckState.filterSet = val;
      if (val === 'wild-west-show' && eventDeckState.wwsIndex === -1) {
        eventDeckState.wwsIndex = 0;
      } else if (val !== 'wild-west-show' && val !== 'dual' && val !== 'all') {
        eventDeckState.sheriffVariant = val;
        initSheriffDeck(val);
      }
      renderEventDeck(container);
    });

    const sheriffVariantSelect = document.getElementById('sheriff-variant-select');
    if (sheriffVariantSelect) {
      sheriffVariantSelect.addEventListener('change', (e) => {
        eventDeckState.sheriffVariant = e.target.value;
        initSheriffDeck(e.target.value);
        playRoundSound();
        renderEventDeck(container);
      });
    }

    document.getElementById('btn-shuffle-events').addEventListener('click', () => {
      initSheriffDeck(eventDeckState.sheriffVariant);
      initWWSDeck(false);
      playRoundSound();
      renderEventDeck(container);
    });

    // Dual mode - Sheriff listeners
    const nextSheriffBtn = document.getElementById('btn-next-sheriff');
    if (nextSheriffBtn && eventDeckState.sheriffIndex < eventDeckState.sheriffDeck.length - 1) {
      nextSheriffBtn.addEventListener('click', () => {
        eventDeckState.sheriffIndex++;
        playRoundSound();
        renderEventDeck(container);
      });
    }
    const prevSheriffBtn = document.getElementById('btn-prev-sheriff');
    if (prevSheriffBtn && eventDeckState.sheriffIndex > 0) {
      prevSheriffBtn.addEventListener('click', () => {
        eventDeckState.sheriffIndex--;
        renderEventDeck(container);
      });
    }
    const shuffleSheriffBtn = document.getElementById('btn-shuffle-sheriff');
    if (shuffleSheriffBtn) {
      shuffleSheriffBtn.addEventListener('click', () => {
        initSheriffDeck(eventDeckState.sheriffVariant);
        playRoundSound();
        renderEventDeck(container);
      });
    }

    // WWS listeners (Dual & Single)
    const revealFirstWwsBtn = document.getElementById('btn-reveal-first-wws');
    if (revealFirstWwsBtn) {
      revealFirstWwsBtn.addEventListener('click', () => {
        eventDeckState.wwsIndex = 0;
        playStagecoachSound();
        renderEventDeck(container);
      });
    }
    const nextWwsBtn = document.getElementById('btn-next-wws');
    if (nextWwsBtn && eventDeckState.wwsIndex < eventDeckState.wwsDeck.length - 1) {
      nextWwsBtn.addEventListener('click', () => {
        eventDeckState.wwsIndex++;
        playStagecoachSound();
        renderEventDeck(container);
      });
    }
    const prevWwsBtn = document.getElementById('btn-prev-wws');
    if (prevWwsBtn && eventDeckState.wwsIndex > 0) {
      prevWwsBtn.addEventListener('click', () => {
        eventDeckState.wwsIndex--;
        renderEventDeck(container);
      });
    }
    const shuffleWwsBtn = document.getElementById('btn-shuffle-wws');
    if (shuffleWwsBtn) {
      shuffleWwsBtn.addEventListener('click', () => {
        initWWSDeck(true);
        playStagecoachSound();
        renderEventDeck(container);
      });
    }
    const resetWwsBtn = document.getElementById('btn-reset-wws');
    if (resetWwsBtn) {
      resetWwsBtn.addEventListener('click', () => {
        eventDeckState.wwsIndex = -1;
        renderEventDeck(container);
      });
    }

    // Single mode listeners
    const nextSingleBtn = document.getElementById('btn-next-single');
    if (nextSingleBtn) {
      nextSingleBtn.addEventListener('click', () => {
        if (isWwsOnly) {
          if (eventDeckState.wwsIndex < eventDeckState.wwsDeck.length - 1) {
            eventDeckState.wwsIndex++;
            playStagecoachSound();
          }
        } else {
          if (eventDeckState.sheriffIndex < eventDeckState.sheriffDeck.length - 1) {
            eventDeckState.sheriffIndex++;
            playRoundSound();
          }
        }
        renderEventDeck(container);
      });
    }
    const prevSingleBtn = document.getElementById('btn-prev-single');
    if (prevSingleBtn) {
      prevSingleBtn.addEventListener('click', () => {
        if (isWwsOnly) {
          if (eventDeckState.wwsIndex > 0) {
            eventDeckState.wwsIndex--;
          }
        } else {
          if (eventDeckState.sheriffIndex > 0) {
            eventDeckState.sheriffIndex--;
          }
        }
        renderEventDeck(container);
      });
    }
  }

  // 3. ROLE & CHARACTER DRAFT
  function renderRoleDraft(container) {
    const isEn = state.lang === 'en';

    const getRolesDistribution = (n) => {
      if (n === 3) {
        return ['deputy', 'renegade', 'outlaw'].sort(() => Math.random() - 0.5);
      }
      const roles = ['sheriff'];
      if (n === 4) { roles.push('renegade', 'outlaw', 'outlaw'); }
      else if (n === 5) { roles.push('deputy', 'renegade', 'outlaw', 'outlaw'); }
      else if (n === 6) { roles.push('deputy', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      else if (n === 7) { roles.push('deputy', 'deputy', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      else if (n === 8) { roles.push('deputy', 'deputy', 'renegade', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      return roles.sort(() => Math.random() - 0.5);
    };

    const startDraft = () => {
      const roles = getRolesDistribution(draftState.playerCount);
      const availableChars = window.BANG_CARDS.filter(c =>
        ['character', 'legend-character'].includes(c.type) &&
        (draftState.expansions.includes(c.expansion) || draftState.expansions.includes('all'))
      ).sort(() => Math.random() - 0.5);

      draftState.players = [];
      for (let i = 0; i < draftState.playerCount; i++) {
        const c1 = availableChars.pop();
        const c2 = availableChars.pop();
        draftState.players.push({
          num: i + 1,
          name: `${isEn ? 'Player' : 'Hráč'} ${i + 1}`,
          role: roles[i],
          choices: [c1, c2].filter(Boolean),
          chosenChar: null
        });
      }

      draftState.currentIdx = 0;
      draftState.revealed = false;
      draftState.step = 'turn';
    };

    if (draftState.step === 'setup') {
      container.innerHTML = `
        <div class="tool-card-box">
          <div class="tool-card-header">
            <h2><span style="font-size: 1.5rem;">🎲</span> ${isEn ? 'Role & Character Draft' : 'Losovač rolí a postav'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Secret "Pass the Phone" mode: choose player count (3–8), discover your secret role, and pick from 2 dealt characters.'
                : 'Režim „Předej mobil“ pro tajné losování: zvolte počet hráčů (3–8), v soukromí zjistěte svou roli a vyberte si ze 2 nabídnutých postav.'}
            </p>
          </div>

          <div class="draft-card-wrap">
            <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); margin-bottom: 1.5rem; text-align: left; box-shadow: var(--shadow-sm);">
              
              <!-- 1. POČET HRÁČŮ -->
              <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.65rem;">
                  <label style="font-weight: 800; font-size: 1rem; color: var(--color-brown);">
                    1. ${isEn ? 'Number of Players at Table (3–8):' : 'Počet hráčů u stolu (3–8):'}
                  </label>
                  <span style="background: var(--color-gold); color: #fff; font-size: 0.82rem; font-weight: 800; padding: 0.2rem 0.75rem; border-radius: 12px;">
                    ${isEn ? 'Selected:' : 'Zvoleno:'} ${draftState.playerCount} ${isEn ? 'players' : (draftState.playerCount === 3 || draftState.playerCount === 4 ? 'hráči' : 'hráčů')}
                  </span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(85px, 1fr)); gap: 0.5rem; margin-bottom: 0.85rem;">
                  ${[3, 4, 5, 6, 7, 8].map(n => {
                    const isSel = n === draftState.playerCount;
                    return `
                      <button type="button" class="btn-draft-count" data-draft-n="${n}"
                              style="padding: 0.7rem 0.4rem; border-radius: 8px; border: 2px solid ${isSel ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${isSel ? 'var(--color-brown)' : 'var(--bg-card)'}; color: ${isSel ? '#ffffff' : 'var(--text-main)'}; cursor: pointer; font-weight: 800; font-size: 0.95rem; text-align: center; transition: all 0.15s; box-shadow: ${isSel ? 'var(--shadow-sm)' : 'none'};">
                        <div style="font-size: 1.15rem; margin-bottom: 0.15rem;">👥 ${n}</div>
                        <div style="font-size: 0.75rem; opacity: 0.9;">${isEn ? (n === 1 ? 'player' : 'players') : (n === 3 || n === 4 ? 'hráči' : 'hráčů')}</div>
                      </button>
                    `;
                  }).join('')}
                </div>

                <!-- LIVE ROLE BREAKDOWN PREVIEW -->
                <div style="background: var(--bg-card); border: 1.5px dashed var(--border-color); border-radius: 8px; padding: 0.85rem 1rem;">
                  <div style="font-size: 0.8rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.45rem;">
                    ${isEn ? `Roles dealt for ${draftState.playerCount} players:` : `Rozdělení rolí pro ${draftState.playerCount} hráčů:`}
                  </div>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; font-size: 0.86rem; align-items: center;">
                    ${draftState.playerCount === 3 ? `
                      <span style="background: rgba(41, 128, 185, 0.12); color: #2980b9; border: 1px solid #2980b9; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🛡️ 1× ${isEn ? 'Deputy' : 'Pomocník'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 1× ${isEn ? 'Renegade' : 'Odpadlík'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 1× ${isEn ? 'Outlaw' : 'Bandita'}</span>
                      <span style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">(${isEn ? 'Goal ring: Deputy ➔ Renegade ➔ Outlaw ➔ Deputy' : 'Kruh cílů: Pomocník ➔ Odpadlík ➔ Bandita ➔ Pomocník'})</span>
                    ` : draftState.playerCount === 4 ? `
                      <span style="background: rgba(243, 156, 18, 0.15); color: #d35400; border: 1px solid #f39c12; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">⭐️ 1× ${isEn ? 'Sheriff' : 'Šerif'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 1× ${isEn ? 'Renegade' : 'Odpadlík'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 2× ${isEn ? 'Outlaws' : 'Bandité'}</span>
                    ` : draftState.playerCount === 5 ? `
                      <span style="background: rgba(243, 156, 18, 0.15); color: #d35400; border: 1px solid #f39c12; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">⭐️ 1× ${isEn ? 'Sheriff' : 'Šerif'}</span>
                      <span style="background: rgba(41, 128, 185, 0.12); color: #2980b9; border: 1px solid #2980b9; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🛡️ 1× ${isEn ? 'Deputy' : 'Pomocník'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 1× ${isEn ? 'Renegade' : 'Odpadlík'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 2× ${isEn ? 'Outlaws' : 'Bandité'}</span>
                    ` : draftState.playerCount === 6 ? `
                      <span style="background: rgba(243, 156, 18, 0.15); color: #d35400; border: 1px solid #f39c12; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">⭐️ 1× ${isEn ? 'Sheriff' : 'Šerif'}</span>
                      <span style="background: rgba(41, 128, 185, 0.12); color: #2980b9; border: 1px solid #2980b9; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🛡️ 1× ${isEn ? 'Deputy' : 'Pomocník'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 1× ${isEn ? 'Renegade' : 'Odpadlík'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 3× ${isEn ? 'Outlaws' : 'Bandité'}</span>
                    ` : draftState.playerCount === 7 ? `
                      <span style="background: rgba(243, 156, 18, 0.15); color: #d35400; border: 1px solid #f39c12; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">⭐️ 1× ${isEn ? 'Sheriff' : 'Šerif'}</span>
                      <span style="background: rgba(41, 128, 185, 0.12); color: #2980b9; border: 1px solid #2980b9; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🛡️ 2× ${isEn ? 'Deputies' : 'Pomocníci'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 1× ${isEn ? 'Renegade' : 'Odpadlík'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 3× ${isEn ? 'Outlaws' : 'Bandité'}</span>
                    ` : `
                      <span style="background: rgba(243, 156, 18, 0.15); color: #d35400; border: 1px solid #f39c12; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">⭐️ 1× ${isEn ? 'Sheriff' : 'Šerif'}</span>
                      <span style="background: rgba(41, 128, 185, 0.12); color: #2980b9; border: 1px solid #2980b9; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🛡️ 2× ${isEn ? 'Deputies' : 'Pomocníci'}</span>
                      <span style="background: rgba(142, 68, 173, 0.12); color: #8e44ad; border: 1px solid #8e44ad; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">🗡️ 2× ${isEn ? 'Renegades' : 'Odpadlíci'}</span>
                      <span style="background: rgba(192, 57, 43, 0.12); color: #c0392b; border: 1px solid #c0392b; padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 700;">💀 3× ${isEn ? 'Outlaws' : 'Bandité'}</span>
                    `}
                  </div>
                </div>
              </div>

              <!-- 2. ROZŠÍŘENÍ POSTAV -->
              <div style="margin-bottom: 1.5rem;">
                <label style="font-weight: 800; font-size: 1rem; display: block; margin-bottom: 0.5rem; color: var(--color-brown);">
                  2. ${isEn ? 'Include Character Expansions:' : 'Zahrnout postavy z rozšíření:'}
                </label>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="base" ${draftState.expansions.includes('base') ? 'checked' : ''}> <span>🎯 Základní hra (16 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="dodge-city" ${draftState.expansions.includes('dodge-city') ? 'checked' : ''}> <span>🟢 Dodge City (15 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="gold-rush" ${draftState.expansions.includes('gold-rush') ? 'checked' : ''}> <span>🪙 Zlatá horečka (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="armed-dangerous" ${draftState.expansions.includes('armed-dangerous') ? 'checked' : ''}> <span>🟠 Ozbrojení a nebezpeční (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="train-robbery" ${draftState.expansions.includes('train-robbery') ? 'checked' : ''}> <span>🚂 Velká vlaková loupež (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="valley-of-shadows" ${draftState.expansions.includes('valley-of-shadows') ? 'checked' : ''}> <span>💀 Údolí stínů (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="wild-west-show" ${draftState.expansions.includes('wild-west-show') ? 'checked' : ''}> <span>🎪 Divoký západ (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="legends" ${draftState.expansions.includes('legends') ? 'checked' : ''}> <span>🌟 Legendy (16 legendárních postav)</span></label>
                </div>
              </div>
            </div>

            <button type="button" class="tool-subnav-btn active" id="btn-start-draft" style="font-size: 1.1rem; padding: 0.85rem 2.2rem; cursor: pointer;">
              🎲 ${isEn ? `Start Secret Draft (${draftState.playerCount} Players)` : `Zahájit tajné losování (${draftState.playerCount} hráčů)`}
            </button>
          </div>
        </div>
      `;

      container.querySelectorAll('[data-draft-n]').forEach(btn => {
        btn.addEventListener('click', () => {
          draftState.playerCount = parseInt(btn.dataset.draftN, 10);
          renderRoleDraft(container);
        });
      });

      container.querySelectorAll('[data-exp]').forEach(chk => {
        chk.addEventListener('change', () => {
          const exp = chk.dataset.exp;
          if (chk.checked && !draftState.expansions.includes(exp)) draftState.expansions.push(exp);
          if (!chk.checked) draftState.expansions = draftState.expansions.filter(e => e !== exp);
          if (draftState.expansions.length === 0) draftState.expansions = ['base'];
        });
      });

      document.getElementById('btn-start-draft').addEventListener('click', () => {
        startDraft();
        renderRoleDraft(container);
      });
      return;
    }

    if (draftState.step === 'turn') {
      const p = draftState.players[draftState.currentIdx];

      if (!draftState.revealed) {
        container.innerHTML = `
          <div class="tool-card-box">
            <div class="draft-card-wrap">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.75rem;">
                <div style="font-size: 0.88rem; font-weight: 800; color: var(--color-brown); text-transform: uppercase;">
                  ${isEn ? 'Secret Pass-the-Phone' : 'Tajné předání'} (${draftState.currentIdx + 1} / ${draftState.playerCount} ${isEn ? 'players' : 'hráčů'})
                </div>
                <button type="button" class="btn-cancel-draft" style="background: none; border: 1.5px solid var(--border-color); border-radius: 20px; padding: 0.35rem 0.85rem; font-size: 0.82rem; font-weight: bold; color: var(--text-muted); cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem;">
                  ⚙️ ${isEn ? 'Change Player Count' : 'Změnit počet hráčů / Zrušit'}
                </button>
              </div>

              <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; color: var(--text-main); margin-bottom: 1rem;">
                📱 ${isEn ? 'Pass device to' : 'Předejte zařízení hráči:'} <strong>${p.name}</strong>
              </h2>
              <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.05rem;">
                ${isEn ? 'Ensure nobody else is looking at the screen, then tap below to reveal your secret role and select your character.' : 'Ujistěte se, že se nikdo jiný nedívá na displej, a klepnutím odhalte svou tajnou roli a výběr postav.'}
              </p>

              <div class="draft-mystery-box" id="btn-reveal-turn">
                <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🔒</div>
                <h3 style="font-family: 'Georgia', serif; font-size: 1.5rem; color: var(--color-brown); margin-bottom: 0.25rem;">
                  ${isEn ? 'Tap to Reveal Role & Characters' : 'Klepnutím odhalit roli a postavy'}
                </h3>
                <div style="color: var(--text-muted); font-size: 0.88rem;">${isEn ? 'For your eyes only!' : 'Pouze pro tvé oči!'}</div>
              </div>
            </div>
          </div>
        `;

        document.getElementById('btn-reveal-turn').addEventListener('click', () => {
          draftState.revealed = true;
          renderRoleDraft(container);
        });

        const cancelBtn = container.querySelector('.btn-cancel-draft');
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            draftState.step = 'setup';
            draftState.revealed = false;
            draftState.players = [];
            draftState.currentIdx = 0;
            renderRoleDraft(container);
          });
        }
        return;
      }

      let roleInfo = { title: '💀 Bandita', color: '#c0392b', desc: isEn ? 'Eliminate the Sheriff!' : 'Zlikviduj Šerifa za každou cenu!' };
      if (draftState.playerCount === 3) {
        if (p.role === 'deputy') {
          roleInfo = {
            title: '🛡️ Pomocník šerifa',
            color: '#2980b9',
            desc: isEn 
              ? '3-PLAYER GOAL: Your objective is to personally eliminate the RENEGADE! (Cards targeting Sheriff target you).' 
              : 'CÍL PRO 3 HRÁČE: Tvým úkolem je osobně zlikvidovat ODPADLÍKA! (Karty cílící na Šerifa se vztahují na tebe).'
          };
        } else if (p.role === 'renegade') {
          roleInfo = {
            title: '🗡️ Odpadlík',
            color: '#8e44ad',
            desc: isEn 
              ? '3-PLAYER GOAL: Your objective is to personally eliminate the OUTLAW!' 
              : 'CÍL PRO 3 HRÁČE: Tvým úkolem je osobně zlikvidovat BANDITU!'
          };
        } else if (p.role === 'outlaw') {
          roleInfo = {
            title: '💀 Bandita',
            color: '#c0392b',
            desc: isEn 
              ? '3-PLAYER GOAL: Your objective is to personally eliminate the DEPUTY!' 
              : 'CÍL PRO 3 HRÁČE: Tvým úkolem je osobně zlikvidovat POMOCNÍKA ŠERIFA!'
          };
        }
      } else {
        if (p.role === 'sheriff') {
          roleInfo = { title: '⭐️ ŠERIF', color: '#f39c12', desc: isEn ? 'PUBLIC ROLE: Reveal this card to everyone immediately! You get +1 max life and play first.' : 'VEŘEJNÁ ROLE: Tuto kartu ihned otoč všem lícem nahoru! Máš +1 život navíc a hraješ jako první.' };
        } else if (p.role === 'deputy') {
          roleInfo = { title: '🛡️ Pomocník šerifa', color: '#2980b9', desc: isEn ? 'Protect the Sheriff and eliminate Outlaws & Renegade.' : 'Chraň Šerifa za každou cenu a pomoz mu zvítězit!' };
        } else if (p.role === 'renegade') {
          roleInfo = { title: '🗡️ Odpadlík', color: '#8e44ad', desc: isEn ? 'Be the last one standing – eliminate the Sheriff in a final 1v1 duel!' : 'Zůstaň jako poslední živý ve hře – Šerifa musíš zabít až úplně naposledy 1 na 1!' };
        }
      }

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="draft-card-wrap">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.75rem;">
              <div style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">
                ${p.name} (${draftState.currentIdx + 1} / ${draftState.playerCount} ${isEn ? 'players' : 'hráčů'})
              </div>
              <button type="button" class="btn-cancel-draft" style="background: none; border: 1.5px solid var(--border-color); border-radius: 20px; padding: 0.35rem 0.85rem; font-size: 0.82rem; font-weight: bold; color: var(--text-muted); cursor: pointer; display: inline-flex; align-items: center; gap: 0.35rem;">
                ⚙️ ${isEn ? 'Change Player Count' : 'Změnit počet hráčů / Zrušit'}
              </button>
            </div>

            <div style="background: ${roleInfo.color}; color: #ffffff; padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin: 0.5rem 0 1.5rem; box-shadow: var(--shadow-md);">
              <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.9;">${isEn ? 'Your Role:' : 'Tvoje role:'}</div>
              <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; margin: 0.35rem 0;">${roleInfo.title}</h2>
              <div style="font-size: 0.95rem; opacity: 0.95; line-height: 1.4;">${roleInfo.desc}</div>
            </div>

            <h3 style="font-family: 'Georgia', serif; font-size: 1.3rem; color: var(--color-brown); margin-bottom: 0.75rem;">
              ${isEn ? 'Choose 1 of 2 dealt characters:' : 'Vyber si 1 ze 2 nabízených postav:'}
            </h3>

            <div class="draft-chars-grid">
              ${p.choices.map((c) => {
                const cTitle = isEn ? (c.nameEn || c.name) : c.name;
                const cEffect = isEn ? (c.effectEn || c.effect) : c.effect;
                const isSelected = p.chosenChar && p.chosenChar.id === c.id;
                return `
                  <div class="draft-char-choice ${isSelected ? 'selected' : ''}" data-char-id="${c.id}">
                    <div style="text-align: center; margin-bottom: 0.75rem;">
                      ${c.image ? `<img src="${c.image}" alt="${cTitle}" style="max-height: 140px; object-fit: contain; border-radius: 6px; margin-bottom: 0.4rem;">` : ''}
                      <h4 style="font-family: 'Georgia', serif; font-size: 1.2rem; margin: 0.2rem 0; color: var(--text-main);">${cTitle}</h4>
                      <div style="color: #b71c1c; font-weight: 800; font-size: 0.95rem;">❤️ ${c.lives} ${isEn ? 'lives' : 'životy'}</div>
                    </div>
                    <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main); background: var(--bg-surface); padding: 0.65rem; border-radius: 4px; border-left: 3px solid var(--color-brown);">
                      ${cEffect}
                    </div>
                    <button type="button" class="tool-subnav-btn ${isSelected ? 'active' : ''}" style="width: 100%; margin-top: 0.75rem; justify-content: center;">
                      ${isSelected ? (isEn ? '✓ Selected' : '✓ Zvoleno') : (isEn ? 'Select Character' : 'Zvolit tuto postavu')}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>

            <button type="button" class="tool-subnav-btn active" id="btn-confirm-turn" ${!p.chosenChar ? 'disabled style="opacity: 0.5;"' : ''} style="font-size: 1.1rem; padding: 0.85rem 2rem;">
              ${draftState.currentIdx < draftState.playerCount - 1 ? (isEn ? 'Confirm & Pass to Next Player ➔' : 'Potvrdit a předat dalšímu hráči ➔') : (isEn ? 'Finish Draft ➔' : 'Dokončit losování ➔')}
            </button>
          </div>
        </div>
      `;

      container.querySelectorAll('.draft-char-choice').forEach(cardEl => {
        cardEl.addEventListener('click', () => {
          const charId = cardEl.dataset.charId;
          p.chosenChar = p.choices.find(c => c.id === charId);
          renderRoleDraft(container);
        });
      });

      const confirmBtn = document.getElementById('btn-confirm-turn');
      if (confirmBtn && p.chosenChar) {
        confirmBtn.addEventListener('click', () => {
          if (draftState.currentIdx < draftState.playerCount - 1) {
            draftState.currentIdx++;
            draftState.revealed = false;
          } else {
            draftState.step = 'summary';
          }
          renderRoleDraft(container);
        });
      }

      const cancelBtn = container.querySelector('.btn-cancel-draft');
      if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
          draftState.step = 'setup';
          draftState.revealed = false;
          draftState.players = [];
          draftState.currentIdx = 0;
          renderRoleDraft(container);
        });
      }
      return;
    }

    if (draftState.step === 'summary') {
      const sheriffPlayer = draftState.players.find(p => p.role === 'sheriff');

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="tool-card-header">
            <h2>${isEn ? 'Draft Completed! Game Ready!' : 'Losování dokončeno! Hra je připravena!'}</h2>
            <p class="tool-card-lead">
              ${draftState.playerCount === 3
                ? (isEn ? '3-Player Circle of Goals! All players reveal their roles or keep them secret according to chosen house rules.' : 'Kruh cílů pro 3 hráče! Každý hráč zná svůj unikátní cíl pro okamžité vítězství.')
                : (isEn ? 'Sheriff plays first and reveals their card publicly. All other roles remain strictly secret.' : 'Šerif hraje jako první a otočí kartu lícem nahoru. Všechny ostatní role zůstávají tajné!')}
            </p>
          </div>

          <div class="draft-card-wrap">
            ${draftState.playerCount === 3 ? `
              <div style="background: linear-gradient(135deg, #2980b9 0%, #8e44ad 100%); color: #ffffff; padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; box-shadow: var(--shadow-md);">
                <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">${isEn ? '3-Player Circle of Goals (No Sheriff):' : 'Kruh cílů pro 3 hráče (Hra bez Šerifa):'}</div>
                <h2 style="font-family: 'Georgia', serif; font-size: 1.6rem; margin: 0.4rem 0 0.8rem;">
                  🛡️ Pomocník ➔ 🗡️ Odpadlík ➔ 💀 Bandita ➔ 🛡️ Pomocník
                </h2>
                <div style="font-size: 0.95rem; opacity: 0.95; line-height: 1.4;">
                  ${isEn
                    ? 'Deputy must kill Renegade, Renegade must kill Outlaw, Outlaw must kill Deputy. The player who personally kills their target wins immediately!'
                    : 'Pomocník musí osobně zabít Odpadlíka, Odpadlík Banditu a Bandita Pomocníka. Kdo osobně zasadí smrtelnou ránu svému cíli, okamžitě vítězí!'}
                </div>
              </div>
            ` : sheriffPlayer ? `
              <div style="background: linear-gradient(135deg, #f39c12 0%, #d35400 100%); color: #ffffff; padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; box-shadow: var(--shadow-md);">
                <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">${isEn ? 'Public Sheriff of the Town:' : 'Veřejný Šerif pro tuto hru:'}</div>
                <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; margin: 0.4rem 0;">⭐ ${sheriffPlayer.name}</h2>
                <div style="font-size: 1.15rem; font-weight: 700;">
                  ${isEn ? 'Character:' : 'Postava:'} ${sheriffPlayer.chosenChar ? (isEn ? (sheriffPlayer.chosenChar.nameEn || sheriffPlayer.chosenChar.name) : sheriffPlayer.chosenChar.name) : ''}
                  (+1 ${isEn ? 'bonus life' : 'život navíc'} = ${(sheriffPlayer.chosenChar ? sheriffPlayer.chosenChar.lives : 4) + 1} ❤️)
                </div>
              </div>
            ` : ''}

            <div style="text-align: left; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
              <h4 style="font-family: 'Georgia', serif; font-size: 1.15rem; color: var(--color-brown); margin-bottom: 0.75rem;">
                ${isEn ? 'Confidential Role Reminders (Tap to peek):' : 'Nápověda pro zapomnětlivé (Klepnutím diskrétně zkontroluj):'}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${draftState.players.map(p => `
                  <details style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.6rem 0.85rem;">
                    <summary style="font-weight: 700; cursor: pointer; color: var(--text-main);">
                      🔒 ${p.name} (${p.chosenChar ? (isEn ? (p.chosenChar.nameEn || p.chosenChar.name) : p.chosenChar.name) : ''})
                    </summary>
                    <div style="margin-top: 0.5rem; font-size: 0.92rem; color: var(--color-brown); font-weight: 800; border-top: 1px dashed var(--border-color); padding-top: 0.5rem;">
                      ${isEn ? 'Secret Role:' : 'Tajná role:'} ${p.role.toUpperCase()}
                    </div>
                  </details>
                `).join('')}
              </div>
            </div>

            <button type="button" class="btn-reset-filters" id="btn-restart-draft" style="font-weight: 700; font-size: 1rem; padding: 0.75rem 1.5rem; cursor: pointer;">
              🔄 ${isEn ? 'Start New Draft' : 'Spustit nové losování'}
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-restart-draft').addEventListener('click', () => {
        draftState.step = 'setup';
        draftState.revealed = false;
        draftState.players = [];
        draftState.currentIdx = 0;
        renderRoleDraft(container);
      });
    }
  }

  // 4. VIRTUAL PLAYER BOARD
  function renderPlayerBoard(container) {
    const isEn = state.lang === 'en';
    const effectiveMaxLives = trackerState.maxLives + (trackerState.isSheriff ? 1 : 0);
    const handWarning = trackerState.hand > trackerState.lives;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2>${isEn ? 'Virtual Player Board & Resource Tracker' : 'Virtuální deska a sledovač surovin'}</h2>
          <p class="tool-card-lead">${isEn ? 'Track lives, gold nuggets, charge cubes, and end-of-turn hand card limit right on your screen.' : 'Sledování životů, zlatých valounů, žetonů nabití a limitu karet na konci tahu přímo na displeji mobilu či tabletu.'}</p>
        </div>

        <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <label class="calc-checkbox-label" style="font-weight: 700; font-size: 1.05rem;">
            <input type="checkbox" id="chk-tracker-sheriff" ${trackerState.isSheriff ? 'checked' : ''}>
            <span>⭐️ ${isEn ? 'I am the Sheriff (+1 max life)' : 'Jsem Šerif (+1 max život navíc)'}</span>
          </label>
          <button type="button" class="btn-reset-filters" id="btn-reset-tracker">
            🔄 ${isEn ? 'Reset Tracker' : 'Resetovat desku'}
          </button>
        </div>

        <div class="tracker-board-grid">
          <div class="tracker-tile" style="border-top: 4px solid #c0392b;">
            <div class="tracker-tile-title">❤️ ${isEn ? 'Life Points (Bullets)' : 'Životy (Náboje)'}</div>
            <div class="tracker-counter-val" style="color: #c0392b;">${trackerState.lives} <span style="font-size: 1.4rem; color: var(--text-muted); font-weight: normal;">/ ${effectiveMaxLives}</span></div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-lives-minus">−</button>
              <button type="button" class="btn-counter" id="btn-lives-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #f39c12;">
            <div class="tracker-tile-title">🪙 ${isEn ? 'Gold Nuggets (Gold Rush)' : 'Zlaté valouny (Zlatá horečka)'}</div>
            <div class="tracker-counter-val" style="color: #f39c12;">${trackerState.gold}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-gold-minus">−</button>
              <button type="button" class="btn-counter" id="btn-gold-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #e67e22;">
            <div class="tracker-tile-title">🟧 ${isEn ? 'Load Cubes (Armed & Dangerous)' : 'Žetony nabití (Ozbrojení)'}</div>
            <div class="tracker-counter-val" style="color: #e67e22;">${trackerState.cubes}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-cubes-minus">−</button>
              <button type="button" class="btn-counter" id="btn-cubes-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #2980b9;">
            <div class="tracker-tile-title">🃏 ${isEn ? 'Cards in Hand' : 'Karet v ruce'}</div>
            <div class="tracker-counter-val" style="color: #2980b9;">${trackerState.hand}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-hand-minus">−</button>
              <button type="button" class="btn-counter" id="btn-hand-plus">+</button>
            </div>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding: 1rem 1.25rem; border-radius: var(--radius-sm); font-weight: 700; display: flex; align-items: center; gap: 0.6rem; ${handWarning ? 'background: rgba(192, 57, 43, 0.15); border: 1.5px solid #c0392b; color: #c0392b;' : 'background: rgba(39, 174, 96, 0.15); border: 1.5px solid #27ae60; color: #27ae60;'}">
          <span>${handWarning ? '⚠️' : '✅'}</span>
          <span>
            ${handWarning
              ? (isEn ? `Discard warning: You have ${trackerState.hand} cards in hand, but only ${trackerState.lives} lives! Discard ${trackerState.hand - trackerState.lives} cards at turn end.` : `Pozor na limit: Máš v ruce ${trackerState.hand} karet, ale jen ${trackerState.lives} životů! Ve 3. fázi musíš odhodit ${trackerState.hand - trackerState.lives} karet.`)
              : (isEn ? `Hand limit OK: You can keep up to ${trackerState.lives} cards in hand at end of turn.` : `Limit v pořádku: Na konci tahu ve 3. fázi smíš v ruce držet až ${trackerState.lives} karet.`)}
          </span>
        </div>
      </div>
    `;

    document.getElementById('chk-tracker-sheriff').addEventListener('change', (e) => {
      trackerState.isSheriff = e.target.checked;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-reset-tracker').addEventListener('click', () => {
      trackerState.lives = 4;
      trackerState.gold = 0;
      trackerState.cubes = 0;
      trackerState.hand = 4;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-lives-minus').addEventListener('click', () => {
      if (trackerState.lives > 0) {
        trackerState.lives--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-lives-plus').addEventListener('click', () => {
      if (trackerState.lives < effectiveMaxLives + 2) {
        trackerState.lives++;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-gold-minus').addEventListener('click', () => {
      if (trackerState.gold > 0) {
        trackerState.gold--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-gold-plus').addEventListener('click', () => {
      trackerState.gold++;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-cubes-minus').addEventListener('click', () => {
      if (trackerState.cubes > 0) {
        trackerState.cubes--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-cubes-plus').addEventListener('click', () => {
      trackerState.cubes++;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-hand-minus').addEventListener('click', () => {
      if (trackerState.hand > 0) {
        trackerState.hand--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-hand-plus').addEventListener('click', () => {
      trackerState.hand++;
      renderPlayerBoard(container);
    });
  }

  // =========================================================================
  // 6. MATCH TRACKER & PARTY STATISTICS
  // =========================================================================
  const matchTrackerState = {
    showForm: false,
    form: {
      winner: 'sheriff',
      playersCount: 5,
      sheriffChar: '',
      mvpChar: '',
      durationMin: 35,
      notes: ''
    }
  };

  function renderMatchTracker(container) {
    const isEn = state.lang === 'en';
    const tracker = window.BANG_TOOLS ? window.BANG_TOOLS.MatchTracker : null;
    const matches = tracker ? tracker.getAll() : [];
    const stats = tracker ? tracker.getStats() : {
      total: 0, sheriffWins: 0, outlawWins: 0, renegadeWins: 0, ironhorseWins: 0,
      sheriffPct: 0, outlawPct: 0, renegadePct: 0, ironhorsePct: 0, topMvp: []
    };

    const allChars = (window.BANG_CARDS || [])
      .filter(c => c.type === 'character')
      .sort((a, b) => a.name.localeCompare(b.name));

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2>${isEn ? 'Match Tracker & Party Stats' : 'Zápisník partií & statistiky party'}</h2>
            <p class="tool-card-lead">
              ${isEn 
                ? 'Record your game results, track win rates by role (Law, Outlaws, Renegade), and immortalize your table’s MVP gunfighters!'
                : 'Zapisujte výsledky svých her, sledujte poměr výher jednotlivých rolí a zjistěte, který pistolník je ve vaší partě nejúspěšnější!'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-toggle-match-form" class="btn-primary" style="padding: 0.6rem 1.1rem; font-size: 0.95rem; border-radius: 8px; font-weight: bold; display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
              ${matchTrackerState.showForm ? (isEn ? '✖ Close Form' : '✖ Zavřít formulář') : (isEn ? '➕ Record New Match' : '➕ Zapsat novou partii')}
            </button>
            ${matches.length > 0 ? `
              <button type="button" id="btn-export-matches" style="background: var(--bg-surface); border: 1px solid var(--border-color); padding: 0.6rem 0.9rem; font-size: 0.88rem; border-radius: 8px; cursor: pointer;">
                📥 ${isEn ? 'Export JSON' : 'Export JSON'}
              </button>
              <button type="button" id="btn-clear-matches" style="background: var(--bg-surface); border: 1px solid #e74c3c; color: #e74c3c; padding: 0.6rem 0.9rem; font-size: 0.88rem; border-radius: 8px; cursor: pointer;">
                🗑️ ${isEn ? 'Clear All' : 'Smazat vše'}
              </button>
            ` : ''}
          </div>
        </div>

        <!-- SUMMARY STATS OVERVIEW -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
          <!-- LAW / SHERIFF -->
          <div style="background: var(--bg-surface); border: 2px solid #f1c40f; border-radius: 10px; padding: 1.2rem; text-align: center; box-shadow: var(--shadow-sm);">
            <div style="font-size: 2rem; margin-bottom: 0.3rem;">⭐️</div>
            <div style="font-weight: bold; color: var(--color-brown); font-size: 0.95rem;">${isEn ? 'Law (Sheriff)' : 'Zákon (Šerif)'}</div>
            <div style="font-size: 1.8rem; font-weight: bold; color: #d4ac0d; margin: 0.3rem 0;">${stats.sheriffPct}%</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">${stats.sheriffWins} ${isEn ? 'wins' : 'výher'} / ${stats.total}</div>
          </div>

          <!-- OUTLAWS -->
          <div style="background: var(--bg-surface); border: 2px solid #e74c3c; border-radius: 10px; padding: 1.2rem; text-align: center; box-shadow: var(--shadow-sm);">
            <div style="font-size: 2rem; margin-bottom: 0.3rem;">💀</div>
            <div style="font-weight: bold; color: var(--color-brown); font-size: 0.95rem;">${isEn ? 'Outlaws' : 'Bandité'}</div>
            <div style="font-size: 1.8rem; font-weight: bold; color: #c0392b; margin: 0.3rem 0;">${stats.outlawPct}%</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">${stats.outlawWins} ${isEn ? 'wins' : 'výher'} / ${stats.total}</div>
          </div>

          <!-- RENEGADE -->
          <div style="background: var(--bg-surface); border: 2px solid #9b59b6; border-radius: 10px; padding: 1.2rem; text-align: center; box-shadow: var(--shadow-sm);">
            <div style="font-size: 2rem; margin-bottom: 0.3rem;">🤠</div>
            <div style="font-weight: bold; color: var(--color-brown); font-size: 0.95rem;">${isEn ? 'Renegade' : 'Odpadlík'}</div>
            <div style="font-size: 1.8rem; font-weight: bold; color: #8e44ad; margin: 0.3rem 0;">${stats.renegadePct}%</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">${stats.renegadeWins} ${isEn ? 'wins' : 'výher'} / ${stats.total}</div>
          </div>

          <!-- IRONHORSE (TRAIN EXPANSION) -->
          <div style="background: var(--bg-surface); border: 2px solid #e67e22; border-radius: 10px; padding: 1.2rem; text-align: center; box-shadow: var(--shadow-sm);">
            <div style="font-size: 2rem; margin-bottom: 0.3rem;">🚂</div>
            <div style="font-weight: bold; color: var(--color-brown); font-size: 0.95rem;">${isEn ? 'Ironhorse' : 'Železný oř'}</div>
            <div style="font-size: 1.8rem; font-weight: bold; color: #d35400; margin: 0.3rem 0;">${stats.ironhorsePct}%</div>
            <div style="font-size: 0.82rem; color: var(--text-muted);">${stats.ironhorseWins} ${isEn ? 'wins' : 'výher'} / ${stats.total}</div>
          </div>
        </div>

        <!-- TOP MVP HEROES STRIP -->
        ${stats.topMvp && stats.topMvp.length > 0 ? `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.8rem;">
            <div style="font-size: 0.92rem; font-weight: bold; color: var(--color-brown); display: flex; align-items: center; gap: 0.4rem;">
              🎖️ ${isEn ? 'Most Frequent MVP Gunfighters:' : 'Nejčastější hvězdy zápasu (MVP):'}
            </div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${stats.topMvp.map(m => `
                <span style="background: rgba(212, 172, 13, 0.15); border: 1px solid #d4ac0d; border-radius: 16px; padding: 0.25rem 0.75rem; font-size: 0.85rem; font-weight: 500;">
                  🤠 ${m.name} <strong>(${m.count}×)</strong>
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- FORM MODAL / COLLAPSIBLE -->
        ${matchTrackerState.showForm ? `
          <div style="background: var(--bg-surface); border: 2px solid var(--color-gold); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-md);">
            <h3 style="font-family: 'Georgia', serif; color: var(--color-brown); margin-bottom: 1.25rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
              📝 ${isEn ? 'Record Game Result' : 'Záznam odehrané hry'}
            </h3>

            <!-- WINNER SELECTOR -->
            <div style="margin-bottom: 1.25rem;">
              <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem;">
                ${isEn ? 'Winning Team / Role:' : 'Vítězná strana / role:'}
              </label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.6rem;">
                ${[
                  { id: 'sheriff', labelCs: '⭐️ Šerif & Zákon', labelEn: '⭐️ Law & Sheriff', color: '#f1c40f' },
                  { id: 'outlaws', labelCs: '💀 Bandité', labelEn: '💀 Outlaws', color: '#e74c3c' },
                  { id: 'renegade', labelCs: '🤠 Odpadlík', labelEn: '🤠 Renegade', color: '#9b59b6' },
                  { id: 'ironhorse', labelCs: '🚂 Železný oř', labelEn: '🚂 Ironhorse', color: '#e67e22' }
                ].map(r => `
                  <button type="button" class="btn-winner-opt ${matchTrackerState.form.winner === r.id ? 'active' : ''}"
                          data-winner="${r.id}"
                          style="padding: 0.75rem; border-radius: 8px; border: 2px solid ${matchTrackerState.form.winner === r.id ? r.color : 'var(--border-color)'}; background: ${matchTrackerState.form.winner === r.id ? r.color : 'var(--bg-card)'}; color: ${matchTrackerState.form.winner === r.id ? '#fff' : 'inherit'}; cursor: pointer; font-weight: bold; font-size: 0.9rem; transition: all 0.2s;">
                    ${isEn ? r.labelEn : r.labelCs}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- ROW: PLAYERS & DURATION -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
              <div>
                <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.4rem;">
                  👥 ${isEn ? 'Number of Players:' : 'Počet hráčů:'}
                </label>
                <select id="inp-match-players" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); font-size: 0.95rem;">
                  ${[3, 4, 5, 6, 7, 8].map(n => `
                    <option value="${n}" ${matchTrackerState.form.playersCount === n ? 'selected' : ''}>
                      ${n} ${isEn ? 'players' : 'hráčů'}
                    </option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.4rem;">
                  ⏱️ ${isEn ? 'Duration (minutes):' : 'Doba hry (minuty):'}
                </label>
                <input type="number" id="inp-match-duration" value="${matchTrackerState.form.durationMin}" min="5" max="300" step="5" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); font-size: 0.95rem;">
              </div>
            </div>

            <!-- ROW: SHERIFF CHAR & MVP CHAR -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
              <div>
                <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.4rem;">
                  ⭐️ ${isEn ? 'Sheriff Character:' : 'Postava Šerifa:'}
                </label>
                <select id="inp-match-sheriff" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); font-size: 0.95rem;">
                  <option value="">${isEn ? '-- Select Sheriff --' : '-- Vyber Šerifa --'}</option>
                  ${allChars.map(c => `
                    <option value="${c.name}" ${matchTrackerState.form.sheriffChar === c.name ? 'selected' : ''}>${c.name}</option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.4rem;">
                  🎖️ ${isEn ? 'MVP / Match Hero:' : 'MVP / Hvězda zápasu:'}
                </label>
                <select id="inp-match-mvp" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); font-size: 0.95rem;">
                  <option value="">${isEn ? '-- Select MVP --' : '-- Vyber MVP --'}</option>
                  ${allChars.map(c => `
                    <option value="${c.name}" ${matchTrackerState.form.mvpChar === c.name ? 'selected' : ''}>${c.name}</option>
                  `).join('')}
                </select>
              </div>
            </div>

            <!-- NOTES -->
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.4rem;">
                💬 ${isEn ? 'Notes / Epic Moments:' : 'Poznámka / Památné okamžiky:'}
              </label>
              <input type="text" id="inp-match-notes" placeholder="${isEn ? 'e.g. Dynamite killed 2 players in round 3!' : 'např. Šerif přežil s 1 HP, Dynamit explodoval v duelu!'}" value="${matchTrackerState.form.notes}" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); font-size: 0.95rem;">
            </div>

            <div style="display: flex; gap: 0.8rem; justify-content: flex-end;">
              <button type="button" id="btn-cancel-match" style="padding: 0.65rem 1.25rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); cursor: pointer; font-weight: 500;">
                ${isEn ? 'Cancel' : 'Zrušit'}
              </button>
              <button type="button" id="btn-save-match" class="btn-primary" style="padding: 0.65rem 1.5rem; border-radius: 6px; font-weight: bold; cursor: pointer;">
                💾 ${isEn ? 'Save Match' : 'Uložit partii'}
              </button>
            </div>
          </div>
        ` : ''}

        <!-- MATCH HISTORY LIST -->
        <div>
          <h3 style="font-family: 'Georgia', serif; font-size: 1.15rem; color: var(--color-brown); margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
            📜 ${isEn ? 'Recorded Matches' : 'Odehrané partie'} (${matches.length})
          </h3>

          ${matches.length === 0 ? `
            <div style="text-align: center; padding: 3rem 1rem; background: var(--bg-surface); border-radius: 10px; border: 1px dashed var(--border-color); color: var(--text-muted);">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📭</div>
              <div style="font-size: 1.05rem; font-weight: bold; margin-bottom: 0.3rem;">
                ${isEn ? 'No matches recorded yet!' : 'Zatím žádné odehrané partie v zápisníku!'}
              </div>
              <div style="font-size: 0.9rem;">
                ${isEn ? 'Click "Record New Match" above to save your first game.' : 'Klikněte na "Zapsat novou partii" výše a uložte svůj první výsledek.'}
              </div>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              ${matches.map(m => {
                const winnerBadge = {
                  sheriff: { icon: '⭐️', labelCs: 'Zákon / Šerif', labelEn: 'Law / Sheriff', color: '#f1c40f', bg: 'rgba(241, 196, 15, 0.15)' },
                  outlaws: { icon: '💀', labelCs: 'Bandité', labelEn: 'Outlaws', color: '#e74c3c', bg: 'rgba(231, 76, 60, 0.15)' },
                  renegade: { icon: '🤠', labelCs: 'Odpadlík', labelEn: 'Renegade', color: '#9b59b6', bg: 'rgba(155, 89, 182, 0.15)' },
                  ironhorse: { icon: '🚂', labelCs: 'Železný oř', labelEn: 'Ironhorse', color: '#e67e22', bg: 'rgba(230, 126, 34, 0.15)' }
                }[m.winner] || { icon: '🏆', labelCs: 'Neznámý', labelEn: 'Unknown', color: '#999', bg: 'rgba(0,0,0,0.05)' };

                return `
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 10px; padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem;">
                        <span style="background: ${winnerBadge.bg}; color: ${winnerBadge.color}; border: 1px solid ${winnerBadge.color}; border-radius: 16px; padding: 0.2rem 0.65rem; font-weight: bold; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.3rem;">
                          ${winnerBadge.icon} ${isEn ? winnerBadge.labelEn : winnerBadge.labelCs}
                        </span>
                        <span style="font-size: 0.82rem; color: var(--text-muted);">
                          📅 ${m.dateFormatted || ''} • 👥 ${m.playersCount || '?'} ${isEn ? 'players' : 'hráčů'} • ⏱️ ${m.durationMin || '?'} min
                        </span>
                      </div>
                      <div style="font-size: 0.88rem; display: flex; gap: 1.2rem; flex-wrap: wrap;">
                        ${m.sheriffChar ? `<span>⭐️ <strong>${isEn ? 'Sheriff' : 'Šerif'}:</strong> ${m.sheriffChar}</span>` : ''}
                        ${m.mvpChar ? `<span>🎖️ <strong>MVP:</strong> ${m.mvpChar}</span>` : ''}
                      </div>
                      ${m.notes ? `
                        <div style="font-size: 0.84rem; font-style: italic; color: var(--text-muted); margin-top: 0.35rem;">
                          "${m.notes}"
                        </div>
                      ` : ''}
                    </div>

                    <button type="button" class="btn-del-match" data-id="${m.id}" title="${isEn ? 'Delete match' : 'Smazat záznam'}" style="background: none; border: none; font-size: 1.1rem; opacity: 0.6; cursor: pointer; padding: 0.4rem; transition: opacity 0.2s;">
                      🗑️
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    // Event listeners
    const btnToggle = document.getElementById('btn-toggle-match-form');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => {
        matchTrackerState.showForm = !matchTrackerState.showForm;
        renderMatchTracker(container);
      });
    }

    const btnCancel = document.getElementById('btn-cancel-match');
    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        matchTrackerState.showForm = false;
        renderMatchTracker(container);
      });
    }

    container.querySelectorAll('.btn-winner-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        matchTrackerState.form.winner = btn.dataset.winner;
        renderMatchTracker(container);
      });
    });

    const btnSave = document.getElementById('btn-save-match');
    if (btnSave) {
      btnSave.addEventListener('click', () => {
        const inpPlayers = document.getElementById('inp-match-players');
        const inpDuration = document.getElementById('inp-match-duration');
        const inpSheriff = document.getElementById('inp-match-sheriff');
        const inpMvp = document.getElementById('inp-match-mvp');
        const inpNotes = document.getElementById('inp-match-notes');

        const matchData = {
          winner: matchTrackerState.form.winner,
          playersCount: inpPlayers ? parseInt(inpPlayers.value, 10) : matchTrackerState.form.playersCount,
          durationMin: inpDuration ? parseInt(inpDuration.value, 10) : matchTrackerState.form.durationMin,
          sheriffChar: inpSheriff ? inpSheriff.value : '',
          mvpChar: inpMvp ? inpMvp.value : '',
          notes: inpNotes ? inpNotes.value.trim() : ''
        };

        if (tracker) {
          tracker.save(matchData);
        }

        matchTrackerState.showForm = false;
        matchTrackerState.form.notes = '';
        renderMatchTracker(container);
      });
    }

    container.querySelectorAll('.btn-del-match').forEach(btn => {
      btn.addEventListener('click', () => {
        const matchId = btn.dataset.id;
        if (confirm(isEn ? 'Delete this match entry?' : 'Opravdu smazat tento záznam partie?')) {
          if (tracker) {
            tracker.delete(matchId);
          }
          renderMatchTracker(container);
        }
      });
    });

    const btnExport = document.getElementById('btn-export-matches');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(matches, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `bang_matches_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

    const btnClear = document.getElementById('btn-clear-matches');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        if (confirm(isEn ? 'Permanently delete ALL recorded matches?' : 'Opravdu trvale smazat celou historii zápisníku?')) {
          if (tracker) {
            tracker.clear();
          }
          renderMatchTracker(container);
        }
      });
    }
  }

  // =========================================================================
  // 7. TURN & DUEL TIMER ("ŠERIFOVY HODINKY & RYCHLÝ DUEL")
  // =========================================================================
  const timerState = {
    mode: 'turn',
    turnDuration: 60,
    timeLeft: 60,
    isRunning: false,
    intervalId: null,
    duelActivePlayer: 1,
    duelTime1: 5,
    duelTime2: 5,
    duelRounds: 0,
    duelRunning: false,
    duelIntervalId: null,
    duelWinner: null
  };

  function renderTurnTimer(container) {
    const isEn = state.lang === 'en';

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2><img src="assets/symbols/symbol_bang.png" class="tool-btn-symbol" alt=""> ${isEn ? 'Saloon Turn Clock & Duel Timer' : 'Šerifovy hodinky & Rychlý Duel'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Keep game pace fast, prevent analysis paralysis, and run rapid-fire 5-second countdowns for duels.'
                : 'Udržujte rychlé tempo hry, zamezte zdlouhavému přemýšlení a zažijte napínavé 5vteřinové duely.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn-timer-mode ${timerState.mode === 'turn' ? 'active' : ''}" data-mode="turn"
                    style="padding: 0.55rem 1rem; border-radius: 20px; border: 1.5px solid ${timerState.mode === 'turn' ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${timerState.mode === 'turn' ? 'var(--color-gold)' : 'var(--bg-surface)'}; color: ${timerState.mode === 'turn' ? '#fff' : 'inherit'}; cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              ${isEn ? 'Turn Clock' : 'Hodinky tahu'}
            </button>
            <button type="button" class="btn-timer-mode ${timerState.mode === 'duel' ? 'active' : ''}" data-mode="duel"
                    style="padding: 0.55rem 1rem; border-radius: 20px; border: 1.5px solid ${timerState.mode === 'duel' ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${timerState.mode === 'duel' ? 'var(--color-gold)' : 'var(--bg-surface)'}; color: ${timerState.mode === 'duel' ? '#fff' : 'inherit'}; cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              <img src="assets/symbols/symbol_bang.png" class="rules-symbol-inline" alt=""> ${isEn ? 'Quick Duel (5s)' : 'Bleskový Duel (5s)'}
            </button>
          </div>
        </div>

        ${timerState.mode === 'turn' ? `
          <!-- TURN CLOCK VIEW -->
          <div style="text-align: center; margin-bottom: 2rem;">
            <!-- DURATION CHIPS -->
            <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
              ${[30, 45, 60, 90, 120].map(sec => `
                <button type="button" class="btn-turn-sec ${timerState.turnDuration === sec ? 'active' : ''}" data-sec="${sec}"
                        style="padding: 0.4rem 0.85rem; border-radius: 16px; border: 1px solid ${timerState.turnDuration === sec ? 'var(--color-gold)' : 'var(--border-color)'}; background: ${timerState.turnDuration === sec ? 'var(--color-gold)' : 'var(--bg-surface)'}; color: ${timerState.turnDuration === sec ? '#fff' : 'inherit'}; font-weight: bold; font-size: 0.85rem; cursor: pointer;">
                  ${sec}s
                </button>
              `).join('')}
            </div>

            <!-- WATCH FACE -->
            <div class="timer-dial-box">
              <div class="timer-time-display">${timerState.timeLeft}</div>
              <div class="timer-time-sub">${isEn ? 'Seconds' : 'Vteřin'}</div>
            </div>

            <!-- CONTROLS -->
            <div style="display: flex; justify-content: center; gap: 0.8rem;">
              ${!timerState.isRunning ? `
                <button type="button" id="btn-timer-start" class="btn-primary" style="padding: 0.75rem 2rem; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                  ${isEn ? 'Start Turn' : 'Spustit tah'}
                </button>
              ` : `
                <button type="button" id="btn-timer-pause" style="padding: 0.75rem 2rem; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; background: #e67e22; color: #fff; border: none; display: inline-flex; align-items: center; gap: 0.5rem;">
                  ${isEn ? 'Pause' : 'Pozastavit'}
                </button>
              `}
              <button type="button" id="btn-timer-reset" style="padding: 0.75rem 1.4rem; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer; background: var(--bg-surface); border: 1px solid var(--border-color);">
                ${isEn ? 'Reset' : 'Reset'}
              </button>
            </div>
          </div>
        ` : `
          <!-- DUEL CLOCK VIEW -->
          <div>
            <div style="text-align: center; margin-bottom: 1.5rem;">
              <span style="background: rgba(231, 76, 60, 0.15); color: #e74c3c; border: 1px solid #e74c3c; padding: 0.35rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.95rem;">
                ⚔️ ${isEn ? 'Duel in Progress' : 'Přestřelka v duelu'} • ${isEn ? 'Rounds:' : 'Výměn:'} ${timerState.duelRounds}
              </span>
            </div>

            <div class="duel-split-container">
              <!-- PLAYER 1 -->
              <div class="duel-player-card ${timerState.duelActivePlayer === 1 && timerState.duelRunning ? 'active-turn' : ''}">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤠</div>
                <div style="font-weight: bold; font-size: 1.2rem; color: var(--color-brown);">${isEn ? 'Player 1' : 'Hráč 1 (Vyzývatel)'}</div>
                <div style="font-size: 3.5rem; font-family: 'Impact', monospace; font-weight: bold; color: ${timerState.duelTime1 <= 2 ? '#e74c3c' : 'inherit'}; margin: 0.5rem 0;">
                  ${timerState.duelTime1}s
                </div>
                <button type="button" id="btn-duel-p1" class="btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem; font-weight: bold; border-radius: 8px; cursor: pointer; margin-bottom: 0.6rem;" ${timerState.duelActivePlayer !== 1 || !timerState.duelRunning ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
                  ${isEn ? 'DISCARD BANG!' : 'ODHODIT BANG!'}
                </button>
                <button type="button" class="btn-duel-giveup" data-p="1" style="background: none; border: none; font-size: 0.82rem; color: #e74c3c; cursor: pointer; text-decoration: underline;">
                  ${isEn ? 'No BANG! / Hit!' : 'Nemám BANG! / Zásah!'}
                </button>
              </div>

              <!-- PLAYER 2 -->
              <div class="duel-player-card ${timerState.duelActivePlayer === 2 && timerState.duelRunning ? 'active-turn' : ''}">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤠</div>
                <div style="font-weight: bold; font-size: 1.2rem; color: var(--color-brown);">${isEn ? 'Player 2' : 'Hráč 2 (Obránce)'}</div>
                <div style="font-size: 3.5rem; font-family: 'Impact', monospace; font-weight: bold; color: ${timerState.duelTime2 <= 2 ? '#e74c3c' : 'inherit'}; margin: 0.5rem 0;">
                  ${timerState.duelTime2}s
                </div>
                <button type="button" id="btn-duel-p2" class="btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem; font-weight: bold; border-radius: 8px; cursor: pointer; margin-bottom: 0.6rem;" ${timerState.duelActivePlayer !== 2 || !timerState.duelRunning ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''}>
                  ${isEn ? 'DISCARD BANG!' : 'ODHODIT BANG!'}
                </button>
                <button type="button" class="btn-duel-giveup" data-p="2" style="background: none; border: none; font-size: 0.82rem; color: #e74c3c; cursor: pointer; text-decoration: underline;">
                  ${isEn ? 'No BANG! / Hit!' : 'Nemám BANG! / Zásah!'}
                </button>
              </div>
            </div>

            <!-- DUEL CONTROLS / RESULT -->
            ${timerState.duelWinner ? `
              <div style="background: rgba(46, 204, 113, 0.15); border: 2px solid #2ecc71; border-radius: 10px; padding: 1rem; text-align: center; margin-bottom: 1.5rem;">
                <div style="font-size: 1.25rem; font-weight: bold; color: #27ae60;">
                  🏆 ${isEn ? `Duel Won by Player ${timerState.duelWinner}!` : `Duel vyhrál Hráč ${timerState.duelWinner}!`}
                </div>
                <div style="font-size: 0.9rem; margin-top: 0.25rem;">
                  ${isEn ? `The other player was hit and loses 1 life point!` : `Poražený hráč byl zasažen a ztrácí 1 život!`}
                </div>
              </div>
            ` : ''}

            <div style="display: flex; justify-content: center; gap: 0.8rem;">
              ${!timerState.duelRunning ? `
                <button type="button" id="btn-duel-start" class="btn-primary" style="padding: 0.75rem 2rem; border-radius: 30px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">
                  ⚔️ ${isEn ? 'Start Duel!' : 'Zahájit Duel!'}
                </button>
              ` : `
                <button type="button" id="btn-duel-stop" style="padding: 0.75rem 1.5rem; border-radius: 30px; font-weight: bold; cursor: pointer; background: var(--bg-surface); border: 1px solid var(--border-color);">
                  ${isEn ? 'Cancel Duel' : 'Ukončit duel'}
                </button>
              `}
            </div>
          </div>
        `}
      </div>
    `;

    // Event handlers for Turn Timer
    container.querySelectorAll('.btn-timer-mode').forEach(b => {
      b.addEventListener('click', () => {
        timerState.mode = b.dataset.mode;
        renderTurnTimer(container);
      });
    });

    container.querySelectorAll('.btn-turn-sec').forEach(b => {
      b.addEventListener('click', () => {
        timerState.turnDuration = parseInt(b.dataset.sec, 10);
        timerState.timeLeft = timerState.turnDuration;
        if (timerState.intervalId) {
          clearInterval(timerState.intervalId);
          timerState.intervalId = null;
          timerState.isRunning = false;
        }
        renderTurnTimer(container);
      });
    });

    const btnStart = document.getElementById('btn-timer-start');
    if (btnStart) {
      btnStart.addEventListener('click', () => {
        timerState.isRunning = true;
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.playBell();
        }
        timerState.intervalId = setInterval(() => {
          if (timerState.timeLeft > 0) {
            timerState.timeLeft--;
            const disp = container.querySelector('.timer-time-display');
            if (disp) disp.textContent = timerState.timeLeft;
            if (timerState.timeLeft === 0) {
              clearInterval(timerState.intervalId);
              timerState.intervalId = null;
              timerState.isRunning = false;
              if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
                window.BANG_TOOLS.SoundFX.playWilhelm();
              }
              renderTurnTimer(container);
            }
          }
        }, 1000);
        renderTurnTimer(container);
      });
    }

    const btnPause = document.getElementById('btn-timer-pause');
    if (btnPause) {
      btnPause.addEventListener('click', () => {
        if (timerState.intervalId) {
          clearInterval(timerState.intervalId);
          timerState.intervalId = null;
        }
        timerState.isRunning = false;
        renderTurnTimer(container);
      });
    }

    const btnReset = document.getElementById('btn-timer-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (timerState.intervalId) {
          clearInterval(timerState.intervalId);
          timerState.intervalId = null;
        }
        timerState.isRunning = false;
        timerState.timeLeft = timerState.turnDuration;
        renderTurnTimer(container);
      });
    }

    // Duel Event Handlers
    const startDuelTimer = () => {
      if (timerState.duelIntervalId) clearInterval(timerState.duelIntervalId);
      timerState.duelIntervalId = setInterval(() => {
        if (timerState.duelActivePlayer === 1) {
          if (timerState.duelTime1 > 0) {
            timerState.duelTime1--;
            renderTurnTimer(container);
            if (timerState.duelTime1 === 0) {
              clearInterval(timerState.duelIntervalId);
              timerState.duelRunning = false;
              timerState.duelWinner = 2;
              if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playShot();
              renderTurnTimer(container);
            }
          }
        } else {
          if (timerState.duelTime2 > 0) {
            timerState.duelTime2--;
            renderTurnTimer(container);
            if (timerState.duelTime2 === 0) {
              clearInterval(timerState.duelIntervalId);
              timerState.duelRunning = false;
              timerState.duelWinner = 1;
              if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playShot();
              renderTurnTimer(container);
            }
          }
        }
      }, 1000);
    };

    const btnDuelStart = document.getElementById('btn-duel-start');
    if (btnDuelStart) {
      btnDuelStart.addEventListener('click', () => {
        timerState.duelRunning = true;
        timerState.duelWinner = null;
        timerState.duelRounds = 0;
        timerState.duelActivePlayer = 1;
        timerState.duelTime1 = 5;
        timerState.duelTime2 = 5;
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playDuel();
        startDuelTimer();
        renderTurnTimer(container);
      });
    }

    const btnDuelP1 = document.getElementById('btn-duel-p1');
    if (btnDuelP1) {
      btnDuelP1.addEventListener('click', () => {
        if (!timerState.duelRunning || timerState.duelActivePlayer !== 1) return;
        timerState.duelRounds++;
        timerState.duelActivePlayer = 2;
        timerState.duelTime1 = 5;
        timerState.duelTime2 = 5;
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playShot();
        renderTurnTimer(container);
      });
    }

    const btnDuelP2 = document.getElementById('btn-duel-p2');
    if (btnDuelP2) {
      btnDuelP2.addEventListener('click', () => {
        if (!timerState.duelRunning || timerState.duelActivePlayer !== 2) return;
        timerState.duelRounds++;
        timerState.duelActivePlayer = 1;
        timerState.duelTime1 = 5;
        timerState.duelTime2 = 5;
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playShot();
        renderTurnTimer(container);
      });
    }

    container.querySelectorAll('.btn-duel-giveup').forEach(b => {
      b.addEventListener('click', () => {
        const giveupP = parseInt(b.dataset.p, 10);
        if (timerState.duelIntervalId) clearInterval(timerState.duelIntervalId);
        timerState.duelRunning = false;
        timerState.duelWinner = giveupP === 1 ? 2 : 1;
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playShot();
        renderTurnTimer(container);
      });
    });

    const btnDuelStop = document.getElementById('btn-duel-stop');
    if (btnDuelStop) {
      btnDuelStop.addEventListener('click', () => {
        if (timerState.duelIntervalId) clearInterval(timerState.duelIntervalId);
        timerState.duelRunning = false;
        renderTurnTimer(container);
      });
    }
  }

  // =========================================================================
  // 8. TRAIN ROBBERY BOARD ("VELKÁ VLAKOVÁ LOUPEŽ")
  // =========================================================================
  function renderTrainBoard(container) {
    const isEn = state.lang === 'en';
    const trainMgr = window.BANG_TOOLS ? window.BANG_TOOLS.TrainManager : null;
    const trainData = trainMgr ? trainMgr.getState() : {
      locomotive: { name: 'Leland', effect: 'Lokomotiva', image: 'assets/cards/05_velka_vlakova_loupez/leland.webp' },
      activeWagons: [],
      wagonDeck: [],
      activeStation: { name: 'Stanice Boom Town', effect: 'Odhoď BANG!' },
      movesCount: 0
    };

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2>${isEn ? 'The Great Train Robbery Board' : 'Vlaková souprava & Stanice'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Manage train movement, railcars, station arrivals, and decoupling costs right from your device without table clutter.'
                : 'Posunujte vlak na konci tahu Šerifa, sledujte stanice a odpojujte vagony bez zabírání místa na stole.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-toggle-loco" style="padding: 0.55rem 0.95rem; border-radius: 8px; border: 1.5px solid var(--border-color); background: var(--bg-surface); cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              ${isEn ? 'Flip Locomotive (Leland / Ironhorse)' : 'Otočit lokomotivu'}
            </button>
            <button type="button" id="btn-next-station" style="padding: 0.55rem 0.95rem; border-radius: 8px; border: 1.5px solid var(--border-color); background: var(--bg-surface); cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              ${isEn ? 'Next Station' : 'Další stanice'}
            </button>
          </div>
        </div>

        <!-- TRAIN CONTROL ACTION BAR -->
        <div style="background: radial-gradient(circle at center, #2e1a0f 0%, #170d07 100%); border-radius: 12px; padding: 1.5rem; text-align: center; margin-bottom: 2rem; border: 2px solid #5c3a21; box-shadow: inset 0 2px 10px rgba(0,0,0,0.6);">
          <div style="font-size: 0.85rem; color: #ffcc00; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.4rem;">
            ${isEn ? 'Sheriff Turn Action' : 'Akce na konci tahu Šerifa'} • ${isEn ? 'Total Moves:' : 'Ujetých kroků:'} <strong>${trainData.movesCount}</strong>
          </div>
          <button type="button" id="btn-advance-train" class="btn-primary" style="padding: 1rem 2.5rem; font-size: 1.25rem; font-weight: bold; border-radius: 30px; border: 2px solid #ffcc00; cursor: pointer; display: inline-flex; align-items: center; gap: 0.6rem; box-shadow: 0 6px 20px rgba(0,0,0,0.5); transition: transform 0.15s;">
            ${isEn ? 'ADVANCE TRAIN (End of Sheriff Turn)' : 'POSUNOUT VLAK (Konec tahu Šerifa)'}
          </button>
        </div>

        <!-- ROW: LOCOMOTIVE & CURRENT STATION -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <!-- ACTIVE LOCOMOTIVE -->
          <div style="background: var(--bg-surface); border: 2px solid #d35400; border-radius: 12px; padding: 1.25rem;">
            <div style="font-size: 0.82rem; font-weight: bold; color: #d35400; text-transform: uppercase; margin-bottom: 0.4rem;">
              ${isEn ? 'Active Locomotive' : 'Aktivní lokomotiva soupravy'}
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
              ${trainData.locomotive && trainData.locomotive.image ? `
                <img src="${trainData.locomotive.image}" alt="${trainData.locomotive.name}" style="width: 80px; height: 120px; object-fit: contain; border-radius: 6px; border: 1px solid var(--border-color); background: #fff;">
              ` : ''}
              <div>
                <h3 style="margin-bottom: 0.35rem; color: var(--color-brown); font-family: 'Georgia', serif;">${trainData.locomotive.name}</h3>
                <div style="font-size: 0.85rem; line-height: 1.45; color: var(--text-muted);">
                  ${isEn ? (trainData.locomotive.effectEn || trainData.locomotive.effect) : trainData.locomotive.effect}
                </div>
              </div>
            </div>
          </div>

          <!-- ACTIVE STATION -->
          <div style="background: var(--bg-surface); border: 2px solid #2980b9; border-radius: 12px; padding: 1.25rem;">
            <div style="font-size: 0.82rem; font-weight: bold; color: #2980b9; text-transform: uppercase; margin-bottom: 0.4rem;">
              ${isEn ? 'Current Station' : 'Aktuální stanice'}
            </div>
            <div style="display: flex; gap: 1rem; align-items: flex-start;">
              ${trainData.activeStation && trainData.activeStation.image ? `
                <img src="${trainData.activeStation.image}" alt="${trainData.activeStation.name}" style="width: 80px; height: 120px; object-fit: contain; border-radius: 6px; border: 1px solid var(--border-color); background: #fff;">
              ` : ''}
              <div>
                <h3 style="margin-bottom: 0.35rem; color: var(--color-brown); font-family: 'Georgia', serif;">${trainData.activeStation ? trainData.activeStation.name : 'Stanice'}</h3>
                ${trainData.activeStation && trainData.activeStation.cost ? `
                  <div style="font-size: 0.85rem; font-weight: bold; color: #e67e22; margin-bottom: 0.3rem;">
                    ${isEn ? 'Cost:' : 'Cena za odpojení:'} ${trainData.activeStation.cost}
                  </div>
                ` : ''}
                <div style="font-size: 0.85rem; line-height: 1.45; color: var(--text-muted);">
                  ${trainData.activeStation ? (isEn ? (trainData.activeStation.effectEn || trainData.activeStation.effect) : trainData.activeStation.effect) : ''}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TRAIN CARS (WAGONS) ON TRACK -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <h3 style="font-family: 'Georgia', serif; font-size: 1.15rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.4rem;">
              ${isEn ? 'Attached Railcars (Wagons on Track):' : 'Napojené vagony na kolejích:'}
            </h3>
            <span style="font-size: 0.82rem; color: var(--text-muted);">
              ${isEn ? 'Wagons left in deck:' : 'Vagonů v balíčku:'} ${trainData.wagonDeck ? trainData.wagonDeck.length : 0}
            </span>
          </div>

          <div class="train-track-container">
            ${trainData.activeWagons && trainData.activeWagons.length > 0 ? trainData.activeWagons.map((w, idx) => `
              <div class="train-wagon-card">
                <div>
                  ${w.image ? `<img src="${w.image}" alt="${w.name}" style="width: 100%; height: 130px; object-fit: contain; border-radius: 4px; margin-bottom: 0.5rem; background: #fff;">` : ''}
                  <div style="font-weight: bold; font-size: 0.92rem; color: var(--color-brown); margin-bottom: 0.25rem;">${w.name}</div>
                  <div style="font-size: 0.78rem; line-height: 1.35; color: var(--text-muted); margin-bottom: 0.5rem;">
                    ${isEn ? (w.effectEn || w.effect) : w.effect}
                  </div>
                </div>
                <button type="button" class="btn-detach-wagon" data-idx="${idx}" style="width: 100%; padding: 0.45rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); cursor: pointer; font-size: 0.82rem; font-weight: bold;">
                  ✂️ ${isEn ? 'Detach / Claim' : 'Odpojit / Koupit'}
                </button>
              </div>
            `).join('') : `
              <div style="padding: 2rem; color: var(--text-muted); text-align: center; width: 100%;">
                ${isEn ? 'All wagons have been detached!' : 'Všechny vagony byly odpojeny!'}
              </div>
            `}
          </div>
        </div>
      </div>
    `;

    // Event handlers for Train
    const btnAdv = document.getElementById('btn-advance-train');
    if (btnAdv) {
      btnAdv.addEventListener('click', () => {
        if (!trainMgr) return;
        trainMgr.advance();
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.playTrain();
        }
        renderTrainBoard(container);
      });
    }

    const btnTogLoco = document.getElementById('btn-toggle-loco');
    if (btnTogLoco) {
      btnTogLoco.addEventListener('click', () => {
        if (!trainMgr) return;
        trainMgr.toggleLocomotive();
        renderTrainBoard(container);
      });
    }

    const btnNextSt = document.getElementById('btn-next-station');
    if (btnNextSt) {
      btnNextSt.addEventListener('click', () => {
        if (!trainMgr) return;
        trainMgr.nextStation();
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.playBell();
        }
        renderTrainBoard(container);
      });
    }

    container.querySelectorAll('.btn-detach-wagon').forEach(b => {
      b.addEventListener('click', () => {
        if (!trainMgr) return;
        const idx = parseInt(b.dataset.idx, 10);
        trainMgr.detachWagon(idx);
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.playRicochet();
        }
        renderTrainBoard(container);
      });
    });
  }

  // =========================================================================
  // 9. LEGENDS & FEATS TRACKER ("SPRÁVCE LEGEND A ČINŮ")
  // =========================================================================
  const legendsState = {
    selectedCharNames: [
      'Legendární Willy the Kid',
      'Legendární Calamity Janet',
      'Legendární Slab the Killer'
    ],
    charData: {}
  };

  function renderLegendsTracker(container) {
    const isEn = state.lang === 'en';
    const allLegendChars = (window.BANG_CARDS || [])
      .filter(c => c.type === 'legend-character')
      .sort((a, b) => a.name.localeCompare(b.name));
    const allFeats = (window.BANG_CARDS || []).filter(c => c.type === 'feat');

    // Ensure data exists for active characters
    legendsState.selectedCharNames.forEach((name, idx) => {
      if (!legendsState.charData[name]) {
        // Assign default 3 feats based on index
        const feat1 = allFeats[(idx * 3) % allFeats.length] || allFeats[0];
        const feat2 = allFeats[(idx * 3 + 1) % allFeats.length] || allFeats[1];
        const feat3 = allFeats[(idx * 3 + 2) % allFeats.length] || allFeats[2];

        legendsState.charData[name] = {
          fame: 0,
          isLegend: false,
          feats: [
            { id: feat1 ? feat1.id : 'f1', name: feat1 ? (isEn ? feat1.nameEn : feat1.name) : 'Čin 1', effect: feat1 ? (isEn ? (feat1.effectEn || feat1.effect) : feat1.effect) : '', status: 'uncompleted' },
            { id: feat2 ? feat2.id : 'f2', name: feat2 ? (isEn ? feat2.nameEn : feat2.name) : 'Čin 2', effect: feat2 ? (isEn ? (feat2.effectEn || feat2.effect) : feat2.effect) : '', status: 'uncompleted' },
            { id: feat3 ? feat3.id : 'f3', name: feat3 ? (isEn ? feat3.nameEn : feat3.name) : 'Čin 3', effect: feat3 ? (isEn ? (feat3.effectEn || feat3.effect) : feat3.effect) : '', status: 'uncompleted' }
          ]
        };
      }
    });

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2>${isEn ? 'Legends & Feats Tracker' : 'Správce činů a slávy pro Legendy'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Track Fame tokens, manage Feat cards, usurpation by rivals, and legendary side flips without table chaos.'
                : 'Spravujte žetony slávy, plnění a přivlastňování činů a otočení postav na Legendární stranu.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <select id="sel-add-legend-char" style="padding: 0.5rem 0.8rem; border-radius: 8px; border: 1.5px solid var(--border-color); background: var(--bg-surface); font-size: 0.88rem;">
              <option value="">${isEn ? '+ Add Character at Table...' : '+ Přidat postavu ke stolu...'}</option>
              ${allLegendChars
                .filter(c => !legendsState.selectedCharNames.includes(c.name))
                .map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- CHARACTERS LIST -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${legendsState.selectedCharNames.map(name => {
            const card = allLegendChars.find(c => c.name === name);
            const data = legendsState.charData[name] || { fame: 0, isLegend: false, feats: [] };
            const isFlipped = data.isLegend;

            return `
              <div style="background: var(--bg-surface); border: 2px solid ${isFlipped ? '#f1c40f' : 'var(--border-color)'}; border-radius: 12px; padding: 1.25rem; box-shadow: ${isFlipped ? '0 0 16px rgba(241, 196, 15, 0.25)' : 'var(--shadow-sm)'}; transition: all 0.25s;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
                  <div style="display: flex; gap: 1rem; align-items: center;">
                    ${card && card.image ? `
                      <img src="${card.image}" alt="${name}" style="width: 70px; height: 105px; object-fit: contain; border-radius: 6px; border: 1.5px solid ${isFlipped ? '#f1c40f' : 'var(--border-color)'}; background: #fff;">
                    ` : ''}
                    <div>
                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <h3 style="color: var(--color-brown); font-family: 'Georgia', serif; margin: 0; font-size: 1.2rem;">
                          ${isFlipped ? '🌟 ' : ''}${name}
                        </h3>
                        ${isFlipped ? `
                          <span style="background: #f1c40f; color: #000; font-weight: bold; font-size: 0.75rem; padding: 0.15rem 0.55rem; border-radius: 12px;">
                            ${isEn ? 'LEGEND' : 'LEGENDA'}
                          </span>
                        ` : ''}
                      </div>
                      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                        ${isEn ? (card ? (card.effectEn || card.effect) : '') : (card ? card.effect : '')}
                      </div>
                    </div>
                  </div>

                  <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                    <!-- FAME COUNTER -->
                    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.35rem 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                      <button type="button" class="btn-fame-minus" data-char="${name}" style="background: none; border: none; font-size: 1.1rem; cursor: pointer; padding: 0 4px; font-weight: bold;">-</button>
                      <span style="font-weight: bold; font-size: 0.95rem; color: #d4ac0d; display: flex; align-items: center; gap: 0.25rem;">
                        🪙 ${data.fame} ${isEn ? 'Fame' : 'slávy'}
                      </span>
                      <button type="button" class="btn-fame-plus" data-char="${name}" style="background: none; border: none; font-size: 1.1rem; cursor: pointer; padding: 0 4px; font-weight: bold;">+</button>
                    </div>

                    <!-- FLIP SIDE TOGGLE -->
                    <button type="button" class="btn-toggle-legend-side" data-char="${name}"
                            style="padding: 0.45rem 0.85rem; border-radius: 8px; border: 1.5px solid ${isFlipped ? '#f1c40f' : 'var(--border-color)'}; background: ${isFlipped ? '#f1c40f' : 'var(--bg-card)'}; color: ${isFlipped ? '#000' : 'inherit'}; cursor: pointer; font-weight: bold; font-size: 0.84rem;">
                      ${isFlipped ? (isEn ? '🌟 Legendary Side' : '🌟 Legendární strana') : (isEn ? 'Standard Side' : 'Standardní strana')}
                    </button>

                    <!-- REMOVE CHAR -->
                    <button type="button" class="btn-remove-legend-char" data-char="${name}" title="${isEn ? 'Remove character' : 'Odebrat postavu'}" style="background: none; border: none; opacity: 0.6; cursor: pointer; font-size: 1rem;">
                      ✕
                    </button>
                  </div>
                </div>

                <!-- 3 FEATS CHECKLIST -->
                <div style="border-top: 1px dashed var(--border-color); padding-top: 0.85rem;">
                  <div style="font-size: 0.82rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                    📜 ${isEn ? 'Character Feat Cards (Tap to toggle: Uncompleted ⇄ Completed ⇄ Usurped by rival):' : 'Karty činů postavy (Klepnutím přepínejte: Nesplněn ⇄ Splněn ⇄ Přivlastněn soupeřem):'}
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
                    ${data.feats.map((feat, fIdx) => {
                      const statusBadges = {
                        uncompleted: { icon: '⬜', labelCs: 'Nesplněn', labelEn: 'Uncompleted', color: '#95a5a6', bg: 'var(--bg-card)' },
                        completed: { icon: '✅', labelCs: 'Splněn (Vlastník)', labelEn: 'Completed (Owner)', color: '#2ecc71', bg: 'rgba(46, 204, 113, 0.15)' },
                        usurped: { icon: '⚡', labelCs: 'Přivlastněn soupeřem!', labelEn: 'Usurped by Rival!', color: '#e67e22', bg: 'rgba(230, 126, 34, 0.15)' }
                      };
                      const b = statusBadges[feat.status] || statusBadges.uncompleted;

                      return `
                        <div class="feat-card-box" data-char="${name}" data-feat-idx="${fIdx}"
                             style="background: ${b.bg}; border: 1.5px solid ${b.color}; border-radius: 8px; padding: 0.75rem; cursor: pointer; transition: all 0.2s;">
                          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                            <strong style="font-size: 0.88rem;">${feat.name}</strong>
                            <span style="font-size: 0.78rem; font-weight: bold; color: ${b.color};">${b.icon} ${isEn ? b.labelEn : b.labelCs}</span>
                          </div>
                          <div style="font-size: 0.78rem; line-height: 1.35; color: var(--text-muted);">
                            ${feat.effect || ''}
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Event listeners
    const selAdd = document.getElementById('sel-add-legend-char');
    if (selAdd) {
      selAdd.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val && !legendsState.selectedCharNames.includes(val)) {
          legendsState.selectedCharNames.push(val);
          renderLegendsTracker(container);
        }
      });
    }

    container.querySelectorAll('.btn-remove-legend-char').forEach(b => {
      b.addEventListener('click', () => {
        const charName = b.dataset.char;
        legendsState.selectedCharNames = legendsState.selectedCharNames.filter(n => n !== charName);
        renderLegendsTracker(container);
      });
    });

    container.querySelectorAll('.btn-toggle-legend-side').forEach(b => {
      b.addEventListener('click', () => {
        const charName = b.dataset.char;
        if (legendsState.charData[charName]) {
          legendsState.charData[charName].isLegend = !legendsState.charData[charName].isLegend;
          if (legendsState.charData[charName].isLegend && window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
            window.BANG_TOOLS.SoundFX.playBell();
          }
          renderLegendsTracker(container);
        }
      });
    });

    container.querySelectorAll('.btn-fame-plus').forEach(b => {
      b.addEventListener('click', () => {
        const charName = b.dataset.char;
        if (legendsState.charData[charName]) {
          legendsState.charData[charName].fame++;
          if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) window.BANG_TOOLS.SoundFX.playCoin();
          renderLegendsTracker(container);
        }
      });
    });

    container.querySelectorAll('.btn-fame-minus').forEach(b => {
      b.addEventListener('click', () => {
        const charName = b.dataset.char;
        if (legendsState.charData[charName] && legendsState.charData[charName].fame > 0) {
          legendsState.charData[charName].fame--;
          renderLegendsTracker(container);
        }
      });
    });

    container.querySelectorAll('.feat-card-box').forEach(box => {
      box.addEventListener('click', () => {
        const charName = box.dataset.char;
        const fIdx = parseInt(box.dataset.featIdx, 10);
        if (legendsState.charData[charName] && legendsState.charData[charName].feats[fIdx]) {
          const cycle = ['uncompleted', 'completed', 'usurped'];
          const current = legendsState.charData[charName].feats[fIdx].status;
          const next = cycle[(cycle.indexOf(current) + 1) % cycle.length];
          legendsState.charData[charName].feats[fIdx].status = next;
          if (next === 'completed' && window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
            window.BANG_TOOLS.SoundFX.playBell();
          }
          renderLegendsTracker(container);
        }
      });
    });
  }

  // =========================================================================
  // 10. GOLD RUSH ARMORY ("OBCHOD ZLATÉ HOREČKY")
  // =========================================================================
  function renderGoldRushArmory(container) {
    const isEn = state.lang === 'en';
    const store = window.BANG_TOOLS ? window.BANG_TOOLS.GoldRushStore : null;
    const storeState = store ? store.getState() : { storefront: [], deck: [], discard: [] };

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2>${isEn ? 'Gold Rush Saloon Armory' : 'Obchod a výloha Zlaté horečky'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Storefront of 3 equipment cards bought for gold nuggets. Buy a card to automatically draw a fresh replacement from the deck.'
                : 'Virtuální výloha 3 karet vybavení nakupovaných za valouny zlata. Po koupi se automaticky vyloží nová karta z balíčku.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" id="btn-refresh-store" style="padding: 0.55rem 0.95rem; border-radius: 8px; border: 1.5px solid var(--border-color); background: var(--bg-surface); cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              ${isEn ? 'Refresh 3 Cards' : 'Vyložit 3 nové karty'}
            </button>
            <button type="button" id="btn-shuffle-store" style="padding: 0.55rem 0.95rem; border-radius: 8px; border: 1.5px solid var(--border-color); background: var(--bg-surface); cursor: pointer; font-weight: bold; font-size: 0.88rem;">
              ${isEn ? 'Reshuffle Deck' : 'Zamíchat balíček'}
            </button>
          </div>
        </div>

        <!-- STORE STATUS BAR -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.6rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
          <div>
            ${isEn ? 'Cards in Equipment Deck:' : 'Zbývá v balíčku vybavení:'} <strong>${storeState.deck.length}</strong>
          </div>
          <div>
            ${isEn ? 'Cards in Discard Pile:' : 'V odhazovacím balíčku:'} <strong>${storeState.discard.length}</strong>
          </div>
        </div>

        <!-- 3 STOREFRONT CARDS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem;">
          ${storeState.storefront.map((c, slotIdx) => {
            const isBlack = c.type === 'black';
            return `
              <div style="background: var(--bg-surface); border: 2px solid ${isBlack ? '#2c3e50' : '#d35400'}; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                    <span style="background: ${isBlack ? '#2c3e50' : '#d35400'}; color: #fff; font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 12px;">
                      ${isBlack ? (isEn ? 'Black (Permanent)' : 'Černé (Stálé)') : (isEn ? 'Brown (One-time)' : 'Hnědé (Jednorázové)')}
                    </span>
                    <span style="font-weight: bold; font-size: 0.95rem; color: #d4ac0d; background: rgba(212, 172, 13, 0.15); padding: 0.2rem 0.6rem; border-radius: 12px; border: 1px solid #d4ac0d;">
                      🪙 ${c.cost || '2–4 valouny'}
                    </span>
                  </div>

                  ${c.image ? `
                    <div style="text-align: center; margin-bottom: 0.75rem;">
                      <img src="${c.image}" alt="${c.name}" style="height: 160px; object-fit: contain; border-radius: 6px; border: 1px solid var(--border-color); background: #fff;">
                    </div>
                  ` : ''}

                  <h3 style="font-family: 'Georgia', serif; color: var(--color-brown); margin-bottom: 0.35rem; font-size: 1.15rem;">
                    ${c.name}
                  </h3>
                  <div style="font-size: 0.85rem; line-height: 1.45; color: var(--text-muted); margin-bottom: 1rem;">
                    ${isEn ? (c.effectEn || c.effect) : c.effect}
                  </div>
                </div>

                <button type="button" class="btn-buy-armory btn-primary" data-slot="${slotIdx}"
                        style="width: 100%; padding: 0.65rem; border-radius: 8px; font-weight: bold; font-size: 0.92rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                  🪙 ${isEn ? `Buy Card (${c.cost || ''})` : `Koupit kartu (${c.cost || ''})`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Event handlers
    container.querySelectorAll('.btn-buy-armory').forEach(b => {
      b.addEventListener('click', () => {
        if (!store) return;
        const slotIdx = parseInt(b.dataset.slot, 10);
        store.buyCard(slotIdx);
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.playCoin();
        }
        renderGoldRushArmory(container);
      });
    });

    const btnRef = document.getElementById('btn-refresh-store');
    if (btnRef) {
      btnRef.addEventListener('click', () => {
        if (!store) return;
        store.refreshStore();
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          if (typeof window.BANG_TOOLS.SoundFX.playShuffle === 'function') window.BANG_TOOLS.SoundFX.playShuffle();
          else if (typeof window.BANG_TOOLS.SoundFX.playWhip === 'function') window.BANG_TOOLS.SoundFX.playWhip();
        }
        renderGoldRushArmory(container);
      });
    }

    const btnShuf = document.getElementById('btn-shuffle-store');
    if (btnShuf) {
      btnShuf.addEventListener('click', () => {
        if (!store) return;
        store.init();
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          if (typeof window.BANG_TOOLS.SoundFX.playShuffle === 'function') window.BANG_TOOLS.SoundFX.playShuffle();
          else if (typeof window.BANG_TOOLS.SoundFX.playWhip === 'function') window.BANG_TOOLS.SoundFX.playWhip();
        }
        renderGoldRushArmory(container);
      });
    }
  }

  // =========================================================================
  // 11. BOUNTY & HOUSE RULES SCENARIOS ("HOSPODSKÉ VÝZVY")
  // =========================================================================
  const scenariosState = {
    drawnScenarios: [],
    viewMode: 'drawn', // 'drawn' or 'all'
    drawCount: 1
  };

  function renderScenariosGenerator(container) {
    const isEn = state.lang === 'en';
    const allScenarios = (window.BANG_TOOLS && window.BANG_TOOLS.Scenarios) ? window.BANG_TOOLS.Scenarios : [];

    const playSoundSafe = (fnName) => {
      try {
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          if (typeof window.BANG_TOOLS.SoundFX[fnName] === 'function') {
            window.BANG_TOOLS.SoundFX[fnName]();
          } else if (typeof window.BANG_TOOLS.SoundFX.playShuffle === 'function') {
            window.BANG_TOOLS.SoundFX.playShuffle();
          } else if (typeof window.BANG_TOOLS.SoundFX.playWhip === 'function') {
            window.BANG_TOOLS.SoundFX.playWhip();
          }
        }
      } catch (e) {
        console.warn('[SoundFX] Ignored audio error:', e);
      }
    };

    // Draw initial if empty
    if (scenariosState.drawnScenarios.length === 0 && allScenarios.length > 0) {
      const shuffled = [...allScenarios].sort(() => Math.random() - 0.5);
      scenariosState.drawnScenarios = shuffled.slice(0, scenariosState.drawCount || 1);
    }

    const isAllMode = scenariosState.viewMode === 'all';
    const displayedList = isAllMode ? allScenarios : scenariosState.drawnScenarios;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <h2>${isEn ? 'Bounty Challenges & House Rules' : 'Hospodské výzvy & Speciální scénáře'}</h2>
            <p class="tool-card-lead">
              ${isEn
                ? 'Spice up games for veteran tables with thematic house rules and bounties (Dry Well, Fast Colts, Saloon Poker, etc.).'
                : 'Osvěžte hru pro zkušené pistolníky tématickými miniscénáři a výzvami pro dnešní partii.'}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
            <button type="button" id="btn-draw-1-scenario" class="tool-subnav-btn ${!isAllMode && scenariosState.drawCount === 1 ? 'active' : ''}" style="padding: 0.6rem 1.15rem; cursor: pointer; font-weight: 700; font-size: 0.9rem;">
              ${isEn ? 'Draw 1 Challenge' : 'Vylosovat 1 výzvu'}
            </button>
            <button type="button" id="btn-draw-2-scenario" class="tool-subnav-btn ${!isAllMode && scenariosState.drawCount === 2 ? 'active' : ''}" style="padding: 0.6rem 1.15rem; cursor: pointer; font-weight: 700; font-size: 0.9rem;">
              ${isEn ? 'Draw 2 Challenges' : 'Vylosovat 2 výzvy'}
            </button>
            <button type="button" id="btn-toggle-all-scenarios" class="tool-subnav-btn ${isAllMode ? 'active' : ''}" style="padding: 0.6rem 1.15rem; cursor: pointer; font-weight: 700; font-size: 0.9rem;">
              ${isEn ? 'All 12 Challenges' : 'Všech 12 výzev (katalog)'}
            </button>
          </div>
        </div>

        <!-- STATUS BANNER -->
        ${!isAllMode ? `
          <div style="background: var(--bg-surface); border: 2px solid var(--color-gold); border-radius: var(--radius-md); padding: 0.85rem 1.15rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <div style="font-weight: 800; font-size: 1rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.5rem;">
                ${isEn ? `Active Match Rule (${scenariosState.drawnScenarios.length} Challenge${scenariosState.drawnScenarios.length > 1 ? 's' : ''} Drawn)` : `Aktivní pravidla hry (Vylosováno: ${scenariosState.drawnScenarios.length} ${scenariosState.drawnScenarios.length > 1 ? 'výzvy' : 'výzva'})`}
              </div>
              <div style="font-size: 0.86rem; color: var(--text-muted); margin-top: 0.2rem;">
                ${isEn ? 'This special rule applies to all players at the table for the entire match.' : 'Tato speciální výzva platí globálně pro všechny hráče u stolu po celou dobu partie.'}
              </div>
            </div>
            <button type="button" id="btn-reroll-current" class="tool-subnav-btn" style="padding: 0.45rem 0.95rem; font-size: 0.85rem; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem; background: var(--color-brown); color: #fff;">
              ${isEn ? 'Reroll Again' : 'Přelosovat znovu'}
            </button>
          </div>
        ` : `
          <div style="background: var(--bg-surface); border: 2px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem 1.15rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <div style="font-weight: 800; font-size: 1rem; color: var(--color-brown); display: flex; align-items: center; gap: 0.5rem;">
                ${isEn ? 'Catalog of All 12 Balanced House Rules & Challenges' : 'Katalog všech 12 vybalancovaných hospodských výzev'}
              </div>
              <div style="font-size: 0.86rem; color: var(--text-muted); margin-top: 0.2rem;">
                ${isEn ? 'Click "Activate for this game" on any card below to play with it, or draw randomly with the buttons above.' : 'Vyberte si libovolnou výzvu a klikněte na "Aktivovat do hry", nebo použijte losovací tlačítka nahoře.'}
              </div>
            </div>
            <button type="button" id="btn-back-to-drawn" class="tool-subnav-btn active" style="padding: 0.45rem 0.95rem; font-size: 0.85rem; cursor: pointer; font-weight: 700; background: var(--color-brown); color: #fff;">
              ${isEn ? 'Back to Active Game' : 'Zpět k vylosované hře'}
            </button>
          </div>
        `}

        <!-- SCENARIOS LIST -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${displayedList.map(s => `
            <div style="background: radial-gradient(circle at top left, var(--bg-surface) 0%, var(--bg-card) 100%); border: 2px solid ${!isAllMode ? 'var(--color-gold)' : 'var(--border-color)'}; border-radius: 12px; padding: 1.5rem; position: relative; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease;">
              <div>
                ${!isAllMode ? `
                  <div style="background: var(--color-gold); color: #1a1a1a; font-weight: 900; font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 4px; display: inline-block; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${isEn ? 'ACTIVE FOR THIS GAME' : 'AKTIVNÍ VÝZVA PRO TUTO PARTII'}
                  </div>
                ` : ''}

                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <span style="background: rgba(212, 172, 13, 0.2); color: var(--color-brown); border: 1px solid var(--color-gold); font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 12px;">
                    ${isEn ? s.tagEn : s.tagCs}
                  </span>
                  
                </div>

                <h3 style="font-family: var(--font-western); font-size: 1.35rem; color: var(--color-brown); margin: 0 0 0.6rem 0;">
                  ${isEn ? s.titleEn : s.titleCs}
                </h3>

                <p style="font-size: 0.94rem; line-height: 1.55; color: var(--text-main); margin-bottom: 1rem;">
                  ${isEn ? s.descEn : s.descCs}
                </p>
              </div>

              <div>
                <div style="font-size: 0.8rem; font-style: italic; color: var(--text-muted); border-top: 1px dashed var(--border-color); padding-top: 0.6rem;">
                  ${isEn ? 'Applies globally to all players for the duration of the match.' : 'Pravidlo platí globálně pro všechny hráče u stolu po celou dobu partie.'}
                </div>

                ${isAllMode ? `
                  <button type="button" class="btn-activate-scenario" data-id="${s.id}" style="margin-top: 0.85rem; width: 100%; padding: 0.55rem 0.85rem; border-radius: 6px; border: 1.5px solid var(--color-brown); background: var(--bg-surface); color: var(--color-brown); font-weight: 800; font-size: 0.88rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; transition: all 0.2s ease;">
                    ${isEn ? 'Activate this challenge for game' : 'Aktivovat tuto výzvu do hry'}
                  </button>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Event handlers
    const btn1 = document.getElementById('btn-draw-1-scenario');
    if (btn1) {
      btn1.addEventListener('click', () => {
        scenariosState.viewMode = 'drawn';
        scenariosState.drawCount = 1;
        const shuffled = [...allScenarios].sort(() => Math.random() - 0.5);
        scenariosState.drawnScenarios = shuffled.slice(0, 1);
        playSoundSafe('playShuffle');
        renderScenariosGenerator(container);
      });
    }

    const btn2 = document.getElementById('btn-draw-2-scenario');
    if (btn2) {
      btn2.addEventListener('click', () => {
        scenariosState.viewMode = 'drawn';
        scenariosState.drawCount = 2;
        const shuffled = [...allScenarios].sort(() => Math.random() - 0.5);
        scenariosState.drawnScenarios = shuffled.slice(0, 2);
        playSoundSafe('playShuffle');
        renderScenariosGenerator(container);
      });
    }

    const btnReroll = document.getElementById('btn-reroll-current');
    if (btnReroll) {
      btnReroll.addEventListener('click', () => {
        const count = scenariosState.drawCount || 1;
        const shuffled = [...allScenarios].sort(() => Math.random() - 0.5);
        scenariosState.drawnScenarios = shuffled.slice(0, count);
        playSoundSafe('playShuffle');
        renderScenariosGenerator(container);
      });
    }

    const btnAll = document.getElementById('btn-toggle-all-scenarios');
    if (btnAll) {
      btnAll.addEventListener('click', () => {
        scenariosState.viewMode = 'all';
        renderScenariosGenerator(container);
      });
    }

    const btnBack = document.getElementById('btn-back-to-drawn');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        scenariosState.viewMode = 'drawn';
        renderScenariosGenerator(container);
      });
    }

    container.querySelectorAll('.btn-activate-scenario').forEach(btn => {
      btn.addEventListener('click', () => {
        const scenarioId = btn.dataset.id;
        const found = allScenarios.find(s => s.id === scenarioId);
        if (found) {
          scenariosState.drawnScenarios = [found];
          scenariosState.drawCount = 1;
          scenariosState.viewMode = 'drawn';
          playSoundSafe('playShot');
          renderScenariosGenerator(container);
        }
      });
    });
  }

  // 5. RULES QUIZ
  function renderRulesQuiz(container) {
    const isEn = state.lang === 'en';
    const questions = window.BANG_TOOLS ? window.BANG_TOOLS.QuizQuestions : [];

    const initQuiz = () => {
      quizState.questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
      quizState.idx = 0;
      quizState.score = 0;
      quizState.answered = false;
      quizState.selectedOption = null;
      quizState.finished = false;
    };

    if (quizState.questions.length === 0) {
      initQuiz();
    }

    if (quizState.finished) {
      let rankTitle = isEn ? '🤠 Prairie Greenhorn' : '🌵 Zelenáč z prérie';
      if (quizState.score === 10) rankTitle = isEn ? '🏆 Legendary Gunslinger of the West!' : '🏆 Legendární šerif Divokého západu!';
      else if (quizState.score >= 8) rankTitle = isEn ? '⭐ Feared Deputy' : '⭐ Obávaný zástupce šerifa';
      else if (quizState.score >= 5) rankTitle = isEn ? '🤠 Experienced Gunslinger' : '🤠 Zkušený pistolník';

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="quiz-container" style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem;">🏆</div>
            <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; color: var(--color-brown); margin-bottom: 0.5rem;">
              ${isEn ? 'Quiz Finished!' : 'Kvíz dokončen!'}
            </h2>
            <div style="font-size: 2.5rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.75rem;">
              ${quizState.score} / ${quizState.questions.length}
            </div>
            <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-brown); margin-bottom: 1.5rem;">
              ${rankTitle}
            </div>
            <button type="button" class="tool-subnav-btn active" id="btn-restart-quiz" style="font-size: 1.1rem; padding: 0.85rem 2rem;">
              🔄 ${isEn ? 'Play Again' : 'Hrát znovu'}
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-restart-quiz').addEventListener('click', () => {
        initQuiz();
        renderRulesQuiz(container);
      });
      return;
    }

    const q = quizState.questions[quizState.idx];
    const qText = isEn ? q.questionEn : q.questionCs;
    const qOpts = isEn ? q.optionsEn : q.optionsCs;
    const qExp = isEn ? q.explanationEn : q.explanationCs;
    const progressPct = ((quizState.idx) / quizState.questions.length) * 100;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2>${isEn ? 'BANG! Official Rules Quiz' : 'Westernový kvíz pravidel BANG!'}</h2>
          <p class="tool-card-lead">${isEn ? 'Test your expertise on official rulings, conflict situations, and tricky timing sequences.' : 'Otestujte své znalosti oficiálních pravidel a záludných sporných momentů.'}</p>
        </div>

        <div class="quiz-container">
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 0.4rem; color: var(--text-muted);">
            <span>${isEn ? 'Question' : 'Otázka'} ${quizState.idx + 1} / ${quizState.questions.length}</span>
            <span>${isEn ? 'Score:' : 'Skóre:'} ${quizState.score}</span>
          </div>

          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
          </div>

          <div class="quiz-question-text">${qText}</div>

          <div class="quiz-options-list">
            ${qOpts.map((opt, optIdx) => {
              let cls = 'quiz-opt-btn';
              if (quizState.answered) {
                if (optIdx === q.correctIndex) cls += ' correct';
                else if (optIdx === quizState.selectedOption) cls += ' wrong';
              }
              return `<button type="button" class="${cls}" data-opt="${optIdx}" ${quizState.answered ? 'disabled' : ''}>${opt}</button>`;
            }).join('')}
          </div>

          ${quizState.answered ? `
            <div class="quiz-explanation-box">
              <strong style="color: var(--color-brown); display: block; margin-bottom: 0.35rem;">
                ${quizState.selectedOption === q.correctIndex ? (isEn ? '✓ Correct!' : '✓ Správně!') : (isEn ? '✕ Incorrect!' : '✕ Špatně!')}
              </strong>
              <div>${qExp}</div>
            </div>

            <div style="text-align: right;">
              <button type="button" class="tool-subnav-btn active" id="btn-next-quiz-q" style="font-size: 1rem; padding: 0.75rem 1.75rem;">
                ${quizState.idx < quizState.questions.length - 1 ? (isEn ? 'Next Question ➔' : 'Další otázka ➔') : (isEn ? 'View Final Score ➔' : 'Zobrazit výsledek ➔')}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizState.answered) return;
        const chosen = parseInt(btn.dataset.opt, 10);
        quizState.selectedOption = chosen;
        quizState.answered = true;
        if (chosen === q.correctIndex) {
          quizState.score++;
        }
        renderRulesQuiz(container);
      });
    });

    const nextQBtn = document.getElementById('btn-next-quiz-q');
    if (nextQBtn) {
      nextQBtn.addEventListener('click', () => {
        if (quizState.idx < quizState.questions.length - 1) {
          quizState.idx++;
          quizState.answered = false;
          quizState.selectedOption = null;
        } else {
          quizState.finished = true;
        }
        renderRulesQuiz(container);
      });
    }
  }

  // 6. WESTERN SOUNDBOARD (AUTHENTIC CINEMATIC WILD WEST SOUNDS)
  function renderSoundboard(container) {
    const isEn = state.lang === 'en';
    const sounds = [
      { id: 'shot', icon: 'assets/icons/icon_gunshot.png', nameCs: 'Výstřel', nameEn: 'Gunshot', action: () => window.BANG_TOOLS.SoundFX.playShot() },
      { id: 'ricochet', icon: 'assets/icons/icon_ricochet.png', nameCs: 'Odraz kulky', nameEn: 'Ricochet', action: () => window.BANG_TOOLS.SoundFX.playRicochet() },
      { id: 'cock', icon: 'assets/icons/icon_cock.png', nameCs: 'Natažení kohoutku', nameEn: 'Revolver Cock', action: () => window.BANG_TOOLS.SoundFX.playCock() },
      { id: 'dynamite', icon: 'assets/icons/icon_dynamite.png', nameCs: 'Dynamit', nameEn: 'Dynamite', action: () => window.BANG_TOOLS.SoundFX.playDynamite() },
      { id: 'gatling', icon: 'assets/icons/icon_gatling.png', nameCs: 'Gatling', nameEn: 'Gatling Gun', action: () => window.BANG_TOOLS.SoundFX.playGatling() },
      { id: 'barrel', icon: 'assets/icons/icon_barrel.png', nameCs: 'Barel', nameEn: 'Oak Barrel', action: () => window.BANG_TOOLS.SoundFX.playBarrel() },
      { id: 'knife', icon: 'assets/icons/icon_knife.png', nameCs: 'Lovecký nůž', nameEn: 'Bowie Knife', action: () => window.BANG_TOOLS.SoundFX.playKnife() },
      { id: 'brawl', icon: 'assets/icons/icon_brawl.png', nameCs: 'Saloon rvačka', nameEn: 'Saloon Brawl', action: () => window.BANG_TOOLS.SoundFX.playBrawl() },
      { id: 'indians', icon: 'assets/icons/icon_indians.png', nameCs: 'Indiáni!', nameEn: 'Indians!', action: () => window.BANG_TOOLS.SoundFX.playIndians() },
      { id: 'duel', icon: 'assets/icons/icon_cards.png', nameCs: 'Duel', nameEn: 'Duel', action: () => window.BANG_TOOLS.SoundFX.playDuel() },
      { id: 'jail', icon: 'assets/icons/icon_jail.png', nameCs: 'Vězení', nameEn: 'Jail', action: () => window.BANG_TOOLS.SoundFX.playJail() },
      { id: 'rattlesnake', icon: 'assets/icons/icon_rattlesnake.png', nameCs: 'Chřestýš', nameEn: 'Rattlesnake', action: () => window.BANG_TOOLS.SoundFX.playRattlesnake() },
      { id: 'beer', icon: 'assets/icons/icon_beer.png', nameCs: 'Pivo', nameEn: 'Cold Beer', action: () => window.BANG_TOOLS.SoundFX.playBeer() },
      { id: 'saloon', icon: 'assets/icons/icon_saloon.png', nameCs: 'Saloon piáno', nameEn: 'Saloon Piano', action: () => window.BANG_TOOLS.SoundFX.playSaloon() },
      { id: 'bell', icon: 'assets/icons/icon_bell.png', nameCs: 'Umíráček', nameEn: 'Church Bell', action: () => window.BANG_TOOLS.SoundFX.playBell() },
      { id: 'train', icon: 'assets/icons/icon_train.png', nameCs: 'Parní vlak', nameEn: 'Steam Train', action: () => window.BANG_TOOLS.SoundFX.playTrain() },
      { id: 'coins', icon: 'assets/icons/icon_coins.png', nameCs: 'Zlaťáky', nameEn: 'Gold Coins', action: () => window.BANG_TOOLS.SoundFX.playCoin() },
      { id: 'whip', icon: 'assets/icons/icon_whip.png', nameCs: 'Bič', nameEn: 'Bullwhip', action: () => window.BANG_TOOLS.SoundFX.playWhip() },
      { id: 'horse', icon: 'assets/icons/icon_horse.png', nameCs: 'Mustang', nameEn: 'Mustang Horse', action: () => window.BANG_TOOLS.SoundFX.playHorse() },
      { id: 'wilhelm', icon: 'assets/icons/icon_wilhelm.png', nameCs: 'Wilhelmův křik', nameEn: 'Wilhelm Scream', action: () => window.BANG_TOOLS.SoundFX.playWilhelm() }
    ];

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2>${isEn ? 'Wild West Soundboard' : 'Westernový Soundboard'}</h2>
          <p class="tool-card-lead">${isEn ? 'Authentic comic-style sound effects from BANG! and the Wild West: Colt .45, Gatling, Indians!, Duel, Jail, Oak Barrel, Bowie Knife, Saloon Brawl, and foaming cold beer. Fully cached for 100% offline play.' : 'Autentické komiksové zvukové efekty ze hry BANG! a Divokého západu: Colt .45, Gatling, Indiáni!, Duel, Vězení, Barel, Nůž, Hospodská rvačka i poctivé vychlazené pivo. Funguje 100% i offline bez internetu.'}</p>
        </div>

        <div class="soundboard-grid">
          ${sounds.map(s => `
            <div class="sound-tile" data-snd="${s.id}" role="button" tabindex="0" aria-label="${isEn ? s.nameEn : s.nameCs}">
              <span class="sound-tile-icon"><img src="${s.icon}" class="sound-icon-img" alt="${isEn ? s.nameEn : s.nameCs}" width="48" height="48" loading="lazy"></span>
              <div class="sound-tile-name">${isEn ? s.nameEn : s.nameCs}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.sound-tile').forEach(tile => {
      const play = () => {
        const sid = tile.dataset.snd;
        const targetSnd = sounds.find(s => s.id === sid);
        if (targetSnd) {
          tile.classList.add('sound-tile-playing');
          setTimeout(() => tile.classList.remove('sound-tile-playing'), 250);
          targetSnd.action();
        }
      };

      tile.addEventListener('click', play);
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          play();
        }
      });
    });
  }

  // =========================================================================
  // EVENTS INITIALIZATION
  // =========================================================================
  function initEvents() {
    els.tabs.forEach(tab => {
      tab.addEventListener('click', () => setTab(tab.dataset.tab));
    });

    if (els.themeToggle) {
      els.themeToggle.addEventListener('click', toggleTheme);
    }

    if (els.soundToggle) {
      els.soundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('bang_sound', state.soundEnabled ? 'true' : 'false');
        els.soundToggle.innerHTML = state.soundEnabled
          ? '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
          : '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.toggle(state.soundEnabled);
        }
      });
    }

    if (els.langBtnCs) {
      els.langBtnCs.addEventListener('click', () => setLanguage('cs'));
    }
    if (els.langBtnEn) {
      els.langBtnEn.addEventListener('click', () => setLanguage('en'));
    }

    if (els.globalSearch) {
      els.globalSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'katalog') {
          setTab('katalog');
        }
        renderCards();
      });
    }

    // Quick Tag Buttons
    if (els.catalogQuickTags) {
      els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedQuickTag = btn.dataset.tag;
          try {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } catch (err) {}
          renderCards();
        });
      });
    }

    // Tools Subnav Buttons
    if (els.toolsSubnav) {
      els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.activeTool = btn.dataset.tool;
          try {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } catch (err) {}
          renderTools();
        });
      });
    }

    if (els.filterExpansion) {
      els.filterExpansion.addEventListener('change', (e) => {
        state.selectedExpansion = e.target.value;
        renderCards();
      });
    }

    if (els.filterType) {
      els.filterType.addEventListener('change', (e) => {
        state.selectedType = e.target.value;
        renderCards();
      });
    }

    if (els.filterSuit) {
      els.filterSuit.addEventListener('change', (e) => {
        state.selectedSuit = e.target.value;
        renderCards();
      });
    }

    if (els.sortCards) {
      els.sortCards.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderCards();
      });
    }

    if (els.btnResetFilters) {
      els.btnResetFilters.addEventListener('click', () => {
        state.searchQuery = '';
        state.selectedExpansion = 'all';
        state.selectedType = 'all';
        state.selectedSuit = 'all';
        state.selectedQuickTag = 'all';
        state.sortBy = 'name-asc';

        if (els.globalSearch) els.globalSearch.value = '';
        if (els.filterExpansion) els.filterExpansion.value = 'all';
        if (els.filterType) els.filterType.value = 'all';
        if (els.filterSuit) els.filterSuit.value = 'all';
        if (els.sortCards) els.sortCards.value = 'name-asc';

        if (els.catalogQuickTags) {
          els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(b => {
            b.classList.toggle('active', b.dataset.tag === 'all');
          });
        }

        renderCards();
      });
    }

    // Mobile Collapsible Filter Sidebar
    if (els.filterSidebarToggle && els.filterSidebar) {
      const toggleFilters = (e) => {
        if (e && e.target && e.target.closest('#btn-reset-filters')) return;
        if (window.innerWidth <= 900 || window.matchMedia('(max-width: 900px)').matches) {
          const isOpen = els.filterSidebar.classList.toggle('is-open');
          els.filterSidebarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      };

      els.filterSidebarToggle.addEventListener('click', toggleFilters);
      els.filterSidebarToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('#btn-reset-filters')) return;
          e.preventDefault();
          toggleFilters(e);
        }
      });
    }

    if (els.faqSearch) {
      els.faqSearch.addEventListener('input', (e) => {
        state.faqQuery = e.target.value;
        renderFaq();
      });
    }

    if (els.modalClose) {
      els.modalClose.addEventListener('click', closeCardModal);
      els.modalClose.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeCardModal();
      });
    }
    if (els.cardModal) {
      els.cardModal.addEventListener('click', (e) => {
        if (e.target === els.cardModal) closeCardModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCardModal();
      } else if (e.key === '/' && document.activeElement !== els.globalSearch && document.activeElement !== els.faqSearch) {
        e.preventDefault();
        if (els.globalSearch) {
          els.globalSearch.focus();
          els.globalSearch.select();
        }
      }
    });

    // Delegated click for "Zpět na obsah pravidel" and TOC links
    document.addEventListener('click', (e) => {
      const btnBack = e.target.closest('.btn-back-to-toc');
      if (btnBack) {
        e.preventDefault();
        e.stopPropagation();
        scrollToRulesToc();
        return;
      }

      const tocLink = e.target.closest('.rules-toc-link');
      if (tocLink) {
        e.preventDefault();
        e.stopPropagation();
        const href = tocLink.getAttribute('href') || '';
        const targetId = href.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          scrollToElement(targetEl, 12);
        }
        document.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
        tocLink.classList.add('active');
        tocLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Floating Scroll-to-Top Button (Desktop & Mobile)
    if (els.btnScrollTop) {
      const handleScroll = () => {
        const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrolled > 150) {
          els.btnScrollTop.classList.add('visible');
        } else {
          els.btnScrollTop.classList.remove('visible');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      els.btnScrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try {
          document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (_) {}
      });
    }

    window.addEventListener('hashchange', initRouting);
  }

  // DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (els.soundIcon) {
      els.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
      if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
        window.BANG_TOOLS.SoundFX.toggle(state.soundEnabled);
      }
    }
    initEvents();
    setLanguage(state.lang);
    initRouting();

    // Register Service Worker for Offline PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('[PWA] Service Worker registered with scope:', reg.scope);
      }).catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
    }
  });
})();
