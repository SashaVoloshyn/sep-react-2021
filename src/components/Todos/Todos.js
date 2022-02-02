import React from 'react';
import {useSelector} from "react-redux";

import {Todo} from "../Todo/Todo";
import css from "./Todos.module.css";

const Todos = () => {
    const {todos} = useSelector(state => state.todoRed);

    return (
        <div className={css.todos}>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};