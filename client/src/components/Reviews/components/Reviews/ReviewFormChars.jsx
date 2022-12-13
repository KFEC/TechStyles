import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReviewFormChars = ({
  char, id, setCharacteristics, characteristics,
}) => {

  const charTextArr = {
    Size: ['A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide'],
    Width: ['Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'],
    Comfort: ['Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect'],
    Quality: ['Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect'],
    Length: ['Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long'],
    Fit: ['Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long'],
  };

  const handleChange = (e) => {
    const tempObj = {};
    tempObj[id] = Number(document.querySelector(`input[name=${char}]:checked`).value);
    setCharacteristics({ ...characteristics, ...tempObj });
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {char}
            </td>
          </tr>
          <tr style={{ height: '2em' }}>
            {/* {charTextArr[`${char}`].map(val => {
              return <td style={{ width: '20%' }}>{val}</td>;
            })} */}
            <td style={{ width: '20%', wordBreak: 'break-word' }}>{document.querySelector(`input[name=${char}]:checked`)?.value === '1' && charTextArr[`${char}`][0]}</td>
            <td style={{ width: '20%', wordBreak: 'break-word' }}>{document.querySelector(`input[name=${char}]:checked`)?.value === '2' && charTextArr[`${char}`][1]}</td>
            <td style={{ width: '20%', wordBreak: 'break-word' }}>{document.querySelector(`input[name=${char}]:checked`)?.value === '3' && charTextArr[`${char}`][2]}</td>
            <td style={{ width: '20%', wordBreak: 'break-word' }}>{document.querySelector(`input[name=${char}]:checked`)?.value === '4' && charTextArr[`${char}`][3]}</td>
            <td style={{ width: '20%', wordBreak: 'break-word' }}>{document.querySelector(`input[name=${char}]:checked`)?.value === '5' && charTextArr[`${char}`][4]}</td>
          </tr>
          <tr style={{ height: '2em' }}>
            <td><input name={char} type="radio" checked={document.querySelector(`input[name=${char}]:checked`)?.value === '1'} value="1" onChange={handleChange} /></td>
            <td><input name={char} type="radio" checked={document.querySelector(`input[name=${char}]:checked`)?.value === '2'} value="2" onChange={handleChange} /></td>
            <td><input name={char} type="radio" checked={document.querySelector(`input[name=${char}]:checked`)?.value === '3'} value="3" onChange={handleChange} /></td>
            <td><input name={char} type="radio" checked={document.querySelector(`input[name=${char}]:checked`)?.value === '4'} value="4" onChange={handleChange} /></td>
            <td><input name={char} type="radio" checked={document.querySelector(`input[name=${char}]:checked`)?.value === '5'} value="5" onChange={handleChange} /></td>
          </tr>
          <tr>
            <td>1</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

};

export default ReviewFormChars;