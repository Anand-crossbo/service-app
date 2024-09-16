import { Box, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KingBedIcon from "@mui/icons-material/KingBed";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";

const LeftSection = ({ handleToggle, showRightSection }: { handleToggle: () => void, showRightSection: boolean }) => {

    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString()
    );
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const [weatherData, setWeatherData] = useState<
      | {
          temp: number;
          minTemp: number;
          maxTemp: number;
          locationName: string;
          mood: string;
          sunrise: string;
          sunset: string;
        }
      | false
    >(false);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

  
    const search = async (city: string) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1d075fcebb507a213dfed3f0ea601fd3`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setWeatherData({
          temp: Math.floor(data.main.temp),
          minTemp: Math.floor(data.main.temp_min),
          maxTemp: Math.floor(data.main.temp_max),
          locationName: data.name,
          mood: data.weather[0].main,
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      } catch (error) {}
    };
  
    useEffect(() => {
      search("delhi");
    }, []);
  return (
    <>
      <Box className="glass">
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Typography variant="h5" color="white" paddingLeft="10px">
            {currentTime}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "10px" }}>
            <Typography fontSize={24} color="white">
              {weatherData ? weatherData.locationName : ""}
            </Typography>
            <Typography paddingTop={1} fontSize={10} color="white">
              {weatherData ? weatherData.temp : 0}° | H:{" "}
              {weatherData ? weatherData.minTemp : 0}° : L:
              {weatherData ? weatherData.maxTemp : 0}°
            </Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <WbSunnyIcon
              sx={{ fontSize: 35, color: "white", paddingTop: "2px" }}
            />
            <Typography fontSize={12} align="right" color="white">
              {weatherData ? weatherData.mood : ""}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "10px" }}>
            <Typography fontSize={12} color="white">
              SUNRISE
            </Typography>
            <Typography fontSize={14} color="white">
              {weatherData ? weatherData.sunrise : ""}
            </Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Typography fontSize={12} align="right" color="white">
              SUNSET
            </Typography>
            <Typography fontSize={14} align="right" color="white">
              {weatherData ? weatherData.sunset : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="glass">
        <Link to="/roomservicemain" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <RoomServiceIcon sx={{ fontSize: "100px", color: "white" }} />
          </Box>
          <Box>
            <Typography variant="h5" color="white" align="center">
              In-Room Dinning
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box className="glass">
        <Box>
          <KitesurfingIcon
            sx={{ fontSize: "100px", color: "white", align: "center" }}
          />
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            Activities
          </Typography>
        </Box>
      </Box>
      <Box className="glass">
        <Box>
          <LocationOnIcon
            sx={{ fontSize: "100px", color: "white", align: "center" }}
          />
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            Location
          </Typography>
        </Box>
      </Box>
      <Box
        className="card-tall card-wide"
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.634)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          backgroundImage: "url(/staticImages/spa.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          height: "395px",
          alignItems: "flex-end", // Align items to the bottom
          padding: "20px", // Add padding for spacing
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "10px",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay effect
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h4" color="white">
            25% off for your spa appointment today
          </Typography>
        </Box>
      </Box>
      <Box className="glass">
        <Box>
          <KingBedIcon
            sx={{ fontSize: "100px", color: "white", align: "center" }}
          />
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            Know your room
          </Typography>
        </Box>
      </Box>
      {isMobile && (
        <Box className="glass" display="flex" onClick={handleToggle}>
          <Typography variant="h5" color="white" align="center">
            {showRightSection ? "Show Less" : "Show More"}
          </Typography>
        </Box>
      )}
      </>
  );
};

export default LeftSection;
