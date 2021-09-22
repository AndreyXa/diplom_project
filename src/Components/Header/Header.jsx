import React from 'react';
import styled from './Header.module.css';

export const Header = () => {
    return (
        <div>
            <span
                className={styled.header}
            >Movies App</span>
        </div>
    );
};
