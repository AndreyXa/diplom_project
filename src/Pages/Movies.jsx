import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "./page.module.css";
import {SingleContent} from "../Components/SingleContext/SingleContent";
import {Pagination} from "@mui/material";
import {Genres} from "../Components/Genres/Genres";
import {useGenre} from "../hooks/useGenre";

export const Movies = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=e9e3f515fc57336efd9167d5b156073d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL]);

    const handlePageChange = (e) => {
        setPage(e);
    };

    return (
        <div >
            <span>Discover Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className={styled.trending}>
                {
                    content && content.map((item) => (
                        <SingleContent
                            key={item.id}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type="movie"
                            vote_average={item.vote_average}/>
                    ))
                }
            </div>
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
            />
        </div>
    );
};
