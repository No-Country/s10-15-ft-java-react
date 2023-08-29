export const CardInfo = ({ icon, number, title }) => {
  const Icon = icon

  return (
    <div className='card-body flex flex-col items-center'>
      <Icon className='md:text-5xl lg:text-7xl text-primary' />
      <span className='md:text-xl lg:text-2xl font-bold'>{number}</span>
      <p className='md:text-lg lg:text-xl font-bold'>{title}</p>
    </div>
  )
}
