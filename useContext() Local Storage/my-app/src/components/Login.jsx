import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, login } = useAuth();
    const [username, setUsername] = useState(null);
    const navigate = useNavigate()

    function handleLogin(username){
        console.log('called')
        if(username.trim()){
            
            login(username)
            setUsername('')
            navigate('/')
        }        
    }

    return (
        <div>
            <h3>{user ? 'Already Logged In' : 'Please Login First'} </h3>
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={(e) => handleLogin(username)}>Login</button>
        </div>
    );
};

export default Login;
