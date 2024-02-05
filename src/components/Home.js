import React from 'react';
import { FaApple } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { IoBagOutline } from 'react-icons/io5';

export const Header = () => {
  return (
    <div className='bg-[rgba(22,22,23,1.0)] h-12 flex justify-center items-center'>
      <div className='hidden md:flex items-center space-x-8'>
        <a href="#" className='text-white hover:underline text-opacity-80'><FaApple /></a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Store</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Mac</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>iPad</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>iPhone</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Watch</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>AirPods</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>TV & Home</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Entertainment</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Accessories</a>
        <a href="#" className='text-white hover:text-gray-400 text-sm text-opacity-80'>Support</a>
        <a href="#" className='text-white hover:text-gray-400 text-opacity-80'><IoIosSearch /></a>
        <a href="#" className='text-white hover:text-gray-400 text-opacity-80'><IoBagOutline /></a>
      </div>
      
    </div>
    
   
  );
};

export default Header;
