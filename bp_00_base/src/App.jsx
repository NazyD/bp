import {Route, Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer.jsx';

import Home from './Home';
import Articles from "./articles/Articles";
import Article from "./articles/article/Article.jsx";
import Movies from './movies/Movies';
import Shows from './shows/Shows';

function App() {

  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/articles-list" element={<Articles />} />
                  <Route path="/movies-articles" element={<Movies />} />
                  <Route path="/shows-articles" element={<Shows />} />
                  <Route path="/articles-list/article" element={<Article />} />
              </Routes>
          </div>
          <Footer />
      </>
  )
}

export default App
