import React, { useState } from 'react';
import Button from '../../../Component/Button/Button';
import Card from '../../../Component/Card/Card';
import InputField from '../../../Component/InputField/InputField';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
//     try {
//       // Send the old and new passwords along with the user ID to the server
//       const response = await fetch('http://localhost:5000/users', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//         //   userId: userId, // Replace userId with the actual user ID
//           oldPassword: oldPassword,
//           newPassword: newPassword,
//         }),
//       });   
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage('Error updating password.');
//     }
  };
  
  

  const changePassword = (e) => {
    // console.log("Change Password");
    // e.preventDefault();
    // if (newPassword === confirmPassword) {
    //   handleUpdate();
    // } else {
    //   setMessage('Passwords do not match.');
    // }
  };

  return (

    <div className='flex justify-center items-center w-full h-[85vh] '>
    <div className='w-full max-w-[550px]'>
    <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Hai già un account?</h1>
    <Card className='w-[550px] '>
        
        <InputField label="Inserisci la vecchia password" type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

        <InputField label="Inserisci la nuova password" type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

        <InputField label="Conferma password" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <Button text="CAMBIA PASSWORD" clickFunction={changePassword} />

        {message && <p>{message}</p>}
    </Card>

    </div>
    </div>
  );
};

export default ChangePassword;
