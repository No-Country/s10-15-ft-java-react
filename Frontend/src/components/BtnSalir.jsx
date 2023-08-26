import { useContext } from 'react'
import { UserContext } from '../libs/context/useContext'
import { RxExit } from 'react-icons/rx'

const BtnSalir = () => {
  const { setLog } = useContext(UserContext)
  return (
    <>
      <button
        className='flex items-center hover:bg-primary-focus py-4 rounded-xl px-2 w-full'
        onClick={() => window.my_modal_1.showModal()}
      >
        <RxExit className='me-5 text-2xl' />
        Salir
      </button>
      <dialog id='my_modal_1' className='modal'>
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
                setLog('false')
              }}
              className='btn'
            >
              Continuar
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
export default BtnSalir
