import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Container} from "@mui/material";
import {UseRouter} from "./route/UseRouter";

export const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <UseRouter/>
            </Container>
        </BrowserRouter>
    );
};

