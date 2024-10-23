import { Box, IconButton,Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import TopDrawer from '../cards/TopDrawer';
import { useTranslation } from 'react-i18next';

const DefaultNav = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleBackClick = () => {
    gsap.to(containerRef.current, {
      y: "100%",
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => navigate(-1),
    });
  };
  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          backgroundColor: "primary.main",
        }}
        onClick={handleBackClick}
      >
        <CloseIcon sx={{ color: 'common.white'}} />
      </Box>

      <Typography variant="h3" component="div">
      {t(`RoomNumber`)}: 101
      </Typography>
      <IconButton sx={{ backgroundColor: 'primary.main', height: '3rem', width: '3rem'}} onClick={handleDrawerOpen}>
        <MenuIcon sx={{ color: 'common.white'}} />
      </IconButton>
      <TopDrawer open={drawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen} />
    </Box>
    </Box>
  );
};

export default DefaultNav;
