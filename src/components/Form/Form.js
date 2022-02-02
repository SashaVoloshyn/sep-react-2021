import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";
import MyInput from "../MyComponents/MyInput/MyInput";
import MyButton from "../MyComponents/MyButton/MyButton";

const Form = () => {

const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        dispatch(addTodo({todo:event.target[0].value}));
        event.target.reset();

    }

    return (
        <form onSubmit={submit}>
            <MyInput type="text" name={'todoInput'}/>
            <MyButton>Save</MyButton>

        </form>
    );
};

export {Form};