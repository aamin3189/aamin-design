function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { PureTaskList } from './TaskList';
import { taskData, actionsData } from './Task.stories';
export default {
  component: PureTaskList,
  title: 'TaskList',
  decorators: [story => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '3rem'
    }
  }, story())],
  excludeStories: /.*Data$/
};
export const defaultTasksData = [{ ...taskData,
  id: '1',
  title: 'Task 1'
}, { ...taskData,
  id: '2',
  title: 'Task 2'
}, { ...taskData,
  id: '3',
  title: 'Task 3'
}, { ...taskData,
  id: '4',
  title: 'Task 4'
}, { ...taskData,
  id: '5',
  title: 'Task 5'
}, { ...taskData,
  id: '6',
  title: 'Task 6'
}];
export const withPinnedTasksData = [...defaultTasksData.slice(0, 5), {
  id: '6',
  title: 'Task 6 (pinned)',
  state: 'TASK_PINNED'
}];
export const Default = () => /*#__PURE__*/React.createElement(PureTaskList, _extends({
  tasks: defaultTasksData
}, actionsData));
export const WithPinnedTasks = () => /*#__PURE__*/React.createElement(PureTaskList, _extends({
  tasks: withPinnedTasksData
}, actionsData));
export const Loading = () => /*#__PURE__*/React.createElement(PureTaskList, _extends({
  loading: true,
  tasks: []
}, actionsData));
export const Empty = () => /*#__PURE__*/React.createElement(PureTaskList, _extends({
  tasks: []
}, actionsData));