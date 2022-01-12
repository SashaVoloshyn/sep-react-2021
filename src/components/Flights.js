import React from 'react';

import {useState} from 'react';
import {useEffect} from 'react';

import Flight from './Flight';

const Flights = () => {

    let [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setFlights(flights.filter(value => value.launch_year !== '2020'));

            });
    }, []);

    return (
        <div className={'contentWrap'}>
            {
                flights.map(value => <Flight  key={value.flight_number} item={value}/>)
            }
        </div>
    );
};

export default Flights;