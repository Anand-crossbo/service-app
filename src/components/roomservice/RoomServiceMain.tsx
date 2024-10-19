import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import Orders from './Orders';
import AboutFood from './AboutFood';
import AddToCart from './AddToCart';
import { useDispatch, useSelector } from 'react-redux';
import { setDishes, setCategories } from '../../store/booking/dishesSlice';
import { Dish, Category } from '../../store/booking/types';
import { RootState } from '../../store/store'; // Import RootState from store.ts
import RoomServiceNav from './RoomServiceNav';
import Categories from './Categories';
import gsap from "gsap";
import NewMenu from './menudesigns/NewMenu';
import { Add, Room } from '@mui/icons-material';

const RoomServiceMain = () => {
  const [showAboutFood, setShowAboutFood] = useState(false);
  const [selectedDishId, setSelectedDishId] = useState<number | null>(null);
  const [showOrders, setShowOrders] = useState(false);
  const [cartItems, setCartItems] = useState<{ dish: Dish; count: number }[]>([]);
  const [selectedCategoryTags, setSelectedCategoryTags] = useState<string[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const dishes = useSelector((state: RootState) => state.dishes.dishes);
  const categories = useSelector((state: RootState) => state.dishes.categories);

  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://genie-menu-data.s3.eu-west-1.amazonaws.com/newdish.json');
        const data = await response.json();
        dispatch(setDishes(data[0].dishes as Dish[]));
        dispatch(setCategories(data[1].categories as Category[]));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleCardClick = (dishId: number) => {
    setSelectedDishId(dishId);
    setShowAboutFood(true);
  };

  const handleBackToOrders = () => {
    setShowAboutFood(false);
  };

  // const handleAddToCard = (dish: Dish) => {
  //   setCartItems((prevItems) => {
  //     const existingItem = prevItems.find(item => item.dish._id === dish._id);
  //     if (existingItem) {
  //       return prevItems.map(item =>
  //         item.dish._id === dish._id ? { ...item, count: item.count + 1 } : item
  //       );
  //     } else {
  //       return [...prevItems, { dish, count: 1 }];
  //     }
  //   });
  //   setSelectedDishId(dish._id);
  // };

  const handleAddToCard = (dish: Dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish._id === dish._id);
      if (existingItem) {
        return prevItems.map(item =>
          item.dish._id === dish._id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { dish, count: 1 }];
      }
    });
  };

  const handleRemoveFromCard = (dish: Dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.dish._id === dish._id);
      if (existingItem && existingItem.count > 1) {
        return prevItems.map(item =>
          item.dish._id === dish._id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.dish._id !== dish._id);
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

  const handleCategorySelect = (categoryName: string) => {
    console.log("Selected Category:", categoryName); // Debugging log
    const category = categories.find(cat => cat.name.trim().toLowerCase() === categoryName.trim().toLowerCase());
    if (category) {
      setSelectedCategoryTags(category.tag.map(tag => tag.trim().toLowerCase()));
    } else {
      setSelectedCategoryTags([]);
    }
  };

  const filteredDishes = selectedCategoryTags.length > 0
    ? dishes.filter(dish => {
        console.log("Dish Tags:", dish.tags); // Debugging log
        return dish.tags.some(tag => {
          const normalizedTag = tag.trim().toLowerCase();
          console.log(`Comparing tag: ${normalizedTag} with selectedCategoryTags: ${selectedCategoryTags}`); // Debugging log
          return selectedCategoryTags.includes(normalizedTag);
        });
      })
    : dishes;

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: '100%' },
      { y: 0, duration: 0.5, ease: 'easeInOut' }
    );
  }, []);

  return (
    // <Box ref={containerRef} sx={{ backgroundColor: 'white', height:'100vh',  position: 'relative', overflow: showOrders ? 'hidden' : '' }}>
    //   {isMobile && showAboutFood && selectedDishId !== null ? (
    //     <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
    //       <AboutFood onAddToCard={handleAddToCard} onRemoveFromCard={handleRemoveFromCard} dishId={selectedDishId} onBack={handleBackToOrders} allDishes={dishes}/>
    //     </Box>
    //   ) : (
    //     <>
    //       <RoomServiceNav />
    //       <Grid container display={'flex'} marginTop={1}>
    //         <Categories onCategorySelect={handleCategorySelect} />
    //         <Menu
    //           dishes={filteredDishes}
    //           counts={cartItems.reduce((acc, item) => ({ ...acc, [item.dish._id]: item.count }), {})}
    //           onCardClick={handleCardClick}
    //           onAddToCard={handleAddToCard}
    //           onRemoveFromCard={handleRemoveFromCard}
    //         />
    //         {showAboutFood && selectedDishId !== null ? (
    //           <AboutFood onAddToCard={handleAddToCard} onRemoveFromCard={handleRemoveFromCard} dishId={selectedDishId} onBack={handleBackToOrders} allDishes={dishes} />
    //         ) : (
    //           !isMobile && <Orders cartItems={cartItems} onBack={handleBackClick} />
    //         )}
    //       </Grid>
    //     </>
    //   )}
    //   {isMobile && getTotalCount() > 0 && (
    //     <AddToCart cartItems={cartItems} count={getTotalCount()} onPayClick={handlePayClick} />
    //   )}
    //   {isMobile && showOrders &&
    //     <Box sx={{ position: 'fixed', overflow: 'hidden', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
    //       <Orders cartItems={cartItems} onBack={handleBackClick} />
    //     </Box>
    //   }
    // </Box>
    <Box>
      {showAboutFood && selectedDishId !== null ? (
        <AboutFood
          dishId={selectedDishId}
          onBack={handleBackToOrders}
          allDishes={dishes}
          onAddToCard={handleAddToCard}
          onRemoveFromCard={handleRemoveFromCard}
        />
      ) : (
        <Box>
      <RoomServiceNav />
      <Categories onCategorySelect={handleCategorySelect} />
      <Menu
        dishes={filteredDishes}
        counts={cartItems.reduce((acc, item) => ({ ...acc, [item.dish._id]: item.count }), {})}
        onCardClick={handleCardClick}
        onAddToCard={handleAddToCard}
        onRemoveFromCard={handleRemoveFromCard}
      />
      </Box>
      )}
      {cartItems.length > 0 && (
        <AddToCart cartItems={cartItems} count={getTotalCount()} onPayClick={handlePayClick} />
      )} 
      {showOrders &&
      <Box sx={{ position: 'fixed', overflow: 'hidden', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <Orders cartItems={cartItems} onBack={handleBackClick} />
        </Box>
      }
</Box>

  );
};

export default RoomServiceMain;