import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import './BotonFlotante.css';

const BotonFlotante = ({ accion, children }) => (
  <div className="boton-flotante">
    <FloatingActionButton onTouchTap={accion} backgroundColor='#3F51B5'>
      { children }
    </FloatingActionButton>
  </div>
);

export default BotonFlotante;
