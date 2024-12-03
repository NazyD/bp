import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" :"light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        // we can use sessionStorage... instead of localStorage just for the session until the tab is closed
    }

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
                <button className="theme-toggle" onClick={toggleTheme}>{theme === "light" ? "Temný motiv" : "Světlý motiv"}</button>
            </div>
        </div>
    );

};

export default Navbar;