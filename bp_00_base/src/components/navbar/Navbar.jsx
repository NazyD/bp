import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/" className="title">
                    MOVIE BLOG
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li>
                        <Link to="/articles-list">Seznam článků</Link>
                        <ul className="articles-categories">
                            <li>
                                <Link to="/articles-list/movies">Filmy</Link>
                            </li>
                            <li>
                                <Link to="/articles-list/shows">Seriály</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/ranking">Žebříčky</Link>
                        <ul className="ranking-categories">
                            <li>
                                <Link to="/ranking/movies">Top filmy</Link>
                            </li>
                            <li>
                                <Link to="/ranking/shows">Top seriály</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <button>darkmode (ikona)</button>
            </div>
        </div>
    );

};

export default Navbar;