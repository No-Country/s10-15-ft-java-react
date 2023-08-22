import React from 'react';
import { AiOutlinePlus, AiTwotoneFilter } from 'react-icons/ai';

export const FilterNav = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <p>Total: 4 usuarios</p>
        <div className='flex items-center gap-10 pt-5'>
          <span>Mostrar</span>
          <select name="" id="" className='px-2'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            </select>
            <button className='flex items-center gap-2 '>
              <AiTwotoneFilter className='text-2xl' /> 
              <span className='text-lg'>FILTRAR</span>
            </button>
            <button className='bg-blue-600 rounded-full px-4 py-2 flex text-white items-center text-sm'>
              <AiOutlinePlus className='text-2xl'/> 
               AGREGAR USUARIO
            </button>
        </div>
      </div>
    </div>
  )
}
