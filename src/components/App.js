import React, { Component } from 'react';
import '../styles/css/index.css';

import Header from './Header';
import NameList from './NameList';
import MainContainer from './MainContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="dashboard">
          <NameList />
          <MainContainer />
        </div>
      </div>
    );
  }
}

export default App;
