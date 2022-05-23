import React from 'react';
import Spline from '@splinetool/react-spline';
import { Container } from 'react-bootstrap';
import "./Personaje.css"

function Personaje() {
  return (
    <Container fluid className='Personaje_Container'>
      <Spline scene='https://prod.spline.design/FvgoVSjhqTsvcsfp/scene.splinecode' />
    </Container>
  );
}

export default Personaje;
