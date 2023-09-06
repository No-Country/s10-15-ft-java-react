import { useState } from 'react';
import { MdCategory } from 'react-icons/md';

const Filter = ({ category, setCategory, categories }) => {
  const [filterData] = useState(categories);

  return (
    <div className='flex justify-center items-center text-primary'>
      <MdCategory className='text-2xl mr-2' />
      <select
        value={category}
        className='select text-primary cursor-pointer text-xl flex justify-center items-center'
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value='' defaultValue>
          Categorías
        </option>
        {filterData.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
