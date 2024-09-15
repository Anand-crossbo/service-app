import { Box, Typography } from '@mui/material';
import React from 'react';

const SmallSidebar = () => {
  return (
    <Box
    sx={{
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
      height: '26vh', // 1/4 of the screen height
      backgroundColor: '#2a2929', // Optional: Add a background color
      color: 'white', // Optional: Set text color to white
      zIndex: 1000, // Optional: Set the z-index to 1000
    }}
    >
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 2,
            }}>
            <Typography className="round-btn-sml-sidebar">Talk to your Butler!</Typography>
          </Box>
          <Box sx={{ marginLeft: '12px'}}>
              <Typography fontSize='14px' color='white'>Quick Actions:</Typography>
          </Box>
          <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 12px 4px 12px' fontSize='8px' color='white'>Get me a towel.</Typography>
            </Box>
            <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 12px 4px 12px' fontSize='8px' color='white'>Get me water bottles.</Typography>
            </Box>
            <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 12px 4px 12px' fontSize='8px' color='white'>Send clothes to laundry.</Typography>
            </Box>
    </Box>
  );
};

export default SmallSidebar;