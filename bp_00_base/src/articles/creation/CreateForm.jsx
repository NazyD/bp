import {useState} from "react";
import {v4 as uuidv4} from "uuid";

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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewArticle((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${newArticle.title}, Text: ${newArticle.text}, Topics: ${newArticle.topics}`);

        // find the last id
        const maxId = props.articlesData.length > 0 ?
            Math.max(...props.articlesData.map(article => article.idArticle)) : 0;

        console.log(Math.max(...props.articlesData.map(article => article.idArticle)));
        const newArticleData = {
            ...newArticle,
            idArticle: maxId + 1,
        };

        // add new article to the list of articles in local storage
        const updatedArticles = [...props.articlesData, newArticleData];
        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        setNewArticle(defaultForm);

        console.log(JSON.parse(localStorage.getItem("articles.json")));
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
                <input type="text"
                       id="text"
                       name="text"
                       placeholder="text článku"
                       value={newArticle.text}
                       onChange={handleChange}
                       required/>

                <label htmlFor="topics">Topic: </label>
                <input type="text"
                       id="topics"
                       name="topics"
                       placeholder="topic článku"
                       value={newArticle.topics}
                       onChange={handleChange}/>

                <button type="submit">Vytvořit</button>
            </form>
        </div>
    );

}

export default CreateForm;