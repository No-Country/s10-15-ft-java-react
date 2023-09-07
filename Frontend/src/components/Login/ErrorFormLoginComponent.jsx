const ErrorFormLoginComponent = (data) => {
  //controller error on inputsData component
  return (
    <div>
      {data.data.user && data.data.pass ? (
        data.data.stat !== 200 ? (
          <small className='text-red-500 w-60 h-2'>
            El ususario o la contaseña son incorrectos
          </small>
        ) : (
          <small className='text-transparent w-60 h-2'>.</small>
        )
      ) : (
        <small className='text-red-500 w-60 h-2'>
          Complete los campos para poder acceder
        </small>
      )}
    </div>
  );
};
export default ErrorFormLoginComponent;
