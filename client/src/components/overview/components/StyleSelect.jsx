import React, { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSelector } from '../lib/styledOverview.js';

const StyleSelect = ({
  styles, styleName, setStyleName, handleStyleClick,
}) => {
  const { isDarkMode } = useSelector((state) => state.productPage);

  // console.log(styles[0]?.name)

  const renderStyles = () => {
    return (
      <div id="styles">
        {styles.map((style, index) => {
          if (index === 0 && styleName.length === 0) {
            return (
              <div
                className="style-container"
                key={Math.random(index * 54) * 10}
                style={{
                  position: 'relative',
                  borderRadius: '50%',
                  height: '81.2px',
                  width: '81.2px',
                  border: isDarkMode ? '1.5px solid white' : '1.5px solid rgb(46, 45, 45, 0.7)',
                  verticalAlign: 'center',
                }}
              >
                <StyleSelector isDarkMode={isDarkMode} className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} />
                <HiCheck
                  className="checkmark-icon"
                  style={{
                    color: isDarkMode ? 'white' : '#434E61', zIndex: 1, fontSize: '1.5em', position: 'absolute', bottom: '80%', right: '2%',
                  }}
                />
              </div>
            );
          } if (styleName === style.name) {
            return (
              <div
                className="style-container"
                key={Math.random(index * 54) * 10}
                style={{
                  position: 'relative',
                  borderRadius: '50%',
                  height: '81.2px',
                  width: '81.2px',
                  border: isDarkMode ? '1.5px solid white' : '1.5px solid rgb(46, 45, 45, 0.7)',
                  verticalAlign: 'center',
                }}
              >
                <StyleSelector isDarkMode={isDarkMode} className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} />
                <HiCheck
                  className="checkmark-icon"
                  style={{
                    color: isDarkMode ? 'white' : '#434E61', zIndex: 1, fontSize: '1.5em', position: 'absolute', bottom: '80%', right: '2%',
                  }}
                />
              </div>
            );
          }
          return <StyleSelector isDarkMode={isDarkMode} className="style" onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} key={Math.random(index * 54) * 10} />;
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