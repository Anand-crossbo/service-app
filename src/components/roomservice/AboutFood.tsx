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

  // const handleAddOnToggle = (addOnId: string) => {
  //   setSelectedAddOns((prevSelectedAddOns) =>
  //     prevSelectedAddOns.includes(addOnId)
  //       ? prevSelectedAddOns.filter((id) => id !== addOnId)
  //       : [...prevSelectedAddOns, addOnId]
  //   );
  // };

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
      <Box sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden',  height: isMobile ? '100vh' : '90vh', backgroundColor: 'background.default', borderTopLeftRadius: isMobile ? '0' : '16px', borderBottomLeftRadius: isMobile ? '0' : '16px' }}>
        <IconButton
          sx={{
            position: 'absolute',
            margin: '10px',
            top: 0,
            left: 0,
            zIndex: 2,
            backgroundColor: 'common.white',
            color: 'primary.main',
            borderRadius: '50%',
            padding: '5px',
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
          margin: '10px',
          backgroundColor: 'common.white',
          borderRadius: '50%',
          padding: '5px',
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
              height: '200px',
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
              height: '200px',
              width: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        )
      ))}
    <Box sx={{ display : 'flex', justifyContent:'center', alignItems:'center'}}>
        <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='10px'>
          {dish.name} 
        </Typography>
        </Box>
        <Box sx={{display: 'flex', alignContent:'center', justifyContent:'center'}}>
          <Box sx={{margin:'5px'}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <StarIcon sx={{ color: 'primary.main',padding:'2px' }} />
            <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='2px'>{dish.feedback.rating}</Typography>
            </Box>
            <Typography fontSize='12px' align='center' color='custom.subText' padding='2px'>{dish.feedback.totalRatings} {t(`RATINGS`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ borderLeft:  `1px solid ${theme.palette.custom.subText}`, height: '25px', margin: '0 10px' }} />
          </Box>
          <Box sx={{margin:'5px'}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='2px'>{dish.currency} {dish.price.afterDiscount}</Typography>
            </Box>
            <Typography fontSize='12px' align='center' color='#5f5c5c' padding='2px'>{t(`PRICE`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ borderLeft: `1px solid ${theme.palette.custom.subText}`, height: '25px', margin: '0 10px' }} />
          </Box>
          <Box sx={{margin:'5px'}}>
            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='2px'>{dish.preparationTime}</Typography>
            <Typography fontSize='14px' color='common.black' padding='4px'>{t(`MINS`)}</Typography>
            </Box>
            <Typography fontSize='12px' align='center' color='#5f5c5c' padding='2px'>{t(`TIME`)}</Typography>
          </Box>

        </Box>


        <Typography fontSize='12px' color='common.black' padding='0px 10px 0 10px'>
          <span>
            {showFullText ? dish.description : `${dish.description.substring(0, 150)}...`}
          </span>
          <span
            onClick={handleToggleText}
            style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
          >
            {showFullText ? 'Show Less' : 'Read More'}
          </span>
        </Typography>
    <Box sx={{ width: '100%', paddingTop: '10px', paddingBottom: '40px' }}>
      <Slider {...settings}>
        {dish.media.filter(media => !media.isHero).map((media, index) => (
          media.type === 'video' ? (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <video
                src={media.url}
                autoPlay
                muted
                controls
                style={{ width: '100%', height: '100px', borderRadius: '8px', backgroundColor: 'black' }}
              >
                Your browser does not support the video tag.
              </video>
            </Box>
          ) : (
            <Box key={index} sx={{ padding: '0 5px' }}>
              <img
                src={media.url}
                alt={`small${index}`}
                style={{ width: '100%', height: '100px', borderRadius: '8px' }}
                onClick={() => handleClickOpen(media.url)}
              />
            </Box>
          )
        ))}
      </Slider>
    </Box>

      {/* Ingredients Section */}
      <Typography
        fontSize='16px'
        color='common.black'
        fontWeight='bold'
        padding='10px 10px 0 10px'
        sx={{ alignSelf: 'flex-start', textAlign: 'left' }}
      >
        {t(`KEY_INGREDIENTS`)}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
      {dish.ingredients.map((ingredient, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', backgroundColor: '#cecece4f', padding: '5px', margin: '5px' }}>
          <img src={ingredient.icon} alt={ingredient.name} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          <Typography fontSize='14px' color='common.black'>
            {ingredient.name}
          </Typography>
        </Box>
        ))}
        </Box>

      {/* Nutrients Section */}
  <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='10px 10px 0 10px' sx={{ alignSelf: 'flex-start' }}>{t(`NUTRIENTS`)}</Typography>
  <Box sx={{ display: 'flex', flexWrap: 'wrap',padding: '10px' }}>
  <Box sx={{margin:'6px', borderRadius: '8px', backgroundColor: '#cecece4f', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography padding='5px' fontSize='14px' color='common.black'>{t(`CALORIES`)}: {dish.nutreints.calories}</Typography>
  </Box>
  <Box sx={{margin:'6px',borderRadius: '8px', backgroundColor: '#cecece4f', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography padding='5px' fontSize='14px' color='common.black'>{t(`PROTEIN`)}: {dish.nutreints.protein}</Typography>
  </Box>
  <Box sx={{margin:'6px',borderRadius: '8px', backgroundColor: '#cecece4f', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography padding='5px' fontSize='14px' color='common.black'>{t(`CARBS`)}: {dish.nutreints.carbs}</Typography>
  </Box>
  <Box sx={{margin:'6px', borderRadius: '8px', backgroundColor: '#cecece4f', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography padding='5px' fontSize='14px' color='common.black'>{t(`SUGAR`)}: {dish.nutreints.sugar}</Typography>
  </Box>
  <Box sx={{ margin:'6px',borderRadius: '8px', backgroundColor: '#cecece4f', justifyContent: 'center', alignContent: 'center', whiteSpace: 'nowrap' }}>
    <Typography padding='5px' fontSize='14px' color='common.black'>{t(`FAT`)}: {dish.nutreints.fat}</Typography>
  </Box>
</Box>
        
        {/* Dietary Tags */}
        <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='10px 10px 0 10px' sx={{ alignSelf: 'flex-start' }}>{t(`DIETARY_TAGS`)}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
          {dish.dietaryTags.map((tag, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', backgroundColor: '#cecece4f', padding: '5px', margin: '5px' }}>
              <img src={tag.icon} alt={tag.name} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              <Typography fontSize='14px' color='common.black'>
                {tag.name}
              </Typography>
            </Box>
          ))}
          </Box>

      {/* Other content */}
      {/* {addOns && addOns.length > 0 && (
        <Box sx={{ margin:'10px'}}>
          <Typography fontSize='16px' color='common.black' fontWeight='bold' paddingTop='10px' sx={{ alignSelf: 'flex-start' }}>{t(`PAIRING_SUG`)}</Typography>
          {addOns.map((addOn) => (
            addOn && (
              <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Box sx={{ display: 'flex',margin:'10px'}}>
                  <img src={addOn.media[0].url} alt={addOn.name} style={{ width: '100px', height: '75px', borderRadius: '8px' }} />
                  <Box sx={{justifyContent:'center'}}>
                  <Typography fontSize='14px' color='common.black' padding='10px'>{addOn.name}</Typography>
                  <Typography fontSize='14px' color='common.black' padding='0 10px 10px 10px'>{dish.currency} {addOn.price.afterDiscount}</Typography>
                  </Box>
                </Box>
                <Box>
                <IconButton
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: '50%',
                padding: '5px',
                alignSelf: 'right',
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleAddOnToggle(addOn._id.toString());
                if (selectedAddOns.includes(addOn._id.toString())) {
                  onRemoveFromCard(addOn);
                } else {
                  onAddToCard(addOn);
                }
              }}
            >
              {selectedAddOns.includes(addOn._id.toString()) ? <DeleteIcon sx={{ color: 'common.white' }} /> : <AddIcon sx={{ color: 'common.white' }} />}
            </IconButton>
                </Box>
              </Box>
              
            )
          ))}
        </Box>
      )} */}

{addOns && addOns.length > 0 && (
  <Box sx={{ margin: '10px' }}>
    <Typography fontSize='16px' color='common.black' fontWeight='bold' paddingTop='10px' sx={{ alignSelf: 'flex-start' }}>{t('PAIRING_SUG')}</Typography>
    {addOns.map((addOn) => (
      addOn && (
        <Box key={addOn._id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
          <Box sx={{ display: 'flex', margin: '10px' }}>
            <img src={addOn.media[0].url} alt={addOn.name} style={{ width: '100px', height: '75px', borderRadius: '8px' }} />
            <Box sx={{ justifyContent: 'center', marginLeft: '10px' }}>
              <Typography fontSize='14px' color='common.black' padding='10px'>{addOn.name}</Typography>
              <Typography fontSize='14px' color='common.black' padding='0 10px 10px 10px'>{dish.currency} {addOn.price.afterDiscount}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {selectedAddOns.filter(id => id === addOn._id.toString()).length === 0 && (
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px', // Adjust the size as needed
                  height: '30px', // Adjust the size as needed
                  border: '2px solid',
                  borderColor: 'primary.main', // Adjust the color as needed
                  borderRadius: '50%',
                  padding: '8px', // Adjust the padding as needed
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddOnToggle(addOn._id.toString(), 'add');
                  onAddToCard(addOn);
                }}
              >
                <AddIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
              </Box>
            )}
            {selectedAddOns.filter(id => id === addOn._id.toString()).length > 0 && (
              <>
                {selectedAddOns.filter(id => id === addOn._id.toString()).length === 1 ? (
                  <DeleteIcon
                    sx={{
                      fontSize: '20px',
                      color: 'primary.main',
                      marginRight: '5px',
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
                      fontSize: '20px',
                      color: 'primary.main',
                      marginRight: '5px',
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
                    fontSize: '20px',
                    color: 'common.black',
                    marginRight: '5px',
                  }}
                >
                  {selectedAddOns.filter(id => id === addOn._id.toString()).length}
                </Typography>
                <AddCircleIcon
                  sx={{
                    fontSize: '20px',
                    color: 'primary.main',
                    marginRight: '5px',
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
      

      

        <Typography fontSize='16px' color='common.black' fontWeight='bold' padding='10px 10px 0 10px' sx={{ alignSelf: 'flex-start' }}>{t(`GuestReviews`)}</Typography>
        {dish.feedback.topReviews.map((review, index) => (
            <Typography  key={index} fontSize='14px' padding='0 10px 10px 10px' color='common.black' sx={{ alignSelf: 'flex-start' }}>
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