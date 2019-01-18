import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import ReduxPromise from "redux-promise";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Router>
            <Route path="/" component={Main}/>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
