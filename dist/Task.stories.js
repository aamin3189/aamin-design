function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// src/components/Task.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import Task from './Task';
export default {
  component: Task,
  title: 'Task',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};
export const Default = () => {
  return /*#__PURE__*/React.createElement(Task, _extends({
    task: object('task', { ...taskData
    })
  }, actionsData));
};
export const Pinned = () => /*#__PURE__*/React.createElement(Task, _extends({
  task: { ...taskData,
    state: 'TASK_PINNED'
  }
}, actionsData));
export const Archived = () => /*#__PURE__*/React.createElement(Task, _extends({
  task: { ...taskData,
    state: 'TASK_ARCHIVED'
  }
}, actionsData));