import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, TextField, FlatButton, RaisedButton } from 'material-ui';

import ReestableceClave from '../components/ReestableceClave';
import { inciaActualizarClave } from '../actions/actualizacion/actions';

class ReestablecerClave extends Component {

  constructor() {
    super();

    this.state = {
      abrir: false,
      valor: '',
      alerta: false
    };
  }

  cerrarDialogo = () => {
    this.setState({
      abrir: false
    });
  };

  cerrarAlerta = () => {
    this.setState({
      alerta: false
    });
  }

  abrirDialogo() {
    this.setState({
      abrir: true
    });
  }

  enviarCorreo = () => {
    this.props.inciaActualizarClave(this.state.valor);
    this.setState({
      abrir: false,
      valor: '',
      alerta: true
    });
  }

  onChange(evt) {
    this.setState({
      valor: evt.target.value
    });
  }

  render() {
    console.log('RENDER: ', this.props.actualiza);
    const actions = [
      <RaisedButton
        label="Aceptar"
        primary
        onTouchTap={ this.enviarCorreo }
      />,
      <FlatButton
        label="Cancelar"
        primary
        onTouchTap={this.cerrarDialogo}
      />
    ];

    const acciones = [
      <RaisedButton
        label="Aceptar"
        primary={true}
        onTouchTap={this.cerrarAlerta}
      />
    ];

    return (
      <div>
        <ReestableceClave accion={ () => this.abrirDialogo() }/>
        <Dialog
          title="Reestablece tu contraseña"
          actions={ actions }
          modal={ false }
          open={ this.state.abrir }
          onRequestClose={ this.cerrarDialogo }
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            Se le enviará un correo para que pueda reestablecer su contraseña
            <TextField
              hintText="Escribe aquí el correo electrónico"
              floatingLabelText="Correo electrónico"
              floatingLabelFixed={true}
              value={ this.state.valor }
              onChange={ this.onChange.bind(this) }
              type="email"
              fullWidth
              autoFocus
            />
          </div>
        </Dialog>
        <Dialog
          actions={ acciones }
          modal={ false }
          open={ this.state.alerta }
          onRequestClose={ this.cerrarAlerta }
        >
          {
            this.props.actualiza.error && (
              <div style={{ color: '#F44336', fontWeight: 'bold' }}> LA DIRECCIÓN DE CORREO ELECTRÓNICO NO EXISTE </div>
            )
          }
          {
            !this.props.actualiza.error && (
              <div style={{ color: '#233d7b', fontWeight: 'bold' }}> HEMOS ENVIADO UN CORREO DE RECUPERACIÓN DE CONTRASEÑA, POR FAVOR REVISE SU BANDEJA DE ENTRADA </div>
            )
          }
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ actualizacion: { actualiza } }) => ({
  actualiza
});

const ContenedorClave = connect(
  mapStateToProps,
  { inciaActualizarClave }
)(ReestablecerClave);

export default ContenedorClave;
