import React, { useEffect, useRef } from 'react'
import DefaultNav from '../default/DefaultNav'
import { Box, Button, Typography } from '@mui/material'
import gsap from "gsap";
import { useLocation } from 'react-router-dom';

const ActivityAdAbout = () => {

  const containerRef = useRef(null);
  const location = useLocation();

  const { title, img } = location.state || { title: 'No action text provided', img: '' };

  const handleOrder = () => {
    // Implement order logic here
    alert('Offer availed!');
  };


  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: '100%' },
      { y: 0, duration: 0.5, ease: 'easeInOut' }
    );
  }, []);
  
  return (
    <Box ref={containerRef}>
      <DefaultNav />
      {img && (
        <Box
          component="img"
          src={img}
          alt={title}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain', // Ensure the image scales correctly
            borderRadius: '16px',
            padding: '10px',
          }}
        />
      )}
      <Typography margin='5px' align='center' variant="h4">{title}</Typography>
      <Box display="flex" justifyContent="center" margin="16px">
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'primary.main',
          color: 'common.white',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
          '&:active': {
            backgroundColor: 'primary.main',
          },
        }}
        onClick={handleOrder}
      >
        Avail Offer
      </Button>
    </Box>

    </Box>
  )
}

export default ActivityAdAbout