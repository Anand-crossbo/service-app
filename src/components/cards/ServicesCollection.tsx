import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import gsap from 'gsap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useNavigate } from 'react-router-dom';
import './ServicesCollection.css';
import cardsLink from './Mapping/LinksMapping';
import theme from '../../theme';

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

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch( `https://genie-menu-data.s3.eu-west-1.amazonaws.com/servicecard.json`); // Replace with the actual path to your JSON file
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
            // border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '50%',
            backgroundColor: 'primary.main',
            marginRight: '14px',
          }}
          onClick={handleBackClick}
        >
          <KeyboardBackspaceIcon sx={{ color: 'common.white'}} />
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