import React from 'react';

import './Valor.css';

const Valor = ({ valor }) => (
  <div className="valor">
    <span className="valor-texto">
      { valor.toUpperCase() }
    </span>
  </div>
);

export default Valor;
