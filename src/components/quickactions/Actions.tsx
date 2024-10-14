import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DefaultNav from '../default/DefaultNav';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import gsap from "gsap";

const Actions = () => {
  const location = useLocation();
  const { actionText, imageUrl } = location.state || { actionText: 'No action text provided', imageUrl: '' };

  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);


  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleOrder = () => {
    // Implement order logic here
    alert(`Ordered ${quantity} ${actionText}`);
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
      <Typography variant="h6" margin="16px">Quick Actions:</Typography>
      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt={actionText}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '100px', // Set a maximum height for the image
            objectFit: 'contain', // Ensure the image scales correctly
          }}
        />
      )}
        <Typography align='center' variant="h6">{actionText}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-evenly" margin="16px">
            <Typography align='left' margin="16px" fontSize="18px">Select Quantity: </Typography>
            <Box display="flex" alignItems="center">
            <RemoveCircleIcon onClick={handleDecrease} />
            <Typography align='center' variant="h6" margin="0 16px">{quantity}</Typography>
            <AddCircleIcon onClick={handleIncrease} />
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" margin="16px">
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#3868aa',
          color: 'white',
          '&:hover': {
            backgroundColor: '#2c4f7c',
          },
          '&:active': {
            backgroundColor: '#1e3554',
          },
        }}
        onClick={handleOrder}
      >
        Avail Offer
      </Button>
    </Box>

    </Box>
  );
};

export default Actions;