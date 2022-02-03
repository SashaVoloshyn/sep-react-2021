import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/commentSlice";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const {comments,status,error} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllComments())
    },[])

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {Comments};