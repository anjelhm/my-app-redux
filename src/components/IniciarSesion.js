import React from 'react';

import { Field } from 'redux-form';

import { TextField, RaisedButton, Paper } from 'material-ui';

import ReestablecerClave from '../containers/ReestableceClave';

const renderField = ({ input, label, type, meta: { touched, error, warning }, hint, onKeyDown, ref, autoFocus }) => (
  <TextField
    errorText={touched && error}
    autoComplete="off"
    autoFocus={autoFocus}
    hintText={hint}
    floatingLabelText={label}
    floatingLabelFixed
    fullWidth
    type={type}
    onKeyDown={onKeyDown}
    {...input}
  />
);

const IniciarSesion = ({ handleSubmit }) => (
  <div className="container" style={ estilo.contenedor }>
    <Paper className="col-md-4" rounded={false}>
      <div style={ estilo.titulo }>
        <span style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.87)' }}>Acceder</span>
        <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.87)' }}>Usa tu cuenta</span>
      </div>
      <div style={ estilo.campos }>



        <form>
          <Field
            name="correo"
            component={renderField}
            label="CORREO ELECTRONICO"
            hint="Introduzca su correo electronico"
          />
          <Field
            type="password"
            name="clave"
            component={renderField}
            label="CONTRASEÑA"
            hint="Introduzca su contraseña"
          />
        </form>

      </div>
      <div style={ estilo.boton }>
        <ReestablecerClave/>
        <RaisedButton label="Iniciar" primary onClick={() => handleSubmit()}/>
      </div>
    </Paper>
  </div>
);

const estilo = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px'
  },
  titulo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '20px'
  },
  campos: {
    marginBottom: '40px'
  },
  boton: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

export default IniciarSesion;
