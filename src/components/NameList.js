import React from 'react';

const goToDetails = () => {
  let str = this.props.name;
  let grudgeName = str.replace(/\s/g, '-');
  this.props.setSelectedTrail(this.props.uid);
  this.context.router.transitionTo(`/Grudge/${grudgeName}`);
};

const displayGrudges = (grudges) => {
    // const { grudges } = this.props;
    // const grudgeId = grudge.id;
  return grudges.map(g => {
    return(
      <li key={g.id} className="grudge" onClick={(e) => { this.goToDetails() }}>
        <h2 className="grudge-name">{g.name}</h2>
        {/* <p className="grudge-description">{g.description}</p> */}
        <button>Forgive</button>
      </li>
    )
  });
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
      <ul>
        {displayGrudges(grudges)}
      </ul>
    </section>
  )
}

export default NameList;
