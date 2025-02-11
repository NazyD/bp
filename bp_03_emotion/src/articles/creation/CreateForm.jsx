import {useEffect, useRef, useState} from "react";
import {StyledForm, FormTitle, OneInputContainer, FormLabel, FormInput,
    FormTextarea, ButtonContainer, FormButton, CloseButton, AutocompleteContainer,
    InputWithDropdown, AutocompleteLabel, AutocompleteInput, SelectedTopics, TopicChip,
    RemoveButton, Dropdown, DropdownItem} from "../FormDef.jsx";

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

    // Create refs for the input and dropdown
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
        const datetime = currentdate.getDate() + "/" + (currentdate.getMonth() + 1)
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

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FormTitle>Nový článek</FormTitle>

            <OneInputContainer>
                <FormLabel htmlFor="title">Název:</FormLabel>
                <FormInput
                    type="text"
                    id="title"
                    name="title"
                    placeholder="název článku"
                    value={newArticle.title}
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
                    value={newArticle.text}
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
                    value={newArticle.author}
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
                <FormButton type="submit">Vytvořit</FormButton>
                <CloseButton type="button" onClick={props.setVisibility}>
                    Storno
                </CloseButton>
            </ButtonContainer>

        </StyledForm>
    );

}

export default CreateForm;