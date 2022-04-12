import React from 'react'
import './Proyectos.css'
import fotoClima from '../../Images/1.png'
import fotoPomodoro from '../../Images/2.png'
import fotoRocket from '../../Images/3.png'
import fotoPerro from '../../Images/4.png'
import fotoTarp from '../../Images/5.png'
import fotoMovie from '../../Images/6.png'

/* import MUI */
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
/* import boostrap */
import { Col, Container, Row } from 'react-bootstrap'

function Proyectos() {
  function onClick(e) {
    alert('Proyecto aun no Deployado :(')
  }

  const itemData = [
    {
      img: fotoClima,
      title: 'Wheater App'
    },
    {
      img: fotoRocket,
      title: 'Rocket Project'
    },
    {
      img: fotoPerro,
      title: 'Dog App'
    },
    {
      img: fotoPomodoro,
      title: 'Pomodoro'
    },
    {
      img: fotoTarp,
      title: 'Pomodoro'
    },

    {
      img: fotoMovie,
      title: 'Pomodoro'
    }
    
    
  ]
  const itemData2 = [
    {
      img: fotoPomodoro,
      title: 'Pomodoro'
    },
    {
      img: fotoTarp,
      title: 'Pomodoro'
    },

    {
      img: fotoMovie,
      title: 'Pomodoro'
    }
  ]

  return (
    <Container fluid className='Proyectos_Container'>
      <Container fluid className='Proyectos_Container_Data1'>
        <Row>
          <ImageList sx={{ width: 1200, height: 600 }} variant='woven' cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} srcSet={item.img} alt={item.title} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Row>
     
          
  
    </Container>
    </Container>
  )
}

export default Proyectos
