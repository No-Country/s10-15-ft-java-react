import { FaUserFriends } from 'react-icons/fa'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { BsClipboardCheckFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'

export const Dashboard = () => {
  return (
    <div className='p-5'>
      <div className='container flex flex-col justify-between gap-7 w-full mt-5'>
        <div className='flex justify-around w-full mt-5 gap-4'>
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <FaUserFriends className='text-7xl text-primary' />
              <span className='text-2xl font-bold'>
                0
              </span>
              <p className='text-xl font-bold'>
                Proveedoress
              </p>
            </div>
          </div>
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <BsClipboardCheckFill className='text-7xl text-primary' />
              <span className='text-2xl font-bold'>
                0
              </span>
              <p className='text-xl font-bold'>
                Items
              </p>
            </div>
          </div>
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <IoMdNotifications className='text-7xl text-primary' />
              <span className='text-2xl font-bold'>
                0
              </span>
              <p className='text-xl font-bold'>
                Notificaciones
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around w-full mt-5 gap-4">
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <span className='flex items-center'>
                <p className='text-2xl font-bold'>
                  Stock bajo
                </p>
                <FiArrowDownRight className='text-5xl text-red-700' />
              </span>
              <ol className='list-decimal'>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
              </ol>
            </div>
          </div>
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <span className='flex items-center'>
                <p className='text-2xl font-bold'>
                  Stock alto
                </p>
                <FiArrowUpRight className='text-5xl text-green-700' />
              </span>
              <ol className='list-decimal'>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
              </ol>
            </div>
          </div>
          <div className="card w-96 bg-inherit border-2 border-slate-400">
            <div className="card-body items-center text-center">
              <span className='flex items-center'>
                <p className='text-2xl font-bold'>
                  Sobre stock
                </p>
                <FiArrowUpRight className='text-5xl text-red-700' />
              </span>
              <ol className='list-decimal'>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
                <li className='text-xl font-semibold'>
                  Produto - cantidad
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
