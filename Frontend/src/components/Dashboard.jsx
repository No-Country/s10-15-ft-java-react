import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import { FaUserFriends } from 'react-icons/fa'
import { BsClipboardCheckFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import CardInfo from './CardInfo'
import CardStock from './CardStock'
import { useEffect, useState } from 'react'

export const Dashboard = () => {
  
  const [items, setItems] = useState([])
  
  const url = "../../public/productos.json"

  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(err => console.log(err)) 
  },[])
  console.log(items);

  return (
      <div className='p-5 flex flex-col gap-4 w-full'>
      
        <div className='flex justify-around w-full gap-4'>
          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardInfo icon={FaUserFriends} number={0} title='Proveedores' />
          </div>

          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardInfo icon={BsClipboardCheckFill} number={items.length} title='Productos' />
          </div>

          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardInfo icon={IoMdNotifications} number={0} title='Notificaciones' />
          </div>
        </div>
        
        <div className="flex justify-around w-full mt-5 gap-4">
          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardStock icon={FiArrowDownRight} customClass='text-red-700' title='Stock Bajo' nameProduct='Producto' number={0} />
          </div>
          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardStock icon={FiArrowUpRight} customClass='text-green-700' title='Stock Alto' nameProduct='Producto' number={0} />
          </div>
          <div className="card w-1/3 bg-inherit border-2 border-slate-400">
            <CardStock icon={FiArrowUpRight} customClass='text-red-700' title='Sobre Stock' nameProduct='Producto' number={0} />
          </div>
        </div>
      </div>
  )
}
