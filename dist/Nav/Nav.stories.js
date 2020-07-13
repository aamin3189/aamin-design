import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from './Nav';
const style = {
  padding: 10
};
storiesOf('Nav', module).add('Primary', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Nav, {
  logo: "(b) design Studio",
  type: "primary",
  links: ["Home", "Features", "Pricing"]
})), {
  'in-dsm': {
    id: '5f0c3806d9f9f1dd2089b19e'
  }
}).add('Dark', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Nav, {
  logo: "(b) design Studio",
  type: "dark",
  links: ["Home", "Features", "Pricing", "About Us"]
})), {
  'in-dsm': {
    id: '5f0c3806d9f9f1dd2089b19e'
  }
});