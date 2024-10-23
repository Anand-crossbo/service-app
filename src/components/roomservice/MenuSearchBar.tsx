import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const MenuSearchBar = () => {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          backgroundColor: "background.default",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for dishes & cuisines"
          sx={{
            width: "100%",
            maxWidth: "37.5rem",
            borderRadius: "1.5rem", // Increase border radius
            '& .MuiOutlinedInput-root': {
              borderRadius: "1.5rem", // Increase border radius for input
              height: "3rem", // Decrease height for input
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