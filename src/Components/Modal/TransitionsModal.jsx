import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import styled from './TransitionsModal.module.css';
import {useEffect, useState} from "react";
import {img_500, unavailable, unavailableLandscape} from "../../config/config";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

export const TransitionsModal = ({children, media_type, id}) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        const response = await fetch(  `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setContent(data);
        } else {
            alert("error" + response.status);
        }
    }

    const fetchVideo = async () => {
        const response = await fetch(  `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setVideo(data.results[0]?.key);
        } else {
            alert("error" + response.status);
        }
    }

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);

    return (
        <div>
            <div onClick={handleOpen} className={styled.media}>{children}</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {content && (
                            <div className={styled.paper}>
                                <div className={styled.ContentModal}>
                                    <img
                                        src={
                                            content.poster_path
                                                ? `${img_500}/${content.poster_path}`
                                                : unavailable
                                        }
                                        className={styled.ContentModal__portrait}
                                    />
                                    <img
                                        src={
                                            content.backdrop_path
                                                ? `${img_500}/${content.backdrop_path}`
                                                : unavailableLandscape
                                        }
                                        className={styled.ContentModal__landscape}
                                    />
                                    <div className={styled.ContentModal__about}>
                  <span className={styled.ContentModal__title}>
                      {content.title || content.name} {" "}
                      {content.release_date}
                  </span>
                                        <span className={styled.ContentModal__description}>
                    {content.overview}

                  </span>

                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            target="__blank"
                                            href={`https://www.youtube.com/watch?v=${video}`}
                                        >
                                            Watch the Trailer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}