import React from "react";

import ArticlesList from './articles-list/ArticlesList.jsx';

const Articles = (props) => {

    return (
        <div className="articles">
            <h2>Seznam článků</h2>
            <ArticlesList articlesList={props.articles}/>
        </div>
    );

};

export default Articles;