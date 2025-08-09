const Button = ({ text, clickFunction }) => {
    const clickHandler = () => {
        clickFunction()
    }

  return (
    <button className="bg-theme transition-all duration-500 hover:bg-white hover:text-theme border border-theme text-[#fff] uppercase text-center w-full py-2 font-semibold text-sm rounded-md " onClick={clickHandler}>
        { text }
    </button>
  )
}

export default Button;