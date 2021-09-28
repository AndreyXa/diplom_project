import React from 'react';
import { Badge } from "@material-ui/core";
import unavailable from "../../assets/unavailable.jpeg";
import styled from './SingleContent.module.css';
import {TransitionsModal} from "../Modal/TransitionsModal";


export const SingleContent = ({
      id,
      poster,
      title,
      date,
      media_type,
      vote_average,
  }) => {
    return (
        <TransitionsModal media_type={media_type} id={id}>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <img className={styled.poster}
                 src={ poster ? `https://image.tmdb.org/t/p/w300/${poster}`: unavailable}
            />
            <b className={styled.title}>{title}</b>
            <span className={styled.subTitle}>
                {media_type === "tv" ? "TV Series" : "Movie"}
            <span className={styled.subTitle}>{date}</span>
            </span>
        </TransitionsModal>
    );
};
