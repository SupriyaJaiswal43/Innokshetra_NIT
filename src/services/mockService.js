import { readFile } from 'fs';
import { promisify } from 'util';
import path from 'path';

const readFileAsync = promisify(readFile);

const getMockData = async (type) => {
  const filePath = path.join(__dirname, '../../mock', `${type}.json`);
  try {
    const data = await readFileAsync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading mock data:', error);
    throw error;
  }
};

export default getMockData;
