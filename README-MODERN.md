# Kiwix JS Modern

A modernized UI for [Kiwix JS](https://github.com/kiwix/kiwix-js) — the open-source offline reader for Wikipedia, TED Talks, Stack Exchange, and other ZIM archives.

This fork focuses exclusively on **UI and UX modernization**. All core functionality — ZIM parsing, search algorithms, offline support, service workers, and browser compatibility — remains untouched.

---

## What Changed

### Design System

A complete CSS custom property system (`design-system.css`) provides consistent tokens for:

- **Colors** — Light (`#FCFCFC` background, `#000000` text) and dark (`#141414` background, `#FFFFFF` text) themes
- **Typography** — Three font families: sans-serif (primary), serif, and monospace
- **Spacing** — 8-point grid from 4px to 64px
- **Components** — Border radius, transitions, and layout constants
- **Motion** — Respects `prefers-reduced-motion` automatically

### Home Page

Inspired by Google's homepage:

- Large centered **KIWIX** wordmark
- Full-width pill search bar with magnifying glass icon, mic, image search, and AI mode placeholders
- **"I'm Feeling Lucky"** button that loads a random article
- **ZIM library list** showing all available archives with an active indicator
- If no archives are loaded, a prompt suggests selecting a source folder
- Version number displayed at the bottom in secondary text

### Navbar

- **KIWIX** logo (clickable, navigates home) — no version number
- **Home**, **Configure**, **About** navigation tabs
- Inline search bar with magnifying glass icon
- Theme toggle button (sun/moon icon)
- Always visible — no slide-away behavior
- Bottom navigation bar removed (browser back/forward buttons are sufficient)

### Dark Mode

Replaced the old `filter: invert(1) hue-rotate(180deg)` approach with proper themed colors:

| Element    | Light       | Dark        |
|------------|-------------|-------------|
| Background | `#FCFCFC`   | `#141414`   |
| Surface    | `#F7F7F7`   | `#141414`   |
| Border     | `#AEAEAE`   | `#626262`   |
| Text       | `#000000`   | `#FFFFFF`   |
| Links      | `#4B8CF7`   | `#4B8CF7`   |

### Configuration Page

- Centered layout (600px max-width)
- Checkboxes replaced with **pill toggle switches** (iOS-style)
- Section headings in uppercase with wide letter-spacing
- Cards stripped of decorative borders — clean flat separators
- Settings groups separated by subtle HR lines

### Buttons

- All buttons use **pill shape** (`border-radius: 9999px`)
- Primary: black fill, white text (inverted in dark mode)
- Secondary: light fill, dark border

### Links

- Color: `#4B8CF7`
- Underline: `#B0C7FD`
- Hover: `#004DFF` with matching underline

### Typography

- System sans-serif font stack as primary
- Georgia/serif for reading contexts
- Monospace for code and API status
- Clear heading hierarchy: 32px → 24px → 20px → 18px → 16px → 13px

---

## What Was NOT Modified

- ZIM archive parsing and file handling
- Search algorithms (prefix search, full-text search)
- Service worker registration and content injection modes
- Offline functionality
- File System Access API and drag-and-drop
- Article content rendering (iframe-based)
- Content theme manipulation (`_invert`, `_mwInvert`, `_wikimediaNative`)
- Internationalization (i18n) system
- Browser compatibility
- Performance characteristics

---

## Design Principles

- **No gradients, no shadows, no glow** — flat and clean
- **No borders thicker than 1px**
- **No unnecessary icons** — text labels where possible
- **No focus highlight on search** — clean, undistracted input
- **Respect reduced motion** — all animations disabled when user prefers
- **Reading first** — the article content is the product, the UI recedes

---

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm

### Install and Run

```bash
git clone https://github.com/luishowin/kiwix-js-modern.git
cd kiwix-js-modern
npm install
npm run serve
```

The dev server opens at `http://localhost:5173/www/index.html`.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

### Using the App

1. Click **Configure** or the **Select source folder** button on the home page
2. Select a folder containing `.zim` files
3. Your archives appear in the home page library list
4. Click any archive to load it, then search or browse

---

## File Structure (UI changes only)

```
www/
├── css/
│   ├── design-system.css   ← NEW: CSS custom properties (colors, typography, spacing)
│   ├── app.css             ← REWRITTEN: all UI styles using design tokens
│   └── transition.css      ← UPDATED: uses design system duration/easing
├── index.html              ← UPDATED: new navbar, home page, inline theme-init
└── js/
    ├── theme-init.js       ← UPDATED: uses correct theme colors
    ├── init.js             ← UPDATED: version display
    └── app.js              ← UPDATED: home button behavior, removed debug colors
service-worker.js           ← UPDATED: added design-system.css to precache
```

---

## Credits

This is a UI fork of [Kiwix JS](https://github.com/kiwix/kiwix-js) by Mossroy, Jaifroid, Peter-x, and contributors.

Licensed under [GPL v3](LICENSE-GPLv3.txt).
