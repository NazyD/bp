import React from "react";

import ArticlesList from './articles-list/ArticlesList.jsx';

import './Articles.css';
import MoveUpButton from "../components/MoveUpButton.jsx";

const Articles = (props) => {

    return (
        <div className="articles">
            <MoveUpButton/>
            <h2>Seznam článků</h2>
            <ArticlesList
                articlesData={props.articlesData}
                visiblePopUp={props.visiblePopUp}
                setVisibility={props.setVisibility}
                topVisibility={props.topVisibility}
                setTopVisibility={props.setTopVisibility}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}
                setTopicsData={props.setTopicsData}
                creationForms={true}/>
        </div>
    );

};

export default Articles;