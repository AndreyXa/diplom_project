import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Container} from "@mui/material";
import {UseRouter} from "./route/UseRouter";
import {UserProvider} from "./store/userContext";


export const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Container>
                    <UseRouter/>
                </Container>
            </BrowserRouter>
        </UserProvider>
    );
};

