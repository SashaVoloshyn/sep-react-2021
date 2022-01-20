import React from 'react';

const User = ({item}) => {

    return (
        <div>
            <h3>{item.name}  {item.username}   {item.email}</h3>
        </div>
    );
};

export default User;