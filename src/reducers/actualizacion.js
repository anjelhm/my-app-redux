import { combineReducers } from 'redux';

import {
  ACTUALIZA_CLAVE_INICIAR,
  ACTUALIZA_CLAVE_OK,
  ACTUALIZA_CLAVE_ERROR
} from '../constants/ActionTypes';

const estadoInicial = {
  actualiza: {}
};

const actualiza = (state = estadoInicial.actualiza, action) => {
  switch(action.type) {
    case ACTUALIZA_CLAVE_INICIAR:
      return {
        ...state,
        actualizando: true,
        error: false
      };
    case ACTUALIZA_CLAVE_OK:
      return {
        ...state,
        actualizando: false,
        estado: action.payload,
        error: false
      };
    case ACTUALIZA_CLAVE_ERROR:
      return {
        ...state,
        actualizando: false,
        error: action.error
      };
    default: return state;
  }
};

export default combineReducers({
  actualiza
});
