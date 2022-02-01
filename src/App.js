import React, {useReducer} from "react";

import './App.css';
import {Cats, Dogs, Form} from "./components";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]};
        case'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
        case 'addDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]};
        case'delDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
        default:
            return state;
    }
};

function App() {
    const [{cats,dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div className='app'>
            <Form dispatch={dispatch}/>

            <div className="wrap">
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
