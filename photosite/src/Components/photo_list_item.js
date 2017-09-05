import React from 'react';


const PhotoListItem = (photo) => {
    console.log(photo.photo.image)
    const path = require(`../Assets${photo.photo.image}`);
    console.log('Path: ', path);
    return (
        <li className="photo-list-item">
            <div>
                {/* <p>{photo.photo.title}</p> */}
                <img height="300px" width="350px" src={path} alt={photo.photo.title}/>
            </div>
        </li>
    )
}

export default PhotoListItem;