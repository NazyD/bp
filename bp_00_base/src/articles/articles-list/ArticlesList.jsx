import {useState} from "react";
import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";

const ArticlesList = (props) => {
    const [showModal, setShowModal] = useState({state: true});

    const showCreateForm = () => {
        return setShowModal({state: true});
    }

    function getArticlesList(articlesList) {
        return articlesList.map((article) => {
            return <ShortArticle article={article}/>
        })
    }

    return (
        <div>

            <button className="create-article-button" onClick={showCreateForm}>vytvořit článek</button>
            <CreateForm showModal={showModal.state} />
            <div className="articles-list">
                {getArticlesList(props.articlesList)}
            </div>
        </div>
    );

};

export default ArticlesList;