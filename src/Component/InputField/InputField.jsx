import React, { useState } from "react";

const InputField = React.forwardRef(( {type, label, id, placeholder, value}, ref) => {
  const [passwordType, setPasswordType] = useState(type);
  

  return (
    <div className="mb-4 w-full ">
      <label className="text-sm sm:text-xs block text-primary ">{label}</label>
      <div className="relative">
        <input
          type={id === "password" ? passwordType : type}
          placeholder={placeholder}
          className={`w-full outline-none border-b font-[500] sm:text-sm border-b-primary py-2 pr-8 ${
            id === "password" && "pr-14"
          } placeholder:text-[#ccc]  focus:border-b focus:border-b-primary focus:outline-none   `}
          ref={ref}
          value={value}
        />
        {id === "password" && (
          <img
            src="/images/password eye.svg"
            alt="view password"
            className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer w-[1.3rem]"
            onClick={() =>
              `${ passwordType === "password" ? setPasswordType("text") : setPasswordType("password") }`
            }
          />
        )}
      </div>
    </div>
  );
});
export default InputField;
