import React, { useState } from 'react';

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
        <h1 className="text-4xl font-bold mb-8">Beautiful Page with Animations</h1>
      </div>
      {!sessionEnded && (
        <button onClick={endSession} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          End Session
        </button>
      )}
    </div>
  );
}

export default End;
