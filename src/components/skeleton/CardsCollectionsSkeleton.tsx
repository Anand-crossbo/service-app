import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Skeleton, Box } from '@mui/material';
import Slider from 'react-slick';


const CardsCollectionSkeleton = () => {
  const skeletonArray = Array.from(new Array(9)); // Create an array with 9 elements for the skeleton
  const skeletonAdArray = Array.from(new Array(3)); // Create an array with 3 elements for the skeleton
  const skeletonQuickActArray = Array.from(new Array(4)); // Create an array with 3 elements for the skeleton

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
    <Grid container spacing={2} sx={{ p: 2 }}>
      {skeletonArray.map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Card sx={{ backgroundColor: "common.white" }}>
            <Skeleton variant="rectangular" width="100%" height="5rem" sx={{ p: 1 }} />
            <CardContent
              sx={{
                height: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px !important",
              }}
            >
              <Skeleton variant="text" width="60%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    <Box sx={{ overflow: 'hidden'}}>
      <Typography
        mt={1}
        ml={2}
        variant='h4'
        color="text.primary"
        fontWeight="bold"
      >
        <Skeleton width="60%" />
      </Typography>
      <Slider {...settings}>
        {skeletonAdArray.map((_, index) => (
          <Box key={index}>
            <Card sx={{ position: "relative", backgroundColor: "common.white", margin: "0.5rem 0.5rem 0px 0.5rem" }}>
              <Skeleton variant="rectangular" height={150} />
              <CardContent
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "common.white",
                  opacity: 1,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <Skeleton variant="text" width="80%" />
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>

    <Box>
        <Typography
        mt={1}
        ml={2}
        variant='h4'
        color="text.primary"
        fontWeight="bold"
      >
        <Skeleton width="60%" />
      </Typography>

      <Grid container spacing={2} sx={{ p: 2 }}>
        {skeletonQuickActArray.map((_, index) => (
          <Grid item xs={3} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" width="100%" height="3rem" />
              <CardContent
                sx={{
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.25rem !important",
                }}
              >
                <Skeleton variant="text" width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>

    </Box>

    </Box>

  );
};

export default CardsCollectionSkeleton;