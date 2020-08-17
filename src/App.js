import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import DigitalBox from './Components/DigitalBox/DigitalBox';
import Button from './Components/Button/Button'

function App() {

  return (
    <div className="App"> 
      <div className="wrapper">
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
      </div>
      
      <div className="ellipse"></div>
      <div className="button">
        <Button text='Reset'/>
        <Button text='Start'/>
      </div>
    </div>
  );
}

export default App;
