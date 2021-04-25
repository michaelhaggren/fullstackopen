import React from 'react';

const Button = (props) => (
  <div>
    <button
      style={{ cursor: 'pointer', borderRadius: '50px' }}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  </div>
);

export default Button;
