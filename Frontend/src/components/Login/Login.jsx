import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../libs/context/userProvider';
import LoginPost from '../../libs/loginRequest/loginPost';
import ErrorFormLoginComponent from './ErrorFormLoginComponent';
import { types } from '../../libs/context/userReducer';

const Login = () => {
  const [stat, setStat] = useState();
  useEffect((stat) => {
    setStat(stat);
  }, []);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const { dispatch } = useContext(UserContext);

  return (
    <div className='flex flex-row justify-between w-full items-center bg-indigo-100 h-screen'>
      <div className='flex flex-col items-center w-1/2 gap-10'>
        <h1>Registrate para poder acceder</h1>
        <form
          className='flex flex-col items-center gap-7 w-350px'
          onSubmit={(e) => {
            e.preventDefault();
            LoginPost({ stat, setStat, pass, user });
            //stat === 200 ? setLog('true') : {}
            dispatch({
              type: types.authLogin,
            });
          }}
        >
          <label htmlFor='user' className='flex flex-col items-start'>
            Usuario
            <input
              className='w-60 h-8 placeholder:italic bg-white  border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              type='text'
              id='user'
              required
              onChange={(e) => {
                setUser(e.target.value.toLocaleLowerCase());
              }}
            />
          </label>
          <label htmlFor='password' className='flex flex-col items-start'>
            Contraseña
            <input
              type='password'
              className='w-60 h-8 placeholder:italic bg-white  border border-slate-300 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              id='password'
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <ErrorFormLoginComponent data={{ user, pass, stat }} />
          </label>
          <input
            type='submit'
            value='Acceder'
            className='cursor-pointer outline-0'
          />
        </form>
      </div>
      <div className='w-1/2 h-screen flex items-center'>
        <span className='w-1/2 h-screen left-1/2 absolute z-50 opacity-70 bg-indigo-700'>
          .
        </span>
        <img
          src='https://i.ibb.co/kgtgmK5/loginImg.webp'
          alt='login image'
          className='h-full'
        />
      </div>
    </div>
  );
};

export default Login;
