import {useState} from "react";

const defaultForm = {
    title: "",
    text: "",
    topics: ""
};
function CreateForm(showModal) {
    const [formData, setFormData] = useState(defaultForm);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Title: ${formData.title}, Text: ${formData.text}, Topics: ${formData.topics}`);
    }

    console.log(showModal);

    return(
        <div className="create-form-popup" id="createForm" hidden={true}>
            <form className="create-form" onSubmit={handleSubmit}>
                <h1>Nový článek</h1>

                <label htmlFor="title">Název: </label>
                <input type="text"
                       id="title"
                       name="title"
                       placeholder="název článku"
                       value={formData.title}
                       onChange={handleChange}
                       required/>

                <label htmlFor="text">Text: </label>
                <input type="text"
                       id="text"
                       name="text"
                       placeholder="text článku"
                       value={formData.text}
                       onChange={handleChange}
                       required/>

                <label htmlFor="topics">Topic: </label>
                <input type="text"
                       id="topics"
                       name="topics"
                       placeholder="topic článku"
                       value={formData.topics}
                       onChange={handleChange}
                       required/>

                <button type="submit">Vytvořit</button>
            </form>
        </div>
    );

}

export default CreateForm;