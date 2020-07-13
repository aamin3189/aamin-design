import React from 'react';
import './Card.scss';
import Button from '../Button/Button';

const Card = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "comp-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "headings"
  }, props.headings), /*#__PURE__*/React.createElement("div", {
    className: "cost"
  }, /*#__PURE__*/React.createElement("span", null, props.cost), /*#__PURE__*/React.createElement("span", null, "\xA0", props.costFor))), /*#__PURE__*/React.createElement("div", {
    className: "details"
  }, /*#__PURE__*/React.createElement("ul", null, props.features.map((feature, index) => /*#__PURE__*/React.createElement("ol", {
    key: index
  }, feature)))), /*#__PURE__*/React.createElement("div", {
    className: "action"
  }, /*#__PURE__*/React.createElement(Button, {
    type: props.buttonType,
    title: props.buttonText
  })));
};

export default Card;