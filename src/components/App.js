import React, { Component } from 'react';
import axios from 'axios';

import '../styles/css/index.css';

import NameList from './NameList';
import NewGrudgeForm from './NewGrudgeForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grudgesList: [],
    };
  }

  getGrudges() {
    axios.get('/grudges')
    .then((response) => {
      this.setState({grudgesList: response.data.grudges});
      console.log(this.state.grudgesList);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    this.getGrudges();
  }
  render() {
    return (
      <div className="app">
        <NameList grudges={this.state.grudgesList} />
        <NewGrudgeForm
          grudges={this.state.grudgesList}
          getGrudges={(e) => this.getGrudges(e)}
        />
      </div>
    );
  }
}

export default App;
