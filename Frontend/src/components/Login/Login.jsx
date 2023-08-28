import { useContext, useState } from 'react'
import { UserContext } from '../../libs/context/useContext'
import LoginPost from '../../libs/loginPost'
import ErrorFormLoginComponent from './ErrorFormLoginComponent'
const API_URL = import.meta.env.VITE_API_URL
const Login = () => {
  const [stat, setStat] = useState()
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const { setLog } = useContext(UserContext)
  return (
    <div className='flex flex-row justify-between w-full items-center bg-indigo-100 h-screen'>
      <div className='flex flex-col items-center w-1/2 gap-10'>
        <h1>Registrate para poder acceder</h1>
        <form
          className='flex flex-col items-center gap-7 w-350px'
          onSubmit={(e) => {
            e.preventDefault()
            user && pass
              ? LoginPost({ stat, setLog, setStat, pass, user, API_URL })
              : {}
          }}
        >
          <label htmlFor='user' className='flex flex-col items-start'>
            Usuario
            <input
              className='w-60 h-8 rounded mt-2'
              type='text'
              id='user'
              required
              onChange={(e) => {
                setUser(e.target.value)
              }}
            />
          </label>
          <label htmlFor='password' className='flex flex-col items-start'>
            Contraseña
            <input
              className='w-60 h-8 rounded mt-2'
              type='password'
              id='password'
              required
              onChange={(e) => {
                setPass(e.target.value)
              }}
            />
          </label>
          <ErrorFormLoginComponent data={{ user, pass, stat }} />
          <input type='submit' value='Acceder' className='cursor-pointer' />
        </form>
      </div>
      <div className='w-1/2 h-screen flex items-center'>
        <span className='w-1/2 h-screen left-1/2 absolute z-50 opacity-70 bg-indigo-700'>
          .
        </span>
        <img
          src='https://i.ibb.co/kgtgmK5/loginImg.webp'
          alt='login image'
          className='m-w-full m-h-full'
        />
      </div>
    </div>
  )
}

export default Login
