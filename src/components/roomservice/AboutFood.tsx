import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Dish } from '../../store/booking/types'; // Import the Dish interface

interface AboutFoodProps {
  dishId: number;
  onBack: () => void;
}

const AboutFood: React.FC<AboutFoodProps> = ({ dishId, onBack }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showFullText, setShowFullText] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  const dish = useSelector((state: RootState) => state.dishes.dishes.find(d => d._id === dishId));

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    if (descriptionRef.current && dish) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      setIsOverflowing(scrollHeight > clientHeight);
    }
  }, [dish]);

  if (!dish) {
    return <Typography>Dish not found</Typography>;
  }
  return (
    <Grid item xs={6} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', alignItems: 'center', height: isMobile ? '100vh' : '90vh', backgroundColor: 'primary.main', borderTopLeftRadius: isMobile ? '0' : '16px', borderBottomLeftRadius: isMobile ? '0' : '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <HighlightOffIcon sx={{ fontSize: '40px', padding: '10px' }} onClick={onBack} />
        </Box>
        <Box sx={{ width: '100%' }}>
          {dish.media.filter(media => media.isHero).map((media, index) => (
            <img key={index} src={media.url} alt="food" style={{ width: '370px', height: '150px', borderRadius: '16px', objectFit: 'cover', padding: '10px 10px 0 10px' }} />
          ))}
        </Box>
        <Typography fontSize='16px' color='black' fontWeight='bold' padding='10px'>
          {dish.name}
        </Typography>
        <Typography
        ref={descriptionRef}
        fontSize='12px'
        color='black'
        padding='0px 10px 0 10px'
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: showFullText ? 'none' : 3,
        }}
      >
        {dish.description}
      </Typography>
      {isOverflowing && (
        <Typography
          fontSize='14px'
          color='blue'
          onClick={handleToggleText}
          sx={{ alignSelf: 'flex-start', paddingLeft: '10px', cursor: 'pointer' }}
        >
          {showFullText ? 'Show Less' : 'Read More'}
        </Typography>
      )}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', paddingTop: '10px' }}>
          {dish.media.filter(media => !media.isHero).map((media, index) => (
            <img key={index} src={media.url} alt={`small${index}`} style={{ width: '110px', height: '100px', borderRadius: '8px' }} />
          ))}
        </Box>
        <Typography fontSize='16px' color='black' fontWeight='bold' padding='0 10px 0 10px' sx={{ alignSelf: 'flex-start' }}>Guest Reviews</Typography>
        <Typography fontSize='16px' color='black' padding='0 10px 10px 10px' sx={{ alignSelf: 'flex-start' }}>{dish.feedback.rating} ★★★★★ {dish.feedback.totalRatings} Reviews</Typography>
        <Box sx={{ width: '100%', borderBottom: '1px solid #000' }}></Box>
        {dish.feedback.topReviews.map((review, index) => (
          <React.Fragment key={index}>
            <Typography fontSize='14px' color='black' padding='10px 10px 10px 10px' sx={{ alignSelf: 'flex-start' }}>★★★★★ {new Date(review.date).toLocaleDateString()}</Typography>
            <Typography fontSize='14px' color='black' padding='0 10px 10px 10px'sx={{ alignSelf: 'flex-start' }}>
              {review.review}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </Grid>
  );
};

export default AboutFood;