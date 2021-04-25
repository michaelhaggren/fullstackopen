import React from 'react';

const Button = (props) => (
  <button
    style={{ cursor: 'pointer', borderRadius: '50px' }}
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);

export default Button;
