import React, {useRef} from 'react';

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();

    const submit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    const saveCat = () => {
        dispatch({type :'addCat', payload:{cat:catInput.current.value}})
    };

    const saveDog = () => {
        dispatch({type :'addDog', payload:{dog:dogInput.current.value}})
    };

    return (
        <form onSubmit={submit}>
            <label>Cats : <input type="text" ref={catInput}/></label>
            <button onClick={saveCat}>Save cat</button>


            <label>Dogs : <input type="text" ref={dogInput}/></label>
            <button onClick={saveDog}>Save dog</button>

        </form>
    );
};

export {Form};