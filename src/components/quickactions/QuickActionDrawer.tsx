import { Box, Button, SwipeableDrawer, Typography,styled } from '@mui/material';
import React, { useState } from 'react'
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface QuickActionDrawerProps {
  open: boolean;
  onClose: () => void;
}

const QuickActionDrawer: React.FC<QuickActionDrawerProps> = ({ open, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleOrder = () => {
    // Implement order logic here
    alert(`Ordered ${quantity}`);
  };

  const Puller = styled('div')(({ theme }) => ({
    width: 60,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 3,
    position: 'absolute',
    top: 10,
    left: 'calc(50% - 30px)',
  }));

  return (
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        onOpen={() => {}}
        PaperProps={{
            sx: {
              borderRadius: '16px 16px 0 0', // Apply border radius to the bottom corners
              backgroundColor: '#ffffff',
            },
          }}
      >
        <Puller />
        <Typography align='center' variant="h6"></Typography>
         <Box display="flex" alignItems="center" justifyContent="space-evenly" margin="20px 16px 16px 16px">
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
        Order
      </Button>
    </Box>
        
      </SwipeableDrawer>
  )
}

export default QuickActionDrawer