import { useState, useEffect } from 'react';

const SecondCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        if (!pause){
        setSeconds(prev => prev + 1);
        }
    }, 1000);

    return () => clearInterval(interval); 
  }, [pause]);


  return (
    <>
      <div>{seconds}</div>
      <button onClick={() => setPause(!pause)}>{pause ? 'Start' : 'Pause'}</button>
    </>
  )

}


export default SecondCounter