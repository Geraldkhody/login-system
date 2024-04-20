import React from 'react'
import Card from '../../Component/Card/Card'
import Button from '../../Component/Button/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const events = [
        {name: 'Nome evento', time: "15-10-2022 15:00"},
        {name: 'Nome evento', time: "15-10-2022 15:00"},
        {name: 'Nome evento', time: "15-10-2022 15:00"},
    ]

  return (
    <div className='flex flex-col justify-center items-center min-h-[100vh]  md:min-h-[70vh] '>
        <h1 className='mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl mt-8 text-center text-[#134077] '>Ciao NOME ecco i tuoi eventi</h1>
        <div className='flex justify-center flex-wrap gap-10'>
            {events.map(item => (
                <Card className='w-full max-w-[290px]  sm:w-[250px] '>
                    <h1 className=' font-bold text-2xl text-[#231F20] '>{item.name}</h1>
                    <p className='font-[400] text-lg text-[#ccc] mb-4 '>{item.time}</p>
                    <Button text='JOIN' clickFunction={() => {}} />
                </Card>

            ))}

        </div>
    </div>
  )
}

export default Home
