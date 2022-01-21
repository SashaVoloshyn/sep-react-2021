import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <h3> Title : {post.title} <Link to={post.id.toString()} state={post}><button>Post Details</button></Link></h3>
        </div>
    );
};

export default Post;