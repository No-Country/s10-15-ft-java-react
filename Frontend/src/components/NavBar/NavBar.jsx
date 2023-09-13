import { useContext } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { UserContext } from '../../libs/context/userProvider';
import Avatar from 'react-avatar';

export const NavBar = () => {
  const [data] = useContext(UserContext);
  const { username, img, role } = data.user;
  return (
    <nav className='flex justify-end text-black px-10 py-5 border-b-1 border-slate-400 shadow-md'>
      <div className='flex items-center'>
        <IoIosNotifications className='text-3xl mx-3' />
        <div className='h-10 w-10 rounded-full mx-2'>
          <Avatar src={img} className='rounded-full' size='100%' />
        </div>
        <div className='flex flex-col items-center text-base'>
          <span>{username}</span>
          <small>{role}</small>
        </div>
      </div>
    </nav>
  );
};
