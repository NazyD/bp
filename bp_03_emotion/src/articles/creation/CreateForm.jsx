import {useEffect, useRef, useState} from "react";
import styled from "@emotion/styled";

const defaultForm = {
    title: "",
    text: "",
    author: "",
    creationDate: "",
    editDate: "",
    review: "",
    topics: []
};

// Styled Components for Form Elements
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 16px;
    color: ${({theme}) => theme.textColor};
`;

const FormTitle = styled.h1`
    font-size: 34px;
    color: var(--text-color);
    margin: 0;
`;

const OneInputContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px; /* Adjust as needed */
`;

const FormLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 0;
    background-color: ${({theme}) => theme.componentBackground};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    padding: 5px;
    color: ${({theme}) => theme.textColor};
    font-size: 12px;
    z-index: 999;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 16px 14px;
    font-size: 16px;
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.componentBackground};
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    box-sizing: border-box;
`;

const FormTextarea = styled.textarea`
    width: 100%;
    position: relative;
    padding: 16px 14px;
    background-color: ${({theme}) => theme.componentBackground};
    font-size: 16px;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    color: ${({theme}) => theme.textColor};
    resize: none; /* Disable resizing */
    min-height: 120px;
    box-sizing: border-box;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
    gap: 10px;
`;

const FormButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    background-color: ${({theme}) => theme.buttonBackgroundColor};
    color: ${({theme}) => theme.textColor};
    cursor: pointer;
    transition: background-color 0.5s ease, border-color 0.5s ease;

    &:hover {
        background-color: ${({theme}) => theme.buttonBackgroundColorHover};
    }
`;
const CloseButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.componentBackground};
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    transition: background-color 0.5s ease, border-color 0.5s ease;

    &:hover {
        background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    }
`;

const AutocompleteContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px;
`;

const AutocompleteLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 0;
    background-color: ${({ theme }) => theme.componentBackground};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
    color: ${({ theme }) => theme.textColor};
    font-size: 12px;
    z-index: 999;
`;

const InputWithDropdown = styled.div`
    position: relative;
`;

const AutocompleteInput = styled.input`
    width: 100%;
    padding: 16px 14px;
    background-color: ${({ theme }) => theme.componentBackground};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    color: ${({ theme }) => theme.textColor};
    box-sizing: border-box;
`;

const SelectedTopics = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: auto;
    margin-bottom: 10px;
    position: absolute;
    top: 50%;
    left: 10px;
    right: 10px;
    transform: translateY(-50%);
    z-index: 999;
`;

const TopicChip = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.componentBackgroundHover};
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};
    margin-right: 5px;
`;

const RemoveButton = styled.span`
    margin-left: 5px;
    cursor: pointer;
    font-size: 16px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 90%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.componentBackground};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    z-index: 10;
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    background-color: ${({ selected, theme }) => selected ? theme.buttonBackgroundColorHover : 'transparent'};

    &:hover {
        background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    }
`;

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