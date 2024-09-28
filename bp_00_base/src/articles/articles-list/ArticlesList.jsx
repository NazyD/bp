import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";

const ArticlesList = (props) => {

    function getArticlesList(articlesData) {
        return articlesData.map((article) => {
            return <ShortArticle article={article}/>
        })
    }

    return (
        <div>

            <button className="create-article-button" onClick={props.setVisibility}>vytvořit článek</button>

            {props.visiblePopUp ? <CreateForm articlesData={props.articlesData} setVisibility={props.setVisibility} setArticlesData={props.setArticlesData}/> : null}

            <div className="articles-list">
                {getArticlesList(props.articlesData)}
            </div>
        </div>
    );

};

export default ArticlesList;