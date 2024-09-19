import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import NavRoomService from './NavRoomService';
import MenuShortcut from './MenuShortcut';
import Menu from './Menu';
import Orders from './Orders';
import AboutFood from './AboutFood';
import AddToCard from './AddToCart';

interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const RoomServiceMain = () => {
  const [showAboutFood, setShowAboutFood] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [count, setCount] = useState(0);
  const [showOrders, setShowOrders] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCardClick = () => {
    setShowAboutFood(true);
  };

  const handleBackToOrders = () => {
    setShowAboutFood(false);
  };

  const handleAddToCard = (dish: Dish) => {
    setSelectedDish(dish);
    setCount(count + 1);
  };

  const handleRemoveFromCard = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handlePayClick = () => {
    setShowOrders(true);
  };

  const handleBackClick = () => {
    setShowOrders(false);
  };

  return (
<Box sx={{ backgroundColor: 'black', height: '100vh', position: 'relative',overflow:showOrders ? 'hidden' : '', }}>
      {isMobile && showAboutFood ? (
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <AboutFood onBack={handleBackToOrders} />
        </Box>
      ) : (
        <>
          <NavRoomService />
          <Grid container display={'flex'} marginTop={1}>
            <MenuShortcut />
            <Menu onCardClick={handleCardClick} onAddToCard={handleAddToCard} onRemoveFromCard={handleRemoveFromCard} count={count} />
            {showAboutFood ? (
              <AboutFood onBack={handleBackToOrders} />
            ) : (
              !isMobile && <Orders dish={selectedDish} count={count} onBack={handleBackClick}/>
            )}
          </Grid>
        </>
      )}
      {isMobile && selectedDish && count > 0 && (
        <AddToCard dish={selectedDish} count={count} onPayClick={handlePayClick} />
      )}
      {isMobile && showOrders &&
        <Box sx={{ position: 'fixed',overflow:'hidden', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <Orders dish={selectedDish} count={count} onBack={handleBackClick}/>
        </Box>
      }
    </Box>
  );
};

export default RoomServiceMain;