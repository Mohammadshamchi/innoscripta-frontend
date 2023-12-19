// src/pages/LoginPage.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Assume you have this set up

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthData } = useContext(AuthContext); // Use context to manage auth

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            setAuthData(response.data); // Handle auth data (e.g., token, user info)
            // Redirect to home page or dashboard as needed
        } catch (error) {
            console.error("Login error:", error.response);
            // Handle errors, show messages to user as needed
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
