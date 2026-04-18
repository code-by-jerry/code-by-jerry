import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import FreelanceLanding from './pages/FreelanceLanding'
import DeveloperPortfolio from './pages/DeveloperPortfolio'
import WorkArchive from './pages/WorkArchive'
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
        <Route path="/developer" element={<DeveloperPortfolio />} />
        <Route path="/work" element={<WorkArchive />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
