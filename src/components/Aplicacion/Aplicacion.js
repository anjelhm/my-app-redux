import React from 'react';
import { Link } from 'react-router';

import Seccion from '../comunes/Seccion';

import './Aplicacion.css';

const Aplicacion = ({ children, nombre, a }) => (
  <Link to={`/herramientas/${a}`}>
    <Seccion cols={3}>
      <div className="aplicacion">
        <div className="aplicacion-icon">
          {children}
        </div>
        <span className="aplicacion-nombre">
          { nombre.toUpperCase() }
        </span>
      </div>
    </Seccion>
  </Link>
);

export default Aplicacion;
