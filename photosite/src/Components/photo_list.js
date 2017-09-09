import React, {Component} from 'react';
import PhotoListItem from './photo_list_item.js';

const Photolist = (props) => {
    // console.log('props.photos: ', props.images);
    // console.log('TYPE props.photos: ', typeof props.images);

    const photoItem = props.images.map((photo, i) => {
        return (
            <PhotoListItem
                onClick = {(e) => props.openLightbox(i, e)}
                key={photo.title}
                photo={photo}/>
        )
    });

    return (
    <div className="photo-container">
        <ul className="photo-array-container">
        {photoItem}
        </ul>
    </div>
    )
}

export default Photolist;