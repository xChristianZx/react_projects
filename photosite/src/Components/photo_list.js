import React, {Components} from 'react';
import PhotoListItem from './photo_list_item.js';

const Photolist = (props) => {
    console.log('props.photos: ', props.photos);
    const photoItem = props.photos.map((photo) => {
        return (
            <PhotoListItem 
              key={photo.title}
                photo = {photo}/>
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