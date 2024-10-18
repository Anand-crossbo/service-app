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
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Dish } from "../../../store/booking/types";

interface GridMenuProps {
    dishes: Dish[];
    onCardClick: (dishId: number) => void;
    onAddToCard: (dish: Dish) => void;
    onRemoveFromCard: (dish: Dish) => void;
    counts: { [key: number]: number };
}

const GridMenu: React.FC<GridMenuProps> = ({ dishes, onCardClick, onAddToCard, onRemoveFromCard, counts }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    // Calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dishes.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);
  
    // Function to handle page change
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    // Calculate total pages
    const totalPages = Math.ceil(dishes.length / itemsPerPage);
  return (
  <Box margin={1}>
  <Grid container spacing={1}>
  {currentItems.map((dish) => {
    const heroMedia = dish.media.find((media) => media.isHero);
    return (
      <Grid item marginTop='10px' width='50%' sm={6} md={4} lg={3} key={dish._id}>
        <Box onClick={() => onCardClick(dish._id)} >
          <Card sx={{ backgroundColor: "custom.card" }}>
            {heroMedia?.type === 'video' ? (
              <CardMedia
                component="video"
                height="125"
                src={heroMedia?.url}
                autoPlay
                muted
                playsInline
                sx={{ objectFit: 'cover', width: '100%' }}
              />
            ) : (
              <CardMedia
                component="img"
                height="125"
                image={heroMedia?.url || ""}
                sx={{ objectFit: 'cover', width: '100%' }}
              />
            )}
            <CardContent sx={{ paddingBottom: '4px !important' }}>
              <Typography fontSize="18px" fontWeight="bold" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {dish.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon sx={{ fontSize: '14px', color: 'green', margin: '2px' }} />
                <Typography fontSize='12px' color='green' margin='2px'> {dish.feedback.rating} </Typography>
                <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin: '2px' }} />
                <Typography fontSize='12px' margin='2px'> {dish.preparationTime} mins </Typography>
              </Box>
              <Typography fontSize="12px" component="div" sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
                {dish.description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize="16px"
                    fontWeight="bold"
                    paddingTop="10px"
                    component="div"
                  >
                    Aed {dish.price.afterDiscount}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFromCard(dish);
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "black",
                      marginRight: "5px",
                    }}
                  >
                    {counts[dish._id] || 0}
                  </Typography>
                  <AddCircleIcon
                    sx={{
                      fontSize: "20px",
                      color: "black",
                      marginRight: "5px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCard(dish);
                    }}
                  />
                </Box>
              </Box>
              {dish.dietaryTags.map((tag, index) => (
                <img
                  key={index}
                  src={tag.icon}
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                />
              ))}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    );
  })}
</Grid>
<Box display="flex" marginTop='10px' justifyContent="center" alignItems="center" width='100%'>
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
  )
}

export default GridMenu