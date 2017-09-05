import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/Root';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#233d7b',
    disabledColor: '#757575'
  }
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Root store={store} history={history}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
