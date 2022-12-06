import React from 'react';
import { Div } from '../../../../lib/styledComponents';

const RBRender = ({ ratings }) => {

  return (
    <div className="ratings-bar-div">
      <div className="ratings-bar">
        <span className="ratings-percentage">
          {Math.round((ratings.count / ratings.totalRatings) * 100)}
          %
        </span>
        <div className="ratings-bar-content" style={{ '--percent': Math.round((ratings.count / ratings.totalRatings) * 100) }}>
          <span className="ratings-area">{ratings.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RBRender;