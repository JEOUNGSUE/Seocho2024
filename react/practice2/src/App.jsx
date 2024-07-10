import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);
  const decrementCounter = decrementValue =>
    setCounter(counter - decrementValue);

  return (
    <div>
      <h1>Button Component</h1>
      <h2>TO-DO </h2>
      <Display message={counter} />
      <h2>Increase</h2>
      <Button value={1} onClickFunction={incrementCounter} />
      <Button value={2} onClickFunction={incrementCounter} />
      <h2>Decrease</h2>
      <Button value={1} onClickFunction={decrementCounter} />
      <Button value={2} onClickFunction={decrementCounter} />
    </div>
  );
}

export default App;
