import React from 'react';
import { Badge } from "@material-ui/core";
import {img_300, unavailable} from "../../config/config";
import styled from './SingleContent.module.css';

export const SingleContent = ({
      id,
      poster,
      title,
      date,
      media_type,
      vote_average,
  }) => {
    return (
        <div className={styled.media}>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <img className={styled.poster}
                 src={ poster ? `${img_300}/${poster}`: unavailable}/>
            <b className={styled.title}>{title}</b>
            <span className={styled.subTitle}>
                {media_type === "tv" ? "TV Series" : "Movie"}
            <span className={styled.subTitle}>{date}</span>
            </span>
        </div>
    );
};