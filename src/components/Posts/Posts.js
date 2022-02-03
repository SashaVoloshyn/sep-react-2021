import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/postSlice";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts,status,error} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPosts())
    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};