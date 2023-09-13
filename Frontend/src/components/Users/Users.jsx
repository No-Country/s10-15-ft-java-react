import { useEffect, useState } from 'react';
import { FilterNav } from './FilterNav';
import { UsersList } from './UsersList';
import { getUsers } from '../../libs/usersRequest/getUsers';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    users.length === undefined ? {} : getUsers(setUsers);
  }, [users]);
  return (
    <div className='text-lg box-border px-10 py-5 w-full '>
      <FilterNav />
      <div className='grid grid-cols-4 gap-4 py-4 justify-items-center font-bold px-3'>
        <div className='flex justify-start w-full'>
          <span>Usuario</span>
        </div>
        <span>Rol</span>
        <span>Correo electronico</span>
        <span>Acciones</span>
      </div>
      {users.length ? (
        <UsersList users={users} />
      ) : (
        <div className='flex justify-center items-center'>
          <span className='loading loading-dots loading-lg'></span>
        </div>
      )}
    </div>
  );
};
