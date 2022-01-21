import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }

        postsService.getById(id).then(value => setPost({...value}));
    },[id]);

    return (
        <div>
            {post && (
                <div>
                    <h5>Id : {post.id}</h5>
                    <h4>UserID : {post.userId}</h4>
                    <h3>Title : {post.title}</h3>
                    <h4>Body : {post.body}</h4>
                    <Link to={`comments`} ><button>Comments</button></Link>
                </div>
            )}
            <Outlet/>

        </div>
    );
};

export {PostDetailsPage};