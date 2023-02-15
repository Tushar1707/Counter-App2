import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  let colorClass = '';

  if (counter >= 0 && counter <= 4) {
    colorClass = 'green';
  } else if (counter >= 5 && counter <= 9) {
    colorClass = 'blue';
  } else {
    colorClass = 'red';
  }

  return (
    <div className="App">
      <h1 className={colorClass}>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default App;
