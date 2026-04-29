import React from 'react';

const Display = ({ value, history }) => {
  return (
    <div className="display-container">
      <div className="history">{history || '\u00A0'}</div>
      <div className="current-value">
        {value.toLocaleString(undefined, { maximumFractionDigits: 10 })}
      </div>
    </div>
  );
};

export default Display;
