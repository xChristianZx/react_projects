import React from "react";

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
      <div>
        <a onClick={e => onClick(e)}>
          <img className="photo-list-item-img" src={path} alt={photo.title} />
        </a>
      </div>
    </li>
  );
};

export default PhotoListItem;
