import React from 'react';

import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/image/edit';

const Herramientas = ({ accion }) => (
  <div>
    <IconButton onTouchTap={ accion }>
      <Edit color="rgba(0, 0, 0, 0.87)"/>
    </IconButton>
  </div>
);

export default Herramientas;
