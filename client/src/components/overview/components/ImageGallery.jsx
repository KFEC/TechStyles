import React, { useState, useEffect } from 'react';

const ImageGallery = ({ gallery }) => {

  // need to set default first image as gallery[0]
  // all images need to be small (max 7 displayed at a time, more than 7 arrow will appear)
  // first image needs to be big?

  // state to keep track of current image, need length

  // keep track of what image is being rendered by index
  console.log('inside image gallery:: ', gallery);

  const renderGallery = () => {
    return (
      <div>
        {gallery.map((image, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <img src={`${image}`} alt="" key={index} />;
        })}
      </div>
    );
  };

  return (
    <div id="img-gallery">
      {gallery.length > 0 ? renderGallery() : null}
    </div>
  );
};

export default ImageGallery;