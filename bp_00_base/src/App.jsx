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


function App() {
    const [articlesData, setArticlesData] = useState(articles);
    const [visiblePopUp, setVisiblePopup] = useState(false);

    function setVisibility () {
        setVisiblePopup(!visiblePopUp);
    }

  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/articles-list" element={<Articles articlesData={articlesData} visiblePopUp={visiblePopUp} setVisibility={setVisibility} setArticlesData={setArticlesData}/>} />
                  <Route path="/movies-articles" element={<Movies />} />
                  <Route path="/shows-articles" element={<Shows />} />
                  <Route path="/articles-list/article/:id" element={<Article articlesData={articlesData} setArticlesData={setArticlesData}/>} />
              </Routes>
          </div>
          <Footer />
      </>
  )
}

export default App
