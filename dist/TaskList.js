function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// src/components/TaskList.js
import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';
export function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}) {
  const events = {
    onPinTask,
    onArchiveTask
  };
  const LoadingRow = /*#__PURE__*/React.createElement("div", {
    className: "loading-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "glow-checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "glow-text"
  }, /*#__PURE__*/React.createElement("span", null, "Loading"), " ", /*#__PURE__*/React.createElement("span", null, "cool"), " ", /*#__PURE__*/React.createElement("span", null, "state")));

  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "list-items"
    }, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow);
  }

  if (tasks.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "list-items"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrapper-message"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-check"
    }), /*#__PURE__*/React.createElement("div", {
      className: "title-message"
    }, "You have no tasks"), /*#__PURE__*/React.createElement("div", {
      className: "subtitle-message"
    }, "Sit back and relax")));
  }

  const tasksInOrder = [...tasks.filter(t => t.state === 'TASK_PINNED'), ...tasks.filter(t => t.state !== 'TASK_PINNED')];
  return /*#__PURE__*/React.createElement("div", {
    className: "list-items"
  }, tasksInOrder.map(task => /*#__PURE__*/React.createElement(Task, _extends({
    key: task.id,
    task: task
  }, events))));
}
PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired
};
PureTaskList.defaultProps = {
  loading: false
};
export default connect(({
  tasks
}) => ({
  tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
}), dispatch => ({
  onArchiveTask: id => dispatch(archiveTask(id)),
  onPinTask: id => dispatch(pinTask(id))
}))(PureTaskList);