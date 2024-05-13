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
    <div className='w-[80%] mx-auto flex flex-col justify-center items-center min-h-[100vh]  md:min-h-[70vh] px-2'>
        <h1 className='mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl mt-8 text-center text-[#134077] '>Ciao {userData?.firstName} ecco i tuoi eventi</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-full'>

            {events.map((item, index) => (
                <section className='flex justify-center' key={index}>
                    <Card className='w-full sm:h-[200px] lg:w-[349px] flex flex-col justify-between'>
                        <div className="flex flex-col">
                            <h1 className=' font-bold text-xl text-[#231F20] '>{item.name}</h1>
                            <p className='font-normal text-md text-[#ccc] '>{item.time}</p>
                        </div>
                        <Button text='JOIN' />
                    </Card>  
                </section>
            ))}

        </div>
    </div>
  )
}

export default Home
