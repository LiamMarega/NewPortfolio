import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Logo from '../../Images/LogoEmpresa.png';
function Footer() {
  return (
    <Container fluid className='Footer'>
      <Container className='Footer_Container' style={{ color: 'white' }}>
        <Row className='Footer_Row'>
          <Col xs={4} className='ContainerLogo'>
            {' '}
            <Stack direction='row' spacing={2}>
              <Image fluid src={Logo} />
              <h3 style={{ marginTop: '7%' }}>Desarrollo, Diseño, Marketing.</h3>
            </Stack>{' '}
          </Col>
          <Col xs={4} className='ContainerLogo'></Col>
          <Col xs={4} className='ContainerLogo'>
            {' '}
            <Stack  spacing={2}>
              <h3 style={{ marginTop: '7%' }}>Sigueme</h3>
			<p>Linkedin</p>
			<p>Github</p>
			<p>Instagram</p>
            </Stack>
          </Col>
        </Row>
        {/* 		<Stack direction="row" spacing={2}>
        <p>p 1</p>
        <p>p 2</p>
        <p>p 3</p>
      </Stack> */}
      </Container>
    </Container>
  );
}

export default Footer;
