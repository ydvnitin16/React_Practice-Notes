
// USEMEMO()

// // useMemo() :- useMemo is a React Hook that helps you optimize performance by memorizing (caching)  the result of a calculation until its dependencies change.

// // Without useMemo() :- Every time your component re-renders, all functions and values inside it run again, even if their results didn’t change.

// import { useMemo, useState } from 'react';

// // In the given soce the calculation will be performed at each render when we increment count (unneccessary calculation if it is heavy).

// function App() {
//     const [num, setNum] = useState(0);
//     const [count, setcount] = useState(0);

//     function square(num) {
//         console.log(`Calculation Performed.`);
//         return Math.pow(num, 2);
//     }

//     // this will only cause re-render when the num change.
//     const value = useMemo(() => square(num), [num]);

//     return (
//         <>
//             <input
//                 type="text"
//                 onChange={(e) => setNum((prev) => e.target.value)}
//             />
//             <p>
//                 Sqaure of {num} : {value}
//             </p>
//             <button onClick={() => setcount((prev) => prev + 1)}>
//                 Count++
//             </button>
//             <p>{count}</p>
//         </>
//     );
// }

// export default App;


// USECALLBACK

// useCallBack:- useCallback is a React Hook that memoizes a function — meaning it returns the same function reference unless its dependencies change.

// It’s useful to avoid unnecessary re-creations of functions on every render.

// 🧨 Problem it Solves
// In React, functions are recreated on every render. That’s usually fine, but it causes problems when:
// You pass a function as a prop to a child component
// That child uses React.memo to avoid re-renders
// But your new function reference causes it to re-render anyway 😵


import { useCallback, useState } from 'react';
import Child from './Component.jsx'

function App(){

  const [count, setcount] = useState(0)

  // if we pass this function the component re-render each time
  // const f1 = () => console.log(`Function`)

  // this will only cause the re-render when the dependency changes.
  const f1 = useCallback(() => {console.log(`Clicked`)}, [])

  return (
    <>
    <Child func={f1}/>
    <p>{count}</p>
    <button onClick={() => setcount(prev => prev + 1)}>Count++</button>
    </>
  )
}

export default App;