import React from 'react';
import './nav.scss';

function Nav(props) {
  return /*#__PURE__*/React.createElement("div", {
    class: ""
  }, /*#__PURE__*/React.createElement("nav", {
    className: `navbar navbar-expand-lg navbar-light  nav-${props.type}`
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, props.logo), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNavDropdown",
    "aria-controls": "navbarNavDropdown",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNavDropdown"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, props.links.map((link, index) => /*#__PURE__*/React.createElement("li", {
    className: "nav-item active",
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#"
  }, link, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "(current)"))))))));
}

export default Nav;