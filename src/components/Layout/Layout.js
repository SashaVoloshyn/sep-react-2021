import React from 'react';

import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className='Layout'>

                <Outlet/>
            </div>
        </div>
    );
};


export {Layout};