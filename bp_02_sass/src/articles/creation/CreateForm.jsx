import {useEffect, useRef, useState} from "react";

import '../../styles/styles.scss';

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
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false); // Close dropdown
            }
        };

        // Add event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputFocus = () => {
        setDropdownVisible(true); // Open dropdown when the input is clicked
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewArticle((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleTopicToggle = (topic) => {
        if (selectedTopics.includes(topic.idTopic)) {
            setSelectedTopics(selectedTopics.filter((id) => id !== topic.idTopic));
        } else {
            setSelectedTopics([...selectedTopics, topic.idTopic]);
        }
    };

    const handleTopicRemove = (topicId) => {
        setSelectedTopics(selectedTopics.filter((id) => id !== topicId));
    };

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
        <div className="create-form" id="createForm">
            <form className="create-form" onSubmit={handleSubmit}>
                <h1>Nový článek</h1>

                <div className="input-form">
                    <label htmlFor="title">Název</label>
                    <input type="text"
                           id="title"
                           name="title"
                           placeholder="název článku"
                           value={newArticle.title}
                           onChange={handleChange}
                           required/>
                </div>

                <div className="input-form">
                    <label htmlFor="text">Text</label>
                    <textarea id="text"
                              name="text"
                              rows="5"
                              cols="40"
                              placeholder="text článku - je resizable, to se upraví/odebere při stylování"
                              value={newArticle.text}
                              onChange={handleChange}
                              required/>
                </div>

                <div className="input-form">
                    <label htmlFor="author">Autor</label>
                    <input type="text"
                           id="author"
                           name="author"
                           placeholder="autor článku"
                           value={newArticle.author}
                           onChange={handleChange} required/>
                </div>

                <div className="autocomplete">
                    <label htmlFor="topics">Topics</label>
                    <div className="selected-topics">
                        {selectedTopics.map((topicId) => {
                            const topic = props.topicsData.find(t => t.idTopic === topicId);
                            return (
                                <div key={topicId} className="topic-chip">
                                    {topic.topicName}
                                    <span className="remove" onClick={() => handleTopicRemove(topicId)}>×</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="input-with-dropdown">
                        <input
                            type="text"
                            id="autocomplete-input"
                            ref={inputRef}
                            placeholder="..."
                            readOnly
                            onClick={handleInputFocus}
                        />
                        {dropdownVisible && (
                            <div className="dropdown" ref={dropdownRef}>
                                {props.topicsData.map((topic) => (
                                    <div
                                        key={topic.idTopic}
                                        className={`dropdown-item ${selectedTopics.includes(topic.idTopic) ? 'selected' : ''}`}
                                        onClick={() => handleTopicToggle(topic)}
                                    >
                                        {topic.topicName}
                                        {selectedTopics.includes(topic.idTopic) && " (Selected)"}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className="form-buttons">
                    <button type="submit">Vytvořit</button>
                    <button className="create-form-close" onClick={props.setVisibility}>Storno</button>
                </div>
            </form>
        </div>
    );

}

export default CreateForm;