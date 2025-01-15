import {useState} from "react";
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
    color: ${({theme}) => theme.textColor};
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

const FormTextarea = styled.textarea`
  padding: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.componentBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  resize: none;
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

const TopicCheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
`;

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
        <StyledForm onSubmit={handleSubmit}>
            <h1>Nový článek</h1>

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

            <FormLabel htmlFor="topics">Topic:</FormLabel>
            {props.topicsData.map((topic) => (
                <TopicCheckboxContainer key={topic.idTopic}>
                    <FormInput
                        type="checkbox"
                        value={topic.idTopic}
                        onChange={handleTopicChange}
                    />
                    {topic.topicName}
                </TopicCheckboxContainer>
            ))}

            <FormButton type="submit">Vytvořit</FormButton>
            <FormButton type="button" onClick={props.setVisibility}>
                storno
            </FormButton>
        </StyledForm>
    );

}

export default CreateForm;