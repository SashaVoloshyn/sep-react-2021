import React from 'react';
import css from './Photos.module.css';

const Photos = ({photo}) => {
    return (
        <div className={css.photos}>
            <div className={css.photoInfo}>
                <h4>Id : {photo.id}</h4>
                <h4>AlbumId : {photo.albumId}</h4>
                <h3>Title : {photo.title}</h3>
            </div>
            <img src={photo.url} alt={photo.title}/>


        </div>
    );
};

export default Photos;