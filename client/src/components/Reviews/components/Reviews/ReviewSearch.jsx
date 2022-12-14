import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearchSharp } from 'react-icons/io5';
import { Button, HelpfulButton, ReportButton } from '../../../../lib/styledComponents';

const ReviewSearch = ({ search }) => {

  const { isDarkMode } = useSelector((state) => state.productPage);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 2) search(query);
    else search('');
  };

  const clearHandler = () => {
    search('');
    setQuery('');
  };

  const iconStyle = {
    fontSize: '1.25em',
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <>
      <div className="rr-search">
        <input
          className="rr-search-input"
          style={{
            backgroundColor: 'none', fontFamily: 'Work Sans, sans-serif', fontSize: '16px', width: '18em', margin: '0.5em', padding: '0.2em',
          }}
          placeholder="Find the review for you…"
          value={query}
          onChange={(e) => { setQuery(e.target.value); }}
        />
        <button
          type="button"
          style={{
            border: 'none', background: 'none', fontFamily: 'Work Sans, sans-serif', margin: '0.5em', padding: '0.2em',
          }}
        >
          <IoSearchSharp style={iconStyle} onClick={handleSubmit} />
        </button>
      </div>
      <div>
        {query.length > 2 && (
          <Button
            className="rr-clear-search"
            type="button"
            isDarkMode={isDarkMode}
            onClick={clearHandler}
          >
            Clear Search
          </Button>
        )}
      </div>
    </>
  );
};

export default ReviewSearch;