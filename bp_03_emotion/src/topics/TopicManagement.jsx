import {useState} from "react";
import EditTopic from "./EditTopic.jsx";
import styled from "@emotion/styled";

const defaultTopicForm = {
    topicName: ""
};

// Styled Components for Topic Form Elements
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 16px;
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
    background-color: ${({ theme }) => theme.componentBackground};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    padding: 5px;
    color: ${({ theme }) => theme.textColor};
    font-size: 12px;
    z-index: 999;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 16px 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.componentBackground};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
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
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.buttonBackgroundColor};
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    transition: background-color 0.5s ease, border-color 0.5s ease;

    &:hover {
        background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
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

const TopicManagementContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopicListContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function TopicManagement(props) {
    const [newTopic, setNewTopic] = useState(defaultTopicForm);


    function getTopicsList(topicsData) {
        return topicsData.map((topic) => {
            return <EditTopic
                topic={topic}
                topicsData={props.topicsData}
                setTopicsData={props.setTopicsData}
                articlesData={props.articlesData}
                setArticlesData={props.setArticlesData}/>
        })
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewTopic((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // find the last id
        const maxId = props.topicsData.length > 0 ?
            Math.max(...props.topicsData.map(top => top.idTopic)) : 0;

        const newTopicData = {
            ...newTopic,
            idTopic: maxId + 1,
        };

        // add new topic to the list of topics in local storage
        const updatedTopic = [...props.topicsData, newTopicData];
        props.setTopicsData(updatedTopic);
        localStorage.setItem("topics.json", JSON.stringify(updatedTopic));

        setNewTopic(defaultTopicForm);
    }

    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <FormTitle>Nová kategorie</FormTitle>

                <OneInputContainer>
                    <FormLabel htmlFor="topicName">Název:</FormLabel>
                    <FormInput
                        type="text"
                        id="topicName"
                        name="topicName"
                        placeholder="název kategorie"
                        value={newTopic.topicName}
                        onChange={handleChange}
                        required
                    />
                </OneInputContainer>

                <ButtonContainer>
                    <FormButton type="submit">Vytvořit</FormButton>
                    <CloseButton type="button" onClick={props.setTopVisibility}>
                        Storno
                    </CloseButton>
                </ButtonContainer>

            </StyledForm>

            <TopicManagementContainer>
                <h3>Topics List</h3>
                <TopicListContainer>{getTopicsList(props.topicsData)}</TopicListContainer>
            </TopicManagementContainer>
        </div>
    );

}

export default TopicManagement;