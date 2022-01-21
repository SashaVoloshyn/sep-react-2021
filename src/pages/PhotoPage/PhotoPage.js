import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/albums.service";
import Photos from "../../components/Photos/Photos";
import css from './PhotoPage.module.css'

const PhotoPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumsId:id} = useParams();

    useEffect(() => {
        albumService.getById(id).then(value => setPhotos(value));
    }, [id]);

    return (
        <div className={css.posts}>
            {photos.map(value => <Photos key={value.id} photo={value}/>)}
        </div>
    );
};

export  {PhotoPage};