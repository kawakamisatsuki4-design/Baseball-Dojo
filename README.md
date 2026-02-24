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
