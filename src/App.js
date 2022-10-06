import React from "react";
import './App.css'

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div >
       
          <button onClick={() => setTimerOn(true)} style={{margin:'5px'}}>Start</button>
     
         <button onClick={() => setTimerOn(false)}>Stop</button>
       
          <button onClick={() => setTime(0)} style={{margin:'5px'}}>Reset</button>
       
        
          <button onClick={() => setTimerOn(true)}>Resume</button>
       
      </div>
    </div>
  );
};

export default App;
