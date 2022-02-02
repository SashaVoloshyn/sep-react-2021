import React from 'react';
import {useDispatch} from "react-redux";

import css from './Todo.module.css';
import {changeStatus, todoDel} from "../../store";

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const {id, name, status} = todo;

    return (
        <div className={css.todoBox}>
            <input type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
            <div className={status ? css.changeStatus : ''}>{name}</div>
            <button onClick={()=>dispatch(todoDel({id}))}>Delete</button>

        </div>
    );
};

export {Todo};