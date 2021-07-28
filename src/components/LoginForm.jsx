import React, { useState, useEffect } from 'react';
import Home from './Home';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const _submitForm = async (e) => {
        e.preventDefault();
        const credentials = { username, password };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'user_email': username, 'user_password': password})
        };
        fetch('http://localhost:3000/users/login/', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.isValid === true) {
                    setIsLoggedIn(true)
                }
            })
        }
    

    return (
        <>
        {isLoggedIn === false ? (
            <>
            <h1>Login</h1>
            <form onSubmit={_submitForm}>
                <label>
                    username:
                    <input 
                        type="text"
                        value={username} 
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                </label>
                <br />
                <label>
                    password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
            </>
        ) : (
            <>
                <Home isLoggedIn={isLoggedIn}/>
            </>
        )}
        
        
            
        </>
    );
    

    
}

export default LoginForm;