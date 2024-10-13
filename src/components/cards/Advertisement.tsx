import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Advertisement = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Typography
          marginTop="20px"
          marginLeft="20px"
          fontSize="18px"
          fontWeight="bold"
        >
          Get Great Deals at your Fingertips!
        </Typography>
        <Slider {...settings}>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "white", margin:"10px" }}>
            <CardMedia
              component="img"
              height="280"
              image="/staticImages/spa.jpg" // Use relative path to the image in the public folder
              alt="Card 10"
            />
            {/* Overlay Box */}
            <Box
              sx={{
                position: "absolute",
                padding: '10px',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                opacity: 1, // Initially hidden
                transition: "opacity 0.3s ease-in-out", // Smooth transition
              }}
            >
              <Typography
                fontSize="32px"
                fontWeight="bold"
                position="absolute"
                bottom="0"
                padding="10px"
              >
                25% off for your spa appointment today
              </Typography>
            </Box>
          </Card>
          </Box>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "white", margin: '10px'}}>
            <CardMedia
              component="img"
              height="280"
              image="https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fHwy" // Use relative path to the image in the public folder
              alt="Card 10"
            />
            {/* Overlay Box */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                opacity: 1, // Initially hidden
                transition: "opacity 0.3s ease-in-out", // Smooth transition
                padding: '10px',
              }}
            >
              <Typography
                fontSize="32px"
                fontWeight="bold"
                position="absolute"
                bottom="0"
                padding="10px"
              >
                10% off holiday packages for your next vacation
              </Typography>
            </Box>
          </Card>
          </Box>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "white", margin: '10px'}}>
            <CardMedia
              component="img"
              height="280"
              image="https://images.unsplash.com/photo-1650878932027-5502ed475dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwYXR0cmFjdGlvbnN8ZW58MHx8MHx8fDI%3D" // Use relative path to the image in the public folder
              alt="Card 10"
            />
            {/* Overlay Box */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                opacity: 1, // Initially hidden
                transition: "opacity 0.3s ease-in-out", // Smooth transition
                padding: '10px',
              }}
            >
              <Typography
                fontSize="32px"
                fontWeight="bold"
                position="absolute"
                bottom="0"
                padding="10px"
              >
                Free Entry to amusement park for your family
              </Typography>
            </Box>
          </Card>
          </Box>
          </Slider>
    </Box>
  )
}

export default Advertisement