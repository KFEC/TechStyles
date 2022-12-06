import React from 'react';
import { Div } from '../../../lib/styledComponents';

const QuestionSearch = ({ search }) => {
  return (
    <Div>
      <form>
        <input
          placeholder="Have a question? Search for answers…"
          onChange={(e) => (e.target.value.length > 2)
            ? search(e.target.value)
            : search('')}
        />
        <button type="submit">🔍</button>
      </form>
    </Div>
  );
};


export default QuestionSearch;