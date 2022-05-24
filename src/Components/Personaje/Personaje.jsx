import React from 'react';
import Spline from '@splinetool/react-spline';
import { Col, Container, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Personaje.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const bull = (
  <Box component='span' sx={{  display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

function Personaje() {
  return (
    <Container fluid className='Personaje'>
      <Container className='Personaje_Container'>
        <Row className='Personaje_Container_Row'>
          <Col sm={12} md={4}>
            <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  adjective
                </Typography>
                <Typography variant='body2'>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
			<Card sx={{ minWidth: 275, marginBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  adjective
                </Typography>
                <Typography variant='body2'>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
			<Card sx={{ minWidth: 275, marginBottom: "20px" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant='h5' component='div'>
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  adjective
                </Typography>
                <Typography variant='body2'>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Col>
          <Col sm={12} md={8} style={{ cursor: 'pointer' }}>
            <Spline scene='https://prod.spline.design/xXv6qxWcFJJSNE3T/scene.splinecode' />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Personaje;
