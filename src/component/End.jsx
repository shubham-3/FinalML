import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function End() {
  const [sessionEnded, setSessionEnded] = useState(false);

  const endSession = () => {
    // Handle session end here
    // For example:
    // Perform logout or clear session data
    // setSessionEnded(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-fadeIn">
      </div>
      <NavLink
        to="/TeacherSession">
        <button className='flex w-auto justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white
                   shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        
          End Session
        </button>
        </NavLink>
      
    </div>
  );
}

export default End;