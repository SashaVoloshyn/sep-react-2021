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
                    posts.map(value => <div key={value.id}><Post item={value}/></div>)
                }
        </div>
    );
};

export default Posts;