/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import {
  IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown,
} from 'react-icons/io';

const ImageGallery = ({ gallery }) => {
  const [main, setMain] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  let newIndex = 0;

  useEffect(() => {
    if (gallery?.length > 0) {
      setMain(gallery[0]);
    }
  }, [gallery]);

  const handleClick = (event) => {
    console.log(event.target.name);
    const changeMain = gallery[event.target.name];
    setMain(changeMain);
    setCurrentIndex(event.target.name);
  };

  const handleLeftClick = () => {
    newIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setMain(gallery[newIndex]); // bugs, renderMain() triggered before image is set
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    newIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    setMain(gallery[newIndex]); // bugs, renderMain() triggered before image is set
    setCurrentIndex(newIndex);
  };

  const renderMain = () => {
    return (
      <div id="main-img-container-arrows">
        <IoIosArrowBack onClick={() => { handleLeftClick(); }} style={{ color: 'green', zIndex: 5, fontSize: '2.5em' }} />
        <div id="main-img-container">
          <img id="main-img" src={`${main}`} alt="" />
          {/* <div style={{ width: '100%', backgroundSize: 'cover',
           backgroundImage: `url(${gallery[0]})` }} /> */}
        </div>
        <IoIosArrowForward onClick={() => { handleRightClick(); }} style={{ color: 'green', zIndex: 5, fontSize: '2.5em' }} />
      </div>
    );
  };

  const renderGallery = () => {
    return (
      <div id="thumbnail-render">

        {gallery.map((image, index) => {
          if (index <= 6) {
            return (
              <img
                id="thumbnail-img"
                name={index}
                onClick={(event) => { handleClick(event); }}
                src={`${image}`}
                alt=""
                key={Math.random(index * 54) * 10}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
              />
            );
          }
          return (
            <div key={Math.random(index * 54) * 10} /> // fix this
          );
        })}

      </div>
    );
  };

  return (
    <div id="img-gallery">
      {gallery?.length > 0 ? renderGallery() : null}
      {main?.length > 0 ? renderMain() : null}
    </div>
  );
};

export default ImageGallery;