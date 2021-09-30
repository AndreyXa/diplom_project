import React from 'react';
import styled from './LoginOut.module.css';
import {useUser} from "../../store/userContext";
import {signOut} from "../../firebase/auth";

export const LoginOut = () => {
    const user = useUser();

    const handleSubmit = async () => {
        // setUser(null);
        signOut();
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
