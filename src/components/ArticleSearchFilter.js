import React, { useState } from 'react';

const ArticleSearchFilter = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(keyword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search articles..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default ArticleSearchFilter;
