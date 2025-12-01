import React from 'react'
import navigationLinks from '../../data/navigation-links'
import Logo from './logo'
import MobileMenu from './mobile-menu'

const Header = ({ email, name, title }) => {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between relative z-20">
      <Logo name={name} title={title} />
      <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
        {navigationLinks.map(link => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
        <a className="ml-4 px-3 py-1.5 bg-slate-700 rounded-md text-xs hover:bg-slate-600" href={`mailto:${email}`}>
          Hire Me
        </a>
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Header

