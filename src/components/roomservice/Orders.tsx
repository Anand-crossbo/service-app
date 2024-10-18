import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';
import { Dish } from '../../store/booking/types';
import DefaultNav from '../default/DefaultNav';

interface CartItem {
  dish: Dish;
  count: number;
}

interface OrdersProps {
  cartItems: CartItem[];
  onBack: () => void;
}

const Orders = ({ cartItems, onBack }: OrdersProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const calculateTotalAmount = (price: number, count: number): number => {
    return price * count;
  };

  const totalAmount = cartItems.reduce((total, item) => total + calculateTotalAmount(item.dish.price.afterDiscount, item.count), 0);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          alignItems: 'center',
          height: isMobile ? '100vh' : '90vh',
          backgroundColor: 'background.default',
          borderTopLeftRadius: isMobile ? '0' : '16px',
          borderBottomLeftRadius: isMobile ? '0' : '16px',
        }}
      >
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <KeyboardBackspaceIcon sx={{ color: 'primary.main', fontSize: '30px', margin: '10px' }} onClick={onBack} />
          </Box>
        )}
        <Box sx={{ display: 'flex', paddingTop: isMobile ? '0' : '20px' }}>
          <Box sx={{ backgroundColor: 'primary.main', width: '120px', borderTopLeftRadius: '16px', borderBottomLeftRadius: '16px' }}>
            <Typography variant="h6" color="common.white" align="center" padding="10px">
              Cart
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: 'common.white', width: '120px', borderTopRightRadius: '16px', borderBottomRightRadius: '16px', border: `2px solid ${theme.palette.primary.main}` }}>
            <Typography variant="h6" color="common.black" align="center" padding="10px">
              Orders
            </Typography>
          </Box>
        </Box>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box key={item.dish._id} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}>
              <Typography fontSize="14px" color='common.black' align="left" padding="10px 40px">
                {item.dish.name}
              </Typography>
              <Typography fontSize="14px" color='common.black' align="right" padding="10px 40px">
                x{item.count} &nbsp; &nbsp;Aed {calculateTotalAmount(item.dish.price.afterDiscount, item.count).toFixed(2)}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography fontSize="14px" color='common.black' align="center" padding="10px 40px">
            No dish selected
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}>
          <Typography fontSize="14px" color='common.black' align="left" fontWeight="bold" padding="10px 40px">
            Total
          </Typography>
          <Typography fontSize="14px" color='common.black' align="right" fontWeight="bold" padding="10px 40px">
            Aed {totalAmount.toFixed(2)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', bottom: 30, justifyContent: 'center', position: 'fixed', alignItems: 'center' }}>
          <Button
            sx={{
              borderRadius: '10px',
              width: '100%',
              margin: '10px',
              padding: '8px 40px',
              fontSize: '12px',
              fontWeight: 'bold',
              // border: '2px solid #000',
              color: 'common.white',
              backgroundColor: 'primary.main',
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
      </Box>
  );
};

export default Orders;