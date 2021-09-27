import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

export const Header = ({user}) => {

    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary navbar-nav">
                <div className="navbar-brand navbar-title">
                    <span className="navbar-text2">Movies App {user}</span>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link navbar-text3"
                            to="/trending"
                            exaxt>
                            Trending
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link navbar-text3"
                            to="/movies">Movies
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link navbar-text3"
                            to="/series">TV Series
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link navbar-text3"
                            to="/search">Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link navbar-text3"
                            to="/logout">LogOut
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>

    );
};
