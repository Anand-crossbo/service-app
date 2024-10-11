import React, { useEffect, useRef } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ServicesCollection = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: '100%' },
      { y: 0, duration: 0.5, ease: 'easeInOut' }
    );
  }, []);

  const handleBackClick = () => {
    gsap.to(containerRef.current, {
      y: '100%',
      duration: 0.5,
      ease: 'easeInOut',
      onComplete: () => navigate(-1)
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const cards = Array.from({ length: 6 }, (_, index) => (
    <Box key={index} sx={{ padding: '8px' }}>
    <Card  sx={{ backgroundColor: 'white'}}>
    <CardMedia
      component="img"
      image="https://cdn-icons-png.flaticon.com/128/854/854878.png"
      alt="Card 2"
      sx={{
        width: '100%',
        height: 'auto',
        maxHeight: '60px', // Set a maximum height for the image
        objectFit: 'contain', // Ensure the image scales correctly
        padding: '10px', // Optional: Add some padding for better appearance
      }}
    />
    <CardContent
      sx={{
        height: '40px', // Define the height of CardContent
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px !important',
      }}
    >
      <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
        Location
      </Typography>
    </CardContent>
  </Card>
  </Box>
  ));


  return (
    <Box ref={containerRef} sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            border: '1px solid #4a4949',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            marginRight: '14px',
          }}
          onClick={handleBackClick}
        >
          <KeyboardBackspaceIcon />
        </Box>
        <Typography variant="h6">All Services</Typography>
      </Box>
      <Typography variant="h6">Go Anywhere</Typography>
      <Slider {...settings}>
        {cards}
      </Slider>
      <Typography variant="h6">Go Anywhere</Typography>
      <Slider {...settings}>
        {cards}
      </Slider>
      <Typography variant="h6">Go Anywhere</Typography>
      <Slider {...settings}>
        {cards}
      </Slider>
      <Typography variant="h6">Go Anywhere</Typography>
      <Slider {...settings}>
        {cards}
      </Slider>
    </Box>
  );
};

export default ServicesCollection;