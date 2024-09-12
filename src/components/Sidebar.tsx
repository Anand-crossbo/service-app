import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Drawer } from '@mui/material';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <Box>
      <Drawer
        anchor="right"
        variant="persistent" // Make the drawer persistent
        open={open} // Use the state value
        sx={{ 
          zIndex: 1300,
          '& .MuiDrawer-paper': { 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change the background color here
          }
        }}
      >
        <Box
          sx={{
            width: 410, // Adjust the width as needed
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // Space between cards
            padding: 2,

          }}
        >
          <Box>
          <KeyboardDoubleArrowRightIcon 
              sx={{ 
                color: "white", 
                fontSize: 40, 
                position: "absolute", // Use absolute positioning
                top: "16px", // Adjust the top position as needed
                left: "10px", // Adjust the left position as needed
                zIndex: 1, // Ensure it overlaps the background
                cursor: "pointer" // Change the cursor to a pointer
              }}
              onClick={onClose} // Close the sidebar when clicked
            />        
            <Typography variant="h6" align='center' color='white'>
                GREEN CREDITS : +25
            </Typography>
          </Box>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 6,
            }}>
            <Typography className="round-btn-sidebar" align='center' variant='h3'>Talk to your Butler!</Typography>
          </Box>
          <Box>
            <Typography fontSize='14px' align='center' color='white'>
                Room No: 1234
            </Typography>
          </Box>
          <Box>
            <Box>
              <Typography variant="h6" color='white'>Quick Actions:</Typography>
            </Box>
            <Box>
            <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 16px 4px 16px' fontSize='16px' color='white'>Get me a towel.</Typography>
            </Box>
            <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 16px 4px 16px' fontSize='16px' color='white'>Get me water bottles.</Typography>
            </Box>
            <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.1)', borderRadius: '20px', display: 'inline-block', border: '2px solid white', margin: '8px'}}>
              <Typography padding='4px 16px 4px 16px' fontSize='16px' color='white'>Send clothes to laundry.</Typography>
            </Box>
            </Box>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', borderTopLeftRadius:'20px', borderTopRightRadius:'20px', backgroundColor:'rgba(0, 0, 0, 0.7)', justifyContent: 'space-between'}}>
            <Box sx={{ margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
              <DoNotDisturbOnIcon sx={{ color: 'white' }} />
              <Typography fontSize='14px' padding='4px' color='white'>Do Not Disturb</Typography>
            </Box>
            <Box sx={{ margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
              <LightbulbIcon sx={{ color: 'white' }} />
              <Typography fontSize='14px' padding='4px' color='white'>Light Mode</Typography>
            </Box>
            <Box sx={{ margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
              <AcUnitIcon sx={{ color: 'white' }} />
              <Typography fontSize='14px' padding='4px' color='white'>AC Control</Typography>
            </Box>
          </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;