import React, { useState, useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Fetch the current counter value when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/counter')
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.error('Error fetching counter:', error));
  }, []);

  // Function to handle incrementing the counter
  const incrementCounter = () => {
    fetch('http://localhost:4000/increment', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.error('Error incrementing counter:', error));
  };

  // Function to handle decrementing the counter
  const decrementCounter = () => {
    fetch('http://localhost:4000/decrement', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.error('Error decrementing counter:', error));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
};

export default App;
