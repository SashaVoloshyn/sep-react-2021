import React from 'react';

const UserPosts = ({posts}) => {
    return (
        <div>
            <div>Id : {posts.id}</div>
            <div>userId : {posts.userId}</div>
            <div>Title : {posts.title}</div>
            <div>Body : {posts.body}</div>
            <hr/>
        </div>
    );
};

export default UserPosts;