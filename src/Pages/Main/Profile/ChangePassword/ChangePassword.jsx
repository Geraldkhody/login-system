import React, { useState } from 'react';
import Button from '../../../../Component/Common/Button/Button';
import Card from '../../../../Component/Common/Card/Card';
import InputField from '../../../../Component/Forms/InputField/InputField';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  
  const [sucessMessage, setSucessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  
  const handleChangePassword = async () => {
    try {
      setErrorMessage("");
      if (oldPassword == null && newPassword == null && confirmPassword == null){
        return;
      }
      else if(oldPassword == null || newPassword == null || confirmPassword == null){
        setErrorMessage("Invalid Inputs")
      }
      else{
        const response = await fetch(`http://localhost:5000/users/${storedUserData.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oldPassword: oldPassword,
            password: newPassword,
          }),
        });
        if (response.ok) {
        setSucessMessage("User data updated successfully.");
        {setTimeout(() => {
          setSucessMessage("")
        }, 5000)}
      } else {
        setErrorMessage("Failed to update user data.");
      }
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Error updating password.');
    }
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      handleChangePassword();
    } else {
      setErrorMessage('Passwords do not match.');
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-[85vh] '>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Change Password</h1>
        <Card className='max-w-[550px] '>
          <div className='w-full h-[50px] round-xl flex justify-start  '>
            <img src="/images/password-lock.svg" alt="password-lock" />
          </div>
          <br />
            <InputField label="Vecchia Password" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

            <InputField label="Nuova Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

            <InputField label="Conferma Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <div className='overflow-hidden'>
            {sucessMessage && 
              <p className="sucessmessageanime text-green-500 text-sm mb-4 transition opacity-100 before:opacity-0">{sucessMessage}</p>
            }
              {errorMessage && <p className="errormessageanime text-red-500 text-sm mb-4 overflow-hidden">{errorMessage}</p>}

            </div>
            <Button text="Cambia Password" type="submit" clickFunction={handleSubmit} />
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
