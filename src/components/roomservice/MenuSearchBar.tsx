import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const MenuSearchBar = () => {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "background.default",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for dishes & cuisines"
          sx={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "20px", // Increase border radius
            height: "40px", // Decrease height
            '& .MuiOutlinedInput-root': {
              borderRadius: "20px", // Increase border radius for input
              height: "40px", // Decrease height for input
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: 'primary.main'}}/>
              </InputAdornment>
            ),
          }}
        />
      </Box>
  )
}

export default MenuSearchBar