import React, {useReducer} from "react";

import './App.css';


const reducer = (state,action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1};
        case 'dec':
            return {...state, count1: state.count1 - 1};
        case 'res':
            return {...state, count1: action.payload};
        case 'inc2':
            return {...state, count2: state.count2 + 2};
        case 'dec2':
            return {...state, count2: state.count2 - 2};
        case 'res2':
            return {...state, count2: action.payload};
        case 'inc3':
            return {...state, count3: state.count3 + 3};
        case 'dec3':
            return {...state, count3: state.count3 - 3};
        case 'res3':
            return {...state, count3: action.payload};
        default:
            return state;
    }


};


    function App() {

        const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

        return (
            <div className="App">
                <div>
                    <div>Count1 : {state.count1}</div>
                    <button onClick={()=>dispatch({type : 'inc'})}>Inc</button>
                    <button onClick={()=>dispatch({type : 'dec'})}>Dec</button>
                    <button onClick={()=>dispatch({type : 'res', payload: 11})}>Res</button>
                </div>
                <div>
                    <div>Count2 : {state.count2}</div>
                    <button onClick={()=>dispatch({type : 'inc2'})}>Inc</button>
                    <button onClick={()=>dispatch({type : 'dec2'})}>Dec</button>
                    <button onClick={()=>dispatch({type : 'res2', payload: 22})}>Res</button>
                </div>
                <div>
                    <div>Count3 : {state.count3}</div>
                    <button onClick={()=>dispatch({type : 'inc3'})}>Inc</button>
                    <button onClick={()=>dispatch({type : 'dec3'})}>Dec</button>
                    <button onClick={()=>dispatch({type : 'res3', payload: 33})}>Res</button>
                </div>
            </div>
        );
    };

export default App;
