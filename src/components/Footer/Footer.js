import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-logo-sep">
      <img alt="logo" src={`${process.env.PUBLIC_URL}/sep_footer.png`}/>
    </div>
    <div className="footer-info">
      <span className="footer-nombre-tec">INSTITUTO TECNOLÓGICO DE SALTILLO</span>
      <span className="footer-nombre-aplicacion">APLICACIÓN WEB (RECURSOS HUMANOS)</span>
      <span className="footer-motor">Motorizado artesanalmente por F4Lab</span>
    </div>
  </div>
);

export default Footer;
