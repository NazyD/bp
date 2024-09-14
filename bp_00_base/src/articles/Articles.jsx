import React from "react";

import ArticlesList from './articles-list/ArticlesList.jsx';

const Articles = () => {

    return (
        <div className="articles">
            <h2>Seznam článků</h2>
            <ArticlesList/>
        </div>
    );

};

export default Articles;