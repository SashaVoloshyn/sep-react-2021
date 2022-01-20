import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <Link to="users">users</Link>
            <Link to="posts">posts</Link>
        </div>
    );
};

export {Header};