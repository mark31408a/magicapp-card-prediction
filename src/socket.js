import { useEffect, useState} from 'react';
import { io } from "socket.io-client";
import {useLocation} from "react-router-dom"
const socket = io();

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const useSocket = ()=>{

  const [status,setStatus]=useState("x")
  const query = useQuery()

  useEffect(()=>{
    setStatus(query.get("x"))
  },[query])

  socket.on("gotourl",(payload)=>{
    if(status === "x") return 
    window.location.replace(`https://www.random.org/playing-cards/?cards=1&decks=2&${payload.suit}=on&${payload.number}=on`);
  })
  
  const emit=(x)=>{
    if(!socket.connected){
      console.log("no!!!")
    }
    else{
      socket.emit("setcard",x)
      // window.location.replace(`https://www.google.com`);
    }
  }

  socket.connect()
  return [status,emit]
}
  
export default useSocket;
