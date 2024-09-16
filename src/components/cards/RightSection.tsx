import { Box, Typography} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const RightSection = () => {  

  return (
        <>
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
    <Box className="glass">
      <Box>
        <WifiIcon
          sx={{ fontSize: "100px", color: "white", align: "center" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color="white" align="center">
          Connect your devices
        </Typography>
      </Box>
    </Box>
    <Box className="glass">
      <Box>
        <LocalTaxiIcon
          sx={{ fontSize: "100px", color: "white", align: "center" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color="white" align="center">
          Taxi Service
        </Typography>
      </Box>
    </Box>
    <Box className="glass">
      <Box>
        <BeachAccessIcon
          sx={{ fontSize: "100px", color: "white", align: "center" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color="white" align="center">
          Plan your trip
        </Typography>
      </Box>
    </Box>
    <Box className="glass">
      <Box>
        <LuggageIcon
          sx={{ fontSize: "100px", color: "white", align: "center" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color="white" align="center">
          Laggage Pickup
        </Typography>
      </Box>
    </Box>
    <Box className="glass">
      <Box>
        <LocalAirportIcon
          sx={{ fontSize: "100px", color: "white", align: "center" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color="white" align="center">
          Airport Drop
        </Typography>
      </Box>
    </Box>
    </>
  )
}

export default RightSection