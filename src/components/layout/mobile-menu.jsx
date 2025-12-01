import React from 'react'
import navigationLinks from '../../data/navigation-links'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  const computeLine = (line) => {
    switch (line) {
      case 'top':
        return isOpen ? 'translate-y-1.5 rotate-45' : ''
      case 'middle':
        return isOpen ? 'opacity-0' : ''
      case 'bottom':
        return isOpen ? '-translate-y-1.5 -rotate-45' : ''
      default:
        return ''
    }
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={closeMenu}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 md:hidden"
        />
      )}
      <div className="md:hidden relative z-50">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="w-10 h-10 rounded-md border border-slate-700 flex flex-col items-center justify-center gap-1.5 bg-slate-800/60 backdrop-blur-sm"
      >
        <span className={`block h-0.5 w-5 bg-slate-100 transition-transform duration-200 ${computeLine('top')}`} />
        <span className={`block h-0.5 w-5 bg-slate-100 transition-opacity duration-200 ${computeLine('middle')}`} />
        <span className={`block h-0.5 w-5 bg-slate-100 transition-transform duration-200 ${computeLine('bottom')}`} />
      </button>
        {isOpen && (
          <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 shadow-2xl p-3 space-y-2 z-50">
            {navigationLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-sm text-slate-100 py-1.5 px-2 rounded-md hover:bg-slate-700/60"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MobileMenu

