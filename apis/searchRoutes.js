import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

const searchRoutes = async (lat, lon) => {
  try {
    const response = await axios.get(`${baseUrl}/running-route/searchLocation`, {
      params: {
        latitude: lat,
        longitude: lon,
      },
    });
    console.log(`searchRoutes API ${response.status}, ${response.data}`);
    return response.data;
  } catch (error) {
    console.log('searchRoutes API error: ', error.response.data);
  }
};

export default searchRoutes;
