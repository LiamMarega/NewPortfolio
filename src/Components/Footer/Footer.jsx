import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"
import { Container } from 'react-bootstrap'
import Stack from '@mui/material/Stack';

function Footer() {
  return (
	<Container fluid className="Footer">
		<Container className="Footer_Container" style={{color: "white"}}>
		<Stack direction="row" spacing={2}>
        <p>p 1</p>
        <p>p 2</p>
        <p>p 3</p>
      </Stack>
		</Container>
		
	</Container>
  )
}

export default Footer