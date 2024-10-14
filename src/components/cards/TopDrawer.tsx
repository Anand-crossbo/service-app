import React from 'react';
import { Box, SwipeableDrawer, Typography, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface TopDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const TopDrawer: React.FC<TopDrawerProps> = ({ open, onClose, onOpen }) => {

    const Puller = styled('div')(({ theme }) => ({
        width: 60,
        height: 6,
        backgroundColor: 'black',
        borderRadius: 3,
        position: 'absolute',
        bottom: 8,
        left: 'calc(50% - 30px)',
      }));
  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      PaperProps={{
        sx: {
          borderRadius: '0 0 16px 16px', // Apply border radius to the bottom corners
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Box
        sx={{
          width: 'auto',
          padding: '16px',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Room No: 101
        </Typography>
        <IconButton
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            border: "1px solid #4a4949",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: '40px',
            backgroundColor: '#ffffff',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #4a4949",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
              }}
            >
              <HomeOutlinedIcon />
            </IconButton>
            <Typography variant="caption">Home</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #4a4949",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
              }}
            >
              <HeadsetMicOutlinedIcon />
            </IconButton>
            <Typography variant="caption">Support</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #4a4949",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
              }}
            >
              <FeedOutlinedIcon />
            </IconButton>
            <Typography variant="caption">Activities</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid #4a4949",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
              }}
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <Typography variant="caption">Profile</Typography>
          </Box>
        </Box>
        <Puller />

    </SwipeableDrawer>
  );
};

export default TopDrawer;