import './EditTopic.css';

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
        <div className="edit-topic">
            {props.topic.topicName}
            <button className="topic-delete-button" onClick={handleDelete}>Odstranit</button>
        </div>
    );
}

export default EditTopic;