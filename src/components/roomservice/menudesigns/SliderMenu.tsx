import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Slider from 'react-slick'
import StarIcon from '@mui/icons-material/Star';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Dish } from "../../../store/booking/types";


interface SliderMenuProps {
  dishes: Dish[];
  onCardClick: (dishId: number) => void;
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: (dish: Dish) => void;
  counts: { [key: number]: number };
}

const SliderMenu: React.FC<SliderMenuProps> = ({ dishes, onCardClick, onAddToCard, onRemoveFromCard, counts }) => {
  const menuSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ width: "100%"}}>
        <Slider {...menuSettings}>
        {dishes.map((dish) => (
          <Box key={dish._id} sx={{ padding: '0 10px' }}>
            <Card sx={{ margin: '5px' }}>
              <CardMedia
                component="img"
                height="100"
                image={dish.media.find((media) => media.isHero)?.url || dish.media[0].url}
              />
              <CardContent sx={{ padding: '5px !important' }}>
                <Typography fontSize='14px' fontWeight='bold' component="div">
                  {dish.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <StarIcon sx={{ fontSize: '14px', color: 'green', margin: '2px' }} />
                  <Typography fontSize='12px' color='green' margin='2px'> {dish.feedback.rating} </Typography>
                  <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin: '2px' }} />
                  <Typography fontSize='12px' margin='2px'> {dish.preparationTime} mins </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography fontSize='12px' color='black' margin='2px'>{dish.origin.name}</Typography>
              <FiberManualRecordIcon sx={{ fontSize: '6px', color: 'black', margin: '2px' }} />
              <Typography fontSize='12px' margin='2px'> {dish.price.afterDiscount} USD </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginRight: '2px', justifyContent: 'space-between' }}>
              {dish.dietaryTags.map((tag) => (
                <img key={tag.name} src={tag.icon} alt={tag.name} style={{ height: "20px", width: "20px" }} />
              ))}
            </Box>
          </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
       {/* <Slider {...menuSettings}>
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
        </Slider> */}
    </Box>
   

  )
}

export default SliderMenu