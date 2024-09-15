// src/utils/helper.js

export const getEmergencyNumber = (emergencyType) => {
    // Return the appropriate emergency number based on the type of emergency
    switch (emergencyType) {
      case 'Medical':
        return '112'; // Example
      case 'Fire':
        return '101'; // Example
      case 'Safety':
        return '1090'; // Example
      case 'Accident':
        return '112'; // Example
      default:
        return '112';
    }
  };
  