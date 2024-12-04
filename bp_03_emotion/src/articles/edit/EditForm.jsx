import {useState} from "react";

function EditForm(props) {
    const [editedArticle, setEditedArticle] = useState(props.article);
    const [selectedTopics, setSelectedTopics] = useState(props.articleTopics);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEditedArticle({
            ...editedArticle,
            [name]: value,
        });
    }

    const handleTopicChange = (e) => {
        const topicId = parseInt(e.target.value);
        if(e.target.checked) {
            setSelectedTopics([...selectedTopics, topicId]);
        } else {
            setSelectedTopics(selectedTopics.filter((id) => id !== topicId));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${editedArticle.title}, Text: ${editedArticle.text}, Topics: ${editedArticle.topics}`);

        // current date
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)
            + "/" + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        const updatedArticle = {
            ...editedArticle,
            editDate: datetime
        }

        const updatedArticles = props.articlesData.map((a) =>
            a.idArticle === props.article.idArticle ? updatedArticle : a);

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        props.setVisibleEditPopup();
    }

    return(
        <div className="edit-form-popup" id="editForm">
            <form className="edit-form" onSubmit={handleSubmit}>
                <h1>edit článek</h1>

                <label htmlFor="title">Název: </label>
                <input type="text"
                       id="title"
                       name="title"
                       placeholder="název článku"
                       value={editedArticle.title}
                       onChange={handleChange}
                       required/>

                <label htmlFor="text">Text: </label>
                <textarea id="text"
                          name="text"
                          rows="5"
                          cols="40"
                          placeholder="text článku - je resizable, to se upraví/odebere při stylování"
                          value={editedArticle.text}
                          onChange={handleChange}
                          required/>

                <label htmlFor="author">Autor: </label>
                <input type="text"
                       id="author"
                       name="author"
                       placeholder="autor článku"
                       value={editedArticle.author}
                       onChange={handleChange} required/>

                <label htmlFor="topics">Topic: </label>
                {props.topicsData.map((topic) => (
                    <div key={topic.idTopic}>
                        <label>
                            <input
                                type="checkbox"
                                value={topic.idTopic}
                                checked={editedArticle.topics.includes(topic.idTopic)}
                                onChange={handleTopicChange}/>
                            {topic.topicName}
                        </label>
                    </div>
                ))}

                <button type="submit">upravit</button>
                <button className="edit-form-close" onClick={props.setVisibleEditPopup}>storno</button>
            </form>
        </div>
    );

}

export default EditForm;