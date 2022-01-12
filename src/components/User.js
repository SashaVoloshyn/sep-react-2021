import React from 'react';

const User = ({item}) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <h3>{item.username}</h3>
            <h5>City :{item.address.city}</h5>

        </div>
    );
};

export default User;