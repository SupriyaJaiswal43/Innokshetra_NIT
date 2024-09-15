// src/components/AccidentDetection.js
import React from 'react';
import { View, Text } from 'react-native';

const AccidentDetection = () => {
  // Mock accident detection logic
  const [accidentDetected, setAccidentDetected] = React.useState(false);

  React.useEffect(() => {
    // Simulate accident detection
    const timer = setTimeout(() => setAccidentDetected(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Text>Accident Detection:</Text>
      {accidentDetected ? (
        <Text>Accident Detected! Sending alerts...</Text>
      ) : (
        <Text>No accident detected.</Text>
      )}
    </View>
  );
};

export default AccidentDetection;
