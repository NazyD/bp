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
                    </li>
                    <li>
                        <Link to="/movies-articles">Filmy</Link>
                    </li>
                    <li>
                        <Link to="/shows-articles">Seriály</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <p>jazyk/darkmode</p>
            </div>
        </div>
    );

};

export default Navbar;