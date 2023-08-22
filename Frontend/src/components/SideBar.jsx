import React from 'react';
import {BiSolidDashboard, BiHelpCircle } from 'react-icons/bi'
import {MdInventory } from 'react-icons/md'
import {BsFillPersonVcardFill } from 'react-icons/bs'
import {AiOutlineHistory, AiTwotoneSetting } from 'react-icons/ai'
import {HiUsers } from 'react-icons/hi'
import {RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <nav className='h-screen  w-1/5 flex flex-col sticky top-0 left-0 justify-between bg-blue-500 text-white'>
        <div className='text-center py-2'>
            LOGO
        </div>
        <ul className='h-full flex flex-col mt-10 bg-blue-500 px-8'>
            <li>
                <Link to='/dashboard' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <BiSolidDashboard className='me-5 text-2xl' />
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to='/inventario' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <MdInventory className='me-5 text-2xl' />
                    Inventario
                </Link>
            </li>
            <li>
            <Link to='/proveedores' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                <BsFillPersonVcardFill className='me-5 text-2xl' />
                Proveedores
            </Link>
            </li>
            <li>
                <Link to='/historial' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <AiOutlineHistory className='me-5 text-2xl' />
                    Historial
                </Link>
            </li>
            <li>
                <Link to='/usuarios' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <HiUsers className='me-5 text-2xl' />
                    Usuarios
                </Link>
            </li>
            <li>
                <Link to='/configuracion' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <AiTwotoneSetting className='me-5 text-2xl' />
                    Configuración
                </Link>
            </li>
            <li>
                <Link to='/ayuda' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2'>
                    <BiHelpCircle className='me-5 text-2xl' />
                    Ayuda
                </Link>
            </li>
        </ul>
        <div className='px-8 pb-10 flex'>
                <Link to='/ayuda' className='flex items-center hover:bg-blue-400 py-4 rounded-md px-2 w-full'>
                    <RxExit className='me-5 text-2xl' />
                    Salir
                </Link>
        </div>
    </nav>
  )
}
