export const ChangePassword = () => {
  return (
    <div className=''>
      <h2 className='text-2xl font-semibold mb-4'>Cambiar contraseña</h2>
      <form action='' className='flex flex-col mt-10 gap-8 px-10 align-middle'>
        <input
          type='text'
          placeholder='Contraseña'
          className='input border-black w-2/3'
        />
        <input
          type='text'
          placeholder='Nueva contraseña'
          className='input border-black w-2/3'
        />
        <input
          type='text'
          placeholder='Nueva contraseña'
          className='input border-black w-2/3'
        />
        <div className='flex justify-end w-2/3'>
          <button className='btn'>Guardar</button>
        </div>
      </form>
    </div>
  );
};
