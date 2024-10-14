import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import SearchIcon from '@mui/icons-material/Search';

const RoomServiceNav = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: "100%" },
      { y: 0, duration: 0.5, ease: "easeInOut" }
    );
  }, []);

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
          border: "1px solid #4a4949",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          marginRight: "14px",
        }}
        onClick={handleBackClick}
      >
        <CloseIcon />
      </Box>

      <Typography variant="h6" component="div">
        Room No: 101
      </Typography>
      <IconButton sx={{ backgroundColor: "black" }}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
          {/* Search Bar */}
          <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "#ffffff",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for dishes & cuisines"
          sx={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "20px", // Increase border radius
            height: "40px", // Decrease height
            '& .MuiOutlinedInput-root': {
              borderRadius: "20px", // Increase border radius for input
              height: "40px", // Decrease height for input
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default RoomServiceNav;
