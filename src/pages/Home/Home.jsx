import {Box, Paper} from '@mui/material';
import React from 'react';
import Loading from '../../components/Loading';
import BasePages from '../Base';
import AboutHome from './parts/About';
import WelcomeComponent from './parts/Welcome';
import './styles.scss';

function Home() {
  const [loading, setLoading] = React.useState(true);

  //settimeout
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loader={loading} />
      ) : (
        <div className="containerHome">
          <BasePages>
            <WelcomeComponent />
            <AboutHome />
          </BasePages>
        </div>
      )}
    </div>
  );
}

export default Home;
