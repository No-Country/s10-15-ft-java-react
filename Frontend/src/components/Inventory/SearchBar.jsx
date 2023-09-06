import { BiSearchAlt2 } from 'react-icons/bi';
import { SearchBarPropTypes } from '../../utils/prop-types';
const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className='border-[1px] border-gray-400 rounded-2xl w-[50%] flex justify-between items-center overflow-hidden'>
      <input
        id='search'
        type='text'
        placeholder='Buscar'
        className='input w-full outline-none'
        onInput={(e) => setSearchQuery(e.target.value.toLowerCase())}
      />
      <BiSearchAlt2 className='text-2xl text-primary mr-2' />
    </div>
  );
};

SearchBar.propTypes = SearchBarPropTypes;

export default SearchBar;
