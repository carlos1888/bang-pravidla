// BANG! Dynamite Box & Legendy — Web Controller (Clean Text & Rich Formatting)
(function() {
  'use strict';

  // State
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
    cardsGrid: document.getElementById('cards-grid'),
    resultsCount: document.getElementById('results-count'),
    filterExpansion: document.getElementById('filter-expansion'),
    filterType: document.getElementById('filter-type'),
    filterSuit: document.getElementById('filter-suit'),
    sortCards: document.getElementById('sort-cards'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    faqSearch: document.getElementById('faq-search'),
    faqList: document.getElementById('faq-list'),
    faqCatBtns: document.querySelectorAll('.faq-cat-btn'),
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
    els.themeToggle.innerHTML = theme === 'dark' ? '<span>☀️</span>' : '<span>🌙</span>';
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

  // Render Cards Grid (Clean Text Cards with Color Borders)
  function renderCards() {
    if (!els.cardsGrid) return;
    const cards = getFilteredCards();
    
    if (els.resultsCount) {
      els.resultsCount.textContent = `Zobrazeno ${cards.length} z celkem ${window.BANG_CARDS.length} karet a položek`;
    }

    if (cards.length === 0) {
      els.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌵</div>
          <h3>Žádná položka neodpovídá zvoleným filtrům</h3>
          <p>Zkuste upravit hledaný výraz nebo resetovat filtry.</p>
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

      const isRed = card.suit === '♥' || card.suit === '♦';
      const suitClass = isRed ? 'suit-red' : 'suit-black';

      const metas = [];
      if (card.copies) metas.push(`<span class="card-meta-item meta-copies">${card.copies}× v balíčku</span>`);
      if (card.range) metas.push(`<span class="card-meta-item">Dosah: ${card.range}</span>`);
      if (card.cost) metas.push(`<span class="card-meta-item meta-cost">${card.cost}</span>`);
      if (card.lives) metas.push(`<span class="card-meta-item" style="color: #b71c1c; font-weight: 700;">❤️ ${card.lives} životy</span>`);
      if (card.timing) metas.push(`<span class="card-meta-item meta-timing">${card.timing}</span>`);

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
            <div class="card-effect-box">
              ${card.effect}
            </div>
            <div class="card-meta-list">
              <span class="card-meta-item" style="font-weight: 700;">${card.typeLabel}</span>
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

  // Open Card Modal
  function openCardModal(cardId) {
    const card = window.BANG_CARDS.find(c => c.id === cardId);
    if (!card) return;
    state.selectedCard = card;

    const rulingsHtml = (card.rulings && card.rulings.length > 0)
      ? `
        <div style="margin-top: 1.25rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
          <h4 style="color: var(--color-brown); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem; font-size: 1.1rem;">
            <span>⚖️</span> Oficiální pravidla a přesné vyhodnocení:
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.96rem; line-height: 1.6;">
            ${card.rulings.map(r => `<li style="margin-bottom: 0.5rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const tagsHtml = (card.tags && card.tags.length > 0)
      ? `
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.25rem;">
          ${card.tags.map(t => `<span class="card-meta-item" style="font-size: 0.78rem;">#${t}</span>`).join('')}
        </div>
      `
      : '';

    els.modalBody.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1.2rem;">
        <span class="card-badge" style="font-size: 0.85rem; margin-bottom: 0.4rem; display: inline-block;">${card.expansionName} • ${card.typeLabel}</span>
        <h2 style="font-size: 2rem; font-family: 'Georgia', serif; color: var(--text-main); line-height: 1.2;">${card.name}</h2>
        ${card.nameEn ? `<div style="color: var(--text-muted); font-style: italic; font-size: 0.95rem; margin-top: 0.2rem;">${card.nameEn}</div>` : ''}
      </div>

      <div style="background: var(--bg-surface); padding: 1.15rem; border-radius: 8px; margin-bottom: 1.25rem; border-left: 4px solid var(--color-brown);">
        <div style="font-weight: 700; margin-bottom: 0.4rem; color: var(--color-brown); text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.5px;">Text a funkce karty:</div>
        <div style="font-size: 1.1rem; line-height: 1.6;">${card.effect}</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; font-size: 0.9rem; margin-bottom: 1rem;">
        ${card.timing ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>Časování:</strong><br>${card.timing}</div>` : ''}
        ${card.cost ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>Cena / Podmínka:</strong><br>${card.cost}</div>` : ''}
        ${card.range ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>Dosah:</strong><br>${card.range}</div>` : ''}
        ${card.copies ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>Počet kopií:</strong><br>${card.copies}×</div>` : ''}
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

    if (tocTarget) {
      tocTarget.innerHTML = window.BANG_RULES.map((sec, idx) => `
        <li class="rules-toc-item">
          <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
        </li>
      `).join('');
    }

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
        const text = `${item.question} ${item.answerHtml} ${(item.tags || []).join(' ')} ${item.category}`.toLowerCase();
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
            ${(item.tags || []).map(t => `<span class="card-meta-item" style="font-size: 0.75rem;">#${t}</span>`).join('')}
          </div>
        </div>
      </details>
    `).join('');
  }

  // Events Initialization
  function initEvents() {
    els.tabs.forEach(tab => {
      tab.addEventListener('click', () => setTab(tab.dataset.tab));
    });

    if (els.themeToggle) {
      els.themeToggle.addEventListener('click', toggleTheme);
    }

    if (els.globalSearch) {
      els.globalSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'katalog' && state.activeTab !== 'faq') {
          setTab('katalog');
        }
        renderCards();
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
        state.sortBy = 'name-asc';

        if (els.globalSearch) els.globalSearch.value = '';
        if (els.filterExpansion) els.filterExpansion.value = 'all';
        if (els.filterType) els.filterType.value = 'all';
        if (els.filterSuit) els.filterSuit.value = 'all';
        if (els.sortCards) els.sortCards.value = 'name-asc';

        renderCards();
      });
    }

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

    if (els.modalClose) {
      els.modalClose.addEventListener('click', closeCardModal);
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

    window.addEventListener('hashchange', initRouting);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
    renderCards();
    renderRules();
    renderFaq();
    initRouting();
  });
})();
