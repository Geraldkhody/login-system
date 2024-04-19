import React from 'react'

const Button = ({ text, clickFunction }) => {
    const clickHandler = () => {
        clickFunction()
    }

  return (
    <button className="bg-[#0057FF] text-[#fff] uppercase text-center w-full py-3 font-bold text-sm rounded-md " onClick={clickHandler}>
        { text }
    </button>
  )
}

export default Button;