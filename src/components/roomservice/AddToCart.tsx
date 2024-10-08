import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface AddToCartProps {
  count: number;
  onPayClick: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({ count, onPayClick }) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        height: '10vh', // 1/4 of the screen height
        backgroundColor: 'secondary.main', // Optional: Add a background color
        color: 'white', // Optional: Set text color to white
        zIndex: 1, // Optional: Set the z-index to 1000
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px'}} >
        <Typography paddingRight='10px'>{count} Items Added</Typography>
        <Button variant="contained" color="primary" onClick={onPayClick}>Pay</Button>
      </Box>

    </Box>
  );
};

export default AddToCart;