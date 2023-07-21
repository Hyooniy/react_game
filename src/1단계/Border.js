import Dice from './Dice';

export default function Border({name,color,gameHistory}){
  const num = gameHistory[gameHistory.length-1];
  const sum = gameHistory.reduce((a,b) => a+b ,0);
  // console.log(num);
  return(
    <div id="contain">
    <h1>{name}</h1>
    <Dice 
    color = {color}
    num = {num}/>
    <h2>hap</h2>
    <p>{sum}</p>
    <h2>기록</h2>
    <p>{gameHistory.join(' , ')}</p>
    </div>
  )
}