import React from 'react'

const Button = ({ text, clickFunction }) => {
    const clickHandler = () => {
        clickFunction()
    }

  return (
    <button className="bg-theme transition-all duration-500 hover:bg-white hover:text-theme border border-theme text- text-[#fff] uppercase text-center w-full py-3 font-bold text-sm rounded-md " onClick={clickHandler}>
        { text }
    </button>
  )
}

export default Button;