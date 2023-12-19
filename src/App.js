import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NavBar from './components/NavBar';
import Article from './components/Article'; // Import Articles component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/articles" element={<Article />} />

                    {/* Define other routes using the 'element' prop */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
