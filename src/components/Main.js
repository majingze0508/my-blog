import React, { Component } from 'react';

import Sidebar from './Sidebar';

import Content from './Content';

import '../styles/style.scss';

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;