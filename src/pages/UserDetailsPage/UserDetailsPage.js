import React from 'react';
import {Outlet} from "react-router-dom";

const UserDetailsPage = () => {
    return (
        <div>
            <h1>UserDetailsPage</h1>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};