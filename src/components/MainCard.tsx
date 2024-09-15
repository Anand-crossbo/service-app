import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SmallSidebar from "./SmallSidebar";

const MainCard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(true);
  const [showRightSection, setShowRightSection] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setShowRightSection(!showRightSection);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      {!isMobile && <Sidebar open={isOpen} onClose={handleClose} />}
      <Box
        sx={{
          position: "relative",
          padding: "15px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/staticImages/background4.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            zIndex: -1,
          },
        }}
      >
        {!isMobile && !isOpen && (
          <KeyboardDoubleArrowLeftIcon
            sx={{
              color: "white",
              fontSize: 40,
              position: "absolute", // Use absolute positioning
              top: "16px", // Adjust the top position as needed
              right: "5px", // Adjust the right position as needed
              zIndex: 1, // Ensure it overlaps the background
              cursor: "pointer", // Change the cursor to a pointer
            }}
            onClick={handleOpen} // Open the sidebar when clicked
          />
        )}
        <Box className="photo-grid-first">
          <Box className="left-section">
            <LeftSection handleToggle={handleToggle} showRightSection={showRightSection} />
          </Box>
          <Box
            className="right-section"
            display={isMobile && !showRightSection ? "none" : "grid"}
            sx={{ visibility: isMobile || !isOpen ? 'visible' : 'hidden' }}
          >
            <RightSection />
          </Box>
        </Box>
      </Box>
      {isMobile && <SmallSidebar />}
    </Box>
  );
};

export default MainCard;
