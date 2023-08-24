import React from 'react';
import { IoIosNotifications } from 'react-icons/io';

export const NavBar = () => {
  return (
    <nav className='flex justify-end text-black px-10 py-5 border-b-1 border-slate-400 shadow-md'>
        <div className='flex items-center'>
            <IoIosNotifications className='text-3xl mx-3'/>
            <div className='h-10 w-10 rounded-full bg-gray-500 mx-2'></div>
            <div className='flex flex-col items-center text-base'>
                <span>Rocio del Solar</span>
                <small>Administrador</small>
            </div>
        </div>
    </nav>
  )
}
