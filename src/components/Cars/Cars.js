import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store/carSlice";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, status, error} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(getAllCars())
    }, []);



    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};