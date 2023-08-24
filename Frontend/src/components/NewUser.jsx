import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const NewUser = () => {
  return (
    <div className='flex flex-col text-black py-4 px-10 w-4/5'>
        <div className='flex items-center gap-2 text-xl px-10'>
            <Link to='/usuarios'>
                <AiOutlineLeft  />
            </Link>
            <span className='ms-2'>Registro de usuario</span>
        </div>
        <form action="" className='flex flex-col mt-5 gap-8 w-2/5 px-10'>
            <input type="text" placeholder='Nombre del usuario' className='input border-black'/>
            <input type="text" placeholder='Correo electrónico' className='input border-black'/>
            <input type="text" placeholder='Contraseña' className='input border-black'/>

            <div className='flex flex-col'>
                <span className='font-bold'>Rol</span>
                <div className='flex items-center justify-between py-3'>
                    <span className=''>Administrador</span>
                    <input type='checkbox' className='toggle toggle-primary'/>
                </div>
                <div className='flex items-center justify-between py-3'>
                    <span className=''>Visualizador</span>
                    <input type='checkbox' className='toggle toggle-primary'/>
                </div>
            </div>
            <div className='flex gap-3 mt-10'>
                <button className='btn btn-primary'>Cancelar</button>
                <button className='btn btn-outline'>Guardar</button>
            </div>
        </form>
    </div>
  )
}
