import React from 'react';

import User from "./User";

const Users = ({users}) => {
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}

        </div>
    );
};

export default Users;