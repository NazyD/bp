// copy code below to console in the browserr to reload data when problems with data occurs
localStorage.clear();

const articles = [
    {
        "idArticle": 1,
        "title": "Nízev článku mockup",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed elit dui, pellentesque",
        "author": "nazarij dovžanyn",
        "creationDate": "30/8/2024 19:42:29",
        "editDate": "",
        "review": "1/5",
        "topics": [1,2]
    },
    {
        "idArticle": 2,
        "title": "Nízev článku 2 mockup",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed elit dui, pellentesque",
        "author": "martin dyntr",
        "creationDate": "3/9/2024 15:49:29",
        "editDate": "",
        "review": "2/5",
        "topics": [3, 4]
    },
    {
        "idArticle": 2,
        "title": "Nízev článku 3 mockup",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed elit dui, pellentesque",
        "author": "petr horejs",
        "creationDate": "3/1/2024 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 4]
    },
    {
        "idArticle": 2,
        "title": "Nízev článku 4 mockup",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed elit dui, pellentesque",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [3, 5]
    }
];
const topics = [
    {
        "idTopic": 1,
        "topicName": "film"
    },
    {
        "idTopic": 2,
        "topicName": "komedie"
    },
    {
        "idTopic": 3,
        "topicName": "serial"
    },
    {
        "idTopic": 4,
        "topicName": "horor"
    },
    {
        "idTopic": 5,
        "topicName": "drama"
    }
];

localStorage.setItem("articles.json", JSON.stringify(articles));
localStorage.setItem("topics.json", JSON.stringify(topics));