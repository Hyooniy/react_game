import './App.css';
import Button from './Button';
import Border from './Border';
import { useState } from 'react';

function random(value){
  return Math.ceil(Math.random() * value)
} 

export default function App() { 
  const [Atem,setAem] = useState([]);
  const [Btem,setBtm] = useState([]);

  function playClick(){
    const aNext = random(6);
    const bNext = random(6);
    setAem([...Atem,aNext]);
    setBtm([...Btem,bNext]);
  }
  function resetClick(){
    setAem([]);
    setBtm([]);
  }
  return (  
    <div id='box'>
      <div id='btn'>
      <Button onClick={playClick}>start</Button>
      <Button onClick={resetClick}>reset</Button>
      </div>
      <div id='container'>
        <Border name = '팀A' color = 'blue' gameHistory={Atem}/>
        <Border name = '팀B' color = 'red' gameHistory={Btem}/>
      </div>
    </div>
  );
}
