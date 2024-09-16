import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const MenuShortcut = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item xs={12} sm={1} paddingRight={isMobile ? 0 : 0.5}>
      <Box
        sx={{
          height: { xs: "auto", sm: "90vh" },
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          backgroundColor: "#c9c9c9",
          borderTopLeftRadius: { xs: "0", sm: "16px" },
          borderBottomLeftRadius: { xs: "16px", sm: "16px" },
          borderBottomRightRadius: { xs: "16px", sm: "0" },
          overflowX: { xs: "auto", sm: "hidden" }, // Allow horizontal scrolling on mobile
          padding: { xs: "5px", sm: "0" }, // Add padding on mobile
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "10px", sm: "0" },
          }}
        >
          <img
            src="/staticImages/chef.png"
            alt="Chef"
            style={{ maxHeight:"50%", maxWidth: "50%", paddingTop: isMobile ? "0" : "30px" }}
          />
          <Typography
            align="center"
            fontSize={isMobile ? "10px" : "14px"}
            padding="2px"
            fontWeight="bold"
          >
            Chef Special
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "10px", sm: "0" },
          }}
        >
          <img
            src="/staticImages/soup.png"
            alt="Soup"
            style={{ maxHeight: "50%", maxWidth: "50%", paddingTop: isMobile ? "0" : "30px" }}
          />
          <Typography
            align="center"
            fontSize={isMobile ? "10px" : "14px"}
            padding="2px"
            fontWeight="bold"
          >
            Soups & Appetizers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "10px", sm: "0" },
          }}
        >
          <img
            src="/staticImages/food.png"
            alt="Food"
            style={{ maxHeight: "50%", maxWidth: "50%", paddingTop: isMobile ? "0" : "30px" }}
          />
          <Typography
            align="center"
            fontSize={isMobile ? "10px" : "14px"}
            padding="2px"
            fontWeight="bold"
          >
            Main Course
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "10px", sm: "0" },
          }}
        >
          <img
            src="/staticImages/cake.png"
            alt="Cake"
            style={{ maxHeight: "60%", maxWidth: "60%", paddingTop: isMobile ? "0" : "30px" }}
          />
          <Typography
            align="center"
            fontSize={isMobile ? "10px" : "14px"}
            padding="2px"
            fontWeight="bold"
          >
            Desserts
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: { xs: "10px", sm: "0" },
          }}
        >
          <img
            src="/staticImages/toast.png"
            alt="Toast"
            style={{ maxHeight: "60%", maxWidth: "60%", paddingTop: isMobile ? "0" : "30px" }}
          />
          <Typography
            align="center"
            fontSize={isMobile ? "10px" : "14px"}
            padding="2px"
            fontWeight="bold"
          >
            Drinks
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default MenuShortcut;
