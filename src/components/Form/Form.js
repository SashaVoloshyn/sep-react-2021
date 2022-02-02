import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";

const Form = () => {

const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch(addTodo({todo:event.target[0].value}));
        event.target.reset();

    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'todoInput'}/>
            <button>Save</button>

        </form>
    );
};

export {Form};