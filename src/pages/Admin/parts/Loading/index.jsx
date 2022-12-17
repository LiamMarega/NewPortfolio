import React, {useState} from 'react';
import {Box, Button, CircularProgress, Paper, TextField} from '@mui/material';

import Person2Icon from '@mui/icons-material/Person2';
import KeyIcon from '@mui/icons-material/Key';
import {styled} from '@mui/material/styles';
import {useDispatch} from 'react-redux';

const InputStyle = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: 'white',
    margin: '2% 0',
    '& fieldset': {
      borderColor: 'orange',
    },
    '&:hover fieldset': {
      borderColor: 'orange',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
});

function LoginAdmin() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="flex" sx={{width: '100vw', height: '100vh', backgroundColor: '#0D164B'}}>
      <Paper
        sx={{
          backgroundColor: '#0D164d',
          borderRadius: '20px',
          padding: '2% 2% 7% 2%',
          color: 'white',
          width: '50%',
          boxShadow: '17px 25px 95px -9px rgba(0,0,0,0.75)',
        }}
      >
        <div className="flex">
          <img
            src={'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'}
            width="30%"
            alt="logo"
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputStyle
            fullWidth
            hiddenLabel
            name="email"
            placeholder="Nombre de usuario"
            variant="outlined"
            margin="dense"
            value={form.email}
            onChange={(e) => handleChange(e)}
            InputProps={{
              startAdornment: <Person2Icon />,
            }}
          />
          <InputStyle
            fullWidth
            hiddenLabel
            name="password"
            type="password"
            placeholder="Contraseña"
            variant="outlined"
            margin="dense"
            value={form.password}
            onChange={(e) => handleChange(e)}
            InputProps={{
              startAdornment: <KeyIcon />,
            }}
          />

          <Button size="large" disabled={loading} type="submit" variant="contained">
            {loading ? (
              <Box>
                <CircularProgress />
              </Box>
            ) : (
              'Iniciar sesión'
            )}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginAdmin;
