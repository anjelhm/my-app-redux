import React from 'react';

import Menu from '../../containers/Menu';
import Paper from 'material-ui/Paper';

const Barra = () => (
  <Paper zDepth={2} rounded={false}>
    <div className="container-fluid" style={{ backgroundColor: '#793551' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Menu/>
          </div>
        </div>
      </div>
    </div>
  </Paper>
);

export default Barra;
