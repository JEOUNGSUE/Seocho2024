import React from 'react';
import Button from './components/Button';
import Accordion from './components/Accordion';
import './App.css';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="app">
      <Button label="TO-DO" onClick={handleButtonClick} />
      <Accordion title="모아보기" content="to-do contents" />
    </div>
  );
}

export default App;
