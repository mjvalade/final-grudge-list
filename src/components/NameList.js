import React from 'react';
// import Grudge from './Grudge';
// import { map } from 'lodash';


const displayGrudges = (grudges) => {
    // const { grudges } = this.props;
    // const grudgeId = grudge.id;
  return grudges.map(g => {
    return(
      <li key={g.key} className="grudge">
        <h2 className="grudge-name">{g.name}</h2>
        <p className="grudge-description">{g.description}</p>
      </li>
    )
  });
}

const NameList = (props) => {
  const grudges = props.grudges;

  return(
    <section className="sidebar">
      <h2 className="sidebar-title">Sidebar List</h2>
      <ul>
        {displayGrudges(grudges)}
      </ul>
    </section>
  )
}
    //
    // const displayGrudges = map(g => {
    //   let grudgeData = grudges.find(grudge => (grudge.id === grudgeId));
    //   debugger
    //   return <Grudge key={grudgeId} {...grudgeData}/>
    //   // return <Grudge key={grudgeId}/>
    // });

    // return(
    //   <section className="sidebar">
    //     <h2 className="sidebar-title">Sidebar List</h2>
    //     {displayGrudges.length ?
    //       displayGrudges : <p className="GrudgeError">You know you have grudges!</p>}
    //   </section>
    // )

export default NameList;
