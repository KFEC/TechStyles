import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSortDown } from 'react-icons/fa';
import { DESCRIPTIONS } from '../../lib';

const CharacteristicEntry = ({ char }) => {
  const { isDarkMode } = useSelector((state) => state.productPage);

  const pbStyle = {
    '--value': Math.round(char[char.prop].value),
  };

  const pbBarStyle = {
    '--bar-background': isDarkMode
      ? 'rgba(95, 95, 95, 0.685)'
      : 'rgba(173, 173, 173, 0.685)',
  };
  return (
    <div className="breakdown-category">
      <span className="char-prop">{char.prop}</span>
      <span className="pb-char-bar" style={pbBarStyle}>
        <div className="pb-style-value" style={pbStyle}>
          <FaSortDown />
        </div>
      </span>
      <span className="flex-container">
        <small className="pb-range-left">{DESCRIPTIONS[char.prop].lower}</small>
        <small className="pb-range-center">
          {DESCRIPTIONS[char.prop].middle}
        </small>
        <small className="pb-range-right">
          {DESCRIPTIONS[char.prop].upper}
        </small>
      </span>
    </div>
  );
};

export default CharacteristicEntry;
