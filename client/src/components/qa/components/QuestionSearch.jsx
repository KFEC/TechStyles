import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { Div, Button } from '../../../lib/styledComponents';


const QuestionSearch = ({ search }) => {

  const { isDarkMode } = useSelector((state) => state.productPage);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 2) search(query);
    else search('');
  };

  const handleClick = (e) => {
    setQuery('');
    search('');
  };

  const inputKeyPress = (e) => {
    if (e.keyCode === 13 && query.length > 2) {
      search(query);
    }
  };

  const iconStyle = {
    fontSize: '1.25em',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div data-testid="test QuestionSearch">
      <input
        style={{
          width: '70%', backgroundColor: 'none', fontFamily: 'Work Sans, sans-serif', fontSize: '16px',
        }}
        placeholder="Have a question? Search for answers…"
        value={query}
        onChange={(e) => { setQuery(e.target.value); }}
        onKeyDown={inputKeyPress}
      />
      <button type="submit" style={{ background: 'none', backgroundColor: 'none', border: 'none' }}>
        <IoSearchSharp style={iconStyle} onClick={handleSearch} />
      </button>
      {query.length > 2
        && <Button onClick={handleClick} isDarkMode={isDarkMode}>Clear Search</Button>}
    </div>
  );
};


export default QuestionSearch;