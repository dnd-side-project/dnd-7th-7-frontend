import axios from 'axios';
import getEnvVars from '@/environment';

const { GOOGLE_MAP_API_KEY } = getEnvVars();

const getAddress = async (coords) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&language=ko&key=${GOOGLE_MAP_API_KEY}`,
    );
    console.log(`getAddress API ${response.status}, ${response.data}`);
    return response.data;
  } catch (error) {
    console.log('getAddress API error: ', error.response.data);
  }
};

export default getAddress;
