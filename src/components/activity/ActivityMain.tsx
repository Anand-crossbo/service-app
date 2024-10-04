import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button,useMediaQuery, useTheme } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActivityCategory from './ActivityCategory';
import Sports from './Sports';
import BigActivityCards from './BigActivityCards';

const ActivityMain = () => {

  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const smallCardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

  return (
    <Box>
      <ActivityCategory/>
      <BigActivityCards/>
      <Sports />

    </Box>
  );
};

export default ActivityMain;