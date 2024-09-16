import {useParams} from "react-router-dom";

import Comment from "../comment/Comment.jsx";
import TopicsList from "../../topics/TopicsList.jsx";

const Article = (props) => {
    let {id} = useParams();

    const article = props.articles.find(article => article.idArticle === parseInt(id));

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
        </div>
    );

};

export default Article;