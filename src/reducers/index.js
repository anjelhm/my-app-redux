import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import ui from './ui';

const rootReducer = combineReducers({
  form,
  routing,
  ui
});

export default rootReducer;
