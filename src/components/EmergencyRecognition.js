import getMockData from '../services/mockService';

export const analyzeEmergency = async (emergencyType) => {
  const data = await getMockData(emergencyType.toLowerCase());
  // Simulate emergency analysis based on mock data
  return data;
};
