import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

const getRoute = async (id, isMain) => {
  try {
    const result = await axios.get(`${baseUrl}/running-route/${isMain ? 'main' : 'sub'}/${id}`);
    console.log(result);
  } catch (error) {
    console.log(error.response);
  }
};

export default getRoute;
