import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

// acciones.
import { cerrarSnackbar } from '../actions/ui/actions';
import { autentificacion } from '../actions/autentificacion/actions';
// metodos del reducer.
import { tieneAutentificacion } from '../reducers/autentificacion';
import { obtenerSnackbar } from '../reducers/ui';
// componente al que se le pasa la lógica.
import App from '../components/App';

import FullLoader from '../components/FullLoader/FullLoader';

class Container extends Component {

  componentDidMount() {
    this.props.autentificacion();
  }

  componentDidUpdate() {
    const { replace, tieneAutentificacion, location: { pathname } } = this.props;

    (pathname !== '/' && !tieneAutentificacion) && replace('/');
  }

  render() {
    const { tieneAutentificacion } = this.props;

    return (
      <div>
        {
          tieneAutentificacion === null
          ? <FullLoader/>
          : <App {...this.props}/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tieneAutentificacion: tieneAutentificacion(state.autentificacion),
  snackbar: obtenerSnackbar(state.ui)
});

const ContainerApp = connect(
  mapStateToProps,
  { autentificacion, replace, cerrarSnackbar }
)(Container);

export default ContainerApp;
