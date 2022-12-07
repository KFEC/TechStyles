import React, { useEffect, useState } from 'react';
import { StyleSelector } from '../lib/styledOverview.js';

const StyleSelect = ({
  styles, styleName, setStyleName, handleStyleClick,
}) => {

  // console.log(styles[0]?.name)

  const renderStyles = () => {
    return (
      <div id="styles">
        {styles.map((style, index) => {
          return <StyleSelector onClick={(event) => handleStyleClick(event, index)} name={`${style.name}`} src={`${style.thumbnail}`} key={Math.random(index * 54) * 10} />;
        })}
      </div>
    );
  };

  return (
    <div id="style-selector">
      <div>
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