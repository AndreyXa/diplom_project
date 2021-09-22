import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Movies App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/"
                        exaxt>
                        Trending
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/movies">Movies
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/series">TV Series
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        to="/search">Search
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
