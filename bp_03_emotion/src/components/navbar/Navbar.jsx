import {Link} from 'react-router-dom';
import {useTheme} from "@emotion/react";
import ThemeToggleButton from "../../styles/NavbarStyle.jsx";

const Navbar = (props) => {
    const currentTheme = useTheme();

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
                <ThemeToggleButton theme={currentTheme} onClick={props.toggleTheme}>
                    {props.theme === "light" ? "Temný motiv" : "Světlý motiv"}
                </ThemeToggleButton>
            </div>
        </div>
    );

};

export default Navbar;