import React from 'react';

import Seccion from '../comunes/Seccion';
import Fila from '../comunes/Fila';
import Lista from '../comunes/Lista';
import Propiedad from './Propiedad/Propiedad';

const PropiedadesPersonales = ({ personal, direccion, rfc }) => (
  <div>
    <Fila>
      <Seccion titulo="información general" cols={6}>
        <Lista>
          <Propiedad propiedad="nombre" valor={`${personal.nombre} ${personal.apellidopaterno} ${personal.apellidomaterno}`}/>
          <Propiedad propiedad="curp" valor={personal.curp}/>
          <Propiedad propiedad="rfc" valor={rfc}/>
          <Propiedad propiedad="correo electronico" valor={personal.correo}/>
          <Propiedad propiedad="telefono" valor={personal.telefono}/>
        </Lista>
      </Seccion>
      <Seccion titulo="dirección" cols={6}>
        <Lista>
          <Propiedad propiedad="calle" valor={direccion.calle}/>
          <Propiedad propiedad="numero int / ext" valor={ direccion.numInterior + " / " + direccion.numExterior }/>
          <Propiedad propiedad="colonia" valor={direccion.colonia}/>
          <Propiedad propiedad="municipio" valor={direccion.ciudad}/>
          <Propiedad propiedad="estado" valor={direccion.estado}/>
          <Propiedad propiedad="codigo postal" valor={direccion.codigopostal}/>
        </Lista>
      </Seccion>
    </Fila>

  </div>
);

export default PropiedadesPersonales;
