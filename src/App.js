import './App.css';
import useSocket from './socket'
import Controll from './Controll'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function App() {
  const [status,setStatus,connectSocket,emitmessage] = useSocket(); 
  const screen1 = useFullScreenHandle();
  return (
    <>
      <div className="App">
        {
          status==="init"?
            <>
              <button onClick={()=>{
                setStatus("player");
                connectSocket()
              }}>start</button>
              <button onClick={()=>{
                connectSocket()
                screen1.enter()
              }}>controll</button>
            </>
          :
            <div style={{
              height:"100vh",
              width:"100wh",
              backgroundColor: "white"
            }}></div>
        }
      </div>
      <FullScreen handle={screen1}>
        <Controll emitmessage={emitmessage}/>
      </FullScreen>
    </>
  );
}

export default App;
