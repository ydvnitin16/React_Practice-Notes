import ComponentB from './ComponentB.jsx';
import { myContext } from './App.jsx';
import { useContext } from 'react';

function ComponentA() {
    const value = useContext(myContext)
    return (
    <div id='box'>
        <p>Component A</p>
        <p>Hello {value}</p>
        <ComponentB />
    </div>);
}
export default ComponentA;
