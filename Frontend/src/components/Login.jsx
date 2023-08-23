import { useContext } from 'react'
import { UserContext } from '../libs/context/useContext'

const Login = () => {
  const { setLog } = useContext(UserContext)
  return (
    <>
      login
      <button
        onClick={() => {
          setLog(true)
        }}
      >
        acceder
      </button>
    </>
  )
}

export default Login
