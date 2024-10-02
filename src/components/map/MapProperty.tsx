import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader, InfoWindowF, DirectionsRenderer } from '@react-google-maps/api';
import { Box, Button, Typography } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';

const mapStyles = {
  height: "100vh",
  width: "100%"
};

const defaultCenter = {
  lat: 30.51623984074734,
  lng: 76.66000104874533,
};

const mapOptions = {
    mapTypeId: 'terrain',  
    zoomControl: false,       
    streetViewControl: false,
    rotateControl: false, 
    fullscreenControl: false, 
};

const locations = [
    { id:1, event: "Cricket Match", img: "https://images.unsplash.com/photo-1634348412446-f92b045ac0e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMGdyb3VuZHxlbnwwfHwwfHx8Mg%3D%3D", name: "Playground",icon:"https://cdn-icons-png.freepik.com/256/12401/12401661.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid", lat: 30.5149, lng: 76.6609  },
    { id:2, event: "No-event", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Library", icon:'https://cdn-icons-png.freepik.com/256/12602/12602470.png?semt=ais_hybrid', lat: 30.5159, lng: 76.6605 },
    { id:3, event: "Cooking Contest", img: "https://images.unsplash.com/photo-1430931071372-38127bd472b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D", name: "Square One",icon:'https://cdn-icons-png.freepik.com/256/9256/9256293.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid',  lat: 30.5151, lng: 76.6597 },
    { id:4, event: "No-event", img: "https://images.unsplash.com/photo-1705573369572-e30d26006707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95cyUyMGhvc3RlbHxlbnwwfHwwfHx8Mg%3D%3D", name: "Boys Hostel",icon:'https://cdn-icons-png.freepik.com/256/6435/6435093.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat: 30.5136, lng: 76.6611 },  
    { id:5, event: "No-event", img: "https://images.unsplash.com/photo-1695664488281-d7166250482d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBob3N0ZWx8ZW58MHx8MHx8fDI%3D", name: "Girls Hostel",icon:'https://cdn-icons-png.freepik.com/256/10368/10368643.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat: 30.5149, lng: 76.6622 },
    { id:6, event: "Eating Contest", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Square Two",icon:'https://cdn-icons-png.freepik.com/256/9256/9256293.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat: 30.517353871993333, lng: 76.6606575433697 },
    { id:7, event: "Badminton Contest", img: "https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZG9vciUyMHNwb3J0c3xlbnwwfHwwfHx8Mg%3D%3D", name: "Sportorium",icon:'https://cdn-icons-png.freepik.com/256/4163/4163761.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat:30.51589814562773, lng: 76.658142301481 },
    { id:8, event: "Robotics", img: "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWwlMjB3b3Jrc2hvcHxlbnwwfHwwfHx8Mg%3D%3D", name: "Mechinal workshop",icon:'https://cdn-icons-png.freepik.com/256/17590/17590925.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat: 30.515295047422516, lng: 76.65897783499618 },
    { id:9, event: "Football Match", img: "https://images.unsplash.com/photo-1627990282816-21d33cb33136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3RiYWxsJTIwZmllbGR8ZW58MHx8MHx8fDA%3D", name: "Football Field",icon:'https://cdn-icons-png.freepik.com/256/2817/2817719.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat:30.51656820534186, lng: 76.65809672064819 },
    { id:10, event: "Hackathon", img: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDI%3D", name: "Computer Labs",icon:'https://cdn-icons-png.freepik.com/256/2292/2292038.png?ga=GA1.1.238322084.1727711357&semt=ais_hybrid', lat:30.516429029379477, lng: 76.65939200454976 }
];

const MapProperty = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCHnU4jvrFbAtDbA7zSLrxrhwZRJHYMbx0",
    libraries: ['places']
  });

  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  const originRef = useRef({lat: 30.5136, lng: 76.6611})
  
  const calculateRoute = async (lat: number, lng: number) => {
    if (!originRef) {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    try {
      const results = await directionsService.route({
        origin: originRef.current,
        destination: { lat, lng },
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0]?.legs[0]?.distance?.text || '');
      setDuration(results.routes[0]?.legs[0]?.duration?.text || '');
      console.log(results);
    } catch (error) {
      console.error('Error fetching directions', error);
    }
  };

  const handleMarkerClick = (markerId: number) => {
    clearRoute();
    setActiveMarkerId(markerId === activeMarkerId ? null : markerId);
  };
  const handleDirectionsClick = (lat: number, lng: number) => {
    clearRoute();
    calculateRoute(lat, lng);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
<GoogleMap
      mapContainerStyle={mapStyles}
      zoom={17}
      center={defaultCenter}
      options={mapOptions}  // Apply the custom map options
    >
      {locations.map(location => (
        <MarkerF
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          icon={{
            url: location.icon || '', // URL to the custom icon
            scaledSize: new google.maps.Size(32, 32), // Scaled size of the icon
          }}
          onClick={() => handleMarkerClick(location.id)}
        >
          {activeMarkerId === location.id && (
            <InfoWindowF
              position={{ lat: location.lat, lng: location.lng }}
              onCloseClick={() => setActiveMarkerId(null)}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={location.img} alt={location.name} style={{ width: 150, height: 100 }} />
                <Typography fontSize={'18px'} fontWeight={'bold'} padding={'2px'}>{location.name}</Typography>
                <Typography fontSize={'14px'} padding={'2px'}>{location.event}</Typography>
                  <DirectionsIcon  onClick={() => handleDirectionsClick(location.lat, location.lng)} sx={{ padding: '5px', fontSize:'30px'}} />
                  {/* <Button variant='contained' sx={{fontSize: '12px', margin:'5px'}}  onClick={() => handleDirectionsClick(location.lat, location.lng)}>Get Directions</Button> */}
                <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <Typography fontSize={'14px'} padding={'5px'}>{distance}</Typography>
                    <Typography fontSize={'14px'} padding={'5px'}>{duration}</Typography>
                </Box>
              </Box>
            </InfoWindowF>
          )}
        </MarkerF>
      ))}
      {directionsResponse && (
        <DirectionsRenderer  directions={directionsResponse} options={{ suppressMarkers: true }} />
      )}
    </GoogleMap>
  );
};

export default MapProperty;