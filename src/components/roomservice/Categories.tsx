import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface MenuItemProps {
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ src, alt, label, onClick }) => (
<Box onClick={onClick}>
<img style={{ borderRadius: '0.5rem', height: '5rem', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src={src} alt={alt} />
<Typography  textAlign='center' variant='h5' pt={0.5} fontWeight="bold">{label}</Typography>
</Box>
);

const Categories =  ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {

  const categories = useSelector((state: RootState) => state.dishes.categories);

    const categoryCardSettings = {
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
    <Box sx={{ margin: '0px auto', width: "100%" }}>
    <Slider {...categoryCardSettings}>
              {categories.map((category) => (
          <MenuItem
            key={category.name}
            src={category.icon}
            alt={category.name}
            label={category.name}
            onClick={() => onCategorySelect(category.name)}
          />
        ))}
    </Slider>
  </Box>
  );
};

export default Categories;