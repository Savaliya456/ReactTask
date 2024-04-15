import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [showTimer, setShowTimer] = useState(false);
    const [timerId, setTimerId] = useState(null);

    var i = 0;
    useEffect(() => {
        if (showTimer && count > 0) {
            const id = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
            setTimerId(id);

            return () => clearInterval(id);
        }
    }, [showTimer, count]);

    function setTime() {

        let hourIn = parseInt(document.getElementById("hourIn").value) || 0;
        let minuteIn = parseInt(document.getElementById("minuteIn").value) || 0;
        let secondIn = parseInt(document.getElementById("secondIn").value) || 0;
        let inTimeConvert = (hourIn * 3600) + (minuteIn * 60) + secondIn;

        const conf = window.confirm("Are you sure you want to change the time?");
        if (conf) {
            setCount(inTimeConvert);
            setShowTimer(true);
            clearInterval(timerId); // Stop the current countdown
        }
    }   

    return (
        <div className='container border rounded' id='main'>
            <div className='row justify-content-center'>
                <center className='col-6'>
                    <h2>Set Timer</h2>
                    <input className='justify-content-center w-25' type='number' id='hourIn' />H&nbsp;
                    <input className='justify-content-center w-25' type='number' id='minuteIn' />M&nbsp;
                    <input className='justify-content-center w-25' type='number' id='secondIn' />S&nbsp;
                    <br /><br />
                    <button className='btn btn-success' onClick={setTime} id='timeIn'>Set</button>
                </center>
                {showTimer && <ShowTimer />}
            </div>
        </div>
    );

    function ShowTimer() {
        const hour = Math.floor(count / 3600);
        const minute = Math.floor((count % 3600) / 60);
        const seconds = Math.floor(count % 60);

        var formattedHours = String(hour).padStart(2, '0');
        var formattedMinutes = String(minute).padStart(2, '0');
        var formattedSeconds = String(seconds).padStart(2, '0');

        return (
            <div className='row justify-content-center'>
                <div className='col-lg-10 text-center p-5'>
                    <h2>Time Remaining</h2>
                </div>

                <div className='col-lg-4 border p-5 fs-1 text-center'>
                    <h1>{formattedHours}</h1>
                </div>

                <div className='col-lg-4 border p-5 fs-1 text-center'>
                    <h1>{formattedMinutes}</h1>
                </div>

                <div className='col-lg-4 border p-5 fs-1 text-center'>
                    <h1>{formattedSeconds}</h1>
                </div>

                <button onClick={() => window.location.reload()} className='w-auto ps-4 pe-4 pt-2 pb-2 rounded m-5'>Restart</button>
            </div>
        );
    }
}

export default Counter;
