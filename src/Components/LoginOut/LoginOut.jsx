import React, {useState} from 'react';
import styled from './LoginOut.module.css';

export const LoginOut = ({setUser}) => {

    const handleSubmit = () => {
        setUser(null);
    };

    return (
        <div className={styled.loginContainer}>
            <span className={styled.loginText}>Are you leaving us so quickly?</span>
            <button className={styled.loginButton}
                    onClick={handleSubmit}>
                <span
                    className={styled.loginButtonText}>Out
                </span>
            </button>
        </div>
    );
};
