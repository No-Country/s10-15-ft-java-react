import { RxExit } from 'react-icons/rx';
import { UserContext } from '../../libs/context/userProvider';
import { types } from '../../libs/context/userReducer';
import { useContext } from 'react';

const BtnSalir = () => {
  const [dispatch] = useContext(UserContext);
  return (
    <>
      <button
        className='flex items-center hover:bg-primary-focus py-4 rounded-xl px-2 w-full'
        onClick={() => window.modalSalir.showModal()}
      >
        <RxExit className='me-5 text-2xl' />
        Salir
      </button>
      <dialog id='modalSalir' className='modal'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-black'>ESTA SEGURO QUE DESEA SALIR?</h3>
          <p className='py-4 text-black'>
            Se deslogueara su usuario y debera volver a acceder.
          </p>
          <div className='flex flex-row items-center justify-around'>
            <div className='modal-action m-0'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Cancelar</button>
            </div>
            <button
              onClick={() => {
                dispatch({
                  type: types.authLogout,
                });
              }}
              className='btn'
            >
              Continuar
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};
export default BtnSalir;
