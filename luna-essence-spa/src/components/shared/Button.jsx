function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick,
    className = '',
    type = 'button',
    icon = null,
    showIcon = true,
    ...props
}) {
    const baseStyles = 'font-serif font-medium rounded-full transition-all duration-300 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const sizeStyles = {
        sm: 'px-6 py-2 text-body-md',
        md: 'px-8 py-3 text-lg',
        lg: 'px-10 py-4 text-body-lg',
    }

    const variantStyles = {
        primary: 'bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900',
        secondary: 'bg-transparent border border-primary-600 text-primary-800 hover:bg-primary-100 active:bg-primary-200',
        tertiary: 'bg-transparent text-neutral-400 hover:text-neutral-600 active:text-neutral-800',
    }

    const iconSizeStyles = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    }

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={combinedClassName}
            {...props}
        >
            {children}
            {icon && showIcon && (
                <img
                    src={icon}
                    alt=""
                    className={iconSizeStyles[size]}
                />
            )}
        </button>
    )
}

export default Button
