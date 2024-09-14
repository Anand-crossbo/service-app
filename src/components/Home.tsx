import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          backgroundRepeat: "no-repeat", // Ensure the image does not repeat
          backgroundAttachment: "fixed", // Ensure the image does not scroll with the page
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
          variant={isMobile ? "h2" : "h1"}
          paddingTop={10}
          paddingRight={isMobile ? 0 : 15}
          align={isMobile ? "center" : "right"}
        >
          12:45 PM
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} paddingRight={isMobile ? 0 : 15} align={isMobile ? "center" : "right"}>
          Sunday, January 28
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent:isMobile? "center": "flex-end", width: "100%", paddingTop: 2 }}
        >
          <WbSunnyIcon
            sx={{ fontSize:isMobile ? 50 : 65, color: "white", paddingRight: "10px" }}
          />
          <Typography variant={isMobile ? "h3" : "h2"} paddingRight={isMobile ? 0 : 15}>
            17°
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems:isMobile? "center": "flex-end",
            justifyContent: isMobile? "center":"space-between",
            flexDirection: isMobile ? "column" : "row",
          }}
          marginTop={10}
        >
          <Box sx={{ paddingLeft:isMobile ? 0: 5 }}>
            <Typography variant="h4" fontWeight="bold">
              Welcome, Mr. Anand
            </Typography>
          </Box>
          <Box sx={{ paddingRight:isMobile ? 0 : 15, paddingTop:isMobile ? 10 :0 }}>
            <Link to="/maincard" style={{ textDecoration: "none" }}>
              <Typography className="round-btn">Tap Here To Begin</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
