import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/shared/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import LashServiceDetail from './pages/LashServiceDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DesignGuidePage from './pages/DesignGuidePage'
import DesignGuideLayout from './pages/DesignGuideLayout'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/design-guide" element={
          <DesignGuideLayout>
            <DesignGuidePage />
          </DesignGuideLayout>
        } />
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/services/:serviceSlug" element={<Layout><ServiceDetailPage /></Layout>} />
        <Route path="/lash-detail" element={<Layout><LashServiceDetail /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
