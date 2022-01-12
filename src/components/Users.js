import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import User from './User';


const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUsers(users);
            })
    }, []);

    return (
        <div>
                {
                    users.map(value => <div key={value.id}><User item={value}/></div>)
                }
        </div>
    );
};

export default Users;