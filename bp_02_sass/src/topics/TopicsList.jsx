import Topic from "./Topic.jsx";

const TopicsList = (props) => {

    function getTopicsList(topicsList) {
        return topicsList.map((topic) => {
            const top = props.topicsData.find(top => top.idTopic === topic);
            return <Topic topic={top}/>
        })
    }

    return(
        <div className="topics-list">
            {getTopicsList(props.topicsList)}
        </div>
    );

};

export default TopicsList;