import React from 'react'

const Hero = ({ name, title, email }) => {
  return (
    <section className="p-6 rounded-2xl bg-gradient-to-tr from-slate-800/50 to-slate-700/30 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Hi, I’m {name}</h1>
        <p className="text-sm opacity-90 mb-4">{title} focused on cloud data engineering and large-scale ETL.</p>
        <div className="flex gap-3 flex-wrap">
          <a href={`mailto:${email}`} className="px-4 py-2 bg-sky-500 rounded-md font-medium text-sm hover:brightness-105">Email</a>
          <a href="#experience" className="px-4 py-2 border border-slate-600 rounded-md text-sm">View Work</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

