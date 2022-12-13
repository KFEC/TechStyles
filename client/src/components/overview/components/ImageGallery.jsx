/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  IoIosArrowBack, IoIosArrowForward, IoIosArrowUp, IoIosArrowDown,
} from 'react-icons/io';
import {
  ExpandedViewModal,
} from '../../../lib/styledComponents';
import ExpandedView from './ExpandedView.jsx';

const ImageGallery = ({
  gallery, carouselIndex, setCarouselIndex, currentIndex, setCurrentIndex,
}) => {

  const { isDarkMode } = useSelector((state) => state.productPage);

  const [main, setMain] = useState('');
  const [expandedMain, setExpandedMain] = useState(main);
  const [currentExpandedIndex, setCurrentExpandedIndex] = useState('');
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [carouselIndex, setCarouselIndex] = useState([0, 6]);
  const [display, setDisplay] = useState(false);
  let newIndex = 0;

  useEffect(() => {
    if (gallery?.length > 0) {
      setMain(gallery[0]);
      setExpandedMain(gallery[0]);
      setCurrentExpandedIndex(0);
    }
  }, [gallery]);

  const handleClick = (event) => {
    // console.log(event.target.name);
    const changeMain = gallery[event.target.name];
    setMain(changeMain);
    setExpandedMain(changeMain);
    // console.log('check onClick', typeof event.target.name);
    // FOUND THE BUG
    setCurrentIndex(Number(event.target.name));
    setCurrentExpandedIndex(Number(event.target.name));
  };

  const handleLeftClick = () => {
    newIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1;
    setMain(gallery[newIndex]);
    setExpandedMain(gallery[newIndex]);
    setCurrentIndex(newIndex);
    setCurrentExpandedIndex(newIndex);
  };

  const handleRightClick = () => {
    newIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1;
    setMain(gallery[newIndex]);
    setExpandedMain(gallery[newIndex]);
    setCurrentIndex(newIndex);
    setCurrentExpandedIndex(newIndex);
  };

  const renderMain = () => {
    return (
      <div id="main-img-container-arrows">
        <IoIosArrowBack className="main-img-arrows" onClick={() => { handleLeftClick(); }} style={{ color: 'rgba(96, 96, 96, 0.4)', zIndex: 5, fontSize: '2.5em' }} />
        <div id="main-img-container">
          <img id="main-img" onClick={() => { setDisplay(!display); }} src={`${main}`} alt="" />
          <ExpandedViewModal changeDisplay={display}>
            <ExpandedView
              setDisplay={setDisplay}
              setMain={setMain}
              gallery={gallery}
              expandedMain={expandedMain}
              setExpandedMain={setExpandedMain}
              currentExpandedIndex={currentExpandedIndex}
              setCurrentExpandedIndex={setCurrentExpandedIndex}
            />
          </ExpandedViewModal>
          {/* <div style={{ width: '100%', backgroundSize: 'cover',
           backgroundImage: `url(${gallery[0]})` }} /> */}
        </div>
        <IoIosArrowForward className="main-img-arrows" onClick={() => { handleRightClick(); }} style={{ color: 'rgba(96, 96, 96, 0.4)', zIndex: 5, fontSize: '2.5em' }} />
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

  const thumbnailRenderStyle = {
    '--thumbnail-bg': isDarkMode ? '#2c2c2c' : '#DADEDF',
  };

  const thumbnailImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    border: '2px solid rgba(96, 96, 96, 0.7)',
    boxShadow: isDarkMode ? '1.5px 1.5px 1.5px 1.5px rgba(75, 75, 75, 0.55)' : '1.5px 1.5px 1.5px 1.5px rgba(96, 96, 96, 0.6)',
    '--hover-color': isDarkMode ? '#839c99' : '#9ffcf1',
  };

  const renderGallery = () => {
    if (gallery.length <= 7) {
      return (
        <div className="thumbnail-render" style={thumbnailRenderStyle}>
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
                  style={thumbnailImgStyle}
                />
              );
            }
            if (index >= carouselIndex[0] && index <= carouselIndex[1]
              && index !== Number(currentIndex)) {
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
                    '--hover-color': isDarkMode ? '#839c99' : '#9ffcf1',
                  }}
                />
              );
            }
          })}
        </div>
      );
    } if (gallery.length > 7) {
      return (
        <div className="thumbnail-render" style={thumbnailRenderStyle}>
          <div className="thumbnail-arrow-container">
            {carouselIndex[0] !== 0 ? <IoIosArrowUp onClick={() => { handleUpClick(); }} style={{ color: 'rgba(96, 96, 96, 0.4)', fontSize: '2em' }} /> : null}
          </div>


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
                  style={thumbnailImgStyle}
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
                    '--hover-color': isDarkMode ? '#839c99' : '#9ffcf1',
                  }}
                />
              );
            }
          })}

          <div className="thumbnail-arrow-container">
            {carouselIndex[1] >= 6 && carouselIndex[1] !== gallery.length - 1 ? <IoIosArrowDown onClick={() => { handleDownClick(); }} style={{ color: 'rgba(96, 96, 96, 0.4)', fontSize: '2em' }} /> : null}
          </div>
        </div>
      );
    }
  };

  return (
    <div id="img-gallery" data-testid="image-gallery">
      {gallery?.length > 0 ? renderGallery() : null}
      {main?.length > 0 ? renderMain() : null}
    </div>
  );
};

export default ImageGallery;