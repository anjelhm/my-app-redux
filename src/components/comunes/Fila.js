import React from 'react';

const Fila = ({ children, secundaria, style }) => (
  <div className={secundaria ? '' : 'container'} style={style}>
    <div className="row">
      <div style={{ marginTop: secundaria ? '0px' : '20px' }}>
        { children }
      </div>
    </div>
  </div>
);

export default Fila;
