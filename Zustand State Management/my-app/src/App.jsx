// ZUSTAND:- Better version of UseContext(). Creates a store to manage states

// ✅ Why it's better than Context sometimes:
// No need to wrap everything in a Provider
// Global state out of the box
// Super clean API
// Better performance (no unnecessary re-renders)

import React from 'react';
import Cart from './components/Cart';

const App = () => {
    return (
        <>
           <Cart />
        </>
    );
};

export default App;
