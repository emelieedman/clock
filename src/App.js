import React from 'react';
import logo from './logo.svg';
import './App.css';
import DigitalBox from './Components/DigitalBox/DigitalBox.js';

function App() {
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
