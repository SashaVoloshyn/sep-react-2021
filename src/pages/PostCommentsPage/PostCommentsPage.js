import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Comments from "../../components/Comments/Comments";

const PostCommentsPage = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {

        postsService.getByIdComments(id).then(value => setComments(value));
    },[]);

    return (
        <div>
            {comments.map(value => <Comments key={value.id} comments={value}/>)}
        </div>
    );
};

export  {PostCommentsPage};