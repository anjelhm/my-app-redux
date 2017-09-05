import { combineReducers } from 'redux';

import {
  ABRIR_SNACKBAR,
  CERRAR_SNACKBAR
} from '../constants/ActionTypes';

const estadoInicia = {
  snackbar: {
    visible: false,
    mensaje: ''
  }
};

const snackbar = (state = estadoInicia.snackbar, action) => {
  switch (action.type) {
    case ABRIR_SNACKBAR:
      return {
        visible: true,
        mensaje: action.mensaje
      };
    case CERRAR_SNACKBAR:
      return {
        visible: false,
        mensaje: ''
      };
    default:
      return state;
  }
};

export const obtenerSnackbar = state =>
  state.snackbar;

export default combineReducers({
  snackbar
});
