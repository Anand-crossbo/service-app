import { Box, Typography } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const categoryCardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

const ActivityCategory = () => {
  return (
    <Box sx={{ margin: '20px auto', width: "100%" }}>
    <Slider {...categoryCardSettings}>
      <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1570060294351-f74295c31fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBzcG9ydHN8ZW58MHx8MHx8fDI%3D" alt="Description" />
        <Typography  textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Water Sports</Typography>
      </Box>
      <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1717981097221-3eb33b6df7f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkdmVudHVyZSUyMHNwb3J0c3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Adventure Sports</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1642104798671-01a4129f4fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFjcXVldCUyMHNwb3J0c3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Racquet Sports</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1509473730112-1cb48705018f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEdvbGYlMjAlMjYlMjBNaW5pJTIwR29sZnxlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Golf & Mini-Golf</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEZpdG5lc3MlMjAlMjYlMjBXZWxsbmVzc3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Fitness & Wellness</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1647242393155-1c1fa593ba1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyJTIwc3BvcnRzfGVufDB8fDB8fHwy" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Winter Sports</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1618245318763-a15156d6b23c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBhY3Rpdml0aWVzfGVufDB8fDB8fHwy" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Beach Activities</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '150px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1519162952575-c6c7199502a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9vciUyMHNwb3J0c3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
        <Typography textAlign='center' fontSize='14px' paddingTop='5px' fontWeight="bold">Indoor Sports</Typography>
      </Box>

    </Slider>
  </Box>
  )
}

export default ActivityCategory