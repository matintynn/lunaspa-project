/**
 * Container Component
 * 
 * Provides consistent max-width constraint and horizontal padding for content.
 * Automatically centers content and applies responsive padding.
 * 
 * Features:
 * - Max width: 1188px (from tailwind.config.js)
 * - Mobile padding: 16px (px-4)
 * - Desktop padding: 32px (md:px-8 at 768px+)
 * - Horizontally centered (mx-auto)
 * 
 * Usage:
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Content here</p>
 * </Container>
 * 
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content to wrap
 * @param {string} props.className - Additional Tailwind classes (optional)
 * @returns {JSX.Element} Centered, constrained content wrapper
 */
function Container({ children, className = '', ...props }) {
  return (
    // max-w-container: 1188px (custom from config)
    // mx-auto: Center horizontally
    // px-4 md:px-8: Mobile 16px padding, Desktop 32px padding
    <div {...props} className={`max-w-container mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
