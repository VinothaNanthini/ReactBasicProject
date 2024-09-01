import React, { useState, useEffect } from 'react';

function Time() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  return (
    <div>
      <h1>Time Page</h1>
      <h2>Timer: {timer} seconds</h2>
      <button 
        className={`pause-button ${!isRunning ? 'pressed' : ''}`} 
        onClick={handlePause}
      >
        Pause
      </button>
      <button 
        className={`resume-button ${isRunning ? 'pressed' : ''}`} 
        onClick={handleResume}
      >
        Resume
      </button>
    </div>
  );
}

export default Time;
