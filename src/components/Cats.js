import React from 'react';

const Cats = ({cats}) => {
    return (
        <div>
            <h2>{cats.cat}</h2>
            <button>delete</button>
        </div>
    );
};

export default Cats;