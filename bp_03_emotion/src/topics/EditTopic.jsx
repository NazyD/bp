
// Styled Components for Topic Form Elements
import styled from "@emotion/styled";

const TopicCheckboxContainer = styled.div`
    margin: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 55px;
`;

const DeleteButton = styled.button`
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

const EditTopic = (props) => {

    const handleDelete = () => {
        // step 1 delete topic
        const updatedTopics = props.topicsData.filter(
            (topic) => topic.idTopic !== props.topic.idTopic
        );

        props.setTopicsData(updatedTopics);
        localStorage.setItem("topics.json", JSON.stringify(updatedTopics));

        // step 2 remove topic from the articles
        const updatedArticles = props.articlesData.map((article) => {
            if(article.topics.includes(props.topic.idTopic)) {
                return {
                    ...article,
                    topics: article.topics.filter((topId) => topId !== props.topic.idTopic),
                };
            }
            return article;
        });

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));
    }

    return(
        <TopicCheckboxContainer>
            {props.topic.topicName}
            <DeleteButton className="topic-delete-button" onClick={handleDelete}>Odstranit</DeleteButton>
        </TopicCheckboxContainer>
    );
}

export default EditTopic;