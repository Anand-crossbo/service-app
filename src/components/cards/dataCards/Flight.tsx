import { Box, Typography } from '@mui/material'
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import React from 'react'

const Flight = () => {
  return (
    <Box className="glass">
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box>
        <ConnectingAirportsIcon
          sx={{ fontSize: 75, color: "white", paddingTop: "2px" }}
        />
      </Box>
      <Box width={75}>
        <Typography fontSize={12} align="center" color="white">
          EK 88<br></br> ZRH-DXB
        </Typography>
        <br></br>
        <Typography fontSize={12} align="center" color="white">
          On time<br></br> 2:45 PM
        </Typography>
      </Box>
    </Box>
    <Box>
      <Typography
        variant="h5"
        color="white"
        paddingTop={2}
        align="center"
      >
        Flight Schedule
      </Typography>
    </Box>
  </Box>
  )
}

export default Flight