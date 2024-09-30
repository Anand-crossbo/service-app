import { Box, Typography} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Climate from "./dataCards/Climate";
import cardsIcon from "./CardsIconMapping";
import cardsLink from "./LinksMapping";

interface LeftSectionProps {
  data: any;
}

const LeftSection = ({ handleToggle, showRightSection, data }: { handleToggle: () => void, showRightSection: boolean, data: any }) => {

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

  if (!data || !data.leftSection) {
    return null; // or you can return a loading spinner or a message
  }
  return (
    <>
    {data.leftSection.map((item: any, index: number) => (
  (item.priority === 1 && item.type === 'Icon') ? (
    <Box className="glass" key={index}>
      <Link to={cardsLink.get(item.name) || "#"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {cardsIcon.get(item.name)}
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  ) : (
    item.priority === 1 && item.type === 'data' && (
        <Climate />
    )
  )
))}
      {data.leftSection.map((item: any, index: number) => (
  (item.priority === 2 && item.type === 'Icon') ? (
    <Box className="glass" key={index}>
      <Link to={cardsLink.get(item.name) || "#"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {cardsIcon.get(item.name)}
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  ) : (
    item.priority === 2 && item.type === 'data' && (
        <Climate />
    )
  )
))}
      {data.leftSection.map((item: any, index: number) => (
  (item.priority === 3 && item.type === 'Icon') ? (
    <Box className="glass" key={index}>
      <Link to={cardsLink.get(item.name) || "#"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {cardsIcon.get(item.name)}
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  ) : (
    item.priority === 3 && item.type === 'data' && (
        <Climate />
    )
  )
))}
      {data.leftSection.map((item: any, index: number) => (
  (item.priority === 4 && item.type === 'Icon') ? (
    <Box className="glass" key={index}>
      <Link to={cardsLink.get(item.name) || "#"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {cardsIcon.get(item.name)}
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  ) : (
    item.priority === 4 && item.type === 'data' && (
        <Climate />
    )
  )
))}
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
      {data.leftSection.map((item: any, index: number) => (
  (item.priority === 5 && item.type === 'Icon') ? (
    <Box className="glass" key={index}>
      <Link to={cardsLink.get(item.name) || "#"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {cardsIcon.get(item.name)}
        </Box>
        <Box>
          <Typography variant="h5" color="white" align="center">
            {item.name}
          </Typography>
        </Box>
      </Link>
    </Box>
  ) : (
    item.priority === 5 && item.type === 'data' && (
        <Climate />
    )
  )
))}
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
