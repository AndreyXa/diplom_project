import React, {useEffect} from 'react';
import {Chip} from "@material-ui/core";

export const Genres = ({
                           selectedGenres,
                           setSelectedGenres,
                           genres,
                           setGenres,
                           type,
                           setPage,
                       }) => {

    const fetchGenres = async () => {
        const response = await fetch( `https://api.themoviedb.org/3/genre/${type}/list?api_key=e9e3f515fc57336efd9167d5b156073d&language=en-US`);
        if (response.ok) {
            const data = await response.json();
            setGenres(data.genres);
        } else {
            alert("error" + response.status);
        }
    }

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, []);

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((item) => item.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres.map((genre) => (
                <Chip
                    style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    color="primary"
                    clickable
                    size="small"
                    onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres.map((genre) => (
                <Chip
                    style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    onClick={() => handleAdd(genre)}
                />
            ))}
        </div>
    );
};
