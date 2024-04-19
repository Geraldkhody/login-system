import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#74DFD5] z-[-10] '>
        <img src="/images/Vector 5.svg" alt="" className='absolute bottom-10 ' />
        <img src="/images/Vector 4.svg" alt="" className='absolute bottom-0 ' />
        <img src="/images/Vector 1.svg" alt="" className='absolute bottom-0 ' />

        <img src="/images/Group 201.svg" alt="" className='absolute bottom-10 lg:bottom-14 right-[3rem] sm:right-[5rem] md:right-[10rem] lg:right-[13rem] w-[3rem] sm:w-[4rem] md:w-[5.3rem] ' />

        {/* =====================   Small Ellipse   ================== */}
        <img src="/images/Ellipse 12.svg" alt="" className='absolute top-[55%] sm:top-[50%] md:translate-y-[-50%] right-0 sm:right-5 md:right-9 w-[7rem] sm:w-[7.5rem] ' />
        {/* =====================   big Ellipse   ================== */}
        <img src="/images/Ellipse 13.svg" alt="" className='absolute top-[35%] sm:top-[40%] md:top-[47%] translate-y-[-50%] w-[7rem] sm:w-[7.5rem] md:w-[8rem] ' />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.03)] z-[-8]" ></div>

      <NavBar />
      <main className='h-[80vh] px-6 sm:px-0 '>
        <Outlet />
      </main>

    </Fragment>
  )
}

export default Layout