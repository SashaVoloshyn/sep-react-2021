import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <h3> Title : {post.title} <button><Link to={post.id.toString()} state={post}>Post Details</Link></button></h3>
        </div>
    );
};

export default Post;