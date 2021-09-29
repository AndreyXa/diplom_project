import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from './Header.module.css';
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../Theme/theme";
import {GlobalStyles} from "../Theme/globalStyles";

export const Header = ({user}) => {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <nav className={styled.navbar}>
                <div className={styled.navbarTitle}>
                    <span className={styled.navbarTextTitle}>Movies App {user}</span>
                </div>
                <ul className={styled.navbarList}>
                    <li className={styled.navbarItem}>
                        <Link
                            className={styled.navbarLink}
                            to="/trending">
                            Trending
                        </Link>
                    </li>
                    <li className={styled.navbarItem}>
                        <Link
                            className={styled.navbarLink}
                            to="/movies">Movies
                        </Link>
                    </li>
                    <li className={styled.navbarItem}>
                        <Link
                            className={styled.navbarLink}
                            to="/series">TV Series
                        </Link>
                    </li>
                    <li className={styled.navbarItem}>
                        <Link
                            className={styled.navbarLink}
                            to="/search">Search
                        </Link>
                    </li>
                    <li className={styled.navbarItem}>
                        <Link
                            className={styled.navbarLink}
                            to="/logout">LogOut
                        </Link>
                    </li>
                    <li className={styled.navbarItem}>
                        <button className={styled.buttonClick} onClick={themeToggler}>Switch Theme</button>
                    </li>
                </ul>
            </nav>
        </ThemeProvider>
    );
};
