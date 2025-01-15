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
`;

const FormLabel = styled.label`
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
`;

const FormInput = styled.input`
    padding: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.componentBackground};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
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

const TopicManagementContainer = styled.div`
    margin-top: 20px;
`;

const TopicListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
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
                <FormLabel htmlFor="topicName">Název:</FormLabel>
                <FormInput
                    type="text"
                    id="topicName"
                    name="topicName"
                    placeholder="název topicu"
                    value={newTopic.topicName}
                    onChange={handleChange}
                    required
                />

                <FormButton type="submit">Vytvořit</FormButton>
                <FormButton type="button" onClick={props.setTopVisibility}>
                    storno
                </FormButton>
            </StyledForm>

            <TopicManagementContainer>
                <h3>Topics List</h3>
                <TopicListContainer>{getTopicsList(props.topicsData)}</TopicListContainer>
            </TopicManagementContainer>
        </div>
    );

}

export default TopicManagement;