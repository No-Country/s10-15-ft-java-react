import { useEffect, useState } from 'react'
import { updateProducts } from '../../libs/updateProducts'

/* eslint-disable react/prop-types */
const ModalUpdateProduct = ({ item, setMostrar }) => {
  const [formData, setFormdata] = useState({ id: item.id })
  useEffect(() => {
    setFormdata(formData)
  }, [formData])
  return (
    <form
      className='flex flex-col justify-center h-max gap-5 items-center'
      onSubmit={(e) => {
        e.preventDefault()
        updateProducts(formData)
        setTimeout(() => {
          setMostrar(false)
        }, 2000)
      }}
    >
      <label className={'flex flex-col items-start'}>
        Nombre
        <input
          type='text'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${item.productName}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              productName: e.target.value ? e.target.value : item.productName
            })
          }}
        />
      </label>
      <label className={'flex flex-col items-start'}>
        Código
        <input
          type='text'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${item.itemCode}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              itemCode: e.target.value ? e.target.value : item.itemCode
            })
          }}
        />
      </label>
      <label className={'flex flex-col items-start'}>
        Categoria
        <input
          type='number'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${item.category}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              category: e.target.value ? e.target.value : item.category
            })
          }}
        />
      </label>
      <label className={'flex flex-col items-start'}>
        Stock
        <input
          type='number'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${item.quantityStock}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              quantityStock: e.target.value
                ? e.target.value
                : item.quantityStock
            })
          }}
        />
      </label>
      <label className={'flex flex-col items-start'}>
        Precio
        <input
          type='number'
          className='w-60 rounded border-2 border-blue-400 p-2 px-2 outline-4 outline-blue-500'
          placeholder={`${item.uniPrice}`}
          onChange={(e) => {
            setFormdata({
              ...formData,
              uniPrice: e.target.value ? e.target.value : item.uniPrice
            })
          }}
        />
      </label>
      <div className='flex flex-row items-center justify-around gap-5'>
        <input type='submit' className='btn' value='Actualizar Producto' />
        <div className='btn' onClick={() => setMostrar(false)}>
          Cancelar
        </div>
      </div>
    </form>
  )
}
export default ModalUpdateProduct
