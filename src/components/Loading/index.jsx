import React, { useEffect, useState } from 'react';
import './style.scss';

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setTimeout(function () {
        setLoading(false);
      }, 6000);
    }
    return () => {
      isMounted = false;
    };
  });

  return (
    <div className={loading ? 'Loading true' : 'Loading false'}>
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
