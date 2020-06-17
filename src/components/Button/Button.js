import React from 'react';
import './button.scss';

function Button(props) {
  return (
    <button className={props.type}>
      {props.title}
    </button>
  );
}

export default Button;