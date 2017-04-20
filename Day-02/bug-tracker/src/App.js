import React, { Component } from 'react';

import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import bugsReducer from './reducers/bugsReducer';

import BugTracker from './bugTracker/BugTracker';

let store = createStore(bugsReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <BugTracker />
      </Provider>
    );
  }
}

export default App;
