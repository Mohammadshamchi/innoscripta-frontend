import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
    const [articles, setArticles] = useState([]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/articles')
         .then(response => {
             setArticles(response.data);
         })
         .catch(error => {
             if (error.response && error.response.status === 429) {
                 console.error('Too many requests. Please try again later.');
             } else {
                 console.error('There was an error fetching the articles', error);
             }
         });
}, []);


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
