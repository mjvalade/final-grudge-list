import React from 'react';
import { Link } from 'react-router';

const Grudge = (grudge) => {

  return(
    <Link to={`/Grudge/${grudge.name}`}>
      <section className="grudge">
          <h2 className="grudge-name">{grudge.name}</h2>
      </section>
    </Link>
  )
}

export default Grudge;
