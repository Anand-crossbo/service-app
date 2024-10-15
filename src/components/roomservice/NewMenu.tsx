import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const NewMenu = () => {

    const Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
      };
    const menuSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
    <Box  sx={{ margin:'16px auto', width: "100%" }}>
        <Typography margin='0 0 5px 10px' fontSize='20px'>Popular Brands</Typography>
        <Slider {...Settings}>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://media.designrush.com/inspiration_images/134933/conversions/_1511456189_555_McDonald's-desktop.jpg" alt="Description" />
            </Box>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://i.pinimg.com/564x/91/83/b2/9183b249e0575b3a4d01527da4c05f46.jpg" alt="Description" />
            </Box>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://i.pinimg.com/enabled_hi/736x/0f/15/ba/0f15ba461d30f00df69a7f8555accd1c.jpg" alt="Description" />
            </Box>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://i.pinimg.com/enabled_hi/736x/59/83/14/598314074a9a7f3fcd0facf8f27d744d.jpg" alt="Description" />
            </Box>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://i.pinimg.com/564x/00/7d/cf/007dcfef305ed889f4e92bc3834f2312.jpg" alt="Description" />
            </Box>
            <Box>
            <img style={{ borderRadius: '10px', height: '60px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://i.pinimg.com/564x/e2/ca/42/e2ca424b9cc78fd9484639d5e12a1672.jpg" alt="Description" />
            </Box>
        </Slider>
        <Typography margin='10px 0 0px 10px' fontSize='20px'>Top Choices</Typography>
        <Typography margin='0px 0 5px 10px' fontSize='12px'>Indulge in handpicked culinary excellence</Typography>
        <Slider {...menuSettings}>
          <Box>
        <Card sx={{ margin: '5px' }}>
          <CardMedia
            component="img"
            height="100"
            image="https://images.unsplash.com/photo-1648437595584-62d15da353b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9ydGlsbGF8ZW58MHx8MHx8fDI%3D"
          />
          <CardContent sx={{ padding: '5px !important'}}>
            <Typography fontSize='14px' fontWeight='bold' component="div">
              Tortilla
            </Typography>
            <Box sx={{display: 'flex', alignItems:'center'}}>
            <StarIcon sx={{ fontSize: '14px', color: 'green', margin:'2px'}} />
            <Typography fontSize='12px' color='green ' margin='2px'> 4.6 </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 20 - 25 mins </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>Mexican</Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 2.6 Km </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center',marginTop: '10px',marginRight:'2px', justifyContent:'space-between'}}>
              <img src="https://cdn-icons-png.flaticon.com/128/723/723734.png" style={{ height: "20px", width: "20px" }} />
            </Box>
          </CardContent>
        </Card>
        </Box>
        <Box>
        <Card sx={{ margin: '5px' }}>
          <CardMedia
            component="img"
            height="100"
            image="https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8Mg%3D%3D"
          />
          <CardContent sx={{ padding: '5px !important'}}>
            <Typography fontSize='14px' fontWeight='bold' component="div">
              Burger
            </Typography>
            <Box sx={{display: 'flex', alignItems:'center'}}>
            <StarIcon sx={{ fontSize: '14px', color: 'green', margin:'2px'}} />
            <Typography fontSize='12px' color='green ' margin='2px'> 4.9 </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 10 - 15 mins </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>American, Healthy</Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 1.1 Km </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems:'center',marginTop: '10px',marginRight:'2px', justifyContent:'space-between'}}>
              <img src="https://cdn-icons-png.flaticon.com/128/723/723734.png" style={{ height: "20px", width: "20px" }} />
              <Box sx={{ backgroundColor: 'red', borderRadius: '4px'}}>
              <Typography fontSize='12px' color='white' padding='0 5px 0 5px' sx={{ whiteSpace: 'nowrap', overflow:'hidden', textOverflow: 'ellipsis'}}> 25% off</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        </Box>
        </Slider>
        <Typography margin='10px 0 0px 10px' fontSize='20px'>All Dishes</Typography>
        <Box sx={{display: 'flex'}}>
          <Box sx={{ margin: '5px'}}>
          <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8Mg%3D%3D" style={{ height: "110px", width: '100%',borderRadius: '10px' }} />
          </Box>
          <Box sx={{margin: '5px'}}>
            <Typography fontSize='18px' margin='2px' fontWeight='bold' component="div">
              Tortilla
            </Typography>
            <Box sx={{display: 'flex', alignItems:'center'}}>
            <StarIcon sx={{ fontSize: '14px', color: 'green', margin:'2px'}} />
            <Typography fontSize='12px' color='green ' margin='2px'> 4.6 </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 20 - 25 mins </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>Fast Food, American </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> $$$ </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>Burger King </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'>1.5 Km</Typography>
            </Box>
          </Box>
        </Box>
        <hr style={{ border: '1px solid #ccc', margin: '5px 15px' }} />
        <Box sx={{display: 'flex'}}>
          <Box sx={{ margin: '5px'}}>
          <img src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHx8Mg%3D%3D" style={{ height: "110px", width: '100%',borderRadius: '10px' }} />
          </Box>
          <Box sx={{margin: '5px'}}>
            <Typography fontSize='18px' margin='2px' fontWeight='bold' component="div">
              Tortilla
            </Typography>
            <Box sx={{display: 'flex', alignItems:'center'}}>
            <StarIcon sx={{ fontSize: '14px', color: 'green', margin:'2px'}} />
            <Typography fontSize='12px' color='green ' margin='2px'> 4.6 </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> 20 - 25 mins </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>Fast Food, American </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'> $$$ </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Typography fontSize='12px' color='black' margin='2px'>Burger King </Typography>
            <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin:'2px'}} />
            <Typography fontSize='12px' margin='2px'>1.5 Km</Typography>
            </Box>
          </Box>
        </Box>
        <hr style={{ border: '1px solid #ccc', margin: '5px 15px' }} />

    </Box>
  )
}

export default NewMenu