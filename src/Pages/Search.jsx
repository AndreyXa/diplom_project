import React, {useEffect, useState} from 'react';
import {Button, Tab, Tabs, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {SingleContent} from "../Components/SingleContext/SingleContent";
import {Pagination} from "@mui/material";
import styled from "./page.module.css";

export const Search = () => {

    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
            const data = await response.json();
            setContent(data.results);
            setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchSearch();

    }, [type, page]);


    return (
        <div>
            <span className={styled.pageTitle}>Search</span>
            <div>
                <TextField
                    style={{flex: 1}}
                    className="searchBox"
                    label="Search"
                    variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    onClick={fetchSearch}
                    variant="contained"
                    style={{marginLeft: 10}}
                >
                    <SearchIcon fontSize="large"/>
                </Button>
            </div>

            <Tabs
                value={type}
                indicatorColor="primary"
                textColor="primary"
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
                style={{paddingBottom: 5}}
                aria-label="disabled tabs example"
            >
                <Tab style={{width: "50%"}} label="Search Movies"/>
                <Tab style={{width: "50%"}} label="Search TV Series"/>
            </Tabs>

            <div className={styled.trending}>
                {content &&
                content.map((c) => (
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type={type ? "tv" : "movie"}
                        vote_average={c.vote_average}
                    />
                ))}
            </div>
            <Pagination
                onChange={(e) => setPage(e.target.textContent)}
                count={numOfPages}
                color="primary"
                hideNextButton
                hidePrevButton
                className={styled.pagination}
            />
        </div>
    );
};
