import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";
import TopicManagement from "../../topics/TopicManagement.jsx";
import {useState} from "react";

const ArticlesList = (props) => {
    const [searchString , setSearchString] = useState("");

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
            return <ShortArticle article={article} topicsData={props.topicsData}/>
        })
    }

    console.log(props.articlesData);

    return (
        <div>
            <div className="search-place">
                <input
                    type="text"
                    placeholder="hledat..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </div>
            {props.creationForms ?
                <div className="creation-forms">
                    <button className="create-article-button" onClick={props.setVisibility}>vytvořit článek</button>
                {props.visiblePopUp ? <CreateForm
                    articlesData={props.articlesData}
                    setVisibility={props.setVisibility}
                    setArticlesData={props.setArticlesData}
                    topicsData={props.topicsData}/> : null}

                <button className="manage-topics" onClick={props.setTopVisibility}>topics</button>
                {props.topVisibility ? <TopicManagement
                    setTopVisibility={props.setTopVisibility}
                    setTopicsData={props.setTopicsData}
                    setArticlesData={props.setArticlesData}
                    articlesData={props.articlesData}
                    topicsData={props.topicsData}/> : null}
            </div> : null}


            <div className="articles-list">
                {getArticlesList(filteredArticles)}
            </div>
        </div>
    );

};

export default ArticlesList;