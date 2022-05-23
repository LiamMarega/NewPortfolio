import React, { useState } from 'react';
import Habilidades from '../Components/Habilidades/Habilidades.jsx';

import Presentacion from '../Components/Presentacion/Presentacion.jsx';
import Proyectos from '../Components/Proyectos/Proyectos.jsx';
import Habilidades2 from '../Components/Habilidades2/Habilidades2.jsx';
import Personaje from '../Components/Personaje/Personaje.jsx';

function Home() {
  return (
    <div>
      <Presentacion />
      <Habilidades />
      <Proyectos />
      <Habilidades2 />
      <Personaje />
    </div>
  );
}

export default Home;
