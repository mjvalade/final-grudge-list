import React, { Component } from 'react';
import NewGrudgeForm from './NewGrudgeForm';


class MainContainer extends Component {

  render() {
    return(
      <section className="main">
        <h2 className="main-title">Main Container</h2>
        <NewGrudgeForm />
      </section>
    )
  }
}

export default MainContainer;
