import { Box, Paper } from '@mui/material';
import React from 'react';
import Loading from '../../components/Loading';
import BasePages from '../Base';
import AboutHome from './parts/About';
import WelcomeComponent from './parts/Welcome';

function Home() {
  return (
    <div>
      <BasePages>
        <Loading />
        <WelcomeComponent />
        <AboutHome />
      </BasePages>
    </div>
  );
}

export default Home;
