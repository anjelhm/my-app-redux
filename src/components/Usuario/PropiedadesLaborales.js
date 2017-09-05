import React from 'react';

import Seccion from '../comunes/Seccion';

const PropiedadesLaborales = ({ id, push, laboral }) => (
  <Seccion titulo="información laboral" style={{ marginTop: '20px' }}>
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '6px', paddingBottom: '6px' }}>
        <div style={{ borderRadius: '50%', backgroundColor: '#F44336', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: '#ffffff', fontSize: '18px' }}>
            95
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '12px' }}>
          <span style={{ fontSize: '18px' }}>199302 - 199412</span>
          <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.54)' }}>1104 1456 A9109 00 / 710022</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '6px', paddingBottom: '6px' }}>
        <div style={{ borderRadius: '50%', backgroundColor: '#2196F3', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: '#ffffff', fontSize: '18px' }}>
            37
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '12px' }}>
          <span style={{ fontSize: '18px' }}>199302 - 199412</span>
          <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.54)' }}>1104 1456 A9109 00 / 710022</span>
        </div>
      </div>
    </div>
  </Seccion>
);

export default PropiedadesLaborales;
