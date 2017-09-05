import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

import './FullLoader.css';

const FullLoader = () => (
  <div className="full-loader">
    <div className="loader">
      <CircularProgress size={86} thickness={2} color="#691640"/>
      <span className="texto">CARGANDO APLICACIÓN</span>
    </div>
  </div>
);

export default FullLoader;
