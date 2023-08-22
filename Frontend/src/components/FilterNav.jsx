import React from 'react';
import { AiOutlinePlus, AiTwotoneFilter } from 'react-icons/ai';

export const FilterNav = () => {
  return (
    <div className='text-black'>
      <div className='flex justify-between items-center'>
        <div>

        <p>Total: 4 usuarios</p>
        </div>
        <div className='flex items-center gap-10 py-2'>
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
            <button className='btn btn-primary'>
              <AiOutlinePlus className='text-2xl'/> 
               AGREGAR USUARIO
            </button>
        </div>
      </div>
    </div>
  )
}
