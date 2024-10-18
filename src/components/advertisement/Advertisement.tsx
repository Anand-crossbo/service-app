import { Box, Card, CardMedia, Typography } from '@mui/material'
import { common } from '@mui/material/colors';
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();

  const ads = [
    {
      title: '25% off for your spa appointment today',
      img: '/staticImages/spa.jpg'
    },
    {
      title: '10% off holiday packages for your next vacation',
      img: 'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fHwy'
    },
    {
      title: 'Free Entry to amusement park for your family',
      img: 'https://images.unsplash.com/photo-1650878932027-5502ed475dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpJTIwYXR0cmFjdGlvbnN8ZW58MHx8MHx8fDI%3D'
    },
  ];
  const handleCardClick = (title: string, img: string) => {
    navigate('/aboutactivity', { state: { title, img } });
  };
  
  return (
    <Box>
      <Typography
          marginTop="20px"
          marginLeft="20px"
          fontSize="18px"
          color={common.black}
          fontWeight="bold"
        >
          Get Great Deals at your Fingertips!
        </Typography>
        <Slider {...settings}>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "common.white", margin:"10px" }} onClick={() => handleCardClick(ads[0].title,ads[0].img)}>
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
                color: "common.white",
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
                {ads[0].title}
              </Typography>
            </Box>
          </Card>
          </Box>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "common.white", margin: '10px'}} onClick={() => handleCardClick(ads[1].title,ads[1].img)}>
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
                {ads[1].title}
              </Typography>
            </Box>
          </Card>
          </Box>
          <Box>
          <Card sx={{ position: "relative", backgroundColor: "common.white", margin: '10px'}} onClick={() => handleCardClick(ads[2].title,ads[2].img)}>
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
                {ads[2].title}
              </Typography>
            </Box>
          </Card>
          </Box>
          </Slider>
    </Box>
  )
}

export default Advertisement