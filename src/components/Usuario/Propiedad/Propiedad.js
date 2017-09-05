import React from 'react';

import './Propiedad.css';

const Propiedad = ({ propiedad, valor = "no especificado" }) => (
  <div className="propiedad">
    <span className="propiedad-nombre">{ propiedad.toUpperCase() }</span>
    <span className="propiedad-valor">{ valor }</span>
  </div>
);

export default Propiedad;
