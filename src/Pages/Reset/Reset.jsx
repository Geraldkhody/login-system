import React, { useRef } from 'react'
import Card from '../../Component/Card/Card'
import InputField from '../../Component/InputField/InputField'
import Button from '../../Component/Button/Button'

const Reset = () => {
  const emailRef = useRef();


    const resetHandler = () => {
        const enteredEmail = emailRef.current.value;

        console.log(enteredEmail);
    }

  return (
    <div className='flex justify-center items-center h-[90%]'>
      <div className='w-full max-w-[550px]'>
        <h1 className='mb-4 font-bold text-3xl text-center text-[#134077]'>Reimposta la tuo password</h1>
        <Card width="550px">
          <InputField label="Inserisci l’email" type="email" placeholder="name@example.com" ref={emailRef} />

          {/* {memberError && <p className='text-red-500 text-sm mb-4'>{memberError}</p>} */}

          <Button text="REIMPOSTA" clickFunction={resetHandler} />

          <p className='text-center text-sm text-primary pt-6'><a href="/login">Non hai ancora un profilo<span className="font-bold">? Registrati</span></a></p>
        </Card>
      </div>
    </div>
  )
}

export default Reset