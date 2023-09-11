import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import SearchBar from './SearchBar';
import { filterData } from '../../libs/filters/filterData';
import { ProductItemComponent } from './ProductItemComponent';
import { getProductsInventory } from '../../libs/productsRequest/getProductsInventory';

export const Inventory = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    items.length
      ? {}
      : getProductsInventory(categories, setItems, setCategories);
  }, [items, categories]);

  const searchedData = filterData(searchQuery, items, 'search');
  const filteredData = filterData(category, searchedData);

  return (
    <div className='p-5 flex flex-col gap-6 '>
      <div className='w-full flex justify-between items-center overflow-hidden'>
        <SearchBar setSearchQuery={setSearchQuery} />
        <Filter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <Link to='/AgregarItem'>
          <button className='btn'>
            <AiOutlinePlus className='text-xl' />
            Agregar item
          </button>
        </Link>
      </div>
      <div>
        <div className='grid grid-cols-8 gap-4 w-full text-center'>
          <p className='col-span-3'>Producto</p>
          <p>Código</p>
          <p>Categoria</p>
          <p>Stock</p>
          <p>Precio</p>
          <p>Acciones</p>
        </div>
      </div>
      <div>
        {filteredData.length ? (
          filteredData.map((item) =>
            item.id ? (
              <ProductItemComponent key={item.id} item={item} />
            ) : (
              <></>
            ),
          )
        ) : (
          <div className='flex justify-center items-center'>
            <span className='loading loading-dots loading-lg'></span>
          </div>
        )}
      </div>
    </div>
  );
};
