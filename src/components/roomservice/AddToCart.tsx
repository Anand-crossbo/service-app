import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Dish } from '../../store/booking/types';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
    backgroundColor: 'custom.lightMain', // Optional: Add a background color
    color: 'white', // Optional: Set text color to white
    zIndex: 1, // Ensure it is above other content
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: 1.5,
    width: '50%',
    margin: '0 auto', // Center the box horizontally
    borderRadius: '2.5rem'
  }}
>
    <Box
      sx={{
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{count}</Typography>
    </Box>
  <Typography variant='h4' color="common.white" onClick={onPayClick}>{t(`BASKET`)}: {cartItems[0]?.dish.currency} {totalAmount}</Typography>
</Box>
  );
};

export default AddToCart;