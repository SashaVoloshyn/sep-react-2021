import React from 'react';
import {Outlet} from "react-router-dom";


const UsersPage = () => {
    return (
        <div>
            <h1>UsersPage</h1>
            <Outlet/>
        </div>
    );
};

export {UsersPage};