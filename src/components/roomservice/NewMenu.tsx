import { Box, Typography } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'

const NewMenu = () => {

    const Settings = {
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
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <Box>
        <Typography>Top Brands</Typography>
        <Slider {...Settings}>
            <Box>
            <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/front-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk_140725-49054.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
            </Box>
        </Slider>
    </Box>
  )
}

export default NewMenu