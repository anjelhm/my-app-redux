import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const ReestableceClave = ({ accion }) => (
  <FlatButton label="olvidé mi contraseña" onTouchTap={accion} primary style={{ marginRight: '20px' }}/>
);

export default ReestableceClave;
