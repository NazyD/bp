import { useEffect, useRef, useState } from "react";

import '../../styles/styles.scss';

function EditForm(props) {
    const [editedArticle, setEditedArticle] = useState(props.article);
    const [selectedTopics, setSelectedTopics] = useState(
        props.articleTopics.map((topic) => topic.idTopic)
    );
    const [articleText, setArticleText] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownVisible(false); // Close dropdown
            }
        };

        // Add event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (editedArticle.text && editedArticle.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(editedArticle.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(editedArticle.text);
        }
    }, [editedArticle.text]);

    const handleInputFocus = () => {
        setDropdownVisible(true); // Open dropdown when the input is clicked
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEditedArticle({
            ...editedArticle,
            [name]: value,
        });
        if (name === "text") {
            setArticleText(value);
        }
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
        alert(`Title: ${editedArticle.title}, Text: ${editedArticle.text}, Topics: ${editedArticle.topics}`);

        // current date
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)
            + "/" + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

        const updatedArticle = {
            ...editedArticle,
            topics: selectedTopics,
            text: articleText,
            editDate: datetime
        }

        const updatedArticles = props.articlesData.map((a) =>
            a.idArticle === props.article.idArticle ? updatedArticle : a);

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        props.setVisibleEditPopup();
    }

    return(
        <div className="edit-form" id="editForm">
            <form className="edit-form" onSubmit={handleSubmit}>
                <h1>Úprava článku</h1>

                <div className="input-form">
                    <label htmlFor="title">Název</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="název článku"
                        value={editedArticle.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-form">
                    <label htmlFor="text">Text</label>
                    <textarea
                        id="text"
                        name="text"
                        rows="5"
                        cols="40"
                        placeholder="text článku"
                        value={articleText}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-form">
                    <label htmlFor="author">Autor</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="autor článku"
                        value={editedArticle.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="autocomplete">
                    <label htmlFor="topics">Topics</label>
                    <div className="selected-topics">
                        {selectedTopics.map((topicId) => {
                            const topic = props.topicsData.find((t) => t.idTopic === topicId);
                            return (
                                <div key={topicId} className="topic-chip">
                                    {topic.topicName}
                                    <span
                                        className="remove"
                                        onClick={() => handleTopicRemove(topicId)}
                                    >
                                        ×
                                    </span>
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
                                        className={`dropdown-item ${
                                            selectedTopics.includes(topic.idTopic) ? "selected" : ""
                                        }`}
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
                    <button type="submit">Upravit</button>
                    <button
                        className="edit-form-close"
                        onClick={props.setVisibleEditPopup}
                    >
                        Storno
                    </button>
                </div>
            </form>
        </div>
    );

}

export default EditForm;