import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import autentificacion from './autentificacion';
import ui from './ui';
import actualizacion from './actualizacion';

const rootReducer = combineReducers({
  autentificacion,
  form,
  routing,
  ui,
  actualizacion
});

export default rootReducer;
