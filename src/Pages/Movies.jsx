import React, {useEffect, useState} from 'react';
import styled from "./page.module.css";
import {SingleContent} from "../Components/SingleContext/SingleContent";
import {Pagination} from "@mui/material";
import {Genres} from "../Components/Genres/Genres";
import {useGenre} from "../helper/useGenre";

export const Movies = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);


    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`);
        if (response.ok) {
            const data = await response.json();
            setContent(data.results);
            setNumOfPages(data.total_pages);
        } else {
            alert("error" + response.status);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL]);

    const handlePageChange = (e) => {
        setPage(e);
    };

    return (
        <div >
            <span className={styled.pageTitle}>Movies</span>
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
                className={styled.pagination}
            />
        </div>
    );
};
