import { Box, Paper } from '@mui/material';
import React from 'react';
import Loading from '../../components/Loading';
import BasePages from '../Base';
import WelcomeComponent from './parts/Welcome';

function Home() {
  return (
    <div>
      <BasePages>
        <Loading />
        <WelcomeComponent />
      </BasePages>
    </div>
  );
}

export default Home;
