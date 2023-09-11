export const CardStock = ({
  icon,
  title,
  nameProduct,
  number,
  customClass
}) => {
  const Icon = icon;

  return (
    <div className='card-body flex flex-col items-center'>
      <span className='flex items-center'>
        <p className='md:text-lg lg:text-2xl font-bold'>{title}</p>
        <Icon className={`md:text-3xl lg:text-5xl ${customClass}`} />
      </span>
      {
        number > 0
          ? (
            <div className='flex flex-col items-center'>
              <p className='md:text-2xl lg:text-2xl font-bold'>{nameProduct}</p>
              <p className='md:text-2xl lg:text-2xl font-bold'>{number}</p>
            </div>
            )
          : (
            <div className='flex flex-col items-center'>
              <p className='md:text-lg lg:text-xl font-semibold'>{nameProduct}</p>
            </div>
            )
      }
    </div>
  )
}
