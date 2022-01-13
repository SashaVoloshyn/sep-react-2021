import React from 'react';

const Flight = ({item}) => {

    return (
        <div className= 'block'>
            <div className="block__content">
                <div className="block__info">
                    <h3>{item.mission_name}</h3>
                    <h6>{item.launch_year}</h6>
                </div>

                <img src={item.links.mission_patch} alt={item.mission_name}/>

            </div>


        </div>
    );
};

export default Flight;