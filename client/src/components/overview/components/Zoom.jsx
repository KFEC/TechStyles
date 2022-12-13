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

      {/* main photo */}
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
        alt=""
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',

          // prevent maginier blocks the mousemove event of img
          pointerEvents: 'none',
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: '1', // reduce opacity so you can verify position
          border: '1px solid lightgray',
          backgroundColor: 'white',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',

          // calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          // calculete position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );

};

export default ImageMagnifier;

// export default function App() {
//   return (
//     <div className="App">
//       <ImageMagnifier
//         width="200px"
//         src="https://images-na.ssl-images-amazon.com/images/I/616HiOFb1VL._AC_UX679_.jpg"
//       />
//     </div>
//   );
// }
