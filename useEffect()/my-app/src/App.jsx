// UseEffect() :- React Hook that tells React DO SOME CODE (PICK ANY ONE) ---
//                THIS COMPONENTS RENDERS
//                THIS COMPONENTS MOUNTS
//                THE STATE OF A VALUE


// useEffect(function, [dependencies])

// useEffect(() => {})              // Runs after every re-render
// useEffect(() => {}, [])          // Runs only on mounts
// useEffect(() => {}, [value])     // Runs on mounts + when value changes

// USES
// #1 Event Listener
// #2 DOM Manipulation
// #3 Subscription (real time updates)
// #4 Fetching Data form an API
// #5 Clean up when a component unmounts


// Explanation
// import { useEffect, useState } from 'react';

// function App() {
//     const [count, setcount] = useState(0);
// // this runs whenever the count changes

//     // useEffect(() => {
//     //     document.title = `Count: ${count}`
//     // }, [count]);

// // this will run only when mounts

//     // useEffect(() => {
//     //     document.title = `Count: ${count}`
//     // }, []);

// // runs everytime (re-render)

//     useEffect(() => {
//         document.title = `Count: ${count}`
//     });

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => setcount(prev => prev + 1)}>Add</button>
//         </>
//     );
// }

// export default App;


// Explanation of on mounts
// import { useEffect, useState } from 'react';


// // define the empty array dependency in this component if you want to use mount then when this component mount in any component it works
// function ShowCompo({count, color}){
//   useEffect(() => {
//     console.log(`Effected.`)
//     document.title = `${count}-${color}`

//     return () =>{
//       console.log(`Cleared`)
//     }
//   }, [])

//   return <h1>Showing</h1>
// }

// function App(){
//   const [count, setcount] = useState(0)
//   const [color, setcolor] = useState('green')
//   const [show, setshow] = useState(false)

//   // Runs onluy when count update not on color
//   useEffect(() => {
//     document.title = `${count} - ${color}`
  
//   }, [])
  

//   return(
//     <>
//       <h1>{count}</h1>
//       <hr />
//       <h1>{color}</h1>
//       <button onClick={() => setcount(prev => prev + 1)}>Add Count</button>
//       <button onClick={() => setcount(prev => prev - 1)}>Sub Count</button>
//       <button onClick={() => setcolor(prev => prev === 'green' ? 'red': 'green')}>Change Color</button>
//       {/* rendering component doesn't mean the line given below */}
//       {/* {show && (<h1>Showing</h1>)} */}
//       {/* This mount again not working because mounts works for their corresponding component:- mount works for in which component it defined */}
//       {/* {show && <ShowCompo />} */}
//       {show && <ShowCompo count={count} color={color}/>}
//       <button onClick={() => setshow(prev => !prev)}>Show/hide</button>
//     </>
//   )
// }

// export default App;




// Explain real use case of add event and remove event
// import { useEffect, useState } from "react";

// function App(){
//   const [height, setheight] = useState(window.innerHeight);
//   const [width, setwidth] = useState(window.innerWidth);

//     // It added so many event listeners
//     // window.addEventListener('resize', handleResize)
//     // console.log(`Event listener added`)

//     // Use useEffect() to remove prev listener before adding new listener
//     useEffect(() => {
//       window.addEventListener('resize', handleResize);
//       console.log(`Event Listener added.`)
    
//       return () => {
//         window.removeEventListener('resize', handleResize)
//         console.log(`Event Listener Removed.`)
//       }
//     })

//     useEffect(()=>{
//       document.title = `${height} * ${width}`
//     }, [height, width])
    

//     function handleResize(){
//       setheight(window.innerHeight)
//       setwidth(window.innerWidth)
//     }
  
//   return (<>
//       <h1>
//         {height} * {width}
//       </h1>
//   </>)
// }

// export default App;


// Practice

// import { useState, useEffect } from 'react';

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(()=>{
//     console.log(`Searched: ${searchTerm}`)
//   }, [searchTerm])

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;



// Practice with API AND LOADER

import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(0)
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch('https://dummyjson.com/quotes');
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      console.log(data.quotes)

      setcount(prev => {
        setQuote(data.quotes[prev - 1]);
        const newCount = (prev + 1) % data.quotes.length;
       
        return newCount
      })

    } catch (err) {
      setError("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  fetchQuote()
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📜 Random Quote</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote && !loading && !error && (
        <blockquote>
          <p>"{quote.quote}"</p>
          <footer>- {quote.author}</footer>
        </blockquote>
      )}
      <button onClick={fetchQuote}>🔁 New Quote</button>
    </div>
  );
}

export default App;
