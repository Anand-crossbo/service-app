import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import cardsLink from "./Mapping/LinksMapping";
import Advertisement from "../advertisement/Advertisement";
import QuickActions from "../quickactions/QuickActions";

const CardsCollection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const navigate = useNavigate();

  const images = [
    "https://cdn-icons-png.flaticon.com/128/1940/1940922.png",
    "https://cdn-icons-png.flaticon.com/128/2868/2868865.png",
    "https://cdn-icons-png.flaticon.com/128/9561/9561688.png",
    "https://cdn-icons-png.flaticon.com/128/2099/2099193.png",
    "https://cdn-icons-png.flaticon.com/128/3946/3946975.png",
    "https://cdn-icons-png.flaticon.com/128/3270/3270184.png",
    "https://cdn-icons-png.flaticon.com/128/1032/1032989.png",
    "https://cdn-icons-png.flaticon.com/128/2656/2656398.png",
  ];

  interface Service {
    id: string;
    name: string;
    icon: string;
    priority: boolean;
  }

  const [services, setServices] = useState<Service[]>([]);
  const [nonPriorityImages, setNonPriorityImages] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://04e74f50-3d1d-460e-870b-0c6ab456d2c3.mock.pstmn.io/services`
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
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
        <CircularProgress sx={{ color: 'black'}} />
      </Box>
    ); // Show a circular loader while data is being fetched
  }

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "16px" }}>
        {services.map((service) => (
          <Grid item xs={4} sm={4} md={4} key={service.id}>
            <Card sx={{ backgroundColor: "white" }}>
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
                  padding: "10px", // Optional: Add some padding for better appearance
                }}
              />
              <CardContent
                sx={{
                  height: "40px", // Define the height of CardContent
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px !important",
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
          <Card sx={{ backgroundColor: "white" }} onClick={handleCardClick}>
            <CardMedia
              component="img"
              image={nonPriorityImages[currentImageIndex]}
              alt="Card 9"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "60px", // Set a maximum height for the image
                padding: "10px", // Optional: Add some padding for better appearance
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
                padding: "5px !important",
              }}
            >
              <Typography
                align="center"
                fontSize="12px"
                fontWeight="bold"
                component="div"
              >
                All Services
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
