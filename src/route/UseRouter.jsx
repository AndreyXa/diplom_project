import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import {Trending} from "../Pages/Trending";
import {Movies} from "../Pages/Movies";
import {Series} from "../Pages/Series";
import {Search} from "../Pages/Search";
import {Login} from "../Pages/Login";
import {Header} from "../Components/Header/Header";
import {LoginOut} from "../Components/LoginOut/LoginOut";
import {listenToUserChange} from "../firebase/auth";


export const UseRouter = () => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if (!user) history.push("/login");
        if (user) history.push("/trending");
    }, [user]);

    useEffect(()=>{
        listenToUserChange(setUser);
    },[]);

    if (user === null) {
        return (
            <Switch>
                <Route path='/login'>
                   <Login/>
                </Route>
            </Switch>
        );
    }
    return (
        <>
            <Header />
            <Switch>
                <Route path='/trending'>
                    <Trending/>
                </Route>
                <Route path='/movies'>
                    <Movies/>
                </Route>
                <Route path='/series'>
                    <Series/>
                </Route>
                <Route path='/search'>
                    <Search/>
                </Route>
                <Route path='/logout'>
                    <LoginOut/>
                </Route>
            </Switch>
        </>
    );
};
