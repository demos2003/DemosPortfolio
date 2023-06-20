import React from 'react';

const Button = ({ toggleExtend, isExtended }) => {
  return (
    <button className="extend-button" onClick={toggleExtend}>
      {isExtended ? 'Collapse' : 'Extend'}
    </button>
  );
};

export default Button;
