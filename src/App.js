import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import DigitalBox from './Components/DigitalBox/DigitalBox.js';

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App"> 
      <div className="wrapper">
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
      </div>
      
      <div className="ellipse">
      </div>
    </div>
  );
}

export default App;
