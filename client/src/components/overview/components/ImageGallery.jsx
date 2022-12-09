/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import {
  IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown,
} from 'react-icons/io';

const ImageGallery = ({ gallery }) => {
  const [main, setMain] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState([0, 6]);
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
    // console.log('check onClick', typeof event.target.name);
    // FOUND THE BUG
    setCurrentIndex(Number(event.target.name));
  };

  const handleLeftClick = () => {
    newIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setMain(gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    newIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    setMain(gallery[newIndex]);
    setCurrentIndex(newIndex);
  };

  const renderMain = () => {
    console.log('fix render main bug in image gallery');
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


  const handleUpClick = () => {
    const newCarouselIndex = [carouselIndex[0] - 1, carouselIndex[1] - 1];
    setCarouselIndex(newCarouselIndex);
  };

  const handleDownClick = () => {
    const newCarouselIndex = [carouselIndex[0] + 1, carouselIndex[1] + 1];
    setCarouselIndex(newCarouselIndex);
  };

  // if current index === carouselIndex[0]
  // then highlight the thumbnail image with that same index

  const renderGallery = () => {
    if (gallery.length <= 7) {
      return (
        <div id="thumbnail-render">
          {gallery.map((image, index) => {
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
          })}
        </div>
      );
    } if (gallery.length > 7) {
      return (
        <div id="thumbnail-render">
          {carouselIndex[0] !== 0 ? <IoIosArrowUp onClick={() => { handleUpClick(); }} style={{ color: 'black', fontSize: '3.5em' }} /> : null}

          {gallery.map((image, index) => {

            if (index === Number(currentIndex)) {
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
                    border: '3px solid green',
                  }}
                />
              );
            }


            if (index >= carouselIndex[0] && index <= carouselIndex[1]
               && index !== Number(currentIndex)) {
              // console.log('index ', typeof index, 'currentindex ',
              // typeof currentIndex, typeof index === typeof currentIndex);
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
          })}

          {carouselIndex[1] >= 6 && carouselIndex[1] !== gallery.length - 1 ? <IoIosArrowDown onClick={() => { handleDownClick(); }} style={{ color: 'black', fontSize: '3.5em' }} /> : null}
        </div>
      );
    }
  };

  return (
    <div id="img-gallery">
      {gallery?.length > 0 ? renderGallery() : null}
      {main?.length > 0 ? renderMain() : null}
    </div>
  );
};

export default ImageGallery;