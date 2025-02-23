import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";
import TopicManagement from "../../topics/TopicManagement.jsx";
import {useState} from "react";
import SmallCardIcon from '/assets/icons/grid-card.png';
import BigCardIcon from '/assets/icons/big-card.png';

import '../../styles/styles.scss';

const ArticlesList = (props) => {
    const [searchString , setSearchString] = useState("");
    const [cardSize, setCardSize] = useState('small');

    const normalizeString = (str) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const filteredArticles = props.articlesData.filter((article) =>
        normalizeString(article.title).includes(normalizeString(searchString)));

    function getArticlesList(articlesData) {
        return articlesData.map((article) => {
            return <ShortArticle
                article={article}
                topicsData={props.topicsData}
                cardSize={cardSize}
            />
        })
    }

    return (
        <div className="articles-container">

            <div className="tools-container">
                <div className="search-place">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="hledat..."
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                    />
                </div>
                <div className="view-buttons">
                    <button className="view-button" onClick={() => setCardSize('small')}>
                        <img src={SmallCardIcon} alt="Small Cards"/>
                    </button>
                    <button className="view-button" onClick={() => setCardSize('big')}>
                        <img src={BigCardIcon} alt="Big Cards"/>
                    </button>
                </div>
                {props.creationForms ?
                    <div className="creation-forms">
                        <button className="action-button" onClick={props.setVisibility}>
                            Vytvořit článek
                        </button>
                        {props.visiblePopUp && (
                            <>
                                <div className="popup-overlay" onClick={props.setVisibility}></div>
                                <div className="popup-window">
                                    <CreateForm
                                        articlesData={props.articlesData}
                                        setVisibility={props.setVisibility}
                                        setArticlesData={props.setArticlesData}
                                        topicsData={props.topicsData}
                                    />
                                </div>
                            </>
                        )}

                        <button className="action-button" onClick={props.setTopVisibility}>
                            Kategorie
                        </button>
                        {props.topVisibility && (
                            <>
                                <div className="popup-overlay" onClick={props.setTopVisibility}></div>
                                <div className="popup-window">
                                    <TopicManagement
                                        setTopVisibility={props.setTopVisibility}
                                        setTopicsData={props.setTopicsData}
                                        setArticlesData={props.setArticlesData}
                                        articlesData={props.articlesData}
                                        topicsData={props.topicsData}
                                    />
                                </div>
                            </>
                        )}
                    </div> : null}
            </div>


            <div className="articles-list">
                {getArticlesList(filteredArticles)}
            </div>
        </div>
    );

};

export default ArticlesList;