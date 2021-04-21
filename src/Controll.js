import { useEffect, useState } from 'react';
import './Controll.css';
function Controll({emitmessage}) {
  const suits=["spades","clubs","hearts","diamonds"]
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
    window.navigator.vibrate(200);
    setcard((card)=>{
      
      if(card.red===undefined){
        return{red:x}
      }
      if(!card.suit){
        return{red:card.red,suit:suits[card.red*2+x]}
      } 
      if(!card.number){
        return {red:card.red,suit:suits[card.red*2+x], number: x===1 ? 2:1 ,lastx : x}
      }
      if(x===card.lastx){
        return {red:card.red,suit:card.suit, number: card.number+2 ,lastx : card.lastx}
      }
      emitmessage({suit:card.suit,number:numbers[(card.number+12)%13]})
      console.log({suit:card.suit,number:numbers[(card.number+12)%13]})
      return {}
      
      
    })
    console.log(card)
    
  }
  const reset = ()=>{
    window.navigator.vibrate(200);
    setcard({})
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
        <div className="row2"onClick={()=>{
            reset()
        }}>
          {/* {JSON.stringify(card)} */}
        </div>
      </div>
    </>
  );
}

export default Controll;
