import React, { useEffect, useState } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { StyleSelector } from '../lib/styledOverview.js';

const StyleSelect = ({
  styles, styleName, setStyleName, handleStyleClick,
}) => {

  // console.log(styles[0]?.name)

  const renderStyles = () => {
    return (
      <div id="styles">
        {styles.map((style, index) => {
          if (index === 0 && styleName.length === 0) {
            return (
              <div className="style-container" key={Math.random(index * 54) * 10}>
                <StyleSelector className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} />
                <IoCheckmarkSharp
                  className="checkmark-icon"
                  style={{
                    color: 'green', zIndex: 1, fontSize: '2em', position: 'relative', bottom: '70%', right: '25%',
                  }}
                />
              </div>
            );
          } if (styleName === style.name) {
            return (
              <div className="style-container" key={Math.random(index * 54) * 10}>
                <StyleSelector className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} />
                <IoCheckmarkSharp
                  className="checkmark-icon"
                  style={{
                    color: 'green', zIndex: 1, fontSize: '2em', position: 'relative', bottom: '70%', right: '25%',
                  }}
                />
              </div>
            );
          }
          return <StyleSelector className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} key={Math.random(index * 54) * 10} />;
        })}
      </div>
    );
  };

  return (
    <div id="style-selector">
      <div id="style-title">
        STYLE
        {' > '}
        {styles.length && styleName.length > 0 ? styleName : styles[0]?.name}
      </div>
      {styles.length > 0 ? renderStyles() : null}
    </div>
  );
};

export default StyleSelect;

// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB
// MUFFIN BREAK BRB