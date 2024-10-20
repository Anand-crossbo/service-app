import React from 'react';
import { Box, SwipeableDrawer, Typography, IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';

interface TopDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const TopDrawer: React.FC<TopDrawerProps> = ({ open, onClose, onOpen }) => {

  const { t } = useTranslation();

  const Puller = styled('div')(({ theme }) => ({
    width: 60,
    height: 6,
    backgroundColor: '#9886c6',
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
          backgroundColor: 'background.default',
        },
      }}
    >
      <Box
        sx={{
          width: 'auto',
          padding: '16px',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          {t(`RoomNumber`)}: 101
        </Typography>
        <IconButton
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            // border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "50%",
            backgroundColor: "primary.main",
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{color: 'common.white'}}/>
        </IconButton>
      </Box>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: '40px',
            backgroundColor: 'background.default',
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
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                backgroundColor: "background.default",
              }}
            >
              <HomeOutlinedIcon />
            </IconButton>
            <Typography fontSize='14px'>{t(`HOME`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                backgroundColor: "background.default",
              }}
            >
              <HeadsetMicOutlinedIcon />
            </IconButton>
            <Typography fontSize='14px'>{t(`SUPPORT`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                backgroundColor: "background.default",
              }}
            >
              <FeedOutlinedIcon />
            </IconButton>
            <Typography fontSize='14px'>{t(`ACTIVITIES`)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "50%",
                backgroundColor: "background.default",
              }}
            >
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <Typography fontSize='14px'>{t(`PROFILE`)}</Typography>
          </Box>
        </Box>
        <Puller />

    </SwipeableDrawer>
  );
};

export default TopDrawer;