import {Route, Routes} from 'react-router-dom';
import {useState} from "react";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer.jsx';

import Home from './Home';
import Articles from "./articles/Articles";
import Article from "./articles/article/Article.jsx";
import Movies from './movies/Movies';
import Shows from './shows/Shows';

const articles = JSON.parse(localStorage.getItem("articles.json"));
const topics = JSON.parse(localStorage.getItem("topics.json"));


function App() {
    const [articlesData, setArticlesData] = useState(articles);
    const [topicsData, setTopicsData] = useState(topics);
    const [visiblePopUp, setVisiblePopup] = useState(false);
    const [visibleEdiPopUp, setVisibleEditPopup] = useState(false);
    const [topVisibility, setTopVisibilityPopup] = useState(false);

    function setVisibility () {
        setVisiblePopup(!visiblePopUp);
    }
    function setEditVisibility () {
        setVisibleEditPopup(!visibleEdiPopUp);
    }
    function setTopVisibility () {
        setTopVisibilityPopup(!topVisibility);
    }

  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/articles-list" element={<Articles
                      articlesData={articlesData}
                      topicsData={topicsData}
                      visiblePopUp={visiblePopUp}
                      setVisibility={setVisibility}
                      topVisibility={topVisibility}
                      setTopVisibility={setTopVisibility}
                      setArticlesData={setArticlesData}
                      setTopicsData={setTopicsData}/>} />
                  <Route path="/articles-list/movies" element={<Movies
                      articlesData={articlesData}
                      topicsData={topicsData}
                      visiblePopUp={visiblePopUp}
                      setVisibility={setVisibility}
                      topVisibility={topVisibility}
                      setTopVisibility={setTopVisibility}
                      setArticlesData={setArticlesData}
                      setTopicsData={setTopicsData}/>} />
                  <Route path="/articles-list/shows" element={<Shows
                      articlesData={articlesData}
                      topicsData={topicsData}
                      visiblePopUp={visiblePopUp}
                      setVisibility={setVisibility}
                      topVisibility={topVisibility}
                      setTopVisibility={setTopVisibility}
                      setArticlesData={setArticlesData}
                      setTopicsData={setTopicsData}/>} />
                  <Route path="/articles-list/article/:id" element={<Article
                      articlesData={articlesData}
                      setArticlesData={setArticlesData}
                      topicsData={topicsData}
                      visibleEdiPopUp={visibleEdiPopUp}
                      setVisibleEditPopup={setEditVisibility}/>} />
              </Routes>
          </div>
          <Footer />
      </>
  )
}

export default App
