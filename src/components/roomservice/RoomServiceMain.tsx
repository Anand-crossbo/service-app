import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import NavRoomService from './NavRoomService'
import MenuShortcut from './MenuShortcut'
import Menu from './Menu'
import Orders from './Orders'
import AboutFood from './AboutFood'

const RoomServiceMain = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showAboutFood, setShowAboutFood] = useState(false);

  const handleCardClick = () => {
    setShowAboutFood(true);
  };

  const handleBackToOrders = () => {
    setShowAboutFood(false);
  };
  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      {isMobile && showAboutFood ? (
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white', zIndex: 10 }}>
          <AboutFood onBack={handleBackToOrders} />
        </Box>
      ) : (
        <>
          <NavRoomService />
          <Grid container display={'flex'} marginTop={1}>
            <MenuShortcut />
            <Menu onCardClick={handleCardClick} />
            {showAboutFood ? (
              <AboutFood onBack={handleBackToOrders} />
            ) : (
              !isMobile && <Orders />
            )}
          </Grid>
        </>
      )}
    </Box>

  )
}

export default RoomServiceMain