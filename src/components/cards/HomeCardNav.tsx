import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CommentIcon from '@mui/icons-material/Comment';

const HomeCardNav = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
    <Typography
      fontSize='16px'
      component="div"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '16px',
        padding: '8px', // Optional: Add some padding for better appearance
        display: 'flex',
        alignItems: 'center', // Align items vertically centered
      }}
    >
      <CommentIcon sx={{ color: 'white', marginRight: '8px' }} />
      Chat
    </Typography>

      <Typography variant="h6" component="div">
        Genie
      </Typography>
      <IconButton sx={{ backgroundColor: 'black'}}>
            <MenuIcon sx={{ color: 'white'}} />
            </IconButton>
    </Box>
  )
}

export default HomeCardNav