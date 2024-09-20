import React, { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
const DarkBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode ? document.documentElement.classList.add('dark'): document.documentElement.classList.remove('dark');
  
  }, [darkMode]);

  return (
    <div className="flex items-center">

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`w-15 h-6 flex items-center bg-gray-300 rounded-full p-4   transition-colors duration-300 ${
          darkMode ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
      >
        
        <div
          className={`bg-white text-3 text-[#52535F] p-1 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-3' : '-translate-x-3'
          }`}
        ><MdSunny /></div>
      </button>

    </div>
  );
};

export default DarkBtn;