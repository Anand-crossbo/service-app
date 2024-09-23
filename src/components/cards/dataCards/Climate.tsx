import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WbSunnyIcon from "@mui/icons-material/WbSunny";


const Climate = () => {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
      );
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
  )
}

export default Climate