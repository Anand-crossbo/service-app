import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button} from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivityMain = () => {

  const smallCardSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ mt: 2}}>
        <Typography variant='h3' padding='1rem 0px 0px 1rem'>Pick High Adrenaline Sports</Typography>
        <Typography variant='h5' ml={2}>Discover unique experiences offered in your city</Typography>
        <Box sx={{ margin: '1rem auto', width: "100%" }}>
        <Slider {...smallCardSettings}>
        <Box sx={{display:'flex', justifyContent:'center',  textAlign: 'center'}}>
            <img style={{ borderRadius: '0.5rem', height: '9rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1685794159611-348c1f36ebe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcmFnbGlkaW5nfGVufDB8fDB8fHwy" alt="Description" />
            <Typography variant='h3' mt={0.5}>Paragliding</Typography>
            <Typography variant='h4' mt={0.5}>Price</Typography>
            <Button sx={{mt: 0.5, minWidth: '90%' }} variant="contained">Book Slot</Button>
          </Box>
        <Box sx={{display:'flex', justifyContent:'center',  textAlign: 'center'}}>
            <img style={{ borderRadius: '0.5rem', height: '9rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1659901981145-dbc056431a8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNreWRpdmluZ3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
            <Typography variant='h3' mt={0.5}>Sky Diving</Typography>
            <Typography variant='h4' mt={0.5}>Price</Typography>
            <Button sx={{mt: 0.5, width: '40%', minWidth: '90%' }} variant="contained">Book Slot</Button>
          </Box>
        <Box sx={{display:'flex', justifyContent:'center',  textAlign: 'center'}}>
            <img style={{ borderRadius: '0.5rem', height: '9rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1549221360-456a9c197d5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVuZ2VlJTIwSnVtcGluZ3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
            <Typography variant='h3' mt={0.5}>Bungee Jumping</Typography>
            <Typography variant='h4' mt={0.5}>Price</Typography>
            <Button sx={{mt: 0.5, width: '40%', minWidth: '90%' }} variant="contained">Book Slot</Button>
          </Box>
        <Box sx={{display:'flex', justifyContent:'center',  textAlign: 'center'}}>
            <img style={{ borderRadius: '0.5rem', height: '9rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1544645602-10c93a552cde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VyZmluZyUyMEJpZyUyMFdhdmVzfGVufDB8fDB8fHwy" alt="Description" />
            <Typography variant='h3' mt={0.5}>Surfing</Typography>
            <Typography variant='h4' mt={0.5}>Price</Typography>
            <Button sx={{mt: 0.5, width: '40%', minWidth: '90%' }} variant="contained">Book Slot</Button>
          </Box>
        <Box sx={{display:'flex', justifyContent:'center',  textAlign: 'center'}}>
            <img style={{ borderRadius: '0.5rem', height: '9rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://images.unsplash.com/photo-1599818965433-6911c964993c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJvY2slMjBDbGltYmluZ3xlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
            <Typography variant='h3' mt={0.5}>Rock Climbing</Typography>
            <Typography variant='h4' mt={0.5}>Price</Typography>
            <Button sx={{mt: 0.5, width: '40%', minWidth: '90%' }} variant="contained">Book Slot</Button>
          </Box>
       
        </Slider>
        </Box>
      </Box>
  );
};

export default ActivityMain;