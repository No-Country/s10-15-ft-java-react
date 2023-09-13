/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { updateUsers } from '../../libs/usersRequest/updateUsers';

//modal para actualizar el producto
export const ModalUpdateUser = ({ user, setMostrar }) => {
  const [formData, setFormdata] = useState({
    id: user.id,
    password: user.password,
    email: user.email,
    username: user.username,
  });
  useEffect(() => {
    setFormdata(formData);
  }, [formData]);
  return (
    <form
      className='flex flex-col justify-center h-max gap-5 users-center'
      onSubmit={(e) => {
        e.preventDefault();
        updateUsers(formData);
        setTimeout(() => {
          setMostrar(false);
        }, 2000);
      }}
    >
      <label className={'flex flex-col users-start'}>
        Nombre
        <input
          type='text'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${user.username}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              username: e.target.value.length
                ? e.target.value
                : `${user.username}`,
            });
          }}
        />
      </label>
      <label className={'flex flex-col users-start'}>
        email
        <input
          type='text'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${user.email}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              email: e.target.value.length ? e.target.value : `${user.email}`,
            });
          }}
        />
      </label>
      <div className='flex flex-row users-center justify-around gap-5'>
        <input type='submit' className='btn' value='Actualizar Producto' />
        <div className='btn' onClick={() => setMostrar(false)}>
          Cancelar
        </div>
      </div>
    </form>
  );
};
