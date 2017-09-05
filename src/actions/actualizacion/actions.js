import firebase, { firebaseAuth } from '../../firebase';

import {
  ACTUALIZA_CLAVE_INICIAR,
  ACTUALIZA_CLAVE_OK,
  ACTUALIZA_CLAVE_ERROR
} from '../../constants/ActionTypes';

export const actualizaClaveIniciar = () =>
  ({ type: ACTUALIZA_CLAVE_INICIAR });
export const actualizaClaveOk = payload =>
  ({ type: ACTUALIZA_CLAVE_OK, payload });
export const actualizaClaveError = error =>
  ({ type: ACTUALIZA_CLAVE_ERROR, error });

/**
* accion que envía un correo para reestablecer contraseña
* @param correo
*/
export const inciaActualizarClave = (correo) => {
  return dispatch => {
    dispatch(actualizaClaveIniciar());

      firebaseAuth.sendPasswordResetEmail(correo)
        .then(() => {
          dispatch(actualizaClaveOk('Correo enviado!'));
        })
        .catch(() => {
          dispatch(actualizaClaveError(true));
        })
  };
};
