import React, { useRef, useState } from 'react'
import Card from '../../Component/Card/Card';
import InputField from '../../Component/InputField/InputField';
import Button from '../../Component/Button/Button';

const Profile = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // New state for success message


    const userData = JSON.parse(localStorage.getItem("userData"));
    
    const updateUserData = async () => {
      const enteredFirstName = firstNameRef.current.value;
      const enteredLastName = lastNameRef.current.value;

      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            enteredFirstName,
            enteredLastName,
          }),
        });
        const data = await response.json();
        setMessage(data.message);
        
        // If update is successful, set success state to true
        if (response.ok) {
          setSuccess(true);
        }
      } catch (error) {
        setMessage('Error updating credentials.');
      }
  
      console.log(enteredFirstName)
      console.log(enteredLastName)
    }


  return (
    <div className='flex justify-center items-center w-full h-[85vh] '>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Profilo</h1>
        <Card className='w-[550px] '>
          <InputField label="Nome" type="text" ref={firstNameRef} value={userData.firstName} />
          {/* {firstNameError && <p className='text-red-500 text-sm mb-4'>{firstNameError}</p>} */}

          <InputField label="Cognome" type="text" ref={lastNameRef} value={userData.lastName} /> 
          {/* {lastNameError && <p className='text-red-500 text-sm mb-4'>{lastNameError}</p>} */}

          <InputField label="Email" type="email"  value={userData.email} />
          {/* {usernameError && <p className='text-red-500 text-sm mb-4'>{usernameError}</p>} */}
          {/* {memberError && <p className='text-red-500 text-sm mb-4'>{memberError}</p>} */}

          {/* <InputField label="Inserisci la password" type="password" placeholder="Scrivila qui" id="password" /> */}
          {/* {passwordError && <p className='text-red-500 text-sm mb-4'>{passwordError}</p>} */}



          <Button text="SALVA" clickFunction={updateUserData} />

          <p className='text-center text-sm text-primary pt-6'><a href="/profile/changepassword">Cambia <span className="font-bold">password</span></a></p>
        </Card>

      </div>
    </div>
  )
}

export default Profile;