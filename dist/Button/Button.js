import React from 'react';
import './button.scss';

function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: props.type
  }, props.title);
}

export default Button;