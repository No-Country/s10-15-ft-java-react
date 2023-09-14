import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { BsClipboardCheckFill } from 'react-icons/bs';

import { CardStock } from './CardStock';
import { useEffect, useState } from 'react';
import getProductsDashboard from '../../libs/productsRequest/getProductsDashboard';
import { CardInfo } from '../CardInfo';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProductsDashboard().then((res) => {
      setItems(res.data);
    });
  }, [items]);

  // contar cantidad de providers mientars sean distintos
  const providers = items.map((item) => item.provider);
  const lenghtProviders = [...new Set(providers)]; // Set solo permite valores unicos...

  // Productos con stock bajo (menor a 10)
  const stockBajo = items.filter((item) => item.quantityStock < 10);
  const cantidadStockBajo = stockBajo[0]?.quantityStock;

  // Productos con stock alto (mayor a 20)
  const stockAlto = items.filter((item) => item.quantityStock > 20);
  const cantidadStockAlto = stockAlto[0]?.quantityStock;

  return (
    <div className='p-5 flex flex-col gap-6 w-full'>
      <div className='flex justify-around w-full gap-6 mt-10'>
        <div className='card md:w-1/2 lg:w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <Link to='/usuarios'>
            <CardInfo
              icon={FaUserFriends}
              number={lenghtProviders.length}
              title='Usuarios'
            />
          </Link>
        </div>

        <div className='card md:w-1/2 lg:w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <Link to='/inventario'>

            <CardInfo
              icon={BsClipboardCheckFill}
              number={items.length}
              title='Productos'
            />
          </Link>
        </div>
      </div>

      <div className='flex justify-around w-full mt-10 gap-6'>
        <div className='card md:w-1/2 lg:w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardStock
            icon={FiArrowDownRight}
            customClass='text-red-700'
            title='Stock Bajo'
            nameProduct={stockBajo[0]?.productName ?? 'No hay productos'}
            number={cantidadStockBajo}
          />
        </div>
        <div className='card md:w-1/2 lg:w-1/3 md:h-32 lg:h-40 flex justify-center items-center bg-inherit border-2 border-slate-400 rounded-lg shadow-xl'>
          <CardStock
            icon={FiArrowUpRight}
            customClass='text-green-700'
            title='Stock Alto'
            nameProduct={stockAlto[0]?.productName ?? 'No hay productos'}
            number={cantidadStockAlto}
          />
        </div>
      </div>
    </div>
  );
};
