import React from "react";
import ArticlesList from "../articles/articles-list/ArticlesList.jsx";
import styled from "@emotion/styled";

const ArticlesMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textColor};
`;

const Shows = (props) => {

    const showsArticlesData = props.articlesData.filter(article => article.topics.includes(3));
    return (
        <ArticlesMainContainer>
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
        </ArticlesMainContainer>
    );

};

export default Shows;