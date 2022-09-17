import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

/**
 * 러닝 리뷰 등록 API
 * @param {formData} formData
 */
const getRoute = async (id, isMain) => {
  try {
    const result = await axios.get(`${baseUrl}/running-route/${isMain ? 'main' : 'sub'}/${id}`);
    console.log(result);
  } catch (error) {
    console.log(error.response);
  }
};

export default getRoute;
