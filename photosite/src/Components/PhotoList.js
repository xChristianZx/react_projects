import React from "react";
import PhotoListItem from "./PhotoListItem.js";

const Photolist = ({ images, openLightbox }) => {
  // console.log('props.photos: ', props.images);
  // console.log('TYPE props.photos: ', typeof props.images);

  const photoItem = images.map((photo, i) => {
    return (
      <PhotoListItem
        onClick={e => openLightbox(i, e)}
        key={photo.title}
        photo={photo}
      />
    );
  });

  return (
    <div className="photo-container">
      <ul className="photo-array-container">{photoItem}</ul>
    </div>
  );
};

export default Photolist;
