import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import UserPosts from "../../components/UserPosts/UserPosts";

const UserPostsPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        usersService.getByIdPosts(id).then(value => setPosts(value));
    },[]);

    return (
        <div>
            {posts.map(value => <UserPosts key={value.id} posts={value}/>)}
        </div>
    );
};

export  {UserPostsPage};