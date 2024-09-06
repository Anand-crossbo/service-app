import { Box, Button, Typography } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/staticImages/background4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          color: "white",
        }}
      >
        <Typography
          variant="h1"
          paddingTop={20}
          paddingRight={15}
          align="right"
        >
          12:45 PM
        </Typography>
        <Typography variant="h4" paddingRight={15} align="right">
          Sunday, January 28
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <WbSunnyIcon
            sx={{ fontSize: 65, color: "white", paddingRight: "10px" }}
          />
          <Typography variant="h2" paddingRight={15}>
            17°
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
          marginTop={15}
        >
          <Box sx={{ paddingLeft: 5 }}>
            <Typography variant="h4" fontWeight="bold">
              Welcome, Mr. Anand
            </Typography>
          </Box>
          <Box sx={{ paddingRight: 15 }}>
            <Link to="/cards" style={{ textDecoration: "none" }}>
              <Typography className="round-btn">Tap Here To Begin</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
