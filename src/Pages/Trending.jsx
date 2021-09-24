import React, {useEffect, useState} from 'react';
import {SingleContent} from "../Components/SingleContext/SingleContent";
import styled from "./page.module.css";
import {Pagination} from "@mui/material";

export const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();


    const fetchTrending = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        if (response.ok) {
            const data = await response.json();
            setContent(data.results);
            setNumOfPages(data.total_pages);
        } else {
            alert("error" + response.status);
        }
    }

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
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
                className={styled.pagination}
            />
        </div>
    );
};
