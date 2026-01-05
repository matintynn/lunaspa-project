# Luna Essence Spa - Project Setup

## Tech Stack

- **Frontend Framework**: React 18 + Vite (JavaScript)
- **Styling**: Tailwind CSS with custom color palette
- **CMS**: Sanity (latest version)
- **Routing**: react-router-dom
- **Animations**: framer-motion
- **Forms**: react-hook-form
- **Sanity Integration**: @sanity/client, @sanity/image-url

## Project Structure

```
lunaspa-project/
├── luna-essence-studio/          # Sanity Studio
│   ├── schemas/                  # Sanity schema definitions
│   │   └── index.js
│   ├── sanity.config.js         # Sanity configuration
│   ├── sanity.cli.js            # CLI configuration
│   └── package.json
│
└── luna-essence-spa/             # React + Vite app
    ├── src/
    │   ├── components/
    │   │   ├── layout/          # Layout components (Header, Footer, etc.)
    │   │   ├── home/            # Home page components
    │   │   ├── services/        # Services page components
    │   │   ├── about/           # About page components
    │   │   └── shared/          # Shared/reusable components
    │   ├── pages/               # Page components
    │   ├── lib/                 # Utility functions, Sanity client setup
    │   ├── styles/              # Global styles
    │   │   └── index.css        # Tailwind imports, fonts, noise texture
    │   └── assets/
    │       └── images/          # Static images
    ├── tailwind.config.js       # Tailwind configuration with custom colors
    ├── postcss.config.js        # PostCSS configuration
    └── package.json
```

## Color Palette

### Cream
- `cream-50`: #FAFAF8
- `cream-100`: #F5F1E8 (primary background)
- `cream-200`: #EDE7D9
- `cream-300`: #E0D8C5

### Sage
- `sage-100`: #E8EDE8
- `sage-200`: #C5D3C5

### Taupe
- `taupe-600`: #8B7B6B
- `taupe-700`: #6B5F52

## Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

Fonts are loaded via Google Fonts in `src/styles/index.css`.

## Key Features

### Pages
1. **Home** - Landing page with hero section
2. **Services** - Spa services and treatments
3. **About** - About the spa, team, philosophy
4. **Contact** - Contact form and information

### Design Notes

- **Noise Texture**: Subtle SVG-based noise texture applied as background
- **Aesthetic**: Elegant, minimalist spa design
- **Responsive**: Mobile-first approach
- **Background**: Cream-100 (#F5F1E8) with noise overlay

## Prerequisites

**⚠️ IMPORTANT: Node.js Version Requirement**

This project requires **Node.js 20.19+ or 22.12+**. Node.js 21.x is not supported and will cause errors.

**Current Node.js version check:**
```bash
node --version
```

**If you're using an unsupported version, switch using one of these methods:**

### Using nvm (Node Version Manager) - Recommended
```bash
# Install nvm if you don't have it: https://github.com/nvm-sh/nvm

# Install and use Node.js 22
nvm install 22
nvm use 22

# Or use Node.js 20
nvm install 20
nvm use 20

# Auto-switch when entering project directory (if .nvmrc exists)
nvm use
```

### Using fnm (Fast Node Manager)
```bash
# Install fnm: https://github.com/Schniz/fnm

# Install and use Node.js 22
fnm install 22
fnm use 22

# Auto-switch when entering project directory
fnm use
```

### Manual Installation
Download and install from [nodejs.org](https://nodejs.org/):
- **LTS Version (Recommended)**: Node.js 22.x or 20.x

After switching Node versions, reinstall dependencies:
```bash
cd luna-essence-studio && rm -rf node_modules package-lock.json && npm install
cd ../luna-essence-spa && rm -rf node_modules package-lock.json && npm install
```

## Getting Started

### Sanity Studio

```bash
cd luna-essence-studio
npm install
npm run dev
```

Studio runs at: `http://localhost:3333`

### React App

```bash
cd luna-essence-spa
npm install
npm run dev
```

App runs at: `http://localhost:5173`

## Sanity Configuration

- **Project ID**: `10k5i38n`
- **Dataset**: `production`

Update these in `luna-essence-studio/sanity.config.js` and `sanity.cli.js` if needed.

## Troubleshooting

### ERR_REQUIRE_ESM Error (Sanity Studio)
If you see `ERR_REQUIRE_ESM` when running `npm run dev` in `luna-essence-studio`:
- This is caused by using Node.js 21.x (unsupported)
- **Solution**: Switch to Node.js 20.19+ or 22.12+ (see Prerequisites above)

### crypto.hash is not a function (React App)
If you see `TypeError: crypto.hash is not a function` when running `npm run dev` in `luna-essence-spa`:
- This is caused by using Node.js 21.x with Vite 7
- **Solution**: Switch to Node.js 20.19+ or 22.12+ (see Prerequisites above)
- We've downgraded to Vite 6 for better compatibility, but Node.js 22 is still recommended

### Port Already in Use
If ports 3333 or 5173 are already in use:
```bash
# Kill process on port 3333 (Sanity)
lsof -ti:3333 | xargs kill -9

# Kill process on port 5173 (Vite)
lsof -ti:5173 | xargs kill -9
```

## Development Notes

- All headings automatically use Playfair Display font via CSS
- Body background is set to cream-100 with noise texture
- Smooth scrolling is enabled globally
- Tailwind utility classes are available throughout the app

## Next Steps

1. Create Sanity schemas for content types (services, team members, etc.)
2. Set up Sanity client in `src/lib/sanity.js`
3. Build page components in respective folders
4. Implement routing with react-router-dom
5. Add animations with framer-motion
6. Create contact form with react-hook-form
