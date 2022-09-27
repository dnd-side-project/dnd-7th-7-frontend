import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

const getPopularTags = async () => {
  try {
    const response = await axios.get(`${baseUrl}/running-route/popularTags`);
    return response.data;
    console.log(`getPopularTags API ${response.status}, ${response.data}`);
  } catch (error) {
    console.log('getPopularTags API error: ', error.response.data);
  }
};

export default getPopularTags;
