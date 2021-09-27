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
    console.log(user);
    if (user != null) {
        return (
            <div>
                <Header user={user.login}/>
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
                        <LoginOut setUser={setUser}/>
                    </Route>
                </Switch>
            </div>
        );
    }
    return (
        <Switch>
            <Route path='/'>
                <Login setUser={setUser}/>
                <Redirect to='/trending'/>
            </Route>
        </Switch>
    );
};
