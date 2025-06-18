// Updater Function :- Sometimes, we need to update state based on the previous state — and React updates are asynchronous, so the current value might be outdated.

// like in that code indirectly function updates correctly and directly function contains the same value in each setvalue call

import { useState } from 'react';

function App() {
    const [value, setvalue] = useState(0);
    function addFiveInDirectly() {
        setvalue((value) => value + 1);
        setvalue((value) => value + 1);
        setvalue((value) => value + 1);
        setvalue((value) => value + 1);
        setvalue((value) => value + 1);
    }

    function addFiveDirectly() {
        setvalue(value + 1);
        setvalue(value + 1);
        setvalue(value + 1);
        setvalue(value + 1);
        setvalue(value + 1);
    }
    console.log(value)

    return (
        <>
            <h4>Value: {value} </h4>
            <button onClick={addFiveDirectly}>Add 5 Slow</button>
            <button onClick={addFiveInDirectly}>Add 5 fast</button>
        </>
    );
}

export default App;
