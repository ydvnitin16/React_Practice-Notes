// What is useRef?

import { useEffect, useRef } from 'react';

// 1. useRef creates a mutable object that stays the same across renders.
// 2. It has a property called .current where you can store anything.
// 3. Updating .current does NOT trigger a component re-render.
// 4. It is a single property object (current property).
// 4. It’s often used to:
//    . Access DOM elements directly.
//    . Store any mutable value that you want to keep between renders without causing updates.

function App() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
      console.log(`Component Rerendered!`)
    })
    

    function inputFocus1() {
      inputRef1.current.focus()
    }
    function inputFocus2() {
      inputRef2.current.focus()
    }
    function inputFocus3() {
      inputRef3.current.blur()
    }

    return (<>
      <input ref={inputRef1} type="text" />
      <button onClick={inputFocus1}>Focus</button>
      <input ref={inputRef2} type="text" />
      <button onClick={inputFocus2}>Focus</button>
      <input ref={inputRef3} type="text" />
      <button onClick={inputFocus3}>Focus</button>
    </>);
}

export default App;
