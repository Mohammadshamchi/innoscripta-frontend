import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error("Error fetching articles:", error);
                // Handle errors appropriately in your UI
            });
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    {/* Render other article details as needed */}
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
