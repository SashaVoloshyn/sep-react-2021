import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import Albums from "../../components/Albums/Albums";

const AlbumsPage = () => {

    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        usersService.getByIdAlbums(id).then(value => setAlbums(value));
    },[id]);

    return (
        <div>
            <div>{albums.map(value => <Albums key={value.id} album={value}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {AlbumsPage};