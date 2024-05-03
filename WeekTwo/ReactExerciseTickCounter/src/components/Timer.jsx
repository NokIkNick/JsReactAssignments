import React, { useEffect, useState } from "react";

//Function that formats the time in minutes and seconds based on the total seconds stored in the time state.
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minutesStr = minutes.toString().padStart(2, '0'); //Makes sure that the minutes are always displayed with 2 digits
    const secondsStr = seconds.toString().padStart(2, '0'); //Makes sure that the seconds are always displayed with 2 digits
    return `${minutesStr}:${secondsStr}`; //Returns the time in the format MM:SS
  } 

export default function Timer(){
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(0);

    //Function that starts the timer.
    function startTimer(){
        const minutesToSeconds = minutes *60;
        const totalTime = minutesToSeconds + seconds;
        setTime(totalTime);
        setStarted(true);
    }

    function preDefTime(event){
        const minutes = Number(event.target.id);
        setMinutes(minutes);
    }

    //Function that pauses the timer.
    function pauseTimer(){
        setStarted(false);
        let mins = Math.floor(time / 60); //Calculates the minutes based on the total time.
        let secs = time % 60; //Calculates the seconds based on the total time.
        setMinutes(mins); //We update the minutes and seconds states with the new values, because we want to keep the time that was left when the user paused the timer.
        setSeconds(secs);
    }

    //Function that resets the timer.
    function resetTimer(){
        setStarted(false);
        setMinutes(0);
        setSeconds(0);
        setTime(0);
    }

    //UseEffect hook that updates the time state every second when the timer is started. We use the setInterval function that runs every 1000 milliseconds (1 second) to update the time state.
    useEffect(() => {
        let interval; //Variable that stores the interval that updates the time state.

        if(started && time > 0){ //If the timer is started and the time is greater than 0, we start the interval.
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!started && time !== 0){ //If the timer is not started and the time is not 0, we clear the interval.
            clearInterval(interval);
        } else if(time === 0){
            setStarted(false); //If the time is 0, we stop the timer.
        }

        //Clean up function that clears the interval when the component is unmounted. This is important to avoid memory leaks, and to make sure the interval doesn't keep creating new intervals.
        return () => {
            clearInterval(interval);
        }

    }, [started,time]) //We add the started and time states as dependencies of the useEffect hook, so the hook runs every time these states change.

    return (
        <>
            <div>
                <h2>Time Remaining: {formatTime(time)}</h2>
            </div>
            <div>
                <button id="5" onClick={preDefTime}>5 Min</button>
                <button id="10" onClick={preDefTime}>10 Min</button>
                <button id="15" onClick={preDefTime}>15 Min</button>
            </div>
            <div>
                <input type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))}></input>
                <input type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}></input>
                {!started && <button onClick={startTimer}>Start</button>}
                {started && <button onClick={pauseTimer}>Pause</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </>
    );
}