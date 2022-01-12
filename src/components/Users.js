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
                    users.map(value => <h3 key={value.id}><User item={value}/></h3>)
                }
        </div>
    );
};

export default Users;