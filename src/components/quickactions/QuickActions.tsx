import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import QuickActionDrawer from './QuickActionDrawer';
import { useTranslation } from 'react-i18next';

const QuickActions = () => {

  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerText, setDrawerText] = useState('');

  const handleDrawerOpen = (text: string) => () => {
    setDrawerText(text);
    setDrawerOpen(true);
  };

  return (
    <Box>
      <Typography marginLeft="20px" marginTop= '30px' fontSize="18px" fontWeight="bold">
        {t(`QuickActions`)}
      </Typography>

      <Grid container spacing={2} sx={{ padding: "16px" }}>
        <Grid item xs={3} sm={6} md={3}>
          <Card sx={{ backgroundColor: "common.white" }} onClick={handleDrawerOpen("Get me Towel")}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn-icons-png.flaticon.com/128/2729/2729761.png"
              alt="Card 1"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                objectFit: "contain", // Ensure the image scales correctly
                padding: "10px", // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: "40px", // Define the height of CardContent
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="10px"
                fontWeight="bold"
                component="div"
              >
                Get me towel
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={6} md={3}>
          <Card sx={{ backgroundColor: "common.white" }}  onClick={handleDrawerOpen("Get me water bottle")}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn-icons-png.flaticon.com/128/2745/2745060.png"
              alt="Card 2"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                objectFit: "contain", // Ensure the image scales correctly
                padding: "10px", // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: "40px", // Define the height of CardContent
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="10px"
                fontWeight="bold"
                component="div"
              >
                get me water bottle
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={6} md={3}>
          <Card sx={{ backgroundColor: "common.white" }} onClick={handleDrawerOpen("Send clothes to laundry")}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn-icons-png.flaticon.com/128/3946/3946975.png"
              alt="Card 3"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                objectFit: "contain", // Ensure the image scales correctly
                padding: "10px", // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: "40px", // Define the height of CardContent
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="10px"
                fontWeight="bold"
                component="div"
              >
                Send clothes to laundry
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} sm={6} md={3}>
          <Card sx={{ backgroundColor: "common.white" }}  onClick={handleDrawerOpen("Book Taxi")}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn-icons-png.flaticon.com/128/619/619006.png"
              alt="Card 4"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                objectFit: "contain", // Ensure the image scales correctly
                padding: "10px", // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: "40px", // Define the height of CardContent
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="10px"
                fontWeight="bold"
                component="div"
              >
                Book Taxi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <QuickActionDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)} />
    </Box>
  )
}

export default QuickActions