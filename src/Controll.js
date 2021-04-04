import { useEffect, useState } from 'react';
import './Controll.css';
function Controll({emitmessage}) {
  const numbers=["aces","twos","threes","fours","fives","sixes","sevens","eights","nines","tens","jacks","queens","kings"]
  const [time,setTime]=useState(1)
  useEffect(()=>{
    const timer=setTimeout(() => {
      setTime(time=>time>=13?1:(time+1))
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
    
  },)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col" onClick={()=>{
            emitmessage({suit:"spades",number:numbers[time-1]})
          }}/>
          <div className="col" onClick={()=>{
            emitmessage({suit:"hearts",number:numbers[time-1]})
          }}/>
        </div>
        <div className="row">
          <div className="col" onClick={()=>{
            emitmessage({suit:"clubs",number:numbers[time-1]})
          }}/>
          <div className="col" onClick={()=>{
            emitmessage({suit:"diamonds",number:numbers[time-1]})
          }}/>
        </div>
        <div className="time">{time}</div>
      </div>
    </>
  );
}

export default Controll;
