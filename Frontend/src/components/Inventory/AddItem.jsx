import { FaCamera } from 'react-icons/fa';
import { MdUpload } from 'react-icons/md';
import createProduct from '../../libs/productsRequest/productPost';
import { useEffect, useState } from 'react';
import postImageProduct from '../../libs/postImg/postImageProduct';
import { Link, useNavigate } from 'react-router-dom';

export const AddItem = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const [nameFile, setNameFile] = useState('Subir Imagen');
  const [formData, setFormData] = useState({
    productName: '',
    itemCode: '',
    category: '',
    uniPrice: '',
    quantityStock: '',
    locationDeposit: '',
    provider: '',
    description: '',
    warehouseStatus: 'In Stock',
  });
  useEffect(() => {
    setFile(file);
    setNameFile(nameFile);
  }, [file, nameFile, formData]);
  const [isLoading, setIsLoading] = useState(false);
  //const [imagen, setImagen] = useState('');

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await createProduct(formData);
    } catch (error) {
      error;
    } finally {
      setIsLoading(false);
      navigate('/inventario');
    }
  };

  return (
    <div>
      <div className='p-5 pb-0'>
        <div className='flex'>
          <Link to='/inventario'>
            <button className='btn btn-primary'>Volver</button>
          </Link>
          <h1 className='text-3xl font-semibold text-center flex items-center justify-center w-full'>
            Nuevo Producto
          </h1>
        </div>

        <form
          id='file'
          className='flex mt-4 justify-around'
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', file, nameFile);
            postImageProduct(formData);
            handleSubmit();
          }}
          encType='multipart/form-data'
        >
          <div className='flex w-[70%]  justify-around items-center gap-4'>
            <div className='flex flex-col justify-start items-center h-full w-[30%] pt-8 pl-8 gap-1'>
              <input
                required
                id='fileInput'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(e) => {
                  setNameFile(`${e.target.files[0].name}`);
                  setFile(e.target.files[0]);
                  setFormData({
                    ...formData,
                    pathImage: `${e.target.files[0].name}`,
                  });
                }} // Actualiza el estado de la imagen
              />
              <label
                className='text-md flex flex-col justify-center items-center text-xl cursor-pointer'
                htmlFor='fileInput'
              >
                <div className='h-[150px] w-[150px] bg-slate-300 rounded-xl flex justify-center items-center text-5xl'>
                  <FaCamera />
                </div>
                <div className='flex'>
                  <MdUpload />
                  {nameFile}
                </div>
              </label>
            </div>
            <div className='flex flex-col w-[70%] gap-4 p-10'>
              <input
                required
                type='text'
                placeholder='Código del item'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='itemCode'
                value={formData.itemCode || ''}
                onChange={(evt) => handleInputChange(evt)}
              />
              <input
                required
                type='text'
                placeholder='Nombre'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='productName'
                value={formData.productName}
                onChange={handleInputChange}
              />
              <input
                required
                type='number'
                placeholder='Precio'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='uniPrice'
                value={formData.uniPrice}
                onChange={handleInputChange}
              />
              <input
                required
                type='number'
                placeholder='Stock'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='quantityStock'
                value={formData.quantityStock}
                onChange={handleInputChange}
              />
              <input
                required
                type='number'
                placeholder='Categoria'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='category'
                value={formData.category}
                onChange={handleInputChange}
              />
              <input
                required
                type='number'
                placeholder='Proveedor'
                className='input input-bordered outline-none w-full  border border-gray-400'
                name='provider'
                value={formData.provider}
                onChange={handleInputChange}
              />
              <div className='flex flex-col justify-center gap-4'>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
