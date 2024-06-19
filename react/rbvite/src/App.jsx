import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Hello name="Kim" age={100} />
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
