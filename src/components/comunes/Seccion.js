import React from 'react';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const Seccion = ({ cols = 12, children, titulo, noPaper, herramientas, center, style }) => (
  <div className={`col-md-${cols} col-md-offset-${center && (12 - cols) / 2}`}>
    <Paper rounded={false} zDepth={noPaper ? 0 : 1} style={style}>
      <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
        {
          titulo && (
            <div style={{ display: 'flex', flex: '1', padding: '12px' }}>
              <div>
                <span style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.87)' }}>
                  { titulo.toUpperCase() }
                </span>
              </div>
            </div>
          )
        }
        {
          herramientas && (
            <div style={{ display: 'flex', alignItems: 'flex-end', paddingRight: '2px' }}>
              { herramientas }
            </div>
          )
        }
      </div>
      { titulo && <Divider/>}
      { children }
    </Paper>
  </div>
);

export default Seccion;
