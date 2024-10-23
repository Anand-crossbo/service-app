import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Radio, RadioGroup, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React, { useState } from 'react';
import { Dish } from '../../store/booking/types';
import { useTranslation } from 'react-i18next';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

interface CartItem {
  dish: Dish;
  count: number;
}

interface OrdersProps {
  cartItems: CartItem[];
  onBack: () => void;
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: (dish: Dish) => void;
}

const Orders = ({ cartItems, onBack, onAddToCard, onRemoveFromCard }: OrdersProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState('');
  const [selectedTip, setSelectedTip] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [noContactDelivery, setNoContactDelivery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const roomNumber = 101;

  const handleApplyPromoCode = () => {
    // Logic to apply the promo code
    setAppliedPromoCode(promoCode);
  };

  const handleSelectTip = (tip: number) => {
    setSelectedTip((prevTip) => (prevTip === tip ? 0 : tip));
  };

  const calculateTotalAmount = (price: number, count: number): number => {
    return price * count;
  };

  const calculateTotalWithPromoAndTip = () => {
    let total = cartItems.reduce((sum, item) => sum + calculateTotalAmount(item.dish.price.afterDiscount, item.count), 0);

    // Apply promo code discount (assuming a flat 10% discount for demonstration)
    if (appliedPromoCode) {
      total *= 0.9;
    }

    // Add tip
    if (selectedTip > 0) {
      total += selectedTip;
    }

    // Add delivery fee and service fee
    const deliveryFee = 10;
    const serviceFee = 5;
    total += deliveryFee + serviceFee;

    return total.toFixed(2);
  };

  const basketTotal = cartItems.reduce((sum, item) => sum + calculateTotalAmount(item.dish.price.afterDiscount, item.count), 0).toFixed(2);
  const deliveryFee = 10;
  const serviceFee = 5;

  const handlePlaceOrder = () => {
    // Logic to handle placing the order
    console.log('Order placed');
  };

  return (
    <Box>

      {/* Back Button */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.5rem',
          height: '2.5rem',
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: '50%',
          p: 1,
          cursor: 'pointer',
          m: 2,
        }}
        onClick={onBack}
      >
        <KeyboardBackspaceIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
      </Box>

        {/* Basket */}
        <Typography variant="h2" sx={{ textAlign: 'left', margin: '0 0 1rem 1rem' }}>Basket</Typography>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box key={item.dish._id}>
          <Typography variant="h4" sx={{ textAlign: 'left', margin: '0.5rem 0 0.25rem 1rem' }}>{item.dish.name}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.5rem',
                    height: '1.5rem',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    p: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => onRemoveFromCard(item.dish)}
                >
                  <RemoveIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                </Box>
                <Typography variant="h4" align='center' sx={{ margin: '0 1rem' }}>{item.count}</Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.5rem',
                    height: '1.5rem',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    borderRadius: '50%',
                    p: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => onAddToCard(item.dish)}
                >
                  <AddIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                </Box>
              </Box>
            <Typography variant='h4' sx={{ mr: 2}}>{item.dish.currency} {calculateTotalAmount(item.dish.price.afterDiscount, item.count).toFixed(2)}</Typography>
          </Box>
          </Box>
          ))
        ) : (
          <Typography variant='h3' color='common.black' align="center" padding="0.5rem 2.5rem">
            {t(`NoDishSelected`)}
          </Typography>
        )}

      {/* Promocode */}
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Promocode</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <TextField
            label="Have a code? Type here"
            variant="outlined"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" color="primary" onClick={handleApplyPromoCode}>
                    Apply
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {appliedPromoCode && (
          <Typography sx={{ mt: 1, color: 'green' }}>
            Promo code "{appliedPromoCode}" applied!
          </Typography>
        )}
      </Box>

      {/* Tip */}
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Reward your captain</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          {[3, 5, 10, 15, 20].map((tip) => (
            <Button
              key={tip}
              variant={selectedTip === tip ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleSelectTip(tip)}
              sx={{ margin: '0 0.25rem', fontSize: '0.75rem', p: 0.5 }}
            >
              {cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {tip}
            </Button>
          ))}
        </Box>
        {selectedTip > 0 && (
          <Typography sx={{ mt: 1, color: 'green' }}>
            Tip of {cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {selectedTip} selected!
          </Typography>
        )}
      </Box>

      {/* Payment Summary */}
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Payment Summary</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography>Basket Total:</Typography>
          <Typography>{cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {basketTotal}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography>Delivery Fee:</Typography>
          <Typography>{cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {deliveryFee}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography>Service Fee:</Typography>
          <Typography>{cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {serviceFee}</Typography>
        </Box>
        {selectedTip > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography>Tip:</Typography>
            <Typography>{cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {selectedTip}</Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1}}>
          <Typography variant="h3" fontWeight='bold'>Total Amount:</Typography>
          <Typography variant="h3" fontWeight='bold'>{cartItems.length > 0 ? cartItems[0].dish.currency : '$'} {calculateTotalWithPromoAndTip()}</Typography>
        </Box>
      </Box>

      {/* Deliver To */}
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Deliver To</Typography>
        <Box sx={{ mt: 1 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
            Room Number: {roomNumber}
          </Typography>
          <TextField
            label="Instructions for the deliveryman"
            variant="outlined"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            fullWidth
            multiline
            rows={2}
            sx={{ mb: 1 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={noContactDelivery}
                onChange={(e) => setNoContactDelivery(e.target.checked)}
                color="primary"
              />
            }
            label="No Contact Delivery"
          />
        </Box>
      </Box>

      {/* Payment Options */}
      <Box sx={{ m: 2 }}>
        <Typography variant="h2">Payment Options</Typography>
        <FormControl component="fieldset" sx={{ mt: 1 }}>
          <FormLabel component="legend">Select Payment Method</FormLabel>
          <RadioGroup
            aria-label="payment method"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="cash"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ReceiptLongIcon sx={{ mr: 1}} />
                  Add to Room Bill
                </Box>
              }
            />
            <FormControlLabel
              value="card"
              control={<Radio />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CreditCardIcon sx={{ mr: 1 }} />
                  Pay with Card
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Place Order Button */}
      <Box sx={{ position: 'sticky', bottom: 0, width: '100%', backgroundColor: 'white', p: 2, boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlePlaceOrder}
        >
          Place Order for {cartItems.length > 0 ? `${cartItems[0].dish.currency} ${calculateTotalWithPromoAndTip()}` : '0.00'}
        </Button>
      </Box>
    </Box>
  );
};

export default Orders;