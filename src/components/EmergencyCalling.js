// src/components/EmergencyCalling.js
import axios from 'axios';

export const callEmergencyServices = async (emergencyType, location, userVoiceId) => {
  const script = generateScript(emergencyType, location);

  const response = await axios.post('https://api.bland.ai/v1/calls', {
    phoneNumber: getEmergencyNumber(emergencyType),
    task: script,
    voiceId: userVoiceId,
    // Other Bland AI parameters
  });

  return response.data;
};

const generateScript = (emergencyType, location) => {
  return `This is an automated emergency call. There is a ${emergencyType} at latitude ${location.latitude}, longitude ${location.longitude}. Please send help immediately.`;
};

const getEmergencyNumber = (emergencyType) => {
  // Return the appropriate emergency number based on the type of emergency
  return '911'; // Example
};
