/*
Structured React portfolio composed of focused sections and shared layout.
Dependencies: lottie-react, tailwindcss
*/

import React, { useEffect } from 'react'
import resume from './data/resume'
import Header from './components/layout/header'
import AnimatedBackground from './components/common/animated-background'
import Hero from './sections/hero'
import About from './sections/about'
import Skills from './sections/skills'
import Experience from './sections/experience'
import Education from './sections/education'
import Contact from './sections/contact'

export default function App() {
  useEffect(() => {
    try {
      document.documentElement.style.scrollBehavior = 'smooth'
    } catch {
      // Ignore unsupported environments
    }

    const header = document.querySelector('header')
    const headerHeight = header ? header.getBoundingClientRect().height : 80

    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return
      event.preventDefault()
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12
      window.scrollTo({ top, behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick))
    return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 overflow-hidden">
      <Header email={resume.email} name={resume.name} title={resume.title} />

      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 pb-20 relative">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10">
          <Hero name={resume.name} title={resume.title} email={resume.email} />
          <div className="md:col-span-2">
            <About summary={resume.summary} phone={resume.phone} email={resume.email} location={resume.location} />
            <Skills items={resume.skills} />
          </div>
        </section>

        <Experience items={resume.experience} />

        <Education schools={resume.education} certifications={resume.certs} />

        <Contact email={resume.email} phone={resume.phone} linkedin={resume.linkedin} />
      </div>
    </div>
  )
}
 
