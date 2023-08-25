import React from 'react';
import { FilterNav } from './FilterNav';
import { UsersList } from './UsersList';

export const Users = () => {
  return (
    <div className='text-lg box-border w-4/5 px-10 py-5 w-full '>
        <FilterNav  />
        <div className='grid grid-cols-4 gap-4 py-4 justify-items-center font-bold px-3'>
            <div className="flex justify-start w-full">
              <span>Usuario</span>
            </div>
            <span>Rol</span>
            <span>Correo electronico</span>
            <span>Acciones</span>
        </div>
        <UsersList />
    </div>
  )
}
