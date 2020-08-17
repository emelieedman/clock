import React, { useState, useEffect } from 'react';

export const useTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime(elapsedTime + 1);
        }, 1000);
        return clearInterval(interval);
    }, []);

    return
}
