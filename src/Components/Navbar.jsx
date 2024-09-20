import React, { useState } from 'react';
import DarkBtn from './DarkBtn';
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

// Datas
const CenterNav = ["Home","Blog","Single Post","Pages","Contact"]



const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      console.log('Search Term:', searchTerm);
    };
  
    return (
      <nav className="text-[#3B3C4A] p-4 py-6 ">

<div className="grid grid-cols-11 gap-14 m-auto">


          {/* Left - Brand Icon */}
          <div className='col-start-1 col-end-3'>
            <img
              src="/logo.svg" 
              alt="Brand Logo"
              className="w-16"
            />
          </div>
  

          {/* Center - Navigation Links */}
          <ul className='col-start-4 col-end-9 m-auto'>
            {CenterNav.map((v,i)=> <li key={i} className='hover:text-gray-400 inline-block mx-5  dark:text-white text-[#242424] font-WorkSans'><NavLink to={`/${v}`} >{v}</NavLink></li>)}
          </ul>
  

<div className='col-start-9 col-end-12 flex justify-between'>
          {/* Right - Search Bar */}





          <div className=" items-center inline-block">

            <form onSubmit={handleSearch} className="relative ">
              <div >




              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" p-2 rounded-md bg-[#f5f5f5] dark:bg-[#242535] block text-[#242535] dark:text-[#A1A1AA] focus:outline-none focus:ring dark:focus:ring-white focus:ring-indigo-500"
              />





              <button
                type="submit"
                className="absolute right-2 top-2 text-white focus:outline-none"
              >
                <div className='text-xl mt-1 text-[#52525B] '>
              <IoSearchOutline />
              </div>
              </button>

              
              </div>
            </form>

          </div>

    {/* Right - Btn */}
    <div className='inline-block'>
          <DarkBtn />
          </div>
          

          </div>
          </div>
      </nav>
  );
};

export default Navbar;