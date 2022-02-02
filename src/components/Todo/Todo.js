import React from 'react';
import {useDispatch} from "react-redux";

import css from './Todo.module.css';
import {changeStatus, todoDel} from "../../store";
import MyButton from "../MyComponents/MyButton/MyButton";
import MyInput from "../MyComponents/MyInput/MyInput";

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const {id, name, status} = todo;

    return (
        <div className={css.todoBox}>
            <MyInput type="checkbox" value={status} onChange={()=>dispatch(changeStatus({id}))}/>
            <div className={status ? css.changeStatus : ''}>{name}</div>
            <MyButton onClick={()=>dispatch(todoDel({id}))}>Delete</MyButton>

        </div>
    );
};

export {Todo};