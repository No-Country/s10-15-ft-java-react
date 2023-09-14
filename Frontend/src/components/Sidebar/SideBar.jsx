import { Link } from 'react-router-dom';
import { links } from '../../libs/links/links';
import BtnSalir from './BtnSalir';
export const SideBar = () => {
  return (
    <nav className='h-screen md:w-2/5 lg:w-1/5 flex flex-col justify-between bg-primary text-white box-border'>
      <img className='p-8' src='StockFlowIcon.png' />
      <ul className='h-full flex flex-col mt-10 bg-primary px-8'>
        {
          //maping links from links file for dynamic rendering
          links.map(({ label, route, icon: Icon }) => (
            <li key={label}>
              <Link
                to={route}
                className='flex items-center hover:bg-primary-focus py-4 rounded-xl px-2'
              >
                <Icon className='me-5 text-2xl' />
                {label}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className='px-8 pb-10 flex'>
        <BtnSalir />
      </div>
    </nav>
  );
};
