# MIJ Baseball Hub - Project Summary and Setup Guide

This document provides a summary of the generated MIJ Baseball Hub website project and instructions on how to set it up and run it in Visual Studio Code.

## Project Structure

The project consists of the following files, all located in the `mij-baseball-hub` directory:

```
mij-baseball-hub/
├── index.html       # Main HTML file defining the page structure
├── styles.css       # All CSS for styling and layout
├── app.js           # JavaScript for interactivity (filtering, modals, etc.)
├── data.json        # JSON file containing product data
└── README.md        # Comprehensive guide for the project
```

## Setup in Visual Studio Code

To get this website running in VS Code, follow these simple steps:

1.  **Create a New Folder**: In VS Code, create a new empty folder (e.g., `mij-baseball-hub`) in your desired location.
2.  **Create Files**: Inside this new folder, create the following five files:
    *   `index.html`
    *   `styles.css`
    *   `app.js`
    *   `data.json`
    *   `README.md`
3.  **Copy Content**: For each file, copy the corresponding code provided below and paste it into the respective file in VS Code.

## How to Run Locally

Once you have copied all the content into the files:

1.  **Open `index.html`**: The simplest way is to right-click `index.html` in VS Code and select "Open with Live Server" (if you have the Live Server extension installed). Alternatively, you can just open the `index.html` file directly in your web browser.
2.  **Use a Local HTTP Server**: For a more robust local development experience, you can use a simple HTTP server. If you have Python installed, navigate to your `mij-baseball-hub` directory in your terminal and run:
    ```bash
    python3 -m http.server 8000
    ```
    Then, open your web browser and go to `http://localhost:8000`.

## File Contents

Below you will find the complete code for each file. Simply copy and paste into your VS Code project.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="MIJ Baseball Hub - Curated and verified made-in-Japan baseball gear rankings and directory.">
    <meta name="theme-color" content="#d0021b">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mij-baseball-hub.com">
    <meta property="og:title" content="MIJ Baseball Hub - Made-in-Japan Baseball Gear">
    <meta property="og:description" content="Curated and verified made-in-Japan baseball gear rankings and directory.">
    <meta property="og:image" content="https://via.placeholder.com/1200x630?text=MIJ+Baseball+Hub">
    
    <title>MIJ Baseball Hub - Made-in-Japan Baseball Gear Rankings</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- STICKY HEADER / NAVIGATION -->
    <header id="header" class="header">
        <div class="header-container">
            <div class="logo">
                <h1>⚾ MIJ Baseball Hub</h1>
            </div>
            
            <nav class="nav-main">
                <ul class="nav-positions">
                    <li><a href="#section-pitcher" data-position="Pitcher">Pitcher</a></li>
                    <li><a href="#section-catcher" data-position="Catcher">Catcher</a></li>
                    <li><a href="#section-1b" data-position="1B">1B</a></li>
                    <li><a href="#section-2b" data-position="2B">2B</a></li>
                    <li><a href="#section-3b" data-position="3B">3B</a></li>
                    <li><a href="#section-ss" data-position="SS">SS</a></li>
                    <li><a href="#section-of" data-position="OF">OF</a></li>
                    <li><a href="#section-utility" data-position="Utility">Utility</a></li>
                </ul>
            </nav>
            
            <div class="header-actions">
                <button id="lang-toggle" class="lang-toggle" aria-label="Toggle language">
                    <span class="lang-label">EN</span> / <span class="lang-label-jp" style="display:none;">JP</span>
                </button>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section id="hero" class="hero">
        <div class="hero-content">
            <h2 class="hero-headline">Made-in-Japan Baseball Gear</h2>
            <div class="stitch-line"></div>
            <p class="hero-subheadline">Curated & Verified • Ranked by Performance • Trusted by Players</p>
            
            <div class="hero-cta">
                <button id="cta-explore" class="btn btn-primary">Explore Rankings</button>
                <a href="#" class="btn btn-secondary">Request a Recommendation (DM)</a>
            </div>
        </div>
    </section>

    <!-- MAIN RANKINGS SECTION -->
    <main id="rankings-section" class="rankings-section">
        <div class="container">
            <!-- Filter Bar -->
            <div class="filter-bar">
                <div class="filter-group">
                    <label for="position-filter">Position:</label>
                    <select id="position-filter" class="filter-select">
                        <option value="">All Positions</option>
                        <option value="Pitcher">Pitcher</option>
                        <option value="Catcher">Catcher</option>
                        <option value="1B">1B</option>
                        <option value="2B">2B</option>
                        <option value="3B">3B</option>
                        <option value="SS">SS</option>
                        <option value="OF">OF</option>
                        <option value="Utility">Utility</option>
                    </select>
                </div>
                
                <div class="filter-pills">
                    <button class="filter-pill" data-filter="MIJ only">MIJ Only</button>
                    <button class="filter-pill" data-filter="Game-ready">Game-Ready</button>
                    <button class="filter-pill" data-filter="Stiff">Stiff</button>
                    <button class="filter-pill" data-filter="Premium">Premium</n></button>
                </div>
                
                <div class="filter-count">
                    <span id="item-count">Showing 5 items</span>
                </div>
            </div>

            <!-- Rankings List -->
            <div id="rankings-list" class="rankings-list">
                <!-- Items will be populated by JavaScript -->
            </div>
        </div>
    </main>

    <!-- HOW TO CHOOSE GUIDE SECTION -->
    <section id="how-to-choose" class="how-to-choose">
        <div class="container">
            <h2>How to Choose Your Perfect Glove</h2>
            
            <div class="accordion">
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Pocket Depth</span>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p>Pocket depth affects how quickly you can secure a catch. Deeper pockets (like our pitcher models) provide superior ball security but require more break-in time. Shallow pockets (infielder models) allow faster transfers but demand more precision in positioning.</p>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Stiffness</span>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p>A stiffer glove resists flop and maintains its shape longer, but requires significant break-in. Softer gloves are game-ready faster but may lose shape over time. Your playing style and position determine the ideal stiffness level.</p>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Break-In Time</span>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p>Premium Japanese leather typically requires 20–50 hours of game play to reach optimal performance. Use a glove mallet, play catch regularly, and apply leather conditioner to accelerate the process safely.</p>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Size & Fit</span>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p>Pitcher gloves typically range 11.5–12.5 inches. Infielders use 11–11.75 inches. Outfielders prefer 12–13 inches. Always try on multiple sizes to find the perfect fit for your hand size and playing style.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer id="footer" class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About MIJ Baseball Hub</h3>
                    <p>We curate and verify the finest made-in-Japan baseball equipment for players who demand excellence.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <ul class="social-links">
                        <li><a href="#" aria-label="Instagram">Instagram</a></li>
                        <li><a href="#" aria-label="YouTube">YouTube</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Disclaimer</h3>
                    <p><small>This site may contain affiliate links. We earn a small commission when you purchase through our links, at no extra cost to you.</small></p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 MIJ Baseball Hub. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- MODAL FOR PRODUCT DETAILS -->
    <div id="details-modal" class="modal" style="display: none;">
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <div id="modal-body">
                <!-- Content will be populated by JavaScript -->
            </div>
        </div>
    </div>

    <!-- DEPLOYMENT NOTES (Comment block for reference) -->
    <!--
    HOW TO RUN LOCALLY:
    1. Open this file (index.html) directly in your web browser, or
    2. Use a local HTTP server: python3 -m http.server 8000
    3. Then navigate to http://localhost:8000

    HOW TO DEPLOY:
    
    GitHub Pages:
    1. Push this project to a GitHub repository
    2. Go to Settings > Pages
    3. Select "Deploy from a branch" and choose main/master
    4. Your site will be live at https://{username}.github.io/{repo-name}
    
    Vercel:
    1. Connect your GitHub repo to Vercel (vercel.com)
    2. Vercel auto-deploys on every push
    3. Your site will be live at https://{project-name}.vercel.app
    
    Cloudflare Pages:
    1. Connect your GitHub repo to Cloudflare Pages (pages.cloudflare.com)
    2. Select the branch to deploy
    3. Your site will be live at https://{project-name}.pages.dev
    
    EDITING GUIDE:
    - To add/edit products: modify data.json
    - To change styling: edit styles.css
    - To add interactivity: edit app.js
    - To replace placeholder images: update the "image" field in data.json with your image URLs
    - To add affiliate links: update the "buyLink" field in data.json
    -->

    <script src="app.js"></script>
</body>
</html>
```

### `styles.css`

```css
/* ============================================
   MIJ Baseball Hub - Styles
   Japanese-inspired, minimalist design
   ============================================ */

/* CSS VARIABLES */
:root {
    --primary-red: #d0021b;
    --primary-red-light: #f0e6e6;
    --white: #ffffff;
    --gray-light: #f5f5f5;
    --gray-medium: #e0e0e0;
    --gray-dark: #333333;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --shadow-light: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* RESET & BASE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: var(--text-primary);
    background-color: var(--white);
    line-height: 1.6;
    font-size: 16px;
}

/* TYPOGRAPHY */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

h1 {
    font-size: 2rem;
}

h2 {
    font-size: 1.75rem;
}

h3 {
    font-size: 1.25rem;
}

p {
    margin-bottom: 1em;
    color: var(--text-secondary);
}

a {
    color: var(--primary-red);
    text-decoration: none;
    transition: var(--transition);
}

a:hover {
    opacity: 0.8;
}

/* CONTAINER */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* ============================================
   HEADER & NAVIGATION
   ============================================ */
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--white);
    border-bottom: 1px solid var(--gray-medium);
    transition: var(--transition);
}

.header.scrolled {
    box-shadow: var(--shadow-light);
}

.header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.logo h1 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--text-primary);
}

.nav-main {
    flex: 1;
}

.nav-positions {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.nav-positions a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent;
    transition: var(--transition);
}

.nav-positions a:hover,
.nav-positions a.active {
    color: var(--primary-red);
    border-bottom-color: var(--primary-red);
}

.header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.lang-toggle {
    background: none;
    border: 1px solid var(--gray-medium);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: var(--transition);
}

.lang-toggle:hover {
    border-color: var(--primary-red);
    color: var(--primary-red);
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .header-container {
        flex-wrap: wrap;
        gap: 1rem;
    }

    .logo h1 {
        font-size: 1.25rem;
        flex: 1 0 100%;
    }

    .nav-positions {
        gap: 0.75rem;
        font-size: 0.85rem;
    }

    .nav-positions a {
        padding: 0.25rem 0;
    }
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
    background: linear-gradient(135deg, var(--white) 0%, var(--primary-red-light) 100%);
    padding: 6rem 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-headline {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.stitch-line {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, var(--primary-red) 25%, var(--primary-red) 75%, transparent 100%);
    margin: 1.5rem auto;
    position: relative;
    animation: stitchPulse 2s ease-in-out infinite;
}

@keyframes stitchPulse {
    0%, 100% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
}

.hero-subheadline {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* ============================================
   BUTTONS
   ============================================ */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    text-decoration: none;
}

.btn-primary {
    background-color: var(--primary-red);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #a80116;
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-red);
    border: 2px solid var(--primary-red);
}

.btn-secondary:hover {
    background-color: var(--primary-red-light);
    transform: translateY(-2px);
}

.btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
}

/* ============================================
   RANKINGS SECTION
   ============================================ */
.rankings-section {
    padding: 4rem 1.5rem;
    background-color: var(--white);
}

/* FILTER BAR */
.filter-bar {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    padding: 1.5rem;
    background-color: var(--gray-light);
    border-radius: 8px;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.filter-group label {
    font-weight: 600;
    font-size: 0.95rem;
}

.filter-select {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--gray-medium);
    border-radius: 4px;
    font-size: 0.95rem;
    cursor: pointer;
    background-color: var(--white);
    transition: var(--transition);
}

.filter-select:hover,
.filter-select:focus {
    border-color: var(--primary-red);
    outline: none;
}

.filter-pills {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.filter-pill {
    padding: 0.5rem 1rem;
    border: 1px solid var(--gray-medium);
    background-color: var(--white);
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: var(--transition);
}

.filter-pill:hover {
    border-color: var(--primary-red);
    color: var(--primary-red);
}

.filter-pill.active {
    background-color: var(--primary-red);
    color: var(--white);
    border-color: var(--primary-red);
}

.filter-count {
    margin-left: auto;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

/* RANKINGS LIST */
.rankings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.ranking-card {
    background-color: var(--white);
    border: 1px solid var(--gray-medium);
    border-radius: 8px;
    overflow: hidden;
    transition: var(--transition);
    opacity: 0;
    animation: cardReveal 0.6s ease-out forwards;
}

@keyframes cardReveal {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.ranking-card:hover {
    box-shadow: var(--shadow-medium);
    transform: translateY(-4px);
}

.ranking-card.hidden {
    display: none;
}

.card-rank {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: var(--primary-red);
    color: var(--white);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    z-index: 10;
}

.card-image {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: var(--gray-light);
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.ranking-card:hover .card-image img {
    transform: scale(1.05);
}

.card-body {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.card-summary {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.5;
}

.card-attributes {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
}

.attribute-chip {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    background-color: var(--primary-red-light);
    color: var(--primary-red);
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.card-actions {
    display: flex;
    gap: 0.75rem;
}

.card-actions button,
.card-actions a {
    flex: 1;
    padding: 0.6rem 0.75rem;
    font-size: 0.9rem;
    text-align: center;
}

.btn-details {
    background-color: var(--gray-light);
    color: var(--text-primary);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.btn-details:hover {
    background-color: var(--gray-medium);
}

.btn-buy {
    background-color: var(--primary-red);
    color: var(--white);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
}

.btn-buy:hover {
    background-color: #a80116;
}

/* ============================================
   HOW TO CHOOSE SECTION
   ============================================ */
.how-to-choose {
    background-color: var(--gray-light);
    padding: 4rem 1.5rem;
}

.how-to-choose h2 {
    text-align: center;
    margin-bottom: 3rem;
}

.accordion {
    max-width: 800px;
    margin: 0 auto;
}

.accordion-item {
    background-color: var(--white);
    border: 1px solid var(--gray-medium);
    border-radius: 8px;
    margin-bottom: 1rem;
    overflow: hidden;
}

.accordion-header {
    width: 100%;
    padding: 1.25rem;
    background-color: var(--white);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition);
}

.accordion-header:hover {
    background-color: var(--gray-light);
}

.accordion-icon {
    font-size: 1.5rem;
    transition: var(--transition);
}

.accordion-item.open .accordion-icon {
    transform: rotate(45deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 1.25rem;
}

.accordion-item.open .accordion-content {
    max-height: 500px;
    padding: 0 1.25rem 1.25rem 1.25rem;
}

.accordion-content p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* ============================================
   MODAL
   ============================================ */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.modal-content {
    background-color: var(--white);
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    padding: 2rem;
    animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-secondary);
    transition: var(--transition);
}

.modal-close:hover {
    color: var(--primary-red);
}

.modal-product-image {
    width: 100%;
    height: 300px;
    background-color: var(--gray-light);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    overflow: hidden;
}

.modal-product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-product-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.modal-product-details {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
    background-color: var(--gray-dark);
    color: var(--white);
    padding: 3rem 1.5rem 1.5rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    color: var(--white);
}

.footer-section p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
}

.social-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

.social-links a {
    color: rgba(255, 255, 255, 0.8);
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--primary-red);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */
@media (max-width: 768px) {
    .hero {
        padding: 4rem 1.5rem;
    }

    .hero-headline {
        font-size: 2rem;
    }

    .rankings-list {
        grid-template-columns: 1fr;
    }

    .filter-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    .filter-count {
        margin-left: 0;
    }

    .hero-cta {
        flex-direction: column;
    }

    .hero-cta .btn {
        width: 100%;
    }

    .card-actions {
        flex-direction: column;
    }

    .card-actions button,
    .card-actions a {
        width: 100%;
    }

    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1.25rem;
    }

    .hero-headline {
        font-size: 1.5rem;
    }

    .nav-positions {
        gap: 0.5rem;
        font-size: 0.75rem;
    }

    .filter-bar {
        padding: 1rem;
    }

    .filter-pills {
        gap: 0.5rem;
    }

    .filter-pill {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }

    .accordion-header {
        padding: 1rem;
    }

    .accordion-content {
        padding: 0 1rem;
    }

    .accordion-item.open .accordion-content {
        padding: 0 1rem 1rem 1rem;
    }
}
```

### `app.js`

```javascript
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
```

### `data.json`

```json
[
  {
    "id": 1,
    "rank": 1,
    "title": "Zenith Pro Elite - Pitcher Model",
    "summary": "The pinnacle of Japanese craftsmanship. Hand-crafted in Nara with premium Wagyu leather for ultimate durability and shape retention.",
    "attributes": ["MIJ", "Wagyu Leather", "Stiff", "Deep Pocket"],
    "positions": ["Pitcher"],
    "details": "This model features a closed web design for hiding pitches and a deep pocket optimized for ball security. The leather is sourced from premium Wagyu cattle, known for its incredible strength-to-weight ratio.",
    "image": "https://via.placeholder.com/400x300?text=Zenith+Pro+Elite",
    "buyLink": "#",
    "tags": ["Premium", "Stiff"]
  },
  {
    "id": 2,
    "rank": 2,
    "title": "Kaze Speed Master - SS/2B",
    "summary": "Ultra-lightweight and shallow pocket for lightning-fast transitions. Designed for the middle infielder who demands speed.",
    "attributes": ["MIJ", "Kip Leather", "Lightweight", "Shallow Pocket"],
    "positions": ["SS", "2B"],
    "details": "The Kaze Speed Master uses a specialized tanning process to reduce weight without sacrificing structural integrity. Ideal for double plays and quick transfers.",
    "image": "https://via.placeholder.com/400x300?text=Kaze+Speed+Master",
    "buyLink": "#",
    "tags": ["MIJ only", "Game-ready"]
  },
  {
    "id": 3,
    "rank": 3,
    "title": "Tetsu Iron Wall - Catcher's Mitt",
    "summary": "Built like a tank. Exceptional padding and a reinforced thumb to handle the hardest heat in the game.",
    "attributes": ["MIJ", "Steerhide", "Heavy Duty", "Reinforced"],
    "positions": ["Catcher"],
    "details": "Designed with input from pro catchers, the Tetsu Mitt provides superior shock absorption. The thumb reinforcement prevents 'stinger' injuries while maintaining flexibility.",
    "image": "https://via.placeholder.com/400x300?text=Tetsu+Iron+Wall",
    "buyLink": "#",
    "tags": ["Premium", "Stiff"]
  },
  {
    "id": 4,
    "rank": 4,
    "title": "Sakura Bloom Series - Outfield",
    "summary": "Extended length and a secure H-web for tracking down deep fly balls. Features a beautiful aesthetic with performance to match.",
    "attributes": ["MIJ", "Kip Leather", "Extended", "H-Web"],
    "positions": ["OF"],
    "details": "The Sakura series combines elegance with power. The 12.75-inch length provides the reach needed for highlight-reel catches in the gap.",
    "image": "https://via.placeholder.com/400x300?text=Sakura+Bloom",
    "buyLink": "#",
    "tags": ["Game-ready"]
  },
  {
    "id": 5,
    "rank": 5,
    "title": "Ryu Dragon Claw - 1B Mitt",
    "summary": "Superior scooping ability and a massive surface area. The ultimate weapon for any first baseman.",
    "attributes": ["MIJ", "Wagyu Leather", "Large", "Flexible"],
    "positions": ["1B"],
    "details": "The Ryu model features a unique hinge design that allows for easy closing right out of the box, while the Wagyu leather ensures it won't flop over time.",
    "image": "https://via.placeholder.com/400x300?text=Ryu+Dragon+Claw",
    "buyLink": "#",
    "tags": ["MIJ only", "Premium"]
  }
]
```

### `README.md`

```markdown
# MIJ Baseball Hub

A clean, modern, baseball-themed static website scaffold featuring a rankings/directory layout with Japanese-inspired design. Built with vanilla HTML, CSS, and JavaScript—no build tools required.

## Features

✨ **Modern Design**
- Minimalist, Japanese-inspired aesthetic with red accents (#d0021b)
- Responsive layout (mobile-first)
- Smooth animations and transitions
- Accessible color contrast and keyboard navigation

🎯 **Core Functionality**
- **Product Rankings**: Data-driven card layout with rank badges, attributes, and CTAs
- **Smart Filtering**: Filter by position and tags (MIJ Only, Game-Ready, Stiff, Premium)
- **Modal Details**: Click "View Details" to open a product modal with full information
- **Accordion Guide**: "How to Choose" section with expandable accordion items
- **Sticky Header**: Navigation header with shadow on scroll
- **Smooth Scrolling**: Anchor links for quick navigation to sections
- **i18n Toggle**: Simple EN/JP language toggle for labels and buttons
- **Scroll Animations**: Cards reveal with IntersectionObserver

📱 **Responsive Design**
- Desktop, tablet, and mobile optimized
- Flexible grid layout
- Touch-friendly buttons and controls

## Project Structure

```
mij-baseball-hub/
├── index.html       # Main HTML file with semantic structure
├── styles.css       # All styling (no external dependencies)
├── app.js           # JavaScript for interactivity
├── data.json        # Product data (easily editable)
└── README.md        # This file
```

## Getting Started

### Run Locally

**Option 1: Direct in Browser**
1. Open `index.html` directly in your web browser
2. No server required!

**Option 2: Local HTTP Server (Recommended)**
```bash
cd /path/to/mij-baseball-hub
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`

### Edit Products

All product data is stored in `data.json`. Each product object has:

```json
{
  "id": 1,
  "rank": 1,
  "title": "Product Name",
  "summary": "2-3 line description",
  "attributes": ["MIJ", "Wagyu Leather", "Stiff", "Deep Pocket"],
  "positions": ["Pitcher"],
  "details": "Full product description",
  "image": "https://via.placeholder.com/400x300?text=Product",
  "buyLink": "#",
  "tags": ["Premium", "Stiff"]
}
```

**To add a product:**
1. Add a new object to the array in `data.json`
2. Increment the `id` and `rank` fields
3. Update `image` with your product photo URL
4. Update `buyLink` with your affiliate link
5. Refresh the page—changes load automatically!

### Customize Styling

All colors and spacing are defined as CSS variables at the top of `styles.css`:

```css
:root {
    --primary-red: #d0021b;
    --white: #ffffff;
    --gray-light: #f5f5f5;
    /* ... more variables ... */
}
```

Edit these to match your brand.

### Add Your Own Content

**Replace Images:**
- Update the `image` field in `data.json` with your image URLs
- Recommended size: 400×300px (will scale responsively)

**Add Affiliate Links:**
- Update the `buyLink` field in `data.json` with your affiliate URLs
- The "Where to Buy" button will link to these URLs

**Update Hero Copy:**
- Edit the `<h2>` and `<p>` tags in the hero section of `index.html`

**Modify Navigation:**
- Edit the position links in the `<nav>` section of `index.html`
- Update the corresponding position filter in `app.js` if needed

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push this project to the repository
3. Go to **Settings > Pages**
4. Select **Deploy from a branch** and choose `main` (or `master`)
5. Your site will be live at `https://{username}.github.io/{repo-name}`

### Vercel

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel auto-deploys on every push
3. Your site will be live at `https://{project-name}.vercel.app`

### Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Select the branch to deploy (usually `main`)
4. Your site will be live at `https://{project-name}.pages.dev`

### Traditional Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure the server serves `index.html` as the default file
3. Your site will be live at your domain

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Color contrast meets WCAG AA standards
- Screen reader friendly

## Performance

- **No external dependencies** (no CDN, no npm packages)
- **Lightweight**: ~40KB total (HTML + CSS + JS)
- **Fast load**: All assets are local
- **Optimized images**: Use placeholder service or compress your own images

## Customization Tips

### Change the Red Accent Color

1. Open `styles.css`
2. Find `--primary-red: #d0021b;`
3. Replace with your color hex code
4. All red elements will update automatically

### Add More Filter Tags

1. Add new buttons to the `.filter-pills` div in `index.html`
2. Add the tag to product objects in `data.json`
3. The filtering logic in `app.js` will handle it automatically

### Expand the Accordion

1. Add new `.accordion-item` blocks to the "How to Choose" section in `index.html`
2. The JavaScript accordion handler will work automatically

### Add More Positions

1. Add new position links to the navigation in `index.html`
2. Add the position to product `positions` arrays in `data.json`
3. Update the position filter dropdown in `index.html`

## Troubleshooting

**Products not showing?**
- Check that `data.json` is in the same directory as `index.html`
- Verify JSON syntax (use a JSON validator)
- Check browser console for errors (F12)

**Images not loading?**
- Verify image URLs are correct and publicly accessible
- Check for CORS issues if using external image hosts
- Use placeholder service like `via.placeholder.com` for testing

**Styles not applying?**
- Ensure `styles.css` is in the same directory
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check for CSS syntax errors

**Filtering not working?**
- Verify `app.js` is loaded (check browser console)
- Ensure product tags match filter pill names exactly
- Check that products have the correct `positions` array

## License

This project is provided as-is for your use. Feel free to modify and deploy as needed.

## Support

For questions or issues:
1. Check the code comments in `index.html`, `styles.css`, and `app.js`
2. Review the customization tips above
3. Test in browser console (F12) for JavaScript errors

---

**Happy building! ⚾**
```
