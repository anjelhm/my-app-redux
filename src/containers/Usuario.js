import React, { Component } from 'react';
import { connect } from 'react-redux';

import Usuario from '../components/Usuario/Usuario';
import { autentificacion, obtenerPersonal } from '../actions/autentificacion/actions';

class UsuarioContenedor extends Component {
  componentDidMount(){
    this.props.autentificacion();
    this.props.obtenerPersonal(this.props.usuario.id);
  }
  render() {
    return (
      <div>
        <Usuario persona = { this.props.personal } />
      </div>
    );
  }
}

const mapStateToProps = ({ autentificacion: { usuario, personal } }) => ({
  usuario,
  personal
});

const ContainerUsuario = connect(
  mapStateToProps,
  { autentificacion, obtenerPersonal }
)(UsuarioContenedor);

export default ContainerUsuario;
