import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavRoomService from './NavRoomService';
import MenuShortcut from './MenuShortcut';
import Menu from './Menu';
import Orders from './Orders';
import AboutFood from './AboutFood';
import AddToCart from './AddToCart';

interface Dish {
  id: number;
  name: string;
  price: number;
  img: string;
  shortDsc: string;
  longDsc: string;
}

interface CartItem {
  dish: Dish;
  count: number;
}

const RoomServiceMain = () => {
  const [showAboutFood, setShowAboutFood] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  // const [count, setCount] = useState(0);
  const [showOrders, setShowOrders] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('https://1805c942-ad32-427a-b3e9-633d7a7fc0be.mock.pstmn.io/menu'); // Replace with your API endpoint
        const data = await response.json();
        setDishes(data);
        console.log('Fetched dishes:', data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  const handleCardClick = (dish: Dish) => {
    setSelectedDish(dish);
    setShowAboutFood(true);
  };

  const handleBackToOrders = () => {
    setShowAboutFood(false);
  };

  const handleAddToCard = (dish: Dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.dish.id === dish.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { dish, count: 1 }];
      }
    });
    setSelectedDish(dish);
  };

  const handleRemoveFromCard = (dish: Dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      if (existingItem && existingItem.count > 1) {
        return prevItems.map(item =>
          item.dish.id === dish.id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.dish.id !== dish.id);
      }
    });
  };


  const handlePayClick = () => {
    setShowOrders(true);
  };

  const handleBackClick = () => {
    setShowOrders(false);
  };

  const getTotalCount = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  return (
<Box sx={{ backgroundColor: 'black', height: '100vh', position: 'relative',overflow:showOrders ? 'hidden' : '', }}>
      {isMobile && showAboutFood ? (
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <AboutFood dish={selectedDish!} onBack={handleBackToOrders} />
        </Box>
      ) : (
        <>
          <NavRoomService />
          <Grid container display={'flex'} marginTop={1}>
            <MenuShortcut />
            <Menu counts={cartItems.reduce((acc, item) => ({ ...acc, [item.dish.id]: item.count }), {})} dishes={dishes} onCardClick={handleCardClick} onAddToCard={handleAddToCard} onRemoveFromCard={handleRemoveFromCard}/>
            {showAboutFood && selectedDish ? (
              <AboutFood dish={selectedDish} onBack={handleBackToOrders} />
            ) : (
              !isMobile && <Orders cartItems={cartItems} onBack={handleBackClick}/>
            )}
          </Grid>
        </>
      )}
      {isMobile && getTotalCount() > 0 && (
        <AddToCart count={getTotalCount()} onPayClick={handlePayClick} />
      )}
      {isMobile && showOrders &&
        <Box sx={{ position: 'fixed',overflow:'hidden', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <Orders cartItems={cartItems} onBack={handleBackClick}/>
        </Box>
      }
    </Box>
  );
};

export default RoomServiceMain;