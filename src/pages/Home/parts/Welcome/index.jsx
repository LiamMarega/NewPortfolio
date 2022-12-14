import { Paper } from '@mui/material';
import React from 'react';
import './styles.scss';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animations/82423-developer-yoga.json';
import animationDataBurst from '../../../../assets/animations/18373-circular-burst.json';
import Grid from '@mui/material/Unstable_Grid2';
import Typewriter from 'typewriter-effect';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
};
const defaultOptionsBurst = {
  loop: true,
  autoplay: true,
  animationData: animationDataBurst
};

function WelcomeComponent() {
  return (
    <div className="ContainerWelcomeComponent">
      <Grid container spacing={2}>
        <Grid xs={5} display="flex" justifyContent="center" alignItems="center">
          <div className="containerTexts flexStart">
            <h1>Liam Marega</h1>
            <h3>
              <Typewriter
                options={{
                  strings: ['Front-end', 'Back-end', 'Full-stack', ';)'],
                  autoStart: true,
                  loop: true
                }}
              />
            </h3>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="LottieAnimation">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled
              height={600}
              width={600}
            />
            <div className="LottieAnimationBurst">
              <Lottie
                speed={0.3}
                options={defaultOptionsBurst}
                isClickToPauseDisabled
                height={700}
                width={700}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WelcomeComponent;
