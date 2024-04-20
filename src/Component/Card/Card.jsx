import React from 'react'

const Card = ({children, width, className}) => {
  return (
    <div className={`${className} rounded-2xl px-6 py-8 bg-white border border-[#134077] `}>
        {children}
    </div>
  )
}

export default Card;