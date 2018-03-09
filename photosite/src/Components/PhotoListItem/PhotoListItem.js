import React from "react";
import "./PhotoListItem.css";

const PhotoListItem = ({ photo, onClick }) => {
  if (!photo) {
    return <div>Loading...</div>;
  }
  const path = photo.src;
  // const cdn = "d1ch7g5367xvmf.cloudfront.net";
  // const image_link = `${cdn}${path}`;

  // console.log("CDN: ", cdn);
  // console.log("Path: ", path);
  // console.log("Image_link: ", image_link);
  return (
    <li className="photo-list-item">
      <img
        className="photo-list-item-img"
        onClick={e => onClick(e)}
        src={path}
        alt={photo.title}
      />
    </li>
  );
};

export default PhotoListItem;
