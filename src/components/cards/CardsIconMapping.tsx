import LocationOnIcon from "@mui/icons-material/LocationOn";
import KingBedIcon from "@mui/icons-material/KingBed";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import WifiIcon from "@mui/icons-material/Wifi";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";


export const cardsIcon = new Map([
    ['Location', <LocationOnIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['In-Room Dining', <RoomServiceIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Activities', <KitesurfingIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Know your room', <KingBedIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Connect your device', <WifiIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Taxi Service', <LocalTaxiIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Plan your trip', <BeachAccessIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Luggage Pickup', <LuggageIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
    ['Airport Drop', <LocalAirportIcon sx={{ fontSize: "100px", color: "white", align: "center" }} />],
  
]);
  
export default cardsIcon;