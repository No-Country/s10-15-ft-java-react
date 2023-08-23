import React from 'react';
import { FilterNav } from './FilterNav';
import { NavBar } from './NavBar';

export const Users = () => {
  return (
    <div className='text-lg box-border w-4/5 px-10 py-5'>
        <NavBar />
        <FilterNav  />
    </div>
  )
}
