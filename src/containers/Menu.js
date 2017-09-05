import { connect } from 'react-redux';

import { desautentificar } from '../actions/autentificacion/actions';
import { tieneAutentificacion } from '../reducers/autentificacion';
import Menu from '../components/Barra/Menu/Menu';

const mapStateToProps = (state) => ({
  autentificacion: tieneAutentificacion(state.autentificacion)
});

const Container = connect(
  mapStateToProps,
  { desautentificar }
)(Menu);

export default Container;
