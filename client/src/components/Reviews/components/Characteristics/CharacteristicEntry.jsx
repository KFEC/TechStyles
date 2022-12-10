import React from 'react';
import { FaSortDown } from 'react-icons/fa';
import { DESCRIPTIONS } from '../../lib';

const CharacteristicEntry = ({ char }) => {
  return (
    <div className="breakdown-category">
      {char.prop}
      <br />
      <span className="pb-char-bar">
        <div className="pb-style-value" style={{ '--value': Math.round((char[char.prop].value)) }}><FaSortDown /></div>
      </span>
      <span className="flex-container">
        <small className="pb-range-left">{DESCRIPTIONS[char.prop].lower}</small>
        <small className="pb-range-center">{DESCRIPTIONS[char.prop].middle}</small>
        <small className="pb-range-right">{DESCRIPTIONS[char.prop].upper}</small>
      </span>
    </div>
  );
};

export default CharacteristicEntry;