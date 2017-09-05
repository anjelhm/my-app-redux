import { connect } from 'react-redux';

import { tieneAutentificacion } from '../reducers/autentificacion';


import Usuario from './Usuario';

const mapStateToProps = (state) => ({
  autentificado: tieneAutentificacion(state.autentificacion)
});

const ContainerHome = connect(
  mapStateToProps
)(Usuario);

export default ContainerHome;
