import React, { useState, useEffect } from 'react';
import CharacteristicEntry from './CharacteristicEntry.jsx';
import CharacteristicsHeading from './CharacteristicsHeading.jsx';
import { getData } from '../../../../lib';
import { allCharOptions } from '../../lib';

const CharacteristicsBreakdown = () => {

  const [characteristics, setCharacteristics] = useState();

  const grabCharacteristics = (data) => {
    return allCharOptions.reduce((acc, char) => {
      if (data[char]) {
        acc.push({ [char]: data[char], prop: char });
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    getData('/reviews/meta', {
      product_id: 40348,
    })
      .then((response) => {
        setCharacteristics((grabCharacteristics(response.data.characteristics)));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {characteristics?.map((char, idx) => {
        return <CharacteristicEntry key={Math.random(69 * idx) * 10} char={char} />;
      })}
    </div>
  );

};

export default CharacteristicsBreakdown;