// src/components/SafetyTracking.js
import React from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const SafetyTracking = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      <Text>Current Location:</Text>
      {location ? (
        <Text>Lat: {location.latitude}, Lon: {location.longitude}</Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
};

export default SafetyTracking;
