import React, { useEffect, useState } from "react";
import Card from "../../Component/Card/Card";
import InputField from "../../Component/InputField/InputField";
import Button from "../../Component/Button/Button";
import { dispatchStore, store } from "../../Store/ChangeProfile";


const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [selectedPicture, setSelectedPicture] = useState("/images/Profile.jpeg");

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

  const changePictureHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatchStore(e.target.result)
        setSelectedPicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

    const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };


  return (
    <div className="flex justify-center items-center w-full h-[85vh] ">
      <div className="w-full max-w-[550px] pt-[9.5rem] ">
        <h1 className="mb-4 font-[700] text-center text-3xl text-[#134077] ">
          Profilo
        </h1>
        <Card className="max-w-[550px] mb-6">
          <div className="relative w-[150px] h-[150px] rounded-xl shadow-md overflow-hidden group transition duration-500 ease-in-out">
            <img className="w-full h-full object-cover" src={store.profilePicture} alt="" />
            <div className="absolute bottom-0 left-0 right-0 justify-center items-center w-full h-[25%] bg-[rgba(255,255,255,0.65)] cursor-pointer flex transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 ">
              <img className="h-[80%]" src="/images/camera.svg" alt="" onClick={triggerFileInput} />
            </div>
            <input id="fileInput" type="file" accept="image/*" onChange={changePictureHandler} style={{ display: 'none' }} />
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
