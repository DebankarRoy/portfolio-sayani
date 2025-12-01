import React from 'react'

const Experience = ({ items }) => {
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {items.map(experience => (
          <article key={experience.company + experience.period} className="bg-slate-800/50 p-6 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <p className="text-sm opacity-80">{experience.company} • {experience.period}</p>
            </div>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-sm opacity-90">
              {experience.bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience

