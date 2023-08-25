
const CardStock = ({ icon, title, nameProduct, number, customClass }) => {
  const Icon = icon;

  return (
    <div className="card-body items-center text-center">
      <span className='flex items-center'>
        <p className='text-2xl font-bold'>
          {title}
        </p>
        <Icon className={`text-5xl ${customClass}`} />
      </span>
      <ol className='list-decimal'>
        <li className='text-xl font-semibold'>
          {nameProduct} - {number}
        </li>
        <li className='text-xl font-semibold'>
          {nameProduct} - {number}
        </li>
      </ol>
    </div>
  )
}

export default CardStock;
