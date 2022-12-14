import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import './assets/styles/index.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe0067'
    },
    secondary: {
      main: '#e040fb'
    },
    bg: {
      main: '#1f232e'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
