// useReducer:- useReducer is a React Hook used to manage complex state logic. It works like a Redux-style reducer pattern — you dispatch actions to update the state instead of using useState.

// Syntax:- const [state, dispatch] = useReducer(reducerFunction, initialState);

// reducerFunction: A function that determines how to update state based on the action.
// initialState: The initial state object.
// dispatch: A function used to send an action to the reducer.

import { useReducer } from 'react';

function App() {
    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            case 'input':
                return { count: action.payload };
            default:
                throw new Error('Invalid Case.');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment++
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                decrement--
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <input
                type="text"
                onChange={(e) =>
                    dispatch({ type: 'input', payload: e.target.value })
                }
            />
        </div>
    );
}

export default App;