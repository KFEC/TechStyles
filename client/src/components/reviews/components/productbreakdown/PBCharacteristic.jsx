import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import { descriptions } from '../../lib';

const PBCharacteristic = ({ char }) => {

  return (
    <div className="breakdown-category">
      {char.prop}
      <br />
      <span className="pb-char-bar">
        <div className="pb-style-value" style={{ '--value': Math.round((char[char.prop].value)) }}><FaSortDown /></div>
      </span>
      <span className="flex-container">
        <small className="pb-range-left">{descriptions[char.prop].lower}</small>
        <small className="pb-range-center">{descriptions[char.prop].middle}</small>
        <small className="pb-range-right">{descriptions[char.prop].upper}</small>
      </span>
    </div>
  );
};

export default PBCharacteristic;