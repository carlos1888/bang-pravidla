// BANG! Dynamite Box & Legendy - Web Application Controller
(function() {
  'use strict';

  // State Management
  const state = {
    activeTab: 'katalog',
    searchQuery: '',
    selectedExpansion: 'all',
    selectedType: 'all',
    selectedSuit: 'all',
    sortBy: 'name-asc',
    activeFaqCategory: 'all',
    faqQuery: '',
    selectedCard: null
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('.nav-tab'),
    panes: document.querySelectorAll('.tab-pane'),
    globalSearch: document.getElementById('global-search'),
    themeToggle: document.getElementById('theme-toggle'),
    // Catalog controls
    cardsGrid: document.getElementById('cards-grid'),
    resultsCount: document.getElementById('results-count'),
    filterExpansion: document.getElementById('filter-expansion'),
    filterType: document.getElementById('filter-type'),
    filterSuit: document.getElementById('filter-suit'),
    sortCards: document.getElementById('sort-cards'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    // FAQ controls
    faqSearch: document.getElementById('faq-search'),
    faqList: document.getElementById('faq-list'),
    faqCatBtns: document.querySelectorAll('.faq-cat-btn'),
    // Modal
    cardModal: document.getElementById('card-modal'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close')
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
      ? '<span>☀️</span>' 
      : '<span>🌙</span>';
  }

  // Tab Navigation & Hash Routing
  function setTab(tabId) {
    state.activeTab = tabId;
    window.location.hash = tabId;

    els.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabId);
    });

    els.panes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initRouting() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['katalog', 'pravidla', 'faq', 'tah-hrace', 'pomocnik'].includes(hash)) {
      setTab(hash);
    }
  }

  // Filter Cards Logic
  function getFilteredCards() {
    if (!window.BANG_CARDS) return [];
    
    return window.BANG_CARDS.filter(card => {
      // Expansion filter
      if (state.selectedExpansion !== 'all' && card.expansion !== state.selectedExpansion) {
        return false;
      }
      
      // Type filter
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

      // Suit filter
      if (state.selectedSuit !== 'all') {
        if (!card.suit || !card.suit.includes(state.selectedSuit)) return false;
      }

      // Search Query
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const text = `${card.name} ${card.nameEn || ''} ${card.effect || ''} ${card.expansionName} ${card.typeLabel} ${(card.tags || []).join(' ')}`.toLowerCase();
        if (!text.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'name-asc') return a.name.localeCompare(b.name, 'cs');
      if (state.sortBy === 'name-desc') return b.name.localeCompare(a.name, 'cs');
      if (state.sortBy === 'expansion') return a.expansionName.localeCompare(b.expansionName, 'cs');
      if (state.sortBy === 'type') return a.typeLabel.localeCompare(b.typeLabel, 'cs');
      return 0;
    });
  }

  // Render Cards Grid
  function renderCards() {
    if (!els.cardsGrid) return;
    const cards = getFilteredCards();
    
    if (els.resultsCount) {
      els.resultsCount.textContent = `Zobrazeno ${cards.length} z celkem ${window.BANG_CARDS.length} položek`;
    }

    if (cards.length === 0) {
      els.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌵</div>
          <h3>Žádná karta neodpovídá zvoleným filtrům</h3>
          <p>Zkuste upravit hledaný výraz nebo resetovat filtry.</p>
        </div>
      `;
      return;
    }

    els.cardsGrid.innerHTML = cards.map(card => {
      // Border class
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

      // Suit color
      const isRed = card.suit === '♥' || card.suit === '♦';
      const suitClass = isRed ? 'suit-red' : 'suit-black';

      // Meta pills
      const metas = [];
      if (card.copies) metas.push(`<span class="card-meta-item meta-copies">Počet: ${card.copies}×</span>`);
      if (card.range) metas.push(`<span class="card-meta-item">Dosah: ${card.range}</span>`);
      if (card.cost) metas.push(`<span class="card-meta-item meta-cost">${card.cost}</span>`);
      if (card.lives) metas.push(`<span class="card-meta-item" style="color: #b71c1c; font-weight: 700;">❤️ ${card.lives} životy</span>`);

      // Image or visual placeholder
      const imageHtml = card.image 
        ? `<div class="card-image-box"><img src="${card.image}" alt="${card.name}" loading="lazy" onerror="this.style.display='none'"></div>`
        : '';

      return `
        <article class="bang-card ${borderClass}" data-id="${card.id}" tabindex="0" role="button" aria-label="Detail karty ${card.name}">
          <div class="card-top-bar">
            <span class="card-badge">${card.expansionName}</span>
            ${card.suit ? `<span class="card-suit-value ${suitClass}">${card.suit} ${card.values || ''}</span>` : ''}
          </div>
          <div class="card-body">
            <div class="card-title-group">
              <h3 class="card-title">${card.name}</h3>
              ${card.nameEn ? `<div class="card-title-en">${card.nameEn}</div>` : ''}
            </div>
            ${imageHtml}
            <div class="card-effect">${card.effect}</div>
            <div class="card-meta-list">
              <span class="card-meta-item">${card.typeLabel}</span>
              ${metas.join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card click handlers
    els.cardsGrid.querySelectorAll('.bang-card').forEach(el => {
      el.addEventListener('click', () => {
        const cardId = el.dataset.id;
        openCardModal(cardId);
      });
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCardModal(el.dataset.id);
        }
      });
    });
  }

  // Open Card Modal
  function openCardModal(cardId) {
    const card = window.BANG_CARDS.find(c => c.id === cardId);
    if (!card) return;
    state.selectedCard = card;

    const rulingsHtml = (card.rulings && card.rulings.length > 0)
      ? `
        <div style="margin-top: 1.25rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
          <h4 style="color: var(--color-brown); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚖️</span> Oficiální pravidla a přesné vyhodnocení:
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.55;">
            ${card.rulings.map(r => `<li style="margin-bottom: 0.4rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const tagsHtml = (card.tags && card.tags.length > 0)
      ? `
        <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem;">
          ${card.tags.map(t => `<span class="filter-pill" style="font-size: 0.75rem; pointer-events: none;">#${t}</span>`).join('')}
        </div>
      `
      : '';

    const imgFull = card.image 
      ? `<div style="text-align: center; margin: 1rem 0;"><img src="${card.image}" style="max-height: 220px; border-radius: 8px; border: 2px solid var(--border-color); box-shadow: var(--shadow-sm);" alt="${card.name}"></div>`
      : '';

    els.modalBody.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem;">
        <span class="card-badge" style="font-size: 0.85rem; margin-bottom: 0.4rem; display: inline-block;">${card.expansionName} • ${card.typeLabel}</span>
        <h2 style="font-size: 1.8rem; font-family: 'Georgia', serif; color: var(--text-main);">${card.name}</h2>
        ${card.nameEn ? `<div style="color: var(--text-muted); font-style: italic;">${card.nameEn}</div>` : ''}
      </div>

      ${imgFull}

      <div style="background: var(--bg-surface); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <div style="font-weight: 700; margin-bottom: 0.3rem; color: var(--color-brown);">Efekt karty:</div>
        <div style="font-size: 1.05rem; line-height: 1.5;">${card.effect}</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; font-size: 0.88rem; margin-bottom: 1rem;">
        ${card.timing ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.6rem; border-radius: 6px;"><strong>Časování:</strong><br>${card.timing}</div>` : ''}
        ${card.cost ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.6rem; border-radius: 6px;"><strong>Cena / Podmínka:</strong><br>${card.cost}</div>` : ''}
        ${card.range ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.6rem; border-radius: 6px;"><strong>Dosah:</strong><br>${card.range}</div>` : ''}
        ${card.copies ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.6rem; border-radius: 6px;"><strong>Počet kopií:</strong><br>${card.copies}×</div>` : ''}
      </div>

      ${rulingsHtml}
      ${tagsHtml}
    `;

    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCardModal() {
    els.cardModal.classList.remove('active');
    document.body.style.overflow = '';
    state.selectedCard = null;
  }

  // Render Rules
  function renderRules() {
    const rulesContainer = document.getElementById('rules-content-target');
    const tocTarget = document.getElementById('rules-toc-target');
    if (!rulesContainer || !window.BANG_RULES) return;

    // Render TOC
    if (tocTarget) {
      tocTarget.innerHTML = window.BANG_RULES.map((sec, idx) => `
        <li class="rules-toc-item">
          <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
        </li>
      `).join('');
    }

    // Render Articles
    rulesContainer.innerHTML = window.BANG_RULES.map(sec => `
      <section id="${sec.id}" class="rules-article">
        ${sec.content}
      </section>
    `).join('');
  }

  // Render FAQ
  function renderFaq() {
    if (!els.faqList || !window.BANG_FAQ) return;

    const filtered = window.BANG_FAQ.filter(item => {
      if (state.activeFaqCategory !== 'all' && item.category !== state.activeFaqCategory) {
        return false;
      }
      if (state.faqQuery.trim()) {
        const q = state.faqQuery.toLowerCase();
        const text = `${item.question} ${item.answer} ${(item.tags || []).join(' ')} ${item.category}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      els.faqList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <h3>Nebyly nalezeny žádné sporné situace</h3>
          <p>Zkuste zadat jiná klíčová slova (např. Slab, Vězení, Pivo, Vagon, Bomba, Rez, Šerif).</p>
        </div>
      `;
      return;
    }

    // Render using modern exclusive details with name="bang-faq"
    els.faqList.innerHTML = filtered.map(item => `
      <details class="bang-disclosure" name="bang-faq" id="${item.id}">
        <summary>
          <span>${item.question}</span>
          <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted); background: var(--bg-surface); padding: 0.2rem 0.5rem; border-radius: 4px;">
            ${item.category}
          </span>
        </summary>
        <div class="disclosure-body">
          <div style="margin-bottom: 0.75rem;">
            ${item.answer.replace(/\n/g, '<br>')}
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.75rem; border-top: 1px dashed var(--border-color); padding-top: 0.5rem;">
            ${(item.tags || []).map(t => `<span class="filter-pill" style="font-size: 0.75rem;">#${t}</span>`).join('')}
          </div>
        </div>
      </details>
    `).join('');
  }

  // Event Listeners Initialization
  function initEvents() {
    // Nav tabs
    els.tabs.forEach(tab => {
      tab.addEventListener('click', () => setTab(tab.dataset.tab));
    });

    // Theme toggle
    if (els.themeToggle) {
      els.themeToggle.addEventListener('click', toggleTheme);
    }

    // Global Search Bar in Header
    if (els.globalSearch) {
      els.globalSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'katalog' && state.activeTab !== 'faq') {
          setTab('katalog');
        }
        renderCards();
      });
    }

    // Catalog Filter Controls
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
        state.sortBy = 'name-asc';

        if (els.globalSearch) els.globalSearch.value = '';
        if (els.filterExpansion) els.filterExpansion.value = 'all';
        if (els.filterType) els.filterType.value = 'all';
        if (els.filterSuit) els.filterSuit.value = 'all';
        if (els.sortCards) els.sortCards.value = 'name-asc';

        renderCards();
      });
    }

    // FAQ Controls
    if (els.faqSearch) {
      els.faqSearch.addEventListener('input', (e) => {
        state.faqQuery = e.target.value;
        renderFaq();
      });
    }

    els.faqCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        els.faqCatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFaqCategory = btn.dataset.category;
        renderFaq();
      });
    });

    // Modal close
    if (els.modalClose) {
      els.modalClose.addEventListener('click', closeCardModal);
    }
    if (els.cardModal) {
      els.cardModal.addEventListener('click', (e) => {
        if (e.target === els.cardModal) closeCardModal();
      });
    }

    // Keyboard Shortcuts
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

    window.addEventListener('hashchange', initRouting);
  }

  // Initialize Application
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
    renderCards();
    renderRules();
    renderFaq();
    initRouting();
  });
})();
