import React from 'react';

const CalculatorButton = ({ label, onClick, type = 'number', doubleWidth = false }) => {
  const getButtonClass = () => {
    let base = 'calc-button';
    if (type === 'operator') base += ' operator';
    if (type === 'action') base += ' action';
    if (doubleWidth) base += ' double-width';
    return base;
  };

  return (
    <button className={getButtonClass()} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default CalculatorButton;
