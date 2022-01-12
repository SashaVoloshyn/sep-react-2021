import React from 'react';

const Comment = ({item}) => {
    return (
        <div>
            <h5>Comment : {item.id}</h5>
            <p>{item.body}</p>
        </div>
    );
};

export default Comment;