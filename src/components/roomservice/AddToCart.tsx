import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Dish } from '../../store/booking/types';

interface CartItem {
  dish: Dish;
  count: number;
}

interface AddToCartProps {
  cartItems: CartItem[];
  count: number;
  onPayClick: () => void;
}
const AddToCart: React.FC<AddToCartProps> = ({cartItems, count, onPayClick }) => {
  const calculateTotalAmount = (price: number, count: number): number => {
    return price * count;
  };

  const totalAmount = cartItems.reduce((total, item) => total + calculateTotalAmount(item.dish.price.afterDiscount, item.count), 0);
  return (
<Box
  sx={{
    position: 'sticky',
    bottom: 10,
    left: 0,
    right: 0,
    height: '8vh', // 1/10 of the screen height
    backgroundColor: '#76d45f', // Optional: Add a background color
    color: 'white', // Optional: Set text color to white
    zIndex: 1, // Ensure it is above other content
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px',
    width: '50%',
    margin: '0 auto', // Center the box horizontally
    borderRadius: '40px'
  }}
>
    <Box
      sx={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: '#095715',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{count}</Typography>
    </Box>
  <Typography color="black" onClick={onPayClick}>Basket: AED {totalAmount}</Typography>
</Box>
  );
};

export default AddToCart;