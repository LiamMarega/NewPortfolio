import React, { useEffect, useState } from 'react';
import './style.scss';

function Loading({ loader }) {
  return (
    <div className={loader ? 'Loading true' : 'Loading false'}>
      <div className="landing__nombre">
        <div className="containerLoading">
          <h1>Hola, yo soy</h1>
          <h1>Liam.</h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
