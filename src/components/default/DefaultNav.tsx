import { Box, IconButton,Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import TopDrawer from '../cards/TopDrawer';


const DefaultNav = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const containerRef = useRef(null);
  const navigate = useNavigate();

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
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          // border: "1px solid #4a4949",
          borderRadius: "50%",
          backgroundColor: "primary.main",
          marginRight: "14px",
        }}
        onClick={handleBackClick}
      >
        <CloseIcon sx={{ color: 'common.white'}} />
      </Box>

      <Typography variant="h6" component="div">
        Room No: 101
      </Typography>
      <IconButton sx={{ backgroundColor: 'primary.main'}} onClick={handleDrawerOpen}>
        <MenuIcon sx={{ color: 'common.white'}} />
      </IconButton>
      <TopDrawer open={drawerOpen} onClose={handleDrawerClose} onOpen={handleDrawerOpen} />
    </Box>
    </Box>
  );
};

export default DefaultNav;
