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
        "idArticle": 3,
        "title": "Nízev článku 3 mockup",
        "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl. Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed elit dui, pellentesque",
        "author": "petr horejs",
        "creationDate": "3/1/2024 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 4]
    },
    {
        "idArticle": 4,
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
const movies = [
    {
        "idMovie": 1,
        "movieTitle": "Tenet",
        "director": "Christopher Nolan",
        "writer": "Christopher Nolan",
        "genre": ["Akční", "Drama", "Sci-Fi"],
        "yearOfRelease": "2020",
        "actors": ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
        "reviews": [10, 7, 8],
        "picture": "/assets/images/tenet.jpg"
    },
    {
        "idMovie": 2,
        "movieTitle": "Sedm",
        "director": "David Fincher",
        "writer": "Andrew Kevin Walker",
        "genre": ["Thriller", "Krimi", "Mysteriózní", "Psychologický", "Drama"],
        "yearOfRelease": "1995",
        "actors": ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"],
        "reviews": [10, 10, 9],
        "picture": "/assets/images/seven.jpg"
    },
    {
        "idMovie": 3,
        "movieTitle": "Interstellar",
        "director": "Christopher Nolan",
        "writer": "Christopher Nolan",
        "genre": ["Sci-Fi", "Dobrodružný", "Drama"],
        "yearOfRelease": "2014",
        "actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "reviews": [10, 9, 8],
        "picture": "/assets/images/interstellar.jpg"
    },
    {
        "idMovie": 4,
        "movieTitle": "Pulp Fiction: Historky z podsvětí",
        "director": "Quentin Tarantino",
        "writer": "Quentin Tarantino",
        "genre": ["Krimi","Drama"],
        "yearOfRelease": "1994",
        "actors": ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
        "reviews": [10, 9, 8],
        "picture": "/assets/images/pulpfiction.jpg"
    },
    {
        "idMovie": 5,
        "movieTitle": "Osm hrozných",
        "director": "Quentin Tarantino",
        "writer": "Quentin Tarantino",
        "genre": ["Western","Drama", "Thriller"],
        "yearOfRelease": "2015",
        "actors": ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"],
        "reviews": [9, 9, 7],
        "picture": "/assets/images/eightful.jpg"
    },
    {
        "idMovie": 6,
        "movieTitle": "Přelet nad kukaččím hnízdem",
        "director": "Miloš Forman",
        "writer": "Ken Kesey",
        "genre": ["Drama"],
        "yearOfRelease": "1975",
        "actors": ["Jack Nicholson", "Louise Fletcher", "William Redfield"],
        "reviews": [9, 9, 8],
        "picture": "/assets/images/kukacka.jpg"
    },
    {
        "idMovie": 7,
        "movieTitle": "Spider-Man: Paralelní světy",
        "director": "Bob Persichetti",
        "writer": "Phil Lord",
        "genre": ["Animovaný", "Akční", "Dobrodružný", "Sci-Fi"],
        "yearOfRelease": "2018",
        "actors": ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
        "reviews": [9, 9, 9],
        "picture": "/assets/images/spidey.jpg"
    },
    {
        "idMovie": 8,
        "movieTitle": "Gladiátor",
        "director": "Ridley Scott",
        "writer": "David Franzoni",
        "genre": ["Akční", "Dobrodružný", "Drama"],
        "yearOfRelease": "2000",
        "actors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "reviews": [10, 9, 9],
        "picture": "/assets/images/gladiator.jpg"
    },
    {
        "idMovie": 9,
        "movieTitle": "Troja",
        "director": "Wolfgang Petersen",
        "writer": "David Benioff",
        "genre": ["Drama", "Historický", "Romantický"],
        "yearOfRelease": "2004",
        "actors": ["Brad Pitt", "Eric Bana", "Orlando Bloom"],
        "reviews": [9, 9, 7],
        "picture": "/assets/images/troja.jpg"
    },
    {
        "idMovie": 10,
        "movieTitle": "Duna: Část druhá",
        "director": "Denis Villeneuve",
        "writer": "Jon Spaihts",
        "genre": ["Sci-Fi", "Akční", "Drama"],
        "yearOfRelease": "2024",
        "actors": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        "reviews": [10, 10, 8],
        "picture": "/assets/images/dune.jpg"
    }
];
const shows = [
    {
        "idMovie": 1,
        "movieTitle": "Jak jsem poznal vaši matku",
        "director": "Carter Bays",
        "writer": "Carter Bays",
        "genre": ["Komedie", "Romantický"],
        "yearOfRelease": "2005-2014",
        "actors": ["Josh Radnor", " Jason Segel", "Neil Patrick Harris"],
        "reviews": [10, 9, 8],
        "picture": "/assets/images/himym.jpg"
    },
    {
        "idMovie": 2,
        "movieTitle": "Hra o trůny",
        "director": "David Benioff",
        "writer": "George R.R. Martin",
        "genre": ["Fantasy", "Akční", "Dobrodružný", "Drama"],
        "yearOfRelease": "2011-2019",
        "actors": ["Peter Dinklage", "Lena Headey", "Kit Harington"],
        "reviews": [10, 9, 9],
        "picture": "/assets/images/got.jpg"
    },
    {
        "idMovie": 3,
        "movieTitle": "Šógun",
        "director": "Justin Marks",
        "writer": "Justin Marks",
        "genre": ["Drama", "Dobrodružný", "Historický", "Válečný"],
        "yearOfRelease": "2024-2025",
        "actors": ["Cosmo Jarvis", "Hirojuki Sanada", "Júka Kóri"],
        "reviews": [9, 9, 8],
        "picture": "/assets/images/shogun.jpg"
    },
    {
        "idMovie": 4,
        "movieTitle": "Kimecu no jaiba",
        "director": "Haruo Sotozaki",
        "writer": "Kojoharu Gotóge",
        "genre": ["Animovaný","Akční","Drama"],
        "yearOfRelease": "2019-2024",
        "actors": ["Akari Kitó", "Nacuki Hanae", "Hiro Šimono"],
        "reviews": [10, 9, 8],
        "picture": "/assets/images/demon.jpg"
    },
    {
        "idMovie": 5,
        "movieTitle": "Arcane ",
        "director": "Christian Linke",
        "writer": "Christian Linke",
        "genre": ["Animovaný","Akční", "Drama"],
        "yearOfRelease": "2021-2024",
        "actors": ["Hailee Steinfeld", "Kevin Alejandro", "Ella Purnell"],
        "reviews": [10,9,9],
        "picture": "/assets/images/arcane.jpg"
    },
    {
        "idMovie": 6,
        "movieTitle": "Temný případ",
        "director": "Nic Pizzolatto",
        "writer": "Nic Pizzolatto",
        "genre": ["Krimi", "Drama", "Thriller"],
        "yearOfRelease": "2014-2025",
        "actors": ["Matthew McConaughey", "Woody Harrelson", "Michelle Monaghan"],
        "reviews": [9, 9, 8],
        "picture": "/assets/images/detective.jpg"
    },
    {
        "idMovie": 7,
        "movieTitle": "Dr. House",
        "director": "David Shore",
        "writer": "Garrett Lerner",
        "genre": ["Drama"],
        "yearOfRelease": "2004-2012",
        "actors": ["Hugh Laurie", "Omar Epps", "Robert Sean Leonard"],
        "reviews": [9, 9, 9],
        "picture": "/assets/images/house.jpg"
    }
];

localStorage.setItem("articles.json", JSON.stringify(articles));
localStorage.setItem("topics.json", JSON.stringify(topics));
localStorage.setItem("movies.json", JSON.stringify(movies));
localStorage.setItem("shows.json", JSON.stringify(shows));