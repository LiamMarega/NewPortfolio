import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Stack } from '@mui/material';
import './styles.scss';
import AccordionComponent from '../../../../components/Accordion';
import { tech1, tech2 } from '../../../../utils/Jsons/techs.jsx';

function AboutHome() {
  console.log(tech1);

  return (
    <Box className="ContainerAboutHome">
      <Grid2 container spacing={2}>
        <Grid2
          xs={6}
          display="flex"
          flexDirection={{ xs: 'column', md: 'column' }}
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
          <p>
            An Empathic, enthusiastic person, challenge-lover, and someone that
            always wants something new to learn about, I love to take collective
            property of the project that I’m working on and make sure that the
            result is the best one that it could’ve been.
          </p>
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
      <Grid2 container spacing={5}>
        <Grid2 xs={5}>
          <AccordionComponent data={tech1} />
        </Grid2>
        <Grid2 xs={5}>
          <AccordionComponent data={tech2} />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default AboutHome;
