import {useEffect} from 'react';
import {useState} from 'react';
import React from 'react';

import Post from './Post';

const Posts = () => {
    let [posts , setPosts] = useState([]);



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                setPosts(posts);
            })
    }, []);

    return (
        <div>
                {
                    posts.map(value => <h4 key={value.id}><Post item={value}/></h4>)
                }
        </div>
    );
};

export default Posts;