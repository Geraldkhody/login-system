import React from 'react'
import Card from '../../Component/Card/Card'
import Button from '../../Component/Button/Button'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[85vh] '>
        <h1 className='mb-8 font-bold text-3xl text-center text-[#134077] '>Ciao NOME ecco i tuoi eventi</h1>
        <div className='flex justify-center gap-10'>
            <Card width="280px">
                <h1 className=' font-bold text-2xl text-[#231F20] '>Nome evento</h1>
                <p className='font-[400] text-lg text-[#ccc] mb-4 '>15-10-2022 15:00</p>
                <Button text='JOIN' />
            </Card>
            
            <Card width="280px">
                <h1 className=' font-bold text-2xl text-[#231F20] '>Nome evento</h1>
                <p className='font-[400] text-lg text-[#ccc] mb-4 '>15-10-2022 15:00</p>
                <Button text='JOIN' />
            </Card>
            <Card width="280px">
                <h1 className=' font-bold text-2xl text-[#231F20] '>Nome evento</h1>
                <p className='font-[400] text-lg text-[#ccc] mb-4 '>15-10-2022 15:00</p>
                <Button text='JOIN' />
            </Card>

        </div>
    </div>
  )
}

export default Home
