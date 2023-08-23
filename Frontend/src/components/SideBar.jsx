import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { links } from '../libs/links'
import { UserContext } from '../libs/context/useContext'
import { useContext } from 'react'

export const SideBar = () => {
  const { setLog } = useContext(UserContext)
  return (
    <nav className='h-screen w-1/5 flex flex-col justify-between bg-primary text-white box-border'>
      <div className='text-center py-2'>LOGO</div>
      <ul className='h-full flex flex-col mt-10 bg-primary px-8'>
        {
          //maping links from links file for dynamic rendering
          links.map(({ label, route, icon: Icon }) => (
            <li key={label}>
              <Link
                to={route}
                className='flex items-center hover:bg-primary-focus py-4 rounded-xl px-2'
              >
                <Icon className='me-5 text-2xl' />
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className='px-8 pb-10 flex'>
        <button
          onClick={() => {
            setLog(false)
          }}
          className='flex items-center hover:bg-primary-focus py-4 rounded-xl px-2 w-full'
        >
          <RxExit className='me-5 text-2xl' />
          Salir
        </button>
      </div>
    </nav>
  )
}
