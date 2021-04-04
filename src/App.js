import './App.css';
import useSocket from './socket'
import Controll from './Controll'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
function App() {
  const [status,emitmessage] = useSocket(); 
  const screen1 = useFullScreenHandle();
  return (
    <>
      <div className="App">
        {
          status==="x"?
            <>
              <button onClick={()=>{
                screen1.enter()
              }}>start</button>
              <FullScreen handle={screen1}>
                <Controll emitmessage={emitmessage}/>
              </FullScreen>
            </>
          :
            <div style={{
              height:"100vh",
              width:"100wh",
              backgroundColor: "white"
            }}></div>
        }
      </div>
      
    </>
  );
}

export default App;
