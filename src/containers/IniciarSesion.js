import { reduxForm } from 'redux-form';

// accion
import { iniciarAutentificacion } from '../actions/autentificacion/actions';
// componente al que se la pasa la logica
import IniciarSesion from '../components/IniciarSesion';

const validate = values => {
  const errors = {};

  if (!values.correo) {
    errors.correo = "Este campo es requerido!.";
  }

  if (!values.clave) {
    errors.clave = "Este campo es requerido!.";
  }

  return errors;
};

/**
 * funcion a ejecutar en el onSubmit del formulario.
 * @param data contiene el correo electronico y la clave.
 * @param dispatch
 */
const onSubmit = (data, dispatch) => {
  dispatch(iniciarAutentificacion(data));
};

const Container = reduxForm({
  form: 'iniciarSesion',
  onSubmit,
  validate
})(IniciarSesion);

export default Container;
