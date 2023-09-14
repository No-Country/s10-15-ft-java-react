import { EditUser } from './EditUser';
import { ChangePassword } from './ChangePassword';
import { useState } from 'react';
import { GrNext } from 'react-icons/gr';

const Settings = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className='p-5 grid grid-flow-col grid-cols-2'>
      <section className='p-5 border-r-2'>
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Usuario</h2>
          <button
            className='flex items-center w-48 justify-between bg-base-content input'
            onClick={handleClick}
          >
            Cambiar contraseña
            <GrNext />
          </button>
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Pantalla</h2>
          <div>
            <div className='form-control w-1/2'>
              <label className='label cursor-pointer'>
                <span className='label-text text-neutral'>Modo Oscuro</span>
                <input
                  type='checkbox'
                  disabled
                  className='toggle toggle-primary bg-primary disabled:bg-primary'
                />
              </label>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5 flex-col justify-center'>
        {isVisible ? <ChangePassword /> : <EditUser />}
      </section>
    </main>
  );
};
export default Settings;
