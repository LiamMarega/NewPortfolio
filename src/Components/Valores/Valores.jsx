import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Valores.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import valores1 from '../../Images/valores1.png';
import valores2 from '../../Images/valores2.png';
import valores3 from '../../Images/valores3.png';

function Valores() {
  return (
    <Container fluid className='Valores_Container'>
      <Row style={{ width: '100%' }}>
        <Col id="ValoresColMargin" className="valores_Col" sm={5} md={3}>
          <Image loading="lazy" fluid src={valores1} />
          <div className='Valores_ContainerInfo'>
            <h4 class='display-6 fs-2 fs-lg-3 fw-bold'>Valores</h4>
            <p class='mb-0'>Los valores de una comunidad son aquellos criterios que comparten y ponen en práctica los miembros de una sociedad. Este tipo de valores nos sirven para convivir de forma respetuosa y en sintonía entre todos los miembros que componen el equipo.</p>
          </div>
        </Col>
        <Col className="valores_Col" sm={5} md={{ span: 3, offset: 1 }}>
          <Image loading="lazy" fluid src={valores2} />
          <div className='Valores_ContainerInfo'>
            <h4 class='display-6 fs-2 fs-lg-3 fw-bold'>Misión</h4>
            <p class='mb-0'>Mi misión es que nuestros desarrolladores, diseñadores, equipo de managers y más, encuentren un lugar de óptimo crecimiento y seamos un medio donde quieran participar, aprender y sumar esa experiencia a nuevos integrantes.</p>
          </div>
        </Col>
        <Col className="valores_Col" sm={5} md={{ span: 3, offset: 1 }}>
          <Image loading="lazy" fluid src={valores3} />
          <div className='Valores_ContainerInfo'>
            <h4 class='display-6 fs-2 fs-lg-3 fw-bold'>Visión</h4>
            <p class='mb-0'>Mi visión es proporcionar las herramientas necesarias para ese aprendizaje y mediante la ejecución de proyectos guiado por equipo experimentado a nuevos integrantes. </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Valores;
