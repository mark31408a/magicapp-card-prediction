import { useState} from 'react';
import { io } from "socket.io-client";
const URL = "http://localhost:4000";
const socket = io( { autoConnect: false });
const useSocket = ()=>{
  const [status,UseState]=useState("init")
  
  socket.on("gotourl",(payload)=>{
    if(status !== "player") return 
    window.location.replace(`https://www.random.org/playing-cards/?cards=1&decks=52&${payload.suit}=on&${payload.number}=on`);
  })
  const connectSocket = ()=>{
    socket.connect()
  }
  const emit=(x)=>{
    if(!socket.connected){
      console.log("no!!!")
    }
    else{
      socket.emit("setcard",x)
      // window.location.replace(`https://www.google.com`);
    }
    
  }
  return [status,UseState,connectSocket,emit]
}
  
export default useSocket;
