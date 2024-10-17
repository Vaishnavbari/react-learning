import { useState } from 'react';
import PropTypes from 'prop-types';
import "./index.css"


function App({username}) {
  console.log(username)
  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center' style={{backgroundColor: color}}> 
      <div className='border border-black mb-2 flex flex-nowrap' >
          <button onClick={() => setColor("blue")} className='text-white bg-blue-700 rounded-xl w-60 h-20 m-2'> Blue</button>
          <button onClick={() => setColor("green")} className='text-white bg-green-700 rounded-xl w-60 h-20 m-2'>Green</button>
          <button onClick={() => setColor("white")} className='text-black bg-white rounded-xl w-60 h-20 m-2'>White</button>
          <button onClick={() => setColor("black")} className='text-white bg-gray-700 rounded-xl w-60 h-20 m-2'>Black</button>
          <button onClick={() => setColor("yellow")} className='text-black bg-yellow-700 rounded-xl w-60 h-20 m-2'>Yellow</button>
      </div>
      <div className='border border-black flex flex-nowrap'>
          <button onClick={() => setColor("orange")} className='text-black bg-orange-700 rounded-xl w-60 h-20 m-2'> Orange</button>
          <button onClick={() => setColor("red")} className='text-white bg-red-700 rounded-xl w-60 h-20 m-2'>Red</button>
          <button onClick={() => setColor("pink")} className='text-white bg-pink-700 rounded-xl w-60 h-20 m-2'>Pink</button>
          <button onClick={() => setColor("#9FE2BF")} className='text-black bg-teal-700 rounded-xl w-60 h-20 m-2'> Pale Green</button>
          <button onClick={() => setColor("#6495ED")} className='text-white bg-blue-700 rounded-xl w-60 h-20 m-2'>Cornflower Blue</button>
      </div>

  </div>
  
);
}


App.propTypes = {
  username: PropTypes.string.isRequired
}

export default App;

