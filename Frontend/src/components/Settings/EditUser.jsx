import { HiOutlineCamera } from 'react-icons/hi'
import Avatar from 'react-avatar'
import { useState } from 'react'
export const EditUser = ({ username, img }) => {
  console.log(img)
  const [file, setFile] = useState(img)
  const handleChange = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Editar perfil</h2>
      <form action='' className='flex flex-col mt-5 gap-8 px-10 align-middle'>
        {img != null ? (
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
                  src={file}
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
        ) : (
          <div className='flex w-2/3 justify-center avatar placeholder'>
            <div className='flex items-center justify-center bg-gray-500 mx-2 hover:bg-gray-600 group text-neutral-content rounded-full w-2/3'>
              <Avatar unstyled name={username} className='text-5xl' />
              <HiOutlineCamera
                className='hidden group-hover:block opacity-50 absolute'
                size={50}
              />
            </div>
          </div>
        )}

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
          <button className='btn'>Guardar</button>
        </div>
      </form>
    </div>
  )
}