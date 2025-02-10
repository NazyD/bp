import {useParams, useNavigate} from "react-router-dom";

import TopicsList from "../../topics/TopicsList.jsx";
import EditForm from "../edit/EditForm.jsx";
import MoveUpButton from "../../components/MoveUpButton.jsx";
import React, {useEffect, useState} from "react";
import '../../styles/styles.scss';

const Article = (props) => {
    const [articleText, setArticleText] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const article = props.articlesData.find(article => article.idArticle === parseInt(id));
    const articleTopics = article.topics.map((topic) => {
        return props.topicsData.find(top => top.idTopic === topic);
    });

    useEffect(() => {
        if (article.text && article.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(article.text);
        }
    }, [article.text]);

    const handleDelete = () => {
        const updatedArticles = props.articlesData.filter(
            (article) => article.idArticle !== parseInt(id)
        );

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        navigate("/articles-list")
        // upravit a nastavit do contextu, odebrat z komponentu, vytvořit zvlášt práci s datama
        // doplnit vyhledavani clanku
    }

    return (
        <div className="article-container">
            <MoveUpButton/>

            {props.visibleEdiPopUp ? <EditForm
                article={article}
                articleTopics={articleTopics}
                articlesData={props.articlesData}
                setVisibleEditPopup={props.setVisibleEditPopup}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}/> : null}


            <div className="article-title">
                <div className="article-title-left">
                    <h1>{article.title}</h1>
                </div>
                <div className="article-image">
                    <img src={article.picture} alt="article image"/>
                </div>
                <div className="article-title-right">
                    <div className="article-metadata">
                        <span className="article-author">Autor:</span>
                        <span className="article-author">{article.author}</span>
                        <span className="article-creation">Vytvořeno:</span>
                        <span className="article-creation">{article.creationDate}</span>
                        <span className="article-topics">Kategorie:
                            <TopicsList topicsList={article.topics} topicsData={props.topicsData}/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="article-text">
                <div className="article-content" dangerouslySetInnerHTML={{__html: articleText}}/>
            </div>

            <div className="article-footer">
                <button
                    className="update-button"
                    onClick={props.setVisibleEditPopup}
                >
                    Upravit
                </button>
                <button
                    className="delete-button"
                    onClick={handleDelete}
                >
                    Odstranit
                </button>
            </div>

        </div>
    );

};

export default Article;