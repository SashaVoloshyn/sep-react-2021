import React from 'react';
import {Link} from "react-router-dom";

const Users = ({user}) => {
    return (
        <div>
            <h3>
                Name : {user.name} --- {user.username}
                <Link to={user.id.toString()} state={user}><button>User Details</button></Link>
                <Link to={`${user.id.toString()}/albums`}><button>Albums</button></Link>
            </h3>
        </div>
    );
};

export default Users;