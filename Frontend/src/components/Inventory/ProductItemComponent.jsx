/* eslint-disable react/prop-types */
import { MdDelete } from 'react-icons/md'
import { deleteProduct } from '../../libs/deleteProduct'
import BtnUpdate from './btnUpdate'

const ProductItemComponent = ({ item }) => {
  return (
    <div>
      <div className='grid grid-cols-8 gap-4 w-full text-center border-t border-gray-400 p-2'>
        <div className='col-span-3 flex justify-start items-center gap-6'>
          <div className='flex flex-row items-center border rounded-md border-gray-400 h-[40px] w-[40px] overflow-hidden p-1 '>
            <img
              src={`https://s10-15-ft-java-react-production.up.railway.app/${item.pathImage}`}
              alt={item.productName}
              className='  object-center object-cover '
            />
          </div>
          <p>{item.productName}</p>
        </div>
        <p>{item.itemCode}</p>
        <p>{item.category}</p>
        <p>{item.quantityStock}</p>
        <p>{item.uniPrice}</p>
        <div className='flex flex-row gap-6 justify-center items-center'>
          <BtnUpdate item={item} />
          <div
            className='cursor-pointer bg-gray-200 rounded-full p-2 text-red-600 text-xl tooltip'
            data-tip='Eliminar'
          >
            <MdDelete
              onClick={() => {
                deleteProduct(item.id)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItemComponent
