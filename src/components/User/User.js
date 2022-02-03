import React from 'react';

const User = ({user}) => {
    return (
        <div>

            <div>NAME :{user.name}</div>
            <div>USERNAME :{user.username}</div>
            <div>iD :{user.id}</div>

        </div>
    );
};

export {User};