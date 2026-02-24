/* ============================================
   MIJ Baseball Hub - JavaScript
   Interactivity: filtering, modal, accordion, animations
   ============================================ */

// ============================================
// STATE MANAGEMENT
// ============================================
let products = [];
let activeFilters = {
    position: '',
    tags: []
};

let isJapaneseLang = false;

// Translation labels (simple i18n)
const translations = {
    en: {
        'Showing': 'Showing',
        'items': 'items',
        'View Details': 'View Details',
        'Where to Buy': 'Where to Buy',
        'Position:': 'Position:',
        'All Positions': 'All Positions',
        'How to Choose Your Perfect Glove': 'How to Choose Your Perfect Glove',
        'Pocket Depth': 'Pocket Depth',
        'Stiffness': 'Stiffness',
        'Break-In Time': 'Break-In Time',
        'Size & Fit': 'Size & Fit'
    },
    jp: {
        'Showing': '表示中',
        'items': 'アイテム',
        'View Details': '詳細を見る',
        'Where to Buy': '購入する',
        'Position:': 'ポジション:',
        'All Positions': 'すべてのポジション',
        'How to Choose Your Perfect Glove': '完璧なグローブの選び方',
        'Pocket Depth': 'ポケットの深さ',
        'Stiffness': '硬さ',
        'Break-In Time': 'ブレークイン時間',
        'Size & Fit': 'サイズとフィット感'
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Load products from data.json
    try {
        const response = await fetch('data.json');
        products = await response.json();
    } catch (error) {
        console.error('Error loading products:', error);
        products = [];
    }

    // Initialize UI
    renderProducts();
    setupEventListeners();
    setupScrollEffects();
    updateItemCount();
});

// ============================================
// RENDERING
// ============================================

/**
 * Render products to the rankings list
 */
function renderProducts() {
    const rankingsList = document.getElementById('rankings-list');
    rankingsList.innerHTML = '';

    // Filter products
    const filteredProducts = filterProducts();

    // If no products match, show empty state
    if (filteredProducts.length === 0) {
        rankingsList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">No products match your filters.</p>';
        updateItemCount();
        return;
    }

    // Render each product card
    filteredProducts.forEach((product, index) => {
        const card = createProductCard(product, index);
        rankingsList.appendChild(card);
    });

    updateItemCount();
}

/**
 * Create a product card element
 */
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'ranking-card';
    card.style.animationDelay = `${index * 0.05}s`;

    const attributesHtml = product.attributes
        .map(attr => `<span class="attribute-chip">${attr}</span>`)
        .join('');

    const positionsText = product.positions.join(' / ');

    card.innerHTML = `
        <div class="card-rank">#${product.rank}</div>
        <div class="card-image">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
        </div>
        <div class="card-body">
            <h3 class="card-title">${product.title}</h3>
            <p class="card-summary">${product.summary}</p>
            <div class="card-attributes">
                ${attributesHtml}
            </div>
            <div class="card-actions">
                <button class="btn-details btn-small" data-product-id="${product.id}">
                    ${isJapaneseLang ? translations.jp['View Details'] : translations.en['View Details']}
                </button>
                <a href="${product.buyLink}" class="btn-buy btn-small" target="_blank" rel="noopener noreferrer">
                    ${isJapaneseLang ? translations.jp['Where to Buy'] : translations.en['Where to Buy']}
                </a>
            </div>
        </div>
    `;

    // Add event listener to details button
    card.querySelector('.btn-details').addEventListener('click', () => {
        openProductModal(product);
    });

    // Add event listener to image for modal opening
    card.querySelector('.card-image').addEventListener('click', () => {
        openProductModal(product);
    });

    return card;
}

/**
 * Filter products based on active filters
 */
function filterProducts() {
    return products.filter(product => {
        // Position filter
        if (activeFilters.position && !product.positions.includes(activeFilters.position)) {
            return false;
        }

        // Tag filters
        if (activeFilters.tags.length > 0) {
            const hasAllTags = activeFilters.tags.every(tag => product.tags.includes(tag));
            if (!hasAllTags) {
                return false;
            }
        }

        return true;
    });
}

/**
 * Update the item count display
 */
function updateItemCount() {
    const count = filterProducts().length;
    const countElement = document.getElementById('item-count');
    const label = isJapaneseLang ? translations.jp['Showing'] : translations.en['Showing'];
    const itemsLabel = isJapaneseLang ? translations.jp['items'] : translations.en['items'];
    countElement.textContent = `${label} ${count} ${itemsLabel}`;
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

/**
 * Open product details modal
 */
function openProductModal(product) {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');

    const positionsText = product.positions.join(' / ');
    const attributesHtml = product.attributes
        .map(attr => `<span class="attribute-chip">${attr}</span>`)
        .join('');

    modalBody.innerHTML = `
        <div class="modal-product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <h2 class="modal-product-title">${product.title}</h2>
        <p style="color: #666; margin-bottom: 1rem;"><strong>Positions:</strong> ${positionsText}</p>
        <div class="card-attributes" style="margin-bottom: 1.5rem;">
            ${attributesHtml}
        </div>
        <div class="modal-product-details">
            ${product.details}
        </div>
        <a href="${product.buyLink}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
            ${isJapaneseLang ? translations.jp['Where to Buy'] : translations.en['Where to Buy']}
        </a>
    `;

    modal.style.display = 'flex';
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Position filter
    const positionFilter = document.getElementById('position-filter');
    positionFilter.addEventListener('change', (e) => {
        activeFilters.position = e.target.value;
        renderProducts();
    });

    // Tag filter pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const tag = pill.dataset.filter;
            if (activeFilters.tags.includes(tag)) {
                activeFilters.tags = activeFilters.tags.filter(t => t !== tag);
                pill.classList.remove('active');
            } else {
                activeFilters.tags.push(tag);
                pill.classList.add('active');
            }
            renderProducts();
        });
    });

    // Modal close button
    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside
    const modal = document.getElementById('details-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            item.classList.toggle('open');
        });
    });

    // Navigation position links
    const navLinks = document.querySelectorAll('.nav-positions a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const position = link.dataset.position;
            activeFilters.position = position;
            activeFilters.tags = [];
            updateFilterUI();
            renderProducts();
            
            // Scroll to rankings section
            document.getElementById('rankings-section').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // CTA button
    const ctaExplore = document.getElementById('cta-explore');
    ctaExplore.addEventListener('click', () => {
        document.getElementById('rankings-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);
}

/**
 * Update filter UI to reflect current state
 */
function updateFilterUI() {
    // Update position dropdown
    document.getElementById('position-filter').value = activeFilters.position;

    // Update filter pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        if (activeFilters.tags.includes(pill.dataset.filter)) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================

/**
 * Setup scroll effects (sticky header shadow, IntersectionObserver)
 */
function setupScrollEffects() {
    const header = document.getElementById('header');

    // Sticky header shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // IntersectionObserver for card reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all cards (will be set up when rendering)
    observeCards();
}

/**
 * Observe cards for intersection
 */
function observeCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    const cards = document.querySelectorAll('.ranking-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Re-observe cards after rendering
const originalRenderProducts = renderProducts;
renderProducts = function() {
    originalRenderProducts.call(this);
    observeCards();
};

// ============================================
// INTERNATIONALIZATION (i18n)
// ============================================

/**
 * Toggle between English and Japanese
 */
function toggleLanguage() {
    isJapaneseLang = !isJapaneseLang;

    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    const langLabel = langToggle.querySelector('.lang-label');
    const langLabelJp = langToggle.querySelector('.lang-label-jp');

    if (isJapaneseLang) {
        langLabel.style.display = 'none';
        langLabelJp.style.display = 'inline';
    } else {
        langLabel.style.display = 'inline';
        langLabelJp.style.display = 'none';
    }

    // Re-render products to update button labels
    renderProducts();

    // Update other UI elements
    updateItemCount();
    updateAccordionLabels();
}

/**
 * Update accordion labels for language change
 */
function updateAccordionLabels() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const labels = ['Pocket Depth', 'Stiffness', 'Break-In Time', 'Size & Fit'];

    accordionHeaders.forEach((header, index) => {
        const span = header.querySelector('span:first-child');
        if (span && labels[index]) {
            const key = labels[index];
            const lang = isJapaneseLang ? 'jp' : 'en';
            span.textContent = translations[lang][key];
        }
    });
}

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================

/**
 * Close modal on Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Smooth scroll to element
 */
function smoothScroll(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

console.log('MIJ Baseball Hub - App initialized');
