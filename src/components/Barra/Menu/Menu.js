import React from 'react';
import { IndexLink } from 'react-router';

import './Menu.css';

const Menu = ({ autentificacion, desautentificar }) => (
  <div>
    {
      !autentificacion
      ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <IndexLink to="/" className="link" activeClassName="active">
            Iniciar Sesión
          </IndexLink>
        </div>
      )
      : (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <IndexLink to="/" className="link" activeClassName="active">
              Inicio
            </IndexLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
            <a onClick={() => desautentificar()} className="link">
              Cerrar sesión
            </a>
          </div>
        </div>
      )
    }
  </div>
);

export default Menu;
