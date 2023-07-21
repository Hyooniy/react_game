import { useState } from 'react';
import './App.css';
import Button from './Button';
import Dice from './Dice'

function random(){
  return Math.ceil(Math.random(6) * 1)
}
export default function App() { 
  const [num,setNum] = useState(1);
  const [sum,setSum] = useState(0);
  const [history,setHistory] = useState([]);

  function playClick(){
    const nextNum = random(6);
    setNum(nextNum)
    setSum(sum + nextNum)
    setHistory([...history,nextNum]);
  }
  function resetClick(){
    setNum(1);
    setSum(0);
    setHistory([]);
  }
  return (  
    <div id='box'>
      <div id='btn'>
{/*       <Button text = 'start'/>
      <Button text = 'reset'/> */}
      <Button onClick = {playClick}>start</Button>
      <Button onClick = {resetClick}>reset</Button>
      </div>
      <div id='contain'>
      <h1>Game</h1>
      <Dice 
      num = {num}/>
      <h2>hap</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{history}</p>
      </div>
    </div>
  );
}

