import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductItemComponent from '../ProductItemComponent'
import Filter from './Filter'
import SearchBar from './SearchBar'

export const Inventory = () => {
  const [items, setItems] = useState([])
  const [category, setCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  let categories = []
  axios
    .get(
      'https://s10-15-ft-java-react-production.up.railway.app/product/listAll',
      
    )
    .then(function (response) {
      //console.log(response.data.data)
      setItems(response.data.data)
      response.data.data.map((product) => {
        categories.includes(product.category)
          ? null
          : categories.push(product.category)
      })
    })
    .catch(function (error) {
      console.log(error)
      error
    })

  const filterData = (query, data, type) => {
    if (type === 'search') {
      if (!query) {
        return data
      } else {
        return data.filter((data) =>
          data.productName.toLowerCase().includes(query)
        )
      }
    } else {
      if (!query) {
        return data
      } else {
        return data.filter((data) => data.category.toString().includes(query))
      }
    }
  }




  const searchedData = filterData(searchQuery, items, 'search')
  const filteredData = filterData(category, searchedData)

  return (
    <div className='p-5 flex flex-col gap-6 '>
      <div className='w-full flex justify-between items-center overflow-hidden'>
        <SearchBar setSearchQuery={setSearchQuery} />
        <Filter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Link to='/AgregarItem'>
          <button className='btn'>
            <AiOutlinePlus className='text-xl' />
            Agregar item
          </button>
        </Link>
      </div>
      <div>
        <div className='grid grid-cols-8 gap-4 w-full text-center'>
          <p className='col-span-3'>Producto</p>
          <p>Código</p>
          <p>Categoria</p>
          <p>Stock</p>
          <p>Precio</p>
          <p>Acciones</p>
        </div>
      </div>
      <div>
        {filteredData.length ? (
          filteredData.map((item) => (
            <ProductItemComponent
              key={item.id}
              img={`https://s10-15-ft-java-react-production.up.railway.app/${item.pathImage}`}
              name={item.productName}
              code={item.itemCode}
              category={item.category}
              stock={item.warehouseStatus}
              price={item.uniPrice}
              quantity={item.quantityStock}
            />
          ))
        ) : (
          <div className='flex justify-center items-center'>
            <p className=''>No Hay productos</p>
          </div>
        )}
      </div>
      <div className='flex justify-center items-center gap-3'>
        <div className='join'>
          <button className='join-item cursor-pointer '>
            <GrPrevious />{' '}
          </button>
          <button className='border border-gray-400 rounded-md px-4 py-2 text-l m-2 '>
            1
          </button>
          <button className='join-item cursor-pointer '>
            <GrNext />
          </button>
        </div>
        <p>de 8 páginas</p>
      </div>
    </div>
  )
}
