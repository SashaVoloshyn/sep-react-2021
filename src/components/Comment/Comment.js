import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>ID :{comment.id}</div>
            <div>NAME :{comment.name}</div>
            <div>EMAIL :{comment.email}</div>
            <div>BODY :{comment.body}</div>

        </div>
    );
};

export {Comment};