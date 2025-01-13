import {useState} from "react";
import EditTopic from "./EditTopic.jsx";

import '../styles/styles.scss';

const defaultTopicForm = {
    topicName: ""
};
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

    return(
        <div className="topic-management" id="createForm">
            <form className="create-form" onSubmit={handleSubmit}>
                <label htmlFor="topicName">Název: </label>
                <input type="text"
                       id="topicName"
                       name="topicName"
                       placeholder="název topicu"
                       value={newTopic.topicName}
                       onChange={handleChange}
                       required/>

                <button type="submit">Vytvořit</button>
                <button className="topic-management-close" onClick={props.setTopVisibility}>storno</button>
            </form>

            <div className="manage-topics-list">
                <div className="edit-topics-list">
                    {getTopicsList(props.topicsData)}
                </div>
            </div>
        </div>
    );

}

export default TopicManagement;