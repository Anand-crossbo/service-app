import React, { useState } from 'react';
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';
import { Box } from '@mui/material';

const mapStyles = {
  height: "100vh",
  width: "100%"
};

const defaultCenter = {
  lat: 30.51623984074734,
  lng: 76.66000104874533, // San Francisco coordinates
};

const mapOptions = {
    mapTypeId: 'hybrid',  // Set the map to satellite view
    tilt: 45,                // Enable 45-degree tilt for 3D effect          // Optional: Set heading to control the angle
    zoomControl: true,       // Enable zoom controls
    streetViewControl: false, // Disable street view control
    rotateControl: true,     // Enable rotate control for 3D view
    fullscreenControl: false,  // Allow fullscreen option
};

const locations = [
    { id:1, event: "Cricket Match", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Playground", lat: 30.5149, lng: 76.6609  },
    { id:2, event: "No-event", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Library", lat: 30.5159, lng: 76.6605 },
    { id:3, event: "Cooking Contest", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Square One",  lat: 30.5151, lng: 76.6597 },
    { id:4, event: "No-event", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Boys Hostel", lat: 30.5136, lng: 76.6611 },  
    { id:5, event: "No-event", img: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Girls Hostel", lat: 30.5149, lng: 76.6622 }
];

const MapProperty = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCHnU4jvrFbAtDbA7zSLrxrhwZRJHYMbx0",
  });

  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);

  const handleMarkerClick = (markerId: number) => {
    setActiveMarkerId(markerId === activeMarkerId ? null : markerId);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapStyles}
      zoom={18}
      center={defaultCenter}
      options={mapOptions}  // Apply the custom map options
    >
    {locations.map(location => (
        <MarkerF
        key={location.id}
        position={{ lat: location.lat, lng: location.lng }}
        // onMouseOver={() => handleMouseOver(location.id)}
        // onMouseOut={handleMouseOut}
        icon={{
            url: "https://cdn-icons-png.freepik.com/256/12602/12602470.png?semt=ais_hybrid", // URL to the custom icon
            scaledSize: new google.maps.Size(32, 32), // Scaled size of the icon
          }}
          onClick={() => handleMarkerClick(location.id)}

      >
        {activeMarkerId === location.id && (
          <InfoWindowF
            position={{ lat: location.lat, lng: location.lng }}
            onCloseClick={() => setActiveMarkerId(null)}

          >
            <Box>
            <img src={location.img} alt={location.name} style={{ width: 150, height: 100 }} />
            <h4>{location.name}</h4>
              <p>{location.event}</p>
            </Box>
          </InfoWindowF>
        )}
      </MarkerF>
      ))}
    </GoogleMap>
    // <Box>
    //   <iframe width="100%" src="https://viewer.mapme.com/85489b24-ef88-4ca4-8a8a-8b642b3e1b8c" frameborder="0" allowfullscreen allow="fullscreen; geolocation" scrolling="no" style="min-height: 90vh; max-height: 90vh; border: 1px solid lightgrey; border-radius: 2px;"></iframe>
    // </Box>
  );
};

export default MapProperty;