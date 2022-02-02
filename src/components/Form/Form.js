import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {updateCarById} from "../../store/carSlice";

const Form = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const {handleSubmit, reset, setValue, register} = useForm();

    const submit = (data) => {
        dispatch(updateCarById({id:carForUpdate.id, car:data}))
        reset()
    }
    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>   Model : <input type="text" placeholder={'enter the model'} {...register('model')}/></label>
            <label>   Price : <input type="text" placeholder={'enter the price'} {...register('price')}/></label>
            <label>   Year :  <input type="text" placeholder={'enter the year'} {...register('year')}/></label>
            <button>Update</button>
        </form>
    );
};

export {Form};