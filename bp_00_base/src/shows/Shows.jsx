import React from "react";
import ArticlesList from "../articles/articles-list/ArticlesList.jsx";

const Shows = (props) => {

    const showsArticlesData = props.articlesData.filter(article => article.topics.includes(3));
    return (
        <div className="articles">
            <h2>Seznam článků</h2>
            <ArticlesList
                articlesData={showsArticlesData}
                visiblePopUp={props.visiblePopUp}
                setVisibility={props.setVisibility}
                topVisibility={props.topVisibility}
                setTopVisibility={props.setTopVisibility}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}
                setTopicsData={props.setTopicsData}
                creationForms={false}/>
        </div>
    );

};

export default Shows;