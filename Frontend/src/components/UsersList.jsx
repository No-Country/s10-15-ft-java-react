import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { MdModeEdit } from 'react-icons/md';




export const UsersList = () => {

    const uriUsers = '../../users.json'

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        axios(uriUsers)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, []);



  return (
    <div className='mt-2'>
        {
            users.map(user => (
                <div className='grid grid-cols-4 gap-4 py-4 justify-items-center border-b-2 border-gray-200 px-3 items-center'>
                    <div className="flex justify-start w-full">
                        <span>{user.fullName}</span>
                    </div>
                    <span>{user.rol}</span>
                    <span>{user.email}</span>
                    <span className='bg-blue-200 rounded-full text-xl p-1'><MdModeEdit /></span>
                </div>
        
            ))
        }
    </div>
  )
}
