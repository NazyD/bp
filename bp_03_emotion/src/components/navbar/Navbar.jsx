import {Link} from 'react-router-dom';
import {useTheme} from "@emotion/react";
import {
    NavbarContainer,
    NavbarLeft,
    NavbarCenter,
    NavItem,
    NavbarRight,
    Submenu,
    ThemeToggleButton
} from "./NavbarStyle.jsx";

const Navbar = (props) => {
    const currentTheme = useTheme();

    return (
        <NavbarContainer>
            <NavbarLeft>
                <Link to="/" className="navbar-title">
                    MOVIE BLOG
                </Link>
            </NavbarLeft>
            <NavbarCenter>
                <ul>
                    <NavItem>
                        <Link to="/articles-list">Seznam článků</Link>
                        <Submenu>
                            <li>
                                <Link to="/articles-list/movies">Filmy</Link>
                            </li>
                            <li>
                                <Link to="/articles-list/shows">Seriály</Link>
                            </li>
                        </Submenu>
                    </NavItem>
                    <NavItem>
                        <Link to="/ranking">Žebříčky</Link>
                        <Submenu>
                            <li>
                                <Link to="/ranking/movies">Top filmy</Link>
                            </li>
                            <li>
                                <Link to="/ranking/shows">Top seriály</Link>
                            </li>
                        </Submenu>
                    </NavItem>
                </ul>
            </NavbarCenter>
            <NavbarRight>
                <ThemeToggleButton theme={currentTheme} onClick={props.toggleTheme}>
                    {props.theme === "light" ? "Temný motiv" : "Světlý motiv"}
                </ThemeToggleButton>
            </NavbarRight>
        </NavbarContainer>
    );

};

export default Navbar;