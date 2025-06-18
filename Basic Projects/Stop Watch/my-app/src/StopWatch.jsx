import { useState, useEffect, useRef } from 'react';

function StopWatch() {
    const intervalIdRef = useRef(null);
    const [time, setTime] = useState(1);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, []);

    function start() {
        if (isRunning) return;

        setIsRunning(true);
        intervalIdRef.current = setInterval(() => {
            setTime((prev) => {
                const timeObj = formatTime(prev);
                document.getElementById(
                    'time'
                ).innerText = `${timeObj.hrs} : ${timeObj.mins} : ${timeObj.secs}`;
                return prev + 1;
            });
        }, 1000);
    }

    function formatTime(seconds) {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(Math.floor(seconds % 60)).padStart(2, '0');

        return {
            hrs,
            mins,
            secs,
        };
    }

    function stop() {
        if (!isRunning) return;

        setIsRunning(false);
        clearInterval(intervalIdRef.current);
    }

    function reset() {
        setIsRunning(false);
        clearInterval(intervalIdRef.current);

        setTime(1);

        document.getElementById('time').classList.add('animate-ping');
        setTimeout(() => {
            document.getElementById('time').classList.remove('animate-ping');
            document.getElementById('time').innerText = `00 : 00 : 00`;
        }, 400);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white font-sans">
            <p
                id="time"
                className={`text-5xl mb-10 ${
                    time > 1 && !isRunning
                        ? `text-red-700 animate-pulse`
                        : 'text-white'
                } tracking-widest font-medium border-2 px-10 py-6 rounded-2xl `}
            >
                00 : 00 : 00
            </p>

            <div className="flex gap-4">
                <button
                    onClick={start}
                    className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                    ▶ Start
                </button>
                <button
                    onClick={stop}
                    className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                    ❚❚ Stop
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                    ↺ Reset
                </button>
            </div>
        </div>
    );
}

export default StopWatch;
