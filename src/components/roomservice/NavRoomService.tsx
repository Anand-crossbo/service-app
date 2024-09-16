import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NotificationsIcon from '@mui/icons-material/Notifications';


const NavRoomService = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ backgroundColor: '#c9c9c9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize={isMobile ? '10px' : '22px'} align='left'>
            Room Number - 1234
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize={isMobile ? '10px' : '22px'} sx={{ marginRight: '5px' }}>
            12:30 PM
            </Typography>
            <AccessAlarmIcon fontSize={isMobile ? 'small' : 'medium'} sx={{ color: 'black' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NotificationsIcon fontSize={isMobile ? 'small' : 'medium'} sx={{ color: 'black', marginRight: '5px' }} />
            <Typography fontSize='22px' display={isMobile ? 'none' : ''}>2 Notifications</Typography>
        </Box>
    </Box>
  )
}

export default NavRoomService