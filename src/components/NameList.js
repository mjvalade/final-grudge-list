import React, { Component } from 'react';
import Grudge from './Grudge';
import { map } from 'lodash';


class NameList extends Component {

  render() {
    const { grudgesList } = this.props;

    const displayGrudges = map(this.props.favorites, (grudgeId) => {
      let grudgeData = grudgesList.find(grudge => (grudge.id === grudgeId));
      return <Grudge key={grudgeId} {...grudgeData}/>
    });

    return(
      <section className="sidebar">
        <h2 className="sidebar-title">Sidebar List</h2>
        {displayGrudges.length ?
          displayGrudges : <p className="GrudgeError">You know you have grudges!</p>}
      </section>
    )
  }
}

export default NameList;
