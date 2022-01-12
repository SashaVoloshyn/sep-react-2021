import React from 'react';

const Post = ({item}) => {
    return (
        <div>
           <h6>Post : {item.id}</h6>
            <p>{item.title}</p>
        </div>
    );
};

export default Post;