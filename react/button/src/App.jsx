import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Undefined</h1>
        <Button />
      </div>
    </>
  );
}

export default App;
