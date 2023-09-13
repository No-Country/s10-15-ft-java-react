import { MdDelete } from 'react-icons/md';
import { deleteUser } from '../../libs/usersRequest/deleteUser';
import UpdateBtn from '../UpdateBtn/UpdateBtn';

export const UsersList = (users) => {
  return (
    <div className='mt-2'>
      {users.users.map((user) => (
        <div
          key={user.id}
          className='grid grid-cols-4 gap-4 py-4 justify-items-center border-b-2 border-gray-200 px-3 items-center'
        >
          <div className='flex justify-start w-full'>
            <span>{user.username}</span>
          </div>
          <span>{user.role}</span>
          <span>{user.email}</span>
          <div className='flex flex-row gap-6 justify-center items-center'>
            <UpdateBtn user={user} />
            <div
              className='cursor-pointer bg-gray-200 rounded-full p-2 text-red-600 text-xl tooltip'
              data-tip='Eliminar'
            >
              <MdDelete
                onClick={() => {
                  deleteUser(user.id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
