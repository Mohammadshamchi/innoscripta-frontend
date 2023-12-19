// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            // Handle response - maybe log in the user or redirect to login page
        } catch (error) {
            console.error("Registration error:", error.response);
            // Handle errors, show messages to user as needed
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
