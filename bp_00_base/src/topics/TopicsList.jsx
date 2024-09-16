import Topic from "./Topic.jsx";

const TopicsList = (props) => {

    function getTopicsList(topicsList) {
        return topicsList.map((topic) => {
            return <Topic topic={topic}/>
        })
    }

    return(
        <div className="topics-list">
            {getTopicsList(props.topicsList)}
        </div>
    );

};

export default TopicsList;