import { useContext, useState } from 'react'
import { UserContext } from '../libs/context/useContext'
import axios from 'axios'

const Login = () => {
  const [status, setStatus] = useState()
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const { setLog } = useContext(UserContext)
  console.log(user, pass)
  user && pass
    ? axios
        .post(
          'https://s10-15-ft-java-react-production.up.railway.app/auth/login',
          {
            userName: user,
            password: `${pass}`
          }
        )
        .then(function (response) {
          console.log(response)
          setStatus(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    : {}
  return (
    <div className='flex flex-row justify-between w-full items-center bg-indigo-100 h-screen'>
      <div className='flex flex-col items-center w-1/2 gap-10'>
        <h1>Registrate para poder acceder</h1>
        <form
          className='flex flex-col items-center gap-7 w-350px'
          onSubmit={
            status === 200
              ? () => {
                  setLog('true')
                }
              : (e) => {
                  e.preventDefault()
                }
          }
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
            <small className='text-red-500'>Usuario icorrecto</small>
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
            <small className='text-red-500'>Contraseña incorrecta</small>
          </label>
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
