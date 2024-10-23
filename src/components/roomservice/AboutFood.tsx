import { Box,  Dialog, DialogContent,  IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dish } from '../../store/booking/types'; // Import the Dish interface
import WestIcon from '@mui/icons-material/West';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTranslation } from 'react-i18next';

interface AboutFoodProps {
  dishId: number;
  onBack: () => void;
  allDishes: Dish[];
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: (dish: Dish) => void;
}

const AboutFood: React.FC<AboutFoodProps> = ({ dishId, onBack,allDishes,onAddToCard, onRemoveFromCard, }) => {
  
  const theme = useTheme();
  const { t } = useTranslation();
  const descriptionRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [showFullText, setShowFullText] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const dish = useSelector((state: RootState) => state.dishes.dishes.find(d => d._id === dishId));

  const handleAddOnToggle = (addOnId: string, action: 'add' | 'remove') => {
    setSelectedAddOns((prevSelectedAddOns) => {
      if (action === 'add') {
        return [...prevSelectedAddOns, addOnId];
      } else {
        const index = prevSelectedAddOns.indexOf(addOnId);
        if (index > -1) {
          const newSelectedAddOns = [...prevSelectedAddOns];
          newSelectedAddOns.splice(index, 1);
          return newSelectedAddOns;
        }
        return prevSelectedAddOns;
      }
    });
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const addOns = dish.addons.map(addOnId => allDishes.find(d => d._id === addOnId));

  const handleClickOpen = (url: string) => {
    setSelectedImage(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };


  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden',  height: isMobile ? '100vh' : '90vh', backgroundColor: 'background.default', borderTopLeftRadius: isMobile ? '0' : '1rem', borderBottomLeftRadius: isMobile ? '0' : '1rem' }}>
        <IconButton
          sx={{
            position: 'absolute',
            m: 2,
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: 'common.white',
            color: 'primary.main',
            borderRadius: '50%',
           p: 0.5,
            '&:hover': {
              backgroundColor: 'common.white',
            },
          }}
          onClick={onBack}
        >
          <WestIcon />
        </IconButton>
        <IconButton
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 2,
          m: 2,
          backgroundColor: 'common.white',
          borderRadius: '50%',
         p: 0.5,
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
      {dish.media.filter(media => media.isHero).map((media, index) => (
        media.type === 'video' ? (
          <video
            key={index}
            src={media.url}
            autoPlay
            muted
            controls
            style={{
              position: 'sticky',
              top: 0,
              left: 0,
              height: '12.5rem',
              width: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={index}
            src={media.url}
            alt="food"
            style={{
              position: 'sticky',
              top: 0,
              left: 0,
              height: '12.5rem',
              width: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        )
      ))}
    <Box sx={{ display : 'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography variant='h3' color='common.black' fontWeight='bold' p={1}>
          {dish.name} 
        </Typography>
        </Box>
        <Box sx={{display: 'flex', alignContent:'center', justifyContent:'center'}}>
          <Box sx={{m: 0.5}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <StarIcon sx={{ color: 'primary.main',p:0.5 }} />
            <Typography variant='h3' color='common.black' fontWeight='bold' p={0.5}>{dish.feedback.rating}</Typography>
            </Box>
            <Typography variant='h5' align='center' color='custom.subText' p={0.5}>{dish.feedback.totalRatings} {t(`RATINGS`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ borderLeft:  `1px solid ${theme.palette.custom.subText}`, height: '1.5rem', margin: '0 0.5rem' }} />
          </Box>
          <Box sx={{m: 0.5}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Typography variant='h3' color='common.black' fontWeight='bold' p={0.5}>{dish.currency} {dish.price.afterDiscount}</Typography>
            </Box>
            <Typography variant='h5' align='center' color='#5f5c5c' p={0.5}>{t(`PRICE`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ borderLeft: `1px solid ${theme.palette.custom.subText}`, height: '1.5rem', margin: '0 0.5rem' }} />
          </Box>
          <Box sx={{m: 0.5}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Typography variant='h3' color='common.black' fontWeight='bold' p={0.5}>{dish.preparationTime}</Typography>
            <Typography variant='h4' color='common.black' p={0.5}>{t(`MINS`)}</Typography>
            </Box>
            <Typography variant='h5' align='center' color='#5f5c5c' p={0.5}>{t(`TIME`)}</Typography>
          </Box>

        </Box>


        <Typography variant='h5' color='common.black' padding='0 0.5rem 0 0.5rem'>
          <span>
            {showFullText ? dish.description : `${dish.description.substring(0, 150)}...`}
          </span>
          <span
            onClick={handleToggleText}
            style={{ color: 'blue', cursor: 'pointer', marginLeft: 0.5 }}
          >
            {showFullText ? 'Show Less' : 'Read More'}
          </span>
        </Typography>
    <Box sx={{ width: '100%', pt: 1, pb: 5 }}>
      <Slider {...settings}>
        {dish.media.filter(media => !media.isHero).map((media, index) => (
          media.type === 'video' ? (
            <Box key={index} sx={{ padding: '0 0.5rem' }}>
              <video
                src={media.url}
                autoPlay
                muted
                controls
                style={{ width: '100%', height: '6.25rem', borderRadius: '0.5rem', backgroundColor: 'black' }}
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          ) : (
            <Box key={index} sx={{ padding: '0 0.5rem' }}>
              <img
                src={media.url}
                alt={`small${index}`}
                style={{ width: '100%', height: '6.25rem', borderRadius: '0.5rem' }}
                onClick={() => handleClickOpen(media.url)}
              />
            </Box>
          )
        ))}
      </Slider>
    </Box>

      {/* Ingredients Section */}
      <Typography
        variant='h4'
        color='common.black'
        fontWeight='bold'
        sx={{ alignSelf: 'flex-start', textAlign: 'left', ml: 2 }}
      >
        {t(`KEY_INGREDIENTS`)}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1 }}>
      {dish.ingredients.map((ingredient, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', backgroundColor: 'custom.cardBg',p: 0.5, m: 0.5 }}>
          <img src={ingredient.icon} alt={ingredient.name} style={{ width: '1.5rem', height: '1.5rem', marginRight: '4px' }} />
          <Typography variant='h4' color='common.black'>
            {ingredient.name}
          </Typography>
        </Box>
        ))}
        </Box>

      {/* Nutrients Section */}
  <Typography variant='h3' color='common.black' fontWeight='bold' sx={{ alignSelf: 'flex-start', ml: 2 }}>{t(`NUTRIENTS`)}</Typography>
  <Box sx={{ display: 'flex', flexWrap: 'wrap',p: 1 }}>
  <Box sx={{m: 1, borderRadius: '0.5rem', backgroundColor: 'custom.cardBg', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography p={0.5} variant='h4' color='common.black'>{t(`CALORIES`)}: {dish.nutreints.calories}</Typography>
  </Box>
  <Box sx={{m: 1,borderRadius: '0.5rem', backgroundColor: 'custom.cardBg', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography p={0.5} variant='h4' color='common.black'>{t(`PROTEIN`)}: {dish.nutreints.protein}</Typography>
  </Box>
  <Box sx={{m: 1,borderRadius: '0.5rem', backgroundColor: 'custom.cardBg', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography p={0.5} variant='h4' color='common.black'>{t(`CARBS`)}: {dish.nutreints.carbs}</Typography>
  </Box>
  <Box sx={{m: 1, borderRadius: '0.5rem', backgroundColor: 'custom.cardBg', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography p={0.5} variant='h4' color='common.black'>{t(`SUGAR`)}: {dish.nutreints.sugar}</Typography>
  </Box>
  <Box sx={{ m: 1,borderRadius: '0.5rem', backgroundColor: 'custom.cardBg', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography p={0.5} variant='h4' color='common.black'>{t(`FAT`)}: {dish.nutreints.fat}</Typography>
  </Box>
</Box>
        
        {/* Dietary Tags */}
        <Typography variant='h3' color='common.black' fontWeight='bold' sx={{ alignSelf: 'flex-start', ml:2 }}>{t(`DIETARY_TAGS`)}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1 }}>
          {dish.dietaryTags.map((tag, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.5rem', backgroundColor: 'custom.cardBg',p: 0.5, m: 0.5 }}>
              <img src={tag.icon} alt={tag.name} style={{ width: '1.5rem', height: '1.5rem', marginRight: '4px' }} />
              <Typography variant='h4' color='common.black'>
                {tag.name}
              </Typography>
            </Box>
          ))}
          </Box>

{addOns && addOns.length > 0 && (
  <Box sx={{ m: 2 }}>
    <Typography variant='h3' color='common.black' fontWeight='bold' sx={{ alignSelf: 'flex-start'}}>{t('PAIRING_SUG')}</Typography>
    {addOns.map((addOn) => (
      addOn && (
        <Box key={addOn._id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0.5rem 0' }}>
          <Box sx={{ display: 'flex', m: 1 }}>
            <img src={addOn.media[0].url} alt={addOn.name} style={{ width: '6.25rem', height: '4.5rem', borderRadius: '0.5rem' }} />
            <Box sx={{ justifyContent: 'center', ml: 1 }}>
              <Typography variant='h4' color='common.black' p={1}>{addOn.name}</Typography>
              <Typography variant='h4' color='common.black' m={1}>{dish.currency} {addOn.price.afterDiscount}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {selectedAddOns.filter(id => id === addOn._id.toString()).length === 0 && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2rem', // Adjust the size as needed
                  height: '2rem', // Adjust the size as needed
                  border: '2px solid',
                  borderColor: 'primary.main', // Adjust the color as needed
                  borderRadius: '50%',
                  p: 1, // Adjust the padding as needed
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddOnToggle(addOn._id.toString(), 'add');
                  onAddToCard(addOn);
                }}
              >
                <AddIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
              </Box>
            )}
            {selectedAddOns.filter(id => id === addOn._id.toString()).length > 0 && (
              <>
                {selectedAddOns.filter(id => id === addOn._id.toString()).length === 1 ? (
                  <DeleteIcon
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                      ml: 0.5,
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddOnToggle(addOn._id.toString(), 'remove');
                      onRemoveFromCard(addOn);
                    }}
                  />
                ) : (
                  <RemoveCircleIcon
                    sx={{
                      fontSize: '1.5rem',
                      color: 'primary.main',
                      ml: 0.5,
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddOnToggle(addOn._id.toString(), 'remove');
                      onRemoveFromCard(addOn);
                    }}
                  />
                )}
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    color: 'common.black',
                    ml: 0.5,
                  }}
                >
                  {selectedAddOns.filter(id => id === addOn._id.toString()).length}
                </Typography>
                <AddCircleIcon
                  sx={{
                    fontSize: '1.5rem',
                    color: 'primary.main',
                    ml: 0.5,
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddOnToggle(addOn._id.toString(), 'add');
                    onAddToCard(addOn);
                  }}
                />
              </>
            )}
          </Box>
        </Box>
      )
    ))}
  </Box>
)}
      

      

        <Typography variant='h3' color='common.black' fontWeight='bold' sx={{ alignSelf: 'flex-start', ml:2}}>{t(`GuestReviews`)}</Typography>
        {dish.feedback.topReviews.map((review, index) => (
            <Typography  key={index} variant='h4' color='common.black' sx={{ alignSelf: 'flex-start', m:2 }}>
              -- {review.review}
            </Typography>
        ))}
              {/* Modal for Enlarged Image */}
              <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            '&:first-of-type': {
              padding: 0,
            },
          }}
        >
          <img src={selectedImage} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
      </Box>
  );
};

export default AboutFood;