import React from "react";

import ArticlesList from './articles-list/ArticlesList.jsx';

const Articles = (props) => {

    return (
        <div className="articles">
            <h2>Seznam článků</h2>
            <ArticlesList articlesData={props.articlesData} visiblePopUp={props.visiblePopUp} setVisibility={props.setVisibility} setArticlesData={props.setArticlesData}/>
        </div>
    );

};

export default Articles;