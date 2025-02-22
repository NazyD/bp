import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";

import '../../styles/styles.scss';
import {useEffect, useState} from "react";

const ShortArticle = (props) => {
    const [articleText, setArticleText] = useState("");
    const [charLimit, setCharLimit] = useState(400);

    const calculateCharLimit = () => {
        const width = window.innerWidth;

        if (props.cardSize === 'big') {
            if (width <= 530) return 700;
            if (width <= 830) return 1000;
            if (width <= 1190) return 1200;
            return 1400;
        } else {
            if (width <= 425) return 200;
            if (width <= 768) return 300;
            if (width <= 1024) return 350;
            return 400;
        }
    };
    useEffect(() => {
        const updateCharLimit = () => setCharLimit(calculateCharLimit());
        updateCharLimit();

        window.addEventListener('resize', updateCharLimit);
        return () => window.removeEventListener('resize', updateCharLimit);
    }, [props.cardSize]);

    useEffect(() => {
        if (props.article.text && props.article.text.startsWith('/articles/')) {
            console.log(props.article.text);
            // Fetch the text file
            fetch(props.article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(props.article.text);
        }
    }, [props.article.text]);

    const cutText = articleText.substring(0, charLimit) +
        `<a href="/articles-list/article/${props.article.idArticle}" style="text-decoration: none; color: inherit;"> ...</a>`;


    return (
        <div className={`short-article ${props.cardSize === 'big' ? 'big-card' : 'small-card'}`}>

            <div className="short-article-title">
                <h3><Link to={`/articles-list/article/${props.article.idArticle}`}>{props.article.title}</Link></h3>
            </div>

            <img
                src={props.article.picture}
                alt="..."
                className="sliding-image"
            />

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