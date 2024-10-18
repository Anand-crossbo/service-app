import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import ActivityCategory from './ActivityCategory';
import Sports from './Sports';
import BigActivityCards from './BigActivityCards';
import DefaultNav from '../default/DefaultNav';
import gsap from "gsap";

const ActivityMain = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: '100%' },
      { y: 0, duration: 0.5, ease: 'easeInOut' }
    );
  }, []);

  return (
    <Box ref={containerRef} >
      <DefaultNav/>
      <ActivityCategory/>
      <BigActivityCards/>
      <Sports />

    </Box>
  );
};

export default ActivityMain;