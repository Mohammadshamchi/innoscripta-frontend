import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleSearchFilter from '../components/ArticleSearchFilter';
import Article from '../components/Article'; // Your article display component

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchArticles = async (keyword = '') => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/api/articles?keyword=${keyword}`);
            setArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
            // Handle error
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <div>
            <ArticleSearchFilter onSearch={fetchArticles} />
            {loading ? <p>Loading...</p> : articles.map(article => <Article key={article.id} article={article} />)}
        </div>
    );
};

export default HomePage;
