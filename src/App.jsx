import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FreelanceLanding from './pages/FreelanceLanding'
import DeveloperPortfolio from './pages/DeveloperPortfolio'
import WorkArchive from './pages/WorkArchive'
import WebApplications from './pages/services/WebApplications'
import ECommerceSystems from './pages/services/ECommerceSystems'
import MobileApplications from './pages/services/MobileApplications'
import BackendAPIs from './pages/services/BackendAPIs'
import BusinessPlatforms from './pages/services/BusinessPlatforms'
import GrowthSEO from './pages/services/GrowthSEO'
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FreelanceLanding />} />
        <Route path="/about" element={<DeveloperPortfolio />} />
        <Route path="/portfolio" element={<WorkArchive />} />
        <Route path="/services/web-applications" element={<WebApplications />} />
        <Route path="/services/ecommerce" element={<ECommerceSystems />} />
        <Route path="/services/mobile-apps" element={<MobileApplications />} />
        <Route path="/services/backend-apis" element={<BackendAPIs />} />
        <Route path="/services/business-platforms" element={<BusinessPlatforms />} />
        <Route path="/services/seo-growth" element={<GrowthSEO />} />
        <Route path="/developer" element={<Navigate to="/about" replace />} />
        <Route path="/work" element={<Navigate to="/portfolio" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
