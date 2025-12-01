import React from 'react'

const About = ({ summary, phone, email, location }) => {
  return (
    <section id="about" className="mt-6 bg-slate-800/40 p-6 rounded-2xl relative">
      <h2 className="text-xl font-semibold">About</h2>
      <p className="mt-3 text-sm opacity-90">{summary}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-sm">
          <div className="font-medium">Contact</div>
          <div className="opacity-80 text-xs mt-1">{phone} • {email}</div>
        </div>
        <div className="text-sm">
          <div className="font-medium">Location</div>
          <div className="opacity-80 text-xs mt-1">{location}</div>
        </div>
      </div>
    </section>
  )
}

export default About

