import { combineReducers } from 'redux';

import {
  AUTENTIFICACION_OK,
  AUTENTIFICACION_INICAR,
  AUTENTIFICACION_ERROR,
  AUTENTIFICACION_DESHACER,
  OBTENER_PERSONAL_INICIAR,
  OBTENER_PERSONAL_OK
} from '../constants/ActionTypes';

const estadoInicial = {
  usuario: {},
  estaAutentificado: null,
  estado: {},
  personal: {},
  personalOk: null
};

const usuario = (state = estadoInicial.usuario, action) => {
  switch (action.type) {
    case AUTENTIFICACION_OK:
      return {
        ...state,
        ...action.usuario
      };
    case AUTENTIFICACION_ERROR:
      return {
        ...state
      };
    case AUTENTIFICACION_DESHACER:
      return estadoInicial.usuario;
    default:
      return state;
  }
};

const estaAutentificado = (state = estadoInicial.estaAutentificado, action) => {
  switch (action.type) {
    case AUTENTIFICACION_OK:
      return true;
    case AUTENTIFICACION_DESHACER:
      return false;
    default:
      return state;
  }
};

const estado = (state = estadoInicial.estado, action) => {
  switch (action.type) {
    case AUTENTIFICACION_INICAR:
      return {
        ...state,
        error: null
      };
    case AUTENTIFICACION_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

const personal = (state = estadoInicial.personal, action) => {
  switch (action.type) {
    case OBTENER_PERSONAL_INICIAR:
      return {
        personalOk: true
      };
    case OBTENER_PERSONAL_OK:
      return {
        ...action.payload,
        personalOk: false
      }
      default:
        return state;
    }
  };

export const tieneAutentificacion = state =>
  state.estaAutentificado;

export default combineReducers({
  usuario,
  estaAutentificado,
  estado,
  personal
});
