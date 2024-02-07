import { useState, useEffect } from 'react';

const WorkOutClock = () => {
    const defaultSeconds = 30;
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(defaultSeconds);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let intervalId;
        if (!isPaused) {
            intervalId = setInterval(() => {
                if (seconds > 0 || minutes > 0 || hours > 0) {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            if (hours === 0) {
                                // Reset to default time when timer reaches zero
                                setHours(0);
                                setMinutes(0);
                                setSeconds(defaultSeconds);
                            } else {
                                setHours(hours - 1);
                                setMinutes(59);
                                setSeconds(59);
                            }
                        } else {
                            setMinutes(minutes - 1);
                            setSeconds(59);
                        }
                    } else {
                        setSeconds(seconds - 1);
                    }
                } else {
                    // Reset to default time when timer completes countdown
                    setHours(0);
                    setMinutes(0);
                    setSeconds(defaultSeconds);
                }
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isPaused, hours, minutes, seconds]);

    const toggleTimer = () => {
        setIsPaused(!isPaused);
    };
    const resetTimer = () => {
        setIsPaused(true);
        setHours(0);
        setMinutes(0);
        setSeconds(defaultSeconds);
    };

    const handleHourChange = (event) => {
        setHours(parseInt(event.target.value));
    };

    const handleMinuteChange = (event) => {
        setMinutes(parseInt(event.target.value));
    };

    const handleSecondChange = (event) => {
        setSeconds(parseInt(event.target.value));
    };

    return (
        <div className="container mx-auto">
            <div className="hero-section bg-gray-800 text-white py-16 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">WorkOutClock</h1>
                <div className="timer-wrapper text-center">
                    <div className="timer-display text-6xl mb-4">
                        <span>{hours.toString().padStart(2, '0')}:</span>
                        <span>{minutes.toString().padStart(2, '0')}:</span>
                        <span>{seconds.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="timer-controls space-x-4">
                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={toggleTimer}>{isPaused ? 'Play' : 'Pause'}</button>
                        <button className="btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg" onClick={resetTimer}>Reset</button>
                    </div>
                </div>
                <div className="timer-inputs flex justify-center mt-8">
                    <label className="mr-4">
                        Hours:
                        <input type="number" value={hours} onChange={handleHourChange} className="input" />
                    </label>
                    <label className="mr-4">
                        Minutes:
                        <input type="number" value={minutes} onChange={handleMinuteChange} className="input" />
                    </label>
                    <label>
                        Seconds:
                        <input type="number" value={seconds} onChange={handleSecondChange} className="input" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default WorkOutClock;
