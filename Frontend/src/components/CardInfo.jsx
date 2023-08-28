export const CardInfo = ({ icon, number, title }) => {
  const Icon = icon;

  return (
    <div className='card-body flex flex-col items-center'>
      <Icon className='text-7xl text-primary' />
      <span className='text-2xl font-bold'>
        {number}
      </span>
      <p className='text-xl font-bold'>
        {title}
      </p>
    </div>
  )
}
