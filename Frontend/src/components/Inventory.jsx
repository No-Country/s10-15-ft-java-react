import { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { MdCategory } from "react-icons/md"
import {GrNext, GrPrevious} from "react-icons/gr"
import ProductItemComponent from "./ProductItemComponent"
import { Link } from "react-router-dom"



export const Inventory = () => {
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
    <div className='p-5 flex flex-col gap-6 '>
      <div className="w-full flex justify-between items-center overflow-hidden">
        <div className="border-[1px] border-gray-400 rounded-2xl w-[50%] flex justify-between items-center overflow-hidden">
          <input type="text" placeholder="Buscar" className="input w-full outline-none" />
          <BiSearchAlt2 className="text-2xl text-primary mr-2" />
        </div>
        <button className="text-primary cursor-pointer text-xl flex justify-center items-center ml-32"><MdCategory className='text-2xl mr-2'/>Categorias</button> 
        <Link to="/AgregarItem">
          <button className='btn'><AiOutlinePlus className='text-xl'/>Agregar item</button> 
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-8 gap-4 w-full text-center">
        <p className="col-span-3">Producto</p>
        <p>Código</p>
        <p>Categoria</p>
        <p>Stock</p>
        <p>Precio</p>
        <p>Acciones</p>
        </div>
      </div>
      <div>
        {items.map(item => (
          <ProductItemComponent key={item.id} img={item.img} name={item.name} code={item.code} category={item.category} stock={item.stock} price={item.price} quantity={item.quantity} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="join">
          <button className="join-item cursor-pointer "><GrPrevious/> </button>
          <button className="border border-gray-400 rounded-md px-4 py-2 text-l m-2 ">1</button>
          <button className="join-item cursor-pointer "><GrNext/></button>
        </div>
        <p>de 8 páginas</p>
      </div>
    </div>
  )
}
