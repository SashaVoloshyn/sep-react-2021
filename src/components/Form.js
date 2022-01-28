import React, {useReducer} from 'react';

const reducer = (state, action) => {

    switch (action.type) {
        case 'catDog':
            return {
                ...state,
                [action.field]: action.payload
            };

        default:
            return state;
    }

}

const Form = () => {

    const [formState, dispatch] = useReducer(reducer,{dog:'dog', cat: 'cat'});

    const onSubmit = (event) => {
        event.preventDefault();
        let formName = event.target[0].value;
        console.log(formName);

    };
    
    const onChange = (event) => {
        dispatch({
            type:'catDog',
            field: event.target.name,
            payload: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Dog :
                    <input type='text'
                           name={'dog'}
                           value={formState.dog}
                           onChange={onChange}

                    />
                </label>
                <button>send</button>
            </form>
            <form onSubmit={onSubmit}>
                <label>
                    Cat:
                    <input type='text'
                           name={'cat'}
                           value={formState.cat}
                           onChange={onChange}

                    />
                </label>
                <button>send</button>
            </form>
            <div> {JSON.stringify(formState)}</div>



        </div>
    );
};

export default Form;