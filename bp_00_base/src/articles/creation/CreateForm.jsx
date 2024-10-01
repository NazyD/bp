import {useState} from "react";

const defaultForm = {
    title: "",
    text: "",
    author: "",
    creationDate: "",
    editDate: "",
    review: "",
    topics: []
};
function CreateForm(props) {
    const [newArticle, setNewArticle] = useState(defaultForm);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewArticle((prevFormData) => ({...prevFormData, [name]: value}));
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
        alert(`Title: ${newArticle.title}, Text: ${newArticle.text}, Topics: ${newArticle.topics}`);

        // find the last id
        const maxId = props.articlesData.length > 0 ?
            Math.max(...props.articlesData.map(article => article.idArticle)) : 0;

        // current date
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)
            + "/" + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        const newArticleData = {
            ...newArticle,
            idArticle: maxId + 1,
            creationDate: datetime,
            topics: selectedTopics,
        };

        // add new article to the list of articles in local storage
        const updatedArticles = [...props.articlesData, newArticleData];
        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        setNewArticle(defaultForm);
        props.setVisibility();
    }

    return(
        <div className="create-form-popup" id="createForm">
            <form className="create-form" onSubmit={handleSubmit}>
                <h1>Nový článek</h1>

                <label htmlFor="title">Název: </label>
                <input type="text"
                       id="title"
                       name="title"
                       placeholder="název článku"
                       value={newArticle.title}
                       onChange={handleChange}
                       required/>

                <label htmlFor="text">Text: </label>
                <textarea id="text"
                          name="text"
                          rows="5"
                          cols="40"
                          placeholder="text článku - je resizable, to se upraví/odebere při stylování"
                          value={newArticle.text}
                          onChange={handleChange}
                          required/>

                <label htmlFor="author">Autor: </label>
                <input type="text"
                       id="author"
                       name="author"
                       placeholder="autor článku"
                       value={newArticle.author}
                       onChange={handleChange} required/>

                <label htmlFor="topics">Topic: </label>
                {props.topicsData.map((topic) => (
                    <div key={topic.idTopic}>
                        <label>
                            <input
                                type="checkbox"
                                value={topic.idTopic}
                                onChange={handleTopicChange}/>
                            {topic.topicName}
                        </label>
                    </div>
                ))}

                <button type="submit">Vytvořit</button>
            </form>
        </div>
    );

}

export default CreateForm;