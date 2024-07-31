import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if(count>=20){
      alert("cannot add more than 20");
    }
    else{
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if(count<=0){
    alert("Count cannot be negative")
    }
    else
    {
    setCount(count - 1);}

  };

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button id="add" onClick={handleAdd}>
          Add
        </button>
        <button id="remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </>
  );
}




export { App };
