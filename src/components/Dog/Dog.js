import React from 'react';

const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;
    return (
        <div style={{display:'flex'}}>
            <button  onClick={()=>dispatch({type:'delDog', payload:{id}})}>delete</button>
            <h2 style={{color:'blue'}}>{name}</h2>
        </div>
    );
};

export {Dog};