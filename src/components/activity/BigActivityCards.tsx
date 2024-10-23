import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const BigActivityCards = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
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
    <Box sx={{ backgroundColor: 'common.black'}}>
        <Typography variant='h2' color='common.white' padding='0.5rem 0px 0px 1rem'>Things to do in your City</Typography>
        <Typography variant='h5' color='common.white' pl={2}>Discover unique experiences offered in your city</Typography>
        <Slider {...settings}>
          <Box>
            <Box sx={{ display: 'flex', pt: 2, pl: 2 }}>
              <img style={{ borderRadius: '1rem', height: '18rem', objectFit: 'cover'}} width= '45%' src="https://images.unsplash.com/photo-1695907294664-e0337c1c5659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGFtdXNlbWVudCUyMHBhcmt8ZW58MHx8MHx8fDI%3D" alt="Description" />
              <Box sx={{ pl: 2, width: '55%' }}>
                <Typography variant='h4' color='common.white'>Amusement Park</Typography>
                <Typography variant='h5' color='common.white'>Location</Typography>
                <Typography variant='h5' color='common.white' pt={1} style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                An amusement park is a fun-filled destination with thrilling rides, games, and live entertainment. It offers attractions for all ages, including roller coasters, water rides, and food stands. Themed areas and shows enhance the experience, creating lasting memories for visitors.
                </Typography>
                <Typography variant='h3' pt={1} color='common.white'>Aed 799</Typography>
              </Box>
            </Box>
            <Button sx={{ m:2, width:'90%' }} variant="contained">Book Slot</Button>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', pt: 2, pl: 2 }}>
              <img style={{ borderRadius: '1rem', height: '18rem', objectFit: 'cover'}} width= '45%' src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNwYXxlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
              <Box sx={{ pl: 2, width: '55%' }}>
                <Typography variant='h4' color='common.white'>Spa</Typography>
                <Typography variant='h5' color='common.white'>Location</Typography>
                <Typography variant='h5' color='common.white'  pt={1} style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                A spa is a relaxing retreat offering services like massages, facials, and body treatments to promote wellness and rejuvenation. It provides a serene environment where guests can unwind, relieve stress, and enjoy luxurious treatments aimed at enhancing overall well-being.
                </Typography>
                <Typography variant='h4'  pt={1} color='common.white'>Aed 799</Typography>
              </Box>
            </Box>
            <Button sx={{ m:2, width:'90%' }} variant="contained">Book Slot</Button>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', pt: 2, pl: 2 }}>
              <img style={{ borderRadius: '1rem', height: '18rem', objectFit: 'cover'}} width= '45%' src="https://images.unsplash.com/photo-1650939489556-a6fc47e28372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGpldCUyMHNraXxlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
              <Box sx={{ pl: 2, width: '55%' }}>
                <Typography variant='h4' color='common.white'>Jet Ski</Typography>
                <Typography variant='h5' color='common.white'>Location</Typography>
                <Typography variant='h5' color='common.white'  pt={1} style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                A jet ski is a personal watercraft designed for high-speed fun on the water. It's popular for its thrill, allowing riders to zip across waves, make sharp turns, and perform tricks. Perfect for adventure seekers, it's both exhilarating and refreshing.
                </Typography>
                <Typography variant='h4'  pt={1} color='common.white'>Aed 799</Typography>
              </Box>
            </Box>
            <Button sx={{ m:2, width:'90%' }} variant="contained">Book Slot</Button>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', pt: 2, pl: 2 }}>
              <img style={{ borderRadius: '1rem', height: '18rem', objectFit: 'cover'}} width= '45%' src="https://images.unsplash.com/photo-1572065897336-d808c386c9ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8Mg%3D%3D" alt="Description" />
              <Box sx={{ pl: 2, width: '55%' }}>
                <Typography variant='h4' color='common.white'>Jungle Safari</Typography>
                <Typography variant='h5' color='common.white'>Location</Typography>
                <Typography variant='h5' color='common.white'  pt={1} style={{ width: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
                A jungle safari offers an adventurous journey through dense forests, allowing participants to observe wildlife in their natural habitat. Guided by experts, it's an exciting way to encounter exotic animals, birds, and plants while immersing in nature's beauty and tranquility.
                </Typography>
                <Typography variant='h4'  pt={1} color='common.white'>Aed 799</Typography>
              </Box>
            </Box>
            <Button sx={{ m:2, width:'90%' }} variant="contained">Book Slot</Button>
          </Box>
          
        </Slider>
      </Box>
  )
}

export default BigActivityCards