import React from 'react';
import { Paper } from 'material-ui';

const Seccion = ({ children }) => {
  return (
    <div className="container" style={ estilo.contenedor }>
      <Paper className="col-md-12" style={ estilo.seccion }>
        { children }
      </Paper>
    </div>
  );
}

const estilo = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '20px'
  },
  seccion: {
    minHeight: '400px',
    paddingBottom: '10px'
  }
};

export default Seccion;
