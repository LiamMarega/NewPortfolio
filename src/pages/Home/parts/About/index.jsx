import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import './styles.scss';

function AboutHome() {
  return (
    <Box className="ContainerAboutHome">
      <Grid2 container spacing={2}>
        <Grid2
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <p>
            I’m a front-end web developer from Argentina, who enjoys the
            creation of good-looking content living on the internet. I have
            always been passionate about technology and ever since I finished
            high school I began to learn how to code right at college. Recently,
            I graduated from a full-stack coding Bootcamp and want to start
            developing my career in the tech world.
          </p>
        </Grid2>
        <Grid2
          xs={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="developerIMG"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default AboutHome;
