import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ServicesCollection.css';
import cardsLink from './Mapping/LinksMapping';

const ServicesCollection = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [travelServices, setTravelServices] = useState([]);
  const [foodServices, setFoodServices] = useState([]);
  const [entertainmentServices, setEntertainmentServices] = useState([]);
  const [informationServices, setInformationServices] = useState([]);
  const [helperServices, setHelperServices] = useState([]);
  const [groomingServices, setGroomingServices] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`https://04e74f50-3d1d-460e-870b-0c6ab456d2c3.mock.pstmn.io/services`); // Replace with the actual path to your JSON file
        const data = await response.json();
        setServices(data);
        setTravelServices(data.filter((service: { category: string }) => service.category === 'Travel'));
        setFoodServices(data.filter((service: { category: string }) => service.category === 'Food'));
        setEntertainmentServices(data.filter((service: { category: string }) => service.category === 'Entertainment'));
        setInformationServices(data.filter((service: { category: string }) => service.category === 'Information'));
        setHelperServices(data.filter((service: { category: string }) => service.category === 'Helper'));
        setGroomingServices(data.filter((service: { category: string }) => service.category === 'Groming'));
        console.log(data);
        // setLoading(false)
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: '100%' },
      { y: 0, duration: 0.5, ease: 'easeInOut' }
    );
  }, []);

  const handleBackClick = () => {
    gsap.to(containerRef.current, {
      y: '100%',
      duration: 0.5,
      ease: 'easeInOut',
      onComplete: () => navigate(-1)
    });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCards = (services: { icon: string; name: string }[]) => (
    services.map((service, index) => (
      <Box key={index} sx={{ padding: '8px' }} className="carousel-item">
        <Card sx={{ backgroundColor: 'white',width:'100%' }}>
        <Link to={cardsLink.get(service.name) || "#"} style={{ textDecoration: "none", color: 'black' }}>
          <CardMedia
            component="img"
            image={service.icon}
            alt={service.name}
            sx={{
              width: '100%',
              height: '60px',
              // maxHeight: '60px', // Set a maximum height for the image
              objectFit: 'contain', // Ensure the image scales correctly
              padding: '10px', // Optional: Add some padding for better appearance
            }}
          />
          <CardContent
            sx={{
              height: '40px', // Define the height of CardContent
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '5px !important',
            }}
          >
            <Typography align='center' fontSize='12px' fontWeight='bold' component="div">
              {service.name}
            </Typography>
          </CardContent>
          </Link>
        </Card>
      </Box>
    ))
  );
  return (
    <Box ref={containerRef} sx={{ padding: '16px', overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            border: '1px solid #4a4949',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            marginRight: '14px',
          }}
          onClick={handleBackClick}
        >
          <KeyboardBackspaceIcon />
        </Box>
        <Typography variant="h6">All Services</Typography>
      </Box>
      <Typography fontSize='16px' marginLeft='6px' fontWeight='bold'>Travel</Typography>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {renderCards(travelServices)}
          </div>
        </div>
      </div>
      <Typography  fontSize='16px' marginLeft='6px' fontWeight='bold'>Food</Typography>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {renderCards(foodServices)}
          </div>
        </div>
      </div>
      <Typography fontSize='16px' marginLeft='6px' fontWeight='bold'>Entertainment</Typography>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {renderCards(entertainmentServices)}
          </div>
        </div>
      </div>
      <Typography fontSize='16px' marginLeft='6px' fontWeight='bold'>Information</Typography>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {renderCards(informationServices)}
          </div>
        </div>
      </div>
      <Typography fontSize='16px' marginLeft='6px' fontWeight='bold'>Helpers</Typography>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-content">
            {renderCards(helperServices)}
          </div>
        </div>
      </div>
      <Typography fontSize='16px' marginLeft='6px' fontWeight='bold'>Beauty</Typography>
      <Box width='115px'>
        {/* <div className="carousel-wrapper"> */}
          {/* <div className="carousel-content"> */}
            {renderCards(groomingServices)}
          {/* </div> */}
        {/* </div> */}
      </Box>
    </Box>
  );
};

export default ServicesCollection;