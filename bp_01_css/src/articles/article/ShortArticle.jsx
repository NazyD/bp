import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";

import './ShortArticle.css';
import {useEffect, useState} from "react";

const ShortArticle = (props) => {
    const [articleText, setArticleText] = useState("");

    const bigCardChars = screen.width <= 426 ? 1400 : 700;

    useEffect(() => {
        if (props.article.text && props.article.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(props.article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(props.article.text);
        }
    }, [props.article.text]);

    const cutText = articleText.substring(0, props.cardSize === 'big' ? bigCardChars : 400) +
        `<a href="/articles-list/article/${props.article.idArticle}" style="text-decoration: none; color: inherit;"> ...</a>`;

    return (
        <div className={`short-article ${props.cardSize === 'big' ? 'big-card' : 'small-card'}`}>

            <img
                src={props.article.picture}
                alt="..."
                className="sliding-image"
            />

            <div className="short-article-title">
                <h3><Link to={`/articles-list/article/${props.article.idArticle}`}>{props.article.title}</Link></h3>
            </div>

            <div className="short-article-text">
                <div className="article-content" dangerouslySetInnerHTML={{__html: cutText}}/>
            </div>

            <div className="short-article-footer">
                <div className="short-article-author">
                    {props.article.author}
                </div>
                <div className="short-article-creation">
                    {props.article.creationDate}
                </div>
                <div className="short-article-topics">
                    <TopicsList topicsList={props.article.topics} topicsData={props.topicsData}/>
                </div>
                <div className="short-article-review">
                    {props.article.review}
                </div>
            </div>

        </div>
    );

};

export default ShortArticle;