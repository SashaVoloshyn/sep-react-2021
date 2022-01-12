import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import Comment from './Comment';


 let Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => {
                setComments(comments);
            })
    }, []);
    return (
        <div>
                {
                    comments.map(value => <div key={value.id}> <Comment item={value}/></div>)
                }

        </div>
    );
};

export default Comments;