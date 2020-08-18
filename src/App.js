import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import DigitalBox from './Components/DigitalBox/DigitalBox';
import Button from './Components/Button/Button'
import alarmImg from './Assets/alarm.svg'
import alarmImgActive from './Assets/alarm-active.svg'
import clockImg from './Assets/clock.svg'
import clockImgActive from './Assets/clock-active.svg'
import stopwatchImg from './Assets/stopwatch.svg'
import stopwatchImgActive from './Assets/stopwatch-active.svg'
import timerImg from './Assets/timer.svg'
import timerImgActive from './Assets/timer-active.svg'

function App() {

  return (
    <div className="App"> 
      <div className="digital-boxes">
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
        <DigitalBox nr="00" />
      </div>
      
      <div className="ellipse"></div>
      <div className="start-reset-buttons">
        <Button text='Reset'/>
        <Button text='Start'/>
      </div>
      <div className='navigation-buttons'>
        <Button img={clockImg}/>
        <Button img={alarmImg}/>
        <Button img={timerImg}/>
        <Button img={stopwatchImg}/>
      </div>
    </div>
  );
}

export default App;
