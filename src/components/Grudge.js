import React from 'react';

const Grudge = (grudge) => {

  return(
    <section className="grudge">
      <h2 className="grudge-name">{grudge.name}</h2>
      <p className="grudge-description">{grudge.description}</p>
    </section>
  )
}

export default Grudge;
