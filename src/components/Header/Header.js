import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <Link to="cars">cars</Link>
            <Link to="users">users</Link>
            <Link to="posts">posts</Link>
            <Link to="comments">comments</Link>
        </div>
    );
};


export {Header};