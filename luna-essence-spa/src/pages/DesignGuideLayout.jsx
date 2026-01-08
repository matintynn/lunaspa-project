import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

function DesignGuideLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">{children}</main>
        </div>
    )
}

export default DesignGuideLayout
