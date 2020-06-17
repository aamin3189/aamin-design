import React from 'react';
import PropTypes from 'prop-types';
export default function Task({
  task: {
    id,
    title,
    state
  },
  onArchiveTask,
  onPinTask
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `list-item ${state}`
  }, /*#__PURE__*/React.createElement("label", {
    className: "checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: state === 'TASK_ARCHIVED',
    disabled: true,
    name: "checked"
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkbox-custom",
    onClick: () => onArchiveTask(id)
  })), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: title,
    readOnly: true,
    placeholder: "Input title"
  })), /*#__PURE__*/React.createElement("div", {
    className: "actions",
    onClick: event => event.stopPropagation()
  }, state !== 'TASK_ARCHIVED' && /*#__PURE__*/React.createElement("a", {
    onClick: () => onPinTask(id)
  }, /*#__PURE__*/React.createElement("span", {
    className: `icon-star`
  }))));
}
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};