import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KingBedIcon from "@mui/icons-material/KingBed";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import WifiIcon from "@mui/icons-material/Wifi";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LuggageIcon from "@mui/icons-material/Luggage";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Sidebar from "./Sidebar";

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };
  return (
    <Box>
    {/* <Sidebar />  */}
    <Box
      sx={{
        position: "relative",
        padding: "20px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/staticImages/background4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: -1,
        },
      }}
    >
      <Grid container spacing={2} direction="row">
        <Grid item xs={isMobile ? 12 :2.4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                }}
              >
                <CardContent sx={{ height: "24vh" }}>
                  <Typography variant="h5" color="white">
                    12:35 PM
                  </Typography>
                  <Box
                    marginTop={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <Typography fontSize={24} color="white">
                        Dubai
                      </Typography>
                      <Typography paddingTop={1} fontSize={12} color="white">
                        25° | H:18° L:9°
                      </Typography>
                    </Box>
                    <Box>
                      <WbSunnyIcon
                        sx={{ fontSize: 35, color: "white", paddingTop: "2px" }}
                      />
                      <Typography fontSize={14} align="right" color="white">
                        Sunny
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    marginTop={2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <Typography fontSize={14} color="white">
                        SUNRISE
                      </Typography>
                      <Typography fontSize={18} color="white">
                        5:45AM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography fontSize={14} align="right" color="white">
                        SUNSET
                      </Typography>
                      <Typography fontSize={18} align="right" color="white">
                        6:42PM
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "24vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: 100,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Location
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "24vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <KingBedIcon
                      sx={{
                        fontSize: 100,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Know your room
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={isMobile? 12 :4.8}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={isMobile ? 12 : 6}>
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "10px",
                      zIndex: 1,
                    }}
                  >
                    <CardContent sx={{ height: "24vh" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          zIndex: "2",
                        }}
                      >
                        <RoomServiceIcon
                          sx={{
                            fontSize: 100,
                            color: "white",
                            align: "center",
                            paddingTop: "2px",
                          }}
                        />
                        <Typography
                          variant="h5"
                          color="white"
                          paddingTop={2}
                          align="center"
                        >
                          In Room Service
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={isMobile ? 12 :6}>
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "10px",
                      zIndex: 1,
                    }}
                  >
                    <CardContent sx={{ height: "24vh" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                          zIndex: "2",
                        }}
                      >
                        <KitesurfingIcon
                          sx={{
                            fontSize: 100,
                            color: "white",
                            align: "center",
                            paddingTop: "2px",
                          }}
                        />
                        <Typography
                          variant="h5"
                          color="white"
                          paddingTop={2}
                          align="center"
                        >
                          Activities
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  position: "relative",
                  background: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.634)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  backgroundImage: "url(/staticImages/spa.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  },
                }}
              >
                <CardContent
                  sx={{
                    height: "56vh",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h4" color="white" zIndex={3}>
                    25% off for your spa appointment today
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={isMobile ? 12 :2.4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent
                  sx={{
                    height: "24vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                    </Typography>{" "}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "24vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <BeachAccessIcon
                      sx={{
                        fontSize: 100,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Plan your summers
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "24vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <WifiIcon
                      sx={{
                        fontSize: 100,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Wi-Fi
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={isMobile ? 12 :2.4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "16vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <ContentCutIcon
                      sx={{
                        fontSize: 50,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Salon
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "16vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <LocalAirportIcon
                      sx={{
                        fontSize: 50,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Airport drop
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "16vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <LuggageIcon
                      sx={{
                        fontSize: 50,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Luggage Pickup
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  zIndex: 1,
                }}
              >
                <CardContent sx={{ height: "16vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      zIndex: "2",
                    }}
                  >
                    <LocalTaxiIcon
                      sx={{
                        fontSize: 50,
                        color: "white",
                        align: "center",
                        paddingTop: "2px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      color="white"
                      paddingTop={2}
                      align="center"
                    >
                      Taxi Service
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Cards;
