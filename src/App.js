import './App.css';
import Clock from './components/clock';
import React, { useState, useEffect } from 'react'

function App() {

  const [date, setDate] = useState(new Date())
  const [london, setLondon] = useState(date.getHours())
  const [tokyo, setTokyo] = useState(date.toLocaleString('de-DE', {hour: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' }))
  const [newYork, setNewYork] = useState(date.toLocaleString('de-DE', {hour: '2-digit', hour12: false, timeZone: 'America/New_York' }))
  const [minutes, setMinutes] = useState(date.getMinutes())

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
      setMinutes(date.getMinutes())
      setLondon(date.getHours())
      setTokyo(date.toLocaleString('de-DE', {hour: '2-digit', hour12: false, timeZone: 'Asia/Tokyo'}))
      setNewYork(date.toLocaleString('de-DE', {hour: '2-digit', hour12: false, timeZone: 'America/New_York'}))
  }, 1000)
  }, [date, minutes, london])
  
  const clocks = [
    {
      city: 'London',
      addressFirstLine: 'Address Line 1',
      addressSecondLine: 'Line 2',
      hours: london
    },
    {
      city: 'New York',
      addressFirstLine: 'Address Line 1',
      addressSecondLine: 'Line 2',
      hours: Number(newYork.split('Uhr')[0])
    },
    {
      city: 'Tokyo',
      addressFirstLine: 'Address Line 1',
      addressSecondLine: 'Line 2',
      hours: Number(tokyo.split('Uhr')[0])
    }
  ]

  return (
    <div className="App">
      {clocks.map((clock, index) => {
        return <Clock 
          key={index}
          city={clock.city}
          addressFirstLine={clock.addressFirstLine}
          addressSecondLine={clock.addressSecondLine}
          hours={clock.hours < 10 ? `0${clock.hours}` : clock.hours}
          minutes={minutes < 10 ? `0${minutes}` : minutes}
          src={clock.hours >= 22 || clock.hours < 7 ? '/black.svg' : '/white.svg'}
        />  
      })}
    </div>
  );
}

export default App;