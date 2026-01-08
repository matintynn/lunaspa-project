import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/shared/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import LashServiceDetail from './pages/services/LashServiceDetail'
import FacialServiceDetail from './pages/services/FacialServiceDetail'
import BodyServiceDetail from './pages/services/BodyServiceDetail'
import MedicalServiceDetail from './pages/services/MedicalServiceDetail'
import EyebrowServiceDetail from './pages/services/EyebrowServiceDetail'
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
        <Route path="/services/lash" element={<Layout><LashServiceDetail /></Layout>} />
        <Route path="/services/facial" element={<Layout><FacialServiceDetail /></Layout>} />
        <Route path="/services/body" element={<Layout><BodyServiceDetail /></Layout>} />
        <Route path="/services/medical" element={<Layout><MedicalServiceDetail /></Layout>} />
        <Route path="/services/eyebrow" element={<Layout><EyebrowServiceDetail /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
