import React from 'react';
import styled from './LoginOut.module.css';
import {useUser} from "../../store/userContext";
import {signOut} from "../../firebase/auth";
import {useHistory} from "react-router-dom";

export const LoginOut = () => {
    const user = useUser();
    const history = useHistory();

    const handleSubmit = async () => {
        // setUser(null);
        signOut();
        history.push('/login');
    };

    return (
        <div className={styled.loginContainer}>
            <span className={styled.loginText}>Are you leaving us so quickly? {user && `${user.email}`}???</span>
            <button className={styled.loginButton}
                    onClick={handleSubmit}>
                <span
                    className={styled.loginButtonText}>Out
                </span>
            </button>
        </div>
    );
};
