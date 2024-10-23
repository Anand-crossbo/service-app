import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';

const ServicesCollectionSkeleton = () => {
  const skeletonArray = Array.from(new Array(3)); // Create an array with 6 elements for the skeleton

  return (
    <Box>
        <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        <Skeleton width="40%" />
      </Typography>
      <Grid container spacing={2}>
        {skeletonArray.map((_, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" width="100%" height="100px" />
              <CardContent
                sx={{
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.25rem !important",
                }}
              >
                <Skeleton variant="text" width="80%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        <Skeleton width="40%" />
      </Typography>
      <Grid container spacing={2}>
        {skeletonArray.map((_, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" width="100%" height="100px" />
              <CardContent
                sx={{
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.25rem !important",
                }}
              >
                <Skeleton variant="text" width="80%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        <Skeleton width="40%" />
      </Typography>
      <Grid container spacing={2}>
        {skeletonArray.map((_, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" width="100%" height="100px" />
              <CardContent
                sx={{
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.25rem !important",
                }}
              >
                <Skeleton variant="text" width="80%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
        <Box sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        <Skeleton width="40%" />
      </Typography>
      <Grid container spacing={2}>
        {skeletonArray.map((_, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "common.white" }}>
              <Skeleton variant="rectangular" width="100%" height="100px" />
              <CardContent
                sx={{
                  height: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.25rem !important",
                }}
              >
                <Skeleton variant="text" width="80%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    

    </Box>
    
  );
};

export default ServicesCollectionSkeleton;