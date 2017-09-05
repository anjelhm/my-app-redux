import React from 'react';

import Paper from 'material-ui/Paper';
import { Snackbar } from 'material-ui';

import Banner from './Banner/Banner';
import Barra from '../components/Barra/Barra';
import IniciarSesion from '../containers/IniciarSesion';
import Footer from './Footer/Footer';

import './App.css';

const App = ({ children, tieneAutentificacion, snackbar, cerrarSnackbar }) => (
  <Paper zDepth={0} rounded={false} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)` }}>
    <Banner/>
    <Barra/>
    <div style={{ minHeight: '600px' }}>
      {
        tieneAutentificacion
        ? children
        : <IniciarSesion/>
      }
    </div>
    <Footer/>
    <Snackbar
      open={snackbar.visible}
      message={snackbar.mensaje}
      autoHideDuration={1000}
      onRequestClose={cerrarSnackbar}
    />
  </Paper>
);

export default App;
