import React from 'react';
import {Link} from "react-router-dom";

const Albums = ({album}) => {
    return (
        <div>
            <div>UserId : {album.userId}</div>
            <div>Id : {album.id}</div>
            <div>Title : {album.title}</div>
            <Link to={`${album.id.toString()}/photos`}><button>Photos</button></Link>
        </div>
    );
};

export default Albums;