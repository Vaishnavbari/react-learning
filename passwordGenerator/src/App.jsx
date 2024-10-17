import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState("10");
  const [number, setNumberAllowed] = useState(false); 
  const [character, setCharacterAllowed] = useState(false); 
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+";
  
    // Add at least one number if allowed
    if (setNumberAllowed) {
      str += num
    }
  
    // Add at least one special character if allowed
    if (setCharacterAllowed) {
      str += char;
    }
  
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
  
    setPassword(pass);
  }, [length, number, character,  setCharacterAllowed, setPassword]);
  
  
  useEffect(() => {
    passwordGenerator()
  }, [length, setNumberAllowed, setCharacterAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}

        />
        <button
       
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={20}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          
          id="numberInput"
          onChange={
            () => {
              setNumberAllowed((prev) => !prev);
              }
          }
          
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
           
              id="characterInput"
              onChange={
                () => {
                  setCharacterAllowed((prev) => !prev);
                  }
                  }
            
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App