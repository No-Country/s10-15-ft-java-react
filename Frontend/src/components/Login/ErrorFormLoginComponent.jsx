const ErrorFormLoginComponent = (data) => {
  //controller error on inputsData component
  return (
    <div>
      {data.data.user && data.data.pass ? (
        data.data.stat !== 200 ? (
          <small className='text-red-500'>
            El ususario o la contaseña son incorrectos
          </small>
        ) : (
          <small></small>
        )
      ) : (
        <small className='text-red-500'>
          Complete los campos para poder acceder
        </small>
      )}
    </div>
  )
}
export default ErrorFormLoginComponent
