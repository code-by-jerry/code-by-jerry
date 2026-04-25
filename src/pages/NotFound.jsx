import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <div className="hero-bg min-h-screen flex flex-col items-center justify-center font-sans text-text px-5 selection:bg-accent selection:text-white">
      <SEO 
        title="404 | Page Not Found | Code by Jerry"
        description="The page you are looking for does not exist. Return to Code by Jerry for expert full-stack development services."
      />
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none opacity-[0.12]" />
      
      <div className="relative z-10 text-center max-w-xl">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-border/70 bg-background/90 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.2)] mb-8">
          <span className="text-4xl font-display font-bold text-accent">404</span>
        </div>
        
        <h1 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl mb-6">
          Page Not Found
        </h1>
        
        <p className="text-lg leading-8 text-text-secondary sm:text-xl mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 rounded-full accent-gradient px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_-16px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_-16px_rgba(99,102,241,0.85)]"
          >
            <FaHome size={14} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition-all hover:border-accent/50 hover:text-accent"
          >
            <FaArrowLeft size={14} />
            Go Back
          </button>
        </div>
      </div>
      
      <div className="mt-20 relative z-10 text-[10px] font-bold uppercase tracking-[0.34em] text-text-secondary/30">
        Code by Jerry &copy; 2026
      </div>
    </div>
  )
}
