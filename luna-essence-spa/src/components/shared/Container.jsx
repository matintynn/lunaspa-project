function Container({ children, className = '' }) {
  return (
    <div className={`max-w-container mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container
