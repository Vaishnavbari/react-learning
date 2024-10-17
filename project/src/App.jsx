import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const MAX_COUNT = 20;
  const MIN_COUNT = 0;

  const handleAdd = () => {
    if (count >= MAX_COUNT) {
      alert("Cannot add more than 20");
      return;
    }
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count <= MIN_COUNT) {
      alert("Count cannot be negative");
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="app bg-black">
      <h1>{count}</h1>
      <div className="card">
        <button id="add" onClick={handleAdd}>
          Add
        </button>
        <button id="remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default App;
