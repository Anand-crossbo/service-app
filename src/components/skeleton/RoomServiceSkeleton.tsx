import React from 'react';
import { Box, Card, CardContent, Grid, Skeleton, Typography } from '@mui/material';
import Slider from 'react-slick';

const RoomServiceSkeleton = () => {
  const skeletonArray = Array.from(new Array(6)); // Create an array with 6 elements for the skeleton
  const skeletonMenuArray = Array.from(new Array(6)); // Create an array with 6 elements for the skeleton


  const categoryCardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box>
        <Box sx={{ p: 2 }}>
        <Slider {...categoryCardSettings}>
            {skeletonArray.map((_, index) => (
            <Box key={index} sx={{ p: 1 }}>
                <Skeleton variant="rectangular" width="90%" height="5rem" sx={{ borderRadius: '0.5rem', margin: '0 auto' }} />
                <Typography textAlign='center' pt={0.5} fontWeight="bold">
                <Skeleton width="100%" />
                </Typography>
            </Box>
            ))}
        </Slider>
        </Box>
        <Grid container spacing={2}>
      {skeletonMenuArray.map((_, index) => (
        <Grid item marginTop='10px' width='50%' sm={6} md={4} lg={3} key={index}>
          <Box sx={{p:1}}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" height={125} sx={{ width: '100%' }} />
              <CardContent sx={{ paddingBottom: '0.5rem !important' }}>
                <Typography fontWeight="bold" component="div" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <Skeleton width="80%" />
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Skeleton variant="circular" width={14} height={14} sx={{ mr: 1 }} />
                  <Skeleton width="40%" />
                </Box>
                <Typography component="div" sx={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', mt: 1 }}>
                  <Skeleton width="100%" />
                  <Skeleton width="80%" />
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight="bold" component="div">
                      <Skeleton width="5rem" />
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton variant="circular" width={30} height={30} />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', marginTop: '10px' }}>
                  <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
                  <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
                  <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>

    </Box>

  );
};

export default RoomServiceSkeleton;