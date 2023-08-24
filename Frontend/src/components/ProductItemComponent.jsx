import { MdDelete, MdEdit } from "react-icons/md"


const ProductItemComponent = ({img, name, price, code, quantity, category}) => {
    return (
        <div>
            
            <div className="grid grid-cols-8 gap-4 w-full text-center border-t border-gray-400 p-2">
            <div className="col-span-3 flex justify-start items-center gap-6">
                <div className="flex flex-row items-center border rounded-md border-gray-400 h-[40px] w-[40px] overflow-hidden p-1 "> 
                    <img src={img} alt={name} className="  object-center object-cover "/>    
                </div>
                <p>{name}</p>
            </div>
            <p>{code}</p>
            <p>{category}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <div className="flex flex-row gap-6 justify-center items-center">
            <p className="cursor-pointer bg-gray-200 rounded-full p-2 text-primary text-xl tooltip" data-tip="Editar"> <MdEdit/></p>
            <p className="cursor-pointer bg-gray-200 rounded-full p-2 text-red-600 text-xl tooltip" data-tip="Eliminar" > <MdDelete/></p>
            </div>
            </div>
        </div>
    )
}

export default ProductItemComponent