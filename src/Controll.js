import { useEffect, useState } from 'react';
import './Controll.css';
function Controll({emitmessage}) {
  const suits=["spades","hearts","clubs","diamonds"]
  const numbers=["aces","twos","threes","fours","fives","sixes","sevens","eights","nines","tens","jacks","queens","kings"]
  const x2num=[0,1,2,5]
  const [card,setcard]=useState({})
  
//   const [time,setTime]=useState(1)
//   useEffect(()=>{
//     const timer=setTimeout(() => {
//       setTime(time=>time>=13?1:(time+1))
//     }, 1000);
//     // Clear timeout if the component is unmounted
//     return () => clearTimeout(timer);
    
//   },)
  const handleClick = (x)=>{
    setcard((card)=>{
        if(!card.suit){
            return{suit:suits[x],number:0}
        }
        if(x===0){
            emitmessage({suit:card.suit,number:numbers[(card.number-1)%13]})
            return {}
        }
        else{
            return{suit:card.suit,number:card.number+x2num[x]}
        }
    })
    
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col" onClick={()=>{
            handleClick(0)
          }}/>
          <div className="col" onClick={()=>{
            handleClick(1)
          }}/>
        </div>
        <div className="row">
          <div className="col" onClick={()=>{
            handleClick(3)
          }}/>
          <div className="col" onClick={()=>{
            handleClick(2)
          }}/>
        </div>
        {/* <div className="time">{time}</div> */}
      </div>
    </>
  );
}

export default Controll;
