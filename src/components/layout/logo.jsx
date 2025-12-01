import React from 'react'


const Logo = ({ name, title }) => {

  return (
    <div className="flex items-center gap-3">
      <div className="leading-4">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-xs opacity-80">{title}</div>
      </div>
    </div>
  )
}

export default Logo

