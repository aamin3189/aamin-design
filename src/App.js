// src/App.js

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';
import './styles/styles.scss';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Card 
          headings="Free"
          cost="$0"
          costFor="/mo"
          features={
            [
              "10 users included",
              "2 GB of storage",
              "Email support",
              "Help center access"
            ]
          }
          buttonText="Sign up for free"
          buttonType="outline"
        />

      <Card 
          headings="Enterprise"
          cost="$29"
          costFor="/mo"
          features={
            [
              "30 users included",
              "15 GB of storage",
              "Phone and email support",
              "Help center access"
            ]
          }
          buttonText="Contact Sales"
          buttonType="primary"
        />
      </Provider>
    );
  }
}

export default App;