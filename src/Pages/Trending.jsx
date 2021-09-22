import React, {useEffect, useState} from 'react';
import axios from "axios";
import {SingleContent} from "../Components/SingleContext/SingleContent";
import styled from "./page.module.css";
import {Pagination} from "@mui/material";

export const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]);

    const handlePageChange = (e) => {
        setPage(e);
    };

    return (
        <div >
            <span className={styled.pageTitle}>Trending</span>
            <div className={styled.trending}>
                {
                    content && content.map((item) => (
                        <SingleContent
                            key={item.id}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type={item.media_type}
                            vote_average={item.vote_average}/>
                    ))
                }
            </div>
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={10}
                color="primary"
                hideNextButton
                hidePrevButton
                className={styled.pagination}
            />
        </div>
    );
};
