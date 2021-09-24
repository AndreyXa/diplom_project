import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Container} from "@mui/material";
import {UseRouter} from "./route/UseRouter";

export const App = () => {

    return (
        <BrowserRouter>
            {/*<Header/>*/}
            <div>
                <Container>
                    <UseRouter/>
                    {/*<Switch>*/}
                    {/*    <Route path='/' exact>*/}
                    {/*        <Trending/>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/movies'>*/}
                    {/*        <Movies/>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/series'>*/}
                    {/*        <Series/>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/search'>*/}
                    {/*        <Search/>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/login'>*/}
                    {/*        {*/}
                    {/*            user === null ? <Login setUser={setUser}/> : <Redirect to='/' />*/}
                    {/*        }*/}
                    {/*    </Route>*/}
                    {/*</Switch>*/}
                </Container>
            </div>
        </BrowserRouter>

    );
};

