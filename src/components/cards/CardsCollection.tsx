import React, { useEffect, useRef, useState } from 'react'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';



const AllCards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const navigate = useNavigate();


  const images = [
    "https://cdn-icons-png.flaticon.com/128/1940/1940922.png",
    "https://cdn-icons-png.flaticon.com/128/2868/2868865.png",
    "https://cdn-icons-png.flaticon.com/128/9561/9561688.png",
    "https://cdn-icons-png.flaticon.com/128/2099/2099193.png",
    "https://cdn-icons-png.flaticon.com/128/3946/3946975.png",
    "https://cdn-icons-png.flaticon.com/128/3270/3270184.png",
    "https://cdn-icons-png.flaticon.com/128/1032/1032989.png",
    "https://cdn-icons-png.flaticon.com/128/2656/2656398.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 500); // Duration of fade-out
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const handleCardClick = () => {
    navigate('/servicescollection');
  };
  
  return (
    <>
    <Grid container spacing={2} sx={{ padding: '16px' }}>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/9883/9883117.png"
              alt="Card 1"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance

              }}
            />
              <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Activities
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/854/854878.png"
              alt="Card 2"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Location
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/1830/1830349.png"
              alt="Card 3"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Airport Drop
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/776/776480.png"
              alt="Card 4"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                In-Room Dining
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/8948/8948845.png"
              alt="Card 5"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Know Your Room
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/6657/6657943.png"
              alt="Card 6"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Luggage Assistance
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/3175/3175199.png"
              alt="Card 7"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Plan Your Trip
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}}>
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/128/6192/6192471.png"
              alt="Card 8"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                objectFit: 'contain', // Ensure the image scales correctly
                padding: '10px', // Optional: Add some padding for better appearance
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold'component="div">
                Taxi Services
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card  sx={{ backgroundColor: 'white'}} onClick={handleCardClick}>
            <CardMedia
              component="img"
              image={images[currentImageIndex]}
              alt="Card 9"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60px', // Set a maximum height for the image
                padding: '10px', // Optional: Add some padding for better appearance
                objectFit: 'contain', // Ensure the image scales correctly
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out', // Apply fade-in transition
              }}
            />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='12px' fontWeight='bold' component="div">
                All Services
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Typography marginTop='20px' marginLeft='20px' fontSize='18px' fontWeight='bold'>Get Great Deals at your Fingertips!</Typography>
        <Grid item xs={12} sm={12} md={12}>
        <Card sx={{ position: 'relative', backgroundColor: 'white' }}>
          <CardMedia
            component="img"
            height="280"
            image="/staticImages/spa.jpg" // Use relative path to the image in the public folder
            alt="Card 10"
          />
          {/* Overlay Box */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              opacity: 1, // Initially hidden
              transition: 'opacity 0.3s ease-in-out', // Smooth transition
            }}
          >
            <Typography fontSize='32px' fontWeight='bold' position='absolute' bottom='0' padding='10px'>25% off for your spa appointment today</Typography>
          </Box>
          </Card>
        </Grid>
        
      </Grid>
      <Typography marginLeft='20px' fontSize='18px' fontWeight='bold'>Quick Actions</Typography>

      <Grid container spacing={2} sx={{ padding: '16px' }}>

      <Grid item xs={3} sm={6} md={3}>
      <Card sx={{ backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/128/2729/2729761.png"
          alt="Card 1"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '60px', // Set a maximum height for the image
            objectFit: 'contain', // Ensure the image scales correctly
            padding: '10px', // Optional: Add some padding for better appearance
          }}
        />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >          
              <Typography align='center' fontSize='10px' fontWeight='bold'component="div">
              Get me towel
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3} sm={6} md={3}>
      <Card sx={{ backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/128/2745/2745060.png"
          alt="Card 2"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '60px', // Set a maximum height for the image
            objectFit: 'contain', // Ensure the image scales correctly
            padding: '10px', // Optional: Add some padding for better appearance
          }}
        />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >          
              <Typography align='center' fontSize='10px' fontWeight='bold'component="div">
              get me water bottle
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3} sm={6} md={3}>
      <Card sx={{ backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/128/3946/3946975.png"
          alt="Card 3"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '60px', // Set a maximum height for the image
            objectFit: 'contain', // Ensure the image scales correctly
            padding: '10px', // Optional: Add some padding for better appearance
          }}
        />
            <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >         
              <Typography align='center' fontSize='10px' fontWeight='bold'component="div">
              Send clothes to laundry
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3} sm={6} md={3}>
      <Card sx={{ backgroundColor: 'white' }}>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn-icons-png.flaticon.com/128/619/619006.png"
          alt="Card 4"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '60px', // Set a maximum height for the image
            objectFit: 'contain', // Ensure the image scales correctly
            padding: '10px', // Optional: Add some padding for better appearance
          }}
        />
                    <CardContent
              sx={{
                height: '40px', // Define the height of CardContent
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px !important',
              }}
            >
              <Typography align='center' fontSize='10px' fontWeight='bold'component="div">
              Book Taxi
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    </Grid>
    </>
  )
}

export default AllCards