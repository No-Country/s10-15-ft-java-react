//import { AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import postUsers from '../../libs/usersRequest/postUsers';

export const NewUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'USER',
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await postUsers(formData);
      console.log(formData);

    } catch (error) {
      console.log(error);

    } finally {
      setIsLoading(false);
    }
  };


  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    <div className='p-5 flex flex-col'>

      <div>
        <Link to='/usuarios'>
          <button className='btn btn-primary'>
            Volver
          </button>
        </Link>
      </div>
      
      <div className='flex flex-col justify-center items-center w-full'>
        <h1 className='text-3xl font-semibold'>Nuevo usuario</h1>
        
        <form 
          className='flex flex-col mt-5 gap-8 w-2/5 px-10'
          onSubmit={(e) => { e.preventDefault(); handleSubmit();}}
        >
          <input
            type='text'
            placeholder='Nombre del usuario'
            className='input border-black'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type='text'
            placeholder='Correo electrónico'
            className='input border-black'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type='text'
            placeholder='Contraseña'
            className='input border-black'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />

          <div className='flex flex-col'>
            <span className='font-bold'>Rol</span>
            <div className='flex items-center justify-between py-3'>
              <span className=''>Administrador</span>
              <input 
                type='checkbox' 
                className='toggle toggle-primary' 
                name='role'
                value='ADMIN'
                onChange={handleInputChange}
                />
            </div>
          </div>
          <div className='flex gap-3 mt-10'>
            <button className='btn btn-primary'>Cancelar</button>
            <button type='submit' className='btn btn-outline' disabled={isLoading}>
            {
              isLoading ? (
                <span className='loading loading-spinner text-primary loading-lg'></span>
              ) : (
                'Guardar'
              )
            }
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};
