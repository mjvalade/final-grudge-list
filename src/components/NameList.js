import React from 'react';
import Grudge from './Grudge';

const displayGrudges = (grudges) => {

  return grudges.map(grudge => {
    return (
      <Grudge key={grudge.id} {...grudge}/>
    )
  })
}

const totalGrudges = (grudges) => {
  return grudges.length;
}

const notForgiven = (grudges) => {
  return grudges.forgiven = false;
}

const hopeless = (grudges) => {
  grudges.filter(notForgiven)
  console.log("hopeless", hopeless);
}

const NameList = (props) => {
  const grudges = props.grudges;

  return(
    <section className="sidebar">
      <h2 className="sidebar-title">All the Grudges</h2>
      <p>Total Grudges: {totalGrudges(grudges)}</p>
      <p>Hopeless: {hopeless(grudges)}</p>
      <p>Redeemed: {totalGrudges(grudges)}</p>
      <section className="grudge-list">
        {displayGrudges(grudges)}
      </section>
    </section>
  )
}

export default NameList;
