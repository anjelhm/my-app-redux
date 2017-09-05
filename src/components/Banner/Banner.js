import React from 'react';

import './Banner.css';

const Banner = () => (
  <div className="contenedor-baner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner">
            <img className="img-responsive" src={`${process.env.PUBLIC_URL}/SEP.png`} alt="logo"/>
            <div className="leyendas">
              <span className="tec-nacional">
                TECNOLÓGICO NACIONAL DE MÉXICO
              </span>
              <span className="tec-saltillo">
                INSTITUTO TECNOLÓGICO DE SALTILLO
              </span>
            </div>
            <div className="logo-tec">
              <img className="img-responsive" src={`${process.env.PUBLIC_URL}/SALTILLO.png`} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
