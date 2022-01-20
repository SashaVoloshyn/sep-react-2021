import React from 'react';
import {Link} from "react-router-dom";

const Users = ({user}) => {
    return (
        <div>
            <h3>
                Name : {user.name} --- {user.username}
                <button><Link to={user.id.toString()} state={user}>User Details</Link></button>
                <button><Link to={`${user.id.toString()}/albums`}>Albums</Link></button>
            </h3>
        </div>
    );
};

export default Users;