import React from 'react';

const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;


    return (
        <div style={{display :'flex'}}>
            <h2 style={{color:'red'}}>{name}</h2>
            <button  onClick={()=>dispatch({type:'delCat', payload:{id}})}>delete</button>
        </div>
    );
};

export {Cat};