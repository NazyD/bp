import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";
const ShortArticle = (props) => {

    return(
        <div className="short-article">
            <div className="short-article-title">
                <h3><Link to={`/articles-list/article/${props.article.idArticle}`}>{props.article.title}</Link></h3>
            </div>
            <div className="short-article-text">
                <p>{props.article.text} <Link to={`/articles-list/article/${props.article.idArticle}`}>více</Link></p>
            </div>
            <div className="short-article-footer">
                <div className="short-article-author">
                    {props.article.author}
                </div>
                <div className="short-article-creation">
                    {props.article.creationDate}
                </div>
                <div className="short-article-topics">
                    <TopicsList topicsList={props.article.topics} />
                </div>
                <div className="short-article-review">
                    {props.article.review}
                </div>
            </div>
        </div>
    );

};

export default ShortArticle;