// 🧠 useState is a React Hook that lets your component store and manage data that can change (aka state).
// we can also se simple variable but always use useState() when you want to re-render the component

// const [state, useState] = useState(initialValue)
//   --Part--      --Meaning--

// 🧪 state	        Current value of the state
// 🔧 setState()	  Function to update the state
// 🎯 useState()	  Hook that gives you both of them



import { useState } from 'react';

function App() {

    const [name, setname] = useState('Guest');
    const [liked, setliked] = useState(false);
    const [views, setviews] = useState(0);
    const likeToggle = () => {
        setliked(!liked)
    };



    console.log(liked)
    return (
        <>
            <p>Name: {name}</p>
            <button onClick={ ()=> setname('Nitin') }>Change Name</button>

            <p>{liked ? 'You have Liked ❤️' : "You havn't liked this yet 😕"}</p>
            <button onClick={likeToggle} >{liked ? "Dislike" : "Like"}</button>

            <p>Views: {views}</p>
            <button onClick={ ()=> setviews(views + 1) }>Increament views</button>
        </>
    );
}

export default App;
