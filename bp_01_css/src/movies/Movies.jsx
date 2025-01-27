import React from "react";
import ArticlesList from "../articles/articles-list/ArticlesList.jsx";

const Movies = (props) => {

    const movieTopicId = props.topicsData.find((topic) => topic.topicName === 'film')?.idTopic || 1;

    const moviesArticlesData = props.articlesData.filter(article => article.topics.includes(movieTopicId));

    return (
        <div className="articles">
            <h2>Seznam článků</h2>
            <ArticlesList
                articlesData={moviesArticlesData}
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

export default Movies;