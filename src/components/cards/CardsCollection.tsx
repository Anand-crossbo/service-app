import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import cardsLink from "./Mapping/LinksMapping";
import Advertisement from "../advertisement/Advertisement";
import QuickActions from "../quickactions/QuickActions";
import { useTranslation } from 'react-i18next';

interface Service {
  id: string;
  name: string;
  icon: string;
  priority: boolean;
}

const CardsCollection = () => {

  const [services, setServices] = useState<Service[]>([]);
  const [nonPriorityImages, setNonPriorityImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://genie-menu-data.s3.eu-west-1.amazonaws.com/servicecard.json`
        ); // Replace with the actual path to your JSON file
        const data = await response.json();
        const priorityServices = data.filter(
          (service: { priority: boolean }) => service.priority
        );
        const nonPriorityServices = data.filter(
          (service: { priority: boolean }) => !service.priority
        );
        setNonPriorityImages(
          nonPriorityServices.map((service: Service) => service.icon)
        );
        setServices(priorityServices);
        setLoading(false); // Set loading to false after data is fetched
        console.log(priorityServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nonPriorityImages.length);
        setFadeIn(true);
      }, 500); // Duration of fade-out
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nonPriorityImages.length]);

  const handleCardClick = () => {
    navigate("/servicescollection");
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress sx={{ color: 'primary.main'}} />
      </Box>
    ); // Show a circular loader while data is being fetched
  }

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "16px" }}>
        {services.map((service) => (
          <Grid item xs={4} sm={4} md={4} key={service.id}>
            <Card sx={{ backgroundColor: "common.white" }}>
            <Link to={cardsLink.get(service.name) || "#"} style={{ textDecoration: "none", color: 'black' }}>
              <CardMedia
                component="img"
                image={service.icon}
                alt={service.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "60px", // Set a maximum height for the image
                  objectFit: "contain", // Ensure the image scales correctly
                  padding: "2px", // Optional: Add some padding for better appearance
                }}
              />
              <CardContent
                sx={{
                  height: "40px", // Define the height of CardContent
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2px !important",
                }}
              >
                <Typography
                  align="center"
                  fontSize="12px"
                  fontWeight="bold"
                  component="div"
                >
                  {service.name}
                </Typography>
              </CardContent>
            </Link>
            </Card>
          </Grid>
        ))}
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ backgroundColor: "common.white" }} onClick={handleCardClick}>
            <CardMedia
              component="img"
              image={nonPriorityImages[currentImageIndex]}
              alt="Card 9"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                padding: "2px", // Optional: Add some padding for better appearance
                objectFit: "contain", // Ensure the image scales correctly
                opacity: fadeIn ? 1 : 0,
                transition: "opacity 0.5s ease-in-out", // Apply fade-in transition
              }}
            />
            <CardContent
              sx={{
                height: "40px", // Define the height of CardContent
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="12px"
                fontWeight="bold"
                component="div"
              >
                {t(`ALL_SERVICES`)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
        <Advertisement />
      <QuickActions />
    </>
  );
};

export default CardsCollection;
