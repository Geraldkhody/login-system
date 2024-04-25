import React from 'react'
import Card from '../../Component/Card/Card'
import Button from '../../Component/Button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const events = [
        {name: 'Nome evento', time: "15-10-2022 15:00"},
        {name: 'Nome evento', time: "15-10-2022 15:00"},
        {name: 'Nome evento', time: "15-10-2022 15:00"},
    ]

  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh]  md:min-h-[70vh] px-2'>
        <h1 className='mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl mt-8 text-center text-[#134077] '>Ciao {userData.firstName} ecco i tuoi eventi</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-full'>

            {events.map(item => (
                <section className='flex justify-center'>
                    <Card className='w-full sm:h-[220px] lg:w-[349px] flex flex-col justify-between'>
                        <div className="flex flex-col">
                            <h1 className=' font-bold text-2xl text-[#231F20] '>{item.name}</h1>
                            <p className='font-[400] text-lg text-[#ccc] mb-4 '>{item.time}</p>
                        </div>
                        <Button text='JOIN' clickFunction={() => {}} />
                    </Card>  
                </section>

            ))}

        </div>
    </div>
  )
}

export default Home
