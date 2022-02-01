import React from 'react';
import {useDispatch} from "react-redux";
import {carToUpdate} from "../../store/carSlice";

const Car = ({car}) => {
    const {id, model, year, price,} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>{model}</div>
            <div>{year}</div>
            <div>{price}</div>
            <button onClick={()=>dispatch(carToUpdate({car}))}>update</button>
        </div>
    );
};

export {Car};