import React, { useState } from "react";
import Habilidades from "../Components/Habilidades/Habilidades.jsx";

import Presentacion from "../Components/Presentacion/Presentacion.jsx";
function Home() {
  return (
    <div>
      <Presentacion />
      <Habilidades />
    </div>
  );
}

export default Home;
