import React from "react";

import ArticlesList from './articles-list/ArticlesList.jsx';
import styled from "@emotion/styled";
import MoveUpButton from "../components/MoveUpButton.jsx";

const ArticlesMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textColor};
`;

const Articles = (props) => {

    return (
        <ArticlesMainContainer>
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
        </ArticlesMainContainer>
    );

};

export default Articles;