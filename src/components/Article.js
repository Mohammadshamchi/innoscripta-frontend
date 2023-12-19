// src/components/Article.js or src/pages/Article.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Helper function to fetch articles
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/articles');
                setArticles(response.data);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    setError('Too many requests. Please try again later.');
                } else {
                    setError('An error occurred while fetching the articles.');
                }
            }
            setLoading(false);
        };

        // Invoke the fetchArticles function
        fetchArticles();
    }, []); // The empty array ensures this effect only runs once

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Articles</h1>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <a href={article.url}>Read More</a>
                </div>
            ))}
        </div>
    );
};

export default Articles;
