import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuProps {
  onCardClick: () => void;
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: () => void;
  count: number;
}

const Menu: React.FC<MenuProps> = ({ onCardClick, onAddToCard, onRemoveFromCard, count }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dishes: Dish[] = [
    { id: 1, name: 'Sayadieh', description: 'salmon, rice, fried onions, nuts, and tahini sauce', price: 10, image: '/staticImages/food1.jpg' },
    // Add more dishes as needed
  ];

  return (
    <Grid
      item
      xs={12}
      sm={7}
      paddingRight={isMobile ? 0 : 1.5}
      paddingTop={isMobile ? 1 : 0}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: 1,
          height: "90vh",
          backgroundColor: "#c9c9c9",
          borderTopRightRadius: "16px",
          borderTopLeftRadius: isMobile ? "16px" : "0",
          borderBottomRightRadius: isMobile ? "0" : "16px",
          "@media (max-width: 600px)": { height: "auto", justifyContent: "center" },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "45%", sm: "30%" }, // Full width on small screens, half width on larger screens
              margin: { xs: "5px", sm: "10px" }, // Adjust padding
              marginTop: { xs: "15px", sm: "10px" }, // Adjust margin
            }}
          >
            <Card sx={{ backgroundColor: "#c9c9c9" }} >
              <CardMedia
                component="img"
                height="125"
                image={`/staticImages/food${item}.jpg`}
                onClick={onCardClick}
              />
              <CardContent>
                <Typography fontSize="18px" fontWeight="bold" component="div">
                {dishes[0].name}
                </Typography>
                <Typography fontSize="12px" component="div">
                {dishes[0].description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      fontSize="18px"
                      fontWeight="bold"
                      paddingTop="10px"
                      component="div"
                    >
                      $20
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      paddingTop: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <RemoveCircleIcon
                      sx={{
                        fontSize: "25px",
                        color: "black",
                        marginRight: "5px",
                      }}
                      onClick={onRemoveFromCard}
                    />
                    <Typography
                      sx={{
                        fontSize: "25px",
                        color: "black",
                        marginRight: "5px",
                      }}
                    >
                      {count}
                    </Typography>
                    <AddCircleIcon
                      sx={{
                        fontSize: "25px",
                        color: "black",
                        marginRight: "5px",
                      }}
                      onClick={() => onAddToCard(dishes[0])}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Grid>
  );
};

export default Menu;
