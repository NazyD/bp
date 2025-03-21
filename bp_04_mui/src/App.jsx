import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from "react";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer.jsx';
import Home from './Home';
import Articles from "./articles/Articles";
import Article from "./articles/article/Article.jsx";
import Movies from './movies/Movies';
import Shows from './shows/Shows';
import Rank from "./rank/Rank.jsx";
import RankDef from "./rank/RankDef.jsx";

import {ThemeProvider, CssBaseline, Box} from "@mui/material";
import {light, dark} from './styles/createTheme.jsx'
import ScrollbarStyles from "./styles/ScrollbarStyles.jsx";
import Contact from "./contact/Contact.jsx";

const articles = JSON.parse(localStorage.getItem("articles.json"));
const topics = JSON.parse(localStorage.getItem("topics.json"));
const movies = JSON.parse(localStorage.getItem("movies.json"));
const shows = JSON.parse(localStorage.getItem("shows.json"));


function App() {
    const [articlesData, setArticlesData] = useState(articles);
    const [topicsData, setTopicsData] = useState(topics);
    const [moviesData, setMoviesData] = useState(movies);
    const [showsData, setShowsData] = useState(shows);
    const [visiblePopUp, setVisiblePopup] = useState(false);
    const [visibleEditPopUp, setVisibleEditPopup] = useState(false);
    const [topVisibility, setTopVisibilityPopup] = useState(false);
    const [theme, setTheme] = useState("light");

    console.log(theme);

    function setVisibility() {
        setVisiblePopup(!visiblePopUp);
    }

    function setEditVisibility() {
        setVisibleEditPopup(!visibleEditPopUp);
    }

    function setTopVisibility() {
        setTopVisibilityPopup(!topVisibility);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <ThemeProvider theme={theme === "light" ? light : dark}>
                <CssBaseline/>
                <ScrollbarStyles/>
                <Navbar theme={theme} toggleTheme={toggleTheme}/>
                <Box
                    sx={{
                        paddingBottom: {
                            md: '60px',
                            xs: '145px'
                        }
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/articles-list" element={
                            <Articles
                                articlesData={articlesData}
                                topicsData={topicsData}
                                visiblePopUp={visiblePopUp}
                                setVisibility={setVisibility}
                                topVisibility={topVisibility}
                                setTopVisibility={setTopVisibility}
                                setArticlesData={setArticlesData}
                                setTopicsData={setTopicsData}/>
                        }/>
                        <Route path="/articles-list/movies" element={
                            <Movies
                                articlesData={articlesData}
                                topicsData={topicsData}
                                visiblePopUp={visiblePopUp}
                                setVisibility={setVisibility}
                                topVisibility={topVisibility}
                                setTopVisibility={setTopVisibility}
                                setArticlesData={setArticlesData}
                                setTopicsData={setTopicsData}/>
                        }/>
                        <Route path="/articles-list/shows" element={
                            <Shows
                                articlesData={articlesData}
                                topicsData={topicsData}
                                visiblePopUp={visiblePopUp}
                                setVisibility={setVisibility}
                                topVisibility={topVisibility}
                                setTopVisibility={setTopVisibility}
                                setArticlesData={setArticlesData}
                                setTopicsData={setTopicsData}/>
                        }/>
                        <Route path="/articles-list/article/:id" element={
                            <Article
                                articlesData={articlesData}
                                setArticlesData={setArticlesData}
                                topicsData={topicsData}
                                visibleEditPopUp={visibleEditPopUp}
                                setVisibleEditPopup={setEditVisibility}/>
                        }/>
                        <Route path="/ranking" element={<Rank/>}/>
                        <Route path="/ranking/movies" element={
                            <RankDef
                                rankingData={moviesData}
                                setRankingData={setMoviesData}
                                isMovie={true}/>
                        }/>
                        <Route path="/ranking/shows" element={
                            <RankDef
                                rankingData={showsData}
                                setRankingData={setShowsData}
                                isMovie={false}/>
                        }/>
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Box>
                <Footer/>
            </ThemeProvider>
        </>
    )
}

export default App
