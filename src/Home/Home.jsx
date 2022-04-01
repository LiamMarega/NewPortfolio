import React, { useState } from "react";
import Habilidades from "../Components/Habilidades/Habilidades.jsx";

import Presentacion from "../Components/Presentacion/Presentacion.jsx";
import Proyectos from "../Components/Proyectos/Proyectos.jsx";
function Home() {
  return (
    <div>
      <Presentacion />
      <Habilidades />
      <Proyectos />
    </div>
  );
}

export default Home;
