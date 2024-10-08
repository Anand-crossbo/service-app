import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import { Category } from "../../store/types";

interface MenuItemProps {
  src: string;
  alt: string;
  label: string;
  isMobile: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ src, alt, label, isMobile, onClick }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: { xs: "10px", sm: "0" },
      cursor: "pointer", // Add cursor pointer to indicate clickable
    }}
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      style={{ maxHeight: "50%", maxWidth: "50%", paddingTop: isMobile ? "0" : "30px" }}
    />
    <Typography
      align="center"
      fontSize={isMobile ? "10px" : "14px"}
      padding="2px"
      fontWeight="bold"
    >
      {label}
    </Typography>
  </Box>
);

const MenuShortcut = ({ onCategorySelect }: { onCategorySelect: (category: string) => void }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const categories = useSelector((state: RootState) => state.dishes.categories);

  return (
    <Grid item xs={12} sm={1} paddingRight={isMobile ? 0 : 0.5}>
      <Box
        sx={{
          height: { xs: "auto", sm: "90vh" },
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          backgroundColor: "#c9c9c9",
          borderTopLeftRadius: { xs: "0", sm: "16px" },
          borderBottomLeftRadius: { xs: "16px", sm: "16px" },
          borderBottomRightRadius: { xs: "16px", sm: "0" },
          overflowX: { xs: "auto", sm: "hidden" }, // Allow horizontal scrolling on mobile
          padding: { xs: "5px", sm: "0" }, // Add padding on mobile
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.name}
            src={category.icon}
            alt={category.name}
            label={category.name}
            isMobile={isMobile}
            onClick={() => onCategorySelect(category.name)}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default MenuShortcut;