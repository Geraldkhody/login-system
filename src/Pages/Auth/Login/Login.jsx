import React, { useRef, useState } from "react";
import Card from "../../../Component/Common/Card/Card";
import InputField from "../../../Component/Forms/InputField/InputField";
import Button from "../../../Component/Common/Button/Button";
import { Membership, isValidEmail, userValidation } from "../../../Services/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [error, setError] = useState("");


  const loginHandler = async () => {
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setUsernameError("");
    setPasswordError("");

    if (enteredEmail.trim() === "" || !isValidEmail(enteredEmail)) {
      setUsernameError("Please enter a valid email.");
      return;
    }

    if (enteredPassword.trim() === "") {
      setPasswordError("Please enter a password.");
      return;
    }

    try {
      const isMember = await Membership(enteredEmail);
      if (isMember.length !== 0) {
        setError("");
        if (!userValidation(isMember, enteredEmail, enteredPassword)) {
          setError("Incorrect credentials");
          return;
        }

        setIsLoggedIn(true);
        localStorage.setItem("userData", JSON.stringify({ ...isMember[0] }));
        localStorage.setItem("isLoggedIn", true);
        console.log("Log In Successfull");
        navigate("/");
      } else {
        setIsLoggedIn(false);
        setError("Account does not exist");
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="flex justify-center items-center h-[90%]">
      <div className="w-full max-w-[550px]">
        <h1 className="mb-4  font-bold text-3xl text-center text-[#134077]">
          Crea il tuo account
        </h1>
        <Card className="max-w-[550px] scaleanimate">
          <InputField
            label="Inserisci l’email"
            type="email"
            placeholder="name@example.com"
            ref={emailRef}
          />
          {usernameError && (
            <p className="text-red-500 text-sm mb-4">{usernameError}</p>
          )}

          <InputField
            label="Inserisci la password"
            type="password"
            placeholder="Scrivila qui"
            id="password"
            ref={passwordRef}
          />
          {passwordError && (
            <p className="text-red-500 text-sm mb-4">{passwordError}</p>
          )}
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Button text="ACCEDI" clickFunction={loginHandler} />

          <p className="text-center text-sm text-primary pt-6">
            <a href="/register">
              Hai già un account<span className="font-bold">? Accedi</span>
            </a>
          </p>
          <p className="text-center text-sm text-primary pt-2">
            <a href="/reset">
              Hai dimenticato la password
              <span className="font-bold">? Reimposta la password</span>
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
