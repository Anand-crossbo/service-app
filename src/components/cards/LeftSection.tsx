import { Box, Typography} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KingBedIcon from "@mui/icons-material/KingBed";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Link } from "react-router-dom";
import Climate from "./dataCards/Climate";

const LeftSection = ({ handleToggle, showRightSection }: { handleToggle: () => void, showRightSection: boolean }) => {

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
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleShowMoreClick = () => {
      handleToggle();
      if (!showRightSection) {
        setTimeout(() => {
          bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
  };
  return (
    <>
      <Climate />
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
        <Box className="glass" display="flex" onClick={handleShowMoreClick}>
          <Typography variant="h5" color="white" align="center">
            {showRightSection ? "Show Less" : "Show More"}
          </Typography>
        </Box>
      )}
        <div ref={bottomRef} />
      </>
  );
};

export default LeftSection;
