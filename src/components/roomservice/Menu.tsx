import {
  Box,
  Button,
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
  shortDsc: string;
  longDsc: string;
  price: number;
  img: string;
}

interface MenuProps {
  dishes: Dish[];
  onCardClick: (dish: Dish) => void;
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: (dish: Dish) => void;
  counts: { [key: number]: number };
}

const Menu: React.FC<MenuProps> = ({ dishes, onCardClick, onAddToCard, onRemoveFromCard,counts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

    // Calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dishes.slice(indexOfFirstItem, indexOfLastItem);
  
    // Function to handle page change
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    // Calculate total pages
    const totalPages = Math.ceil(dishes.length / itemsPerPage);


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
        {currentItems.map((dish, index) => (
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
                image={dish.img}
                onClick={() => onCardClick(dish)}
              />
              <CardContent>
                <Typography fontSize="18px" fontWeight="bold" component="div" sx={{ whiteSpace: 'nowrap', overflow:'hidden', textOverflow: 'ellipsis'}}>
                {dish.name}
                </Typography>
                <Typography fontSize="12px" component="div">
                {dish.shortDsc}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      fontSize="16px"
                      fontWeight="bold"
                      paddingTop="10px"
                      component="div"
                    >
                      Aed {dish.price}
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
                        fontSize: "20px",
                        color: "black",
                        marginRight: "5px",
                      }}
                      onClick={() => onRemoveFromCard(dish)}
                    />
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "black",
                        marginRight: "5px",
                      }}
                    >
                      {counts[dish.id] || 0}
                    </Typography>
                    <AddCircleIcon
                      sx={{
                        fontSize: "20px",
                        color: "black",
                        marginRight: "5px",
                      }}
                      onClick={() => onAddToCard(dish)}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      <Box display="flex" justifyContent="center" alignItems="center" width='100%'>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            variant={currentPage === index + 1 ? 'contained' : 'outlined'}
            sx={{
              mx: 1,
              mb: 1,
              fontSize: '12px',
              borderRadius: '50%', // Make the button circular
              width: '20px', // Set the width
              height: '20px', // Set the height
              minWidth: '20px', // Ensure the button does not expand
              padding: 0, // Remove padding
              ...(currentPage === index + 1
                ? {
                    backgroundColor: 'black', // Custom color for contained variant
                    color: 'white', // Text color for contained variant
                    '&:hover': {
                      backgroundColor: 'black', // Darker shade on hover
                    },
                  }
                : {
                    borderColor: 'black', // Custom border color for outlined variant
                    color: 'black', // Text color for outlined variant
                    '&:hover': {
                      borderColor: 'black', // Darker border color on hover
                      color: 'black', // Darker text color on hover
                    },
                  }),
            }}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
      </Box>
    </Grid>
  );
};

export default Menu;
