import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            <div>Id :   {comments.id}</div>
            <div>PostId :   {comments.postId}</div>
            <div>Name :   {comments.name}</div>
            <div>Body :   {comments.body}</div>
            <hr/>
        </div>
    );
};

export default Comments;