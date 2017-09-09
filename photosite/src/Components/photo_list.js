import React, {Components} from 'react';
import PhotoListItem from './photo_list_item.js';

const Photolist = (props) => {
    console.log('props.photos: ', props.images);
    console.log('TYPE props.photos: ', typeof props.images);

    const photoItem = props.images.map((photo, i) => {
        const path = photo.src;
        return (
            // <PhotoListItem
            //     openLightbox = {(e) => props.openLightbox(i, e)}
            //     key={photo.title}
            //     photo={photo}/>
            <li className="photo-list-item" key={photo.title}>
                 <div>      
                    <a onClick={(e) => props.openLightbox(i, e)}>                      
                         <img height="300px" width="350px" src={path} alt={photo.title}/>                
                    </a>
                </div>
            </li>
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