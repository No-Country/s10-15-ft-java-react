import { HiOutlineCamera } from 'react-icons/hi';
import Avatar from 'react-avatar';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../libs/context/userProvider';
import { EditUserPropTypes } from '../../utils/prop-types';
import { types } from '../../libs/context/userReducer';

export const EditUser = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const { data, dispatch } = useContext(UserContext);
  const { img } = data.user;

  const handleChange = (e) => {
    setFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    file
      ? dispatch({
          type: types.userUpdate,
          payload: { ...data.user, img: URL.createObjectURL(file) },
        })
      : null;
  }, [file, dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file, fileName);
    axios
      .post(
        'https://s10-15-ft-java-react-production.up.railway.app/files/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Editar perfil</h2>
      <form className='flex flex-col mt-5 gap-8 px-10 align-middle'>
        <div className='flex w-2/3 justify-center avatar placeholder'>
          <input
            id='file-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
            className='hidden'
          />
          <div className='flex items-center justify-center bg-gray-500 mx-2 group rounded-full w-2/3'>
            <label
              htmlFor='file-input'
              className='flex items-center justify-center cursor-pointer w-full h-full'
            >
              <Avatar
                src={img}
                className='group-hover:opacity-50 rounded-full'
                size='100%'
              />
              <HiOutlineCamera
                className='hidden group-hover:block opacity-50 absolute'
                size={50}
              />
            </label>
          </div>
        </div>

        <input
          type='text'
          placeholder='Nombre del usuario'
          className='input border-black w-2/3'
        />
        <input
          type='text'
          placeholder='Correo electronico'
          className='input border-black w-2/3'
        />
        <div className='flex justify-end w-2/3'>
          <button onClick={handleClick} className='btn'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

EditUser.propTypes = EditUserPropTypes;
