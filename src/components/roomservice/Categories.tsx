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
<img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src={src} alt={alt} />
<Typography  textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">{label}</Typography>
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
      {/* <Box>
        <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/front-view-baked-potatoes-with-minced-meat-greens-inside-plate-dark-blue-desk_140725-49054.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
        <Typography  textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">Chef's Special</Typography>
      </Box>
      <Box>
        <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/chicken-with-citruses-spices-white_23-2147765475.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
        <Typography textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">Chicken</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl_127032-1996.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
        <Typography textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">Vegan</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/cocktail-with-lemon-slices-ice-cubes-mint_141793-581.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
        <Typography textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">Bevrages</Typography>
      </Box>
    <Box>
        <img style={{ borderRadius: '10px', height: '80px', objectFit: 'cover', display: 'flex', margin: "0 auto", width: "90%" }} src="https://img.freepik.com/free-photo/high-angle-delicious-chocolate-cake-concept_23-2148769239.jpg?uid=R168120797&ga=GA1.1.238322084.1727711357&semt=ais_hybrid-rr-similar" alt="Description" />
        <Typography textAlign='center' fontSize='12px' paddingTop='5px' fontWeight="bold">Deserts</Typography>
      </Box> */}
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