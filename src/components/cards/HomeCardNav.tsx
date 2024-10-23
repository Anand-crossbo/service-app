import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CommentIcon from '@mui/icons-material/Comment';
import TopDrawer from './TopDrawer';
import { useTranslation } from 'react-i18next';

const HomeCardNav = () => {

  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 2 }}>
    <Typography
      variant='h4'
      component="div"
      sx={{
        backgroundColor: 'primary.main',
        color: 'common.white',
        borderRadius: '1rem',
        p: 1, // Optional: Add some padding for better appearance: ;
        display: 'flex',
        alignItems: 'center', // Align items vertically centered
      }}
    >
      <CommentIcon sx={{ color: 'common.white', mr: 1 }} />
      {t(`CHAT`)}
    </Typography>

      <Typography variant="h3" component="div">
      {t(`RoomNumber`)}: 101
      </Typography>
      <IconButton sx={{ backgroundColor: 'primary.main'}} onClick={handleDrawerOpen}>
        <MenuIcon sx={{ color: 'common.white'}} />
      </IconButton>
      <TopDrawer open={drawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen} />
    </Box>
  )
}

export default HomeCardNav