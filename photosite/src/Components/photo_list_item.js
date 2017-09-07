import React from 'react';


const PhotoListItem = (photo, openLightBox) => {
    if(!photo){
        return <div>Loading...</div>;
    }

    console.log(photo.photo.src)
    const path = photo.photo.src;
    console.log('Path: ', path);
    return (
        <li className="photo-list-item">
            <div>            
                <a onClick={(i,e) => openLightBox(i, e)}>
                    <img height="300px" width="350px" src={path} alt={photo.photo.title}/>                
                </a>
            </div>
        </li>
    )
}

export default PhotoListItem;