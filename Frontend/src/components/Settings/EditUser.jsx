import { HiOutlineCamera } from 'react-icons/hi'
import Avatar from 'react-avatar'
import axios from 'axios'
import { useState } from 'react'
export const EditUser = ({ username, img }) => {
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')
  const handleChange = (e) => {
    setFileName(e.target.files[0].name)
    setFile(e.target.files[0])
    // setFileURL(URL.createObjectURL(e.target.files[0]))
  }
  const handleClick = (e) => {
    e.preventDefault()
    console.log(fileName, '=', file)
    const formData = new FormData()
    formData.append('file', file, fileName)
    console.log(formData)
    axios
      .post(
        'https://s10-15-ft-java-react-production.up.railway.app/files/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Editar perfil</h2>
      <form className='flex flex-col mt-5 gap-8 px-10 align-middle'>
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
          <button onClick={handleClick} className='btn'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}
