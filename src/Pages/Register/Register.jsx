import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../Component/InputField/InputField';
import Button from '../../Component/Button/Button';
import Card from '../../Component/Card/Card';
import {  Membership, isValidEmail } from '../../Store/Auth';

const Register = () => {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [firstNameError, setfirstNameError] = useState('');
  const [lastNameError, setlastNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const [memberError, setMemberError] = useState('');

  const storeCredencial = async (firstName, lastName, email, password) => {
    await fetch(`http://localhost:5000/users`, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    });
    
  }

  const registerHandler = async () => {
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setfirstNameError('');
    setlastNameError('');
    setUsernameError('');
    setPasswordError('');
    
    setMemberError('');

    if (
      enteredFirstName.trim() === '' 
      ) {
        setfirstNameError('Please enter a valid value.');
        return;
      }

    if (
      enteredLastName.trim() === '' 
      ) {
      setlastNameError('Please enter a valid value.');
      return;
    }

    if (enteredUsername.trim() === '' || !isValidEmail(enteredUsername) ) {
      setUsernameError('Please enter a valid email.');
      return;
    }
    
    if (enteredPassword.trim() === '') {
      setPasswordError('Please enter a valid password.');
      return;
    }


    try{
      const isMember = await Membership(enteredUsername);
      if (isMember.length !== 0) {
        setMemberError('Email is already used');
      }
      else {
        setMemberError('');
        await storeCredencial(enteredFirstName, enteredLastName, enteredUsername, enteredPassword);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
     

    console.log('First Name:', enteredFirstName);
    console.log('Last Name:', enteredLastName);
    console.log('Username:', enteredUsername);
    console.log('Password:', enteredPassword);
  };




  return (
    <div className='flex justify-center items-center w-full h-[85vh] '>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Hai già un account?</h1>
        <Card className='max-w-[550px] '>
          <InputField label="Inserisci il nome" type="text" placeholder="Mario" ref={firstNameRef} />
          {firstNameError && <p className='text-red-500 text-sm mb-4'>{firstNameError}</p>}

          <InputField label="Inserisci il cognome" type="text" placeholder="Rossi" ref={lastNameRef} />
          {lastNameError && <p className='text-red-500 text-sm mb-4'>{lastNameError}</p>}

          <InputField label="Inserisci l’email" type="email" placeholder="name@example.com" ref={usernameRef} />
          {usernameError && <p className='text-red-500 text-sm mb-4'>{usernameError}</p>}
          {memberError && <p className='text-red-500 text-sm mb-4'>{memberError}</p>}

          <InputField label="Inserisci la password" type="password" placeholder="Scrivila qui" id="password" ref={passwordRef} />
          {passwordError && <p className='text-red-500 text-sm mb-4'>{passwordError}</p>}



          <Button text="ACCEDI" clickFunction={registerHandler} />

          <p className='text-center text-sm text-primary pt-6'><a href="/login">Non hai ancora un profilo<span className="font-bold">? Registrati</span></a></p>
        </Card>

      </div>
    </div>
  );
};

export default Register;
