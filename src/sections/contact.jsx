import React from 'react'

const Contact = ({ email, phone, linkedin }) => {
  return (
    <section id="contact" className="mt-12 bg-slate-800/30 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-sm opacity-90">Interested in working together? I’m available for hire. Contact me via email, phone, or LinkedIn.</p>
      {/* Adding LinkedIn ensures recruiters have a verified social profile entry point. */}
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a href={`mailto:${email}`} className="px-4 py-2 hover:bg-slate-700/40 bg-sky-500 rounded-md font-medium text-sm">{email}</a>
        <a href={`tel:${phone}`} className="px-4 py-2 border border-slate-600 rounded-md text-sm hover:bg-slate-700/40 bg-sky-500">{phone}</a>
        <a href={linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-600 rounded-md text-sm hover:bg-slate-700/40 bg-sky-500">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact

