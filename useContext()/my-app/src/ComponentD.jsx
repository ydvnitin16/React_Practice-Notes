import { myContext } from './App.jsx';
import { useContext } from 'react';

function ComponentD() {
    const value = useContext(myContext);
    return (
        <div id="box">
            <p>Component D</p>
            <p>Hello {value}</p>
        </div>
    );
}
export default ComponentD;
