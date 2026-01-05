# Quick Fix: Node.js Version Issue

## The Problem

You're using **Node.js 21.6.2**, which is not supported by:
- Vite 7 (requires Node.js 20.19+ or 22.12+)
- Sanity CLI (has ES module compatibility issues with Node.js 21)

## The Solution

Switch to Node.js 22.12.0 (or Node.js 20.19+).

### Quick Steps:

1. **Check if you have nvm installed:**
   ```bash
   nvm --version
   ```

2. **If you have nvm:**
   ```bash
   nvm install 22.12.0
   nvm use 22.12.0
   nvm alias default 22.12.0  # Set as default
   ```

3. **If you DON'T have nvm, install it:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   # Then restart your terminal and run:
   nvm install 22.12.0
   nvm use 22.12.0
   ```

4. **Reinstall dependencies:**
   ```bash
   # In luna-essence-studio
   cd luna-essence-studio
   rm -rf node_modules package-lock.json
   npm install
   
   # In luna-essence-spa
   cd ../luna-essence-spa
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **Test both apps:**
   ```bash
   # Terminal 1 - Sanity Studio
   cd luna-essence-studio
   npm run dev
   # Should start at http://localhost:3333
   
   # Terminal 2 - React App
   cd luna-essence-spa
   npm run dev
   # Should start at http://localhost:5173
   ```

## Alternative: Use fnm (Faster Node Manager)

```bash
# Install fnm
brew install fnm  # macOS
# or: curl -fsSL https://fnm.vercel.app/install | bash

# Use Node.js 22
fnm install 22
fnm use 22
fnm default 22
```

## Verify

After switching, verify your Node version:
```bash
node --version
# Should show: v22.12.0 (or v20.19.x or higher)
```

Then try running the dev servers again - they should work!
