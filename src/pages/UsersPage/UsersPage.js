import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import Users from "../../components/Users/Users";
import css from './UsersPage.module.css';


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value));
    }, []);

    return (
        <div className={css.usersWrap}>
            <div className={css.users}>
                <h1>Users :</h1>
                {users.map(value => <Users key={value.id} user={value}/>)}
            </div>
            <div className={css.userDetails}><Outlet/></div>
        </div>
    );
};

export {UsersPage};