import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";
import TopicManagement from "../../topics/TopicManagement.jsx";

const ArticlesList = (props) => {

    function getArticlesList(articlesData) {
        return articlesData.map((article) => {
            return <ShortArticle article={article} topicsData={props.topicsData}/>
        })
    }

    console.log(props.articlesData);

    return (
        <div>
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
                {getArticlesList(props.articlesData)}
            </div>
        </div>
    );

};

export default ArticlesList;