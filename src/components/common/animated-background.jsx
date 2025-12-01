import React from 'react'

const AnimatedBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-8 w-[520px] h-[520px] rounded-full filter blur-3xl" style={{ background: 'linear-gradient(135deg,#7dd3fc20,#60a5fa40)' }} />

      <div className="absolute right-[-120px] top-40 w-[420px] h-[420px] rounded-full filter blur-2xl" style={{ background: 'linear-gradient(135deg,#c4b5fd20,#7c3aed30)' }} />

      <div className="absolute left-1/4 bottom-[-100px] w-[600px] h-[600px] rounded-full filter blur-3xl" style={{ background: 'linear-gradient(135deg,#fde68a20,#fb718520)' }} />
    </div>
  )
}

export default AnimatedBackground

