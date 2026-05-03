// ========================
// Global state
// ========================
let currentLanguage = 'ru';
let currentFilter = 'roots';
let currentViewMode = 'cards';
let subView = 'all';
let colorScheme = localStorage.getItem('colorScheme') || '';

// Favorites & completed - Roots
let favoritesRoots = JSON.parse(localStorage.getItem('favoritesRoots') || '[]');
let completedRoots = JSON.parse(localStorage.getItem('completedRoots') || '[]');

// Favorites & completed - Verbs
let favVerbs = JSON.parse(localStorage.getItem('favVerbs') || '[]');
let completedVerbs = JSON.parse(localStorage.getItem('completedVerbs') || '[]');

// Favorites & completed - Nouns
let favNouns = JSON.parse(localStorage.getItem('favNouns') || '[]');
let completedNouns = JSON.parse(localStorage.getItem('completedNouns') || '[]');

// Favorites & completed - Adjectives
let favAdjectives = JSON.parse(localStorage.getItem('favAdjectives') || '[]');
let completedAdjectives = JSON.parse(localStorage.getItem('completedAdjectives') || '[]');

// Active category for verbs/nouns/adjectives
let activeVerbCat = 'all';
let activeNounCat = 'all';
let activeAdjCat = 'all';

// Quiz state
let quizActive = false;
let quizStarted = false;
let quizScore = 0;
let quizTimer = null;
let quizTimeLeft = 60;
let quizTotalTime = 60;
let quizType = 'meaning';
let quizSource = 'all';
let quizMistakes = [];
let quizCurrentVerb = null;
let quizCorrectAnswer = null;
let quizAnswered = false;
let quizCategory = 'verbs'; // 'verbs', 'nouns', 'adjectives'


// ========================
// Translations
// ========================
const LANG = {
  filterLabels: {
    roots: { ru: 'Корни', en: 'Roots', fr: 'Racines', ar: 'جذور' },
    verbs: { ru: 'Глаголы', en: 'Verbs', fr: 'Verbes', ar: 'أفعال' },
    nouns: { ru: 'Сущ.', en: 'Nouns', fr: 'Noms', ar: 'أسماء' },
    adjectives: { ru: 'Прил.', en: 'Adjs', fr: 'Adj.', ar: 'صفات' },
    prefixes: { ru: 'Префиксы', en: 'Prefixes', fr: 'Préfixes', ar: 'بادئات' }
  },
  subLabels: {
    all: { ru: 'Все', en: 'All', fr: 'Tous', ar: 'الكل' },
    favorites: { ru: '★ Избранное', en: '★ Favorites', fr: '★ Favoris', ar: '★ المفضلة' },
    completed: { ru: '✓ Завершённые', en: '✓ Completed', fr: '✓ Terminés', ar: '✓ مكتمل' },
    quiz: { ru: 'Quiz', en: 'Quiz', fr: 'Quiz', ar: 'اختبار' }
  },
  stats: {
    roots: { ru: 'Корни', en: 'Roots', fr: 'Racines', ar: 'جذور' },
    verbs: { ru: 'Глаголы', en: 'Verbs', fr: 'Verbes', ar: 'أفعال' },
    nouns: { ru: 'Сущ.', en: 'Nouns', fr: 'Noms', ar: 'أسماء' },
    adjs: { ru: 'Прил.', en: 'Adjs', fr: 'Adj.', ar: 'صفات' }
  },
  searchPlaceholder: {
    ru: 'Поиск (RU / EN / FR / AR)',
    en: 'Search (RU / EN / FR / AR)',
    fr: 'Rechercher (RU / EN / FR / AR)',
    ar: 'بحث (RU / EN / FR / AR)'
  }
};

// ========================
// Theme & Color
// ========================
function applyThemeAndColor() {
  document.body.className = '';
  if (colorScheme) {
    document.body.classList.add(`${colorScheme}-theme`);
  } else {
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${theme}-theme`);
  }
}
applyThemeAndColor();

// ========================
// DOM Ready (مفتوح بالكامل)
// ========================
document.addEventListener('DOMContentLoaded', () => {
  setupHeaderScroll();
  setupThemeSwitcher();
  setupModals();
  setupAboutPage();
  setupSearch();
  setupFilters();
  setupSubNav();
  setupLanguageSwitcher();
  setupViewToggle();
  setupClearSearch();
  setupQuiz();
  renderRootCards('all', '', 'all');
  updateAllUITexts();
  updateStats();
  toggleViewButtonsVisibility();
  updateSubNavUI();
  renderLeaderboard();

  // مفتاح Enter للاختبارات
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && quizActive && quizStarted && !quizAnswered) {
        const inputField = document.getElementById('quizAnswerInput');
        if (inputField && inputField.offsetParent !== null && !inputField.disabled) {
            e.preventDefault();
            submitQuizAnswer();
        }
    }
  });
});

// ========================
// Header Scroll Effect
// ========================
function setupHeaderScroll() {
  const mainHeader = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });
}

// ========================
// Theme Switcher
// ========================
function setupThemeSwitcher() {
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      const cs = btn.dataset.colorScheme;
      if (cs) {
        colorScheme = cs;
        localStorage.setItem('colorScheme', cs);
        localStorage.removeItem('theme');
      } else {
        colorScheme = '';
        localStorage.removeItem('colorScheme');
        if (theme) localStorage.setItem('theme', theme);
      }
      applyThemeAndColor();
    });
  });
}

// ========================
// Search
// ========================
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    refreshCurrentView(query);
  });
}

function setupClearSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  if (!clearBtn || !searchInput) return;
  searchInput.addEventListener('input', () => {
    clearBtn.classList.toggle('visible', searchInput.value.length > 0);
  });
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    refreshCurrentView('');
  });
}

function refreshCurrentView(query) {
  if (quizActive || quizStarted) return;
  if (currentFilter === 'roots') {
    renderRootCards(subView, query, subView);
  } else if (currentFilter === 'verbs') {
    if (activeVerbCat === '') renderVerbCategories(query);
    else renderVerbList(activeVerbCat, query, subView);
  } else if (currentFilter === 'nouns') {
    if (activeNounCat === '') renderNounCategories(query);
    else renderNounList(activeNounCat, query, subView);
  } else if (currentFilter === 'adjectives') {
    if (activeAdjCat === '') renderAdjCategories(query);
    else renderAdjectiveList(activeAdjCat, query, subView);
  } else if (currentFilter === 'prefixes') {
    showPrefixesTable(query);
  }
  updateStats();
}

// ========================
// Filters (Main Tabs)
// ========================
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      subView = 'all';
      activeVerbCat = 'all';
      activeNounCat = 'all';
      activeAdjCat = 'all';
      hideAllViews();
      document.getElementById('searchInput').value = '';
      document.getElementById('clearSearch').classList.remove('visible');
      updateSubNavUI();

      if (currentFilter === 'roots') {
        document.getElementById('rootCards').style.display = 'grid';
        renderRootCards('all', '', 'all');
      } else if (currentFilter === 'verbs') {
        document.getElementById('verbsListView').style.display = 'block';
        renderVerbCategories('');
      } else if (currentFilter === 'nouns') {
        document.getElementById('nounsListView').style.display = 'block';
        renderNounCategories('');
      } else if (currentFilter === 'adjectives') {
        document.getElementById('adjectivesListView').style.display = 'block';
        renderAdjCategories('');
      } else if (currentFilter === 'prefixes') {
        document.getElementById('rootCards').style.display = 'grid';
        showPrefixesTable('');
      }
      updateStats();
      toggleViewButtonsVisibility();
    });
  });
}

function hideAllViews() {
  document.getElementById('rootCards').style.display = 'none';
  document.getElementById('verbsListView').style.display = 'none';
  document.getElementById('nounsListView').style.display = 'none';
  document.getElementById('adjectivesListView').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'none';
}

// ========================
// Sub Navigation
// ========================
function setupSubNav() {
  document.querySelectorAll('.sub-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizActive) return;
      document.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      subView = btn.dataset.sub;
      if (subView === 'quiz') {
        enterQuizView();
        return;
      }
      const query = document.getElementById('searchInput').value.trim();
      if (currentFilter === 'roots') {
        document.getElementById('rootCards').style.display = (currentViewMode === 'cards') ? 'grid' : 'block';
        renderRootCards(subView, query, subView);
      } else if (currentFilter === 'verbs') {
        document.getElementById('verbsListView').style.display = 'block';
        document.getElementById('verbCategoryCards').innerHTML = '';
        document.getElementById('verbListContainer').innerHTML = '';
        if (subView === 'favorites' || subView === 'completed') {
          renderVerbList('all', query, subView);
        } else {
          renderVerbCategories(query);
        }
      } else if (currentFilter === 'nouns') {
        document.getElementById('nounsListView').style.display = 'block';
        document.getElementById('nounCategoryCards').innerHTML = '';
        document.getElementById('nounListContainer').innerHTML = '';
        if (subView === 'favorites' || subView === 'completed') {
          renderNounList('all', query, subView);
        } else {
          renderNounCategories(query);
        }
      } else if (currentFilter === 'adjectives') {
        document.getElementById('adjectivesListView').style.display = 'block';
        document.getElementById('adjCategoryCards').innerHTML = '';
        document.getElementById('adjListContainer').innerHTML = '';
        if (subView === 'favorites' || subView === 'completed') {
          renderAdjectiveList('all', query, subView);
        } else {
          renderAdjCategories(query);
        }
      }
    });
  });
}

function updateSubNavUI() {
  const subNavBar = document.getElementById('subNavBar');
  const subBtns = subNavBar.querySelectorAll('.sub-nav-btn');
  subBtns.forEach(b => b.classList.remove('active'));
  const allBtn = subNavBar.querySelector('[data-sub="all"]');
  if (allBtn) allBtn.classList.add('active');
  
  subBtns.forEach(btn => {
    const sub = btn.dataset.sub;
    if (sub === 'favorites') {
      btn.textContent = '★';
      btn.title = LANG.subLabels.favorites[currentLanguage];
    } else if (sub === 'completed') {
      btn.textContent = '✓';
      btn.title = LANG.subLabels.completed[currentLanguage];
    } else if (sub === 'all') {
      btn.textContent = LANG.subLabels.all[currentLanguage];
    } else if (sub === 'quiz') {
      btn.textContent = LANG.subLabels.quiz[currentLanguage];
    }
  });
}

// ========================
// Language Switcher
// ========================
function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLanguage = btn.dataset.lang;
      updateAllUITexts();
      const query = document.getElementById('searchInput')?.value || '';
      refreshCurrentView(query);
      updateStats();
    });
  });
}

function updateAllUITexts() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filter = btn.dataset.filter;
    if (LANG.filterLabels[filter]) {
      btn.textContent = LANG.filterLabels[filter][currentLanguage];
    }
  });
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.placeholder = LANG.searchPlaceholder[currentLanguage];
  }
  
  updateSubNavUI();
  
  document.querySelectorAll('[data-lang-' + currentLanguage + ']').forEach(el => {
    const text = el.getAttribute('data-lang-' + currentLanguage);
    if (text && el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      el.textContent = text;
    }
  });
  
  document.querySelectorAll('[data-lang-placeholder-' + currentLanguage + ']').forEach(el => {
    const placeholder = el.getAttribute('data-lang-placeholder-' + currentLanguage);
    if (placeholder) el.placeholder = placeholder;
  });
  updateQuizSettingsTexts();
}

function toggleViewButtonsVisibility() {
  const viewToggle = document.querySelector('.view-toggle');
  if (!viewToggle) return;
  
  if (currentFilter === 'roots' || currentFilter === 'prefixes') {
    viewToggle.style.display = 'flex';
  } else {
    viewToggle.style.display = 'none';
  }
}

function setupViewToggle() {
  const cardBtn = document.getElementById('cardViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  if (!cardBtn || !listBtn) return;
  
  cardBtn.addEventListener('click', () => {
    currentViewMode = 'cards';
    cardBtn.classList.add('active');
    listBtn.classList.remove('active');
    const rootContainer = document.getElementById('rootCards');
    if (rootContainer) {
      rootContainer.className = 'cards-view';
      rootContainer.style.display = 'grid';
    }
    if (currentFilter === 'roots' || currentFilter === 'prefixes') {
      const query = document.getElementById('searchInput')?.value || '';
      if (currentFilter === 'roots') renderRootCards(subView, query, subView);
      else showPrefixesTable(query);
    }
  });
  
  listBtn.addEventListener('click', () => {
    currentViewMode = 'list';
    listBtn.classList.add('active');
    cardBtn.classList.remove('active');
    const rootContainer = document.getElementById('rootCards');
    if (rootContainer) {
      rootContainer.className = 'list-view';
      rootContainer.style.display = 'block';
    }
    if (currentFilter === 'roots' || currentFilter === 'prefixes') {
      const query = document.getElementById('searchInput')?.value || '';
      if (currentFilter === 'roots') renderRootCards(subView, query, subView);
      else showPrefixesTable(query);
    }
  });
}
// ========================
// Modals Setup
// ========================
function setupModals() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
  }
  
  const verbModal = document.getElementById('verbDetailModal');
  if (verbModal) {
    verbModal.querySelector('.close-verb-modal').addEventListener('click', () => verbModal.style.display = 'none');
    verbModal.addEventListener('click', (e) => { if (e.target === verbModal) verbModal.style.display = 'none'; });
  }
  
  const nounModal = document.getElementById('nounDetailModal');
  if (nounModal) {
    nounModal.querySelector('.close-noun-modal').addEventListener('click', () => nounModal.style.display = 'none');
    nounModal.addEventListener('click', (e) => { if (e.target === nounModal) nounModal.style.display = 'none'; });
  }
  
  const adjModal = document.getElementById('adjectiveDetailModal');
  if (adjModal) {
    adjModal.querySelector('.close-adj-modal').addEventListener('click', () => adjModal.style.display = 'none');
    adjModal.addEventListener('click', (e) => { if (e.target === adjModal) adjModal.style.display = 'none'; });
  }
}

// ========================
// Stats
// ========================
function updateStats(rootCount, verbCount, nounCount, adjCount) {
  const s = document.getElementById('statsDisplay');
  if (!s) return;
  if (rootCount === undefined) {
    rootCount = typeof ROOTS !== 'undefined' ? Object.keys(ROOTS).length : 0;
    verbCount = typeof VERBS_LIST !== 'undefined' ? VERBS_LIST.length : 0;
    nounCount = typeof NOUNS_LIST !== 'undefined' ? NOUNS_LIST.length : 0;
    adjCount = typeof ADJ_LIST !== 'undefined' ? ADJ_LIST.length : 0;
  }
  const lbl = LANG.stats;
  s.textContent = `📚 ${lbl.roots[currentLanguage]}: ${rootCount} | ${lbl.verbs[currentLanguage]}: ${verbCount} | ${lbl.nouns[currentLanguage]}: ${nounCount} | ${lbl.adjs[currentLanguage]}: ${adjCount}`;
}

// ========================
// Root Cards Rendering
// ========================
function renderRootCards(filter, searchQuery, subFilter) {
  const container = document.getElementById('rootCards');
  if (!container || currentFilter === 'prefixes') return;
  container.innerHTML = '';
  
  let roots = typeof ROOTS !== 'undefined' ? Object.entries(ROOTS) : [];
    
  if (subFilter === 'favorites') {
    roots = roots.filter(([key]) => favoritesRoots.includes(key));
  } else if (subFilter === 'completed') {
    roots = roots.filter(([key]) => completedRoots.includes(key));
  }
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    roots = roots.filter(([key, root]) => {
      if (key.toLowerCase().includes(q)) return true;
      const mean = root.meaning;
      if (mean && (mean.ru?.toLowerCase().includes(q) || mean.en?.toLowerCase().includes(q) || 
                   mean.fr?.toLowerCase().includes(q) || mean.ar?.toLowerCase().includes(q))) return true;
      return root.verbs?.some(v => {
        if (v.nsv?.toLowerCase().includes(q) || v.sv?.toLowerCase().includes(q)) return true;
        return v.meaning && (v.meaning.ru?.toLowerCase().includes(q) || v.meaning.en?.toLowerCase().includes(q) ||
               v.meaning.fr?.toLowerCase().includes(q) || v.meaning.ar?.toLowerCase().includes(q));
      });
    });
  }
  
  const totalVerbs = roots.reduce((sum, [_, r]) => sum + (r.verbs?.length || 0), 0);
  
  if (currentViewMode === 'cards') {
    container.className = 'cards-view';
    container.style.display = 'grid';
    roots.forEach(([key, root]) => {
      const card = createRootCardElement(key, root);
      container.appendChild(card);
    });
  } else {
    container.className = 'list-view';
    container.style.display = 'block';
    const ul = document.createElement('ul');
    roots.forEach(([key, root]) => {
      const li = document.createElement('li');
      li.className = 'root-list-item';
      li.innerHTML = `
        <span><b>${key}</b> – ${root.meaning?.[currentLanguage] || ''}</span>
        <span style="font-size:0.8rem;color:var(--text-muted);">${root.verbs?.length || 0} глаг., ${root.derivedNouns?.length || 0} сущ.</span>
        <span class="star ${favoritesRoots.includes(key)?'active':''}" data-root="${key}" style="cursor:pointer;margin-left:auto;">★</span>
        <span class="checkmark ${completedRoots.includes(key)?'active':''}" data-root="${key}" style="cursor:pointer;margin-left:6px;">✓</span>
      `;
      li.querySelector('.star').addEventListener('click', (e) => { e.stopPropagation(); toggleFavoriteRoot(key, li.querySelector('.star')); });
      li.querySelector('.checkmark').addEventListener('click', (e) => { e.stopPropagation(); toggleCompletedRoot(key, li.querySelector('.checkmark')); });
      li.addEventListener('click', (e) => {
        if (!e.target.classList.contains('star') && !e.target.classList.contains('checkmark')) openModal(key);
      });
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
  updateStats(roots.length, totalVerbs, undefined, undefined);
}

function createRootCardElement(key, root) {
  const card = document.createElement('div');
  card.className = 'root-card';
  card.innerHTML = `
    <div class="card-header">
      <h3>${key}</h3>
      <div class="card-icons">
        <span class="star ${favoritesRoots.includes(key)?'active':''}" data-root="${key}">★</span>
        <span class="checkmark ${completedRoots.includes(key)?'active':''}" data-root="${key}">✓</span>
      </div>
    </div>
    <div class="meaning">${root.meaning?.[currentLanguage] || ''}</div>
    <div class="verb-count">${root.verbs?.length || 0} глаг. · ${root.derivedNouns?.length || 0} сущ.</div>
  `;
  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) { toggleFavoriteRoot(key, e.target); return; }
    if (e.target.classList.contains('checkmark')) { toggleCompletedRoot(key, e.target); return; }
    openModal(key);
  });
  return card;
}

function toggleFavoriteRoot(rootKey, el) {
  const idx = favoritesRoots.indexOf(rootKey);
  if (idx === -1) { favoritesRoots.push(rootKey); if(el) el.classList.add('active'); }
  else { favoritesRoots.splice(idx, 1); if(el) el.classList.remove('active'); }
  localStorage.setItem('favoritesRoots', JSON.stringify(favoritesRoots));
}

function toggleCompletedRoot(rootKey, el) {
  const idx = completedRoots.indexOf(rootKey);
  if (idx === -1) { completedRoots.push(rootKey); if(el) el.classList.add('active'); }
  else { completedRoots.splice(idx, 1); if(el) el.classList.remove('active'); }
  localStorage.setItem('completedRoots', JSON.stringify(completedRoots));
}

// ========================
// Root Detail Modal
// ========================
function openModal(rootKey) {
  const root = ROOTS?.[rootKey];
  if (!root) return;
  const modal = document.getElementById('modal');
  document.getElementById('modalRootTitle').textContent = rootKey;
  document.getElementById('modalMeaning').textContent = root.meaning?.[currentLanguage] || '';
  document.getElementById('modalDescription').textContent = root.description?.[currentLanguage] || '';
  
  const verbsContainer = document.getElementById('modalVerbs');
  verbsContainer.innerHTML = '';
  root.verbs?.forEach((v, idx) => {
    const div = document.createElement('div');
    div.className = 'verb-entry';
    div.innerHTML = `
      <div class="verb-pair" data-verb-idx="${idx}">
        <span class="nsv">НСВ: ${v.nsv}</span> | <span class="sv">СВ: ${v.sv}</span>
        <div class="verb-meaning">${v.meaning?.[currentLanguage] || ''}</div>
      </div>
      <div class="conjugation-tables" id="conj-${rootKey}-${idx}" style="display:none;">${buildConjugationTables(v)}</div>
    `;
    div.querySelector('.verb-pair').addEventListener('click', (e) => {
      e.stopPropagation();
      const conjDiv = document.getElementById(`conj-${rootKey}-${idx}`);
      conjDiv.style.display = conjDiv.style.display === 'none' ? 'block' : 'none';
    });
    verbsContainer.appendChild(div);
  });
  
  const examplesContainer = document.getElementById('modalExamples');
  examplesContainer.innerHTML = '';
  root.examples?.forEach(ex => {
    const exDiv = document.createElement('div');
    exDiv.className = 'example-item';
    exDiv.innerHTML = `<div class="ru">${ex.ru}</div><div class="translation">${ex[currentLanguage] || ''}</div>`;
    examplesContainer.appendChild(exDiv);
  });
  
  const nounsContainer = document.getElementById('modalNouns');
  nounsContainer.innerHTML = '';
  root.derivedNouns?.forEach(n => {
    const nounDiv = document.createElement('div');
    nounDiv.className = 'noun-item';
    nounDiv.innerHTML = `<strong>${n.noun}</strong> – ${n.meaning?.[currentLanguage] || ''}`;
    nounsContainer.appendChild(nounDiv);
  });
  
  modal.style.display = 'block';
}

function buildConjugationTables(verb) {
  const conj = verb.conjugations;
  if (!conj) return '<p>Нет данных о спряжении</p>';
  let html = '';
  if (conj.imperfective) {
    html += '<div class="conj-block"><h4>НСВ</h4>';
    html += buildTenseBlock('Настоящее', conj.imperfective.present);
    html += buildTenseBlock('Будущее (сост.)', conj.imperfective.future);
    html += buildPastBlock(conj.imperfective.past);
    html += '</div>';
  }
  if (conj.perfective) {
    html += '<div class="conj-block"><h4>СВ</h4>';
    html += buildTenseBlock('Будущее', conj.perfective.future);
    html += buildPastBlock(conj.perfective.past);
    html += '</div>';
  }
  return html || '<p>Нет данных</p>';
}

function buildTenseBlock(title, forms) {
  if (!forms) return '';
  const pronouns = ['ya', 'ti', 'on', 'mi', 'vi', 'oni'];
  const labels = { ya: 'Я', ti: 'Ты', on: 'Он/Оно', mi: 'Мы', vi: 'Вы', oni: 'Они' };
  let html = `<div class="tense">${title}</div><div class="conj-grid">`;
  pronouns.forEach(p => { if (forms[p]) html += `<div>${labels[p]}: ${forms[p]}</div>`; });
  html += '</div>';
  return html;
}

function buildPastBlock(forms) {
  if (!forms) return '';
  return `<div class="tense">Прош.</div><div class="past-row">м: ${forms.masc}, ж: ${forms.fem}, с: ${forms.neut}, мн: ${forms.pl}</div>`;
}

// ========================
// Prefixes
// ========================
function showPrefixesTable(searchQuery) {
  const container = document.getElementById('rootCards');
  container.innerHTML = '';
  container.className = 'cards-view';
  container.style.display = 'grid';
  
  if (typeof PREFIXES === 'undefined') {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;">Нет данных о префиксах</p>';
    return;
  }
  
  let prefixes = Object.entries(PREFIXES);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    prefixes = prefixes.filter(([p, d]) => 
      p.toLowerCase().includes(q) || 
      d.meaning?.[currentLanguage]?.toLowerCase().includes(q)
    );
  }
  
  prefixes.forEach(([prefix, data]) => {
    const card = document.createElement('div');
    card.className = 'root-card';
    card.innerHTML = `<h3>${prefix}</h3><div class="meaning">${data.meaning?.[currentLanguage] || ''}</div>`;
    card.addEventListener('click', () => openPrefixDetail(prefix, data));
    container.appendChild(card);
  });
}

function openPrefixDetail(prefix, data) {
  const modal = document.getElementById('modal');
  document.getElementById('modalRootTitle').textContent = `Префикс «${prefix}»`;
  document.getElementById('modalMeaning').textContent = data.meaning?.[currentLanguage] || '';
  document.getElementById('modalDescription').textContent = '';
  document.getElementById('modalVerbs').innerHTML = '';
  document.getElementById('modalNouns').innerHTML = '';
  const examplesContainer = document.getElementById('modalExamples');
  examplesContainer.innerHTML = '';
  data.examples?.forEach(ex => {
    const div = document.createElement('div');
    div.className = 'example-item';
    div.innerHTML = `<div class="ru">${ex.ru}</div><div class="translation">${ex[currentLanguage] || ''}</div>`;
    examplesContainer.appendChild(div);
  });
  modal.style.display = 'block';
}

// ========================
// VERB CATEGORIES
// ========================
const CAT_TRANSLATIONS = {
  "all":      { ru:"Все", en:"All", fr:"Tous", ar:"الكل" },
  "حركة":     { ru:"Движение", en:"Motion", fr:"Mouvement", ar:"حركة" },
  "حواس":     { ru:"Чувства", en:"Senses", fr:"Sens", ar:"حواس" },
  "تواصل":    { ru:"Общение", en:"Communication", fr:"Communication", ar:"تواصل" },
  "ذهنية":    { ru:"Умственные", en:"Mental", fr:"Mental", ar:"ذهنية" },
  "عمل":      { ru:"Работа и быт", en:"Work & Life", fr:"Travail & Vie", ar:"عمل وحياة" },
  "عواطف":    { ru:"Эмоции", en:"Emotions", fr:"Émotions", ar:"عواطف" },
  "طبيعة":    { ru:"Природа и погода", en:"Nature & Weather", fr:"Nature et météo", ar:"طبيعة وجو" },
  "صحة":      { ru:"Здоровье и тело", en:"Health & Body", fr:"Santé et corps", ar:"صحة وجسم" },
  "علاقات":   { ru:"Отношения и общество", en:"Relations & Social", fr:"Relations et société", ar:"علاقات واجتماع" },
  "تقنية":    { ru:"Техника и цифра", en:"Technology & Digital", fr:"Technologie et numérique", ar:"تقنية ورقمية" },
  "تعليم":    { ru:"Образование и культура", en:"Education & Culture", fr:"Éducation et culture", ar:"تعليم وثقافة" },
  "اقتصاد":   { ru:"Экономика и деньги", en:"Economy & Money", fr:"Économie et argent", ar:"اقتصاد ومال" },
  "قانون":    { ru:"Право и политика", en:"Law & Politics", fr:"Droit et politique", ar:"قانون وسياسة" },
  "رياضة":    { ru:"Спорт и игры", en:"Sports & Games", fr:"Sport et jeux", ar:"رياضة وألعاب" },
  "فن":       { ru:"Искусство и творчество", en:"Art & Creativity", fr:"Art et créativité", ar:"فن وإبداع" },
  "عسكرية":   { ru:"Военное дело", en:"Military & Defense", fr:"Militaire et défense", ar:"عسكرية ودفاع" }
};

function renderVerbCategories(searchQuery) {
  activeVerbCat = '';
  const container = document.getElementById('verbCategoryCards');
  const listContainer = document.getElementById('verbListContainer');
  if (!container) return;
  container.innerHTML = '';
  listContainer.innerHTML = '';
  
  let verbs = typeof VERBS_LIST !== 'undefined' ? [...VERBS_LIST] : [];
  if (subView === 'favorites') verbs = verbs.filter(v => favVerbs.includes(v.nsv));
  else if (subView === 'completed') verbs = verbs.filter(v => completedVerbs.includes(v.nsv));
  
  const counts = {};
  verbs.forEach(v => { counts[v.cat] = (counts[v.cat] || 0) + 1; });
  
  Object.entries(CAT_TRANSLATIONS).forEach(([key, trans]) => {
    const count = key === 'all' ? verbs.length : (counts[key] || 0);
    if (count === 0 && key !== 'all') return;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `<h4>${trans[currentLanguage] || key}</h4><div class="cat-count">${count} глаг.</div>`;
    card.addEventListener('click', () => {
      activeVerbCat = key;
      container.innerHTML = '';
      const query = document.getElementById('searchInput')?.value || '';
      renderVerbList(key, query, subView);
    });
    container.appendChild(card);
  });
}

function renderVerbList(category, searchQuery, subFilter) {
  const container = document.getElementById('verbListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  if (typeof VERBS_LIST === 'undefined') {
    container.innerHTML = '<p>Нет данных о глаголах</p>';
    return;
  }
  
  let verbs = [...VERBS_LIST];
       
  if (subFilter === 'favorites') verbs = verbs.filter(v => favVerbs.includes(v.nsv));
  else if (subFilter === 'completed') verbs = verbs.filter(v => completedVerbs.includes(v.nsv));
  else subFilter = 'all';
  
  if (category !== 'all') verbs = verbs.filter(v => v.cat === category);
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    verbs = verbs.filter(v => 
      v.nsv?.toLowerCase().includes(q) || 
      v.sv?.toLowerCase().includes(q) || 
      v.meaning?.[currentLanguage]?.toLowerCase().includes(q)
    );
  }
  
  const backDiv = document.createElement('div');
  backDiv.style.cssText = 'padding:8px 0;cursor:pointer;color:var(--accent);font-weight:600;margin-bottom:8px;';
  backDiv.innerHTML = '← ' + (CAT_TRANSLATIONS[category]?.[currentLanguage] || category);
  backDiv.addEventListener('click', () => {
    activeVerbCat = '';
    const query = document.getElementById('searchInput')?.value || '';
    renderVerbCategories(query);
  });
  container.appendChild(backDiv);
  
  const grouped = {};
  verbs.forEach(v => {
    const key = subFilter !== 'all' ? 'results' : (v.cat || 'other');
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(v);
  });
  
  const wrapper = document.createElement('div');
  wrapper.className = 'list-view-alt';
  
  let itemNum = 0;
  for (const [cat, items] of Object.entries(grouped)) {
    if (subFilter === 'all') {
      const h3 = document.createElement('h3');
      h3.textContent = CAT_TRANSLATIONS[cat]?.[currentLanguage] || cat;
      wrapper.appendChild(h3);
    }
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    
    items.forEach(v => {
      itemNum++;
      const li = document.createElement('li');
      li.className = 'list-item-alt';
      li.innerHTML = `
        <span class="item-number">${String(itemNum).padStart(2, '0')}</span>
        <span class="verb-main" style="flex:1;cursor:pointer;">
          <b>${v.nsv}</b> / <b>${v.sv}</b> – ${v.meaning?.[currentLanguage] || ''}
        </span>
        <span class="verb-actions">
          <span class="verb-fav ${favVerbs.includes(v.nsv)?'active':''}" data-verb="${v.nsv}">★</span>
          <span class="verb-done ${completedVerbs.includes(v.nsv)?'active':''}" data-verb="${v.nsv}">✓</span>
        </span>
      `;
      li.querySelector('.verb-main').addEventListener('click', () => showVerbDetail(v));
      li.querySelector('.verb-fav').addEventListener('click', (e) => { e.stopPropagation(); toggleFavVerb(v.nsv); });
      li.querySelector('.verb-done').addEventListener('click', (e) => { e.stopPropagation(); toggleCompletedVerb(v.nsv); });
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }
  container.appendChild(wrapper);
}

function showVerbDetail(verb) {
  const modal = document.getElementById('verbDetailModal');
  if (!modal) return;
  modal.querySelector('.verb-nsv-title').textContent = verb.nsv;
  modal.querySelector('.verb-sv-title').textContent = verb.sv;
  modal.querySelector('.verb-meaning-display').textContent = verb.meaning?.[currentLanguage] || '';
  modal.querySelector('.verb-imperative-display').textContent = verb.imp || '—';
  modal.querySelector('.verb-example-ru').textContent = verb.example?.ru || '';
  modal.querySelector('.verb-example-translation').textContent = verb.example?.[currentLanguage] || '';
  modal.querySelector('.verb-root-display').textContent = verb.root || '—';
  modal.style.display = 'block';
}

function toggleFavVerb(verb) {
  const idx = favVerbs.indexOf(verb);
  if (idx === -1) favVerbs.push(verb); else favVerbs.splice(idx, 1);
  localStorage.setItem('favVerbs', JSON.stringify(favVerbs));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeVerbCat === '') renderVerbCategories(query);
  else renderVerbList(activeVerbCat, query, subView);
}

function toggleCompletedVerb(verb) {
  const idx = completedVerbs.indexOf(verb);
  if (idx === -1) completedVerbs.push(verb); else completedVerbs.splice(idx, 1);
  localStorage.setItem('completedVerbs', JSON.stringify(completedVerbs));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeVerbCat === '') renderVerbCategories(query);
  else renderVerbList(activeVerbCat, query, subView);
  updateStats();
}

// ========================
// NOUN CATEGORIES
// ========================
const NOUN_CAT_TRANSLATIONS = {
  "all": { ru:"Все", en:"All", fr:"Tous", ar:"الكل" },
  "еда": { ru:"Еда и напитки", en:"Food & Drinks", fr:"Alimentation", ar:"طعام وشراب" },
  "одежда": { ru:"Одежда", en:"Clothing", fr:"Vêtements", ar:"ملابس" },
  "жильё": { ru:"Жильё и быт", en:"Home & Everyday", fr:"Maison & Quotidien", ar:"مسكن وحياة" },
  "семья": { ru:"Семья и отношения", en:"Family & Relations", fr:"Famille & Relations", ar:"أسرة وعلاقات" },
  "тело": { ru:"Части тела", en:"Body Parts", fr:"Parties du corps", ar:"أجزاء الجسم" },
  "здоровье": { ru:"Здоровье и медицина", en:"Health & Medicine", fr:"Santé & Médecine", ar:"صحة وطب" },
  "природа": { ru:"Природа и погода", en:"Nature & Weather", fr:"Nature & Météo", ar:"طبيعة وجو" },
  "животные": { ru:"Животные и растения", en:"Animals & Plants", fr:"Animaux & Plantes", ar:"حيوانات ونباتات" },
  "город": { ru:"Город и транспорт", en:"City & Transport", fr:"Ville & Transport", ar:"مدينة ومواصلات" },
  "образование": { ru:"Образование и наука", en:"Education & Science", fr:"Éducation & Science", ar:"تعليم وعلوم" },
  "работа": { ru:"Работа и профессии", en:"Work & Professions", fr:"Travail & Professions", ar:"عمل ومهن" },
  "техника": { ru:"Техника и технологии", en:"Technology", fr:"Technologie", ar:"تقنية" },
  "искусство": { ru:"Искусство и культура", en:"Art & Culture", fr:"Art & Culture", ar:"فن وثقافة" },
  "спорт": { ru:"Спорт и игры", en:"Sports & Games", fr:"Sport & Jeux", ar:"رياضة وألعاب" },
  "экономика": { ru:"Экономика и деньги", en:"Economy & Money", fr:"Économie & Argent", ar:"اقتصاد ومال" },
  "право": { ru:"Право и политика", en:"Law & Politics", fr:"Droit & Politique", ar:"قانون وسياسة" },
  "абстракт": { ru:"Абстрактные понятия", en:"Abstract Concepts", fr:"Concepts abstraits", ar:"مفاهيم مجردة" },
  "биология": { ru:"Биология и физиология", en:"Biology & Physiology", fr:"Biologie & Physiologie", ar:"بيولوجيا وفسيولوجيا" },
  "армия": { ru:"Армия и оборона", en:"Military & Defense", fr:"Militaire et défense", ar:"عسكرية ودفاع" },
  "время": { ru:"Время и даты", en:"Time & Dates", fr:"Temps & Dates", ar:"وقت وتواريخ" },
  "материалы": { ru:"Материалы и вещества", en:"Materials & Substances", fr:"Matériaux & Substances", ar:"مواد وخامات" }
};

function renderNounCategories(searchQuery) {
  activeNounCat = '';
  const container = document.getElementById('nounCategoryCards');
  const listContainer = document.getElementById('nounListContainer');
  if (!container) return;
  container.innerHTML = '';
  listContainer.innerHTML = '';
  
  let nouns = typeof NOUNS_LIST !== 'undefined' ? [...NOUNS_LIST] : [];
  if (subView === 'favorites') nouns = nouns.filter(n => favNouns.includes(n.noun));
  else if (subView === 'completed') nouns = nouns.filter(n => completedNouns.includes(n.noun));
  
  const counts = {};
  nouns.forEach(n => { counts[n.cat] = (counts[n.cat] || 0) + 1; });
  
  Object.entries(NOUN_CAT_TRANSLATIONS).forEach(([key, trans]) => {
    const count = key === 'all' ? nouns.length : (counts[key] || 0);
    if (count === 0 && key !== 'all') return;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `<h4>${trans[currentLanguage] || key}</h4><div class="cat-count">${count} сущ.</div>`;
    card.addEventListener('click', () => {
      activeNounCat = key;
      container.innerHTML = '';
      const query = document.getElementById('searchInput')?.value || '';
      renderNounList(key, query, subView);
    });
    container.appendChild(card);
  });
}

function renderNounList(category, searchQuery, subFilter) {
  const container = document.getElementById('nounListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  if (typeof NOUNS_LIST === 'undefined') {
    container.innerHTML = '<p>Нет данных о существительных</p>';
    return;
  }
  
  let nouns = [...NOUNS_LIST];
   
  if (subFilter === 'favorites') nouns = nouns.filter(n => favNouns.includes(n.noun));
  else if (subFilter === 'completed') nouns = nouns.filter(n => completedNouns.includes(n.noun));
  else subFilter = 'all';
  
  if (category !== 'all') nouns = nouns.filter(n => n.cat === category);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    nouns = nouns.filter(n => n.noun?.toLowerCase().includes(q) || n.meaning?.[currentLanguage]?.toLowerCase().includes(q));
  }
  
  const backDiv = document.createElement('div');
  backDiv.style.cssText = 'padding:8px 0;cursor:pointer;color:var(--accent);font-weight:600;margin-bottom:8px;';
  backDiv.innerHTML = '← ' + (NOUN_CAT_TRANSLATIONS[category]?.[currentLanguage] || category);
  backDiv.addEventListener('click', () => {
    activeNounCat = '';
    const query = document.getElementById('searchInput')?.value || '';
    renderNounCategories(query);
  });
  container.appendChild(backDiv);
  
  const grouped = {};
  nouns.forEach(n => {
    const key = subFilter !== 'all' ? 'results' : (n.cat || 'other');
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(n);
  });
  
  const wrapper = document.createElement('div');
  wrapper.className = 'list-view-alt';
  
  let itemNum = 0;
  for (const [cat, items] of Object.entries(grouped)) {
    if (subFilter === 'all') {
      const h3 = document.createElement('h3');
      h3.textContent = NOUN_CAT_TRANSLATIONS[cat]?.[currentLanguage] || cat;
      wrapper.appendChild(h3);
    }
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    
    items.forEach(n => {
      itemNum++;
      const li = document.createElement('li');
      li.className = 'list-item-alt';
      li.innerHTML = `
        <span class="item-number">${String(itemNum).padStart(2, '0')}</span>
        <span class="noun-main" style="flex:1;cursor:pointer;"><b>${n.noun}</b> – ${n.meaning?.[currentLanguage] || ''}</span>
        <span class="noun-actions">
          <span class="noun-fav ${favNouns.includes(n.noun)?'active':''}" data-noun="${n.noun}">★</span>
          <span class="noun-done ${completedNouns.includes(n.noun)?'active':''}" data-noun="${n.noun}">✓</span>
        </span>
      `;
      li.querySelector('.noun-main').addEventListener('click', () => showNounDetail(n));
      li.querySelector('.noun-fav').addEventListener('click', (e) => { e.stopPropagation(); toggleFavNoun(n.noun); });
      li.querySelector('.noun-done').addEventListener('click', (e) => { e.stopPropagation(); toggleCompletedNoun(n.noun); });
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }
  container.appendChild(wrapper);
}

function showNounDetail(nounObj) {
  const modal = document.getElementById('nounDetailModal');
  if (!modal) return;
  modal.querySelector('.noun-word').textContent = nounObj.noun;
  modal.querySelector('.noun-meaning-display').textContent = nounObj.meaning?.[currentLanguage] || '';
  modal.querySelector('.noun-gender-display').textContent = nounObj.gender || '—';
  modal.querySelector('.noun-plural-display').textContent = nounObj.plural || '—';
  modal.querySelector('.noun-example-ru').textContent = nounObj.example?.ru || '';
  modal.querySelector('.noun-example-translation').textContent = nounObj.example?.[currentLanguage] || '';
  const extraDiv = document.getElementById('nounExtraInfo');
  if (nounObj.extra) {
    extraDiv.style.display = 'block';
    extraDiv.querySelector('.noun-extra-display').textContent = nounObj.extra;
  } else {
    extraDiv.style.display = 'none';
  }
  modal.style.display = 'block';
}

function toggleFavNoun(noun) {
  const idx = favNouns.indexOf(noun);
  if (idx === -1) favNouns.push(noun); else favNouns.splice(idx, 1);
  localStorage.setItem('favNouns', JSON.stringify(favNouns));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeNounCat === '') renderNounCategories(query);
  else renderNounList(activeNounCat, query, subView);
}

function toggleCompletedNoun(noun) {
  const idx = completedNouns.indexOf(noun);
  if (idx === -1) completedNouns.push(noun); else completedNouns.splice(idx, 1);
  localStorage.setItem('completedNouns', JSON.stringify(completedNouns));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeNounCat === '') renderNounCategories(query);
  else renderNounList(activeNounCat, query, subView);
}

// ========================
// ADJECTIVE CATEGORIES
// ========================
const ADJ_CAT_TRANSLATIONS = {
  "all": { ru:"Все", en:"All", fr:"Tous", ar:"الكل" },
  "качество": { ru:"Качество", en:"Quality", fr:"Qualité", ar:"جودة" },
  "внешность": { ru:"Внешность", en:"Appearance", fr:"Apparence", ar:"مظهر خارجي" },
  "характер": { ru:"Характер", en:"Character", fr:"Caractère", ar:"شخصية" },
  "размер": { ru:"Размер и форма", en:"Size & Shape", fr:"Taille & Forme", ar:"حجم وشكل" },
  "цвета": { ru:"Цвета", en:"Colors", fr:"Couleurs", ar:"ألوان" },
  "возраст": { ru:"Возраст", en:"Age", fr:"Âge", ar:"عمر" },
  "ощущения": { ru:"Ощущения", en:"Sensations", fr:"Sensations", ar:"أحاسيس" },
  "отношения": { ru:"Отношения", en:"Relations", fr:"Relations", ar:"علاقات" },
  "город": { ru:"Город", en:"City", fr:"Ville", ar:"مدينة" },
  "образование": { ru:"Образование", en:"Education", fr:"Éducation", ar:"تعليم" },
  "работа": { ru:"Работа", en:"Work", fr:"Travail", ar:"عمل" },
  "техника": { ru:"Техника", en:"Technology", fr:"Technologie", ar:"تقنية" },
  "искусство": { ru:"Искусство", en:"Art", fr:"Art", ar:"فن" },
  "спорт": { ru:"Спорт", en:"Sports", fr:"Sport", ar:"رياضة" },
  "экономика": { ru:"Экономика", en:"Economy", fr:"Économie", ar:"اقتصاد" },
  "право": { ru:"Право", en:"Law", fr:"Droit", ar:"قانون" },
  "абстракт": { ru:"Абстрактные", en:"Abstract", fr:"Abstrait", ar:"مجرد" },
  "биология": { ru:"Биология", en:"Biology", fr:"Biologie", ar:"أحياء" },
  "армия": { ru:"Армия", en:"Military", fr:"Militaire", ar:"جيش" },
  "время": { ru:"Время", en:"Time", fr:"Temps", ar:"زمن" },
  "материалы": { ru:"Материалы", en:"Materials", fr:"Matériaux", ar:"مواد" },
  "еда": { ru:"Еда и напитки", en:"Food & Drinks", fr:"Alimentation", ar:"طعام وشراب" },
  "природа": { ru:"Природа", en:"Nature", fr:"Nature", ar:"طبيعة" }
};

function renderAdjCategories(searchQuery) {
  activeAdjCat = '';
  const container = document.getElementById('adjCategoryCards');
  const listContainer = document.getElementById('adjListContainer');
  if (!container) return;
  container.innerHTML = '';
  listContainer.innerHTML = '';
  
  let adjs = typeof ADJ_LIST !== 'undefined' ? [...ADJ_LIST] : [];
  if (subView === 'favorites') adjs = adjs.filter(a => favAdjectives.includes(a.adj));
  else if (subView === 'completed') adjs = adjs.filter(a => completedAdjectives.includes(a.adj));
  
  const counts = {};
  adjs.forEach(a => { counts[a.cat] = (counts[a.cat] || 0) + 1; });
  
  Object.entries(ADJ_CAT_TRANSLATIONS).forEach(([key, trans]) => {
    const count = key === 'all' ? adjs.length : (counts[key] || 0);
    if (count === 0 && key !== 'all') return;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `<h4>${trans[currentLanguage] || key}</h4><div class="cat-count">${count} прил.</div>`;
    card.addEventListener('click', () => {
      activeAdjCat = key;
      container.innerHTML = '';
      const query = document.getElementById('searchInput')?.value || '';
      renderAdjectiveList(key, query, subView);
    });
    container.appendChild(card);
  });
}

function renderAdjectiveList(category, searchQuery, subFilter) {
  const container = document.getElementById('adjListContainer');
  if (!container) return;
  container.innerHTML = '';
  
  if (typeof ADJ_LIST === 'undefined') {
    container.innerHTML = '<p>Нет данных о прилагательных</p>';
    return;
  }
  
  let adjs = [...ADJ_LIST];
  
  if (subFilter === 'favorites') adjs = adjs.filter(a => favAdjectives.includes(a.adj));
  else if (subFilter === 'completed') adjs = adjs.filter(a => completedAdjectives.includes(a.adj));
  else subFilter = 'all';
  
  if (category !== 'all') adjs = adjs.filter(a => a.cat === category);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    adjs = adjs.filter(a => (a.adjDisplay || a.adj)?.toLowerCase().includes(q) || a.meaning?.[currentLanguage]?.toLowerCase().includes(q));
  }
  
  const backDiv = document.createElement('div');
  backDiv.style.cssText = 'padding:8px 0;cursor:pointer;color:var(--accent);font-weight:600;margin-bottom:8px;';
  backDiv.innerHTML = '← ' + (ADJ_CAT_TRANSLATIONS[category]?.[currentLanguage] || category);
  backDiv.addEventListener('click', () => {
    activeAdjCat = '';
    const query = document.getElementById('searchInput')?.value || '';
    renderAdjCategories(query);
  });
  container.appendChild(backDiv);
  
  const grouped = {};
  adjs.forEach(a => {
    const key = subFilter !== 'all' ? 'results' : (a.cat || 'other');
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(a);
  });
  
  const wrapper = document.createElement('div');
  wrapper.className = 'list-view-alt';
  
  let itemNum = 0;
  for (const [cat, items] of Object.entries(grouped)) {
    if (subFilter === 'all') {
      const h3 = document.createElement('h3');
      h3.textContent = ADJ_CAT_TRANSLATIONS[cat]?.[currentLanguage] || cat;
      wrapper.appendChild(h3);
    }
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    
    items.forEach(a => {
      itemNum++;
      const li = document.createElement('li');
      li.className = 'list-item-alt';
      li.innerHTML = `
        <span class="item-number">${String(itemNum).padStart(2, '0')}</span>
        <span class="adj-main" style="flex:1;cursor:pointer;"><b>${a.adjDisplay || a.adj}</b> – ${a.meaning?.[currentLanguage] || ''}</span>
        <span class="adj-actions">
          <span class="adj-fav ${favAdjectives.includes(a.adj)?'active':''}" data-adj="${a.adj}">★</span>
          <span class="adj-done ${completedAdjectives.includes(a.adj)?'active':''}" data-adj="${a.adj}">✓</span>
        </span>
      `;
      li.querySelector('.adj-main').addEventListener('click', () => showAdjectiveDetail(a));
      li.querySelector('.adj-fav').addEventListener('click', (e) => { e.stopPropagation(); toggleFavAdjective(a.adj); });
      li.querySelector('.adj-done').addEventListener('click', (e) => { e.stopPropagation(); toggleCompletedAdjective(a.adj); });
      ul.appendChild(li);
    });
    wrapper.appendChild(ul);
  }
  container.appendChild(wrapper);
}

function showAdjectiveDetail(adj) {
  const modal = document.getElementById('adjectiveDetailModal');
  if (!modal) return;
  modal.querySelector('.adj-word').textContent = adj.adjDisplay || adj.adj;
  modal.querySelector('.adj-meaning-display').textContent = adj.meaning?.[currentLanguage] || '';
  modal.querySelector('.adj-adverb-display').textContent = adj.advDisplay || adj.adv || '—';
  modal.querySelector('.adj-stress-display').textContent = adj.stress || '—';
  
  const decl = adj.declension;
  let tableHtml = '<table class="decl-table"><thead><tr><th>Падеж</th><th>Мужской</th><th>Женский</th><th>Средний</th><th>Множ.</th></tr></thead><tbody>';
  
  const cases = [
    { key: 'nom', name: 'Именительный', num: 1 },
    { key: 'gen', name: 'Родительный', num: 2 },
    { key: 'dat', name: 'Дательный', num: 3 },
    { key: 'acc', name: 'Винительный', num: 4 },
    { key: 'ins', name: 'Творительный', num: 5 },
    { key: 'pre', name: 'Предложный', num: 6 }
  ];
  
  cases.forEach(c => {
    tableHtml += `<tr>
      <td style="padding:7px;border:1px solid var(--border-card);font-weight:600;">${c.name} <span class="case-num">${c.num}</span></td>
      <td style="padding:7px;border:1px solid var(--border-card);">${decl?.masc?.[c.key+'Display'] || decl?.masc?.[c.key] || '—'}</td>
      <td style="padding:7px;border:1px solid var(--border-card);">${decl?.fem?.[c.key+'Display'] || decl?.fem?.[c.key] || '—'}</td>
      <td style="padding:7px;border:1px solid var(--border-card);">${decl?.neut?.[c.key+'Display'] || decl?.neut?.[c.key] || '—'}</td>
      <td style="padding:7px;border:1px solid var(--border-card);">${decl?.plur?.[c.key+'Display'] || decl?.plur?.[c.key] || '—'}</td>
    </tr>`;
  });
  
  tableHtml += '</tbody></table>';
  modal.querySelector('.adj-declension-table').innerHTML = tableHtml;
  
  const ex = adj.examples?.[0] || {};
  modal.querySelector('.adj-example-ru').textContent = ex.ru || '';
  modal.querySelector('.adj-example-translation').textContent = ex[currentLanguage] || '';
  modal.style.display = 'block';
}

function toggleFavAdjective(adj) {
  const idx = favAdjectives.indexOf(adj);
  if (idx === -1) favAdjectives.push(adj); else favAdjectives.splice(idx, 1);
  localStorage.setItem('favAdjectives', JSON.stringify(favAdjectives));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeAdjCat === '') renderAdjCategories(query);
  else renderAdjectiveList(activeAdjCat, query, subView);
}

function toggleCompletedAdjective(adj) {
  const idx = completedAdjectives.indexOf(adj);
  if (idx === -1) completedAdjectives.push(adj); else completedAdjectives.splice(idx, 1);
  localStorage.setItem('completedAdjectives', JSON.stringify(completedAdjectives));
  const query = document.getElementById('searchInput')?.value || '';
  if (activeAdjCat === '') renderAdjCategories(query);
  else renderAdjectiveList(activeAdjCat, query, subView);
}

// ========================
// QUIZ SYSTEM
// ========================
function setupQuiz() {
  const startBtn = document.getElementById('quizStartBtn');
  const backBtn = document.getElementById('quizBackBtn');
  const restartBtn = document.getElementById('quizRestartBtn');
  const backFinishBtn = document.getElementById('quizBackFromFinishBtn');
  const nextBtn = document.getElementById('quizNextBtn');
  const skipBtn = document.getElementById('quizSkipBtn');
  const stopBtn = document.getElementById('quizStopBtn');
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  
  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (backBtn) backBtn.addEventListener('click', exitQuiz);
  if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
  if (backFinishBtn) backFinishBtn.addEventListener('click', exitQuiz);
  if (nextBtn) nextBtn.addEventListener('click', () => { if (quizActive) loadNewQuizQuestion(); });
  if (skipBtn) skipBtn.addEventListener('click', skipQuizQuestion);
  if (stopBtn) stopBtn.addEventListener('click', stopQuiz);
  if (submitBtn) submitBtn.addEventListener('click', submitQuizAnswer);
}

// (Duplicate Enter listener removed; the one inside DOMContentLoaded is sufficient)

function enterQuizView() {
  if (currentFilter === 'nouns') {
    quizCategory = 'nouns';
  } else if (currentFilter === 'adjectives') {
    quizCategory = 'adjectives';
  } else {
    quizCategory = 'verbs';
  }
  hideAllViews();
  document.getElementById('quizContainer').style.display = 'block';
  quizActive = false;
  quizStarted = false;
  quizScore = 0;
  quizMistakes = [];
  clearInterval(quizTimer);
  updateQuizSettingsTexts();
  document.getElementById('quizSettingsPanel').style.display = 'block';
  document.getElementById('quizGamePanel').style.display = 'none';
  document.getElementById('quizFinishPanel').style.display = 'none';
  updateQuizUITexts();
  toggleViewButtonsVisibility();
}

function exitQuiz() {
  quizActive = false;
  quizStarted = false;
  clearInterval(quizTimer);
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('rootCards').style.display = 'grid';
  currentFilter = 'roots';
  subView = 'all';
  updateSubNavUI();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const rootsBtn = document.querySelector('[data-filter="roots"]');
  if (rootsBtn) rootsBtn.classList.add('active');
  renderRootCards('all', '', 'all');
  updateStats();
  toggleViewButtonsVisibility();
}

function startQuiz() {
  quizType = document.getElementById('quizTypeSelect').value;
  quizTotalTime = parseInt(document.getElementById('quizTimeSelect').value);
  quizTimeLeft = quizTotalTime === 0 ? 999999 : quizTotalTime;
  quizSource = document.getElementById('quizSourceSelect').value;
  quizActive = true;
  quizStarted = true;
  quizScore = 0;
  quizMistakes = [];
  
  document.getElementById('quizSettingsPanel').style.display = 'none';
  document.getElementById('quizGamePanel').style.display = 'block';
  document.getElementById('quizFinishPanel').style.display = 'none';
  
  updateQuizScoreDisplay();
  updateQuizTimerDisplay();
  
  clearInterval(quizTimer);
  startQuizTimer();
  loadNewQuizQuestion();
}

function stopQuiz() {
  if (!quizActive) return;
  clearInterval(quizTimer);
  quizActive = false;
  quizStarted = false;
  finishQuiz();
}

function restartQuiz() {
  clearInterval(quizTimer);
  quizActive = false;
  quizStarted = false;
  quizScore = 0;
  quizMistakes = [];
  quizTimeLeft = quizTotalTime === 0 ? 999999 : quizTotalTime;
  document.getElementById('quizSettingsPanel').style.display = 'block';
  document.getElementById('quizGamePanel').style.display = 'none';
  document.getElementById('quizFinishPanel').style.display = 'none';
}

function startQuizTimer() {
  if (quizTotalTime === 0) {
    updateQuizTimerDisplay();
    return;
  }
  updateQuizTimerDisplay();
  quizTimer = setInterval(() => {
    quizTimeLeft--;
    updateQuizTimerDisplay();
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      quizActive = false;
      quizStarted = false;
      finishQuiz();
    }
  }, 1000);
}

function updateQuizTimerDisplay() {
  const timerEl = document.getElementById('quizTimerDisplay');
  if (timerEl) {
    if (quizTotalTime === 0) {
      timerEl.textContent = '∞';
    } else {
      timerEl.textContent = `⏱ ${quizTimeLeft}с`;
    }
  }
}

function updateQuizScoreDisplay() {
  const scoreEl = document.getElementById('quizScoreDisplay');
  if (scoreEl) scoreEl.textContent = `🏆 ${quizScore}`;
}

function loadNewQuizQuestion() {
  if (!quizActive) return;
  quizAnswered = false;
  
  const inputField = document.getElementById('quizAnswerInput');
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  if (inputField) inputField.disabled = false;
  if (submitBtn) submitBtn.disabled = false;
  
  let sourceItems = [];
  
  if (quizCategory === 'verbs') {
    sourceItems = typeof VERBS_LIST !== 'undefined' ? [...VERBS_LIST] : [];
  } else if (quizCategory === 'nouns') {
    sourceItems = typeof NOUNS_LIST !== 'undefined' ? [...NOUNS_LIST] : [];
  } else if (quizCategory === 'adjectives') {
    sourceItems = typeof ADJ_LIST !== 'undefined' ? [...ADJ_LIST] : [];
  }
  
  if (quizSource === 'favorites') {
    if (quizCategory === 'verbs') sourceItems = sourceItems.filter(v => favVerbs.includes(v.nsv));
    else if (quizCategory === 'nouns') sourceItems = sourceItems.filter(n => favNouns.includes(n.noun));
    else if (quizCategory === 'adjectives') sourceItems = sourceItems.filter(a => favAdjectives.includes(a.adj));
  } else if (quizSource === 'completed') {
    if (quizCategory === 'verbs') sourceItems = sourceItems.filter(v => completedVerbs.includes(v.nsv));
    else if (quizCategory === 'nouns') sourceItems = sourceItems.filter(n => completedNouns.includes(n.noun));
    else if (quizCategory === 'adjectives') sourceItems = sourceItems.filter(a => completedAdjectives.includes(a.adj));
  }
  
  if (sourceItems.length === 0) {
    document.querySelector('.quiz-question').innerHTML = '<strong>Нет доступных слов</strong>';
    document.querySelector('.quiz-options').innerHTML = '';
    return;
  }
  
  let actualType = quizType;
  if (quizType === 'random') {
    const types = ['meaning', 'reverse', 'scramble', 'missing'];
    actualType = types[Math.floor(Math.random() * types.length)];
  }
  
  const randomItem = sourceItems[Math.floor(Math.random() * sourceItems.length)];
  quizCurrentVerb = randomItem;
  
  document.getElementById('quizFeedback').textContent = '';
  document.querySelector('.quiz-options').innerHTML = '';
  document.querySelector('.quiz-input').style.display = 'none';
  document.querySelector('.quiz-options').style.display = 'flex';
  
  if (actualType === 'meaning') {
    setupMeaningQuiz(randomItem);
  } else if (actualType === 'reverse') {
    setupReverseQuiz(randomItem);
  } else if (actualType === 'scramble') {
    setupScrambleQuiz(randomItem);
  } else if (actualType === 'missing') {
    setupMissingQuiz(randomItem);
  }
}

function setupMeaningQuiz(item) {
  let correctAnswer = '';
  let questionText = '';
  
  if (quizCategory === 'verbs') {
    correctAnswer = item.meaning?.[currentLanguage] || item.meaning?.ru || item.meaning?.en || '';
    questionText = `<strong>${item.nsv} / ${item.sv}</strong>`;
  } else if (quizCategory === 'nouns') {
    correctAnswer = item.meaning?.[currentLanguage] || item.meaning?.ru || item.meaning?.en || '';
    questionText = `<strong>${item.noun}</strong>`;
  } else if (quizCategory === 'adjectives') {
    correctAnswer = item.meaning?.[currentLanguage] || item.meaning?.ru || item.meaning?.en || '';
    questionText = `<strong>${item.adjDisplay || item.adj}</strong>`;
  }
  
  quizCorrectAnswer = correctAnswer;
  document.querySelector('.quiz-question').innerHTML = questionText;
  
  let allItems = [];
  if (quizCategory === 'verbs') {
    allItems = typeof VERBS_LIST !== 'undefined' ? [...VERBS_LIST] : [];
  } else if (quizCategory === 'nouns') {
    allItems = typeof NOUNS_LIST !== 'undefined' ? [...NOUNS_LIST] : [];
  } else if (quizCategory === 'adjectives') {
    allItems = typeof ADJ_LIST !== 'undefined' ? [...ADJ_LIST] : [];
  }
  
  const allMeanings = allItems
    .map(v => v.meaning?.[currentLanguage] || v.meaning?.ru || v.meaning?.en || '')
    .filter(m => m && m !== quizCorrectAnswer);
  
  const wrongOptions = [];
  while (wrongOptions.length < 3 && allMeanings.length > 0) {
    const rand = allMeanings[Math.floor(Math.random() * allMeanings.length)];
    if (!wrongOptions.includes(rand)) wrongOptions.push(rand);
  }
  
  const opts = [quizCorrectAnswer, ...wrongOptions].sort(() => Math.random() - 0.5);
  const optionsContainer = document.querySelector('.quiz-options');
  optionsContainer.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(opt === quizCorrectAnswer, btn));
    optionsContainer.appendChild(btn);
  });
}

// ---------- CORRECT setupReverseQuiz (only one) ----------
function setupReverseQuiz(item) {
  let correctText = '';
  let questionText = '';
  
  if (quizCategory === 'verbs') {
    correctText = `${item.nsv} / ${item.sv}`;
    questionText = `<strong>${item.meaning?.[currentLanguage] || item.meaning?.en || ''}</strong>`;
  } else if (quizCategory === 'nouns') {
    correctText = item.noun;
    questionText = `<strong>${item.meaning?.[currentLanguage] || item.meaning?.en || ''}</strong>`;
  } else if (quizCategory === 'adjectives') {
    correctText = item.adjDisplay || item.adj;
    questionText = `<strong>${item.meaning?.[currentLanguage] || item.meaning?.en || ''}</strong>`;
  }
  
  quizCorrectAnswer = correctText;
  document.querySelector('.quiz-question').innerHTML = questionText;
  
  let allItems = [];
  if (quizCategory === 'verbs') {
    allItems = typeof VERBS_LIST !== 'undefined' ? [...VERBS_LIST] : [];
  } else if (quizCategory === 'nouns') {
    allItems = typeof NOUNS_LIST !== 'undefined' ? [...NOUNS_LIST] : [];
  } else if (quizCategory === 'adjectives') {
    allItems = typeof ADJ_LIST !== 'undefined' ? [...ADJ_LIST] : [];
  }
  
  let allPairs = [];
  if (quizCategory === 'verbs') {
    allPairs = allItems.map(v => `${v.nsv} / ${v.sv}`).filter(p => p !== correctText);
  } else if (quizCategory === 'nouns') {
    allPairs = allItems.map(n => n.noun).filter(p => p !== correctText);
  } else if (quizCategory === 'adjectives') {
    allPairs = allItems.map(a => a.adjDisplay || a.adj).filter(p => p !== correctText);
  }
  
  const wrongOptions = [];
  while (wrongOptions.length < 3 && allPairs.length > 0) {
    const rand = allPairs[Math.floor(Math.random() * allPairs.length)];
    if (!wrongOptions.includes(rand)) wrongOptions.push(rand);
  }
  
  const opts = [correctText, ...wrongOptions].sort(() => Math.random() - 0.5);
  const optionsContainer = document.querySelector('.quiz-options');
  optionsContainer.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(opt === quizCorrectAnswer, btn));
    optionsContainer.appendChild(btn);
  });
}

function setupScrambleQuiz(item) {
  let word = '';
  
  if (quizCategory === 'verbs') {
    word = item.nsv;
  } else if (quizCategory === 'nouns') {
    word = item.noun;
  } else if (quizCategory === 'adjectives') {
    word = item.adjDisplay || item.adj;
  }
  
  quizCorrectAnswer = word;
  document.querySelector('.quiz-question').innerHTML = `<strong>${item.meaning?.[currentLanguage] || item.meaning?.en || ''}</strong>`;
  
  let letters = word.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  if (letters.join('') === word && word.length > 2) {
    [letters[0], letters[letters.length-1]] = [letters[letters.length-1], letters[0]];
  }
  
  document.querySelector('.quiz-options').style.display = 'none';
  document.querySelector('.quiz-input').style.display = 'flex';
  const inputField = document.getElementById('quizAnswerInput');
  inputField.value = '';
  inputField.placeholder = letters.join(' ');
  inputField.disabled = false;
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  if (submitBtn) submitBtn.disabled = false;
}

function setupMissingQuiz(item) {
  let word = '';
  
  if (quizCategory === 'verbs') {
    word = item.nsv;
  } else if (quizCategory === 'nouns') {
    word = item.noun;
  } else if (quizCategory === 'adjectives') {
    word = item.adjDisplay || item.adj;
  }
  
  if (word.length < 1) {
    setupMeaningQuiz(item);
    return;
  }
  
  let pos = 0;
  if (word.length === 1) {
    pos = 0;
    quizCorrectAnswer = word[0];
    const masked = '_';
    document.querySelector('.quiz-question').innerHTML = `<strong>${masked}</strong> – ${item.meaning?.[currentLanguage] || item.meaning?.en || ''}`;
  } else {
    pos = Math.floor(Math.random() * word.length);
    quizCorrectAnswer = word[pos];
    const masked = word.substring(0, pos) + '_' + word.substring(pos + 1);
    document.querySelector('.quiz-question').innerHTML = `<strong>${masked}</strong> – ${item.meaning?.[currentLanguage] || item.meaning?.en || ''}`;
  }
  
  document.querySelector('.quiz-options').style.display = 'none';
  document.querySelector('.quiz-input').style.display = 'flex';
  const inputField = document.getElementById('quizAnswerInput');
  inputField.value = '';
  inputField.placeholder = 'Введите букву';
  inputField.disabled = false;
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  if (submitBtn) submitBtn.disabled = false;
}

function submitQuizAnswer() {
  if (!quizActive || quizAnswered) return;
  const input = document.getElementById('quizAnswerInput');
  const userAnswer = input.value.trim().toLowerCase();
  const correct = quizCorrectAnswer.toLowerCase();
  handleQuizAnswer(userAnswer === correct, null);
}

function handleQuizAnswer(isCorrect, btn) {
  if (!quizActive || quizAnswered) return;
  quizAnswered = true;
  
  const inputField = document.getElementById('quizAnswerInput');
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  if (inputField) inputField.disabled = true;
  if (submitBtn) submitBtn.disabled = true;
  
  if (isCorrect) {
    quizScore++;
    document.getElementById('quizFeedback').innerHTML = '<span style="color:var(--check-color);">✅ Правильно!</span>';
    if (btn) btn.classList.add('correct');
  } else {
    quizScore--;
    document.getElementById('quizFeedback').innerHTML = `<span style="color:var(--danger);">❌ Неправильно! Правильно: <strong>${quizCorrectAnswer}</strong></span>`;
    if (btn) btn.classList.add('wrong');
    document.querySelectorAll('.quiz-option').forEach(b => {
      if (b.textContent === quizCorrectAnswer) b.classList.add('correct');
    });
    
    quizMistakes.push({
      verb: quizCurrentVerb,
      quizCategory: quizCategory,
      userAnswer: btn ? btn.textContent : (inputField ? inputField.value : ''),
      correctAnswer: quizCorrectAnswer
    });
  }
  
  updateQuizScoreDisplay();
  disableAllOptions();
  
  setTimeout(() => {
    if (quizActive) loadNewQuizQuestion();
  }, 1200);
}

function skipQuizQuestion() {
  if (!quizActive) return;
  quizScore--;
  updateQuizScoreDisplay();
  quizMistakes.push({
    verb: quizCurrentVerb,
    quizCategory: quizCategory,
    userAnswer: '(пропущено)',
    correctAnswer: quizCorrectAnswer
  });
  document.getElementById('quizFeedback').innerHTML = `<span style="color:var(--text-muted);">Пропущено. Ответ: <strong>${quizCorrectAnswer}</strong></span>`;
  disableAllOptions();
  
  const inputField = document.getElementById('quizAnswerInput');
  const submitBtn = document.getElementById('quizSubmitAnswerBtn');
  if (inputField) inputField.disabled = true;
  if (submitBtn) submitBtn.disabled = true;
  
  setTimeout(() => {
    if (quizActive) loadNewQuizQuestion();
  }, 800);
}

function disableAllOptions() {
  document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
}

function finishQuiz() {
  clearInterval(quizTimer);
  quizActive = false;
  quizStarted = false;
  
  document.getElementById('quizSettingsPanel').style.display = 'none';
  document.getElementById('quizGamePanel').style.display = 'none';
  document.getElementById('quizFinishPanel').style.display = 'block';
  
  document.getElementById('quizFinalScore').textContent = `Ваш счёт: ${quizScore}`;
  
  const mistakesDiv = document.getElementById('quizMistakesReview');
  if (quizMistakes.length > 0) {
    let mistakesHtml = '<h3>📋 Ошибки:</h3>';
    quizMistakes.forEach(m => {
      let itemDisplay = '';
      if (m.quizCategory === 'nouns') {
        itemDisplay = `<strong>${m.verb?.noun || ''}</strong>`;
      } else if (m.quizCategory === 'adjectives') {
        itemDisplay = `<strong>${m.verb?.adjDisplay || m.verb?.adj || ''}</strong>`;
      } else {
        itemDisplay = `<strong>${m.verb?.nsv || ''} / ${m.verb?.sv || ''}</strong>`;
      }
      
      mistakesHtml += `
        <div class="mistake-item">
          ${itemDisplay} – 
          ${m.verb?.meaning?.[currentLanguage] || m.verb?.meaning?.en || ''}<br>
          <span class="wrong-answer">Ваш ответ: ${m.userAnswer}</span> → 
          <span class="correct-answer">Правильно: ${m.correctAnswer}</span>
        </div>`;
    });
    mistakesDiv.innerHTML = mistakesHtml;
  } else {
    mistakesDiv.innerHTML = '<p style="color:var(--check-color);">🎉 Нет ошибок! Отлично!</p>';
  }
  
  saveQuizScore(quizScore);
  renderLeaderboard();
}

function saveQuizScore(score) {
  let scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
  const now = new Date();
  scores.push({
    score: score,
    date: now.toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })
  });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10);
  localStorage.setItem('quizScores', JSON.stringify(scores));
}

function renderLeaderboard() {
  const board = document.getElementById('quizLeaderboard');
  if (!board) return;
  let scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
  scores.sort((a, b) => b.score - a.score);
  let html = '<h3>🏆 Топ-10</h3>';
  if (scores.length === 0) {
    html += '<p>Нет результатов</p>';
  } else {
    html += '<ol>';
    scores.forEach(s => { html += `<li>${s.score} баллов – ${s.date}</li>`; });
    html += '</ol>';
  }
  board.innerHTML = html;
}

// ========================
// Update Quiz Settings texts based on current language
// ========================
function updateQuizSettingsTexts() {
  const typeSelect = document.getElementById('quizTypeSelect');
  const timeSelect = document.getElementById('quizTimeSelect');
  const sourceSelect = document.getElementById('quizSourceSelect');
  if (!typeSelect) return;
  
  const typeOptions = {
    meaning: { ru: 'Значение (Выбор)', en: 'Meaning (Choice)', fr: 'Sens (Choix)', ar: 'المعنى (اختيار)' },
    reverse: { ru: 'Обратный перевод', en: 'Reverse Translation', fr: 'Traduction inverse', ar: 'ترجمة عكسية' },
    scramble: { ru: 'Буквы вразброс', en: 'Scrambled letters', fr: 'Lettres mélangées', ar: 'حروف متفرقة' },
    missing: { ru: 'Пропущенная буква', en: 'Missing letter', fr: 'Lettre manquante', ar: 'حرف ناقص' },
    random: { ru: 'Случайная смесь', en: 'Random mix', fr: 'Mélange aléatoire', ar: 'مزيج عشوائي' }
  };
  for (let i = 0; i < typeSelect.options.length; i++) {
    const opt = typeSelect.options[i];
    if (typeOptions[opt.value]) opt.textContent = typeOptions[opt.value][currentLanguage];
  }
  
  const timeOptions = {
    '30': { ru: '30 секунд', en: '30 seconds', fr: '30 secondes', ar: '30 ثانية' },
    '60': { ru: '1 минута', en: '1 minute', fr: '1 minute', ar: 'دقيقة واحدة' },
    '120': { ru: '2 минуты', en: '2 minutes', fr: '2 minutes', ar: 'دقيقتان' },
    '300': { ru: '5 минут', en: '5 minutes', fr: '5 minutes', ar: '5 دقائق' },
    '0': { ru: 'Без ограничений', en: 'No limit', fr: 'Illimité', ar: 'غير محدود' }
  };
  for (let i = 0; i < timeSelect.options.length; i++) {
    const opt = timeSelect.options[i];
    if (timeOptions[opt.value]) opt.textContent = timeOptions[opt.value][currentLanguage];
  }
  
  const sourceOptions = {
    all: { ru: 'Все слова', en: 'All words', fr: 'Tous les mots', ar: 'كل الكلمات' },
    favorites: { ru: 'Избранное', en: 'Favorites', fr: 'Favoris', ar: 'المفضلة' },
    completed: { ru: 'Завершённые', en: 'Completed', fr: 'Terminés', ar: 'المكتملة' }
  };
  for (let i = 0; i < sourceSelect.options.length; i++) {
    const opt = sourceSelect.options[i];
    if (sourceOptions[opt.value]) opt.textContent = sourceOptions[opt.value][currentLanguage];
  }
  
  const labels = document.querySelectorAll('#quizSettingsPanel label');
  const labelMap = {
    'Тип теста:': { ru: 'Тип теста:', en: 'Quiz Type:', fr: 'Type de quiz:', ar: 'نوع الاختبار:' },
    'Время:': { ru: 'Время:', en: 'Time:', fr: 'Temps:', ar: 'الوقت:' },
    'Источник:': { ru: 'Источник:', en: 'Source:', fr: 'Source:', ar: 'المصدر:' }
  };
  labels.forEach(label => {
    const original = label.textContent.trim();
    for (const [key, trans] of Object.entries(labelMap)) {
      if (original.includes(key.replace(':', ''))) {
        label.textContent = trans[currentLanguage];
        break;
      }
    }
  });
}

function updateQuizUITexts() {
  const labels = document.querySelectorAll('#quizSettingsPanel label');
  const translations = {
    'Тип теста:': { ru: 'Тип теста:', en: 'Quiz Type:', fr: 'Type de quiz:', ar: 'نوع الاختبار:' },
    'Время:': { ru: 'Время:', en: 'Time:', fr: 'Temps:', ar: 'الوقت:' },
    'Источник:': { ru: 'Источник:', en: 'Source:', fr: 'Source:', ar: 'المصدر:' }
  };
  
  labels.forEach(label => {
    const text = label.textContent.trim();
    for (const [key, trans] of Object.entries(translations)) {
      if (text.includes(key.replace(':', ''))) {
        label.textContent = trans[currentLanguage];
        break;
      }
    }
  });
  
  document.querySelectorAll('[data-lang-' + currentLanguage + ']').forEach(el => {
    const text = el.getAttribute('data-lang-' + currentLanguage);
    if (text && el.tagName === 'BUTTON' && el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      el.textContent = text;
    }
  });
}

// ========================
// ABOUT PAGE
// ========================
function setupAboutPage() {
  const aboutBtn = document.getElementById('aboutFloatingBtn');
  const closeBtn = document.getElementById('aboutCloseBtn');
  const aboutPage = document.getElementById('aboutPage');
  
  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      aboutPage.style.display = 'block';
      updateAboutTexts();
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      aboutPage.style.display = 'none';
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aboutPage.style.display === 'block') {
      aboutPage.style.display = 'none';
    }
  });
}

function updateAboutTexts() {
  const aboutPage = document.getElementById('aboutPage');
  if (!aboutPage) return;
  
  aboutPage.querySelectorAll('[data-lang-' + currentLanguage + ']').forEach(el => {
    const text = el.getAttribute('data-lang-' + currentLanguage);
    if (text) {
      if (el.children.length === 0 || (el.children.length === 1 && el.children[0].tagName === 'BR')) {
        el.textContent = text;
      }
    }
  });
}

const originalUpdateAllUITexts = updateAllUITexts;
updateAllUITexts = function() {
  originalUpdateAllUITexts();
  updateAboutTexts();
};

// ========================
// UTILITY
// ========================
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
// إزالة أي مسافات زائدة في الجوال بعد التحميل (حل نهائي)
(function() {
  function fixMobileHeader() {
    if (window.innerWidth > 480) return;
    const controls = document.querySelector('.header-controls');
    if (!controls) return;
    controls.style.gap = '0px';
    controls.style.padding = '0px';
    const children = controls.children;
    for (let el of children) {
      el.style.margin = '0px';
    }
  }
  window.addEventListener('load', fixMobileHeader);
  window.addEventListener('resize', fixMobileHeader);
})();