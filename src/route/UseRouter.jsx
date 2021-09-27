import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Trending} from "../Pages/Trending";
import {Movies} from "../Pages/Movies";
import {Series} from "../Pages/Series";
import {Search} from "../Pages/Search";
import {Login} from "../Pages/Login";
import {Header} from "../Components/Header/Header";
import {LoginOut} from "../Components/LoginOut/LoginOut";


export const UseRouter = () => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(true);
    console.log(user);
    if (user === null) {
        return (
                <Switch>
                    <Route path='/'>
                        {
                            auth ? <Login setUser={setUser}/> : <Redirect to='/trending'/>
                        }
                    </Route>
                </Switch>
        );
    }
    return (
        <>
            <Header user={user.name}/>
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
                    <LoginOut user={user.name} setUser={setUser}/>
                </Route>
            </Switch>
        </>
    );
};
