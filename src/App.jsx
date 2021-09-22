import React from 'react';
import {Header} from "../src/Components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@mui/material";
import {Trending} from "./Pages/Trending";
import {Movies} from "./Pages/Movies";
import {Series} from "./Pages/Series";
import {Search} from "./Pages/Search";

export const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div>
                <Container>
                    <Switch>
                        <Route path='/' exact component={Trending}/>
                        <Route path='/movies' component={Movies}/>
                        <Route path='/series' component={Series}/>
                        <Route path='/search' component={Search}/>
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>

    );
};

