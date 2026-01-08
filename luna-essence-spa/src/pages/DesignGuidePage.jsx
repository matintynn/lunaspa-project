import { useState, useRef, useEffect } from 'react'
import Container from '../components/shared/Container'
import Button from '../components/shared/Button'
import DesignGuideLayout from './DesignGuideLayout'
import QuickAccessBar from '../components/design-guide/QuickAccessBar'

// Color palette data extracted from tailwind.config.js
const colorPalette = {
    primary: {
        name: 'Primary (Sage Green)',
        description: 'Used for primary actions, brand identity, and key UI elements.',
        colors: [
            { name: 'primary-50', hex: '#F4F6EF' },
            { name: 'primary-100', hex: '#E5ECDB' },
            { name: 'primary-200', hex: '#CFDBBB' },
            { name: 'primary-300', hex: '#AFC393' },
            { name: 'primary-400', hex: '#93AC6F' },
            { name: 'primary-500', hex: '#759052' },
            { name: 'primary-600', hex: '#5A713F' },
            { name: 'primary-700', hex: '#475833' },
            { name: 'primary-800', hex: '#3B482C' },
            { name: 'primary-900', hex: '#35402A' },
        ]
    },
    secondary: {
        name: 'Secondary (Beige/Taupe)',
        description: 'Used for accents, backgrounds, and complementary elements.',
        colors: [
            { name: 'secondary-50', hex: '#F9F8F2' },
            { name: 'secondary-100', hex: '#EDEBDA' },
            { name: 'secondary-200', hex: '#E9E4C3' },
            { name: 'secondary-300', hex: '#CDC699' },
            { name: 'secondary-400', hex: '#B7AA6F' },
            { name: 'secondary-500', hex: '#AA955D' },
            { name: 'secondary-600', hex: '#957B4E' },
            { name: 'secondary-700', hex: '#7C6242' },
            { name: 'secondary-800', hex: '#66503A' },
            { name: 'secondary-900', hex: '#2F2319' },
        ]
    },
    neutral: {
        name: 'Neutral (Grays)',
        description: 'Used for text, borders, and subtle UI elements.',
        colors: [
            { name: 'neutral-50', hex: '#FAFAFA' },
            { name: 'neutral-100', hex: '#F5F5F5' },
            { name: 'neutral-200', hex: '#E5E5E5' },
            { name: 'neutral-300', hex: '#D4D4D4' },
            { name: 'neutral-400', hex: '#A1A1A1' },
            { name: 'neutral-500', hex: '#737373' },
            { name: 'neutral-600', hex: '#525252' },
            { name: 'neutral-700', hex: '#404040' },
            { name: 'neutral-800', hex: '#262626' },
            { name: 'neutral-900', hex: '#0A0A0A' },
        ]
    },
    background: {
        name: 'Background & Base',
        description: 'Core background colors for the website.',
        colors: [
            { name: 'background', hex: '#FBF7F0' },
            { name: 'white', hex: '#FFFFFF' },
            { name: 'black', hex: '#0A0A0A' },
        ]
    }
}

// Typography data
const typographyData = {
    fonts: [
        {
            name: 'Cormorant Garamond',
            usage: 'Headings, Display Text, CTA Buttons',
            weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)'],
            style: 'Elegant serif with italic variants',
            cssClass: 'font-serif'
        },
        {
            name: 'DM Sans',
            usage: 'Body text, Paragraphs, UI elements',
            weights: ['Light (300)', 'Regular (400)', 'Medium (500)', 'SemiBold (600)', 'Bold (700)'],
            style: 'Clean, modern sans-serif',
            cssClass: 'font-sans'
        }
    ],
    headings: [
        { tag: 'H1', size: '56px', usage: 'Page titles only. Use once per page.', class: 'text-h1' },
        { tag: 'H2', size: '40px', usage: 'Main section headers', class: 'text-h2' },
        { tag: 'H3', size: '32px', usage: 'Sub-section headers', class: 'text-h3' },
        { tag: 'H4', size: '24px', usage: 'Card titles, smaller sections', class: 'text-h4' },
        { tag: 'H5', size: '20px', usage: 'Labels, captions', class: 'text-h5' },
        { tag: 'H6', size: '18px', usage: 'Small labels, tags', class: 'text-h6' },
    ],
    body: [
        { name: 'Body XL', size: '20px', class: 'text-body-xl', usage: 'Hero text, lead paragraphs' },
        { name: 'Body LG', size: '18px', class: 'text-body-lg', usage: 'Large body text' },
        { name: 'Body MD', size: '16px', class: 'text-body-md', usage: 'Default body text' },
        { name: 'Body SM', size: '14px', class: 'text-body-sm', usage: 'Small text, captions' },
        { name: 'Body XS', size: '12px', class: 'text-body-xs', usage: 'Fine print, labels' },
    ]
}

// Spacing scale
const spacingScale = [
    { name: '0', value: '0px', class: 'p-0' },
    { name: '1', value: '4px', class: 'p-1' },
    { name: '2', value: '8px', class: 'p-2' },
    { name: '3', value: '12px', class: 'p-3' },
    { name: '4', value: '16px', class: 'p-4' },
    { name: '5', value: '20px', class: 'p-5' },
    { name: '6', value: '24px', class: 'p-6' },
    { name: '8', value: '32px', class: 'p-8' },
    { name: '10', value: '40px', class: 'p-10' },
    { name: '12', value: '48px', class: 'p-12' },
    { name: '16', value: '64px', class: 'p-16' },
    { name: '20', value: '80px', class: 'p-20' },
    { name: '24', value: '96px', class: 'p-24' },
]

// Custom spacing tokens
const customSpacing = [
    { name: 'gutter', value: '32px', usage: 'Standard grid gutter spacing' },
    { name: 'col', value: '90px', usage: 'Column width in grid system' },
    { name: 'container', value: '1188px', usage: 'Max container width' },
    { name: 'desktop', value: '1440px', usage: 'Max desktop width' },
]

// Color Swatch Component with Copy functionality
function ColorSwatch({ name, hex }) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(hex)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const isLight = ['#FFFFFF', '#FBF7F0', '#FAFAFA', '#F5F5F5', '#F4F6EF', '#E5ECDB', '#F9F8F2', '#EDEBDA', '#E5E5E5', '#D4D4D4', '#CFDBBB', '#E9E4C3'].includes(hex)

    return (
        <div className="group relative">
            <div
                className="w-full aspect-square rounded-lg shadow-sm border border-neutral-200 transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                style={{ backgroundColor: hex }}
                onClick={copyToClipboard}
            >
                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isLight ? 'text-neutral-800' : 'text-white'}`}>
                    <span className="text-body-sm font-medium">
                        {copied ? '✓ Copied' : 'Click to copy'}
                    </span>
                </div>
            </div>
            <div className="mt-2 text-center">
                <p className="text-body-sm font-medium text-neutral-700 truncate">{name}</p>
                <p className="text-body-xs text-neutral-500 font-mono">{hex}</p>
            </div>
        </div>
    )
}

// Section Header Component
function SectionHeader({ number, title, description }) {
    return (
        <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
                <span className="text-primary-400 font-serif text-h3 font-light">{number.toString().padStart(2, '0')}</span>
                <h2 className="text-h2 font-serif font-semibold italic text-primary-800">{title}</h2>
            </div>
            {description && (
                <p className="text-body-lg text-neutral-500 max-w-2xl">{description}</p>
            )}
        </div>
    )
}

// Divider Component
function SectionDivider() {
    return <hr className="border-t border-primary-600 my-16 md:my-24" />
}

function DesignGuidePage() {
    // For sticky quick access bar
    const introRef = useRef(null)
    const [showStickyBar, setShowStickyBar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!introRef.current) return
            const rect = introRef.current.getBoundingClientRect()
            setShowStickyBar(rect.bottom <= 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <DesignGuideLayout>
            <div className="mb-24">
                {/* Header Section */}
                <Container className="py-20 md:pb-16">
                    <h1 className="text-h1 font-serif font-semibold italic text-primary-800 text-center">
                        Design Guide
                    </h1>
                </Container>

                {/* Intro Section */}
                <div ref={introRef} id="intro">
                    <Container className="pb-8">
                        <div className="mx-auto" style={{ maxWidth: '800px' }}>
                            <div className="bg-primary-100 rounded-2xl p-8 md:p-12 border border-primary-600 shadow-sm">
                                <h2 className="text-h3 font-serif font-semibold italic text-primary-800 mb-6">Welcome to the Luna Essence Brand Guidelines</h2>
                                <div className="space-y-4 text-body-md text-neutral-600 leading-relaxed">
                                    <p>
                                        This Design Guide serves as the single source of truth for Luna Essence's visual identity and brand system. It documents our colors, typography, spacing, and UI components to ensure consistency across all touchpoints.
                                    </p>
                                    <p>
                                        <strong className="text-neutral-700">How to use this guide:</strong>
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 pl-4">
                                        <li><strong>Reference:</strong> Use this guide when creating marketing materials, social posts, or any branded content.</li>
                                        <li><strong>Consistency:</strong> Follow the color palette and typography rules to maintain brand recognition.</li>
                                        <li><strong>Future Assets:</strong> All new designs should align with the specifications documented here.</li>
                                    </ul>
                                    <p className="text-body-sm text-neutral-500 mt-6 pt-4 border-t border-primary-400">
                                        Built with Tailwind CSS. All values reference our <code className="bg-neutral-100 px-2 py-1 rounded text-primary-700">tailwind.config.js</code> configuration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Quick Access Bar (sticky) */}
                <div className={showStickyBar ? 'sticky top-0 z-50' : ''} style={{ background: showStickyBar ? 'white' : 'transparent' }}>
                    <QuickAccessBar />
                </div>

                <SectionDivider />

                {/* Colors Section */}
                <Container id="colors">
                    <SectionHeader
                        number={1}
                        title="Colors"
                        description="Our color palette reflects the serene, natural essence of Luna Essence Spa. Click any swatch to copy its HEX value."
                    />

                    {/* Primary Colors */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-2">{colorPalette.primary.name}</h3>
                        <p className="text-body-md text-neutral-500 mb-6">{colorPalette.primary.description}</p>
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                            {colorPalette.primary.colors.map((color) => (
                                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
                            ))}
                        </div>
                    </div>

                    {/* Secondary Colors */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-2">{colorPalette.secondary.name}</h3>
                        <p className="text-body-md text-neutral-500 mb-6">{colorPalette.secondary.description}</p>
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                            {colorPalette.secondary.colors.map((color) => (
                                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
                            ))}
                        </div>
                    </div>

                    {/* Neutral Colors */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-2">{colorPalette.neutral.name}</h3>
                        <p className="text-body-md text-neutral-500 mb-6">{colorPalette.neutral.description}</p>
                        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                            {colorPalette.neutral.colors.map((color) => (
                                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
                            ))}
                        </div>
                    </div>

                    {/* Background Colors */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-2">{colorPalette.background.name}</h3>
                        <p className="text-body-md text-neutral-500 mb-6">{colorPalette.background.description}</p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                            {colorPalette.background.colors.map((color) => (
                                <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
                            ))}
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Typography Section */}
                <Container id="typography">
                    <SectionHeader
                        number={2}
                        title="Typography"
                        description="Our typography system combines elegant serifs with clean sans-serif fonts to create a sophisticated, approachable aesthetic."
                    />
                    {/* Google Fonts Source Links */}
                    <div className="mb-8">
                        <h4 className="text-body-lg font-semibold text-primary-700 mb-2">Font Sources</h4>
                        <ul className="list-disc list-inside text-body-md text-neutral-700 space-y-2">
                            <li>
                                <a href="https://fonts.google.com/specimen/DM+Sans" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-700">DM Sans on Google Fonts</a>
                                <span className="ml-2 text-body-xs text-neutral-500">(for body text)</span>
                            </li>
                            <li>
                                <a href="https://fonts.google.com/specimen/Cormorant+Garamond" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-700">Cormorant Garamond on Google Fonts</a>
                                <span className="ml-2 text-body-xs text-neutral-500">(for headings)</span>
                            </li>
                        </ul>
                        <div className="mt-2 text-body-xs text-neutral-500">
                            <span>To use, add this to your HTML <code>&lt;head&gt;</code>:</span>
                            <pre className="bg-neutral-100 rounded p-2 mt-1 overflow-x-auto"><code>{`<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">`}</code></pre>
                        </div>
                    </div>

                    {/* Font Families */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Font Families</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {typographyData.fonts.map((font) => (
                                <div key={font.name} className="bg-white rounded-xl p-6 border border-neutral-200">
                                    <h4 className={`text-h3 ${font.cssClass} ${font.name === 'Cormorant Garamond' ? 'italic' : ''} text-primary-800 mb-4`}>
                                        {font.name}
                                    </h4>
                                    <div className="space-y-3 text-body-sm text-neutral-600">
                                        <p><strong>Usage:</strong> {font.usage}</p>
                                        <p><strong>Style:</strong> {font.style}</p>
                                        <p><strong>Weights:</strong> {font.weights.join(', ')}</p>
                                        <p><strong>CSS Class:</strong> <code className="bg-neutral-100 px-2 py-1 rounded text-primary-700">{font.cssClass}</code></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Heading Hierarchy */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Heading Hierarchy</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 space-y-6">
                            {typographyData.headings.map((heading) => (
                                <div key={heading.tag} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                                    <div className="flex-shrink-0 w-20">
                                        <span className="text-body-sm text-neutral-400 font-mono">{heading.tag}</span>
                                        <span className="text-body-xs text-neutral-400 ml-2">({heading.size})</span>
                                    </div>
                                    <div className={`${heading.class} font-serif font-semibold italic text-primary-800 flex-1`}>
                                        The Art of Wellness
                                    </div>
                                    <p className="text-body-sm text-neutral-500 flex-shrink-0 md:w-48">{heading.usage}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                            <p className="text-body-sm text-primary-800">
                                <strong>⚠️ Important:</strong> Use H1 only once per page for SEO and accessibility. All headings use <code className="bg-primary-100 px-1 rounded">font-serif</code> with semibold italic styling.
                            </p>
                        </div>
                    </div>

                    {/* Body Text Styles */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Body Text Styles</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 space-y-4">
                            {typographyData.body.map((text) => (
                                <div key={text.name} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                                    <div className="flex-shrink-0 w-32">
                                        <span className="text-body-sm text-neutral-400">{text.name}</span>
                                        <span className="text-body-xs text-neutral-400 ml-2">({text.size})</span>
                                    </div>
                                    <p className={`${text.class} text-neutral-700 flex-1`}>
                                        Experience tranquility and renewal at Luna Essence Spa.
                                    </p>
                                    <code className="text-body-xs bg-neutral-100 px-2 py-1 rounded text-primary-700 flex-shrink-0">{text.class}</code>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Font Weight Examples */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Font Weights</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Cormorant Garamond</h4>
                                <div className="space-y-3">
                                    <p className="font-serif font-light text-h4 text-neutral-600">Light (300)</p>
                                    <p className="font-serif font-normal text-h4 text-neutral-600">Regular (400)</p>
                                    <p className="font-serif font-medium text-h4 text-neutral-600">Medium (500)</p>
                                    <p className="font-serif font-semibold text-h4 text-neutral-600">SemiBold (600)</p>
                                    <p className="font-serif font-bold text-h4 text-neutral-600">Bold (700)</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">DM Sans</h4>
                                <div className="space-y-3">
                                    <p className="font-sans font-light text-h4 text-neutral-600">Light (300)</p>
                                    <p className="font-sans font-normal text-h4 text-neutral-600">Regular (400)</p>
                                    <p className="font-sans font-medium text-h4 text-neutral-600">Medium (500)</p>
                                    <p className="font-sans font-semibold text-h4 text-neutral-600">SemiBold (600)</p>
                                    <p className="font-sans font-bold text-h4 text-neutral-600">Bold (700)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Spacing & Layout Section */}
                <Container id="spacing">
                    <SectionHeader
                        number={3}
                        title="Spacing & Layout"
                        description="Consistent spacing creates visual harmony and guides the user's eye. Our spacing system uses Tailwind's default scale with custom additions."
                    />

                    {/* Spacing Scale */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Spacing Scale</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 overflow-x-auto">
                            <div className="flex items-end gap-3 min-w-max">
                                {spacingScale.map((space) => (
                                    <div key={space.name} className="flex flex-col items-center">
                                        <div
                                            className="bg-primary-500 rounded"
                                            style={{ width: space.value, height: space.value, minWidth: '8px', minHeight: '8px' }}
                                        />
                                        <span className="text-body-xs text-neutral-600 mt-2 font-medium">{space.name}</span>
                                        <span className="text-body-xs text-neutral-400">{space.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Custom Spacing Tokens */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Custom Spacing Tokens</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {customSpacing.map((token) => (
                                <div key={token.name} className="bg-white rounded-xl p-5 border border-neutral-200 flex justify-between items-center">
                                    <div>
                                        <code className="text-body-md bg-neutral-100 px-2 py-1 rounded text-primary-700 font-medium">{token.name}</code>
                                        <p className="text-body-sm text-neutral-500 mt-2">{token.usage}</p>
                                    </div>
                                    <span className="text-body-lg font-semibold text-neutral-700">{token.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Spacing Examples */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Spacing Examples</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Padding (p-*)</h4>
                                <div className="space-y-3">
                                    <div className="bg-primary-100 rounded">
                                        <div className="bg-primary-500 text-white text-body-sm p-2 rounded">p-2 (8px)</div>
                                    </div>
                                    <div className="bg-primary-100 rounded">
                                        <div className="bg-primary-500 text-white text-body-sm p-4 rounded">p-4 (16px)</div>
                                    </div>
                                    <div className="bg-primary-100 rounded">
                                        <div className="bg-primary-500 text-white text-body-sm p-6 rounded">p-6 (24px)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Gap (gap-*)</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-body-sm text-neutral-500 mb-2">gap-2</p>
                                        <div className="flex gap-2">
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-body-sm text-neutral-500 mb-2">gap-4</p>
                                        <div className="flex gap-4">
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-body-sm text-neutral-500 mb-2">gap-6</p>
                                        <div className="flex gap-6">
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                            <div className="bg-secondary-500 w-8 h-8 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* UI Elements Section */}
                <Container id="ui">
                    <SectionHeader
                        number={4}
                        title="UI Elements"
                        description="Reusable components that form the building blocks of our interface. These elements maintain consistency across all pages."
                    />

                    {/* Buttons */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Buttons</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                            <div className="space-y-8">
                                {/* Button Variants */}
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Variants</h4>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <div className="text-center">
                                            <Button variant="primary">Primary Button</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">variant="primary"</p>
                                        </div>
                                        <div className="text-center">
                                            <Button variant="secondary">Secondary Button</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">variant="secondary"</p>
                                        </div>
                                        <div className="text-center">
                                            <Button variant="tertiary">Tertiary Button</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">variant="tertiary"</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Button Sizes */}
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Sizes</h4>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <div className="text-center">
                                            <Button size="sm">Small</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">size="sm"</p>
                                        </div>
                                        <div className="text-center">
                                            <Button size="md">Medium</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">size="md"</p>
                                        </div>
                                        <div className="text-center">
                                            <Button size="lg">Large</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">size="lg"</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Button States */}
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">States</h4>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <div className="text-center">
                                            <Button>Default</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">Default</p>
                                        </div>
                                        <div className="text-center">
                                            <Button className="hover:bg-primary-800">Hover</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">Hover (try it)</p>
                                        </div>
                                        <div className="text-center">
                                            <Button disabled>Disabled</Button>
                                            <p className="text-body-xs text-neutral-500 mt-2">disabled={'{true}'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image & Visual Examples */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Images & Visual Design</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Image Example */}
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Brand Imagery</h4>
                                    <div className="overflow-hidden rounded-3xl border-4 border-primary-200 shadow-lg">
                                        <img
                                            src="/images/services/lash-service/mega-lash-image.png"
                                            alt="Luna Essence Service Example"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <p className="text-body-sm text-neutral-500 mt-4">Service imagery showcasing Luna's brand aesthetic</p>
                                </div>

                                {/* Design Principles */}
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Visual Design Principles</h4>
                                    <div className="space-y-4 text-body-md text-neutral-600">
                                        <div className="bg-primary-50 rounded-2xl p-4 border border-primary-200">
                                            <h5 className="font-semibold text-primary-800 mb-2">🌙 Ellipse & Circle Elements</h5>
                                            <p className="text-body-sm text-primary-700">
                                                Luna is an ellipse (moon shape). All design elements should embrace circular and rounded shapes with generous border-radius to maintain brand consistency.
                                            </p>
                                        </div>
                                        <div className="bg-primary-50 rounded-2xl p-4 border border-primary-200">
                                            <h5 className="font-semibold text-primary-800 mb-2">✨ Soft & Organic</h5>
                                            <p className="text-body-sm text-primary-700">
                                                Use rounded corners (rounded-lg, rounded-xl, rounded-2xl, rounded-3xl) for cards, images, buttons, and containers to create a soft, welcoming aesthetic.
                                            </p>
                                        </div>
                                        <div className="bg-primary-50 rounded-2xl p-4 border border-primary-200">
                                            <h5 className="font-semibold text-primary-800 mb-2">🎨 Natural Tones</h5>
                                            <p className="text-body-sm text-primary-700">
                                                Images should feature warm, natural lighting with soft sage green and beige tones that complement our color palette.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Cards & Containers</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Simple Card */}
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-h5 font-serif font-semibold text-primary-800 mb-3">Simple Card</h4>
                                <p className="text-body-sm text-neutral-500 mb-4">Basic card with border and padding.</p>
                                <code className="text-body-xs bg-neutral-100 px-2 py-1 rounded text-primary-700">rounded-xl border p-6</code>
                            </div>

                            {/* Card with Shadow */}
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <h4 className="text-h5 font-serif font-semibold text-primary-800 mb-3">Shadow Card</h4>
                                <p className="text-body-sm text-neutral-500 mb-4">Card with shadow for elevation.</p>
                                <code className="text-body-xs bg-neutral-100 px-2 py-1 rounded text-primary-700">rounded-xl shadow-md p-6</code>
                            </div>

                            {/* Hover Card */}
                            <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300 cursor-pointer">
                                <h4 className="text-h5 font-serif font-semibold text-primary-800 mb-3">Interactive Card</h4>
                                <p className="text-body-sm text-neutral-500 mb-4">Card with hover effect. Try hovering!</p>
                                <code className="text-body-xs bg-neutral-100 px-2 py-1 rounded text-primary-700">hover:shadow-lg</code>
                            </div>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Badges & Tags</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-body-sm font-medium">Primary</span>
                                <span className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-body-sm font-medium">Secondary</span>
                                <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-body-sm font-medium">Neutral</span>
                                <span className="px-3 py-1 bg-primary-700 text-white rounded-full text-body-sm font-medium">Filled</span>
                                <span className="px-3 py-1 border border-primary-700 text-primary-700 rounded-full text-body-sm font-medium">Outlined</span>
                            </div>
                            <p className="text-body-sm text-neutral-500 mt-4">Use badges for status indicators, categories, and tags.</p>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Iconography Section */}
                <Container id="iconography">
                    <SectionHeader
                        number={5}
                        title="Iconography"
                        description="We use Lucide Icons for a consistent, modern icon set that aligns with our clean aesthetic."
                    />

                    <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Icon Source */}
                            <div>
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Icon Library</h4>
                                <p className="text-body-md text-neutral-600 mb-4">
                                    We use <strong>Lucide Icons</strong> for all iconography needs. They're clean, consistent, and highly customizable.
                                </p>
                                <a
                                    href="https://lucide.dev/icons/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors"
                                >
                                    Browse Icons at lucide.dev →
                                </a>
                            </div>

                            {/* Icon Sizes */}
                            <div>
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Recommended Sizes</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <div className="w-4 h-4 bg-primary-500 rounded-sm"></div>
                                        <span className="text-body-md text-neutral-600">16px - Small (inline icons)</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 bg-primary-500 rounded-sm"></div>
                                        <span className="text-body-md text-neutral-600">20px - Default (buttons)</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-primary-500 rounded-sm"></div>
                                        <span className="text-body-md text-neutral-600">24px - Large (navigation)</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-primary-500 rounded-sm"></div>
                                        <span className="text-body-md text-neutral-600">32px - XL (feature icons)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Do / Don't */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                            <h4 className="text-body-lg font-semibold text-primary-800 mb-4 flex items-center gap-2">
                                <span className="text-xl">✓</span> Do
                            </h4>
                            <ul className="space-y-2 text-body-md text-primary-700">
                                <li>• Use consistent icon weights (2px stroke)</li>
                                <li>• Match icon color to text color</li>
                                <li>• Use icons to enhance, not replace text</li>
                                <li>• Maintain consistent sizing within contexts</li>
                                <li>• Use semantic icons that are easily understood</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                            <h4 className="text-body-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                <span className="text-xl">✗</span> Don't
                            </h4>
                            <ul className="space-y-2 text-body-md text-red-700">
                                <li>• Mix different icon libraries</li>
                                <li>• Use icons without adequate spacing</li>
                                <li>• Resize icons disproportionally</li>
                                <li>• Use overly complex or detailed icons</li>
                                <li>• Rely solely on icons for critical actions</li>
                            </ul>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Social Media Section */}
                <Container id="social">
                    <SectionHeader
                        number={6}
                        title="Social Media Elements"
                        description="Guidelines for creating on-brand social media content that maintains consistency across all platforms."
                    />

                    {/* Social Post Example */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Post Example</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                            <div className="max-w-md mx-auto">
                                <img
                                    src="/images/social-post-example.png"
                                    alt="Social Media Post Example"
                                    className="w-full rounded-lg shadow-md"
                                />
                                <p className="text-body-sm text-neutral-500 mt-4 text-center">Example social media post using Luna Essence brand guidelines</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Guidelines */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Image & Safe Area Guidelines</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Instagram Post (1:1)</h4>
                                <div className="aspect-square bg-neutral-100 rounded-lg relative mb-4 overflow-hidden">
                                    <div className="absolute inset-4 border-2 border-dashed border-primary-400 rounded-lg flex items-center justify-center">
                                        <span className="text-body-sm text-primary-600 font-medium">Safe Zone</span>
                                    </div>
                                    <div className="absolute top-2 left-2 text-body-xs text-neutral-500">1080 × 1080px</div>
                                </div>
                                <p className="text-body-sm text-neutral-500">Keep important content within the safe zone (16px margin).</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 border border-neutral-200">
                                <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Instagram Story (9:16)</h4>
                                <div className="aspect-[9/16] bg-neutral-100 rounded-lg relative mb-4 overflow-hidden max-h-64 mx-auto">
                                    <div className="absolute inset-4 border-2 border-dashed border-primary-400 rounded-lg flex items-center justify-center">
                                        <span className="text-body-sm text-primary-600 font-medium">Safe Zone</span>
                                    </div>
                                    <div className="absolute top-2 left-2 text-body-xs text-neutral-500">1080 × 1920px</div>
                                </div>
                                <p className="text-body-sm text-neutral-500">Avoid placing critical elements at top/bottom 150px.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Guidelines */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Content Guidelines</h3>
                        <div className="bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Text Overlays</h4>
                                    <ul className="space-y-2 text-body-md text-neutral-600">
                                        <li>• Use Cormorant Garamond for headlines</li>
                                        <li>• Use DM Sans for body text</li>
                                        <li>• Minimum font size: 24px for readability</li>
                                        <li>• Ensure contrast ratio of at least 4.5:1</li>
                                        <li>• Use semi-transparent overlays if needed</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-body-lg font-semibold text-neutral-700 mb-4">Brand Colors in Posts</h4>
                                    <ul className="space-y-2 text-body-md text-neutral-600">
                                        <li>• Primary green (#475833) for headlines</li>
                                        <li>• Secondary beige for backgrounds</li>
                                        <li>• White or cream for text overlays</li>
                                        <li>• Avoid using neutral grays as primary</li>
                                        <li>• Maintain warm, natural aesthetic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Download Assets */}
                    <div className="mb-12">
                        <h3 className="text-h4 font-serif font-semibold text-primary-700 mb-6">Download Assets</h3>
                        <div className="bg-primary-50 rounded-xl p-6 md:p-8 border border-primary-200">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-body-lg font-semibold text-primary-800 mb-2">Brand Asset Pack</h4>
                                    <p className="text-body-md text-primary-700">
                                        Download logos, icons, color swatches, and social media templates.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href="/images/luna-logo.svg"
                                        download="luna-logo.svg"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-full font-serif font-medium hover:bg-primary-800 transition-colors"
                                    >
                                        Download Logo
                                    </a>
                                    <a
                                        href="/images/social-post-example.png"
                                        download="social-post-template.png"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-primary-700 text-primary-700 rounded-full font-serif font-medium hover:bg-primary-100 transition-colors"
                                    >
                                        Download Template
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Quick Reference Section */}
                <Container id="reference">
                    <SectionHeader
                        number={7}
                        title="Quick Reference"
                        description="Essential brand values at a glance for quick reference."
                    />
                    <div className="grid md:grid-cols-3 gap-6 bg-white rounded-xl p-6 md:p-8 border border-neutral-200">
                        <div>
                            <h4 className="text-body-lg font-semibold text-primary-800 mb-4">Primary Colors</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-primary-700"></div>
                                    <code className="text-body-sm text-neutral-600">#475833</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-primary-800"></div>
                                    <code className="text-body-sm text-neutral-600">#3B482C</code>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-body-lg font-semibold text-primary-800 mb-4">Background</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-background border border-neutral-200"></div>
                                    <code className="text-body-sm text-neutral-600">#FBF7F0</code>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-white border border-neutral-200"></div>
                                    <code className="text-body-sm text-neutral-600">#FFFFFF</code>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-body-lg font-semibold text-primary-800 mb-4">Fonts</h4>
                            <div className="space-y-2 text-body-sm text-neutral-600">
                                <p><strong>Headings:</strong> Cormorant Garamond</p>
                                <p><strong>Body:</strong> DM Sans</p>
                                <p><strong>Buttons:</strong> Cormorant Garamond</p>
                            </div>
                        </div>
                    </div>
                </Container>

                <SectionDivider />

                {/* Designer Credit Section */}
                <Container id="designer">
                    <div className="bg-primary-200 rounded-3xl p-8 md:p-12 border border-primary-600 shadow-sm">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-h3 font-serif font-semibold italic text-primary-800 mb-4">Designed & Developed by</h2>
                            <h3 className="text-h2 font-serif font-bold text-primary-900 mb-2">Matin Truong</h3>
                            <p className="text-body-lg text-neutral-600 mb-6">Digital Designer & Developer</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                                <a
                                    href="mailto:matintyson.design@gmail.com"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    matintyson.design@gmail.com
                                </a>
                                <span className="hidden sm:inline text-neutral-400">•</span>
                                <a
                                    href="https://matintruong.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    matintruong.com
                                </a>
                            </div>

                            <p className="text-body-sm text-neutral-500 pt-6 border-t border-primary-200">
                                Design Guide for Luna Essence Spa • Last updated: January 2026
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </DesignGuideLayout>
    )
}

export default DesignGuidePage
