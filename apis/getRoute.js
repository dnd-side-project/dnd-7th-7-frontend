import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

const getRoute = async (id, isMain) => {
  try {
    const response = await axios.get(`${baseUrl}/running-route/${isMain ? 'main' : 'sub'}/${id}`);
    return response.data;
    console.log(`getRoute API ${response.status}, ${response.data}`);
  } catch (error) {
    console.log('getRoute API error: ', error.response.data);
  }
};

export default getRoute;
