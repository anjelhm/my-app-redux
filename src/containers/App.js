import React, { Component } from 'react';

// componente al que se le pasa la lógica.
import App from '../components/App';


class ContainerApp extends Component {

  render() {
    const { tieneAutentificacion } = this.props;

    return (
      <div>
        <App/>
      </div>
    );
  }
}

export default ContainerApp;
