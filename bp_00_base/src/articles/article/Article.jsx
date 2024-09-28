import {useParams, useNavigate} from "react-router-dom";

import Comment from "../comment/Comment.jsx";
import TopicsList from "../../topics/TopicsList.jsx";

const Article = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const article = props.articlesData.find(article => article.idArticle === parseInt(id));

    const handleDelete = () => {
        const updatedArticles = props.articlesData.filter(
            (article) => article.idArticle !== parseInt(id)
        );

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        navigate("/articles-list")
    }

    return (
        <div className="article">
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
                    <TopicsList topicsList={article.topics} />
                </div>
                <div className="article-review">
                    {article.review}
                </div>
            </div>
            <div className="article-comments">
                <Comment />
            </div>
            <button className="article-delete-button" onClick={handleDelete}>odstranit</button>
        </div>
    );

};

export default Article;