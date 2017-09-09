import React from 'react';

const PhotoListItem = ({photo, onClick}) => {
    if (!photo) {
        return <div>Loading...</div>;
    }

    const path = photo.src;

    // console.log(photo.src) console.log('Path: ', path);
    return (
        <li className="photo-list-item">
            <div>
                <a onClick={(e) => onClick(e)}>
                    <img height="300px" width="350px" src={path} alt={photo.title}/>
                </a>
            </div>
        </li>
    )
}

export default PhotoListItem;