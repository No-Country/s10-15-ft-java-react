import { MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ModalUpdateProduct } from '../Inventory/ModalUpdateProduct';
import { UpdateBtnPropTypes } from '../../utils/prop-types';
import { ModalUpdateUser } from '../Users/ModalUpdateUsers';

const UpdateBtn = ({ item, user }) => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    setMostrar(mostrar);
  }, [mostrar]);
  return (
    <>
      <button
        className='cursor-pointer bg-gray-200 rounded-full p-2 text-blue-500 text-xl tooltip'
        data-tip='Editar'
        onClick={() => setMostrar(true)}
      >
        <MdEdit />
      </button>
      <dialog id='my_modal_4' className='modal' open={mostrar}>
        <div className='modal-box flex flex-col justify-around h-max gap-5'>
          <h3 className='font-bold text-lg'>Editar producto</h3>
          {user ? (
            <ModalUpdateUser user={user} setMostrar={setMostrar} />
          ) : (
            <></>
          )}
          {item ? (
            <ModalUpdateProduct item={item} setMostrar={setMostrar} />
          ) : (
            <></>
          )}
        </div>
      </dialog>
    </>
  );
};

UpdateBtn.propTypes = UpdateBtnPropTypes;

export default UpdateBtn;
