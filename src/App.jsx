import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Foot from './Components/Foot';
const App = () => {
  return (
  <>


  <div className='dark:bg-[#181A2A]'>
  <div className='max-w-[1440px] m-auto '>

  <Navbar />
  <Outlet />


  </div>
  </div>


<div className='bg-[#F6F6F6F7] dark:bg-[#121624]'>
  <div className='max-w-[1440px] m-auto  '>

    <Foot />
    </div>
    </div>

  </>
  );
};

export default App;