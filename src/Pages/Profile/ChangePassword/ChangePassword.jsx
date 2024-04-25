import React, { useState } from 'react';
import Button from '../../../Component/Button/Button';
import Card from '../../../Component/Card/Card';
import InputField from '../../../Component/InputField/InputField';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  const handleChangePassword = async () => {
    try {
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
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error updating password.');
    }
  };

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      handleChangePassword();
    } else {
      setMessage('Passwords do not match.');
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-[85vh] '>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Change Password</h1>
        <Card className='max-w-[550px] '>
          <div className='w-full h-[80px] round-xl flex justify-start  '>
            <img src="/images/password-lock.svg" alt="password-lock" />
          </div>
          <br />
            <InputField label="Old Password" type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />

            <InputField label="New Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

            <InputField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <Button text="Change Password" type="submit" clickFunction={handleSubmit} />

            {message && <p>{message}</p>}
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
