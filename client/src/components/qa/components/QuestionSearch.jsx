import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { Div } from '../../../lib/styledComponents';


const QuestionSearch = ({ search }) => {

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 2) search(query);
    else search('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: '90%', backgroundColor: 'whitesmoke' }}
          placeholder="Have a question? Search for answers…"
          onChange={(e) => { setQuery(e.target.value); }}
        />
        <button type="submit" style={{ backgroundColor: 'whitesmoke', border: 'none' }}>
          <IoSearchSharp />
        </button>
      </form>
    </div>
  );
};


export default QuestionSearch;