import Red01 from '../assets/red_1.svg';
import Red02 from '../assets/red_2.svg';
import Red03 from '../assets/red_3.svg';
import Red04 from '../assets/red_4.svg';
import Red05 from '../assets/red_5.svg';
import Red06 from '../assets/red_6.svg';

import Blue01 from '../assets/blue_1.svg';
import Blue02 from '../assets/blue_1.svg';
import Blue03 from '../assets/blue_1.svg';
import Blue04 from '../assets/blue_1.svg';
import Blue05 from '../assets/blue_1.svg';
import Blue06 from '../assets/blue_1.svg';

const Dic ={
  red : [Red01,Red02,Red03,Red04,Red05,Red06],
  blue : [Blue01,Blue02,Blue03,Blue04,Blue05,Blue06]
}

export default function Dice({num = 1 ,color}){
  console.log(num)
  const src = Dic[color][num-1];
  const alt = `${color}${num}`
  return(
    <img src={src} alt={alt} />
  )
}