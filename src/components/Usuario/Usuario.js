import React from 'react';
import { Paper, CircularProgress } from 'material-ui';

import Fila from '../comunes/Fila';
import Seccion from '../comunes/Seccion';
import Valor from '../comunes/Valor/Valor';
import PropiedadesPersonales from './PropiedadesPersonales';
import PropiedadesLaborales from './PropiedadesLaborales';

import './Usuario.css';

const Usuario = ({ persona }) => (
  <div>
    {
      typeof persona.personal === 'undefined'
      ? <div style={ estilo.progreso }>
          <CircularProgress size={86} thickness={2} color="#691640"/>
          Descargando su informacion espere...
        </div>
      : !persona.personalOk && (
        <div>
          <div className="encabezado">
            <Paper className="col-md-3" style={ estilo.foto }>
              <div>
                <img src={ persona.personal.comprobanteFoto } className="foto" alt="foto"/>
              </div>
              <div className="titulo">
                <span>{ persona.personal.nombre.toUpperCase() }</span>
              </div>
            </Paper>
          </div>
          <Fila>
            <Seccion titulo="gob. fed." cols={3}>
              <Valor valor="16 / nov / 1993"/>
            </Seccion>
            <Seccion titulo="sep" cols={3}>
              <Valor valor="16 / nov / 1993"/>
            </Seccion>
            <Seccion titulo="tiempo efectivo" cols={3}>
              <Valor valor="31 años"/>
            </Seccion>
            <Seccion titulo="lagunas" cols={3}>
              <Valor valor="7 meses"/>
            </Seccion>
          </Fila>
          <Fila>
            <PropiedadesPersonales
              personal={ persona.personal }
              direccion={ persona.direccion }
              rfc={ persona.rfc }
            />
            <PropiedadesLaborales
              laboral={persona.laboral}
            />
          </Fila>
        </div>
      )
    }
  </div>
);

const estilo = {
  progreso: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    height: '220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '0px',
    paddingRight: '0px',
    marginTop: '40px',
    marginBottom: '40px'
  }
};

export default Usuario;
