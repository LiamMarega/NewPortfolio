import React from 'react'
import "./Proyectos.css"
import fotoClima from "../../Images/1.png"
import fotoPomodoro from "../../Images/2.png";
import fotoRocket from "../../Images/3.png";
import fotoPerro from "../../Images/4.png";
import { Col, Container, Row } from 'react-bootstrap'
function Proyectos() {
    function onClick(e) {
        alert("Proyecto aun no Deployado :(")
      }

  return (
    <Container  fluid className='Proyectos_Container'>
       <Row >
        <Col sm={12} xl={12}>
        <h2>Mis Proyectos</h2>
        </Col>
        <Col className='Container_Col_Proyectos' sm={12} xl={12}>
        <ul class="img-list">
  <li><span class="img-placeholder">- placeholder -</span></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg"/></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg"/></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/012.jpg"/></li>
  <li><span class="img-placeholder">- placeholder -</span></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/015.jpg"/></li>
  <li><span class="img-placeholder">- placeholder -</span></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/038.jpg"/></li>
  <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/044.jpg"/></li>
</ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Proyectos