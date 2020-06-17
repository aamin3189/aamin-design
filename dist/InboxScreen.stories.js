// src/components/InboxScreen.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { PureInboxScreen } from './InboxScreen';
import { defaultTasksData } from './TaskList.stories';
export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [story => /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, story())]
}; // A super-simple mock of a redux store

const store = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};
export const Default = () => /*#__PURE__*/React.createElement(PureInboxScreen, null);
export const Error = () => /*#__PURE__*/React.createElement(PureInboxScreen, {
  error: "Something"
});