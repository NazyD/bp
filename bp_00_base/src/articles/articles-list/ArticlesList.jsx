import {useState} from "react";
import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";

const ArticlesList = () => {
    const [showModal, setShowModal] = useState({state: true});

    const showCreateForm = () => {
        return setShowModal({state: true});
    }

    return (
        <div>

            <button className="create-article-button" onClick={showCreateForm}>vytvořit článek</button>
            <CreateForm showModal={showModal.state} />
            <div className="articles-list">
                <ShortArticle/>
                <ShortArticle/>
                <ShortArticle/>
            </div>
        </div>
    );

};

export default ArticlesList;