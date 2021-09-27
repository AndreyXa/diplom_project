import React from 'react';
import {Link} from "react-router-dom";
import styled from './Header.module.css';

export const Header = ({user}) => {

    return (
        <>
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
                </ul>
            </nav>
        </>
    );
};
