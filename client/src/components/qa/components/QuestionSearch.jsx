import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { Div } from '../../../lib/styledComponents';


const QuestionSearch = ({ search }) => {

  const { isDarkMode } = useSelector((state) => state.productPage);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 2) search(query);
    else search('');
  };

  const iconStyle = {
    fontSize: '1.25em',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <div data-testid="test QuestionSearch">
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: '90%', backgroundColor: 'none', fontFamily: 'Work Sans, sans-serif', fontSize: '16px',
          }}
          placeholder="Have a question? Search for answers…"
          onChange={(e) => { setQuery(e.target.value); }}
        />
        <button type="submit" style={{ background: 'none', backgroundColor: 'none', border: 'none' }}>
          <IoSearchSharp style={iconStyle} />
        </button>
      </form>
    </div>
  );
};


export default QuestionSearch;