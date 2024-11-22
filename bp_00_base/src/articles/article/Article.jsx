import {useParams, useNavigate} from "react-router-dom";

import Comment from "../comment/Comment.jsx";
import TopicsList from "../../topics/TopicsList.jsx";
import EditForm from "../edit/EditForm.jsx";

const Article = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const article = props.articlesData.find(article => article.idArticle === parseInt(id));
    const articleTopics = article.topics.map((topic) => {
        return props.topicsData.find(top => top.idTopic === topic);
    });

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
        <div className="article">

            {props.visibleEdiPopUp ? <EditForm
                article={article}
                articleTopics={articleTopics}
                articlesData={props.articlesData}
                setVisibleEditPopup={props.setVisibleEditPopup}
                setArticlesData={props.setArticlesData}
                topicsData={props.topicsData}/> : null}

            <div className="article-title">
                <h3>{article.title}</h3>
            </div>
            <div className="article-text">
                <p>{article.text}</p>
            </div>
            <div className="article-footer">
                <div className="article-author">
                    {article.author}
                </div>
                <div className="article-creation">
                    {article.creationDate}
                </div>
                <div className="article-topics">
                    <TopicsList topicsList={article.topics} topicsData={props.topicsData}/>
                </div>
                <div className="article-review">
                    {article.review}
                </div>
            </div>
            <div className="article-comments">
                <Comment/>
            </div>
            <button className="article-edit-button" onClick={props.setVisibleEditPopup}>upravit</button>
            <button className="article-delete-button" onClick={handleDelete}>odstranit</button>
        </div>
    );

};

export default Article;