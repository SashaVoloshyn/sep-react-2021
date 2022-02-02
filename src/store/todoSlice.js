import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false});

        },

        changeStatus: (state, action) => {
            const todoStatus = state.todos.find(todo => todo.id === action.payload.id);
            todoStatus.status = !todoStatus.status;
        },
        todoDel:(state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);



        }

    }


});

const todoReducer = todoSlice.reducer;

export const {addTodo,changeStatus ,todoDel} = todoSlice.actions;
export default todoReducer;