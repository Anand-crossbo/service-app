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
        backgroundColor: 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{count}</Typography>
    </Box>
  <Typography color="common.white" onClick={onPayClick}>{t(`BASKET`)}: {cartItems[0]?.dish.currency} {totalAmount}</Typography>
</Box>
  );
};

export default AddToCart;