import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {


    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-title">
                    MOVIE BLOG
                </Link>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li className="nav-item">
                        <Link to="/articles-list">Seznam článků</Link>
                        <ul className="submenu">
                            <li>
                                <Link to="/articles-list/movies">Filmy</Link>
                            </li>
                            <li>
                                <Link to="/articles-list/shows">Seriály</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/ranking">Žebříčky</Link>
                        <ul className="submenu">
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
                <button className="theme-toggle" onClick={props.toggleTheme}>
                    {props.theme === "light" ? "Temný motiv" : "Světlý motiv"}</button>
            </div>
        </div>
    );

};

export default Navbar;