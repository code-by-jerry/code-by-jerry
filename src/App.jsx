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
import ServicesHub from './pages/ServicesHub'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import CustomWebAppDevelopment from './pages/services/CustomWebAppDevelopment'
import ECommerceDevelopment from './pages/services/ECommerceDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import APIIntegrationDevelopment from './pages/services/APIIntegrationDevelopment'
import BusinessAutomationDevelopment from './pages/services/BusinessAutomationDevelopment'
import AdminDashboardDevelopment from './pages/services/AdminDashboardDevelopment'
import StartupMVPDevelopment from './pages/services/StartupMVPDevelopment'
import SeoPerformanceOptimization from './pages/services/SeoPerformanceOptimization'
import BlogCategory from './pages/BlogCategory'
import CaseStudiesIndex from './pages/CaseStudiesIndex'
import CaseStudyDetail from './pages/CaseStudyDetail'
import RemoteFullStackDeveloperIndia from './pages/RemoteFullStackDeveloperIndia'
import NotFound from './pages/NotFound'

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
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/web-applications" element={<WebApplications />} />
        <Route path="/services/ecommerce" element={<ECommerceSystems />} />
        <Route path="/services/mobile-apps" element={<MobileApplications />} />
        <Route path="/services/backend-apis" element={<BackendAPIs />} />
        <Route path="/services/business-platforms" element={<BusinessPlatforms />} />
        <Route path="/services/seo-growth" element={<GrowthSEO />} />

        <Route
          path="/services/custom-web-app-development"
          element={<CustomWebAppDevelopment />}
        />
        <Route
          path="/services/ecommerce-development"
          element={<ECommerceDevelopment />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/services/api-integration-development"
          element={<APIIntegrationDevelopment />}
        />
        <Route
          path="/services/business-automation"
          element={<BusinessAutomationDevelopment />}
        />
        <Route
          path="/services/admin-dashboard-development"
          element={<AdminDashboardDevelopment />}
        />
        <Route
          path="/services/startup-mvp-development"
          element={<StartupMVPDevelopment />}
        />
        <Route
          path="/services/seo-performance-optimization"
          element={<SeoPerformanceOptimization />}
        />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/remote-full-stack-developer-india" element={<RemoteFullStackDeveloperIndia />} />
        <Route path="/developer" element={<Navigate to="/about" replace />} />
        <Route path="/work" element={<Navigate to="/portfolio" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
