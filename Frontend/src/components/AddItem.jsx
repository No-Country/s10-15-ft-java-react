import { FaCamera } from "react-icons/fa"
import { MdUpload } from "react-icons/md"


const AddItem = () => {
    return (
        <div className='p-5'>
            <div>
                <form className="flex  mt-6" >
                    <div className="flex w-[70%]  justify-center items-center gap-4">    
                    
                        <div className="flex flex-col justify-start items-center h-full w-[30%] pt-10 pl-8 gap-1">
                            <div className=" h-[150px] w-[150px] bg-slate-300 rounded-xl flex justify-center items-center text-5xl" ><FaCamera/></div>
                            <p className="text-md flex justify-center items-center text-xl"><MdUpload/>Subir imagen</p>
                        </div>
                        <div className="flex flex-col w-[70%] gap-4 p-10">
                            <input type="text" placeholder="Código del item" className="input input-bordered outline-none w-full  border border-gray-400" />
                            <input type="text" placeholder="Nombre" className="input input-bordered outline-none w-full  border border-gray-400" />
                            <input type="text" placeholder="Precio" className="input input-bordered outline-none w-full  border border-gray-400" />
                            <input type="text" placeholder="Stock" className="input input-bordered outline-none w-full  border border-gray-400" />
                            <input type="text" placeholder="Categoria" className="input input-bordered outline-none w-full  border border-gray-400" />
                            <input type="text" placeholder="Proveedor" className="input input-bordered outline-none w-full  border border-gray-400" />
                        </div>
                    </div>
                    <div className="flex flex-col w-[30%] justify-center items-start gap-4">
                        <div className=" text-start w-full">
                            <h2 className="text-xl">Stock</h2>
                            <p className="text-sm">Control de stock del item</p>
                        </div>
                        <input type="text" placeholder="Stock minimo" className="input input-bordered outline-none w-full max-w-xs border border-gray-400 " />
                        <input type="text" placeholder="Stock optimo" className="input input-bordered outline-none w-full max-w-xs border border-gray-400" />
                        <div className="flex gap-4 justify-end items-center w-full mt-5">
                            <button className=" border border-primary text-primary rounded-3xl font-semibold px-4 py-3">Cancelar</button>
                            <button className="btn">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItem