import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button.js';
const style = {
  padding: 10
};
storiesOf('Button', module).add('Primary', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Button, {
  type: "primary",
  title: "Primary Button"
})), {
  'in-dsm': {
    id: '5e64674e0e5b371b880341a6'
  }
}).add('Secondary', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Button, {
  type: "secondary",
  title: "Secondary Button"
})), {
  'in-dsm': {
    id: '5e64674e0e5b371b880341a6'
  }
}).add('Outline', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Button, {
  type: "outline",
  title: "Outline Button"
})), {
  'in-dsm': {
    id: '5e64674e0e5b371b880341a6'
  }
}).add('Disabled', () => /*#__PURE__*/React.createElement("div", {
  style: style
}, /*#__PURE__*/React.createElement(Button, {
  type: "disabled",
  title: "Disabled Button"
})), {
  'in-dsm': {
    id: '5e64674e0e5b371b880341a6'
  }
});