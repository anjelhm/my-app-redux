import {
  ABRIR_SNACKBAR,
  CERRAR_SNACKBAR
} from '../../constants/ActionTypes';

export const abrirSnackbar = mensaje =>
  ({ type: ABRIR_SNACKBAR, mensaje });
export const cerrarSnackbar = () =>
  ({ type: CERRAR_SNACKBAR });
