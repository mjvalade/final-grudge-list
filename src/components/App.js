import React, { Component } from 'react';
import '../styles/css/index.css';

import MainContainer from './MainContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="dashboard">
          <MainContainer />
        </div>
      </div>
    );
  }
}

export default App;
