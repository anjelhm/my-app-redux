import { replace } from 'react-router-redux';

import firebase, { firebaseAuth, firebaseRef } from '../../firebase';

import {
  AUTENTIFICACION_INICAR,
  AUTENTIFICACION_OK,
  AUTENTIFICACION_ERROR,
  AUTENTIFICACION_DESHACER,
  OBTENER_PERSONAL_INICIAR,
  OBTENER_PERSONAL_OK
} from '../../constants/ActionTypes';

export const autentificacionIniciar = () =>
  ({ type: AUTENTIFICACION_INICAR });
export const autentificacionOk = usuario =>
  ({ type: AUTENTIFICACION_OK, usuario });
export const autentificacionError = error =>
  ({ type: AUTENTIFICACION_ERROR, error });
export const autentificacionDeshacer = () =>
  ({ type: AUTENTIFICACION_DESHACER });
export const obtenerPersonalIniciar = () =>
  ({ type: OBTENER_PERSONAL_INICIAR });
export const obtenerPersonalOk = payload =>
    ({ type: OBTENER_PERSONAL_OK, payload });

/**
 * funcion para agregar el acceso al historial
 * @param correo
 */
const registrarEntrada = correo => {
  firebaseRef.child('historial').push({
    correo,
    tipo: 'acceso',
    tiempo: firebase.database.ServerValue.TIMESTAMP
  });
};

/**
 * accion para iniciar la autentificacion por usuario y contraseña.
 * @param correo
 * @param clave
 */
export const iniciarAutentificacion = ({ correo, clave }) => {
  return dispatch => {
    dispatch(autentificacionIniciar());
    firebaseAuth.signInWithEmailAndPassword(correo, clave)
      .then(() => registrarEntrada(correo)) // registra el acceso en el log
      .catch(({ message }) => dispatch(autentificacionError(message)));
  };
};

/**
 * accion que esta al pendiente de cualquier
 * cambio de sesion.
 */
export const autentificacion = () => {
  return dispatch => {
    firebaseAuth.onAuthStateChanged(usuario => {
      if (usuario) {
        // se busca la informacion del usuario por su uid.
        firebaseRef.child(`usuariosEmpleados/entidades/${usuario.uid}`).once('value')
          .then(snapshot => dispatch(autentificacionOk(snapshot.val())))
          .catch();
      } else {
        dispatch(autentificacionDeshacer());
        // reemplaza cualquier ruta por la raiz de la aplicacion
        dispatch(replace('/'));
      }
    });
  };
};

/**
* acción que obtiene datos del empleado
* @param id
*/

export const obtenerPersonal = id => {
  return dispatch => {
    dispatch(obtenerPersonalIniciar());

    firebaseRef.child(`personal/informacion/${id}`).once('value')
      .then(snapshot => dispatch(obtenerPersonalOk(snapshot.val())));
  };
};

/**
 * accion para desautentificar al usuario y cerrar su sesion.
 */
export const desautentificar = () => {
  return dispatch => {
    firebaseAuth.signOut();
  };
};
