// copy code below to console in the browserr to reload data when problems with data occurs
localStorage.clear();

const articles = [
    {
        "idArticle": 1,
        "title": "Tenet",
        "text": "/articles/tenet-article.txt",
        "author": "nazarij dovžanyn",
        "creationDate": "30/8/2024 19:42:29",
        "editDate": "",
        "review": "1/5",
        "topics": [1],
        "picture": "/assets/images/tenet.jpg"
    },
    {
        "idArticle": 2,
        "title": "Spiderman: Paralelní světy",
        "text": "/articles/spiderman-article.txt",
        "author": "martin dyntr",
        "creationDate": "3/9/2024 15:49:29",
        "editDate": "",
        "review": "2/5",
        "topics": [1, 2],
        "picture": "/assets/images/spidey.jpg"
    },
    {
        "idArticle": 3,
        "title": "Sedm",
        "text": "/articles/seven-article.txt",
        "author": "petr horejs",
        "creationDate": "3/1/2024 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 5],
        "picture": "/assets/images/seven.jpg"
    },
    {
        "idArticle": 4,
        "title": "Pulp Fiction",
        "text": "/articles/pulpfiction-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 5,2],
        "picture": "/assets/images/pulpfiction.jpg"
    },
    {
        "idArticle": 5,
        "title": "Interstellar",
        "text": "/articles/interstellar-article.txt",
        "author": "petr lubas",
        "creationDate": "3/12/2021 15:12:29",
        "editDate": "",
        "review": "",
        "topics": [1, 5],
        "picture": "/assets/images/interstellar.jpg"
    },
    {
        "idArticle": 6,
        "title": "Gladiator",
        "text": "/articles/gladiator-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 5],
        "picture": "/assets/images/gladiator.jpg"
    },
    {
        "idArticle": 7,
        "title": "Duna část druhá",
        "text": "/articles/dune-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [1, 5],
        "picture": "/assets/images/dune.jpg"
    },
    {
        "idArticle": 8,
        "title": "Shogun",
        "text": "/articles/shogun-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [3, 5],
        "picture": "/assets/images/shogun.jpg"
    },
    {
        "idArticle": 9,
        "title": "Arcane",
        "text": "/articles/arcane-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [3, 5],
        "picture": "/assets/images/arcane.jpg"
    },
    {
        "idArticle": 10,
        "title": "Demon slayer",
        "text": "/articles/demon-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [3, 5],
        "picture": "/assets/images/demon.jpg"
    },
    {
        "idArticle": 11,
        "title": "Hra o trůny",
        "text": "/articles/got-article.txt",
        "author": "petr lubas",
        "creationDate": "3/9/2021 15:49:29",
        "editDate": "",
        "review": "",
        "topics": [3, 5],
        "picture": "/assets/images/got.jpg"
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
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
        "id": 9,
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
        "id": 10,
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
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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