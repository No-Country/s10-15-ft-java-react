import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { FaUserFriends } from 'react-icons/fa'
import { BsClipboardCheckFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import { CardInfo } from './CardInfo'
import { CardStock } from './CardStock'
import { useEffect, useState } from 'react'
import getAllProducts from '../libs/productGet'

export const Dashboard = () => {
  const [items, setItems] = useState([])

  

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.data)
    })
  }, [])

  // contar cantidad de providers mientars sean distintos
  const providers = items.map((item) => item.provider)
  const lenghtProviders = [...new Set(providers)] // Set solo permite valores unicos...

  

  return (
    <div className='p-5 flex flex-col gap-6 w-full'>
      <div className='flex justify-around w-full gap-6 mt-10'>
        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardInfo 
            icon={FaUserFriends} 
            number={lenghtProviders.length} 
            title='Proveedores' 
          />
        </div>

        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardInfo
            icon={BsClipboardCheckFill}
            number={items.length}
            title='Productos'
          />
        </div>

        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardInfo
            icon={IoMdNotifications}
            number={0}
            title='Notificaciones'
          />
        </div>
      </div>

      <div className='flex justify-around w-full mt-10 gap-6'>
        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardStock
            icon={FiArrowDownRight}
            customClass='text-red-700'
            title='Stock Bajo'
            nameProduct='Producto'
            number={0}
          />
        </div>
        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardStock
            icon={FiArrowUpRight}
            customClass='text-green-700'
            title='Stock Alto'
            nameProduct='Producto'
            number={0}
          />
        </div>
        <div className='card w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardStock
            icon={FiArrowUpRight}
            customClass='text-red-700'
            title='Sobre Stock'
            nameProduct='Producto'
            number={0}
          />
        </div>
      </div>
    </div>
  )
}
