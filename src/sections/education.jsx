import React from 'react'

const Education = ({ schools, certifications }) => {
  return (
    <section id="education" className="mt-12 grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800/40 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">Education</h3>
        <div className="space-y-3 text-sm">
          {schools.map(school => (
            <div key={school.inst}>
              <div className="font-medium">{school.inst}</div>
              <div className="opacity-80">{school.period}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/40 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">Certifications</h3>
        <ul className="list-disc ml-5 text-sm opacity-90">
          {certifications.map(cert => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Education

