import { useEffect, useRef, useState } from "react";
import {StyledForm, FormTitle, OneInputContainer, FormLabel, FormInput,
    FormTextarea, ButtonContainer, FormButton, CloseButton, AutocompleteContainer,
    InputWithDropdown, AutocompleteLabel, AutocompleteInput, SelectedTopics, TopicChip,
    RemoveButton, Dropdown, DropdownItem} from "../FormDef.jsx";

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
        <StyledForm onSubmit={handleSubmit}>
            <FormTitle>Úprava článku</FormTitle>

            <OneInputContainer>
                <FormLabel htmlFor="title">Název:</FormLabel>
                <FormInput
                    type="text"
                    id="title"
                    name="title"
                    placeholder="název článku"
                    value={editedArticle.title}
                    onChange={handleChange}
                    required
                />
            </OneInputContainer>

            <OneInputContainer>
                <FormLabel htmlFor="text">Text:</FormLabel>
                <FormTextarea
                    id="text"
                    name="text"
                    rows="5"
                    placeholder="text článku - je resizable, to se upraví/odebere při stylování"
                    value={articleText}
                    onChange={handleChange}
                    required
                />
            </OneInputContainer>

            <OneInputContainer>
                <FormLabel htmlFor="author">Autor:</FormLabel>
                <FormInput
                    type="text"
                    id="author"
                    name="author"
                    placeholder="autor článku"
                    value={editedArticle.author}
                    onChange={handleChange}
                    required
                />
            </OneInputContainer>

            <AutocompleteContainer>
                <AutocompleteLabel htmlFor="topics">Topics</AutocompleteLabel>
                <SelectedTopics>
                    {selectedTopics.map((topicId) => {
                        const topic = props.topicsData.find(t => t.idTopic === topicId);
                        return (
                            <TopicChip key={topicId}>
                                {topic.topicName}
                                <RemoveButton onClick={() => handleTopicRemove(topicId)}>×</RemoveButton>
                            </TopicChip>
                        );
                    })}
                </SelectedTopics>

                <InputWithDropdown>
                    <AutocompleteInput
                        type="text"
                        id="autocomplete-input"
                        ref={inputRef}
                        placeholder="..."
                        readOnly
                        onClick={handleInputFocus}
                    />
                    {dropdownVisible && (
                        <Dropdown ref={dropdownRef}>
                            {props.topicsData.map((topic) => (
                                <DropdownItem
                                    key={topic.idTopic}
                                    selected={selectedTopics.includes(topic.idTopic)}
                                    onClick={() => handleTopicToggle(topic)}
                                >
                                    {topic.topicName}
                                    {selectedTopics.includes(topic.idTopic) && " (Selected)"}
                                </DropdownItem>
                            ))}
                        </Dropdown>
                    )}
                </InputWithDropdown>
            </AutocompleteContainer>

            <ButtonContainer>
                <FormButton type="submit">Upravit</FormButton>
                <CloseButton type="button" onClick={props.setVisibility}>
                    Storno
                </CloseButton>
            </ButtonContainer>

        </StyledForm>
    );

}

export default EditForm;