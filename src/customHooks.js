import { useState, useEffect } from 'react';


// start button onclick(start counting up 1 every second, 60 elapsedTime add 1 to minutes) stop(stop counting) Reset(reset to zero)

export const useTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    function toggle() {
        setIsRunning(!isRunning)
        console.log('clicked')
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

   
    useEffect(() => {
        let interval = null;
        if (isRunning) {
        interval = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
        }, 1000);
        } else if (!isRunning && elapsedTime !== 0) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, elapsedTime]);
 
}

