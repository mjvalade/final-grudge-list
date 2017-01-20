import React from 'react';

const GrudgeDetail = (grudge) => {

    return(
      <section className="detail">
        <h2 className="detail-title">Detail Page</h2>
        <h2 className="grudge-name">{grudge.name}</h2>
        <p className="grudge-description">{grudge.description}</p>
        <button className="forgive-button">Forgive</button>
      </section>
    )
  }

export default GrudgeDetail;
