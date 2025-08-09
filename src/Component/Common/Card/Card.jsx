import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`scaleanimate rounded-2xl px-6 py-8 bg-white border border-[#134077] ${className} `}>
        {children}
    </div>
  )
}

export default Card;