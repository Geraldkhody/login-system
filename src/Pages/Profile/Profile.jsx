import React from 'react'
import Card from '../../Component/Card/Card';
import InputField from '../../Component/InputField/InputField';
import Button from '../../Component/Button/Button';

const Profile = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className='flex justify-center items-center w-full h-[85vh] '>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-[700] text-center text-3xl text-[#134077] '>Profilo</h1>
        <Card className='w-[550px] '>
          <InputField label="Nome" type="text"  value={userData.firstName} />
          {/* {firstNameError && <p className='text-red-500 text-sm mb-4'>{firstNameError}</p>} */}

          <InputField label="Cognome" type="text"  value={userData.lastName} />
          {/* {lastNameError && <p className='text-red-500 text-sm mb-4'>{lastNameError}</p>} */}

          <InputField label="Email" type="email"  value={userData.email} />
          {/* {usernameError && <p className='text-red-500 text-sm mb-4'>{usernameError}</p>} */}
          {/* {memberError && <p className='text-red-500 text-sm mb-4'>{memberError}</p>} */}

          {/* <InputField label="Inserisci la password" type="password" placeholder="Scrivila qui" id="password" /> */}
          {/* {passwordError && <p className='text-red-500 text-sm mb-4'>{passwordError}</p>} */}



          {/* <Button text="ACCEDI" clickFunction={registerHandler} /> */}

          <p className='text-center text-sm text-primary pt-6'><a href="/login">Non hai ancora un profilo<span className="font-bold">? Registrati</span></a></p>
        </Card>

      </div>
    </div>
  )
}

export default Profile;