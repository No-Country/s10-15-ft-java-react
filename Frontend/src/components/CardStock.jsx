export const CardStock = ({
  icon,
  title,
  nameProduct,
  number,
  customClass
}) => {
  const Icon = icon

  return (
    <div className='card-body flex flex-col items-center'>
      <span className='flex items-center'>
        <p className='md:text-lg lg:text-2xl font-bold'>{title}</p>
        <Icon className={`md:text-3xl lg:text-5xl ${customClass}`} />
      </span>
      <ol className='list-decimal'>
        <li className='md:text-lg lg:text-xl font-semibold'>
          {nameProduct} - {number}
        </li>
      </ol>
    </div>
  )
}
