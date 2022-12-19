import React, { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import CharacteristicEntry from './CharacteristicEntry.jsx';
import CharacteristicHeading from './CharacteristicHeading.jsx';
import { getData } from '../../../../lib';
import { allCharOptions } from '../../lib';

const CharacteristicBreakdown = memo(() => {
  const [characteristics, setCharacteristics] = useState();
  const { productMeta } = useSelector((state) => state.product);

  const grabCharacteristics = (data) => {
    return allCharOptions.reduce((acc, char) => {
      if (data[char]) {
        acc.push({ [char]: data[char], prop: char });
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    if (Object.keys(productMeta).length > 0) {
      setCharacteristics(grabCharacteristics(productMeta.characteristics));
    }
  }, [productMeta]);

  return (
    <div>
      {characteristics?.map((char, idx) => {
        return (
          <CharacteristicEntry key={Math.random(69 * idx) * 10} char={char} />
        );
      })}
    </div>
  );
});

export default CharacteristicBreakdown;
