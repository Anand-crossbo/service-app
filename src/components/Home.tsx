import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline // Add this attribute for iOS
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // filter: "blur(1px)",
        }}
      >
        <source src="/staticImages/background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box
        sx={{
          position: "relative",
          color: "white",
        }}
      >
        <Typography
          variant='h1'
          pt={10}
          align="center"
        >
          12:45 PM
        </Typography>
        <Typography variant='h2' align="center">
          Sunday, January 28
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            pt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WbSunnyIcon sx={{ fontSize: '4rem', color: 'white', pr: 1 }} />
            <Typography variant="h2">17°</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems:"center",
            justifyContent: 'center',
            flexDirection: "column",
          }}
          mt={10}
        >
          <Box>
            <Typography variant="h2" fontWeight="bold">
              {t(`Welcome`)}, Mr. Anand
            </Typography>
          </Box>
          <Box sx={{ mt: 12}}>
            <Link to="/homecard" style={{ textDecoration: "none" }}>
              <Typography className="round-btn">{t(`BtnBegin`)}</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
