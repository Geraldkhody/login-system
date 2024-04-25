import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import InputField from "../../Component/InputField/InputField";
import Button from "../../Component/Button/Button";


const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    if (storedUserData) {
      setFirstName(storedUserData.firstName);
      setLastName(storedUserData.lastName);
      setEmail(storedUserData.email);
    }
  }, []);

  const updateUserData = async () => {
    try {
      const userData = { ...storedUserData, firstName, lastName, email };
      localStorage.setItem("userData", JSON.stringify(userData));

      console.log(storedUserData.id);
      const response = await fetch(
        `http://localhost:5000/users/${storedUserData.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        setMessage("User data updated successfully.");
      } else {
        setMessageError("Failed to update user data.");
      }
    } catch (error) {
      setMessageError("Error updating user data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[85vh] ">
      <div className="w-full max-w-[550px] pt-32 ">
        <h1 className="mb-4 font-[700] text-center text-3xl text-[#134077] ">
          Profilo
        </h1>
        <Card className="max-w-[550px] mb-6">
          <div className="w-[150px] h-[150px] rounded-xl shadow-md overflow-hidden">
            <img className="w-full h-full object-cover" src="/images/Profile.jpeg" alt="" />
          </div>
          <br />
          <InputField
            label="Nome"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <InputField
            label="Cognome"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <InputField
            label="Email"
            type="email"
            disabled="enable"
            value={email}
          />

          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
          {messageError && (
            <p className="text-red-500 text-sm mb-4">{messageError}</p>
          )}

          <Button text="SALVA" clickFunction={updateUserData} />

          <p className="text-center text-sm text-primary pt-6">
            <a href="/profile/changepassword">
              Cambia <span className="font-bold">password</span>
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
