import React, {useState} from 'react';

import {userService} from "../../services/user.service";
import Posts from "../postComponents/Posts";

const UserDetails = ({details}) => {
    const [posts, setPosts] = useState([]);

    const getPosts = (id) => {
        userService.getId(id)
            .then(value => setPosts(value));
        console.log(id)
    };


    return (
        <div>
            <h4>{details.name}</h4>
            <h4>{details.username}</h4>
            <h4>{details.username}</h4>
            <h4>{details.email}</h4>
            <h4>{details.website}</h4>
            <h4>{details.phone}</h4>
            <button onClick={()=>getPosts(details.id)} >click me</button>

            <div>{posts.map(value => <Posts key={value.id} item={value}/>)} </div>
        </div>
    );
};

export default UserDetails;