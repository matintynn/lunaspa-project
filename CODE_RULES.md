# Code Rules & Guidelines

Guidelines for maintaining consistency and quality in the Luna Essence Spa project.

---

## 1. Component Structure

**Location**: Organize by feature
- `/src/components/shared/` - Reusable components (Button, Container, etc.)
- `/src/components/layout/` - Layout components (Header, Footer, etc.)
- `/src/components/home/`, `/services/`, etc. - Feature-specific components

**Naming**: PascalCase for components (`ServiceCard.jsx`, `Button.jsx`)

```jsx
// Basic component template
import { useState } from 'react'

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(null)

  return (
    <div className="...">
      {/* JSX here */}
    </div>
  )
}

export default ComponentName
```

---

## 2. Styling with Tailwind

**Always use Tailwind classes** from `tailwind.config.js` - no inline styles or separate CSS files

### Colors
- Primary (Sage): `text-primary-700`, `bg-primary-700`, `border-primary-600`
- Secondary (Beige): `text-secondary-600`, `bg-secondary-50`
- Neutral: `text-neutral-900`, `text-neutral-600`, `border-neutral-200`

### Typography
- Headings: `text-h1`, `text-h2`, `text-h3`, `text-h4` + `font-serif`
- Body: `text-body-lg`, `text-body-md`, `text-body-sm` + `font-sans`
- Special: `text-navlink`, `text-cta`

```jsx
// Typography example
<h1 className="text-h1 font-serif text-neutral-900">Welcome</h1>
<p className="text-body-md font-sans text-neutral-600">Description text</p>
```

---

## 3. Button Component

**ALWAYS use the Button component** - never create inline buttons

```jsx
// Import Button component
import Button from '@/components/shared/Button'

// Primary button (default)
<Button>Book Now</Button>

// Variants
<Button variant="secondary">Learn More</Button>
<Button variant="tertiary">Skip</Button>

// With icon
<Button icon="/src/assets/images/icons/arrow-icon.svg">Click Me</Button>

// Sizes and states
<Button size="lg">Large Button</Button>
<Button disabled>Disabled</Button>
<Button className="w-full">Full Width</Button>
```

---

## 4. Responsive Design

**Mobile-first approach** - Design for mobile, then enhance for larger screens

**Custom breakpoint**: `nav:1000px` for navbar

```jsx
// Responsive classes
<nav className="hidden nav:flex">Desktop Navigation</nav>
<button className="nav:hidden">Mobile Menu</button>
<div className="text-sm md:text-base lg:text-lg">Responsive Text</div>
```

---

## 5. Page Structure

**Pages** in `/src/pages/` using PascalCase

```jsx
// Page template with Layout
import Layout from '@/components/layout/Layout'
import Container from '@/components/shared/Container'

function PageName() {
  return (
    <Layout>
      <Container>
        {/* Page content */}
      </Container>
    </Layout>
  )
}

export default PageName
```

---

## 6. Page Header Style Standard

**ALL new pages must follow this header structure** for consistency:

```jsx
<div className="mt-24">
  <Container className='py-20 md:pb-16'>
    <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12">
      {header}
    </h1>
    {/* Rest of page content */}
  </Container>
</div>
```

**Key requirements:**
- Use `mt-24` for top margin (accounts for fixed header)
- Wrap in `Container` with `py-20 md:pb-16` classes
- Header styling: `text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12`
- Header text should be passed as a prop or variable
- Content should be centered and contained

**Example usage:**
```jsx
function NewPage() {
  const pageHeader = "Our Services"
  
  return (
    <Layout>
      <div className="mt-24">
        <Container className='py-20 md:pb-16'>
          <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center mb-12">
            {pageHeader}
          </h1>
          {/* Page specific content here */}
        </Container>
      </div>
    </Layout>
  )
}
```

---

## 7. Accessibility

**Use semantic HTML** and proper ARIA labels

```jsx
// Semantic elements
<header>, <nav>, <main>, <footer>, <article>, <section>

// ARIA labels for icon buttons
<button aria-label="Close menu" onClick={handleClose}>
  <CloseIcon />
</button>

// Alt text for images
<img src="image.jpg" alt="Descriptive text" />

// Labels for form inputs
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

---

## 8. Performance

**Optimize images** - Use WebP/SVG, add alt text

```jsx
// Lazy load pages
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('@/pages/HomePage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
}
```

---

## 9. Code Quality

**Remove console.logs** from production

**Handle errors** in API calls

```jsx
// Error handling example
try {
  const data = await fetchData()
  // use data
} catch (error) {
  console.error('Error:', error)
  // show user-friendly message
}
```

**Write meaningful comments** for complex logic

```jsx
// Calculate total price including tax and discount
const totalPrice = (basePrice * quantity * (1 - discount)) * (1 + taxRate)
```

---

## 10. Git Commits

**Clear commit messages**
```
✨ feat: Add Button component with icon support
🐛 fix: Fix mobile menu alignment issue
🎨 style: Update colors to match design system
📱 responsive: Add 1000px breakpoint for navbar
```

---

## Component Checklist

Before submitting:
- [ ] Uses design system colors and fonts
- [ ] Responsive on all screen sizes
- [ ] Accessible (keyboard, alt text, ARIA)
- [ ] Uses Button component (not inline buttons)
- [ ] No console errors
- [ ] Follows naming conventions

---

*Update this file as the project evolves*
