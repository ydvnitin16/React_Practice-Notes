// useContext :- React’s useContext lets you share data (state, functions, theme, user info, etc.)
//               across many components without passing props down every level.

// Importance
// Without useContext we have to pass props to the child then its another child and then nexxt child means (componentA -> componentB -> componentC -> componentD)
// With useContext we just had to define the contect and value in it and we can import that context anywhere and can be used

// FLOW

// PROVIDER COMPONENT :-
// 1. Import {createContext} from 'react'
// 2. export const myContext = createContext()
// 3. <myContext.Provider value={value}>
//                 <Child />
//             </myContext.Provider>

// CONSUMER COMPONENT :-
// 1. import {useContext} form 'react'
// import {myContext} 'from exported'
// 3. const value = useContext(myContext)  // Must be inside the functional component

// When to use useContext?
// 1. When many components need access to the same data
// 2. To avoid “prop drilling” through many intermediate components
// 3. Great for themes, auth info, language settings, user data

// Tip:- we can store all the created context into a single JS file in Context folder



import ComponentA from './ComponentA.jsx';
import { createContext } from 'react';

export const myContext = createContext();

const value = 'Nitin';

function App() {
    return (
        <>
            <myContext.Provider value={value}>
                <ComponentA />
            </myContext.Provider>
        </>
    );
}

export { App };
