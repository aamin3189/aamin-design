// src/components/InboxScreen.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskList from './TaskList';
export function PureInboxScreen({
  error
}) {
  if (error) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page lists-show"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrapper-message"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-face-sad"
    }), /*#__PURE__*/React.createElement("div", {
      className: "title-message"
    }, "Oh no!"), /*#__PURE__*/React.createElement("div", {
      className: "subtitle-message"
    }, "Something went wrong")));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "page lists-show"
  }, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("h1", {
    className: "title-page"
  }, /*#__PURE__*/React.createElement("span", {
    className: "title-wrapper"
  }, "Taskbox"))), /*#__PURE__*/React.createElement(TaskList, null));
}
PureInboxScreen.propTypes = {
  error: PropTypes.string
};
PureInboxScreen.defaultProps = {
  error: null
};
export default connect(({
  error
}) => ({
  error
}))(PureInboxScreen);