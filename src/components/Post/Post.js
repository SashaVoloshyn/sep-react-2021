import React from 'react';

const Post = ({post}) => {
    return (
        <div>

            <div>ID :{post.id}</div>
            <div>TITLE :{post.title}</div>
            <div>BODY :{post.body}</div>
        </div>
    );
};

export {Post};