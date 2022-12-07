/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/fa';

const ImageGallery = ({ gallery }) => {
  const [main, setMain] = useState('');

  useEffect(() => {
    if (gallery.length > 0) {
      setMain(gallery[0]);
    }
  }, [gallery]);

  // make sure gallery state has been set before declaring var
  // const galleryImgs = gallery.length;
  // console.log('confused', galleryImgs);

  // need to set default first image as gallery[0]
  // all images need to be small (max 7 displayed at a time, more than 7 arrow will appear)
  // first image needs to be big?

  // state to keep track of current image, need length

  // keep track of what image is being rendered by index
  // console.log('inside image gallery:: ', gallery);
  const handleClick = (event) => {
    console.log('you clicked an image UGH');
    console.log(event.target.name);
    const changeMain = gallery[event.target.name];
    setMain(changeMain);
  };

  const renderMain = () => {
    return (
      <div id="main-img">
        <img src={`${main}`} alt="" />
      </div>
    );
  };

  const renderGallery = () => {
    return (
      <div id="thumbnail-render">

        {gallery.map((image, index) => {
          if (index <= 6) {
            return <img id="thumbnail-img" name={index} onClick={(event) => { handleClick(event); }} src={`${image}`} alt="" key={Math.random(index * 54) * 10} />;
          }
        })}

      </div>
    );
  };

  return (
    <div id="img-gallery">
      {gallery.length > 0 ? renderGallery() : null}
      {main.length > 0 ? renderMain() : null}
    </div>
  );
};

export default ImageGallery;