import React, { useEffect, useRef, useState } from 'react';

const ImageMagnifier = ({
  src, magnifierHeight = 100, magnifieWidth = 100, zoomLevel = 2.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >

      <img
        className="img-main-zoom"
        src={src}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const a = e.pageX - left - window.pageXOffset;
          const b = e.pageY - top - window.pageYOffset;
          setXY([a, b]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        style={{
          objectFit: 'contain',
          cursor: 'none',
          width: '650px',
        }}
        alt="Main Zoom"
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          pointerEvents: 'none',
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: '1.5',
          border: '2px solid lightgray',
          borderRadius: '50%',
          backgroundColor: 'white',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );

};

export default ImageMagnifier;