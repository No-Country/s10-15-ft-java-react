import { FaCamera } from 'react-icons/fa'
import { MdUpload } from 'react-icons/md'
import createProduct from '../libs/productPost'
import { useState } from 'react'
//import postImageProduct from '../libs/postImageProduct';

const AddItem = () => {
  const [formData, setFormData] = useState({
    productName: '',
    itemCode: '',
    category: 0,
    uniPrice: 0.0,
    quantityStock: 0,
    pathImage: 'sdfdsf',
    locationDeposit: 'dfdsfsd',
    provider: 0,
    description: '',
    warehouseStatus: 'In Stock'
  })

  const [isLoading, setIsLoading] = useState(false)
  //const [imagen, setImagen] = useState('');

  const handleInputChange = (evt) => {
    const { name, value } = evt.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    try {

      // Primero, envía la imagen a la URL de carga de archivos
      //const formData = new FormData();
      //formData.append('file', evt.target.pathImage.files[0]); // Agrega el archivo seleccionado al formData
      console.log(formData);
  
      const resp = await axios.post('https://s10-15-ft-java-react-production.up.railway.app/files/upload', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      
      if (resp) {
        const imageUrl = resp.data;

        // Actualiza la URL de la imagen en el formData
        setFormData({
          ...formData,
          pathImage: imageUrl,
        });

        console.log(formData);
  
        console.log('Producto creado exitosamente');
      }
      await createProduct(formData);
      
      
    } catch (error) {
      console.error('Error al crear el producto:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='p-5'>
      <div>
        <form className='flex mt-6' onSubmit={handleSubmit}>
          <div className='flex w-[70%]  justify-center items-center gap-4'>
            <div className='flex flex-col justify-start items-center h-full w-[30%] pt-10 pl-8 gap-1'>
              <input
                type='file'
                accept='image/*'
                name='pathImage'
                // onChange={imageUpload} // Actualiza el estado de la imagen
              />
              <div className='h-[150px] w-[150px] bg-slate-300 rounded-xl flex justify-center items-center text-5xl'>
                <FaCamera />
              </div>
              <p className='text-md flex justify-center items-center text-xl'>
                <MdUpload />
                Subir imagen
              </p>
            </div>
            <div className='flex flex-col w-[70%] gap-4 p-10'>
              <input
                type='text'
                placeholder='Código del item'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='itemCode'

                value={formData.itemCode || ''}
                onChange={ (evt) => handleInputChange(evt) }
              />
              <input
                type='text'
                placeholder='Nombre'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='productName'
                value={formData.productName}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='Precio'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='uniPrice'
                value={formData.uniPrice}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='Stock'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='quantityStock'
                value={formData.quantityStock}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='Categoria'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='category'
                value={formData.category}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='Proveedor'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='provider'
                value={formData.provider}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex flex-col w-[30%] justify-center items-start gap-4'>
            <div className='flex gap-4 justify-end items-center w-full mt-5'>
              <button className=' border border-primary text-primary rounded-3xl font-semibold px-4 py-3'>
                Cancelar
              </button>
              <button type='submit' className='btn' disabled={isLoading}>
                {isLoading ? (
                  <span className='loading loading-spinner text-primary loading-lg'></span>
                ) : (
                  'Guardar'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItem
