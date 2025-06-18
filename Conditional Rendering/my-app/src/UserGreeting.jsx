import PropTypes from "prop-types";


// function Greeting(props){
//     if(props.isLoggedIn){
//         return (<p>Hello: {props.username} </p>)
//     }
//     return (<p>Please Login</p>)
// }

// different method
function Greeting(props){
    // return (<p> {props.isLoggedIn ? 'welcome' : 'Please Log In'} </p>)
    return (props.isLoggedIn? <p> hello: {props.username || 'Guest'} </p> : <p> Please Log In </p>)
}

function Inbox(props){
    return ( <div>
        <h1>Inbox</h1>
        { props.newInbox && <p>You have a new message</p> }
    </div> )
}

function Product({ inStock }) {
  return (
    <div>
      <h2>iPhone 15</h2>
      {/* { inStock ? "In Stock" : "Out of Stock" } */}
      { !inStock && 'Out Of Stock' }
    </div>
  );
}

function IsAdult({age}){
    const votePrompt = <h2 className="vote">You Can Vote</h2>;
    const restrictPrompt = <h2 className="cant-vote">You Can't Vote</h2>;

    return ( (age >=18) ? votePrompt : restrictPrompt )
}

IsAdult.propTypes = {
    age: PropTypes.number,
}


export { Greeting, Inbox, Product, IsAdult };