import { useEffect, useState } from 'react';

function DigitalClock() {
    const [time, settime] = useState(new Date());


    // This interval is started when the component mount on the dom and when the component removed the interval will cleared.
    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date());
        }, 500);

        return () => {
            clearInterval(interval);
            console.log(`Interval Cleared`)
        };
    }, []);

    function formatTime() {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium = hours < 12 ? 'AM' : 'PM';
        const militaryHours = hours % 12 || 12;
        return `
            ${padZero(militaryHours)}:
            ${padZero(minutes)}:
            ${padZero(seconds)} - 
            ${meridium}
         `;
    }

    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    return (
        <div className="bg-gradient-to-br h-screen w-screen from-gray-900 to-black min-h-screen flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-xl p-10 border border-white/20">
                <h1 className="text-6xl md:text-8xl font-mono font-bold text-white tracking-widest text-center drop-shadow-md">
                    {formatTime()}
                </h1>
                <p className="text-gray-300 text-center mt-4 uppercase tracking-wider text-sm">Digital Clock</p>
            </div>
        </div>
    );
}

export default DigitalClock;
